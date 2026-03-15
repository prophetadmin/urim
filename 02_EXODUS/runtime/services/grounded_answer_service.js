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

function buildGroundedPrompt(question, resolvedAuthorities = []) {
  const authorityContent = resolvedAuthorities
    .map((item, index) => {
      const identity = item?.stable_source_identity || `source-${index + 1}`;
      const markdown = item?.authority?.markdown || "";
      return `Source ${index + 1} (${identity}):\n${markdown}`;
    })
    .join("\n\n");

  // The answer basis is resolved authority content, never payload-only retrieval text.
  return [
    "Use only the provided authority excerpts to answer.",
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

  const chatClient = options.chatClient || requestChatCompletion;
  const completion = await chatClient(
    {
      messages: [
        {
          role: "user",
          content: buildGroundedPrompt(question, resolvedAuthorities)
        }
      ]
    },
    options.chatOptions || {}
  );

  const answerText =
    completion?.choices?.[0]?.message?.content ||
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
