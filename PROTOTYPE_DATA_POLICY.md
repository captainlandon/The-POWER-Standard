# Prototype Civic-Data Publication Policy

The POWER Standard is a developing civic-accountability platform. The repository currently contains a mixture of real-world civic examples, partially verified examples, and simulated demonstration records used to test the data model and interface.

## Publication rule

A civic record is not considered verified merely because it cites an official institution, statute, report, dashboard, or public statement. Public verification requires a reproducible source trail showing the exact source, date, jurisdiction, claim scope, what the evidence establishes, what it does not establish, and any unresolved limitations.

Until that process is complete, the public prototype must treat the record as a **Simulated Demonstration Record** or otherwise mark its epistemic status as unresolved.

## Runtime guard

`src/data/publicReleasePolicy.ts` applies a conservative publication guard before the React application renders. It downgrades unresolved prototype records to demonstration status and prevents legacy mock-data labels from being presented as verified findings.

Only records in the explicit verified-evidence allowlist may be presented as verified, and that status is bounded to the specific claim independently checked during the release audit.

## Source-level technical debt

Some historical entries in `src/data/mockData.ts` still contain prototype-era labels or placeholder source references. These are retained temporarily to avoid a risky large-scale rewrite while the data corpus is being audited. They are not the authoritative publication status of the records.

The authoritative verification trail is maintained in:

- `DATA_VERIFICATION_LOG.md`
- `PUBLIC_RELEASE_CHECKLIST.md`
- `src/data/publicReleasePolicy.ts`

The long-term objective is to migrate all records from prototype mock data into individually sourced, validated records so the runtime guard is no longer necessary.

## Methodological principles

- Authority before accountability.
- Evidence before judgment.
- Official does not mean infallible.
- Unknown is a valid answer.
- Missing evidence is not evidence of failure.
- Appropriation is not expenditure.
- Implementation is not outcome.
- Outcome is not causation.
- Nonpartisanship does not require false balance.

Public users and contributors should report suspected data errors through the repository's correction or issue workflow rather than treating prototype records as definitive factual findings.
