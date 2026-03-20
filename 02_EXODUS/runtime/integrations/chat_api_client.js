"use strict";

const DEFAULT_CHAT_API_BASE_URL =
  process.env.LOCAL_CHAT_API_BASE_URL || "http://127.0.0.1:8081";
const DEFAULT_COMPLETIONS_PATH = "/v1/completions";

function buildCompletionsUrl(baseUrl = DEFAULT_CHAT_API_BASE_URL) {
  return new URL(DEFAULT_COMPLETIONS_PATH, `${baseUrl}/`).toString();
}

async function requestChatCompletion(payload, options = {}) {
  const fetchImpl = options.fetchImpl || globalThis.fetch;
  if (typeof fetchImpl !== "function") {
    throw new Error("Fetch implementation is required for chat API requests.");
  }

  const url = buildCompletionsUrl(options.baseUrl);
  const requestBody = JSON.stringify(payload || {});
  console.log("COMPLETIONS PAYLOAD SIZE", requestBody.length);

  const response = await fetchImpl(url, {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: requestBody
  });

  if (!response.ok) {
    const errorText = await response.text();
    console.error("COMPLETIONS ERROR BODY", errorText);
    throw new Error(
      `Chat API request failed with status ${response.status} at ${url}`
    );
  }

  return response.json();
}

module.exports = {
  DEFAULT_CHAT_API_BASE_URL,
  DEFAULT_COMPLETIONS_PATH,
  buildCompletionsUrl,
  requestChatCompletion
};