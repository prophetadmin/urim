$ErrorActionPreference = "Stop"
. "$PSScriptRoot/validation_harness.ps1"

Push-Location (Join-Path $PSScriptRoot "..\..")
try {
  Assert-FileExists -Path "02_EXODUS/runtime/surface/chat_app.js"
  Assert-FileExists -Path "02_EXODUS/runtime/workflow/query_orchestrator.js"

  $nodeScript = @'
"use strict";

const path = require("node:path");
const fromRoot = (relativePath) => path.join(process.cwd(), relativePath);

const { buildQueryPayload, toUiAnswer } = require(fromRoot("02_EXODUS/runtime/surface/chat_app.js"));
const { runGroundedQuery, RETRIEVAL_ROLE } = require(fromRoot("02_EXODUS/runtime/workflow/query_orchestrator.js"));

function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

async function main() {
  const payload = buildQueryPayload("What does the authority say?", true);
  const result = await runGroundedQuery(
    {
      ...payload,
      configured_model: "fixed-local-model",
      requested_model: "fixed-local-model"
    },
    {
      embeddingClient: async (question) => {
        assert(question === payload.question, "Question was not forwarded to embedding.");
        return [0.1, 0.2, 0.3];
      },
      qdrantClient: async (embedding) => {
        assert(Array.isArray(embedding) && embedding.length === 3, "Embedding vector was not forwarded.");
        return [
          {
            id: "point-1",
            score: 0.98,
            payload: {
              tier: "TIER2",
              source_id: "SRC-001",
              parent_id: "PARENT-ROOT",
              chunk_index: 0
            }
          }
        ];
      },
      resolver: async (hits) => ({
        results: hits.map((hit) => ({
          stable_source_identity: `${String(hit.tier).toLowerCase()}:${hit.source_id}`,
          metadata: hit,
          authority: {
            markdown: "Authoritative markdown excerpt."
          }
        }))
      }),
      answerService: async (input) => ({
        answer: `Grounded answer for: ${input.question}`,
        support_state: input.resolved_authorities.length === 1 ? "weak" : "insufficient",
        sources: input.disclose_sources
          ? input.resolved_authorities.map((item) => ({
              stable_source_identity: item.stable_source_identity,
              tier: item.metadata.tier,
              source_id: item.metadata.source_id
            }))
          : []
      })
    }
  );

  assert(RETRIEVAL_ROLE === "vector_locator_only", "Retrieval role constant drifted.");
  assert(result.retrieval_role === "vector_locator_only", "Workflow did not preserve locator-only retrieval role.");
  assert(Array.isArray(result.resolved_authorities) && result.resolved_authorities.length === 1, "Resolver results missing.");

  const uiAnswer = toUiAnswer(result);
  assert(uiAnswer.answer.includes("Grounded answer"), "UI answer mapping failed.");
  assert(uiAnswer.support_state === "weak", "Support state not propagated to UI.");
  assert(Array.isArray(uiAnswer.sources) && uiAnswer.sources[0] === "TIER2:SRC-001", "Source disclosure mapping failed.");
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

  Invoke-NodeInline -Script $nodeScript -Description "e2e grounded query validation"
  Write-Output "PASS"
  exit 0
} finally {
  Pop-Location
}
