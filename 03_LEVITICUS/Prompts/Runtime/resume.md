# /resume Prompt

Command Name
/resume

Purpose
Resume deterministic execution by applying `03_LEVITICUS/Core/RESUME_PROTOCOL_v1.md`
against the current roadmap and state summary.

Required Inputs
latest roadmap artifact matching `03_LEVITICUS/PROJECT_ROADMAP_v<INTEGER>.md`
`03_LEVITICUS/Core/STATE_SUMMARY_SCHEMA_v1.md`
`03_LEVITICUS/Core/RESUME_PROTOCOL_v1.md`
`03_LEVITICUS/Core/PHASE_COMPLETION_RECEIPT_SCHEMA_v1.md`
`03_LEVITICUS/STATE_SUMMARY.md`
`03_LEVITICUS/Core/FAILURE_CODES_v1.md`

Optional Inputs
Explicit phase conflict override declared before execution

Output Contract
Must follow the strict execution order defined in
`03_LEVITICUS/Core/RESUME_PROTOCOL_v1.md`.
Must select exactly one Next Deterministic Objective for the Active Phase.
Must not modify the latest active roadmap artifact.
Must emit updated `03_LEVITICUS/STATE_SUMMARY.md` conforming to
`03_LEVITICUS/Core/STATE_SUMMARY_SCHEMA_v1.md`.
Must preserve `Roadmap Version` value matching the latest active roadmap artifact.

Guardrails
Must halt on state-summary schema violations.
Must halt on Active Phase conflicts.
Must halt if the objective does not advance one unmet Exit Criterion.
Must not select phase advancement when required canonical phase receipt
criteria for the Active Phase remain unmet.
Must resolve required local canonical artifacts from the workspace filesystem
when available.
Must not request the user to paste local roadmap, state-summary, or receipt
artifacts that are readable from the workspace.
Must not rely on unstated chat memory.
Must emit failures using canonical codes from `03_LEVITICUS/Core/FAILURE_CODES_v1.md`.

Failure Modes
Active Phase mismatch between roadmap and state summary.
Roadmap version mismatch between state summary and active roadmap artifact.
Completed Phases containing descriptive text.
Cross-phase editing attempt.
Phase advancement attempted before all Exit Criteria are met.
Phase advancement attempted before required canonical receipt criteria are met.

Deterministic Advancement Rule
`/resume` completes only when one objective advances exactly one unmet Exit
Criterion in the Active Phase.

