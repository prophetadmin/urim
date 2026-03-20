# COMPONENT_REALIZATION_MAP.md

**Derived From**
`01_GENESIS/PROJECT_SEED.md`
`01_GENESIS/REQUIREMENTS_LEDGER.md`

**Schema Version**
v1

## Realization Inventory

### REAL-1 - Application Launch Shell

**Source Component ID**
`COMP-1`

**Source Requirement IDs**
- `REQ-1`
- `REQ-11`

**Primary Artifact Paths**
- `02_EXODUS/runtime/surface/app_shell.html`
- `02_EXODUS/runtime/surface/app_shell.js`

**Supporting Artifact Paths**
- `02_EXODUS/runtime/surface/chat_app.html`
- `02_EXODUS/runtime/surface/evidence_panel.html`
- `02_EXODUS/runtime/surface/system_config_panel.html`

**Dependency Components**
- `None`

**Boundary Rules**
- The launch shell owns only the repository-owned entry shell and may not absorb the chat, evidence, or system/configuration surface artifacts into one generic file set.
- The launch shell must preserve surface separation by linking sibling surfaces rather than reclassifying them as runtime internals.

**Validation Artifact Paths**
- `02_EXODUS/tests/phase3_surface_session_smoke.ps1`

**Realization Objective**
Materialize the repository-owned application launch boundary as distinct shell artifacts that expose the local entry path and preserve navigation to separate operator-visible surfaces without modeling external runtime internals.

### REAL-2 - Chat Surface

**Source Component ID**
`COMP-2`

**Source Requirement IDs**
- `REQ-2`
- `REQ-10`
- `REQ-13`

**Primary Artifact Paths**
- `02_EXODUS/runtime/surface/chat_app.html`
- `02_EXODUS/runtime/surface/chat_app.js`
- `02_EXODUS/runtime/surface/chat_surface.css`

**Supporting Artifact Paths**
- `02_EXODUS/runtime/workflow/query_orchestrator.js`
- `02_EXODUS/runtime/services/grounded_answer_service.js`
- `02_EXODUS/runtime/session/session_store.js`

**Dependency Components**
- `COMP-1`
- `COMP-5`
- `COMP-8`
- `COMP-9`

**Boundary Rules**
- The chat surface must remain separate from the evidence and system/configuration surfaces even when they share launch navigation.
- The chat surface may request disclosure state and render support state, but it may not absorb session persistence or policy modules into the surface ownership set.

**Validation Artifact Paths**
- `02_EXODUS/tests/e2e_grounded_query_validation.ps1`
- `02_EXODUS/tests/source_disclosure_and_session_validation.ps1`

**Realization Objective**
Materialize the browser chat interface as distinct repository-owned surface artifacts that submit owned query payloads, render grounded answers and support state, and preserve explicit disclosure flow without collapsing adjacent surface or policy boundaries.

### REAL-3 - Evidence Surface

**Source Component ID**
`COMP-3`

**Source Requirement IDs**
- `REQ-3`
- `REQ-12`

**Primary Artifact Paths**
- `02_EXODUS/runtime/surface/evidence_panel.html`
- `02_EXODUS/runtime/surface/evidence_panel.js`
- `02_EXODUS/runtime/surface/evidence_panel.css`

**Supporting Artifact Paths**
- `02_EXODUS/runtime/resolver/boxed_authority_resolver.js`
- `02_EXODUS/runtime/data/boxed_authority_reader.js`

**Dependency Components**
- `COMP-1`
- `COMP-6`

**Boundary Rules**
- The evidence surface must remain a sibling surface and may not collapse into the chat surface artifact set.
- Evidence rendering must preserve stable source identity and readable authority presentation rather than exposing raw locator payloads alone.

**Validation Artifact Paths**
- `02_EXODUS/tests/e2e_grounded_query_validation.ps1`
- `02_EXODUS/tests/resolver_metadata_validation.ps1`

**Realization Objective**
Materialize the evidence inspection boundary as distinct repository-owned surface artifacts that present readable authority content and stable source identity using the boxed-authority pipeline without merging that responsibility into chat rendering.

### REAL-4 - System Configuration Surface

**Source Component ID**
`COMP-4`

**Source Requirement IDs**
- `REQ-4`
- `REQ-11`

**Primary Artifact Paths**
- `02_EXODUS/runtime/surface/system_config_panel.html`
- `02_EXODUS/runtime/surface/system_config_panel.js`
- `02_EXODUS/runtime/surface/system_config_state.js`

**Supporting Artifact Paths**
- `02_EXODUS/runtime/surface/app_shell.js`
- `02_EXODUS/runtime/workflow/navigation_state.js`

**Dependency Components**
- `COMP-1`
- `COMP-5`

**Boundary Rules**
- The system/configuration surface must remain separate from the chat and evidence surfaces even when all are reachable from the launch shell.
- Operator-visible runtime state ownership belongs to repository-owned system/configuration artifacts and must not be represented as runtime-internal implementation.

**Validation Artifact Paths**
- `02_EXODUS/tests/phase3_surface_session_smoke.ps1`
- `02_EXODUS/tests/validation_harness.ps1`

**Realization Objective**
Materialize the operator-visible system/configuration boundary as distinct repository-owned surface artifacts and state helpers that expose runtime state without merging that responsibility into chat or evidence presentation artifacts.

### REAL-5 - Query Workflow And Navigation Control

**Source Component ID**
`COMP-5`

**Source Requirement IDs**
- `REQ-5`
- `REQ-8`

**Primary Artifact Paths**
- `02_EXODUS/runtime/workflow/query_orchestrator.js`
- `02_EXODUS/runtime/workflow/navigation_state.js`

**Supporting Artifact Paths**
- `02_EXODUS/runtime/services/grounded_answer_service.js`
- `02_EXODUS/runtime/integrations/qdrant_client.js`

**Dependency Components**
- `COMP-6`
- `COMP-7`

**Boundary Rules**
- Workflow control must remain separate from integration clients so repository-owned routing logic is not collapsed into transport code.
- Workflow artifacts must preserve locator-only retrieval semantics and may not treat vector hits as readable authority output.

**Validation Artifact Paths**
- `02_EXODUS/tests/phase2_workflow_policy_smoke.ps1`
- `02_EXODUS/tests/e2e_grounded_query_validation.ps1`

**Realization Objective**
Materialize the repository-owned query workflow as distinct control artifacts that route chat input through locator-only retrieval and downstream authority and answer services without absorbing integration or surface ownership boundaries.

### REAL-6 - Boxed Authority Resolution Pipeline

**Source Component ID**
`COMP-6`

**Source Requirement IDs**
- `REQ-7`
- `REQ-12`

**Primary Artifact Paths**
- `02_EXODUS/runtime/workflow/retrieval_metadata_normalizer.js`
- `02_EXODUS/runtime/resolver/boxed_authority_resolver.js`
- `02_EXODUS/runtime/data/boxed_authority_reader.js`

**Supporting Artifact Paths**
- `02_EXODUS/runtime/surface/evidence_panel.js`
- `02_EXODUS/runtime/workflow/query_orchestrator.js`

**Dependency Components**
- `COMP-7`

**Boundary Rules**
- Metadata normalization, stable identity resolution, and boxed-authority reading must remain repository-owned and must not represent the internal structure of the external runtime.
- The resolution pipeline must preserve readable authority and stable source identity as distinct outputs from locator retrieval.

**Validation Artifact Paths**
- `02_EXODUS/tests/resolver_metadata_validation.ps1`
- `02_EXODUS/tests/e2e_grounded_query_validation.ps1`

**Realization Objective**
Materialize the boxed-authority pipeline as distinct repository-owned normalization, resolver, and reader artifacts that transform locator hits into readable authority objects with stable identity for downstream evidence and answer assembly behavior.

### REAL-7 - Runtime Integration Adapters

**Source Component ID**
`COMP-7`

**Source Requirement IDs**
- `REQ-6`
- `REQ-8`

**Primary Artifact Paths**
- `02_EXODUS/runtime/integrations/chat_api_client.js`
- `02_EXODUS/runtime/integrations/embedding_client.js`
- `02_EXODUS/runtime/integrations/qdrant_client.js`
- `02_EXODUS/runtime/services/urim_foundation_adapter.js`
- `02_EXODUS/runtime/services/urim_foundation_registry.js`

**Supporting Artifact Paths**
- `02_EXODUS/runtime/workflow/query_orchestrator.js`
- `02_EXODUS/runtime/resolver/boxed_authority_resolver.js`

**Dependency Components**
- `None`

**Boundary Rules**
- Integration adapters may bridge to the existing runtime and local services but may not claim or model the runtime's internal artifact ownership.
- Qdrant integration must remain locator-only and may not become the readable authority surface.

**Validation Artifact Paths**
- `02_EXODUS/tests/phase1_integration_smoke.ps1`
- `02_EXODUS/tests/resolver_metadata_validation.ps1`

**Realization Objective**
Materialize the external runtime boundary as repository-owned client, adapter, and registry artifacts that bridge to existing services while preserving explicit non-ownership of runtime internals and locator-only integration semantics.

### REAL-8 - Grounded Answer And Policy Control

**Source Component ID**
`COMP-8`

**Source Requirement IDs**
- `REQ-10`
- `REQ-13`

**Primary Artifact Paths**
- `02_EXODUS/runtime/services/grounded_answer_service.js`
- `02_EXODUS/runtime/policy/policy_enforcer.js`
- `02_EXODUS/runtime/policy/interaction_policy_controller.js`
- `02_EXODUS/runtime/policy/disclosure_state_controller.js`
- `02_EXODUS/runtime/policy/support_state_model.js`

**Supporting Artifact Paths**
- `02_EXODUS/runtime/workflow/query_orchestrator.js`
- `02_EXODUS/runtime/surface/chat_app.js`

**Dependency Components**
- `COMP-5`
- `COMP-6`
- `COMP-7`

**Boundary Rules**
- Policy control must remain separate from surface rendering so explicit disclosure and support-state behavior are enforced through owned control artifacts.
- Grounded answer assembly must consume resolved authority content and must not collapse into raw retrieval payload formatting.

**Validation Artifact Paths**
- `02_EXODUS/tests/phase2_workflow_policy_smoke.ps1`
- `02_EXODUS/tests/support_state_validation.ps1`
- `02_EXODUS/tests/source_disclosure_and_session_validation.ps1`

**Realization Objective**
Materialize the repository-owned policy and answer layer as distinct service and policy artifacts that enforce disclosure rules, truthful support-state behavior, and grounded answer assembly from resolved authority inputs.

### REAL-9 - Session Persistence Control

**Source Component ID**
`COMP-9`

**Source Requirement IDs**
- `REQ-9`
- `REQ-13`

**Primary Artifact Paths**
- `02_EXODUS/runtime/session/session_store.js`
- `02_EXODUS/runtime/session/session_serializer.js`

**Supporting Artifact Paths**
- `02_EXODUS/runtime/surface/chat_app.js`
- `02_EXODUS/runtime/policy/disclosure_state_controller.js`

**Dependency Components**
- `None`

**Boundary Rules**
- Session persistence must remain a repository-owned storage boundary and may not rely on hidden runtime persistence behavior.
- Session control must preserve explicit user-triggered save policy and must not collapse into chat-surface rendering logic.

**Validation Artifact Paths**
- `02_EXODUS/tests/phase3_surface_session_smoke.ps1`
- `02_EXODUS/tests/source_disclosure_and_session_validation.ps1`

**Realization Objective**
Materialize explicit session persistence as distinct repository-owned storage artifacts that serialize session state and enforce user-triggered save behavior without absorbing policy or chat-surface ownership boundaries.

### REAL-10 - Validation Harness

**Source Component ID**
`COMP-10`

**Source Requirement IDs**
- `REQ-14`

**Primary Artifact Paths**
- `02_EXODUS/tests/phase1_integration_smoke.ps1`
- `02_EXODUS/tests/phase2_workflow_policy_smoke.ps1`
- `02_EXODUS/tests/phase3_surface_session_smoke.ps1`
- `02_EXODUS/tests/e2e_grounded_query_validation.ps1`
- `02_EXODUS/tests/support_state_validation.ps1`
- `02_EXODUS/tests/source_disclosure_and_session_validation.ps1`
- `02_EXODUS/tests/resolver_metadata_validation.ps1`
- `02_EXODUS/tests/validation_harness.ps1`

**Supporting Artifact Paths**
- `None`

**Dependency Components**
- `COMP-2`
- `COMP-3`
- `COMP-4`
- `COMP-5`
- `COMP-6`
- `COMP-7`
- `COMP-8`
- `COMP-9`

**Boundary Rules**
- The validation harness must preserve seed-rooted planning proof explicitly and may not collapse into generic runtime smoke-only validation.
- Validation artifacts may exercise multiple components, but they may not redefine component ownership or runtime internals as produced application artifacts.

**Validation Artifact Paths**
- `02_EXODUS/tests/validation_harness.ps1`

**Realization Objective**
Materialize the repository-owned validation boundary as a complete executable script inventory that proves integration, workflow, surfaces, disclosure, session, resolver, and seed-rooted planning traceability without phase sequencing leakage.
