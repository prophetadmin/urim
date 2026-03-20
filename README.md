# URIM

This is the canonical URIM repository.

It preserves merged history from two connected lines:

- the earlier URIM line
- the later runtime-completion continuation line, which inherited earlier URIM
  EXODUS material and advanced the project further

These lines are not competing active products. History is plural, but authority
at HEAD is singular.

## Historical Context

The earlier line reflects execution under MetaDictum Framework v1.

The later runtime-completion line was not a MetaDictum v2-governed run. It is
the execution record from which hardening observations were gathered, and those
observations later contributed to what became MetaDictum v2.

That continuation line remains significant because it established the runnable
local app path, surfaced live operational gaps, and materially advanced the
project beyond the earlier line.

## Active Authority At HEAD

The single canonical active roadmap at HEAD is:
`03_LEVITICUS/PROJECT_ROADMAP_v1.md`

`03_LEVITICUS/STATE_SUMMARY.md` remains aligned to that roadmap.

Canonical phase receipts under `03_LEVITICUS/Execution/` remain the active
execution evidence for completed phases.

`03_LEVITICUS/Historical/PROJECT_ROADMAP_v2_DERIVATIONAL_PROVENANCE.md` is
preserved as historical derivational provenance and is not active execution
authority at HEAD.

## Runtime Entry Path

Launch the local app with:

`powershell -ExecutionPolicy Bypass -File 02_EXODUS/runtime/start_local_app.ps1`

The Node host serves the application at:

`http://127.0.0.1:8787/app_shell.html`

Primary runtime entry files:
- `02_EXODUS/runtime/start_local_app.ps1`
- `02_EXODUS/runtime/host/local_app_host.js`
- `02_EXODUS/runtime/surface/app_shell.html`
- `02_EXODUS/runtime/surface/chat_app.html`

## Repository Role

This repository is the canonical product repository for URIM. It preserves
origin, continuation, governance, evidence, and runtime implementation in one
place without rewriting the historical record.
