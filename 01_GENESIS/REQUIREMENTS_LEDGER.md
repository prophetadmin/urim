# REQUIREMENTS_LEDGER.md

**Derived From**
`01_GENESIS/PROJECT_SEED.md`

**Schema Version**
v1

## Mandatory Requirement Inventory

### REQ-1 - Deterministic Launch Shell

**Requirement Type**
surface

**Source Anchor**
A deterministic, repository-owned launch path for the local application layer.

**Requirement Statement**
The repository must own a deterministic launch shell that presents the application entry path, links the operator-facing surfaces, and keeps system startup under repository control instead of relying on hidden runtime entry points.

**Artifact Obligation**
- Repository-owned launch shell artifacts under `02_EXODUS/runtime/surface/`.
- Surface linkage artifacts that expose the browser entry path without referencing external runtime internals.

**Validation Obligation**
- `02_EXODUS/runtime/surface/app_shell.html` and `02_EXODUS/runtime/surface/app_shell.js` must exist.
- A command-based surface smoke check must prove the launch shell works with the owned browser surfaces.

**Mandatory**
yes

### REQ-2 - Browser Chat Surface

**Requirement Type**
surface

**Source Anchor**
A browser-accessible chat surface for query submission and answer display.

**Requirement Statement**
The application layer must provide a browser-accessible chat surface that collects user queries, submits them into the repository-owned execution path, and renders the resulting answer and support-state output.

**Artifact Obligation**
- Repository-owned chat surface artifacts under `02_EXODUS/runtime/surface/`.
- Chat-surface presentation assets that preserve query submission and answer display behavior.

**Validation Obligation**
- `02_EXODUS/runtime/surface/chat_app.html`, `02_EXODUS/runtime/surface/chat_app.js`, and `02_EXODUS/runtime/surface/chat_surface.css` must exist.
- A command-based end-to-end query validation must exercise the chat surface path.

**Mandatory**
yes

### REQ-3 - Browser Evidence Surface

**Requirement Type**
surface

**Source Anchor**
A browser-accessible evidence surface for readable authority inspection.

**Requirement Statement**
The application layer must provide a separate browser-accessible evidence surface that renders readable authority inspection material rather than leaving authority state inside opaque runtime data structures.

**Artifact Obligation**
- Repository-owned evidence surface artifacts under `02_EXODUS/runtime/surface/`.
- Evidence rendering logic that presents authority metadata and excerpts in readable form.

**Validation Obligation**
- `02_EXODUS/runtime/surface/evidence_panel.html`, `02_EXODUS/runtime/surface/evidence_panel.js`, and `02_EXODUS/runtime/surface/evidence_panel.css` must exist.
- A command-based validation path must prove readable authority inspection reaches the evidence surface.

**Mandatory**
yes

### REQ-4 - System Configuration Surface

**Requirement Type**
surface

**Source Anchor**
A browser-accessible system or configuration surface for operator-visible runtime state.

**Requirement Statement**
The application layer must expose a separate browser-accessible system or configuration surface so operators can inspect repository-owned runtime state without collapsing that function into the chat or evidence views.

**Artifact Obligation**
- Repository-owned system/configuration surface artifacts under `02_EXODUS/runtime/surface/`.
- Repository-owned state helpers that surface operator-visible runtime configuration details.

**Validation Obligation**
- `02_EXODUS/runtime/surface/system_config_panel.html`, `02_EXODUS/runtime/surface/system_config_panel.js`, and `02_EXODUS/runtime/surface/system_config_state.js` must exist.
- A command-based validation path must prove the operator-visible system surface is exercised.

**Mandatory**
yes

### REQ-5 - Repository-Owned Query Routing

**Requirement Type**
module

**Source Anchor**
Execution routing and control that forwards chat queries into the existing runtime and local services.

**Requirement Statement**
The query path must pass through repository-owned routing and control modules that forward requests into the existing runtime and local services while keeping request normalization, navigation state, and answer assembly boundaries inside repository-owned code.

**Artifact Obligation**
- Repository-owned workflow orchestration artifacts under `02_EXODUS/runtime/workflow/`.
- Repository-owned answer assembly artifacts under `02_EXODUS/runtime/services/`.

**Validation Obligation**
- `02_EXODUS/runtime/workflow/query_orchestrator.js` must preserve locator-only retrieval routing.
- A command-based end-to-end query validation must prove that repository-owned routing controls the runtime invocation path.

**Mandatory**
yes

### REQ-6 - External Runtime Boundary

**Requirement Type**
integration

**Source Anchor**
Integration with the existing runtime without decomposing or redefining its internal logic.

**Requirement Statement**
The repository must integrate with the existing runtime and local services through explicit adapter and client boundaries that preserve non-ownership of runtime internals and forbid modeling or claiming the runtime's internal implementation as repository-owned output.

**Artifact Obligation**
- Repository-owned integration clients under `02_EXODUS/runtime/integrations/`.
- Repository-owned foundation adapter and registry artifacts under `02_EXODUS/runtime/services/`.

**Validation Obligation**
- A command-based integration smoke check must prove the external runtime boundary is wired through owned adapters and clients.
- Artifact coverage must remain limited to repository-owned paths and must not claim existing runtime internal files as produced outputs.

**Mandatory**
yes

### REQ-7 - Boxed Authority Resolution

**Requirement Type**
data

**Source Anchor**
Boxed-authority resolution that reads readable authority only from boxed artifacts.

**Requirement Statement**
The repository must normalize retrieval metadata, resolve stable source identity, and read readable authority content exclusively from boxed artifacts rather than from opaque runtime payloads or inferred internal runtime structures.

**Artifact Obligation**
- Repository-owned metadata normalization, resolver, and boxed-authority reader artifacts.
- Stable source identity handling that remains bound to boxed authority metadata.

**Validation Obligation**
- `02_EXODUS/runtime/resolver/boxed_authority_resolver.js` must preserve stable source identity handling.
- A command-based resolver validation must prove readable authority is resolved from boxed artifacts.

**Mandatory**
yes

### REQ-8 - Locator-Only Retrieval Semantics

**Requirement Type**
constraint

**Source Anchor**
Qdrant is available to the system as a locator layer and not as the readable authority surface.

**Requirement Statement**
The repository-owned query path must treat Qdrant strictly as a locator-only retrieval boundary so readable authority remains separated from vector hits and flows through boxed-authority resolution instead of direct payload display.

**Artifact Obligation**
- Retrieval integration artifacts that preserve the configured locator-only boundary.
- Workflow artifacts that propagate locator-only semantics through execution.

**Validation Obligation**
- `02_EXODUS/runtime/workflow/query_orchestrator.js` must contain the exact anchor string `vector_locator_only`.
- A command-based workflow validation must prove locator-only retrieval semantics remain intact.

**Mandatory**
yes

### REQ-9 - Explicit Session Persistence

**Requirement Type**
behavior

**Source Anchor**
Session persistence and disclosure control owned by the repository application layer.

**Requirement Statement**
The application layer must own session persistence behavior and require explicit repository-controlled save actions instead of silently persisting session state through hidden runtime behavior.

**Artifact Obligation**
- Repository-owned session storage and serialization artifacts under `02_EXODUS/runtime/session/`.
- Repository-owned persistence policy anchors that enforce explicit save behavior.

**Validation Obligation**
- `02_EXODUS/runtime/session/session_store.js` must preserve an explicit save policy anchor.
- A command-based disclosure and session validation must prove session persistence occurs only through explicit user action.

**Mandatory**
yes

### REQ-10 - Truthful Failure And Support State

**Requirement Type**
behavior

**Source Anchor**
The application layer must expose truthful failure states when any part of the runtime path breaks.

**Requirement Statement**
The repository-owned answer assembly and policy boundaries must propagate truthful support-state and failure-state behavior to the user-facing application layer whenever retrieval, resolution, or response assembly does not provide sufficient support.

**Artifact Obligation**
- Repository-owned support-state modeling and policy enforcement artifacts.
- Repository-owned grounded-answer assembly that exposes support state to the UI layer.

**Validation Obligation**
- `02_EXODUS/runtime/services/grounded_answer_service.js` and `02_EXODUS/runtime/policy/support_state_model.js` must exist.
- A command-based support-state validation must prove truthful failure-state behavior is emitted.

**Mandatory**
yes

### REQ-11 - Separate Operator-Visible Surfaces

**Requirement Type**
constraint

**Source Anchor**
Chat, evidence, and system or configuration views must remain separate browser-accessible surfaces.

**Requirement Statement**
The repository-owned application layer must preserve separate chat, evidence, and system/configuration browser surfaces so operator responsibilities, evidence inspection, and chat interaction do not collapse into one generic surface.

**Artifact Obligation**
- Distinct repository-owned surface artifacts for the launch shell, chat surface, evidence surface, and system/configuration surface.
- Surface-linking logic that preserves separation rather than merging sibling surfaces into one page boundary.

**Validation Obligation**
- The owned surface HTML artifacts must exist as separate files.
- A command-based surface smoke check must prove separate browser-surface boundaries remain present.

**Mandatory**
yes

### REQ-12 - Readable Authority Inspection Metadata

**Requirement Type**
behavior

**Source Anchor**
Evidence inspection must present readable authority and stable source identity rather than opaque locator-only payloads.

**Requirement Statement**
Evidence inspection must present stable source identity and readable authority metadata through repository-owned rendering and resolver boundaries so operators can inspect the authority basis of an answer without seeing opaque retrieval payloads alone.

**Artifact Obligation**
- Repository-owned authority rendering artifacts in the evidence surface.
- Repository-owned resolver and data-reader artifacts that preserve stable source identity and readable authority metadata.

**Validation Obligation**
- Evidence and resolver artifacts must preserve stable source identity anchors.
- A command-based resolver or end-to-end validation must prove readable authority metadata reaches operator-visible inspection paths.

**Mandatory**
yes

### REQ-13 - Explicit Source Disclosure Control

**Requirement Type**
behavior

**Source Anchor**
Source disclosure must happen only when explicitly requested.

**Requirement Statement**
The repository-owned application layer must gate source disclosure through explicit request handling so source material is exposed only when the operator asks for it and not as a hidden or automatic side effect of answer generation.

**Artifact Obligation**
- Repository-owned disclosure state control artifacts under `02_EXODUS/runtime/policy/`.
- Repository-owned chat and session artifacts that preserve explicit disclosure request flow.

**Validation Obligation**
- `02_EXODUS/runtime/surface/chat_app.js` must preserve a source disclosure request anchor.
- A command-based disclosure and session validation must prove source disclosure is enabled only when explicitly requested.

**Mandatory**
yes

### REQ-14 - Executable Seed-To-Planning Proof

**Requirement Type**
validation

**Source Anchor**
Executable validation that proves the runtime path, authority resolution path, and user-facing behavior path.

**Requirement Statement**
The repository must own executable validation artifacts that prove the integrated runtime path, boxed-authority path, disclosure path, session path, and seed-rooted planning traceability without reducing project acceptance to documentation-only review.

**Artifact Obligation**
- Repository-owned validation scripts under `02_EXODUS/tests/`.
- A repository-owned validation harness that preserves seed-derived planning proof anchored to `01_GENESIS/PROJECT_SEED.md`.

**Validation Obligation**
- `02_EXODUS/tests/validation_harness.ps1` must contain explicit seed-derived planning proof anchors.
- Command-based validation scripts must execute with zero exit code across integration, workflow, surface, disclosure, resolver, and harness paths.

**Mandatory**
yes

## Component Inventory

### COMP-1 - Application Launch Shell

**Component Type**
surface

**Source Requirement IDs**
- `REQ-1`
- `REQ-11`

**Purpose**
Provide the repository-owned launch shell that makes the system operable as a local application entry point while preserving links to distinct operator-visible browser surfaces.

**Dependencies**
- `None`

**Artifact Obligation**
- `02_EXODUS/runtime/surface/app_shell.html`
- `02_EXODUS/runtime/surface/app_shell.js`

**Runtime Responsibility**
- Expose the repository-owned launch path.
- Preserve navigation to distinct operator-facing surfaces.

**Validation Obligation**
- `02_EXODUS/tests/phase3_surface_session_smoke.ps1` must exercise the launch shell and linked surfaces.
- Launch shell artifacts must remain separate from sibling surface artifacts.

### COMP-2 - Chat Surface

**Component Type**
surface

**Source Requirement IDs**
- `REQ-2`
- `REQ-10`
- `REQ-13`

**Purpose**
Provide the browser chat surface that accepts questions, routes repository-owned query payloads, renders grounded answers, and preserves explicit disclosure and support-state output.

**Dependencies**
- `COMP-1`
- `COMP-5`
- `COMP-8`
- `COMP-9`

**Artifact Obligation**
- `02_EXODUS/runtime/surface/chat_app.html`
- `02_EXODUS/runtime/surface/chat_app.js`
- `02_EXODUS/runtime/surface/chat_surface.css`

**Runtime Responsibility**
- Collect chat input and disclosure intent.
- Render answer text, support state, and disclosed source output.

**Validation Obligation**
- `02_EXODUS/tests/e2e_grounded_query_validation.ps1` must exercise the chat answer path.
- `02_EXODUS/tests/source_disclosure_and_session_validation.ps1` must prove explicit disclosure behavior at the chat boundary.

### COMP-3 - Evidence Surface

**Component Type**
surface

**Source Requirement IDs**
- `REQ-3`
- `REQ-12`

**Purpose**
Provide the separate evidence surface that presents readable authority excerpts and stable source identity for operator inspection without collapsing that function into chat rendering.

**Dependencies**
- `COMP-1`
- `COMP-6`

**Artifact Obligation**
- `02_EXODUS/runtime/surface/evidence_panel.html`
- `02_EXODUS/runtime/surface/evidence_panel.js`
- `02_EXODUS/runtime/surface/evidence_panel.css`

**Runtime Responsibility**
- Render readable authority rows and excerpts.
- Preserve stable source identity and boxed metadata visibility for operators.

**Validation Obligation**
- `02_EXODUS/tests/e2e_grounded_query_validation.ps1` must prove evidence-ready source output is produced.
- `02_EXODUS/tests/resolver_metadata_validation.ps1` must prove stable source identity and resolver metadata are preserved.

### COMP-4 - System Configuration Surface

**Component Type**
surface

**Source Requirement IDs**
- `REQ-4`
- `REQ-11`

**Purpose**
Provide the separate system/configuration surface that exposes repository-owned runtime state for operators without folding operational state into the chat or evidence surfaces.

**Dependencies**
- `COMP-1`
- `COMP-5`

**Artifact Obligation**
- `02_EXODUS/runtime/surface/system_config_panel.html`
- `02_EXODUS/runtime/surface/system_config_panel.js`
- `02_EXODUS/runtime/surface/system_config_state.js`

**Runtime Responsibility**
- Expose operator-visible runtime state.
- Preserve separation between configuration inspection and chat interaction.

**Validation Obligation**
- `02_EXODUS/tests/validation_harness.ps1` must exercise the system/configuration surface path through the owned validation flow.
- `02_EXODUS/tests/phase3_surface_session_smoke.ps1` must prove the system surface remains distinct from sibling surfaces.

### COMP-5 - Query Workflow And Navigation Control

**Component Type**
workflow

**Source Requirement IDs**
- `REQ-5`
- `REQ-8`

**Purpose**
Own the repository-controlled query orchestration and navigation-state boundaries that normalize chat requests, preserve locator-only retrieval semantics, and forward work into the owned integration and authority-resolution layers.

**Dependencies**
- `COMP-6`
- `COMP-7`

**Artifact Obligation**
- `02_EXODUS/runtime/workflow/query_orchestrator.js`
- `02_EXODUS/runtime/workflow/navigation_state.js`

**Runtime Responsibility**
- Route query execution through repository-owned control flow.
- Preserve locator-only retrieval role and navigation state across execution.

**Validation Obligation**
- `02_EXODUS/tests/phase2_workflow_policy_smoke.ps1` must prove workflow control and locator-only routing.
- `02_EXODUS/tests/e2e_grounded_query_validation.ps1` must prove the workflow controls the end-to-end query path.

### COMP-6 - Boxed Authority Resolution Pipeline

**Component Type**
module

**Source Requirement IDs**
- `REQ-7`
- `REQ-12`

**Purpose**
Own the repository-controlled metadata normalization, stable identity resolution, and boxed-authority reading pipeline that turns retrieval hits into readable authority objects.

**Dependencies**
- `COMP-7`

**Artifact Obligation**
- `02_EXODUS/runtime/workflow/retrieval_metadata_normalizer.js`
- `02_EXODUS/runtime/resolver/boxed_authority_resolver.js`
- `02_EXODUS/runtime/data/boxed_authority_reader.js`

**Runtime Responsibility**
- Normalize retrieval metadata required for stable identity resolution.
- Resolve readable authority only from boxed artifacts and preserve stable source identity.

**Validation Obligation**
- `02_EXODUS/tests/resolver_metadata_validation.ps1` must prove metadata normalization and stable identity behavior.
- `02_EXODUS/tests/e2e_grounded_query_validation.ps1` must prove resolved authority objects reach the downstream answer path.

### COMP-7 - Runtime Integration Adapters

**Component Type**
integration

**Source Requirement IDs**
- `REQ-6`
- `REQ-8`

**Purpose**
Own the repository-controlled client, adapter, and registry boundaries that connect the application layer to existing runtime and local service endpoints without representing the runtime's internal structure as project-owned implementation.

**Dependencies**
- `None`

**Artifact Obligation**
- `02_EXODUS/runtime/integrations/chat_api_client.js`
- `02_EXODUS/runtime/integrations/embedding_client.js`
- `02_EXODUS/runtime/integrations/qdrant_client.js`
- `02_EXODUS/runtime/services/urim_foundation_adapter.js`
- `02_EXODUS/runtime/services/urim_foundation_registry.js`

**Runtime Responsibility**
- Bridge repository-owned calls into existing runtime and local services.
- Preserve explicit external-boundary ownership and locator-only integration behavior.

**Validation Obligation**
- `02_EXODUS/tests/phase1_integration_smoke.ps1` must prove integration clients and adapters are wired.
- `02_EXODUS/tests/resolver_metadata_validation.ps1` must prove integration output remains compatible with boxed-authority resolution.

### COMP-8 - Grounded Answer And Policy Control

**Component Type**
service

**Source Requirement IDs**
- `REQ-10`
- `REQ-13`

**Purpose**
Own the repository-controlled answer assembly, interaction policy, disclosure policy, and support-state behavior that govern truthful answer output and explicit disclosure handling.

**Dependencies**
- `COMP-5`
- `COMP-6`
- `COMP-7`

**Artifact Obligation**
- `02_EXODUS/runtime/services/grounded_answer_service.js`
- `02_EXODUS/runtime/policy/policy_enforcer.js`
- `02_EXODUS/runtime/policy/interaction_policy_controller.js`
- `02_EXODUS/runtime/policy/disclosure_state_controller.js`
- `02_EXODUS/runtime/policy/support_state_model.js`

**Runtime Responsibility**
- Assemble grounded answers from resolved authority content.
- Enforce no-model-switching, disclosure, and support-state policy behavior.

**Validation Obligation**
- `02_EXODUS/tests/phase2_workflow_policy_smoke.ps1` must prove workflow-policy coordination.
- `02_EXODUS/tests/support_state_validation.ps1` must prove truthful support-state output.

### COMP-9 - Session Persistence Control

**Component Type**
data_store

**Source Requirement IDs**
- `REQ-9`
- `REQ-13`

**Purpose**
Own the repository-controlled session persistence and serialization boundary so session saves and disclosure-related state remain explicit, inspectable, and independent from hidden runtime persistence behavior.

**Dependencies**
- `None`

**Artifact Obligation**
- `02_EXODUS/runtime/session/session_store.js`
- `02_EXODUS/runtime/session/session_serializer.js`

**Runtime Responsibility**
- Persist and serialize repository-owned session snapshots.
- Enforce explicit user-triggered save behavior for session state.

**Validation Obligation**
- `02_EXODUS/tests/source_disclosure_and_session_validation.ps1` must prove explicit session-save behavior.
- `02_EXODUS/tests/phase3_surface_session_smoke.ps1` must prove the session boundary remains wired into the owned surfaces.

### COMP-10 - Validation Harness

**Component Type**
validation_harness

**Source Requirement IDs**
- `REQ-14`

**Purpose**
Own the repository-controlled validation scripts and harness that prove the integrated system path and preserve deterministic seed-to-planning proof rooted in `01_GENESIS/PROJECT_SEED.md`.

**Dependencies**
- `COMP-2`
- `COMP-3`
- `COMP-4`
- `COMP-5`
- `COMP-6`
- `COMP-7`
- `COMP-8`
- `COMP-9`

**Artifact Obligation**
- `02_EXODUS/tests/phase1_integration_smoke.ps1`
- `02_EXODUS/tests/phase2_workflow_policy_smoke.ps1`
- `02_EXODUS/tests/phase3_surface_session_smoke.ps1`
- `02_EXODUS/tests/e2e_grounded_query_validation.ps1`
- `02_EXODUS/tests/support_state_validation.ps1`
- `02_EXODUS/tests/source_disclosure_and_session_validation.ps1`
- `02_EXODUS/tests/resolver_metadata_validation.ps1`
- `02_EXODUS/tests/validation_harness.ps1`

**Runtime Responsibility**
- Execute repository-owned proof of integration, workflow, surfaces, disclosure, session, resolver, and seed-rooted planning behavior.
- Preserve validation anchors that explicitly tie project proof back to `01_GENESIS/PROJECT_SEED.md`.

**Validation Obligation**
- `02_EXODUS/tests/validation_harness.ps1` must preserve explicit seed-to-planning proof anchors.
- Command-based validation must execute phase-level and terminal harness checks with zero exit code.

## Explicit Exclusions

- Defining the internal implementation of the existing grounded-query runtime.
- Rebuilding the existing runtime instead of integrating with it.
- Claiming ownership of the existing runtime's internal modules, structure, or artifacts.
- Absorbing the existing runtime into this repository as a project-owned implementation boundary.
