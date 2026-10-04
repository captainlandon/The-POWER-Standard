# Source-Level Civic Data Cleanup Plan

The runtime publication guard makes the current prototype safe to demonstrate publicly by downgrading unresolved civic records before rendering. This document defines the follow-up work needed to remove that guard over time and make the source dataset itself authoritative.

## Objective

Replace prototype-era mixed-status records in `src/data/mockData.ts` with individually verified, source-linked civic records whose publication status is explicit in the source file itself.

## Required migration for each record

1. Locate the exact primary source.
2. Record the canonical URL, publication date, jurisdiction, and retrieval date where relevant.
3. Reproduce the exact factual claim from the source.
4. Separate what the source establishes from what it does not establish.
5. Record uncertainty, conflicting evidence, data lag, or methodological limitations.
6. Correct legal citations, office names, vote counts, dates, dollar amounts, and metrics.
7. Assign an epistemic status only after the claim-level review is complete.
8. Assign `Verified Real-World Record` only when the displayed record is reproducible from reviewed sources.
9. Preserve demo status for examples that remain simulated or illustrative.
10. Add the verification decision to `DATA_VERIFICATION_LOG.md`.

## Priority sequence

- Secure DC legal citation and scope.
- FY2022 Housing Production Trust Fund appropriation record.
- ACS housing-burden metric.
- ODCA HPTF audit record.
- DHCD production/preservation metrics.
- DDOT bus-priority mileage.
- WMATA performance metrics.
- MPD crime-trend snapshot.
- PIT homelessness record.
- OSSE assessment record.
- Remaining institutions, actors, commitments, relationships, budgets, and outcomes.

## Exit condition

The runtime guard in `src/data/publicReleasePolicy.ts` can be removed only when:

- no placeholder source remains in the production/demo corpus unless explicitly labeled as an example;
- no unresolved record is marked verified;
- the automated public-release audit passes without guarded legacy-data warnings;
- a second reviewer can reproduce each verified record from its source trail.
