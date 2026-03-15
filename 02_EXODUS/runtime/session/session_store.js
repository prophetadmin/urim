"use strict";

const SAVE_POLICY = "user_triggered_save";

function createSessionSnapshot(input = {}) {
  return {
    save_policy: SAVE_POLICY,
    created_at: new Date().toISOString(),
    messages: Array.isArray(input.messages) ? input.messages : []
  };
}

async function saveSession(snapshotInput = {}, options = {}) {
  if (options.userTriggered !== false && options.userTriggered !== true) {
    options.userTriggered = true;
  }

  if (options.userTriggered !== true) {
    return {
      persisted: false,
      reason: `${SAVE_POLICY}: explicit user action required`
    };
  }

  const snapshot = createSessionSnapshot(snapshotInput);
  if (typeof options.persist === "function") {
    await options.persist(snapshot);
    return {
      persisted: true,
      snapshot
    };
  }

  return {
    persisted: true,
    snapshot
  };
}

module.exports = {
  SAVE_POLICY,
  createSessionSnapshot,
  saveSession
};
