# SLASH COMMAND SPECS v1 - Deterministic Command Contracts

## 1. Scope

This document defines deterministic specifications for all slash commands in
this framework.

All command behavior must be mechanically defined, auditable, and independently
executable under `03_LEVITICUS/Core/RESUME_PROTOCOL_v1.md`.

## 2. Structural Rules

Each command is defined in its own numbered section.
Command sections must follow the exact internal heading order defined in
Section 5.
No additional internal headings are permitted inside command blocks.
No reordering of required headings is permitted.
All rules must be mechanically verifiable.
No qualitative completion language is permitted.

## 3. Canonical Artifact and Path Rules

All artifact references must use exact canonical filenames.
Generic labels are prohibited.
If an artifact does not yet exist, the command must reference the exact
filename under which it will be created.

All artifact paths are resolved relative to the canonical project root: the
directory containing `01_GENESIS/`, `02_EXODUS/`, and `03_LEVITICUS/`.

## 4. Registered Commands

- /create_map_v2
- /derive_requirements
- /realize_components
- /seed
- /status_sync
- /resume
- /resume_phase
- /validate_phase
- /validate_map_v2
- /summarize_session
- /extract_canon

No additional commands are permitted in v1.

## 5. Required Internal Command Structure

Each command section must contain these headings in this exact order:

Command Name
Purpose
Required Inputs
Optional Inputs
Output Contract
Guardrails
Failure Modes
Deterministic Advancement Rule

## 6. /seed

Command Name
/seed

Purpose
Transform the primary Genesis idea artifact into `01_GENESIS/PROJECT_SEED.md`
by applying `03_LEVITICUS/Core/GENESIS_SEED_PROMPT_v1.md` and enforcing
`03_LEVITICUS/Core/PROJECT_SEED_SCHEMA_v1.md`.

Required Inputs
`01_GENESIS/IDEA.md`
`03_LEVITICUS/Core/GENESIS_SEED_PROMPT_v1.md`
`03_LEVITICUS/Core/PROJECT_SEED_SCHEMA_v1.md`
`03_LEVITICUS/Core/FAILURE_CODES_v1.md`
`03_LEVITICUS/Prompts/Bootstrap/seed.md`

Optional Inputs
Project title override

Output Contract
Output must be written only to `01_GENESIS/PROJECT_SEED.md` in overwrite-only
mode.
Output must conform exactly to
`03_LEVITICUS/Core/PROJECT_SEED_SCHEMA_v1.md`.
No commentary is permitted outside the required seed content.

Guardrails
Must derive seed content only from the selected Genesis idea artifact.
Must not emit roadmap phases, slash commands, resume logic, or execution
sequencing.
Must not blend inherited foundation, prerequisite normalization, product
surfaces, product experience invariants, runtime anchors, and behavior rules
into one generic seed statement when they are structurally distinct in the
idea.
Must preserve stylistic, presentation, and anti-pattern language when it
materially constrains the finished product shape.
Must halt if no Genesis idea artifact exists.
Must emit failures using canonical codes from `03_LEVITICUS/Core/FAILURE_CODES_v1.md`.

Failure Modes
Missing required input artifact.
Seed output violates required structure.
Structurally distinct foundation, normalization, surface, product-experience,
runtime, or behavior content blended into non-separable seed statements.
Materially constraining product experience language omitted or collapsed into
generic seed prose.
Roadmap or execution content leaked into seed.
Output path or filename mismatch.

Deterministic Advancement Rule
`/seed` is complete only when a compliant `01_GENESIS/PROJECT_SEED.md` is
emitted from `01_GENESIS/IDEA.md` with no other project artifact modified.

## 7. /derive_requirements

Command Name
/derive_requirements

Purpose
Transform `01_GENESIS/PROJECT_SEED.md` into
`01_GENESIS/REQUIREMENTS_LEDGER.md` by applying
`03_LEVITICUS/Core/REQUIREMENTS_DERIVATION_PROMPT_v1.md` and enforcing
`03_LEVITICUS/Core/REQUIREMENTS_LEDGER_SCHEMA_v1.md`.

Required Inputs
`01_GENESIS/PROJECT_SEED.md`
`03_LEVITICUS/Core/REQUIREMENTS_LEDGER_SCHEMA_v1.md`
`03_LEVITICUS/Core/REQUIREMENTS_DERIVATION_PROMPT_v1.md`
`03_LEVITICUS/Core/FAILURE_CODES_v1.md`
`03_LEVITICUS/Prompts/Bootstrap/derive_requirements.md`

Optional Inputs
Explicit derivation focus override declared before execution

Output Contract
Output must be written only to `01_GENESIS/REQUIREMENTS_LEDGER.md` in
overwrite-only mode.
Output must conform exactly to
`03_LEVITICUS/Core/REQUIREMENTS_LEDGER_SCHEMA_v1.md`.
No commentary is permitted outside schema-valid ledger content.

Guardrails
Must derive requirements only from `01_GENESIS/PROJECT_SEED.md`.
Must not invent frameworks, file layouts, runtimes, or command names not
grounded in the seed.
Must not collapse seed-declared product surfaces into internal-only module
requirements.
Must not collapse seed-declared product experience invariants into generic
surface-exists requirements.
Must not collapse build-distinct component boundaries into one generic
component.
Must preserve exclusions and non-goals verbatim when present in the seed.
Must halt if seed is missing or schema conformance fails.
Must emit failures using canonical codes from `03_LEVITICUS/Core/FAILURE_CODES_v1.md`.

Failure Modes
Missing required input artifact.
Requirements ledger violates required structure.
Seed included-scope or constraint item omitted from mandatory requirements.
Seed product experience invariant omitted from mandatory requirements.
Seed-declared product surface omitted or collapsed into infrastructure-only
requirements.
Seed-declared product experience invariant collapsed into generic app-surface
coverage.
Mandatory requirement lacks component decomposition.
Build-distinct architecture collapsed into one generic component.
Output path or filename mismatch.

Deterministic Advancement Rule
`/derive_requirements` is complete only when the emitted
`01_GENESIS/REQUIREMENTS_LEDGER.md` validates against
`03_LEVITICUS/Core/REQUIREMENTS_LEDGER_SCHEMA_v1.md` with zero deviations.

## 8. /create_map_v2

Command Name
/create_map_v2

Purpose
Transform `01_GENESIS/PROJECT_SEED.md` and
`01_GENESIS/REQUIREMENTS_LEDGER.md` into
`03_LEVITICUS/PROJECT_ROADMAP_v<INTEGER>.md` by applying
`03_LEVITICUS/Core/PLANNER_TO_ROADMAP_TRANSFORMATION_PROMPT_v2.md` and enforcing
`03_LEVITICUS/Core/ROADMAP_SCHEMA_v2.md`.

Required Inputs
`01_GENESIS/PROJECT_SEED.md`
`01_GENESIS/REQUIREMENTS_LEDGER.md`
`01_GENESIS/COMPONENT_REALIZATION_MAP.md`
`03_LEVITICUS/Core/COMPONENT_REALIZATION_MAP_SCHEMA_v1.md`
`03_LEVITICUS/Core/REQUIREMENTS_LEDGER_SCHEMA_v1.md`
`03_LEVITICUS/Core/ROADMAP_SCHEMA_v2.md`
`03_LEVITICUS/Core/PLANNER_TO_ROADMAP_TRANSFORMATION_PROMPT_v2.md`
`03_LEVITICUS/Core/FAILURE_CODES_v1.md`
`03_LEVITICUS/Prompts/Bootstrap/create_map_v2.md`

Optional Inputs
Explicit phase count override (integer)
Project name override (string)
Explicit roadmap revision intent (when superseding an existing roadmap)

Output Contract
Output must be written only to:
- `03_LEVITICUS/PROJECT_ROADMAP_v1.md` on initial generation when no generated
  roadmap exists
- the next numeric `03_LEVITICUS/PROJECT_ROADMAP_v<INTEGER+1>.md` on revision
A scaffold placeholder at a canonical roadmap path does not count as a
generated roadmap version.
Output must conform exactly to `03_LEVITICUS/Core/ROADMAP_SCHEMA_v2.md`.
If superseding an existing roadmap, the output must include the revision
metadata block required by `03_LEVITICUS/Core/ROADMAP_SCHEMA_v2.md`.
Each phase must begin with `### PHASE <IDENTIFIER> - <TITLE>`.
No commentary is permitted outside schema-valid roadmap content.

Guardrails
Must derive roadmap content only from `01_GENESIS/PROJECT_SEED.md` and
`01_GENESIS/REQUIREMENTS_LEDGER.md` and
`01_GENESIS/COMPONENT_REALIZATION_MAP.md`.
Must execute roadmap generation as deterministic transformation rather than
alternative architecture exploration.
Must not assume a project type, app shape, framework, runtime, or file layout
not explicitly supported by the seed.
Must preserve seed-declared product experience invariants through concrete
artifact and validation mapping rather than collapsing them into generic
surface-exists coverage.
Must preserve realization-map-defined artifact ownership and non-collapse
boundaries during roadmap construction.
If the planning artifacts contain deterministic bootstrap-proof obligations
rooted in `01_GENESIS/PROJECT_SEED.md`, must include a terminal validation
phase dedicated to explicit bootstrap determinism proof rather than generic
validation-harness execution.
Must enforce code-first roadmap output where `PHASE 1` is `implementation` and
mandatory mappings include non-`.md` artifacts under `02_EXODUS/`.
Must enforce criteria grammar and phase-type rules from
`03_LEVITICUS/Core/ROADMAP_SCHEMA_v2.md`.
Must begin roadmap artifact writing with one direct in-place update strategy
rather than whole-file replacement or replacement-form retry sequences.
Must not attempt one large add-file patch when creating a new roadmap version.
Must initialize a new roadmap version with a minimal schema-valid skeleton and
then fill it through bounded section-level writes in deterministic order.
Must not attempt a monolithic shell-command write for the full roadmap body.
Must write roadmap metadata, coverage matrices, and phase blocks through
bounded section-level writes from the start.
Must not narrate patch retries, fallback write behavior, or internal edit
strategy unless the final roadmap write fails.
Must halt if seed, requirements ledger, component realization map, or schema
conformance fails.
Must emit failures using canonical codes from `03_LEVITICUS/Core/FAILURE_CODES_v1.md`.

Failure Modes
Missing required input artifact.
Requirements ledger schema violation.
Missing required phase subsections.
Phase identifier ordering violation.
Non-mechanical entry or exit criteria.
Roadmap content introduces unstated domain assumptions.
Revision emitted without explicit revision intent.
Revision missing required metadata block.
Output path or filename mismatch.
Mandatory requirements-ledger item lacks phase, artifact, or validation
coverage.
Component block lacks phase, artifact, dependency, or validation coverage.
Roadmap omits required code-first mapping to non-`.md` artifacts under
`02_EXODUS/`.
Mandatory product-experience requirement mapped only to generic surface
existence coverage without concrete artifact or executable proof.
Realization-map primary artifact omitted from roadmap produced artifacts.
Build-distinct realization blocks collapsed into identical roadmap artifact
coverage.
Deterministic bootstrap-proof obligations present in planning artifacts but no
terminal validation phase preserves explicit seed-to-planning proof anchored
to `01_GENESIS/PROJECT_SEED.md`.
`PHASE 1` is not `implementation`.
Implementation phase can complete using documentation-only criteria.
Validation phase lacks end-to-end command evidence.

Deterministic Advancement Rule
`/create_map_v2` is complete only when the emitted
`03_LEVITICUS/PROJECT_ROADMAP_v<INTEGER>.md` passes
`03_LEVITICUS/Prompts/Runtime/validate_map_v2.md` with zero violations.

## 9. /status_sync

Command Name
/status_sync

Purpose
Emit canonical phase-state summary into `03_LEVITICUS/STATE_SUMMARY.md` using
roadmap and state-schema constraints.

Required Inputs
latest roadmap artifact matching `03_LEVITICUS/PROJECT_ROADMAP_v<INTEGER>.md`
`03_LEVITICUS/Core/STATE_SUMMARY_SCHEMA_v1.md`
`03_LEVITICUS/Core/PHASE_COMPLETION_RECEIPT_SCHEMA_v1.md`
`03_LEVITICUS/STATE_SUMMARY.md`
`03_LEVITICUS/Core/FAILURE_CODES_v1.md`
`03_LEVITICUS/Prompts/Runtime/status_sync.md`

Optional Inputs
Explicit Active Phase override (integer)
Explicit Open Risks override

Output Contract
Output must be written only to `03_LEVITICUS/STATE_SUMMARY.md` in
overwrite-only mode.
Output must conform exactly to `03_LEVITICUS/Core/STATE_SUMMARY_SCHEMA_v1.md`.
Exactly one Current Work Artifact and one Next Deterministic Objective must be
present.
`Roadmap Version` must match the latest active roadmap artifact version.

Guardrails
Must not modify roadmap content.
Must not include historical narrative.
Must derive state from roadmap exit-criteria evaluation.
Must treat canonical phase receipt criteria as ordinary required Exit Criteria.
Must not mark a phase complete when non-receipt criteria are true but required
receipt criteria remain unmet.
Must emit failures using canonical codes from `03_LEVITICUS/Core/FAILURE_CODES_v1.md`.

Failure Modes
State summary schema deviation.
Roadmap version mismatch between state summary and latest active roadmap artifact.
Multiple Current Work Artifact fields.
Completed Phases containing non-identifiers.
Objective not tied to unmet Active Phase Exit Criteria.
Phase advanced without required canonical phase receipt criteria satisfied.

Deterministic Advancement Rule
`/status_sync` is complete only when `03_LEVITICUS/STATE_SUMMARY.md` validates
against `03_LEVITICUS/Core/STATE_SUMMARY_SCHEMA_v1.md` with zero deviations.

## 10. /resume

Command Name
/resume

Purpose
Resume deterministic execution by applying `03_LEVITICUS/Core/RESUME_PROTOCOL_v1.md`
against the active roadmap and state summary.

Required Inputs
latest roadmap artifact matching `03_LEVITICUS/PROJECT_ROADMAP_v<INTEGER>.md`
`03_LEVITICUS/Core/STATE_SUMMARY_SCHEMA_v1.md`
`03_LEVITICUS/Core/RESUME_PROTOCOL_v1.md`
`03_LEVITICUS/Core/PHASE_COMPLETION_RECEIPT_SCHEMA_v1.md`
`03_LEVITICUS/STATE_SUMMARY.md`
`03_LEVITICUS/Core/FAILURE_CODES_v1.md`
`03_LEVITICUS/Prompts/Runtime/resume.md`

Optional Inputs
Explicit phase conflict override declared before execution

Output Contract
Output must follow the strict sequence defined in
`03_LEVITICUS/Core/RESUME_PROTOCOL_v1.md`.
Exactly one Next Deterministic Objective must be selected for the Active Phase.
Must emit updated `03_LEVITICUS/STATE_SUMMARY.md` conforming to
`03_LEVITICUS/Core/STATE_SUMMARY_SCHEMA_v1.md`.
`Roadmap Version` in state must match latest active roadmap artifact version.
The latest active roadmap artifact must remain unchanged.

Guardrails
Must halt on state-summary schema violations.
Must halt on Active Phase conflicts or missing phases.
Must halt if selected objective does not advance one unmet Exit Criterion.
Must not select phase advancement when required canonical phase receipt
criteria for the Active Phase remain unmet.
Must not rely on unstated chat memory.
Must emit failures using canonical codes from `03_LEVITICUS/Core/FAILURE_CODES_v1.md`.

Failure Modes
Active Phase mismatch between roadmap and state summary.
Roadmap version mismatch between state summary and latest active roadmap artifact.
Completed Phases containing descriptive text.
Cross-phase editing attempt.
Premature phase advancement attempt.
Phase advancement attempted before required canonical receipt criteria are met.

Deterministic Advancement Rule
`/resume` is complete only when one objective advances exactly one unmet Exit
Criterion in the Active Phase and the updated `03_LEVITICUS/STATE_SUMMARY.md`
is schema-valid.

## 11. /validate_phase

Command Name
/validate_phase

Purpose
Verify Active Phase completion by proving every Exit Criterion with artifact
evidence.

Required Inputs
latest roadmap artifact matching `03_LEVITICUS/PROJECT_ROADMAP_v<INTEGER>.md`
`03_LEVITICUS/Core/STATE_SUMMARY_SCHEMA_v1.md`
`03_LEVITICUS/Core/RESUME_PROTOCOL_v1.md`
`03_LEVITICUS/Core/PHASE_COMPLETION_RECEIPT_SCHEMA_v1.md`
`03_LEVITICUS/STATE_SUMMARY.md`
`03_LEVITICUS/Core/FAILURE_CODES_v1.md`
`03_LEVITICUS/Prompts/Runtime/validate_phase.md`

Optional Inputs
Explicit phase override declared before execution

Output Contract
Output title must be `VALIDATION REPORT - PHASE X`.
For each Exit Criterion include:
Criterion Identifier, Evidence Type, Artifact Path or Command, Anchor String if
applicable, Snippet if applicable (max 12 lines), and PASS or FAIL.
Final PASS requires all criteria PASS.
If FAIL, include exactly one Next Deterministic Objective for the first unmet
criterion.
Output is ephemeral and must not be written to project artifacts.
Ephemeral validation output does not replace any canonical phase receipt
required for completion.

Guardrails
Must not modify any artifact.
Must require direct proof for each criterion.
Must fail criteria when referenced files, commands, or anchors are missing.
Must not use qualitative completion language.
Must emit failures using canonical codes from `03_LEVITICUS/Core/FAILURE_CODES_v1.md`.

Failure Modes
Missing required input.
State summary schema noncompliance.
Active Phase not defined in roadmap.
Missing evidence for any criterion.
Snippet exceeds 12 lines.

Deterministic Advancement Rule
`/validate_phase` is complete only when every Active Phase Exit Criterion is
proven with compliant evidence.

## 12. /resume_phase

Command Name
/resume_phase

Purpose
Execute deterministic continuation for the current Active Phase by repeatedly
running `/resume` until that phase is complete, then run `/status_sync` once to
normalize state output.

Required Inputs
latest roadmap artifact matching `03_LEVITICUS/PROJECT_ROADMAP_v<INTEGER>.md`
`03_LEVITICUS/Core/STATE_SUMMARY_SCHEMA_v1.md`
`03_LEVITICUS/Core/RESUME_PROTOCOL_v1.md`
`03_LEVITICUS/Core/PHASE_COMPLETION_RECEIPT_SCHEMA_v1.md`
`03_LEVITICUS/STATE_SUMMARY.md`
`03_LEVITICUS/Core/FAILURE_CODES_v1.md`
`03_LEVITICUS/Prompts/Runtime/resume.md`
`03_LEVITICUS/Prompts/Runtime/record_phase_completion.md`
`03_LEVITICUS/Prompts/Runtime/status_sync.md`
`03_LEVITICUS/Prompts/Runtime/resume_phase.md`

Optional Inputs
Maximum `/resume` iteration cap (integer)
Explicit phase conflict override declared before execution

Output Contract
Must preserve atomic `/resume` behavior for each internal step.
Must execute `/resume` repeatedly against one Active Phase only.
When the next unmet criterion for the Active Phase is the canonical phase
receipt criterion, must execute `/record_phase_completion` before
continuing the loop.
Must stop looping when the starting Active Phase is listed in Completed Phases
or Active Phase increments.
Must run `/status_sync` exactly once after loop completion.
Must emit updated `03_LEVITICUS/STATE_SUMMARY.md` conforming to
`03_LEVITICUS/Core/STATE_SUMMARY_SCHEMA_v1.md`.
Must not modify the latest active roadmap artifact.
Must fail if final normalization leaves the starting Active Phase unresolved.

Guardrails
Must halt immediately if any internal `/resume` call fails.
Must halt immediately if `/record_phase_completion` fails.
Must halt on state-summary schema violations.
Must halt on Active Phase conflicts.
Must not skip unmet Exit Criteria.
Must not write a phase receipt unless all non-receipt Exit Criteria for that
phase are directly proven.
Must not blend execution across multiple phases in a single `/resume` step.
Must emit failures using canonical codes from `03_LEVITICUS/Core/FAILURE_CODES_v1.md`.

Failure Modes
Internal `/resume` call failed.
`/record_phase_completion` failed.
State summary schema deviation.
Roadmap version mismatch between state summary and latest active roadmap artifact.
Active Phase mismatch between roadmap and state summary.
Iteration cap reached before phase completion.
Cross-phase editing attempt.
Starting Active Phase remained active after final normalization.

Deterministic Advancement Rule
`/resume_phase` is complete only when the starting Active Phase has been
deterministically advanced to completion through one-or-more compliant
`/resume` steps and final state is normalized by one compliant `/status_sync`.

## 13. /validate_map_v2

Command Name
/validate_map_v2

Purpose
Validate a roadmap artifact against `03_LEVITICUS/Core/ROADMAP_SCHEMA_v2.md`,
requirements-ledger coverage, and seed-coverage requirements so roadmap
acceptance cannot pass on documentation-only implementation criteria.

Required Inputs
`01_GENESIS/PROJECT_SEED.md`
`01_GENESIS/REQUIREMENTS_LEDGER.md`
`01_GENESIS/COMPONENT_REALIZATION_MAP.md`
`03_LEVITICUS/Core/COMPONENT_REALIZATION_MAP_SCHEMA_v1.md`
`03_LEVITICUS/Core/REQUIREMENTS_LEDGER_SCHEMA_v1.md`
`03_LEVITICUS/Core/ROADMAP_SCHEMA_v2.md`
`03_LEVITICUS/Core/FAILURE_CODES_v1.md`
`03_LEVITICUS/PROJECT_ROADMAP_v<INTEGER>.md` (target)
`03_LEVITICUS/Prompts/Runtime/validate_map_v2.md`

Optional Inputs
Explicit roadmap target override declared before execution

Output Contract
Output must conform exactly to
`03_LEVITICUS/Prompts/Runtime/validate_map_v2.md`.
Output is ephemeral and must not be written to project artifacts.

Guardrails
Must fail on any v2 schema deviation, requirements-ledger schema deviation,
component realization map schema deviation, missing requirements coverage
mapping, missing realization preservation, or missing seed coverage mapping.
Must fail any roadmap where `REQ-56` or `COMP-14` is present but `PHASE 4`
lacks explicit deterministic seed-to-planning proof against
`01_GENESIS/PROJECT_SEED.md`.
Must fail any implementation phase that can complete using only `.md`
artifacts plus file-exists or anchor checks.
Must not modify roadmap, seed, requirements ledger, component realization map,
state, or implementation artifacts.
Must emit failures using canonical codes from `03_LEVITICUS/Core/FAILURE_CODES_v1.md`.

Failure Modes
Missing required input artifact.
Requirements ledger does not conform to
`03_LEVITICUS/Core/REQUIREMENTS_LEDGER_SCHEMA_v1.md`.
Component realization map does not conform to
`03_LEVITICUS/Core/COMPONENT_REALIZATION_MAP_SCHEMA_v1.md`.
Target roadmap does not conform to `03_LEVITICUS/Core/ROADMAP_SCHEMA_v2.md`.
Requirements Coverage Matrix missing or incomplete.
Component Coverage Matrix missing or incomplete.
Seed Coverage Matrix missing or incomplete.
Mandatory requirements-ledger item lacks artifact or validation coverage.
Component block lacks artifact, dependency, or validation coverage.
Realization-map primary artifact omitted from roadmap produced artifacts.
Build-distinct realization blocks collapsed into identical roadmap artifact
coverage.
`REQ-56` or `COMP-14` present but `PHASE 4` lacks explicit bootstrap
determinism proof anchored to `01_GENESIS/PROJECT_SEED.md`.
Implementation phase lacks required command-based evidence.
Validation phase lacks required end-to-end command evidence.

## 16. /realize_components

Command Name
/realize_components

Purpose
Transform `01_GENESIS/PROJECT_SEED.md` and
`01_GENESIS/REQUIREMENTS_LEDGER.md` into
`01_GENESIS/COMPONENT_REALIZATION_MAP.md` by applying
`03_LEVITICUS/Core/COMPONENT_REALIZATION_PROMPT_v1.md` and enforcing
`03_LEVITICUS/Core/COMPONENT_REALIZATION_MAP_SCHEMA_v1.md`.

Required Inputs
`01_GENESIS/PROJECT_SEED.md`
`01_GENESIS/REQUIREMENTS_LEDGER.md`
`03_LEVITICUS/Core/COMPONENT_REALIZATION_MAP_SCHEMA_v1.md`
`03_LEVITICUS/Core/COMPONENT_REALIZATION_PROMPT_v1.md`
`03_LEVITICUS/Core/REQUIREMENTS_LEDGER_SCHEMA_v1.md`
`03_LEVITICUS/Core/FAILURE_CODES_v1.md`
`03_LEVITICUS/Prompts/Bootstrap/realize_components.md`

Optional Inputs
Explicit realization focus override declared before execution

Output Contract
Output must be written only to `01_GENESIS/COMPONENT_REALIZATION_MAP.md` in
overwrite-only mode.
Output must conform exactly to
`03_LEVITICUS/Core/COMPONENT_REALIZATION_MAP_SCHEMA_v1.md`.
No commentary is permitted outside schema-valid realization-map content.

Guardrails
Must derive realization content only from `01_GENESIS/PROJECT_SEED.md` and
`01_GENESIS/REQUIREMENTS_LEDGER.md`.
Must not emit roadmap phases, entry criteria, exit criteria, or command lines.
Must not collapse build-distinct surface or control-layer components into one
generic artifact set.
Must preserve dependency-consistent component boundaries from the requirements
ledger.
Must emit failures using canonical codes from
`03_LEVITICUS/Core/FAILURE_CODES_v1.md`.

Failure Modes
Missing required input artifact.
Requirements ledger schema violation.
Component realization map violates required structure.
Component omitted from realization inventory.
Build-distinct components collapsed into one artifact ownership set.
Output path or filename mismatch.

Deterministic Advancement Rule
`/realize_components` is complete only when the emitted
`01_GENESIS/COMPONENT_REALIZATION_MAP.md` validates against
`03_LEVITICUS/Core/COMPONENT_REALIZATION_MAP_SCHEMA_v1.md` with zero
deviations.

Deterministic Advancement Rule
`/validate_map_v2` is complete only when exactly one compliant verdict is
emitted: `PASS` or `FAIL <CODE>: <single-line reason>`.

## 14. /summarize_session

Command Name
/summarize_session

Purpose
Emit a timestamped session summary artifact into `05_NUMBERS/` capturing
high-signal decisions, changes, and unresolved items from the current or
referenced work session.

Required Inputs
latest roadmap artifact matching `03_LEVITICUS/PROJECT_ROADMAP_v<INTEGER>.md`
`03_LEVITICUS/STATE_SUMMARY.md`
`03_LEVITICUS/Core/FAILURE_CODES_v1.md`
`03_LEVITICUS/Prompts/Runtime/summarize_session.md`

Optional Inputs
Explicit session date override in `YYYY-MM-DD` format
Explicit session title override
Explicit decision list override
Explicit unresolved items override

Output Contract
Output must be written only to `05_NUMBERS/SESSION_<YYYY-MM-DD>.md`.
If a file already exists for that date, output must be written only to
`05_NUMBERS/SESSION_<YYYY-MM-DD>_<INTEGER>.md` using the next available integer.
Output must contain these headings in this exact order:
`# SESSION SUMMARY - <YYYY-MM-DD>`
`## Decisions`
`## Changes`
`## Open Items`
Each section must contain one-or-more flat bullet entries or the literal line
`None`.
Output must not modify any artifact outside `05_NUMBERS/`.

Guardrails
Must remain summary-only and must not emit transcript-style conversation logs.
Must not rewrite or modify roadmap, state, implementation, or canon artifacts.
Must not invent decisions, changes, or open items unsupported by repository
state or explicit user-provided session context.
Must emit failures using canonical codes from `03_LEVITICUS/Core/FAILURE_CODES_v1.md`.

Failure Modes
Missing required input artifact.
Output path or filename mismatch.
Missing required section heading.
Narrative transcript emitted instead of summary bullets.
Artifact written outside `05_NUMBERS/`.

Deterministic Advancement Rule
`/summarize_session` is complete only when exactly one timestamped
`05_NUMBERS/SESSION_<YYYY-MM-DD>[ _<INTEGER>].md` artifact is emitted with all
required headings in the required order and no other project artifact is
modified.

## 15. /extract_canon

Command Name
/extract_canon

Purpose
Analyze completed or stabilized project artifacts and emit distilled canonical
outputs into `04_DEUTERONOMY/`.

Required Inputs
latest roadmap artifact matching `03_LEVITICUS/PROJECT_ROADMAP_v<INTEGER>.md`
`03_LEVITICUS/STATE_SUMMARY.md`
`03_LEVITICUS/Core/FAILURE_CODES_v1.md`
`03_LEVITICUS/Prompts/Runtime/extract_canon.md`

Optional Inputs
`01_GENESIS/`
`02_EXODUS/`
`03_LEVITICUS/`
`05_NUMBERS/`
Explicit canon extraction date note
Explicit artifact omission list

Output Contract
Output may be written only to these canonical filenames in `04_DEUTERONOMY/`:
`04_DEUTERONOMY/FINAL_ROADMAP.md`
`04_DEUTERONOMY/FINAL_ARCHITECTURE.md`
`04_DEUTERONOMY/PROJECT_SUMMARY.md`
`04_DEUTERONOMY/WORKFLOW_PATTERN.md`
The command may emit one-or-more of the listed artifacts, but must not create
any other filename in `04_DEUTERONOMY/`.
Each emitted artifact must contain only distilled project conclusions and must
not contain execution chat transcripts.
Output must not modify artifacts outside `04_DEUTERONOMY/`.

Guardrails
Must treat canonical extraction as optional and must not require project
completion to have occurred in the same session.
Must derive canon only from repository artifacts and explicit user-provided
scope overrides.
Must not move, delete, or rewrite source artifacts in other layers.
Must not emit speculative conclusions unsupported by project artifacts.
Must emit failures using canonical codes from `03_LEVITICUS/Core/FAILURE_CODES_v1.md`.

Failure Modes
Missing required input artifact.
Output path or filename mismatch.
Canonical artifact emitted outside `04_DEUTERONOMY/`.
Source artifact mutation attempted.
Emitted canon contains unsupported or speculative claims.

Deterministic Advancement Rule
`/extract_canon` is complete only when one-or-more compliant canonical
artifacts are emitted to the permitted `04_DEUTERONOMY/` filenames and no
source artifact outside `04_DEUTERONOMY/` is modified.

