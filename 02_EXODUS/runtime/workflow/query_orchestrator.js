"use strict";

const { createEmbedding } = require("../integrations/embedding_client");
const { searchNearestNeighbors } = require("../integrations/qdrant_client");
const {
  normalizeRetrievalHits
} = require("./retrieval_metadata_normalizer");
const {
  resolveAuthorityFromHits
} = require("../resolver/boxed_authority_resolver");
const { enforceWorkflowPolicy } = require("../policy/policy_enforcer");
const { assembleGroundedAnswer } = require("../services/grounded_answer_service");

const RETRIEVAL_ROLE = "vector_locator_only";

async function runGroundedQuery(queryInput = {}, options = {}) {
  const question = String(queryInput.question || "").trim();
  if (!question) {
    throw new Error("Question is required.");
  }

  const embeddingClient = options.embeddingClient || createEmbedding;
  const qdrantClient = options.qdrantClient || searchNearestNeighbors;
  const resolver = options.resolver || resolveAuthorityFromHits;
  const answerService = options.answerService || assembleGroundedAnswer;

  const embedding = await embeddingClient(question, options.embeddingOptions || {});
  const hits = await qdrantClient(embedding, options.retrievalOptions || {});
  const normalizedHits = normalizeRetrievalHits(hits);

  const policy = enforceWorkflowPolicy({
    model: {
      configured_model: queryInput.configured_model || null,
      requested_model: queryInput.requested_model || null
    },
    lexicon: {
      narrowing_terms: queryInput.lexicon_terms || []
    },
    disclosure: {
      source_disclosure_request: queryInput.source_disclosure_request === true
    }
  });

  const resolved = await resolver(normalizedHits, options.resolutionOptions || {});
  const answer = await answerService(
    {
      question,
      resolved_authorities: resolved.results,
      disclose_sources: policy.disclosure.disclose_sources
    },
    options.answerOptions || {}
  );

  return {
    retrieval_role: RETRIEVAL_ROLE,
    retrieval_hits: normalizedHits,
    resolved_authorities: resolved.results,
    policy,
    answer
  };
}

module.exports = {
  RETRIEVAL_ROLE,
  runGroundedQuery
};
