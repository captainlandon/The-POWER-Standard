# Initial POWER code audit — 2026-11-24

Scope: main README.md, ROADMAP.md, package.json, src/App.tsx. Static inspection only; no execution, dependency audit, backend inspection, complete PR review or deployment validation.

## P0
- App.tsx handleOpenEvidence silently substitutes EVIDENCE_STORE[0] for missing ID. Replace with explicit unavailable state and regression test. Never misattribute evidence.
- Establish functional test harness: missing evidence, source identity, demo/live separation, correction workflow and navigation. Existing check script runs typecheck, release audit and build; package.json has no dedicated test command.
- Review PR #23 full diff, current checks and protections before classifying or merging. Methodology changes may be R2.
- Validate one real end-to-end DC housing record or Congress.gov/GovInfo workflow with original source, retrieval date, identity and claim boundaries. Opportunity Atlas pilot follows verified ingestion foundation.

## P1
- Corrections and feedback use in-memory React state in App.tsx; verify backend and implement durable reviewed submission workflow with privacy and abuse safeguards.
- Navigation uses string state and selected IDs; introduce typed routes, deep links and browser history with tests.
- Inspect server.ts, API auth, rate limits, secret handling, upload validation, dependency lockfile and CI before public release.
- Audit accessibility and mobile flows, then recruit pilot users; measure correct identification of authority, evidence and implementation.

## P2
- Expand source adapters, historical mobility views, and civic participation only after validation. Keep public explanatory website and prototype release status distinct.

No fixes or tests executed in this audit. No production-readiness claim.
