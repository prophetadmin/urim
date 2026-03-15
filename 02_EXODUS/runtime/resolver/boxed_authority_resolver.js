"use strict";

const {
  normalizeRetrievalHits
} = require("../workflow/retrieval_metadata_normalizer");
const { readBoxedAuthority } = require("../data/boxed_authority_reader");

const RESOLVER_CONTINUITY_RULE = "stable_source_identity";

function toStableSourceIdentity(tier, sourceId) {
  return `${String(tier).toLowerCase()}:${String(sourceId)}`;
}

async function resolveOneHit(hit, options = {}) {
  const authority = await readBoxedAuthority(hit, options);
  return {
    stable_source_identity: toStableSourceIdentity(hit.tier, hit.source_id),
    metadata: hit,
    authority
  };
}

async function resolveAuthorityFromHits(hits, options = {}) {
  const normalizedHits = normalizeRetrievalHits(hits);
  const resolved = [];

  for (const hit of normalizedHits) {
    resolved.push(await resolveOneHit(hit, options));
  }

  return {
    continuity_rule: RESOLVER_CONTINUITY_RULE,
    results: resolved
  };
}

module.exports = {
  RESOLVER_CONTINUITY_RULE,
  toStableSourceIdentity,
  resolveAuthorityFromHits
};
