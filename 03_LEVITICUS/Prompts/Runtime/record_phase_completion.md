# /record_phase_completion Prompt

Command Name
/record_phase_completion

Purpose
Write the canonical phase-completion receipt for the resolved Active Phase
after direct proof is obtained for every non-receipt Exit Criterion in the
latest roadmap artifact.

Required Inputs
latest roadmap artifact matching `03_LEVITICUS/PROJECT_ROADMAP_v<INTEGER>.md`
`03_LEVITICUS/Core/STATE_SUMMARY_SCHEMA_v1.md`
`03_LEVITICUS/Core/RESUME_PROTOCOL_v1.md`
`03_LEVITICUS/Core/PHASE_COMPLETION_RECEIPT_SCHEMA_v1.md`
`03_LEVITICUS/STATE_SUMMARY.md`
`03_LEVITICUS/Core/FAILURE_CODES_v1.md`

Optional Inputs
Explicit phase override declared before execution
Explicit realization mode override declared before execution

Output Contract
Output path must be
`03_LEVITICUS/Execution/ROADMAP_<Roadmap Version>_PHASE_<IDENTIFIER>_RECEIPT.md`.
Output must conform exactly to
`03_LEVITICUS/Core/PHASE_COMPLETION_RECEIPT_SCHEMA_v1.md`.
Output must be written in overwrite-only mode.
Must write exactly one receipt for the resolved phase.
Must record `Realization Mode` as one of `create`, `validate`, `extend`,
`prove`, `reprove`, or `mixed`, with a value consistent with the resolved
phase type.
Must list every non-receipt Exit Criterion from the resolved phase under
`Verified Exit Criteria` in declared order.

Guardrails
Must resolve the phase from `03_LEVITICUS/STATE_SUMMARY.md` unless an explicit
phase override is provided.
Must fail if the resolved phase type is unsupported by
`03_LEVITICUS/Core/PHASE_COMPLETION_RECEIPT_SCHEMA_v1.md`.
Must require direct proof for every non-receipt Exit Criterion before writing
the receipt.
Must not treat the receipt artifact itself as proof of non-receipt criteria.
Must not write a receipt when any non-receipt Exit Criterion is unmet.
Must not modify the latest active roadmap artifact or `03_LEVITICUS/STATE_SUMMARY.md`.
Must resolve required local canonical artifacts from the workspace filesystem
when available.
Must not request the user to paste local roadmap, state-summary, or receipt
artifacts that are readable from the workspace.
Must emit failures using canonical codes from `03_LEVITICUS/Core/FAILURE_CODES_v1.md`.

Failure Modes
Resolved phase missing from roadmap.
Resolved phase type is unsupported by the receipt schema.
Roadmap version mismatch between state summary and active roadmap artifact.
Missing direct proof for one-or-more non-receipt Exit Criteria.
Receipt path version or phase identifier mismatch.
Receipt schema deviation.

Deterministic Advancement Rule
`/record_phase_completion` completes only when a compliant canonical receipt is
written for the resolved phase after every non-receipt Exit Criterion is
proven directly.
