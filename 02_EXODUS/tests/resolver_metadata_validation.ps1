$ErrorActionPreference = "Stop"
. "$PSScriptRoot/validation_harness.ps1"

Push-Location (Join-Path $PSScriptRoot "..\..")
try {
  Assert-FileExists -Path "02_EXODUS/runtime/workflow/retrieval_metadata_normalizer.js"
  Assert-FileExists -Path "02_EXODUS/runtime/resolver/boxed_authority_resolver.js"
  Assert-FileExists -Path "02_EXODUS/runtime/data/boxed_authority_reader.js"

  $nodeScript = @'
"use strict";

const fs = require("node:fs");
const os = require("node:os");
const path = require("node:path");
const fromRoot = (relativePath) => path.join(process.cwd(), relativePath);

function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

async function main() {
  const storageRoot = fs.mkdtempSync(path.join(os.tmpdir(), "urim-boxed-"));
  const sourceId = "SRC-900";
  const sourceDir = path.win32.join(storageRoot, "Tier2", sourceId);
  fs.mkdirSync(sourceDir, { recursive: true });
  fs.writeFileSync(path.win32.join(sourceDir, `${sourceId}.md`), "# Boxed authority\nMetadata is consumed.");
  fs.writeFileSync(path.win32.join(sourceDir, `${sourceId}.meta.json`), JSON.stringify({ source_id: sourceId, tier: "TIER2" }));
  fs.writeFileSync(path.win32.join(sourceDir, `${sourceId}.sha256`), "abc123");

  process.env.BOXED_STORAGE_ROOT = storageRoot;

  const { normalizeRetrievalHits } = require(fromRoot("02_EXODUS/runtime/workflow/retrieval_metadata_normalizer.js"));
  const {
    resolveAuthorityFromHits,
    RESOLVER_CONTINUITY_RULE
  } = require(fromRoot("02_EXODUS/runtime/resolver/boxed_authority_resolver.js"));
  const { buildAuthorityPaths } = require(fromRoot("02_EXODUS/runtime/data/boxed_authority_reader.js"));

  const hits = [
    {
      id: "point-900",
      score: 0.99,
      payload: {
        tier: "TIER2",
        source_id: sourceId,
        parent_id: "PARENT-900",
        chunk_index: 5
      }
    }
  ];

  const normalized = normalizeRetrievalHits(hits);
  assert(normalized.length === 1, "Expected one normalized hit.");
  assert(normalized[0].tier === "TIER2", "tier metadata not normalized.");
  assert(normalized[0].source_id === sourceId, "source_id metadata not normalized.");
  assert(normalized[0].parent_id === "PARENT-900", "parent_id metadata not normalized.");
  assert(normalized[0].chunk_index === 5, "chunk_index metadata not normalized.");

  let missingMetadataBlocked = false;
  try {
    normalizeRetrievalHits([{ payload: { tier: "TIER2", source_id: "BROKEN" } }]);
  } catch (error) {
    missingMetadataBlocked = String(error.message).includes("missing required metadata");
  }
  assert(missingMetadataBlocked, "Missing required metadata should fail normalization.");

  const resolved = await resolveAuthorityFromHits(hits);
  assert(resolved.continuity_rule === RESOLVER_CONTINUITY_RULE, "Resolver continuity rule mismatch.");
  assert(resolved.results.length === 1, "Expected one resolved authority result.");
  assert(resolved.results[0].stable_source_identity === "tier2:SRC-900", "Stable source identity mismatch.");
  assert(resolved.results[0].metadata.parent_id === "PARENT-900", "Resolver did not carry parent_id metadata.");
  assert(resolved.results[0].metadata.chunk_index === 5, "Resolver did not carry chunk_index metadata.");
  assert(resolved.results[0].authority.markdown.includes("Boxed authority"), "Resolver did not read boxed authority markdown.");

  const expectedPaths = buildAuthorityPaths({ tier: "TIER2", source_id: sourceId }, { storageRoot });
  assert(resolved.results[0].authority.paths.markdownPath === expectedPaths.markdownPath, "Markdown path mapping mismatch.");
  assert(resolved.results[0].authority.paths.metaPath === expectedPaths.metaPath, "Meta path mapping mismatch.");
  assert(resolved.results[0].authority.paths.checksumPath === expectedPaths.checksumPath, "Checksum path mapping mismatch.");

  fs.rmSync(storageRoot, { recursive: true, force: true });
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

  Invoke-NodeInline -Script $nodeScript -Description "resolver metadata validation"
  Write-Output "PASS"
  exit 0
} finally {
  Pop-Location
}
