"use strict";

async function postJson(url, payload) {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify(payload || {})
  });

  const data = await response.json().catch(() => ({}));
  if (!response.ok) {
    throw new Error(String(data?.error || `Request failed: ${response.status}`));
  }

  return data;
}

async function runGroundedQuery(payload) {
  return postJson("/api/grounded-query", payload);
}

async function saveSession(payload) {
  return postJson("/api/session/save", payload);
}

if (typeof window !== "undefined") {
  window.runGroundedQuery = runGroundedQuery;
  window.saveSession = saveSession;
}
