**Roadmap Version**
v1

**Supersedes**
None

**Revision Rationale**
Initial bootstrap generation from `01_GENESIS/PROJECT_SEED.md`, `01_GENESIS/REQUIREMENTS_LEDGER.md`, and `01_GENESIS/COMPONENT_REALIZATION_MAP.md`.

**Requirements Coverage Matrix**
- `REQ-1` -> 3 -> `02_EXODUS/runtime/surface/app_shell.html`, `02_EXODUS/runtime/surface/app_shell.js` -> `Command "powershell -ExecutionPolicy Bypass -File 02_EXODUS/tests/phase3_surface_session_smoke.ps1" exits with code 0.`
- `REQ-2` -> 3 -> `02_EXODUS/runtime/surface/chat_app.html`, `02_EXODUS/runtime/surface/chat_app.js`, `02_EXODUS/runtime/surface/chat_surface.css` -> `Command "powershell -ExecutionPolicy Bypass -File 02_EXODUS/tests/e2e_grounded_query_validation.ps1" exits with code 0.`
- `REQ-3` -> 3, 4 -> `02_EXODUS/runtime/surface/evidence_panel.html`, `02_EXODUS/runtime/surface/evidence_panel.js`, `02_EXODUS/runtime/surface/evidence_panel.css` -> `Command "powershell -ExecutionPolicy Bypass -File 02_EXODUS/tests/e2e_grounded_query_validation.ps1" exits with code 0.`
- `REQ-4` -> 3, 4 -> `02_EXODUS/runtime/surface/system_config_panel.html`, `02_EXODUS/runtime/surface/system_config_panel.js`, `02_EXODUS/runtime/surface/system_config_state.js` -> `Command "powershell -ExecutionPolicy Bypass -File 02_EXODUS/tests/validation_harness.ps1" exits with code 0.`
- `REQ-5` -> 2, 3 -> `02_EXODUS/runtime/workflow/query_orchestrator.js`, `02_EXODUS/runtime/workflow/navigation_state.js`, `02_EXODUS/runtime/services/grounded_answer_service.js` -> `Command "powershell -ExecutionPolicy Bypass -File 02_EXODUS/tests/e2e_grounded_query_validation.ps1" exits with code 0.`
- `REQ-6` -> 1, 4 -> `02_EXODUS/runtime/integrations/chat_api_client.js`, `02_EXODUS/runtime/integrations/embedding_client.js`, `02_EXODUS/runtime/integrations/qdrant_client.js`, `02_EXODUS/runtime/services/urim_foundation_adapter.js`, `02_EXODUS/runtime/services/urim_foundation_registry.js` -> `Command "powershell -ExecutionPolicy Bypass -File 02_EXODUS/tests/phase1_integration_smoke.ps1" exits with code 0.`
- `REQ-7` -> 1, 4 -> `02_EXODUS/runtime/workflow/retrieval_metadata_normalizer.js`, `02_EXODUS/runtime/resolver/boxed_authority_resolver.js`, `02_EXODUS/runtime/data/boxed_authority_reader.js` -> `Command "powershell -ExecutionPolicy Bypass -File 02_EXODUS/tests/resolver_metadata_validation.ps1" exits with code 0.`
- `REQ-8` -> 1, 2 -> `02_EXODUS/runtime/integrations/qdrant_client.js`, `02_EXODUS/runtime/workflow/query_orchestrator.js` -> `02_EXODUS/runtime/workflow/query_orchestrator.js contains the exact anchor string: "vector_locator_only".`
- `REQ-9` -> 3 -> `02_EXODUS/runtime/session/session_store.js`, `02_EXODUS/runtime/session/session_serializer.js` -> `Command "powershell -ExecutionPolicy Bypass -File 02_EXODUS/tests/source_disclosure_and_session_validation.ps1" exits with code 0.`
- `REQ-10` -> 2, 3 -> `02_EXODUS/runtime/services/grounded_answer_service.js`, `02_EXODUS/runtime/policy/policy_enforcer.js`, `02_EXODUS/runtime/policy/support_state_model.js` -> `Command "powershell -ExecutionPolicy Bypass -File 02_EXODUS/tests/support_state_validation.ps1" exits with code 0.`
- `REQ-11` -> 3 -> `02_EXODUS/runtime/surface/app_shell.html`, `02_EXODUS/runtime/surface/chat_app.html`, `02_EXODUS/runtime/surface/evidence_panel.html`, `02_EXODUS/runtime/surface/system_config_panel.html` -> `Command "powershell -ExecutionPolicy Bypass -File 02_EXODUS/tests/phase3_surface_session_smoke.ps1" exits with code 0.`
- `REQ-12` -> 1, 3, 4 -> `02_EXODUS/runtime/resolver/boxed_authority_resolver.js`, `02_EXODUS/runtime/data/boxed_authority_reader.js`, `02_EXODUS/runtime/surface/evidence_panel.js` -> `Command "powershell -ExecutionPolicy Bypass -File 02_EXODUS/tests/resolver_metadata_validation.ps1" exits with code 0.`
- `REQ-13` -> 2, 3 -> `02_EXODUS/runtime/policy/disclosure_state_controller.js`, `02_EXODUS/runtime/session/session_store.js`, `02_EXODUS/runtime/surface/chat_app.js` -> `Command "powershell -ExecutionPolicy Bypass -File 02_EXODUS/tests/source_disclosure_and_session_validation.ps1" exits with code 0.`
- `REQ-14` -> 4 -> `02_EXODUS/tests/phase1_integration_smoke.ps1`, `02_EXODUS/tests/phase2_workflow_policy_smoke.ps1`, `02_EXODUS/tests/phase3_surface_session_smoke.ps1`, `02_EXODUS/tests/e2e_grounded_query_validation.ps1`, `02_EXODUS/tests/support_state_validation.ps1`, `02_EXODUS/tests/source_disclosure_and_session_validation.ps1`, `02_EXODUS/tests/resolver_metadata_validation.ps1`, `02_EXODUS/tests/validation_harness.ps1` -> `Command "powershell -ExecutionPolicy Bypass -File 02_EXODUS/tests/validation_harness.ps1" exits with code 0.`

**Component Coverage Matrix**
- `COMP-1` -> 3 -> `02_EXODUS/runtime/surface/app_shell.html`, `02_EXODUS/runtime/surface/app_shell.js` -> `Command "powershell -ExecutionPolicy Bypass -File 02_EXODUS/tests/phase3_surface_session_smoke.ps1" exits with code 0.`
- `COMP-2` -> 3 -> `02_EXODUS/runtime/surface/chat_app.html`, `02_EXODUS/runtime/surface/chat_app.js`, `02_EXODUS/runtime/surface/chat_surface.css` -> `Command "powershell -ExecutionPolicy Bypass -File 02_EXODUS/tests/e2e_grounded_query_validation.ps1" exits with code 0.`
- `COMP-3` -> 3, 4 -> `02_EXODUS/runtime/surface/evidence_panel.html`, `02_EXODUS/runtime/surface/evidence_panel.js`, `02_EXODUS/runtime/surface/evidence_panel.css` -> `Command "powershell -ExecutionPolicy Bypass -File 02_EXODUS/tests/e2e_grounded_query_validation.ps1" exits with code 0.`
- `COMP-4` -> 3, 4 -> `02_EXODUS/runtime/surface/system_config_panel.html`, `02_EXODUS/runtime/surface/system_config_panel.js`, `02_EXODUS/runtime/surface/system_config_state.js` -> `Command "powershell -ExecutionPolicy Bypass -File 02_EXODUS/tests/validation_harness.ps1" exits with code 0.`
- `COMP-5` -> 2, 3 -> `02_EXODUS/runtime/workflow/query_orchestrator.js`, `02_EXODUS/runtime/workflow/navigation_state.js` -> `Command "powershell -ExecutionPolicy Bypass -File 02_EXODUS/tests/phase2_workflow_policy_smoke.ps1" exits with code 0.`
- `COMP-6` -> 1, 4 -> `02_EXODUS/runtime/workflow/retrieval_metadata_normalizer.js`, `02_EXODUS/runtime/resolver/boxed_authority_resolver.js`, `02_EXODUS/runtime/data/boxed_authority_reader.js` -> `Command "powershell -ExecutionPolicy Bypass -File 02_EXODUS/tests/resolver_metadata_validation.ps1" exits with code 0.`
- `COMP-7` -> 1 -> `02_EXODUS/runtime/integrations/chat_api_client.js`, `02_EXODUS/runtime/integrations/embedding_client.js`, `02_EXODUS/runtime/integrations/qdrant_client.js`, `02_EXODUS/runtime/services/urim_foundation_adapter.js`, `02_EXODUS/runtime/services/urim_foundation_registry.js` -> `Command "powershell -ExecutionPolicy Bypass -File 02_EXODUS/tests/phase1_integration_smoke.ps1" exits with code 0.`
- `COMP-8` -> 2, 3 -> `02_EXODUS/runtime/services/grounded_answer_service.js`, `02_EXODUS/runtime/policy/policy_enforcer.js`, `02_EXODUS/runtime/policy/interaction_policy_controller.js`, `02_EXODUS/runtime/policy/disclosure_state_controller.js`, `02_EXODUS/runtime/policy/support_state_model.js` -> `Command "powershell -ExecutionPolicy Bypass -File 02_EXODUS/tests/support_state_validation.ps1" exits with code 0.`
- `COMP-9` -> 3 -> `02_EXODUS/runtime/session/session_store.js`, `02_EXODUS/runtime/session/session_serializer.js` -> `Command "powershell -ExecutionPolicy Bypass -File 02_EXODUS/tests/source_disclosure_and_session_validation.ps1" exits with code 0.`
- `COMP-10` -> 4 -> `02_EXODUS/tests/phase1_integration_smoke.ps1`, `02_EXODUS/tests/phase2_workflow_policy_smoke.ps1`, `02_EXODUS/tests/phase3_surface_session_smoke.ps1`, `02_EXODUS/tests/e2e_grounded_query_validation.ps1`, `02_EXODUS/tests/support_state_validation.ps1`, `02_EXODUS/tests/source_disclosure_and_session_validation.ps1`, `02_EXODUS/tests/resolver_metadata_validation.ps1`, `02_EXODUS/tests/validation_harness.ps1` -> `Command "powershell -ExecutionPolicy Bypass -File 02_EXODUS/tests/validation_harness.ps1" exits with code 0.`

**Seed Coverage Matrix**
- A deterministic, repository-owned launch path for the local application layer. -> 3 -> `Command "powershell -ExecutionPolicy Bypass -File 02_EXODUS/tests/phase3_surface_session_smoke.ps1" exits with code 0.`
- A browser-accessible chat surface for query submission and answer display. -> 3 -> `Command "powershell -ExecutionPolicy Bypass -File 02_EXODUS/tests/e2e_grounded_query_validation.ps1" exits with code 0.`
- A browser-accessible evidence surface for readable authority inspection. -> 3, 4 -> `Command "powershell -ExecutionPolicy Bypass -File 02_EXODUS/tests/e2e_grounded_query_validation.ps1" exits with code 0.`
- A browser-accessible system or configuration surface for operator-visible runtime state. -> 3, 4 -> `Command "powershell -ExecutionPolicy Bypass -File 02_EXODUS/tests/validation_harness.ps1" exits with code 0.`
- Execution routing and control that forwards chat queries into the existing runtime and local services. -> 2, 3 -> `Command "powershell -ExecutionPolicy Bypass -File 02_EXODUS/tests/e2e_grounded_query_validation.ps1" exits with code 0.`
- Integration with the existing runtime without decomposing or redefining its internal logic. -> 1 -> `Command "powershell -ExecutionPolicy Bypass -File 02_EXODUS/tests/phase1_integration_smoke.ps1" exits with code 0.`
- Boxed-authority resolution that reads readable authority only from boxed artifacts. -> 1, 4 -> `Command "powershell -ExecutionPolicy Bypass -File 02_EXODUS/tests/resolver_metadata_validation.ps1" exits with code 0.`
- Session persistence and disclosure control owned by the repository application layer. -> 3 -> `Command "powershell -ExecutionPolicy Bypass -File 02_EXODUS/tests/source_disclosure_and_session_validation.ps1" exits with code 0.`
- Executable validation that proves the runtime path, authority resolution path, and user-facing behavior path. -> 4 -> `Command "powershell -ExecutionPolicy Bypass -File 02_EXODUS/tests/validation_harness.ps1" exits with code 0.`
- The application layer must explicitly wire into the existing runtime and local services without redefining the runtime's internal logic. -> 1 -> `Command "powershell -ExecutionPolicy Bypass -File 02_EXODUS/tests/phase1_integration_smoke.ps1" exits with code 0.`
- No requirement, component, or roadmap phase may assign ownership to the internal artifacts of the existing runtime. -> 1, 4 -> `Command "powershell -ExecutionPolicy Bypass -File 02_EXODUS/tests/phase1_integration_smoke.ps1" exits with code 0.`
- No component may represent the internal structure of the existing runtime. -> 1, 4 -> `Command "powershell -ExecutionPolicy Bypass -File 02_EXODUS/tests/phase1_integration_smoke.ps1" exits with code 0.`
- No roadmap phase may claim files from the existing runtime as produced outputs. -> 1, 2, 3, 4 -> `All required subsections defined in Section 3 are present exactly once.`
- The query path must route through a repository-owned execution routing and control layer before invoking the existing runtime and local services. -> 2, 3 -> `Command "powershell -ExecutionPolicy Bypass -File 02_EXODUS/tests/e2e_grounded_query_validation.ps1" exits with code 0.`
- Readable authority must be resolved exclusively from boxed artifacts. -> 1, 4 -> `Command "powershell -ExecutionPolicy Bypass -File 02_EXODUS/tests/resolver_metadata_validation.ps1" exits with code 0.`
- The application layer must expose truthful failure states when any part of the runtime path breaks. -> 2, 3 -> `Command "powershell -ExecutionPolicy Bypass -File 02_EXODUS/tests/support_state_validation.ps1" exits with code 0.`

### PHASE 1 - Establish External Integrations And Boxed Authority Boundaries

**Phase Type**
implementation

**Purpose**
Create, validate, or extend the repository-owned integration, resolver, and boxed-authority boundaries required to connect the application layer to local services and readable authority artifacts without claiming ownership of external runtime internals.

**Inputs (Required)**
- `01_GENESIS/PROJECT_SEED.md`
- `01_GENESIS/REQUIREMENTS_LEDGER.md`
- `01_GENESIS/COMPONENT_REALIZATION_MAP.md`

**Entry Criteria (All Required)**
- File exists at `01_GENESIS/PROJECT_SEED.md`.
- File exists at `01_GENESIS/REQUIREMENTS_LEDGER.md`.
- File exists at `01_GENESIS/COMPONENT_REALIZATION_MAP.md`.

**Work Definition (Scope-Bound)**
- Create, validate, or extend repository-owned local service integration clients under `02_EXODUS/runtime/integrations/`.
- Create, validate, or extend repository-owned adapter and registry boundaries under `02_EXODUS/runtime/services/`.
- Create, validate, or extend boxed-authority normalization, resolver, and reader artifacts under `02_EXODUS/runtime/workflow/`, `02_EXODUS/runtime/resolver/`, and `02_EXODUS/runtime/data/`.

**Exit Criteria (All Required)**
- File exists at `02_EXODUS/runtime/integrations/chat_api_client.js`.
- File exists at `02_EXODUS/runtime/integrations/embedding_client.js`.
- File exists at `02_EXODUS/runtime/integrations/qdrant_client.js`.
- File exists at `02_EXODUS/runtime/services/urim_foundation_adapter.js`.
- File exists at `02_EXODUS/runtime/services/urim_foundation_registry.js`.
- File exists at `02_EXODUS/runtime/workflow/retrieval_metadata_normalizer.js`.
- File exists at `02_EXODUS/runtime/resolver/boxed_authority_resolver.js`.
- File exists at `02_EXODUS/runtime/data/boxed_authority_reader.js`.
- `02_EXODUS/runtime/integrations/qdrant_client.js` contains the exact anchor string: "emb_v2_nomic_embed_text_v1_5_f16_768".
- `02_EXODUS/runtime/workflow/retrieval_metadata_normalizer.js` contains the exact anchor string: "tier, source_id, parent_id, chunk_index".
- `02_EXODUS/runtime/resolver/boxed_authority_resolver.js` contains the exact anchor string: "stable_source_identity".
- Command "powershell -ExecutionPolicy Bypass -File 02_EXODUS/tests/phase1_integration_smoke.ps1" exits with code 0.
- Command "powershell -ExecutionPolicy Bypass -File 02_EXODUS/tests/resolver_metadata_validation.ps1" exits with code 0.
- File exists at `03_LEVITICUS/Execution/ROADMAP_v1_PHASE_1_RECEIPT.md`.
- `03_LEVITICUS/Execution/ROADMAP_v1_PHASE_1_RECEIPT.md` is generated strictly from `03_LEVITICUS/Core/PHASE_COMPLETION_RECEIPT_SCHEMA_v1.md` without schema deviation.

**Produced Artifacts**
- `02_EXODUS/runtime/integrations/chat_api_client.js`
- `02_EXODUS/runtime/integrations/embedding_client.js`
- `02_EXODUS/runtime/integrations/qdrant_client.js`
- `02_EXODUS/runtime/services/urim_foundation_adapter.js`
- `02_EXODUS/runtime/services/urim_foundation_registry.js`
- `02_EXODUS/runtime/workflow/retrieval_metadata_normalizer.js`
- `02_EXODUS/runtime/resolver/boxed_authority_resolver.js`
- `02_EXODUS/runtime/data/boxed_authority_reader.js`
- `03_LEVITICUS/Execution/ROADMAP_v1_PHASE_1_RECEIPT.md`

**Failure Signals**
- `02_EXODUS/tests/phase1_integration_smoke.ps1` exits non-zero.
- `02_EXODUS/tests/resolver_metadata_validation.ps1` exits non-zero.

### PHASE 2 - Establish Workflow, Answer Assembly, And Policy Control

**Phase Type**
implementation

**Purpose**
Create, validate, or extend the repository-owned workflow, answer-assembly, and policy-control artifacts that route queries through locator-only retrieval, resolved authority, and truthful support-state behavior.

**Inputs (Required)**
- `01_GENESIS/PROJECT_SEED.md`
- `01_GENESIS/REQUIREMENTS_LEDGER.md`
- `01_GENESIS/COMPONENT_REALIZATION_MAP.md`
- `02_EXODUS/runtime/workflow/retrieval_metadata_normalizer.js`
- `02_EXODUS/runtime/resolver/boxed_authority_resolver.js`
- `02_EXODUS/runtime/data/boxed_authority_reader.js`

**Entry Criteria (All Required)**
- File exists at `02_EXODUS/runtime/workflow/retrieval_metadata_normalizer.js`.
- File exists at `02_EXODUS/runtime/resolver/boxed_authority_resolver.js`.
- File exists at `02_EXODUS/runtime/data/boxed_authority_reader.js`.

**Work Definition (Scope-Bound)**
- Create, validate, or extend workflow orchestration and navigation-state artifacts under `02_EXODUS/runtime/workflow/`.
- Create, validate, or extend grounded-answer assembly and policy-control artifacts under `02_EXODUS/runtime/services/` and `02_EXODUS/runtime/policy/`.
- Preserve explicit locator-only retrieval semantics, disclosure rules, and truthful support-state behavior in repository-owned modules.

**Exit Criteria (All Required)**
- File exists at `02_EXODUS/runtime/workflow/query_orchestrator.js`.
- File exists at `02_EXODUS/runtime/workflow/navigation_state.js`.
- File exists at `02_EXODUS/runtime/services/grounded_answer_service.js`.
- File exists at `02_EXODUS/runtime/policy/policy_enforcer.js`.
- File exists at `02_EXODUS/runtime/policy/interaction_policy_controller.js`.
- File exists at `02_EXODUS/runtime/policy/disclosure_state_controller.js`.
- File exists at `02_EXODUS/runtime/policy/support_state_model.js`.
- `02_EXODUS/runtime/workflow/query_orchestrator.js` contains the exact anchor string: "vector_locator_only".
- `02_EXODUS/runtime/services/grounded_answer_service.js` contains the exact anchor string: "resolved authority content".
- `02_EXODUS/runtime/policy/policy_enforcer.js` contains the exact anchor string: "no_model_switching".
- Command "powershell -ExecutionPolicy Bypass -File 02_EXODUS/tests/phase2_workflow_policy_smoke.ps1" exits with code 0.
- Command "powershell -ExecutionPolicy Bypass -File 02_EXODUS/tests/support_state_validation.ps1" exits with code 0.
- File exists at `03_LEVITICUS/Execution/ROADMAP_v1_PHASE_2_RECEIPT.md`.
- `03_LEVITICUS/Execution/ROADMAP_v1_PHASE_2_RECEIPT.md` is generated strictly from `03_LEVITICUS/Core/PHASE_COMPLETION_RECEIPT_SCHEMA_v1.md` without schema deviation.

**Produced Artifacts**
- `02_EXODUS/runtime/workflow/query_orchestrator.js`
- `02_EXODUS/runtime/workflow/navigation_state.js`
- `02_EXODUS/runtime/services/grounded_answer_service.js`
- `02_EXODUS/runtime/policy/policy_enforcer.js`
- `02_EXODUS/runtime/policy/interaction_policy_controller.js`
- `02_EXODUS/runtime/policy/disclosure_state_controller.js`
- `02_EXODUS/runtime/policy/support_state_model.js`
- `03_LEVITICUS/Execution/ROADMAP_v1_PHASE_2_RECEIPT.md`

**Failure Signals**
- `02_EXODUS/tests/phase2_workflow_policy_smoke.ps1` exits non-zero.
- `02_EXODUS/tests/support_state_validation.ps1` exits non-zero.

### PHASE 3 - Establish Browser Surfaces And Explicit Session Controls

**Phase Type**
implementation

**Purpose**
Create, validate, or extend the repository-owned browser surfaces and session controls that make the local system launchable, preserve separate operator-visible surfaces, and enforce explicit disclosure and persistence behavior.

**Inputs (Required)**
- `01_GENESIS/PROJECT_SEED.md`
- `01_GENESIS/REQUIREMENTS_LEDGER.md`
- `01_GENESIS/COMPONENT_REALIZATION_MAP.md`
- `02_EXODUS/runtime/workflow/query_orchestrator.js`
- `02_EXODUS/runtime/services/grounded_answer_service.js`
- `02_EXODUS/runtime/policy/policy_enforcer.js`

**Entry Criteria (All Required)**
- File exists at `02_EXODUS/runtime/workflow/query_orchestrator.js`.
- File exists at `02_EXODUS/runtime/services/grounded_answer_service.js`.
- File exists at `02_EXODUS/runtime/policy/policy_enforcer.js`.

**Work Definition (Scope-Bound)**
- Create, validate, or extend the repository-owned application shell and separate chat, evidence, and system browser surfaces under `02_EXODUS/runtime/surface/`.
- Create, validate, or extend repository-owned session-store artifacts under `02_EXODUS/runtime/session/`.
- Preserve explicit disclosure requests, explicit save policy, and operator-readable surface separation while wiring the browser surfaces into the repository-owned workflow path.

**Exit Criteria (All Required)**
- File exists at `02_EXODUS/runtime/surface/app_shell.html`.
- File exists at `02_EXODUS/runtime/surface/app_shell.js`.
- File exists at `02_EXODUS/runtime/surface/chat_app.html`.
- File exists at `02_EXODUS/runtime/surface/chat_app.js`.
- File exists at `02_EXODUS/runtime/surface/chat_surface.css`.
- File exists at `02_EXODUS/runtime/surface/evidence_panel.html`.
- File exists at `02_EXODUS/runtime/surface/evidence_panel.js`.
- File exists at `02_EXODUS/runtime/surface/evidence_panel.css`.
- File exists at `02_EXODUS/runtime/surface/system_config_panel.html`.
- File exists at `02_EXODUS/runtime/surface/system_config_panel.js`.
- File exists at `02_EXODUS/runtime/surface/system_config_state.js`.
- File exists at `02_EXODUS/runtime/session/session_store.js`.
- File exists at `02_EXODUS/runtime/session/session_serializer.js`.
- `02_EXODUS/runtime/surface/chat_app.js` contains the exact anchor string: "source_disclosure_request".
- `02_EXODUS/runtime/surface/chat_app.js` contains the exact anchor string: "support_state".
- `02_EXODUS/runtime/session/session_store.js` contains the exact anchor string: "user_triggered_save".
- Command "powershell -ExecutionPolicy Bypass -File 02_EXODUS/tests/phase3_surface_session_smoke.ps1" exits with code 0.
- Command "powershell -ExecutionPolicy Bypass -File 02_EXODUS/tests/source_disclosure_and_session_validation.ps1" exits with code 0.
- Command "powershell -ExecutionPolicy Bypass -File 02_EXODUS/tests/e2e_grounded_query_validation.ps1" exits with code 0.
- File exists at `03_LEVITICUS/Execution/ROADMAP_v1_PHASE_3_RECEIPT.md`.
- `03_LEVITICUS/Execution/ROADMAP_v1_PHASE_3_RECEIPT.md` is generated strictly from `03_LEVITICUS/Core/PHASE_COMPLETION_RECEIPT_SCHEMA_v1.md` without schema deviation.

**Produced Artifacts**
- `02_EXODUS/runtime/surface/app_shell.html`
- `02_EXODUS/runtime/surface/app_shell.js`
- `02_EXODUS/runtime/surface/chat_app.html`
- `02_EXODUS/runtime/surface/chat_app.js`
- `02_EXODUS/runtime/surface/chat_surface.css`
- `02_EXODUS/runtime/surface/evidence_panel.html`
- `02_EXODUS/runtime/surface/evidence_panel.js`
- `02_EXODUS/runtime/surface/evidence_panel.css`
- `02_EXODUS/runtime/surface/system_config_panel.html`
- `02_EXODUS/runtime/surface/system_config_panel.js`
- `02_EXODUS/runtime/surface/system_config_state.js`
- `02_EXODUS/runtime/session/session_store.js`
- `02_EXODUS/runtime/session/session_serializer.js`
- `03_LEVITICUS/Execution/ROADMAP_v1_PHASE_3_RECEIPT.md`

**Failure Signals**
- `02_EXODUS/tests/phase3_surface_session_smoke.ps1` exits non-zero.
- `02_EXODUS/tests/source_disclosure_and_session_validation.ps1` exits non-zero.

### PHASE 4 - Validate Deterministic Seed-To-Planning Proof Against 01_GENESIS/PROJECT_SEED.md

**Phase Type**
validation

**Purpose**
Validate deterministic seed-to-planning proof against `01_GENESIS/PROJECT_SEED.md` while exercising the end-to-end runtime, authority resolution, disclosure, session, and operator-surface behavior required by the repository-owned application layer.

**Inputs (Required)**
- `01_GENESIS/PROJECT_SEED.md`
- `01_GENESIS/REQUIREMENTS_LEDGER.md`
- `01_GENESIS/COMPONENT_REALIZATION_MAP.md`
- `03_LEVITICUS/PROJECT_ROADMAP_v1.md`
- `02_EXODUS/tests/validation_harness.ps1`

**Entry Criteria (All Required)**
- File exists at `02_EXODUS/tests/phase1_integration_smoke.ps1`.
- File exists at `02_EXODUS/tests/phase2_workflow_policy_smoke.ps1`.
- File exists at `02_EXODUS/tests/phase3_surface_session_smoke.ps1`.
- File exists at `02_EXODUS/tests/e2e_grounded_query_validation.ps1`.
- File exists at `02_EXODUS/tests/validation_harness.ps1`.

**Work Definition (Scope-Bound)**
- Validate seed-derived planning traceability against `01_GENESIS/PROJECT_SEED.md` through the repository-owned validation harness and phase-level runtime checks.
- Validate the integrated runtime path, resolver path, disclosure path, session path, and browser-surface path through command-based proof after the implementation artifacts exist.
- Preserve deterministic bootstrap proof anchored to `01_GENESIS/PROJECT_SEED.md` rather than reducing validation to generic runtime smoke.

**Exit Criteria (All Required)**
- `02_EXODUS/tests/validation_harness.ps1` contains the exact anchor string: "seed-derived planning artifacts are validated against 01_GENESIS/PROJECT_SEED.md".
- `02_EXODUS/tests/validation_harness.ps1` contains the exact anchor string: "regeneration and traceability from the seed-defined contract".
- Command "powershell -ExecutionPolicy Bypass -File 02_EXODUS/tests/e2e_grounded_query_validation.ps1" exits with code 0.
- Command "powershell -ExecutionPolicy Bypass -File 02_EXODUS/tests/source_disclosure_and_session_validation.ps1" exits with code 0.
- Command "powershell -ExecutionPolicy Bypass -File 02_EXODUS/tests/resolver_metadata_validation.ps1" exits with code 0.
- Command "powershell -ExecutionPolicy Bypass -File 02_EXODUS/tests/validation_harness.ps1" exits with code 0.

**Produced Artifacts**
- `02_EXODUS/tests/phase1_integration_smoke.ps1`
- `02_EXODUS/tests/phase2_workflow_policy_smoke.ps1`
- `02_EXODUS/tests/phase3_surface_session_smoke.ps1`
- `02_EXODUS/tests/e2e_grounded_query_validation.ps1`
- `02_EXODUS/tests/support_state_validation.ps1`
- `02_EXODUS/tests/source_disclosure_and_session_validation.ps1`
- `02_EXODUS/tests/resolver_metadata_validation.ps1`
- `02_EXODUS/tests/validation_harness.ps1`

**Failure Signals**
- `02_EXODUS/tests/e2e_grounded_query_validation.ps1` exits non-zero.
- `02_EXODUS/tests/validation_harness.ps1` exits non-zero.
