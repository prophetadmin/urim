"use strict";

// Required retrieval metadata fields: tier, source_id, parent_id, chunk_index

function getRequiredMetadata(payload) {
  return {
    tier: payload?.tier,
    source_id: payload?.source_id,
    parent_id: payload?.parent_id,
    chunk_index: payload?.chunk_index
  };
}

function validateRequiredMetadata(metadata) {
  const missing = Object.entries(metadata)
    .filter(([, value]) => value === undefined || value === null || value === "")
    .map(([key]) => key);

  if (missing.length > 0) {
    throw new Error(`Retrieval hit is missing required metadata: ${missing.join(", ")}`);
  }
}

function normalizeRetrievalHit(hit, rank = 0) {
  if (!hit || typeof hit !== "object") {
    throw new Error("Retrieval hit must be an object.");
  }

  const payload = hit.payload && typeof hit.payload === "object" ? hit.payload : hit;
  const metadata = getRequiredMetadata(payload);
  validateRequiredMetadata(metadata);

  return {
    rank,
    point_id: hit.id ?? null,
    score: typeof hit.score === "number" ? hit.score : null,
    tier: String(metadata.tier),
    source_id: String(metadata.source_id),
    parent_id: String(metadata.parent_id),
    chunk_index: Number(metadata.chunk_index)
  };
}

function normalizeRetrievalHits(hits) {
  if (!Array.isArray(hits)) {
    throw new Error("Retrieval hits must be an array.");
  }

  return hits.map((hit, index) => normalizeRetrievalHit(hit, index));
}

module.exports = {
  getRequiredMetadata,
  validateRequiredMetadata,
  normalizeRetrievalHit,
  normalizeRetrievalHits
};
