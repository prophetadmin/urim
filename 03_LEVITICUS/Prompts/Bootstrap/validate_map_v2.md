# /validate_map_v2 Prompt

Command Name
/validate_map_v2

Purpose
Validate a roadmap artifact against `03_LEVITICUS/Core/ROADMAP_SCHEMA_v2.md`,
requirements-ledger coverage, and seed-coverage requirements so roadmap
acceptance cannot pass on documentation-only implementation criteria or
receipt-omitting phase criteria.

Required Inputs
`01_GENESIS/PROJECT_SEED.md`
`01_GENESIS/REQUIREMENTS_LEDGER.md`
`01_GENESIS/COMPONENT_REALIZATION_MAP.md`
`03_LEVITICUS/Core/COMPONENT_REALIZATION_MAP_SCHEMA_v1.md`
`03_LEVITICUS/Core/REQUIREMENTS_LEDGER_SCHEMA_v1.md`
`03_LEVITICUS/Core/ROADMAP_SCHEMA_v2.md`
`03_LEVITICUS/Core/PHASE_COMPLETION_RECEIPT_SCHEMA_v1.md`
`03_LEVITICUS/Core/FAILURE_CODES_v1.md`
`03_LEVITICUS/PROJECT_ROADMAP_v<INTEGER>.md` (target)

Validation Checks (All Required)
1. Schema structure and subsection order exactly match v2 schema.
2. Phase identifiers are monotonically increasing integers starting at 1.
3. `01_GENESIS/REQUIREMENTS_LEDGER.md` conforms to
   `03_LEVITICUS/Core/REQUIREMENTS_LEDGER_SCHEMA_v1.md`.
4. `01_GENESIS/COMPONENT_REALIZATION_MAP.md` conforms to
   `03_LEVITICUS/Core/COMPONENT_REALIZATION_MAP_SCHEMA_v1.md`.
5. Required `Requirements Coverage Matrix` exists and maps every mandatory
   requirements-ledger item to concrete phase Exit Criteria and Produced
   Artifacts.
6. Required `Component Coverage Matrix` exists and maps every component block
   to concrete phase Exit Criteria and Produced Artifacts.
7. Required `Seed Coverage Matrix` exists and maps:
   - all seed Scope Boundaries Included items
   - all seed Constraints items
   to concrete phase Exit Criteria.
8. Every realization block primary artifact path appears in roadmap Produced
   Artifacts and remains attributable to the source component coverage rather
   than being omitted.
9. If the realization map preserves build-distinct surface or control-layer
   realization blocks, the roadmap does not collapse them into identical
   produced artifact coverage.
10. `PHASE 1` has `Phase Type` = `implementation`.
11. At least one phase has `Phase Type` = `implementation`.
12. At least one phase has `Phase Type` = `validation`.
13. Every `implementation` phase includes:
   - at least one command-based Exit Criterion
   - at least one non-documentation produced artifact under `02_EXODUS/`
   - at least one non-dry-run command criterion
14. No implementation phase can complete using only `.md` file-exists and anchor
   checks.
15. Every mandatory requirement maps to at least one produced artifact path
    under `02_EXODUS/` that does not end with `.md`.
16. No mandatory ledger item of type `surface`, `module`, or `integration`
    maps only to documentation artifacts or anchor checks.
17. Every component block maps to at least one produced artifact path under
    `02_EXODUS/` that does not end with `.md`.
18. No component block maps only to documentation artifacts or anchor checks.
19. Component dependency ordering is not contradicted by mapped phase order.
20. Validation phase includes at least one command criterion that exercises the
   end-to-end system path implied by the seed problem and included scope.
21. If the requirements ledger contains a mandatory `surface` requirement, the
    roadmap includes at least one implementation artifact and one validation
    command that exercise that surface.
22. If the requirements ledger contains build-distinct component blocks, the
    roadmap preserves them as separately mappable implementation or validation
    work rather than collapsing them into one generic artifact path.
23. Roadmap does not invent command/path/framework conventions unless grounded in
   seed or explicitly allowed in policy.
24. No phase requires a validation script or command to pass before all
    artifacts exercised by that script or command are realized in roadmap
    phase order.
25. If the requirements ledger contains any mandatory validation requirement
    whose statement, artifact obligation, or validation obligation
    establishes deterministic bootstrap or seed-to-planning proof rooted in
    `01_GENESIS/PROJECT_SEED.md`, or the component realization map contains
    any realization block whose objective or boundary rules establish
    deterministic bootstrap proof rooted in `01_GENESIS/PROJECT_SEED.md`, the
    roadmap contains a terminal validation phase dedicated to that proof.
26. Under the same condition, that terminal validation phase `Purpose`
    explicitly mentions deterministic seed-to-planning proof against
    `01_GENESIS/PROJECT_SEED.md`.
27. Under the same condition, that terminal validation phase
    `Work Definition (Scope-Bound)` explicitly mentions seed-derived planning
    traceability or regeneration against `01_GENESIS/PROJECT_SEED.md`.
28. Under the same condition, that terminal validation phase
   `Exit Criteria (All Required)` include:
   - `02_EXODUS/tests/validation_harness.ps1 contains the exact anchor string: "seed-derived planning artifacts are validated against 01_GENESIS/PROJECT_SEED.md".`
   - `02_EXODUS/tests/validation_harness.ps1 contains the exact anchor string: "regeneration and traceability from the seed-defined contract".`
   - `Command "powershell -ExecutionPolicy Bypass -File 02_EXODUS/tests/validation_harness.ps1" exits with code 0.`
29. Under the same condition, runtime-test pass/fail criteria alone do not
    satisfy deterministic bootstrap-proof obligations.

30. Reject any `implementation` phase whose `Work Definition (Scope-Bound)`
    uses preservation-only semantics for repository-owned produced artifacts.
    A phase fails this check if it preserves listed produced artifacts without
    explicit create, validate, or extend semantics.

31. For every `implementation` phase, if any listed produced artifact could
    already exist at phase start, the phase MUST include at least one Exit
    Criterion that proves phase-specific sufficiency of that artifact set or
    proves repository-owned extension around that artifact boundary.

32. Reject any `implementation` phase whose listed produced artifacts can
    satisfy completion through pre-existing file existence checks plus one
    generic smoke command exit code.

33. A generic smoke command is insufficient for `implementation`-phase
    completion when it does not prove the phase-specific obligation associated
    with the listed produced artifacts.

34. If an `implementation` phase lists produced artifacts under `02_EXODUS/`,
    roadmap validation fails when no Exit Criterion beyond file existence and
    generic smoke proves the required realized behavior for that artifact set.

35. Every phase includes its canonical phase completion receipt path under
    `03_LEVITICUS/Execution/` in `Produced Artifacts`.

36. Every phase receipt path matches the roadmap version and phase identifier
    of the phase that declares it.

37. Every phase includes an Exit Criterion requiring file existence at its
    canonical receipt path.

38. Every phase includes an Exit Criterion requiring the canonical receipt
    path to be generated strictly from
    `03_LEVITICUS/Core/PHASE_COMPLETION_RECEIPT_SCHEMA_v1.md` without schema
    deviation.

39. No phase can complete while its canonical project-pass receipt criteria
    remain unmet.

Failure Contract
- Structural or grammar failure: `SCHEMA_VIOLATION`
- Missing architecture or coverage mapping: `ARCHITECTURE_COVERAGE_FAILURE`
- Unseeded command/path/runtime assumptions: `SCOPE_VIOLATION`

Output Contract
Emit only one of:
- `PASS`
- `FAIL <CODE>: <single-line reason>`
