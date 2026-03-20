# /status_sync Prompt

Command Name
/status_sync

Purpose
Emit a canonical `03_LEVITICUS/STATE_SUMMARY.md` block by evaluating current
phase state from roadmap and state-schema rules.

Required Inputs
latest roadmap artifact matching `03_LEVITICUS/PROJECT_ROADMAP_v<INTEGER>.md`
`03_LEVITICUS/Core/STATE_SUMMARY_SCHEMA_v1.md`
`03_LEVITICUS/Core/PHASE_COMPLETION_RECEIPT_SCHEMA_v1.md`
`03_LEVITICUS/STATE_SUMMARY.md`
`03_LEVITICUS/Core/FAILURE_CODES_v1.md`

Optional Inputs
Explicit Active Phase override (integer)
Explicit Open Risks override

Output Contract
Output must conform exactly to `03_LEVITICUS/Core/STATE_SUMMARY_SCHEMA_v1.md`.
Output path must be `03_LEVITICUS/STATE_SUMMARY.md` using overwrite-only write
mode.
Must emit exactly one Current Work Artifact and one Next Deterministic
Objective.
Must emit `Roadmap Version` matching the latest active roadmap artifact version.

Guardrails
Must not edit roadmap content.
Must not include historical narrative.
Must derive phase state from roadmap exit criteria and schema rules.
Must treat canonical phase receipt criteria as ordinary required Exit
Criteria.
Must not mark a phase complete when non-receipt criteria are true but required
receipt criteria remain unmet.
Must resolve required local canonical artifacts from the workspace filesystem
when available.
Must not request the user to paste local roadmap, state-summary, or receipt
artifacts that are readable from the workspace.
Must emit failures using canonical codes from `03_LEVITICUS/Core/FAILURE_CODES_v1.md`.

Failure Modes
State summary schema deviation.
Roadmap version mismatch between state summary and latest active roadmap artifact.
Multiple Current Work Artifact fields.
Completed Phases containing non-identifiers.
Objective not tied to the first unmet Active Phase Exit Criterion.
Phase advanced without required canonical phase receipt criteria satisfied.

Deterministic Advancement Rule
`/status_sync` completes only when written `03_LEVITICUS/STATE_SUMMARY.md`
passes schema validation with zero deviations.

