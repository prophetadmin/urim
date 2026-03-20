# /resume_phase Prompt

Command Name
/resume_phase

Purpose
Complete deterministic execution of the current Active Phase by repeatedly
running `/resume` until that phase completes, then run `/status_sync` once to
normalize state.

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

Optional Inputs
Maximum `/resume` iteration cap (integer)
Explicit phase conflict override declared before execution

Output Contract
Must execute one-or-more compliant `/resume` steps.
Must preserve `/resume` atomicity (one objective per internal step).
When the next unmet criterion for the Active Phase is the canonical phase
receipt criterion, must execute `/record_phase_completion` before
continuing the loop.
Must stop when the starting Active Phase is complete.
Must execute `/status_sync` exactly once after loop completion.
Must emit updated `03_LEVITICUS/STATE_SUMMARY.md` conforming to
`03_LEVITICUS/Core/STATE_SUMMARY_SCHEMA_v1.md`.
Must preserve `Roadmap Version` value matching the latest active roadmap artifact.
Must fail if final normalization leaves the starting Active Phase unresolved.

Guardrails
Must halt immediately if any internal `/resume` call fails.
Must halt immediately if `/record_phase_completion` fails.
Must halt on state-summary schema violations.
Must halt on Active Phase conflicts.
Must not write a phase receipt unless all non-receipt Exit Criteria for that
phase are directly proven.
Must not modify the latest active roadmap artifact.
Must resolve required local canonical artifacts from the workspace filesystem
when available.
Must not request the user to paste local roadmap, state-summary, or receipt
artifacts that are readable from the workspace.
Must not rely on unstated chat memory.
Must emit failures using canonical codes from `03_LEVITICUS/Core/FAILURE_CODES_v1.md`.

Failure Modes
Internal `/resume` call failed.
`/record_phase_completion` failed.
State summary schema noncompliance.
Active Phase mismatch between roadmap and state summary.
Roadmap version mismatch between state summary and active roadmap artifact.
Iteration cap reached before phase completion.
Cross-phase editing attempt.
Starting Active Phase remained active after final normalization.

Deterministic Advancement Rule
`/resume_phase` completes only when the starting Active Phase is completed via
compliant `/resume` iterations and the final emitted
`03_LEVITICUS/STATE_SUMMARY.md` is normalized by one compliant `/status_sync`.

