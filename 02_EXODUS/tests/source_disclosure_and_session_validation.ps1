$ErrorActionPreference = "Stop"
. "$PSScriptRoot/validation_harness.ps1"

Push-Location (Join-Path $PSScriptRoot "..\..")
try {
  Assert-FileExists -Path "02_EXODUS/runtime/policy/policy_enforcer.js"
  Assert-FileExists -Path "02_EXODUS/runtime/services/grounded_answer_service.js"
  Assert-FileExists -Path "02_EXODUS/runtime/session/session_store.js"
  Assert-FileExists -Path "02_EXODUS/runtime/surface/chat_app.js"

  $nodeScript = @'
"use strict";

const path = require("node:path");
const fromRoot = (relativePath) => path.join(process.cwd(), relativePath);

const { buildQueryPayload } = require(fromRoot("02_EXODUS/runtime/surface/chat_app.js"));
const { enforceWorkflowPolicy } = require(fromRoot("02_EXODUS/runtime/policy/policy_enforcer.js"));
const { assembleGroundedAnswer } = require(fromRoot("02_EXODUS/runtime/services/grounded_answer_service.js"));
const { saveSession, SAVE_POLICY } = require(fromRoot("02_EXODUS/runtime/session/session_store.js"));

function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

function sampleAuthorities() {
  return [
    {
      stable_source_identity: "tier2:src-77",
      metadata: {
        tier: "TIER2",
        source_id: "SRC-77",
        parent_id: "PARENT-77",
        chunk_index: 7
      },
      authority: {
        markdown: "Authority excerpt for disclosure behavior."
      }
    }
  ];
}

async function main() {
  const payloadWithoutSources = buildQueryPayload("Disclosure off", false);
  const policyWithoutSources = enforceWorkflowPolicy({
    model: {
      configured_model: "fixed-local-model",
      requested_model: "fixed-local-model"
    },
    lexicon: {
      narrowing_terms: []
    },
    disclosure: payloadWithoutSources
  });
  assert(policyWithoutSources.disclosure.disclose_sources === false, "Disclosure should be disabled when not requested.");

  const payloadWithSources = buildQueryPayload("Disclosure on", true);
  const policyWithSources = enforceWorkflowPolicy({
    model: {
      configured_model: "fixed-local-model",
      requested_model: "fixed-local-model"
    },
    lexicon: {
      narrowing_terms: []
    },
    disclosure: payloadWithSources
  });
  assert(policyWithSources.disclosure.disclose_sources === true, "Disclosure should be enabled when requested.");

  const authorities = sampleAuthorities();
  const undisclosedAnswer = await assembleGroundedAnswer(
    {
      question: "Provide response without source disclosure.",
      resolved_authorities: authorities,
      disclose_sources: false
    },
    {
      chatClient: async () => ({
        output_text: "Stubbed answer content."
      })
    }
  );
  assert(Array.isArray(undisclosedAnswer.sources) && undisclosedAnswer.sources.length === 0, "Sources leaked without request.");

  const disclosedAnswer = await assembleGroundedAnswer(
    {
      question: "Provide response with source disclosure.",
      resolved_authorities: authorities,
      disclose_sources: true
    },
    {
      chatClient: async () => ({
        output_text: "Stubbed answer content."
      })
    }
  );
  assert(Array.isArray(disclosedAnswer.sources) && disclosedAnswer.sources.length === 1, "Source disclosure did not return sources.");
  assert(disclosedAnswer.sources[0].source_id === "SRC-77", "Incorrect disclosed source metadata.");

  const blockedSave = await saveSession(
    { messages: [{ role: "user", content: "do not save" }] },
    {
      userTriggered: false,
      persist: async () => {
        throw new Error("Persist callback should not run when userTriggered is false.");
      }
    }
  );
  assert(blockedSave.persisted === false, "Session should not persist without user trigger.");
  assert(String(blockedSave.reason || "").includes(SAVE_POLICY), "Blocked save reason missing policy anchor.");

  let persistedSnapshot = null;
  const successfulSave = await saveSession(
    { messages: [{ role: "user", content: "save now" }] },
    {
      userTriggered: true,
      persist: async (snapshot) => {
        persistedSnapshot = snapshot;
      }
    }
  );
  assert(successfulSave.persisted === true, "Session should persist when user-triggered.");
  assert(Boolean(persistedSnapshot), "Persist callback did not receive snapshot.");
  assert(persistedSnapshot.save_policy === SAVE_POLICY, "Persisted snapshot missing save policy anchor.");
}

main()
  .then(() => {
    console.log("PASS");
  })
  .catch((error) => {
    console.error(`FAIL: ${error.message}`);
    process.exit(1);
  });
'@

  Invoke-NodeInline -Script $nodeScript -Description "source disclosure and session validation"
  Write-Output "PASS"
  exit 0
} finally {
  Pop-Location
}
