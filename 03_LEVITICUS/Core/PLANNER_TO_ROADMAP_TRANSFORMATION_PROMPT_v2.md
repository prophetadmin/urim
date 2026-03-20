# PLANNER_TO_ROADMAP_TRANSFORMATION_PROMPT_v2

## 1. Role

Transform `01_GENESIS/PROJECT_SEED.md`,
`01_GENESIS/REQUIREMENTS_LEDGER.md`, and
`01_GENESIS/COMPONENT_REALIZATION_MAP.md` into a roadmap that conforms exactly
to `03_LEVITICUS/Core/ROADMAP_SCHEMA_v2.md`.

Output only schema-valid roadmap artifact content. No commentary or
explanation.

## 2. Input Contract

Primary authority source: `01_GENESIS/PROJECT_SEED.md`.
Normalized planning source: `01_GENESIS/REQUIREMENTS_LEDGER.md`.
Concrete realization source: `01_GENESIS/COMPONENT_REALIZATION_MAP.md`.

The seed defines the project. It may describe any software project type.
The transformation layer is project-agnostic and must not inject domain
assumptions not present in the seed.

The requirements ledger defines the mandatory planning inventory. It is derived
from the seed and must be treated as a binding normalization layer for roadmap
construction.
It contains both requirement inventory and component decomposition, and both
sections are binding for roadmap construction.

The component realization map defines concrete artifact ownership and
non-collapse boundaries. It must be treated as a binding realization layer for
roadmap construction.

Expected seed sections:
- Project Intent
- Problem Statement
- Scope Boundaries
- Non-Goals or Out of Scope
- Environment Assumptions
- Constraints
- Product Experience Invariants
- Success Definition

Additional seed sections may exist. Ignore them unless they provide direct
structural constraints that do not conflict with required sections.

If required sections are missing: halt with `SCHEMA_VIOLATION`.
If the requirements ledger is missing mandatory requirement blocks or required
schema structure: halt with `SCHEMA_VIOLATION`.
If the component realization map is missing required realization blocks or
required schema structure: halt with `SCHEMA_VIOLATION`.

## 3. Transformation Rules

- Use only obligations and artifact boundaries present in the seed,
  requirements ledger, and component realization map.
- Do not invent unstated requirements.
- Do not reference prior chat or external memory.
- Derive a complete implementation plan required to realize the seed.
- Execute as deterministic transformation, not architecture redesign.
- Do not explore alternative decompositions when the source artifacts already
  define separable requirement, component, or realization boundaries.
- Do not assume a fixed architecture (frontend/backend/API/CLI/batch) unless
  seed-required.
- Do not assume specific filenames, frameworks, runtimes, or command names
  unless seed-required.
- Do not blend phase objectives.

## 4. Architecture Derivation And Coverage

Before emitting roadmap output, infer from the seed and normalize from the
requirements ledger:
- major system components
- service boundaries
- data flow boundaries
- storage and identity constraints
- external dependency constraints
- required implementation artifacts
- user-facing product surfaces
- user-facing product experience invariants
- validation obligations
- concrete component boundaries
- concrete realization-map boundaries
- component dependency ordering

Then produce and emit the required `Requirements Coverage Matrix`,
`Component Coverage Matrix`, and `Seed Coverage Matrix` from
`ROADMAP_SCHEMA_v2`.

If any mandatory requirements ledger item cannot be mapped to a concrete phase
Produced Artifact and Exit Criterion, halt with
`ARCHITECTURE_COVERAGE_FAILURE`.

If any component block cannot be mapped to a concrete phase Produced Artifact,
dependency-consistent phase order, and executable Exit Criterion, halt with
`ARCHITECTURE_COVERAGE_FAILURE`.

If any realization block cannot be mapped to preserved phase Produced
Artifacts, dependency-consistent phase order, and executable Exit Criterion,
halt with `ARCHITECTURE_COVERAGE_FAILURE`.

If any seed `Scope Boundaries` Included item or seed `Constraints` item cannot
be mapped to a concrete phase Exit Criterion, halt with
`ARCHITECTURE_COVERAGE_FAILURE`.

If any mandatory requirements-ledger item derived from seed
`Product Experience Invariants` cannot be mapped to concrete implementation
artifacts and executable proof, halt with `ARCHITECTURE_COVERAGE_FAILURE`.

## 5. Output Contract

Output must:
- use exact structure and heading order from
  `03_LEVITICUS/Core/ROADMAP_SCHEMA_v2.md`
- use mechanically verifiable Entry Criteria and Exit Criteria
- use only structural, artifact-observable, or command-observable criteria
- contain no text outside schema-conforming roadmap content
- be emitted directly after required analysis gates without planning narration
  or alternative phase proposals
- be written through one direct in-place update strategy rather than
  replacement-form retry sequences or delete-and-recreate fallback
- avoid one large add-file patch for new roadmap artifacts
- avoid one monolithic shell-command write for the full roadmap body
- initialize new roadmap versions with a minimal schema-valid skeleton and then
  fill them through bounded section-level writes in deterministic order

If superseding an existing roadmap, include revision metadata block required by
Section 12 of `03_LEVITICUS/Core/ROADMAP_SCHEMA_v2.md`.

## 6. Phase Construction Rules

- Phase 1 is mandatory.
- `PHASE 1` MUST have `Phase Type` = `implementation`.
- At least one `implementation` phase is mandatory.
- At least one `validation` phase is mandatory.
- Every `implementation` phase MUST include:
  - at least one command-based Exit Criterion
  - at least one non-documentation produced artifact under `02_EXODUS/`
  - at least one non-dry-run command criterion
- Every phase MUST include its canonical phase completion receipt path under
  `03_LEVITICUS/Execution/ROADMAP_<Roadmap Version>_PHASE_<IDENTIFIER>_RECEIPT.md`
  in `Produced Artifacts`.
- Every phase MUST include Exit Criteria requiring both:
  - `File exists at <canonical receipt path>.`
  - `<canonical receipt path> is generated strictly from 03_LEVITICUS/Core/PHASE_COMPLETION_RECEIPT_SCHEMA_v1.md without schema deviation.`
- Receipt criteria are required completion conditions for every phase and
  supplement rather than replace artifact-specific or command-based proof.
- A roadmap is invalid if all implementation progress can be satisfied by
  `.md` file existence and anchor criteria.
- A roadmap is invalid if any mandatory requirement is mapped without at least
  one produced artifact path under `02_EXODUS/` that does not end with `.md`.
- A roadmap is invalid if any component block is mapped without at least one
  produced artifact path under `02_EXODUS/` that does not end with `.md`.
- If the requirements ledger contains a mandatory `surface` requirement, the
  roadmap is invalid unless at least one implementation phase produces a
  non-documentation artifact for that surface and at least one validation phase
  exercises that surface through a command-based criterion.
- If the requirements ledger contains build-distinct component blocks, the
  roadmap is invalid unless those components remain separately mappable in
  produced artifacts and validation paths.
- Implementation phases MUST remain compatible with both of the following
  repository states:
  - required artifact is absent at phase start
  - required artifact already exists at phase start
- Existing artifact presence is not sufficient for phase completion.
- For each implementation-phase produced artifact, the phase logic MUST be
  compatible with one of the following realization actions:
  - create missing artifact
  - validate existing artifact
  - extend incomplete artifact
- If a produced artifact already exists at phase start, the phase MUST still
  include Exit Criteria that prove phase-specific sufficiency or prove
  repository-owned augmentation around that artifact boundary.
- A roadmap is invalid if an implementation phase can complete solely because
  its listed produced artifacts already exist and one generic smoke command
  exits with code 0.
- A roadmap is invalid if any phase can complete while its canonical
  project-pass receipt criteria remain unmet.
- If the seed or requirements ledger implies integration with pre-existing
  repository artifacts, relevant implementation phases MUST not use
  preservation-only semantics.
- If the component realization map contains build-distinct realization blocks,
  the roadmap is invalid unless their primary artifact paths remain preserved
  in roadmap produced artifacts and are not collapsed into identical coverage.
- If a validation script or command is mapped to requirements, components, or
  realization blocks whose primary artifacts complete in multiple phases, that
  script or command may be produced earlier but is invalid as an Exit
  Criterion before the latest phase that realizes the artifacts it exercises.
- A roadmap is invalid if any phase requires a validation script or command to
  pass before all artifacts exercised by that script or command exist.
- If the requirements ledger contains mandatory requirements derived from seed
  `Product Experience Invariants`, the roadmap is invalid unless at least one
  implementation phase produces concrete surface or behavior artifacts for them
  and at least one validation phase exercises them through command-based
  criteria.
- If the requirements ledger contains any mandatory validation requirement
  whose statement, artifact obligation, or validation obligation establishes
  deterministic bootstrap or seed-to-planning proof rooted in
  `01_GENESIS/PROJECT_SEED.md`, or the component realization map contains any
  realization block whose objective or boundary rules establish deterministic
  bootstrap proof rooted in `01_GENESIS/PROJECT_SEED.md`, the roadmap MUST
  contain a terminal `validation` phase that preserves bootstrap determinism
  proof explicitly rather than generic validation-harness execution.
- That terminal validation phase MUST occur after the implementation phases
  whose outputs it validates.
- That terminal validation phase MUST state in `Purpose` that deterministic
  seed-to-planning proof is validated against `01_GENESIS/PROJECT_SEED.md`.
- That terminal validation phase MUST state in `Work Definition (Scope-Bound)`
  that seed-derived planning traceability or regeneration is validated against
  `01_GENESIS/PROJECT_SEED.md`.
- That terminal validation phase MUST include in `Exit Criteria (All Required)`
  all of:
  - `02_EXODUS/tests/validation_harness.ps1 contains the exact anchor string: "seed-derived planning artifacts are validated against 01_GENESIS/PROJECT_SEED.md".`
  - `02_EXODUS/tests/validation_harness.ps1 contains the exact anchor string: "regeneration and traceability from the seed-defined contract".`
  - `Command "powershell -ExecutionPolicy Bypass -File 02_EXODUS/tests/validation_harness.ps1" exits with code 0.`
- Runtime-test pass/fail criteria alone do not satisfy deterministic
  bootstrap-proof obligations.

If these rules cannot be satisfied from the seed: halt with
`ARCHITECTURE_COVERAGE_FAILURE`.

## 7. Prohibitions

- No qualitative completion language.
- No additional sections.
- No validation commentary.
- No completion claims.
- No domain-specific hard-coding not grounded in the seed.
- No command names or path conventions invented without a seed anchor or
  explicit policy allowance.
- No contract-only roadmap phases that avoid producing executable program
  artifacts.
- No multi-method artifact writing attempts before direct in-place roadmap
  emission.
- No one-shot large add-file roadmap creation attempts before bounded
  section-level writes.
- No one-shot shell-command roadmap body writes before bounded section-level
  writes.
- No narration of patch retries, fallback write behavior, or internal edit
  strategy unless final artifact write fails.
