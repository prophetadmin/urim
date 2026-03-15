"use strict";

const fs = require("node:fs/promises");
const path = require("node:path");

const DEFAULT_BOXED_STORAGE_ROOT = process.env.BOXED_STORAGE_ROOT || "D:\\boxed";
const SUPPORTED_TIERS = {
  TIERL_EB: "TierL_EB",
  TIER2: "Tier2"
};

// Canonical lookup pattern: D:\\boxed\\TierL_EB\\<source_id>\\<source_id>.md
// Canonical lookup pattern: D:\\boxed\\Tier2\\<source_id>\\<source_id>.md
// Required sidecars: <source_id>.meta.json and <source_id>.sha256

function normalizeTier(tier) {
  const normalized = String(tier || "").trim().toUpperCase();
  if (normalized in SUPPORTED_TIERS) {
    return SUPPORTED_TIERS[normalized];
  }

  throw new Error(`Unsupported boxed authority tier: ${tier}`);
}

function buildAuthorityPaths(metadata, options = {}) {
  const tier = normalizeTier(metadata?.tier);
  const sourceId = String(metadata?.source_id || "").trim();
  if (!sourceId) {
    throw new Error("source_id is required for boxed authority lookup.");
  }

  const root = options.storageRoot || DEFAULT_BOXED_STORAGE_ROOT;
  const basePath = path.win32.join(root, tier, sourceId);
  return {
    markdownPath: path.win32.join(basePath, `${sourceId}.md`),
    metaPath: path.win32.join(basePath, `${sourceId}.meta.json`),
    checksumPath: path.win32.join(basePath, `${sourceId}.sha256`)
  };
}

async function readBoxedAuthority(metadata, options = {}) {
  const paths = buildAuthorityPaths(metadata, options);
  const [markdown, metaRaw, checksum] = await Promise.all([
    fs.readFile(paths.markdownPath, "utf8"),
    fs.readFile(paths.metaPath, "utf8"),
    fs.readFile(paths.checksumPath, "utf8")
  ]);

  return {
    tier: normalizeTier(metadata.tier),
    source_id: String(metadata.source_id),
    markdown,
    sidecars: {
      meta: JSON.parse(metaRaw),
      sha256: checksum.trim()
    },
    paths
  };
}

module.exports = {
  DEFAULT_BOXED_STORAGE_ROOT,
  SUPPORTED_TIERS,
  normalizeTier,
  buildAuthorityPaths,
  readBoxedAuthority
};
