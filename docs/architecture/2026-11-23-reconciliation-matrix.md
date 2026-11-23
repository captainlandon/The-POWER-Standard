# POWER 2026-11-23 reconciliation matrix

**Status:** Audit snapshot; documentation-only. **Primary reference:** [ADR-001](./ADR-001-government-native-architecture.md).

| Requirement / clarification | Existing evidence inspected | Status | Reconciliation action |
|---|---|---|---|
| Nonpartisan public understanding and auditability | main README; ROADMAP | Aligned | Preserve |
| Existing capabilities not source-driven feature additions | README planned components; website README | Aligned but scattered | ADR explicitly protects scope |
| Real government as structural skeleton | README Power Map; ROADMAP authority model | Partial | ADR defines federalism, branch/jurisdiction variation, time |
| Graph of institutions, decisions, funds, evidence | README linear chain | Partial | ADR distinguishes explanatory chain from graph |
| POAAI Standard / Platform / Ecosystem | README standard/platform | Partial | ADR records distinctions; verify original source |
| Comprehensive moonshot vs bounded MVP | ROADMAP phases | Partial | ADR preserves separation; original six unresolved |
| Question-first UX, government browsing | React App navigation; mockup discussion | Not verified as shipped | UX hypothesis, test before implementation |
| POWER Retrospective | website README and React imports | Concept present | Preserve historical/current distinction |
| Source registry across sectors | docs/sources branch | Research only | Maintain CSV, validate each connector |
| GovInfo + Congress.gov reconciliation | Offline prototypes reported, not inspected in repo | Not merged/verified | Real-data integration acceptance gate |
| Freshness and source timestamps | README evidence rules | Partial | ADR specifies required time dimensions |
| Institutional adoption without capture | Not established in inspected docs | Gap | ADR independence principle |
| Ducit analogy only | No matching main-branch text found in inspected files | Clarification needed | ADR explicitly separates projects |
| Current production capability | README labels prototype | Not production | Maintain conservative status |
| Full repository audit | README, ROADMAP, website README, App entry point, registry inspected | Incomplete | Deep file-level code audit remains |

## Traceability discipline

A row is **not** evidence of a working implementation. Source research → normative requirement → data contract → code implementation → automated test → live evidence → public release are separate gates. Future PRs should reference applicable rows and attach concrete verification.

## Immediate technical acceptance tests

1. Fetch one authentic Congress.gov bill record and related GovInfo document, with canonical identifiers and original URLs.
2. Preserve raw payload or lawful integrity representation, timestamps, checksum, and unreviewed state.
3. Verify idempotent ingestion and version preservation on changed source.
4. Demonstrate one linked evidence item in existing POWER Evidence Drawer without asserting implementation or policy success.
5. Repeat the method on a DC housing-related record from an official local source.
