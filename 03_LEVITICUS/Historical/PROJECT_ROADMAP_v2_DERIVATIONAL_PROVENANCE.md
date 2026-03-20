**Roadmap Version**
v2

**Supersedes**
v1

**Revision Rationale**
Requirements-ledger regeneration introduced mandatory requirement and component coverage gaps in v1 that require a superseding roadmap with complete deterministic mappings.

**Requirements Coverage Matrix**
- `REQ-1` -> 3,4 -> `02_EXODUS/runtime/surface/chat_app.js`, `02_EXODUS/tests/e2e_grounded_query_validation.ps1` -> `Command "powershell -NoProfile -File 02_EXODUS/tests/e2e_grounded_query_validation.ps1" exits with code 0 and emits "PASS" in stdout.`
- `REQ-2` -> 3 -> `02_EXODUS/runtime/surface/chat_app.html` -> `Command "powershell -NoProfile -File 02_EXODUS/tests/phase3_surface_session_smoke.ps1" exits with code 0 and emits "PASS" in stdout.`
- `REQ-3` -> 1 -> `02_EXODUS/runtime/integrations/chat_api_client.js` -> `Command "powershell -NoProfile -File 02_EXODUS/tests/phase1_integration_smoke.ps1" exits with code 0 and emits "PASS" in stdout.`
- `REQ-4` -> 1 -> `02_EXODUS/runtime/integrations/embedding_client.js` -> `Command "powershell -NoProfile -File 02_EXODUS/tests/phase1_integration_smoke.ps1" exits with code 0 and emits "PASS" in stdout.`
- `REQ-5` -> 1 -> `02_EXODUS/runtime/integrations/qdrant_client.js` -> `Command "powershell -NoProfile -File 02_EXODUS/tests/phase1_integration_smoke.ps1" exits with code 0 and emits "PASS" in stdout.`
- `REQ-6` -> 1 -> `02_EXODUS/runtime/integrations/qdrant_client.js` -> `02_EXODUS/runtime/integrations/qdrant_client.js contains the exact anchor string: "emb_v2_nomic_embed_text_v1_5_f16_768".`
- `REQ-7` -> 1 -> `02_EXODUS/runtime/resolver/boxed_authority_resolver.js` -> `Command "powershell -NoProfile -File 02_EXODUS/tests/phase1_integration_smoke.ps1" exits with code 0 and emits "PASS" in stdout.`
- `REQ-8` -> 1 -> `02_EXODUS/runtime/data/boxed_authority_reader.js` -> `02_EXODUS/runtime/data/boxed_authority_reader.js contains the exact anchor string: "D:\\boxed\\Tier2\\<source_id>\\<source_id>.md".`
- `REQ-9` -> 1 -> `02_EXODUS/runtime/data/boxed_authority_reader.js` -> `02_EXODUS/runtime/data/boxed_authority_reader.js contains the exact anchor string: "<source_id>.sha256".`
- `REQ-10` -> 1,4 -> `02_EXODUS/runtime/workflow/retrieval_metadata_normalizer.js`, `02_EXODUS/tests/resolver_metadata_validation.ps1` -> `Command "powershell -NoProfile -File 02_EXODUS/tests/resolver_metadata_validation.ps1" exits with code 0 and emits "PASS" in stdout.`
- `REQ-11` -> 2 -> `02_EXODUS/runtime/services/grounded_answer_service.js` -> `Command "powershell -NoProfile -File 02_EXODUS/tests/phase2_workflow_policy_smoke.ps1" exits with code 0 and emits "PASS" in stdout.`
- `REQ-12` -> 2 -> `02_EXODUS/runtime/workflow/query_orchestrator.js` -> `02_EXODUS/runtime/workflow/query_orchestrator.js contains the exact anchor string: "vector_locator_only".`
- `REQ-13` -> 2 -> `02_EXODUS/runtime/workflow/query_orchestrator.js` -> `02_EXODUS/runtime/workflow/query_orchestrator.js contains the exact anchor string: "vector_locator_only".`
- `REQ-14` -> 1 -> `02_EXODUS/runtime/resolver/boxed_authority_resolver.js` -> `02_EXODUS/runtime/resolver/boxed_authority_resolver.js contains the exact anchor string: "stable_source_identity".`
- `REQ-15` -> 3,4 -> `02_EXODUS/runtime/surface/chat_app.js`, `02_EXODUS/tests/support_state_validation.ps1` -> `Command "powershell -NoProfile -File 02_EXODUS/tests/support_state_validation.ps1" exits with code 0 and emits "PASS" in stdout.`
- `REQ-16` -> 3,4 -> `02_EXODUS/runtime/surface/chat_app.js`, `02_EXODUS/tests/source_disclosure_and_session_validation.ps1` -> `Command "powershell -NoProfile -File 02_EXODUS/tests/source_disclosure_and_session_validation.ps1" exits with code 0 and emits "PASS" in stdout.`
- `REQ-17` -> 3,4 -> `02_EXODUS/runtime/session/session_store.js`, `02_EXODUS/tests/source_disclosure_and_session_validation.ps1` -> `Command "powershell -NoProfile -File 02_EXODUS/tests/source_disclosure_and_session_validation.ps1" exits with code 0 and emits "PASS" in stdout.`
- `REQ-18` -> 1 -> `02_EXODUS/runtime/integrations/chat_api_client.js` -> `02_EXODUS/runtime/integrations/chat_api_client.js contains the exact anchor string: "127.0.0.1:8081".`
- `REQ-19` -> 1 -> `02_EXODUS/runtime/integrations/embedding_client.js` -> `02_EXODUS/runtime/integrations/embedding_client.js contains the exact anchor string: "127.0.0.1:8084".`
- `REQ-20` -> 2 -> `02_EXODUS/runtime/policy/policy_enforcer.js` -> `02_EXODUS/runtime/policy/policy_enforcer.js contains the exact anchor string: "no_model_switching".`
- `REQ-21` -> 2 -> `02_EXODUS/runtime/policy/policy_enforcer.js` -> `02_EXODUS/runtime/policy/policy_enforcer.js contains the exact anchor string: "lexicon_advisory".`
- `REQ-22` -> 4 -> `02_EXODUS/tests/support_state_validation.ps1` -> `Command "powershell -NoProfile -File 02_EXODUS/tests/support_state_validation.ps1" exits with code 0 and emits "PASS" in stdout.`

**Component Coverage Matrix**
- `COMP-1` -> 3,4 -> `02_EXODUS/runtime/surface/chat_app.js`, `02_EXODUS/tests/e2e_grounded_query_validation.ps1` -> `Command "powershell -NoProfile -File 02_EXODUS/tests/e2e_grounded_query_validation.ps1" exits with code 0 and emits "PASS" in stdout.`
- `COMP-2` -> 2 -> `02_EXODUS/runtime/workflow/query_orchestrator.js` -> `Command "powershell -NoProfile -File 02_EXODUS/tests/phase2_workflow_policy_smoke.ps1" exits with code 0 and emits "PASS" in stdout.`
- `COMP-3` -> 1 -> `02_EXODUS/runtime/integrations/chat_api_client.js` -> `Command "powershell -NoProfile -File 02_EXODUS/tests/phase1_integration_smoke.ps1" exits with code 0 and emits "PASS" in stdout.`
- `COMP-4` -> 1 -> `02_EXODUS/runtime/integrations/embedding_client.js` -> `Command "powershell -NoProfile -File 02_EXODUS/tests/phase1_integration_smoke.ps1" exits with code 0 and emits "PASS" in stdout.`
- `COMP-5` -> 1 -> `02_EXODUS/runtime/integrations/qdrant_client.js` -> `Command "powershell -NoProfile -File 02_EXODUS/tests/phase1_integration_smoke.ps1" exits with code 0 and emits "PASS" in stdout.`
- `COMP-6` -> 1,4 -> `02_EXODUS/runtime/workflow/retrieval_metadata_normalizer.js`, `02_EXODUS/tests/resolver_metadata_validation.ps1` -> `Command "powershell -NoProfile -File 02_EXODUS/tests/resolver_metadata_validation.ps1" exits with code 0 and emits "PASS" in stdout.`
- `COMP-7` -> 1 -> `02_EXODUS/runtime/resolver/boxed_authority_resolver.js` -> `Command "powershell -NoProfile -File 02_EXODUS/tests/phase1_integration_smoke.ps1" exits with code 0 and emits "PASS" in stdout.`
- `COMP-8` -> 1 -> `02_EXODUS/runtime/data/boxed_authority_reader.js` -> `Command "powershell -NoProfile -File 02_EXODUS/tests/phase1_integration_smoke.ps1" exits with code 0 and emits "PASS" in stdout.`
- `COMP-9` -> 2 -> `02_EXODUS/runtime/services/grounded_answer_service.js` -> `Command "powershell -NoProfile -File 02_EXODUS/tests/phase2_workflow_policy_smoke.ps1" exits with code 0 and emits "PASS" in stdout.`
- `COMP-10` -> 2 -> `02_EXODUS/runtime/policy/policy_enforcer.js` -> `Command "powershell -NoProfile -File 02_EXODUS/tests/phase2_workflow_policy_smoke.ps1" exits with code 0 and emits "PASS" in stdout.`
- `COMP-11` -> 3,4 -> `02_EXODUS/runtime/session/session_store.js`, `02_EXODUS/tests/source_disclosure_and_session_validation.ps1` -> `Command "powershell -NoProfile -File 02_EXODUS/tests/source_disclosure_and_session_validation.ps1" exits with code 0 and emits "PASS" in stdout.`
- `COMP-12` -> 4 -> `02_EXODUS/tests/validation_harness.ps1` -> `Command "powershell -NoProfile -File 02_EXODUS/tests/e2e_grounded_query_validation.ps1" exits with code 0 and emits "PASS" in stdout.`

**Seed Coverage Matrix**
- A chat-first local application for natural-language querying over a local knowledge foundation. -> 3,4 -> `Command "powershell -NoProfile -File 02_EXODUS/tests/e2e_grounded_query_validation.ps1" exits with code 0 and emits "PASS" in stdout.`
- Integration with the existing local llama.cpp chat API for answer generation. -> 1 -> `Command "powershell -NoProfile -File 02_EXODUS/tests/phase1_integration_smoke.ps1" exits with code 0 and emits "PASS" in stdout.`
- Integration with the existing local llama.cpp embedding service for query embeddings. -> 1 -> `02_EXODUS/runtime/integrations/embedding_client.js contains the exact anchor string: "POST /embedding".`
- Integration with the existing local Qdrant service for nearest-neighbor retrieval. -> 1 -> `Command "powershell -NoProfile -File 02_EXODUS/tests/phase1_integration_smoke.ps1" exits with code 0 and emits "PASS" in stdout.`
- Retrieval against the Qdrant collection `emb_v2_nomic_embed_text_v1_5_f16_768`. -> 1 -> `02_EXODUS/runtime/integrations/qdrant_client.js contains the exact anchor string: "emb_v2_nomic_embed_text_v1_5_f16_768".`
- Resolution of Qdrant hit metadata into boxed markdown authority content on disk by `tier` and `source_id`. -> 1 -> `02_EXODUS/runtime/workflow/retrieval_metadata_normalizer.js contains the exact anchor string: "tier, source_id, parent_id, chunk_index".`
- Resolver support for the verified boxed authority patterns `D:\boxed\TierL_EB\<source_id>\<source_id>.md` and `D:\boxed\Tier2\<source_id>\<source_id>.md`. -> 1 -> `02_EXODUS/runtime/data/boxed_authority_reader.js contains the exact anchor string: "D:\\boxed\\Tier2\\<source_id>\\<source_id>.md".`
- Use of resolved authority content, rather than Qdrant payload text alone, as the readable basis for answer generation. -> 2 -> `Command "powershell -NoProfile -File 02_EXODUS/tests/phase2_workflow_policy_smoke.ps1" exits with code 0 and emits "PASS" in stdout.`
- Explicit handling of strong, partial, weak, and insufficient support states in user-facing answers. -> 3,4 -> `Command "powershell -NoProfile -File 02_EXODUS/tests/support_state_validation.ps1" exits with code 0 and emits "PASS" in stdout.`
- Source disclosure in chat only when the user requests sources. -> 3,4 -> `Command "powershell -NoProfile -File 02_EXODUS/tests/source_disclosure_and_session_validation.ps1" exits with code 0 and emits "PASS" in stdout.`
- User-triggered session saving. -> 3,4 -> `Command "powershell -NoProfile -File 02_EXODUS/tests/source_disclosure_and_session_validation.ps1" exits with code 0 and emits "PASS" in stdout.`
- The application must use the currently exposed local llama.cpp chat API. -> 1 -> `02_EXODUS/runtime/integrations/chat_api_client.js contains the exact anchor string: "127.0.0.1:8081".`
- The application must use the currently exposed local llama.cpp embedding service. -> 1 -> `02_EXODUS/runtime/integrations/embedding_client.js contains the exact anchor string: "127.0.0.1:8084".`
- The application must not implement internal model switching. -> 2 -> `02_EXODUS/runtime/policy/policy_enforcer.js contains the exact anchor string: "no_model_switching".`
- Retrieval must treat Qdrant results as pointer metadata rather than final readable answer text. -> 2 -> `02_EXODUS/runtime/workflow/query_orchestrator.js contains the exact anchor string: "vector_locator_only".`
- Resolver behavior must consume retrieval metadata including `tier`, `source_id`, `parent_id`, and `chunk_index` when mapping retrieval hits to readable authority material. -> 1,4 -> `Command "powershell -NoProfile -File 02_EXODUS/tests/resolver_metadata_validation.ps1" exits with code 0 and emits "PASS" in stdout.`
- Answer generation must use resolved boxed authority content as the readable source basis. -> 2 -> `02_EXODUS/runtime/services/grounded_answer_service.js contains the exact anchor string: "resolved authority content".`
- Qdrant must remain a vector locator rather than the authority text store. -> 2 -> `02_EXODUS/runtime/workflow/query_orchestrator.js contains the exact anchor string: "vector_locator_only".`
- Stable identity continuity through `source_id` and tier mapping must remain valid even if physical storage roots move. -> 1 -> `02_EXODUS/runtime/resolver/boxed_authority_resolver.js contains the exact anchor string: "stable_source_identity".`
- Lexicon behavior, if present, must remain advisory and must not replace semantic retrieval or hard-block retrieval when it contributes no useful narrowing. -> 2 -> `02_EXODUS/runtime/policy/policy_enforcer.js contains the exact anchor string: "lexicon_advisory".`
- The application must state when support is partial, weak, or insufficient instead of presenting unsupported claims as grounded answers. -> 4 -> `Command "powershell -NoProfile -File 02_EXODUS/tests/support_state_validation.ps1" exits with code 0 and emits "PASS" in stdout.`
- Source disclosure must be optional and user-triggered in chat. -> 3,4 -> `Command "powershell -NoProfile -File 02_EXODUS/tests/source_disclosure_and_session_validation.ps1" exits with code 0 and emits "PASS" in stdout.`
- Session persistence must be user-triggered. -> 3,4 -> `Command "powershell -NoProfile -File 02_EXODUS/tests/source_disclosure_and_session_validation.ps1" exits with code 0 and emits "PASS" in stdout.`

### PHASE 1 - Core Integrations And Authority Resolver

**Phase Type**
`implementation`

**Purpose**
Implement local chat, embedding, retrieval, metadata normalization, and authority resolution foundations required for pointer-based retrieval and boxed authority access.

**Inputs (Required)**
- `01_GENESIS/PROJECT_SEED.md`
- `01_GENESIS/REQUIREMENTS_LEDGER.md`

**Entry Criteria (All Required)**
- `File exists at 01_GENESIS/PROJECT_SEED.md.`
- `File exists at 01_GENESIS/REQUIREMENTS_LEDGER.md.`

**Work Definition (Scope-Bound)**
- Implement adapters for local chat, embedding, and Qdrant services with fixed local endpoints and required collection binding.
- Implement boxed authority reader, retrieval metadata normalizer, and authority resolver modules with stable source identity handling.
- Implement phase-level integration smoke validation for service and resolver paths.

**Exit Criteria (All Required)**
- `File exists at 02_EXODUS/runtime/integrations/chat_api_client.js.`
- `File exists at 02_EXODUS/runtime/integrations/embedding_client.js.`
- `File exists at 02_EXODUS/runtime/integrations/qdrant_client.js.`
- `File exists at 02_EXODUS/runtime/data/boxed_authority_reader.js.`
- `File exists at 02_EXODUS/runtime/workflow/retrieval_metadata_normalizer.js.`
- `File exists at 02_EXODUS/runtime/resolver/boxed_authority_resolver.js.`
- `02_EXODUS/runtime/integrations/chat_api_client.js contains the exact anchor string: "127.0.0.1:8081".`
- `02_EXODUS/runtime/integrations/embedding_client.js contains the exact anchor string: "127.0.0.1:8084".`
- `02_EXODUS/runtime/integrations/embedding_client.js contains the exact anchor string: "POST /embedding".`
- `02_EXODUS/runtime/integrations/qdrant_client.js contains the exact anchor string: "127.0.0.1:6333".`
- `02_EXODUS/runtime/integrations/qdrant_client.js contains the exact anchor string: "emb_v2_nomic_embed_text_v1_5_f16_768".`
- `02_EXODUS/runtime/data/boxed_authority_reader.js contains the exact anchor string: "D:\\boxed\\TierL_EB\\<source_id>\\<source_id>.md".`
- `02_EXODUS/runtime/data/boxed_authority_reader.js contains the exact anchor string: "D:\\boxed\\Tier2\\<source_id>\\<source_id>.md".`
- `02_EXODUS/runtime/data/boxed_authority_reader.js contains the exact anchor string: "<source_id>.meta.json".`
- `02_EXODUS/runtime/data/boxed_authority_reader.js contains the exact anchor string: "<source_id>.sha256".`
- `02_EXODUS/runtime/workflow/retrieval_metadata_normalizer.js contains the exact anchor string: "tier, source_id, parent_id, chunk_index".`
- `02_EXODUS/runtime/resolver/boxed_authority_resolver.js contains the exact anchor string: "stable_source_identity".`
- `Command "powershell -NoProfile -File 02_EXODUS/tests/phase1_integration_smoke.ps1" exits with code 0 and emits "PASS" in stdout.`

**Produced Artifacts**
- `02_EXODUS/runtime/integrations/chat_api_client.js`
- `02_EXODUS/runtime/integrations/embedding_client.js`
- `02_EXODUS/runtime/integrations/qdrant_client.js`
- `02_EXODUS/runtime/data/boxed_authority_reader.js`
- `02_EXODUS/runtime/workflow/retrieval_metadata_normalizer.js`
- `02_EXODUS/runtime/resolver/boxed_authority_resolver.js`
- `02_EXODUS/tests/phase1_integration_smoke.ps1`

**Failure Signals**
- `Command "powershell -NoProfile -File 02_EXODUS/tests/phase1_integration_smoke.ps1" exits with code 1.`
- `02_EXODUS/runtime/workflow/retrieval_metadata_normalizer.js does not contain heading: "tier, source_id, parent_id, chunk_index".`

### PHASE 2 - Workflow, Grounding, And Policy Enforcement

**Phase Type**
`implementation`

**Purpose**
Implement deterministic query orchestration, authority-first grounded answer assembly, and policy enforcement constraints for locator-only retrieval and fixed routing behavior.

**Inputs (Required)**
- `02_EXODUS/runtime/integrations/chat_api_client.js`
- `02_EXODUS/runtime/integrations/embedding_client.js`
- `02_EXODUS/runtime/integrations/qdrant_client.js`
- `02_EXODUS/runtime/workflow/retrieval_metadata_normalizer.js`
- `02_EXODUS/runtime/resolver/boxed_authority_resolver.js`

**Entry Criteria (All Required)**
- `File exists at 02_EXODUS/runtime/integrations/chat_api_client.js.`
- `File exists at 02_EXODUS/runtime/integrations/embedding_client.js.`
- `File exists at 02_EXODUS/runtime/integrations/qdrant_client.js.`
- `File exists at 02_EXODUS/runtime/workflow/retrieval_metadata_normalizer.js.`
- `File exists at 02_EXODUS/runtime/resolver/boxed_authority_resolver.js.`

**Work Definition (Scope-Bound)**
- Implement query orchestration from embedding through retrieval, normalization, resolution, policy checks, and answer assembly.
- Implement grounded answer service that uses resolved authority content rather than payload-only retrieval text.
- Implement policy enforcement for model-switching prohibition, source-disclosure gating, and lexicon advisory behavior.

**Exit Criteria (All Required)**
- `File exists at 02_EXODUS/runtime/workflow/query_orchestrator.js.`
- `File exists at 02_EXODUS/runtime/services/grounded_answer_service.js.`
- `File exists at 02_EXODUS/runtime/policy/policy_enforcer.js.`
- `02_EXODUS/runtime/workflow/query_orchestrator.js contains the exact anchor string: "vector_locator_only".`
- `02_EXODUS/runtime/services/grounded_answer_service.js contains the exact anchor string: "resolved authority content".`
- `02_EXODUS/runtime/policy/policy_enforcer.js contains the exact anchor string: "no_model_switching".`
- `02_EXODUS/runtime/policy/policy_enforcer.js contains the exact anchor string: "lexicon_advisory".`
- `02_EXODUS/runtime/policy/policy_enforcer.js contains the exact anchor string: "source_disclosure_optional".`
- `Command "powershell -NoProfile -File 02_EXODUS/tests/phase2_workflow_policy_smoke.ps1" exits with code 0 and emits "PASS" in stdout.`

**Produced Artifacts**
- `02_EXODUS/runtime/workflow/query_orchestrator.js`
- `02_EXODUS/runtime/services/grounded_answer_service.js`
- `02_EXODUS/runtime/policy/policy_enforcer.js`
- `02_EXODUS/tests/phase2_workflow_policy_smoke.ps1`

**Failure Signals**
- `Command "powershell -NoProfile -File 02_EXODUS/tests/phase2_workflow_policy_smoke.ps1" exits with code 1.`
- `02_EXODUS/runtime/workflow/query_orchestrator.js does not contain heading: "vector_locator_only".`

### PHASE 3 - Local Surface And Session Controls

**Phase Type**
`implementation`

**Purpose**
Implement the locally hosted chat-first web surface, support-state rendering, optional source disclosure behavior, and user-triggered session persistence controls.

**Inputs (Required)**
- `02_EXODUS/runtime/workflow/query_orchestrator.js`
- `02_EXODUS/runtime/services/grounded_answer_service.js`
- `02_EXODUS/runtime/policy/policy_enforcer.js`

**Entry Criteria (All Required)**
- `File exists at 02_EXODUS/runtime/workflow/query_orchestrator.js.`
- `File exists at 02_EXODUS/runtime/services/grounded_answer_service.js.`
- `File exists at 02_EXODUS/runtime/policy/policy_enforcer.js.`

**Work Definition (Scope-Bound)**
- Implement local web chat surface artifacts for query submission and grounded answer rendering.
- Implement source disclosure request interactions and support-state display in the surface runtime.
- Implement session persistence so writes occur only on explicit user save actions.

**Exit Criteria (All Required)**
- `File exists at 02_EXODUS/runtime/surface/chat_app.html.`
- `File exists at 02_EXODUS/runtime/surface/chat_app.js.`
- `File exists at 02_EXODUS/runtime/session/session_store.js.`
- `02_EXODUS/runtime/surface/chat_app.js contains the exact anchor string: "support_state".`
- `02_EXODUS/runtime/surface/chat_app.js contains the exact anchor string: "source_disclosure_request".`
- `02_EXODUS/runtime/session/session_store.js contains the exact anchor string: "user_triggered_save".`
- `Command "powershell -NoProfile -File 02_EXODUS/tests/phase3_surface_session_smoke.ps1" exits with code 0 and emits "PASS" in stdout.`

**Produced Artifacts**
- `02_EXODUS/runtime/surface/chat_app.html`
- `02_EXODUS/runtime/surface/chat_app.js`
- `02_EXODUS/runtime/session/session_store.js`
- `02_EXODUS/tests/phase3_surface_session_smoke.ps1`

**Failure Signals**
- `Command "powershell -NoProfile -File 02_EXODUS/tests/phase3_surface_session_smoke.ps1" exits with code 1.`
- `02_EXODUS/runtime/session/session_store.js does not contain heading: "user_triggered_save".`

### PHASE 4 - End-To-End Validation Harness

**Phase Type**
`validation`

**Purpose**
Implement and execute validation harness scripts that prove end-to-end grounded query behavior, resolver metadata consumption, support-state safeguards, source-disclosure policy, and user-triggered session persistence.

**Inputs (Required)**
- `02_EXODUS/runtime/surface/chat_app.js`
- `02_EXODUS/runtime/workflow/query_orchestrator.js`
- `02_EXODUS/runtime/services/grounded_answer_service.js`
- `02_EXODUS/runtime/workflow/retrieval_metadata_normalizer.js`
- `02_EXODUS/runtime/resolver/boxed_authority_resolver.js`
- `02_EXODUS/runtime/session/session_store.js`

**Entry Criteria (All Required)**
- `File exists at 02_EXODUS/runtime/surface/chat_app.js.`
- `File exists at 02_EXODUS/runtime/workflow/query_orchestrator.js.`
- `File exists at 02_EXODUS/runtime/services/grounded_answer_service.js.`
- `File exists at 02_EXODUS/runtime/workflow/retrieval_metadata_normalizer.js.`
- `File exists at 02_EXODUS/runtime/resolver/boxed_authority_resolver.js.`
- `File exists at 02_EXODUS/runtime/session/session_store.js.`

**Work Definition (Scope-Bound)**
- Implement validation scripts for end-to-end grounded query execution across local surface, workflow, and integrations.
- Implement validation scripts for support-state safeguards, optional source disclosure behavior, and user-triggered session persistence.
- Implement validation scripts for resolver metadata coverage and authority-resolution path integrity.

**Exit Criteria (All Required)**
- `File exists at 02_EXODUS/tests/validation_harness.ps1.`
- `File exists at 02_EXODUS/tests/e2e_grounded_query_validation.ps1.`
- `File exists at 02_EXODUS/tests/support_state_validation.ps1.`
- `File exists at 02_EXODUS/tests/source_disclosure_and_session_validation.ps1.`
- `File exists at 02_EXODUS/tests/resolver_metadata_validation.ps1.`
- `Command "powershell -NoProfile -File 02_EXODUS/tests/e2e_grounded_query_validation.ps1" exits with code 0 and emits "PASS" in stdout.`
- `Command "powershell -NoProfile -File 02_EXODUS/tests/support_state_validation.ps1" exits with code 0 and emits "PASS" in stdout.`
- `Command "powershell -NoProfile -File 02_EXODUS/tests/source_disclosure_and_session_validation.ps1" exits with code 0 and emits "PASS" in stdout.`
- `Command "powershell -NoProfile -File 02_EXODUS/tests/resolver_metadata_validation.ps1" exits with code 0 and emits "PASS" in stdout.`

**Produced Artifacts**
- `02_EXODUS/tests/validation_harness.ps1`
- `02_EXODUS/tests/e2e_grounded_query_validation.ps1`
- `02_EXODUS/tests/support_state_validation.ps1`
- `02_EXODUS/tests/source_disclosure_and_session_validation.ps1`
- `02_EXODUS/tests/resolver_metadata_validation.ps1`

**Failure Signals**
- `Command "powershell -NoProfile -File 02_EXODUS/tests/e2e_grounded_query_validation.ps1" exits with code 1.`
- `Command "powershell -NoProfile -File 02_EXODUS/tests/support_state_validation.ps1" exits with code 1.`
