Command Name
/create_map_v2

Purpose
Transform `01_GENESIS/PROJECT_SEED.md`,
`01_GENESIS/REQUIREMENTS_LEDGER.md`, and
`01_GENESIS/COMPONENT_REALIZATION_MAP.md`
 into a roadmap strictly compliant with
`03_LEVITICUS/Core/ROADMAP_SCHEMA_v2.md` by applying
`03_LEVITICUS/Core/PLANNER_TO_ROADMAP_TRANSFORMATION_PROMPT_v2.md`.

Roadmap policy:
- The roadmap is versionable for legitimate misses and newly discovered
  constraints.
- The roadmap is not a scratch pad for lazy just-in-time planning.
- Initial generation MUST be best-effort comprehensive from seed-derived
  architecture, requirements-ledger decomposition, and component-realization
  boundaries.

Required Inputs
`01_GENESIS/PROJECT_SEED.md`
`01_GENESIS/REQUIREMENTS_LEDGER.md`
`01_GENESIS/COMPONENT_REALIZATION_MAP.md`
`03_LEVITICUS/Core/COMPONENT_REALIZATION_MAP_SCHEMA_v1.md`
`03_LEVITICUS/Core/REQUIREMENTS_LEDGER_SCHEMA_v1.md`
`03_LEVITICUS/Core/ROADMAP_SCHEMA_v2.md`
`03_LEVITICUS/Core/PHASE_COMPLETION_RECEIPT_SCHEMA_v1.md`
`03_LEVITICUS/Core/PLANNER_TO_ROADMAP_TRANSFORMATION_PROMPT_v2.md`
`03_LEVITICUS/Core/FAILURE_CODES_v1.md`

Optional Inputs
Explicit phase count override (integer)
Project name override (string)
Explicit roadmap revision intent (when superseding an existing roadmap)

Write Strategy (Mandatory)
After reading the required artifacts and passing all internal gates, emit the
roadmap directly as a deterministic transformation rather than exploring
alternative decompositions or narrating planning.

When writing the roadmap artifact:
- use one direct in-place update strategy from the start
- do not attempt whole-file replacement, delete-and-recreate, or replacement-form patching first
- do not attempt one large add-file patch for a new roadmap artifact
- assume large add-file patches for roadmap generation may exceed tool limits
- do not attempt a single shell-command write for the full roadmap body
- assume full-roadmap shell writes may exceed shell command size limits
- if creating a new roadmap version, initialize the target file with a minimal
  schema-valid skeleton first and then fill it using bounded section-level
  writes in deterministic order
- write roadmap metadata, coverage matrices, and each phase block through
  bounded section writes from the start
- do not try multiple file-write methods before settling on one
- do not narrate patch retries, fallback behavior, or internal write strategy unless the final write fails
- prefer fastest successful schema-conforming emission over patch elegance

If the roadmap cannot be written through one direct write path, HALT with
`ARTIFACT_WRITE_FAILURE`.

Requirements-Ledger Gate (Mandatory, Internal)
Before writing a roadmap artifact matching
`03_LEVITICUS/PROJECT_ROADMAP_v<INTEGER>.md`, verify that
`01_GENESIS/REQUIREMENTS_LEDGER.md` conforms to
`03_LEVITICUS/Core/REQUIREMENTS_LEDGER_SCHEMA_v1.md`.

Before generation, verify every requirement block with `Mandatory` = `yes`
maps to planned phases, produced artifacts, and executable proof.

If any mandatory ledger item is not coverable, HALT with
`ARCHITECTURE_COVERAGE_FAILURE`.

Before generation, verify every component block maps to planned phases,
produced artifacts, dependency-consistent phase order, and executable proof.

If any component block is not coverable, HALT with
`ARCHITECTURE_COVERAGE_FAILURE`.

Realization-Map Gate (Mandatory, Internal)
Before writing a roadmap artifact matching
`03_LEVITICUS/PROJECT_ROADMAP_v<INTEGER>.md`, verify that
`01_GENESIS/COMPONENT_REALIZATION_MAP.md` conforms to
`03_LEVITICUS/Core/COMPONENT_REALIZATION_MAP_SCHEMA_v1.md`.

Before generation, verify every realization block maps to planned phases,
preserved produced artifacts, dependency-consistent phase order, and
executable proof.

If any realization block is not coverable, HALT with
`ARCHITECTURE_COVERAGE_FAILURE`.

Before generation, verify every command-based Exit Criterion is phase-order
consistent with the artifact ownership it exercises.

If a validation script or command is mapped to requirements, components, or
realization blocks whose primary artifacts complete in multiple phases, that
script or command may be produced earlier but MUST NOT be required to pass as
an Exit Criterion before the latest phase that realizes the artifacts it
exercises.

If any phase requires a validation script or command to pass before all
artifacts exercised by that script or command exist, HALT with
`ARCHITECTURE_COVERAGE_FAILURE`.

Architecture Derivation Step (Mandatory, Internal)
Before writing a roadmap artifact matching
`03_LEVITICUS/PROJECT_ROADMAP_v<INTEGER>.md`, perform best-effort architecture
analysis of `01_GENESIS/PROJECT_SEED.md` and reconcile it with the normalized
requirements ledger and component realization map.

Coverage Gate (Mandatory)
Before generation, verify inferred architecture and every mandatory ledger item
are covered by planned phases:
- user-facing product surfaces
- user-facing product experience invariants
- core system components
- required services or modules
- data storage and data flow
- external systems or infrastructure
- primary implementation artifacts
- validation obligations
- component boundaries
- realization-map boundaries
- component dependencies

If any required element is missing from the plan, expand the roadmap before
output.

Implementation Reality Gate (Mandatory)
If `PHASE 1` is not `implementation`, HALT with
`ARCHITECTURE_COVERAGE_FAILURE`.

If any `implementation` phase can complete using only documentation artifacts
(`.md`) plus file-exists or anchor checks, HALT with
`ARCHITECTURE_COVERAGE_FAILURE`.

If every command-based criterion in implementation phases is dry-run only,
HALT with `ARCHITECTURE_COVERAGE_FAILURE`.

If any mandatory ledger item maps without at least one produced artifact path
under `02_EXODUS/` that does not end with `.md`, HALT with
`ARCHITECTURE_COVERAGE_FAILURE`.

If a mandatory ledger item of type `surface`, `module`, or `integration` maps
only to documentation artifacts or anchor checks, HALT with
`ARCHITECTURE_COVERAGE_FAILURE`.

If a mandatory ledger item derived from seed `Product Experience Invariants`
maps only to generic surface existence criteria without concrete
implementation artifacts or executable validation, HALT with
`ARCHITECTURE_COVERAGE_FAILURE`.

If any component block maps without at least one produced artifact path under
`02_EXODUS/` that does not end with `.md`, HALT with
`ARCHITECTURE_COVERAGE_FAILURE`.

If a component block maps only to documentation artifacts or anchor checks,
HALT with `ARCHITECTURE_COVERAGE_FAILURE`.

If a realization block primary artifact path is omitted from roadmap Produced
Artifacts, HALT with `ARCHITECTURE_COVERAGE_FAILURE`.

If build-distinct realization blocks are collapsed into identical produced
artifact coverage, HALT with `ARCHITECTURE_COVERAGE_FAILURE`.

If any implementation phase allows listed produced artifacts to satisfy
completion through pre-existing file presence plus generic smoke execution,
HALT with `ARCHITECTURE_COVERAGE_FAILURE`.

If any phase omits its canonical phase completion receipt path under
`03_LEVITICUS/Execution/`, HALT with
`ARCHITECTURE_COVERAGE_FAILURE`.

If any phase omits receipt existence or receipt-schema Exit Criteria tied to
the roadmap version and phase identifier, HALT with
`ARCHITECTURE_COVERAGE_FAILURE`.

If any phase can complete while its canonical project-pass receipt criteria
remain unmet, HALT with
`ARCHITECTURE_COVERAGE_FAILURE`.

Bootstrap Proof Gate (Mandatory)
If `01_GENESIS/REQUIREMENTS_LEDGER.md` contains any mandatory validation
requirement whose statement, artifact obligation, or validation obligation
establishes deterministic bootstrap or seed-to-planning proof rooted in
`01_GENESIS/PROJECT_SEED.md`, or
`01_GENESIS/COMPONENT_REALIZATION_MAP.md` contains any realization block whose
objective or boundary rules establish deterministic bootstrap proof rooted in
`01_GENESIS/PROJECT_SEED.md`, the roadmap must preserve that proof explicitly
rather than acting as a generic validation bucket.

Under the same condition, the roadmap must contain a terminal validation phase
dedicated to deterministic bootstrap proof.

That terminal validation phase must:
- have `Phase Type` = `validation`
- occur after the implementation phases whose outputs it validates
- state in `Purpose` that deterministic seed-to-planning proof is validated
  against `01_GENESIS/PROJECT_SEED.md`
- state in `Work Definition (Scope-Bound)` that seed-derived planning
  traceability or regeneration is validated against
  `01_GENESIS/PROJECT_SEED.md`
- include in `Exit Criteria (All Required)` all of:
  - `02_EXODUS/tests/validation_harness.ps1 contains the exact anchor string: "seed-derived planning artifacts are validated against 01_GENESIS/PROJECT_SEED.md".`
  - `02_EXODUS/tests/validation_harness.ps1 contains the exact anchor string: "regeneration and traceability from the seed-defined contract".`
  - `Command "powershell -ExecutionPolicy Bypass -File 02_EXODUS/tests/validation_harness.ps1" exits with code 0.`

Runtime tests alone do not satisfy this gate.

If the terminal validation phase omits deterministic seed-to-planning proof,
relies only on runtime-test pass/fail criteria, or reduces bootstrap proof to
generic validation-harness execution, HALT with
`ARCHITECTURE_COVERAGE_FAILURE`.

Output Contract
Output must be a roadmap structured exactly per
`03_LEVITICUS/Core/ROADMAP_SCHEMA_v2.md`.

Output path must be:
- `03_LEVITICUS/PROJECT_ROADMAP_v1.md` when no generated roadmap exists
- the next numeric roadmap artifact `03_LEVITICUS/PROJECT_ROADMAP_v<INTEGER+1>.md`
  when revising an existing roadmap

A scaffold placeholder at a canonical roadmap path does not count as an
existing generated roadmap version.

For superseding revisions, include the revision metadata block required by
`03_LEVITICUS/Core/ROADMAP_SCHEMA_v2.md` before the Requirements Coverage Matrix.

Each phase block must begin with `### PHASE <IDENTIFIER> - <TITLE>`.
Identifiers must increase monotonically from 1.
No commentary is permitted outside schema-valid roadmap content.

Guardrails
Must derive roadmap content only from `01_GENESIS/PROJECT_SEED.md`,
`01_GENESIS/REQUIREMENTS_LEDGER.md`, and
`01_GENESIS/COMPONENT_REALIZATION_MAP.md`.
Must execute roadmap generation as deterministic transformation rather than
architecture redesign or alternative phase exploration.
Must not assume a project type, file layout, framework, runtime, or deliverable
shape not grounded in the seed.
Must emit implementation-bearing phases that prioritize runnable program
artifacts over contract-only planning artifacts.
Must treat the requirements ledger as a binding planning input rather than an
optional hint.
Must treat both the requirements inventory and component inventory as binding.
Must treat the component realization map as binding for concrete artifact
ownership and non-collapse boundaries.
Must enforce criteria grammar and phase-type rules from
`03_LEVITICUS/Core/ROADMAP_SCHEMA_v2.md`.
Must reject any roadmap whose implementation phases allow listed produced
artifacts to satisfy completion through pre-existing file presence plus generic
smoke execution.
Must reject any roadmap whose phases omit canonical project-pass receipt
artifacts or receipt-aware completion criteria.
If an upstream derived bootstrap artifact cannot support compliant roadmap
generation under the active contracts, must rerun the earliest affected
bootstrap stage after any authorized prompt or schema correction rather than
hand-patching the downstream roadmap artifact.
Must halt if seed, requirements ledger, or component realization map is
missing or if output violates schema.
Must not use roadmap generation as deferred planning for obvious required work.
Must begin artifact writing with one direct in-place update strategy rather
than replacement-form retry sequences.
If generating a revision, must preserve dependency order and supersede
explicitly (no silent rewrite).
If generating a revision, must create a new roadmap file rather than overwrite
an older version.
Must emit failures using canonical codes from `03_LEVITICUS/Core/FAILURE_CODES_v1.md`.

Deterministic Advancement Rule
`/create_map_v2` completes only when the emitted
`03_LEVITICUS/PROJECT_ROADMAP_v<INTEGER>.md` passes
`03_LEVITICUS/Prompts/Bootstrap/validate_map_v2.md` with zero violations.
