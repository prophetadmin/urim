"use strict";

const DEFAULT_QDRANT_API_BASE_URL =
  process.env.LOCAL_QDRANT_API_BASE_URL || "http://127.0.0.1:6333";
const REQUIRED_QDRANT_COLLECTION = "emb_v2_nomic_embed_text_v1_5_f16_768";

function buildQdrantSearchUrl(
  collection = REQUIRED_QDRANT_COLLECTION,
  baseUrl = DEFAULT_QDRANT_API_BASE_URL
) {
  const path = `/collections/${encodeURIComponent(collection)}/points/search`;
  return new URL(path, `${baseUrl}/`).toString();
}

async function searchNearestNeighbors(embedding, options = {}) {
  if (!Array.isArray(embedding) || embedding.length === 0) {
    throw new Error("Embedding vector is required for Qdrant search.");
  }

  const fetchImpl = options.fetchImpl || globalThis.fetch;
  if (typeof fetchImpl !== "function") {
    throw new Error("Fetch implementation is required for Qdrant requests.");
  }

  const url = buildQdrantSearchUrl(options.collection, options.baseUrl);
  const response = await fetchImpl(url, {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify({
      vector: embedding,
      limit: options.limit || 8,
      with_payload: true
    })
  });

  if (!response.ok) {
    throw new Error(
      `Qdrant search failed with status ${response.status} at ${url}`
    );
  }

  const payload = await response.json();
  const result = payload?.result;
  if (!Array.isArray(result)) {
    throw new Error("Qdrant search response did not include result hits.");
  }

  return result;
}

module.exports = {
  DEFAULT_QDRANT_API_BASE_URL,
  REQUIRED_QDRANT_COLLECTION,
  buildQdrantSearchUrl,
  searchNearestNeighbors
};
