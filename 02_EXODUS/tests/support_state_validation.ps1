$ErrorActionPreference = "Stop"
. "$PSScriptRoot/validation_harness.ps1"

Push-Location (Join-Path $PSScriptRoot "..\..")
try {
  Assert-FileExists -Path "02_EXODUS/runtime/services/grounded_answer_service.js"

  $nodeScript = @'
"use strict";

const path = require("node:path");
const fromRoot = (relativePath) => path.join(process.cwd(), relativePath);

const {
  classifySupportState,
  assembleGroundedAnswer
} = require(fromRoot("02_EXODUS/runtime/services/grounded_answer_service.js"));

function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

function makeAuthorities(count) {
  const values = [];
  for (let index = 0; index < count; index += 1) {
    values.push({
      stable_source_identity: `tier2:src-${index + 1}`,
      metadata: {
        tier: "TIER2",
        source_id: `SRC-${index + 1}`,
        parent_id: "PARENT",
        chunk_index: index
      },
      authority: {
        markdown: `Excerpt ${index + 1}`
      }
    });
  }
  return values;
}

async function validateSupportState(count, expected) {
  const authorities = makeAuthorities(count);
  const answer = await assembleGroundedAnswer(
    {
      question: "Validate support state behavior.",
      resolved_authorities: authorities,
      disclose_sources: false
    },
    {
      chatClient: async () => ({
        output_text: "Stubbed grounded response."
      })
    }
  );

  assert(answer.support_state === expected, `Expected ${expected}, got ${answer.support_state}.`);
  assert(Array.isArray(answer.sources) && answer.sources.length === 0, "Sources should not disclose without request.");
}

async function main() {
  assert(classifySupportState(makeAuthorities(0)) === "insufficient", "insufficient classification mismatch.");
  assert(classifySupportState(makeAuthorities(1)) === "weak", "weak classification mismatch.");
  assert(classifySupportState(makeAuthorities(2)) === "partial", "partial classification mismatch.");
  assert(classifySupportState(makeAuthorities(4)) === "strong", "strong classification mismatch.");

  await validateSupportState(0, "insufficient");
  await validateSupportState(1, "weak");
  await validateSupportState(2, "partial");
  await validateSupportState(4, "strong");
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

  Invoke-NodeInline -Script $nodeScript -Description "support state validation"
  Write-Output "PASS"
  exit 0
} finally {
  Pop-Location
}
