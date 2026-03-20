"use strict";
const QUERY_RESULT_MESSAGE = "urim:query-result";

function asArray(value) {
  return Array.isArray(value) ? value : [];
}

function formatSources(sources) {
  return asArray(sources).map((source) => {
    const tier = source?.tier || "unknown-tier";
    const sourceId = source?.source_id || "unknown-source";
    return `${tier}:${sourceId}`;
  });
}

function buildQueryPayload(question, requestSources) {
  return {
    question: String(question || "").trim(),
    source_disclosure_request: requestSources === true
  };
}

function toUiAnswer(workflowResult = {}) {
  const answerPayload = workflowResult?.answer || {};
  return {
    answer: String(answerPayload.answer || ""),
    support_state: String(answerPayload.support_state || "insufficient"),
    sources: formatSources(answerPayload.sources)
  };
}

function appendLog(logElement, text) {
  logElement.textContent = `${logElement.textContent}${text}\n`;
  logElement.scrollTop = logElement.scrollHeight;
}

function publishQueryResult(result = {}) {
  if (typeof window === "undefined") {
    return;
  }

  const answer = result?.answer || {};
  const payload = {
    type: QUERY_RESULT_MESSAGE,
    support_state: String(answer.support_state || "insufficient"),
    answer: String(answer.answer || ""),
    sources: Array.isArray(answer.sources) ? answer.sources : []
  };

  window.dispatchEvent(new CustomEvent(QUERY_RESULT_MESSAGE, { detail: payload }));
  if (window.parent && window.parent !== window) {
    window.parent.postMessage(payload, "*");
  }
}

function createRuntimeBridge(options = {}) {
  if (typeof options.runGroundedQuery === "function") {
    return options.runGroundedQuery;
  }

  if (typeof window !== "undefined" && typeof window.runGroundedQuery === "function") {
    return window.runGroundedQuery;
  }

  return async function unavailableRuntime() {
    throw new Error("runGroundedQuery runtime is not available.");
  };
}

function createSessionStoreBridge(options = {}) {
  if (typeof options.saveSession === "function") {
    return options.saveSession;
  }

  if (typeof window !== "undefined" && typeof window.saveSession === "function") {
    return window.saveSession;
  }

  return async function noopSessionSave() {
    return { persisted: false };
  };
}

function attachChatApp(options = {}) {
  if (typeof document === "undefined") {
    return { attached: false };
  }

  const askButton = document.getElementById("ask-button");
  const saveButton = document.getElementById("save-session-button");
  const questionInput = document.getElementById("question-input");
  const sourceToggle = document.getElementById("source-toggle");
  const logElement = document.getElementById("chat-log");
  const statusElement = document.getElementById("status");

  if (!askButton || !saveButton || !questionInput || !sourceToggle || !logElement || !statusElement) {
    return { attached: false };
  }

  const runGroundedQuery = createRuntimeBridge(options);
  const saveSession = createSessionStoreBridge(options);
  const transcript = [];

  askButton.addEventListener("click", async () => {
    const payload = buildQueryPayload(questionInput.value, sourceToggle.checked);
    if (!payload.question) {
      statusElement.textContent = "Question is required.";
      return;
    }

    statusElement.textContent = "Running grounded query...";
    appendLog(logElement, `USER: ${payload.question}`);
    transcript.push({ role: "user", content: payload.question });

    try {
      const result = await runGroundedQuery(payload);
      const uiAnswer = toUiAnswer(result);
      appendLog(logElement, `ASSISTANT: ${uiAnswer.answer}`);
      appendLog(logElement, `support_state: ${uiAnswer.support_state}`);
      if (uiAnswer.sources.length > 0) {
        appendLog(logElement, `sources: ${uiAnswer.sources.join(", ")}`);
      }
      publishQueryResult(result);
      transcript.push({
        role: "assistant",
        content: uiAnswer.answer,
        support_state: uiAnswer.support_state,
        sources: uiAnswer.sources
      });
      statusElement.textContent = "Query completed.";
    } catch (error) {
      statusElement.textContent = `Query failed: ${error.message}`;
    }
  });

  saveButton.addEventListener("click", async () => {
    statusElement.textContent = "Saving session...";
    try {
      const saveResult = await saveSession({ messages: transcript });
      statusElement.textContent = saveResult?.persisted ? "Session saved." : "Session save skipped.";
    } catch (error) {
      statusElement.textContent = `Session save failed: ${error.message}`;
    }
  });

  return { attached: true };
}

if (typeof window !== "undefined") {
  window.attachChatApp = attachChatApp;
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => attachChatApp());
  } else {
    attachChatApp();
  }
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    buildQueryPayload,
    toUiAnswer,
    attachChatApp
  };
}
