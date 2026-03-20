"use strict";

const PANEL_IDS = Object.freeze(["chat", "evidence", "system"]);
const QUERY_RESULT_MESSAGE = "urim:query-result";

function createShellState(initialPanel = "chat") {
  return {
    active_panel: PANEL_IDS.includes(initialPanel) ? initialPanel : "chat"
  };
}

function setActivePanel(state, panelId) {
  if (!PANEL_IDS.includes(panelId)) {
    throw new Error(`Unknown panel: ${panelId}`);
  }
  return {
    ...state,
    active_panel: panelId
  };
}

function renderShell(state) {
  if (typeof document === "undefined") {
    return;
  }
  PANEL_IDS.forEach((panel) => {
    const element = document.getElementById(`panel-${panel}`);
    if (element) {
      element.hidden = state.active_panel !== panel;
    }
  });

  const buttons = Array.from(document.querySelectorAll("[data-panel]"));
  buttons.forEach((button) => {
    const panelId = button.getAttribute("data-panel");
    button.setAttribute("aria-pressed", String(panelId === state.active_panel));
  });
}

function attachAppShell() {
  if (typeof document === "undefined") {
    return { attached: false };
  }
  let state = createShellState("chat");
  renderShell(state);

  const buttons = Array.from(document.querySelectorAll("[data-panel]"));
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      state = setActivePanel(state, button.getAttribute("data-panel"));
      renderShell(state);
    });
  });

  const shellStatus = document.getElementById("shell-status");
  const evidenceFrame = document.getElementById("evidence-frame");

  window.addEventListener("message", (event) => {
    const payload = event?.data;
    if (!payload || payload.type !== QUERY_RESULT_MESSAGE) {
      return;
    }

    if (shellStatus) {
      const count = Array.isArray(payload.sources) ? payload.sources.length : 0;
      shellStatus.textContent = `Latest query support_state: ${payload.support_state || "unknown"} (${count} sources)`;
    }

    if (evidenceFrame?.contentWindow) {
      evidenceFrame.contentWindow.postMessage(payload, "*");
    }
  });

  return { attached: true };
}

if (typeof window !== "undefined") {
  window.attachAppShell = attachAppShell;
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => attachAppShell());
  } else {
    attachAppShell();
  }
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    PANEL_IDS,
    createShellState,
    setActivePanel,
    renderShell,
    attachAppShell
  };
}
