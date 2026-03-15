# URIM

URIM is a local grounded chat runtime for querying boxed authority content with a fixed, deterministic retrieval pipeline.

URIM was built using the MetaDictum framework from a separate repository and serves as an exemplar project for that framework.

It embeds a user question through a local embedding service, retrieves candidate matches from Qdrant, resolves those matches into boxed markdown sources on disk, and generates answers from the resolved authority content rather than from vector payload text alone.

## MetaDictum Context

MetaDictum is an artifact-governed framework for deterministic, multi-session AI-assisted project execution, designed to keep project continuity in repository artifacts instead of fragile chat context.

The MetaDictum repository provides the documentation and reusable template that implement that workflow.

The operational scaffold in MetaDictum lives in `template/project/`. URIM uses that workspace model, which is why this repository is organized into these top-level directories:

- `01_GENESIS/` - raw ideas and seed creation
- `02_EXODUS/` - implementation work
- `03_LEVITICUS/` - prompts, schemas, and runtime governance artifacts
- `04_DEUTERONOMY/` - optional distilled canon
- `05_NUMBERS/` - optional session and history artifacts

## What URIM Does

- Uses a fixed local stack for chat generation, embeddings, and vector retrieval.
- Treats Qdrant as a locator, not as the final authority text store.
- Resolves retrieval hits into boxed markdown authority files on disk.
- Returns explicit support states: `strong`, `partial`, `weak`, or `insufficient`.
- Discloses sources only when the user requests them.
- Persists session history only on explicit user action.

## Retrieval Flow

1. Create an embedding for the user question.
2. Search Qdrant for nearest-neighbor matches.
3. Normalize retrieval metadata: `tier`, `source_id`, `parent_id`, `chunk_index`.
4. Resolve each hit into boxed authority content on disk.
5. Assemble the final answer from resolved authority excerpts.

## Local Requirements

URIM is currently built around a local Windows-first environment with these defaults:

- Node.js 18 or newer.
- Local chat API at `http://127.0.0.1:8081/v1/chat/completions`.
- Local embedding API at `http://127.0.0.1:8084/embedding`.
- Local Qdrant instance at `http://127.0.0.1:6333`.
- Qdrant collection `emb_v2_nomic_embed_text_v1_5_f16_768`.
- Boxed authority storage rooted at `D:\boxed`.

Supported boxed authority lookup patterns:

- `D:\boxed\TierL_EB\<source_id>\<source_id>.md`
- `D:\boxed\Tier2\<source_id>\<source_id>.md`

Each source directory is expected to include:

- `<source_id>.md`
- `<source_id>.meta.json`
- `<source_id>.sha256`

## Configuration

URIM exposes environment-variable overrides for its local service bindings:

- `LOCAL_CHAT_API_BASE_URL`
- `LOCAL_EMBEDDING_API_BASE_URL`
- `LOCAL_QDRANT_API_BASE_URL`
- `BOXED_STORAGE_ROOT`

If these variables are not set, URIM uses the default local endpoints and boxed storage root listed above.

## Repository Layout

- `02_EXODUS/runtime/integrations/`: chat, embedding, and Qdrant adapters.
- `02_EXODUS/runtime/workflow/`: retrieval normalization and query orchestration.
- `02_EXODUS/runtime/data/`: boxed authority file access.
- `02_EXODUS/runtime/resolver/`: authority resolution and stable source identity mapping.
- `02_EXODUS/runtime/services/`: grounded answer assembly.
- `02_EXODUS/runtime/policy/`: model, disclosure, and lexicon policy enforcement.
- `02_EXODUS/runtime/surface/`: local chat surface assets.
- `02_EXODUS/runtime/session/`: explicit user-triggered session persistence.
- `02_EXODUS/tests/`: deterministic smoke and validation scripts.

## Validation

Run the validation scripts from the repository root.

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File 02_EXODUS/tests/phase1_integration_smoke.ps1
powershell -NoProfile -ExecutionPolicy Bypass -File 02_EXODUS/tests/phase2_workflow_policy_smoke.ps1
powershell -NoProfile -ExecutionPolicy Bypass -File 02_EXODUS/tests/phase3_surface_session_smoke.ps1
powershell -NoProfile -ExecutionPolicy Bypass -File 02_EXODUS/tests/validation_harness.ps1
```

## Current Status

This repository contains the URIM runtime modules, validation harness, and a minimal browser chat surface.

Current implementation notes:

- The grounding pipeline is implemented and validated at the module level.
- The browser surface is present as `chat_app.html` and `chat_app.js`.
- The surface expects runtime wiring for `runGroundedQuery` and `saveSession` when hosted in a browser environment.
- The repository does not yet include a packaged application server, installer, or deployment wrapper.

## Design Constraints

URIM is intentionally opinionated:

- No internal model switching.
- Lexicon behavior remains advisory.
- Source disclosure is optional and user-triggered.
- Session persistence is optional and user-triggered.
- Answer generation must use resolved authority content as the readable source basis.

## License

No license has been declared in this repository yet.
