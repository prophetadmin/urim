# `03_LEVITICUS/Execution/ROADMAP_<Roadmap Version>_PHASE_<IDENTIFIER>_RECEIPT.md` SCHEMA v1 - Canonical Phase Completion Receipt

## 1. Scope

This schema defines the required structure for canonical phase-completion
receipts written under `03_LEVITICUS/Execution/`.

Receipts under this schema are project-pass evidence artifacts.
They record that direct proof was obtained for every non-receipt Exit Criterion
of one phase in the active roadmap version.

## 2. Canonical Path Rule

The canonical receipt path for a phase is:

`03_LEVITICUS/Execution/ROADMAP_<Roadmap Version>_PHASE_<IDENTIFIER>_RECEIPT.md`

Example:
`03_LEVITICUS/Execution/ROADMAP_v1_PHASE_2_RECEIPT.md`

The path MUST bind exactly one roadmap version and one phase identifier.

## 3. Required Structure

### `03_LEVITICUS/Execution/ROADMAP_<Roadmap Version>_PHASE_<IDENTIFIER>_RECEIPT.md`

**Roadmap Version**
<Version identifier matching the active roadmap artifact>

**Phase Identifier**
<Single integer identifier matching the roadmap phase number>

**Phase Title**
<Exact phase title from the roadmap block>

**Phase Type**
<Exact phase type from the roadmap block>

**Receipt Status**
PASS

**Realization Mode**
<One of: `create`, `validate`, `extend`, `prove`, `reprove`, `mixed`>

**Validated By**
`/record_phase_completion`

**Verified Exit Criteria**
- <Verbatim non-receipt Exit Criterion from the roadmap phase>
- <Verbatim non-receipt Exit Criterion from the roadmap phase>

## 4. Structural Constraints

Receipts must contain exactly the fields defined in Section 3 and no additional
top-level fields.

`Roadmap Version` must match both:
- the active roadmap artifact version
- the version token encoded in the receipt path

`Phase Identifier` must match both:
- the phase identifier in the active roadmap
- the identifier encoded in the receipt path

`Phase Title` must match the exact roadmap phase title for the referenced
phase.

`Phase Type` must match the exact phase type declared in the referenced roadmap
phase.

`Receipt Status` must be the literal value `PASS`.

`Realization Mode` is the canonical backward-compatible field name for how this
project pass completed the phase boundary:
- `create` when required implementation artifacts were created in this pass
- `validate` when pre-existing implementation artifacts were directly proven
  sufficient in this pass without required extension
- `extend` when pre-existing implementation artifacts required repository-owned
  extension in this pass
- `prove` when a validation phase was completed through direct project-pass
  proof without superseding an earlier receipt
- `reprove` when a validation phase required renewed direct project-pass proof
  for the same roadmap version and phase identifier
- `mixed` when the phase required more than one of the modes above

`Verified Exit Criteria` must:
- list every non-receipt Exit Criterion from the referenced roadmap phase
- preserve declared order from the roadmap phase
- copy the criterion text verbatim
- exclude receipt-path existence or receipt-schema criteria for the same
  receipt artifact

## 5. Minimalism Rule

Phase completion receipts must remain structurally minimal.

They MUST NOT contain:
- historical narrative
- session transcript excerpts
- timestamps
- qualitative commentary
- design discussion
- copied command output logs

They function as canonical project-pass completion receipts, not as work logs.

## 6. Schema Authority

This document defines `PHASE_COMPLETION_RECEIPT_SCHEMA_v1`.

Any canonical phase-completion receipt written under `03_LEVITICUS/Execution/`
must conform exactly to this schema.
Deviation from the canonical path rule, required structure, or structural
constraints constitutes schema violation.
