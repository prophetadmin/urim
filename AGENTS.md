# AGENTS.md

## Purpose
This file defines binding runtime behavior for agents in this workspace.

Goal: keep execution deterministic and lightweight while preserving bootstrap artifacts for future reuse.

## Scope
Applies to this repository at HEAD.

## Authority Order
1. Filesystem state
2. `03_LEVITICUS/Contracts/project_charter.md`
3. Canonical project artifacts (`03_LEVITICUS/PROJECT_ROADMAP_v1.md`, `03_LEVITICUS/STATE_SUMMARY.md`, canonical phase receipts under `03_LEVITICUS/Execution/`, and explicitly approved canon)
4. Chat output

Chat is never authoritative over repository state.

## Active Roadmap Authority
The single canonical active roadmap at HEAD is:
`03_LEVITICUS/PROJECT_ROADMAP_v1.md`

Roadmap authority is determined by this explicit designation and by alignment
with `03_LEVITICUS/STATE_SUMMARY.md` and canonical receipts, not by highest
version number or latest filename alone.

## Mode Switch (Automatic)
Scaffold placeholders may exist at canonical generated-output paths in a fresh
clone. Scaffold placeholders do not count as generated artifacts.

Bootstrap is complete when the designated active roadmap artifact exists at:
`03_LEVITICUS/PROJECT_ROADMAP_v1.md`

A roadmap artifact counts as generated only when it contains at least one phase
block heading matching:
`### PHASE <IDENTIFIER> - <TITLE>`

- If roadmap exists: Execution Mode
- If roadmap does not exist: Bootstrap Mode

No manual flags are required.

## Execution Mode (Default)
### Always Read
- `03_LEVITICUS/PROJECT_ROADMAP_v1.md`
- `03_LEVITICUS/STATE_SUMMARY.md`
- `03_LEVITICUS/Contracts/project_charter.md`

### Runtime Active
- `03_LEVITICUS/Core/STATE_SUMMARY_SCHEMA_v1.md`
- `03_LEVITICUS/Core/RESUME_PROTOCOL_v1.md`
- `03_LEVITICUS/Core/PHASE_COMPLETION_RECEIPT_SCHEMA_v1.md`
- `03_LEVITICUS/Core/FAILURE_CODES_v1.md`
- `03_LEVITICUS/Prompts/Runtime/resume.md`
- `03_LEVITICUS/Prompts/Runtime/resume_phase.md`
- `03_LEVITICUS/Prompts/Runtime/record_phase_completion.md`
- `03_LEVITICUS/Prompts/Runtime/status_sync.md`
- `03_LEVITICUS/Prompts/Runtime/validate_phase.md`

### Conditional (Read Only When Needed)
- `03_LEVITICUS/Core/REQUIREMENTS_LEDGER_SCHEMA_v1.md`
  - Required for `/derive_requirements`, `/create_map_v2`, `/validate_map_v2`, and repair operations on the seed-to-roadmap planning bridge.
- `03_LEVITICUS/Core/ROADMAP_SCHEMA_v2.md`
  - Required for create/restructure/repair/validate operations on the active roadmap structure.
  - Not required for normal task execution or routine state updates.
- `03_LEVITICUS/Core/SLASH_COMMAND_SPECS_v1.md`
  - Read only when command contract behavior is being changed or validated.
- `03_LEVITICUS/Core/DRIFT_FAILURE_RULES_v1.md`
  - Read when drift is suspected, during audits, or while enforcing recovery behavior.

### Bootstrap-Only (Ignore During Execution Unless Explicitly Requested)
- `01_GENESIS/*IDEA*.md` (original ideation source files)
- `03_LEVITICUS/Core/GENESIS_SEED_PROMPT_v1.md`
- `03_LEVITICUS/Core/REQUIREMENTS_DERIVATION_PROMPT_v1.md`
- `03_LEVITICUS/Core/COMPONENT_REALIZATION_MAP_SCHEMA_v1.md`
- `03_LEVITICUS/Core/COMPONENT_REALIZATION_PROMPT_v1.md`
- `03_LEVITICUS/Prompts/Bootstrap/seed.md`
- `03_LEVITICUS/Prompts/Bootstrap/derive_requirements.md`
- `03_LEVITICUS/Prompts/Bootstrap/realize_components.md`
- `03_LEVITICUS/Core/PLANNER_TO_ROADMAP_TRANSFORMATION_PROMPT_v2.md`
- `03_LEVITICUS/Prompts/Bootstrap/create_map_v2.md`

## Bootstrap Mode
When roadmap does not exist, read and use:
- `01_GENESIS/*IDEA*.md` (if present)
- `01_GENESIS/PROJECT_SEED.md`
  - If present only as a scaffold placeholder, overwrite it with generated seed
    content before `/derive_requirements`.
- `01_GENESIS/REQUIREMENTS_LEDGER.md`
  - If present only as a scaffold placeholder, overwrite it with generated
    requirements content before `/create_map_v2`.
- `01_GENESIS/COMPONENT_REALIZATION_MAP.md`
  - If present only as a scaffold placeholder, overwrite it with generated
    realization content before `/create_map_v2`.
- `03_LEVITICUS/Core/GENESIS_SEED_PROMPT_v1.md`
- `03_LEVITICUS/Core/REQUIREMENTS_LEDGER_SCHEMA_v1.md`
- `03_LEVITICUS/Core/REQUIREMENTS_DERIVATION_PROMPT_v1.md`
- `03_LEVITICUS/Core/COMPONENT_REALIZATION_MAP_SCHEMA_v1.md`
- `03_LEVITICUS/Core/COMPONENT_REALIZATION_PROMPT_v1.md`
- `03_LEVITICUS/Prompts/Bootstrap/seed.md`
- `03_LEVITICUS/Prompts/Bootstrap/derive_requirements.md`
- `03_LEVITICUS/Prompts/Bootstrap/realize_components.md`
- `03_LEVITICUS/Core/PLANNER_TO_ROADMAP_TRANSFORMATION_PROMPT_v2.md`
- `03_LEVITICUS/Prompts/Bootstrap/create_map_v2.md`
- `03_LEVITICUS/Core/ROADMAP_SCHEMA_v2.md`

Output of bootstrap phase:
- `01_GENESIS/PROJECT_SEED.md` on seed generation
- `01_GENESIS/REQUIREMENTS_LEDGER.md` on requirements derivation
- `01_GENESIS/COMPONENT_REALIZATION_MAP.md` on component realization
- `03_LEVITICUS/PROJECT_ROADMAP_v1.md` on initial generation
- `03_LEVITICUS/PROJECT_ROADMAP_v<INTEGER+1>.md` on explicit revision

After roadmap creation, return to Execution Mode automatically.

Expected bootstrap sequence:
1. `/seed`
2. `/derive_requirements`
3. `/realize_components`
4. `/create_map_v2`

## Bootstrap Derivation Policy
Project-defining bootstrap semantics originate from `01_GENESIS/IDEA.md` and
approved bootstrap contracts only.

The following are derived artifacts:
- `01_GENESIS/PROJECT_SEED.md`
- `01_GENESIS/REQUIREMENTS_LEDGER.md`
- `01_GENESIS/COMPONENT_REALIZATION_MAP.md`
- `03_LEVITICUS/PROJECT_ROADMAP_v<INTEGER>.md`

Rules:
- During an active bootstrap run, an agent may scaffold, backfill, and rewrite
  bounded sections inside the artifact currently being produced.
- During an active bootstrap run, an agent may correct bootstrap prompt or
  schema artifacts and rerun the earliest affected bootstrap stage until a
  schema-valid downstream output is reached.
- Once a derived artifact has been successfully emitted by its producing
  bootstrap command, semantic repair of that artifact must occur by rerunning
  the earliest affected bootstrap stage rather than hand-editing the completed
  derived artifact.
- Write order inside a producing bootstrap command is not semantically
  authoritative; only the final emitted artifact is authoritative.
- Do not bypass regeneration by manually repairing downstream derived artifacts.

## Roadmap Change Policy
Roadmap updates are allowed only with explicit revision intent.

Valid reasons:
- Missing requirement from seed discovered
- Dependency or constraint changes ordering/scope
- Scope correction required for feasibility
- New mandatory work introduced

Rules:
- No silent structural edits
- Record revision reason in the superseding roadmap metadata block
- Record execution impact in `03_LEVITICUS/STATE_SUMMARY.md` only when the
  revision changes active execution risks or deferrals
- Preserve prior intent when superseding sections

## Prohibitions
- Do not treat chat memory as canonical state.
- Do not auto-promote bootstrap artifacts into runtime context.
- Do not rewrite evidence/log intent without explicit instruction.

## Session Start Procedure
1. Detect mode by the designated active roadmap artifact, not by the raw
   presence of a historical roadmap artifact.
2. Load the active roadmap designated in this file and only then load other
   files allowed by that mode.
3. In Execution Mode, run `/status_sync` first.
4. Execute work from roadmap phases via `/resume`, `/record_phase_completion`,
   and `/resume_phase` as required by roadmap exit criteria.
5. Update state summary with progress and decisions.

