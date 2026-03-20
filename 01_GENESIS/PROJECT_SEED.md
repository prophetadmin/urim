Project Intent
URIM App creates a repository-owned application layer that makes an existing grounded-query runtime launchable, operable, inspectable, and verifiable as a real local system without rebuilding, redefining, or absorbing that runtime's internal implementation.

Problem Statement
The existing grounded-query runtime remains external to this project, so the repository still needs its own launch path, browser-facing operating surfaces, execution routing, boxed-authority inspection, explicit disclosure and session controls, and executable validation in order to turn that runtime into a real local system that operators can use and verify without crossing the ownership boundary into runtime internals.

Scope Boundaries
Included
- A deterministic, repository-owned launch path for the local application layer.
- A browser-accessible chat surface for query submission and answer display.
- A browser-accessible evidence surface for readable authority inspection.
- A browser-accessible system or configuration surface for operator-visible runtime state.
- Execution routing and control that forwards chat queries into the existing runtime and local services.
- Integration with the existing runtime without decomposing or redefining its internal logic.
- Boxed-authority resolution that reads readable authority only from boxed artifacts.
- Session persistence and disclosure control owned by the repository application layer.
- Executable validation that proves the runtime path, authority resolution path, and user-facing behavior path.

Excluded
- Defining the internal implementation of the existing grounded-query runtime.
- Rebuilding the existing runtime instead of integrating with it.
- Claiming ownership of the existing runtime's internal modules, structure, or artifacts.

Non-Goals
- Absorbing the existing runtime into this repository as a project-owned implementation boundary.

Environment Assumptions
- An existing grounded-query runtime already exists outside the project-owned application layer.
- Local services required by the application layer are available to repository-owned integration artifacts during execution.
- Readable authority content can be resolved from boxed artifacts rather than opaque runtime memory.
- Qdrant is available to the system as a locator layer and not as the readable authority surface.

Constraints
- The application layer must explicitly wire into the existing runtime and local services without redefining the runtime's internal logic.
- No requirement, component, or roadmap phase may assign ownership to the internal artifacts of the existing runtime.
- No component may represent the internal structure of the existing runtime.
- No roadmap phase may claim files from the existing runtime as produced outputs.
- The query path must route through a repository-owned execution routing and control layer before invoking the existing runtime and local services.
- Readable authority must be resolved exclusively from boxed artifacts.
- The application layer must expose truthful failure states when any part of the runtime path breaks.

Product Experience Invariants
- The finished system must be launchable and operable as a real local system rather than a hidden runtime entry point.
- Chat, evidence, and system or configuration views must remain separate browser-accessible surfaces.
- Evidence inspection must present readable authority and stable source identity rather than opaque locator-only payloads.
- Source disclosure must happen only when explicitly requested.
- Session persistence must happen only through explicit user action.

Success Definition
- File exists at 02_EXODUS/runtime/surface/app_shell.html.
- File exists at 02_EXODUS/runtime/surface/chat_app.html.
- File exists at 02_EXODUS/runtime/surface/evidence_panel.html.
- File exists at 02_EXODUS/runtime/surface/system_config_panel.html.
- File exists at 02_EXODUS/runtime/workflow/query_orchestrator.js.
- File exists at 02_EXODUS/runtime/resolver/boxed_authority_resolver.js.
- File exists at 02_EXODUS/runtime/session/session_store.js.
- 02_EXODUS/runtime/workflow/query_orchestrator.js contains the exact string: "vector_locator_only".
- 02_EXODUS/runtime/session/session_store.js contains the exact string: "user_triggered_save".
- File exists at 02_EXODUS/tests/validation_harness.ps1.
- Command "powershell -ExecutionPolicy Bypass -File 02_EXODUS/tests/validation_harness.ps1" exits with code 0 and emits "PASS" in stdout.
