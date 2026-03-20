"use strict";

const { requestChatCompletion } = require("../integrations/chat_api_client");

function classifySupportState(resolvedAuthorities = []) {
  const count = Array.isArray(resolvedAuthorities) ? resolvedAuthorities.length : 0;
  if (count >= 4) {
    return "strong";
  }
  if (count >= 2) {
    return "partial";
  }
  if (count === 1) {
    return "weak";
  }
  return "insufficient";
}

function clip(text, maxChars) {
  const value = String(text || "");
  if (value.length <= maxChars) {
    return value;
  }
  return `${value.slice(0, maxChars)}\n...[truncated]`;
}

function buildGroundedPrompt(question, resolvedAuthorities = []) {
  const authorityContent = resolvedAuthorities
    .slice(0, 3)
    .map((item, index) => {
      const identity = item?.stable_source_identity || `source-${index + 1}`;
      const markdown = clip(item?.authority?.markdown || "", 2500);
      return `Source ${index + 1} (${identity}):\n${markdown}`;
    })
    .join("\n\n");

  return [
    "Use only the provided authority excerpts to answer.",
    "If the excerpts are insufficient, say so.",
    `Question: ${question}`,
    "",
    "Authority excerpts:",
    authorityContent || "No authority excerpts available."
  ].join("\n");
}

async function assembleGroundedAnswer(input = {}, options = {}) {
  const question = String(input.question || "").trim();
  if (!question) {
    throw new Error("Question is required for grounded answer assembly.");
  }

  const resolvedAuthorities = Array.isArray(input.resolved_authorities)
    ? input.resolved_authorities
    : [];
  const supportState = classifySupportState(resolvedAuthorities);

  const completionClient = options.chatClient || requestChatCompletion;
  const completion = await completionClient(
    {
      model: "model.gguf",
      prompt: buildGroundedPrompt(question, resolvedAuthorities),
      max_tokens: 400
    },
    options.chatOptions || {}
  );

  const answerText =
    completion?.choices?.[0]?.text ||
    completion?.output_text ||
    "";

  const sourceDisclosure = input.disclose_sources === true;
  return {
    answer: String(answerText),
    support_state: supportState,
    sources: sourceDisclosure
      ? resolvedAuthorities.map((item) => ({
          stable_source_identity: item.stable_source_identity,
          tier: item?.metadata?.tier || null,
          source_id: item?.metadata?.source_id || null
        }))
      : []
  };
}

module.exports = {
  classifySupportState,
  buildGroundedPrompt,
  assembleGroundedAnswer
};