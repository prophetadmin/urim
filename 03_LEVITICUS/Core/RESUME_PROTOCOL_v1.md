# RESUME PROTOCOL v1 - Deterministic Continuation Procedure

## 1. Resume Preconditions

Resume may execute only when all inputs below are present:
- project instructions artifact, if the host environment defines one
- latest roadmap artifact matching `03_LEVITICUS/PROJECT_ROADMAP_v<INTEGER>.md`
- `03_LEVITICUS/STATE_SUMMARY.md` conforming to
  `03_LEVITICUS/Core/STATE_SUMMARY_SCHEMA_v1.md`
- `03_LEVITICUS/Core/PHASE_COMPLETION_RECEIPT_SCHEMA_v1.md`
- `03_LEVITICUS/Core/FAILURE_CODES_v1.md`

No prior chat memory may be used as authoritative state.
Failures must use canonical codes from `03_LEVITICUS/Core/FAILURE_CODES_v1.md`.

If any mandatory input is missing or unreadable: halt.

## 2. Canonical Project Root

The canonical project root is the directory containing:
- `01_GENESIS/`
- `02_EXODUS/`
- `03_LEVITICUS/`

All artifact paths referenced during resume are resolved relative to that root.

When required canonical artifacts are present under the canonical project root,
they must be read directly from the filesystem.
Do not request pasted copies of local canonical artifacts from chat when
filesystem access is available.

## 3. State Summary Integrity Check

Validate `03_LEVITICUS/STATE_SUMMARY.md` contains exactly one continuity block
with all required fields:
- Active Phase
- Roadmap Version
- Completed Phases
- Current Work Artifact
- Open Risks
- Deferred Registry
- Next Deterministic Objective

Validation rules:
- Active Phase is a single integer.
- Roadmap Version matches the latest active roadmap artifact version.
- Completed Phases contains phase identifiers only.
- Current Work Artifact is exactly one path.
- Open Risks contains structural or execution risks only.
- Deferred Registry is append-only; status transitions allowed: Open -> Resolved.
- Next Deterministic Objective maps to one unmet exit criterion only.

If any rule fails: halt with `SCHEMA_VIOLATION`.

## 4. Active Phase Identification

- Read Roadmap Version from `03_LEVITICUS/STATE_SUMMARY.md`.
- Resolve the latest roadmap artifact matching
  `03_LEVITICUS/PROJECT_ROADMAP_v<INTEGER>.md`.
- Verify Roadmap Version matches the latest roadmap artifact version.
- Read Active Phase from `03_LEVITICUS/STATE_SUMMARY.md`.
- Locate the matching phase in the latest roadmap artifact.
- Verify Active Phase is not listed in Completed Phases.

Conflict handling:
- If Roadmap Version does not match latest active roadmap artifact: halt with
  `VERSION_CONFLICT`.
- If Active Phase does not exist in roadmap: halt with `PHASE_CONFLICT`.
- If Active Phase is already in Completed Phases: halt with `PHASE_CONFLICT`.

## 5. Exit Criteria Evaluation and Objective Selection

- Evaluate Active Phase exit criteria in declared order.
- Identify the first unmet exit criterion.
- Set Next Deterministic Objective to the minimal executable action that
  satisfies that one criterion.

Objective constraints:
- advances one exit criterion only
- stays within Active Phase scope
- is executable without reinterpretation

Canonical phase-receipt criteria are ordinary Exit Criteria and must be
evaluated with the rest of the phase.

If all non-receipt Exit Criteria are true and the first unmet criterion
requires the canonical phase-completion receipt, set
Next Deterministic Objective to run `/record_phase_completion` for the Active
Phase and write the canonical receipt artifact.

Do not mark a phase complete before its required receipt criteria evaluate
TRUE.

If all exit criteria are already true:
- mark Active Phase complete
- increment Active Phase to the next numeric phase in the roadmap
- re-run Section 5 for the new Active Phase

## 6. Scope Containment Rules

- Modify artifacts in the Active Phase only.
- Do not edit future-phase artifacts.
- Do not edit completed-phase artifacts unless a structural defect blocks Active
  Phase completion.
- Cross-phase work is deferred and recorded in Deferred Registry with re-entry
  phase.

## 7. Drift and Misalignment Handling

- Premature completion: if a completed phase fails exit criteria, remove it from
  Completed Phases and resume it.
- Unrecorded completion: if a phase satisfies all exit criteria but is not
  listed completed, add it.
- Receipt drift: if a phase receipt exists but one-or-more non-receipt Exit
  Criteria fail, treat the phase as incomplete and resume it.
- Artifact drift: if artifacts exist outside phase Produced Artifacts, append a
  Deferred Registry entry with origin phase.

## 8. Resume Execution Order

Execute in this exact order:
1. Validate mandatory inputs.
2. Resolve canonical project root.
3. Validate state summary schema integrity.
4. Identify Active Phase and verify phase integrity.
5. Evaluate exit criteria.
6. Select one Next Deterministic Objective.
7. Execute only that objective.
8. Emit updated `03_LEVITICUS/STATE_SUMMARY.md`.

No phase blending or additional planning is permitted during resume execution.

