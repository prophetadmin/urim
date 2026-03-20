"use strict";

const http = require("node:http");
const fs = require("node:fs/promises");
const path = require("node:path");
const { URL } = require("node:url");
const { runGroundedQuery } = require("../workflow/query_orchestrator");
const { saveSession } = require("../session/session_store");
const { serializeSessionSnapshot } = require("../session/session_serializer");

const DEFAULT_PORT = 8787;
const STATIC_ROOT = path.resolve(__dirname, "../surface");
const SESSION_OUT_DIR = path.resolve(__dirname, "../session/_saved_sessions");
const MAX_BODY_BYTES = 1024 * 1024;

function parsePort(argv = []) {
  const index = argv.indexOf("--port");
  if (index >= 0) {
    const value = Number(argv[index + 1]);
    if (Number.isInteger(value) && value > 0 && value <= 65535) {
      return value;
    }
  }
  return DEFAULT_PORT;
}

function contentTypeFor(filePath) {
  const extension = path.extname(filePath).toLowerCase();
  switch (extension) {
    case ".html":
      return "text/html; charset=utf-8";
    case ".js":
      return "application/javascript; charset=utf-8";
    case ".css":
      return "text/css; charset=utf-8";
    case ".json":
      return "application/json; charset=utf-8";
    default:
      return "application/octet-stream";
  }
}

function writeJson(response, statusCode, payload) {
  const body = JSON.stringify(payload, null, 2);
  response.writeHead(statusCode, {
    "content-type": "application/json; charset=utf-8",
    "cache-control": "no-store"
  });
  response.end(body);
}

async function readRequestJson(request) {
  let raw = "";
  for await (const chunk of request) {
    raw += chunk;
    if (Buffer.byteLength(raw, "utf8") > MAX_BODY_BYTES) {
      throw new Error("Request body too large.");
    }
  }
  if (!raw.trim()) {
    return {};
  }
  return JSON.parse(raw);
}

async function persistSessionSnapshot(snapshot) {
  await fs.mkdir(SESSION_OUT_DIR, { recursive: true });
  const stamp = new Date().toISOString().replace(/[:.]/g, "-");
  const filename = `session_${stamp}.json`;
  const outputPath = path.join(SESSION_OUT_DIR, filename);
  await fs.writeFile(outputPath, serializeSessionSnapshot(snapshot), "utf8");
  return outputPath;
}

async function handleGroundedQuery(request, response) {
  try {
    const payload = await readRequestJson(request);
    const result = await runGroundedQuery(payload);
    writeJson(response, 200, result);
  } catch (error) {
    writeJson(response, 500, { error: String(error.message || error) });
  }
}

async function handleSessionSave(request, response) {
  try {
    const payload = await readRequestJson(request);
    const result = await saveSession(payload, {
      userTriggered: true,
      persist: persistSessionSnapshot
    });
    writeJson(response, 200, result);
  } catch (error) {
    writeJson(response, 500, { error: String(error.message || error) });
  }
}

function safeStaticPath(urlPathname) {
  const requested = urlPathname === "/" ? "/app_shell.html" : urlPathname;
  const normalized = path.normalize(requested).replace(/^(\.\.(\/|\\|$))+/, "");
  const absolute = path.resolve(STATIC_ROOT, `.${normalized}`);
  if (!absolute.startsWith(STATIC_ROOT)) {
    return null;
  }
  return absolute;
}

async function handleStaticRequest(request, response, requestUrl) {
  const staticPath = safeStaticPath(requestUrl.pathname);
  if (!staticPath) {
    response.writeHead(403);
    response.end("Forbidden");
    return;
  }

  try {
    const stats = await fs.stat(staticPath);
    const finalPath = stats.isDirectory() ? path.join(staticPath, "app_shell.html") : staticPath;
    const data = await fs.readFile(finalPath);
    response.writeHead(200, {
      "content-type": contentTypeFor(finalPath),
      "cache-control": "no-store"
    });
    response.end(data);
  } catch (_error) {
    response.writeHead(404);
    response.end("Not found");
  }
}

function createServer() {
  return http.createServer(async (request, response) => {
    const method = String(request.method || "GET").toUpperCase();
    const requestUrl = new URL(request.url || "/", "http://127.0.0.1");

    if (method === "POST" && requestUrl.pathname === "/api/grounded-query") {
      await handleGroundedQuery(request, response);
      return;
    }

    if (method === "POST" && requestUrl.pathname === "/api/session/save") {
      await handleSessionSave(request, response);
      return;
    }

    if (method === "GET") {
      await handleStaticRequest(request, response, requestUrl);
      return;
    }

    response.writeHead(405);
    response.end("Method Not Allowed");
  });
}

function main() {
  const port = parsePort(process.argv.slice(2));
  const server = createServer();

  server.listen(port, "127.0.0.1", () => {
    const launchUrl = `http://127.0.0.1:${port}/app_shell.html`;
    console.log(`URIM local app host listening at ${launchUrl}`);
    console.log("Press Ctrl+C to stop.");
  });
}

if (require.main === module) {
  main();
}

module.exports = {
  createServer,
  parsePort,
  safeStaticPath
};
