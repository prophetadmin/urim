# /validate_phase Prompt

Command Name
/validate_phase

Purpose
Verify Active Phase completion using direct proof for every Exit Criterion in
the latest roadmap artifact.

Required Inputs
latest roadmap artifact matching `03_LEVITICUS/PROJECT_ROADMAP_v<INTEGER>.md`
`03_LEVITICUS/Core/STATE_SUMMARY_SCHEMA_v1.md`
`03_LEVITICUS/Core/RESUME_PROTOCOL_v1.md`
`03_LEVITICUS/Core/PHASE_COMPLETION_RECEIPT_SCHEMA_v1.md`
`03_LEVITICUS/STATE_SUMMARY.md`
`03_LEVITICUS/Core/FAILURE_CODES_v1.md`

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
Must not modify artifacts.
Must require direct proof for each criterion.
Must fail criteria when referenced files, commands, or anchors are missing.
Must not treat ephemeral validation output as a substitute for
`/record_phase_completion`.
Must resolve required local canonical artifacts from the workspace filesystem
when available.
Must not request the user to paste local roadmap, state-summary, or receipt
artifacts that are readable from the workspace.
Must not use qualitative completion language.
Must emit failures using canonical codes from `03_LEVITICUS/Core/FAILURE_CODES_v1.md`.

Failure Modes
Missing required input.
State summary schema noncompliance.
Active Phase undefined in roadmap.
Missing proof for any criterion.
Snippet exceeds 12 lines.

Deterministic Advancement Rule
`/validate_phase` completes only when every Active Phase Exit Criterion is
proven with compliant evidence.

