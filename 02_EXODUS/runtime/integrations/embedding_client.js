"use strict";

const DEFAULT_EMBEDDING_API_BASE_URL =
  process.env.LOCAL_EMBEDDING_API_BASE_URL || "http://127.0.0.1:8084";
const EMBEDDING_ENDPOINT_PATH = "/embedding";

function buildEmbeddingUrl(baseUrl = DEFAULT_EMBEDDING_API_BASE_URL) {
  return new URL(EMBEDDING_ENDPOINT_PATH, `${baseUrl}/`).toString();
}

function extractEmbeddingVector(payload) {
  const candidates = [
    payload?.embedding,
    payload?.data?.[0]?.embedding,
    payload?.value?.[0]?.embedding?.[0],
    payload?.value?.[0]?.embedding,
    payload?.[0]?.embedding?.[0],
    payload?.[0]?.embedding
  ];

  for (const candidate of candidates) {
    if (
      Array.isArray(candidate) &&
      candidate.length > 0 &&
      typeof candidate[0] === "number"
    ) {
      return candidate;
    }
  }

  throw new Error("Embedding response did not include an embedding vector.");
}

async function createEmbedding(text, options = {}) {
  const fetchImpl = options.fetchImpl || globalThis.fetch;
  if (typeof fetchImpl !== "function") {
    throw new Error("Fetch implementation is required for embedding requests.");
  }

  const url = buildEmbeddingUrl(options.baseUrl);
  const response = await fetchImpl(url, {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify({ content: text })
  });

  if (!response.ok) {
    throw new Error(
      `Embedding request failed with status ${response.status} at ${url}`
    );
  }

  const payload = await response.json();
  return extractEmbeddingVector(payload);
}

module.exports = {
  DEFAULT_EMBEDDING_API_BASE_URL,
  EMBEDDING_ENDPOINT_PATH,
  buildEmbeddingUrl,
  createEmbedding
};