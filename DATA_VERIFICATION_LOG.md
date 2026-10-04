# POWER Data Verification Log

This log records public-release verification decisions for prototype civic records. A record is not treated as verified merely because it cites an official institution. Verification requires a reproducible source trail showing what the source establishes, what it does not establish, the jurisdiction and date, and any unresolved limitations.

## Status vocabulary

- **Verified source / bounded claim** — exact source located and the claim is limited to what that source establishes.
- **Needs correction** — a source exists, but the current record overstates, miscites, or does not precisely match it.
- **Unverified demo** — record remains suitable only as clearly labeled demonstration data until checked.
- **Unknown** — evidence is insufficient to classify the claim.

---

## 2026-10-03 public-release audit

### District of Columbia Home Rule Act

**Prototype record:** `ev-dc-home-rule-act`

**Decision:** Verified source / bounded claim, subject to replacing the placeholder URL in the dataset.

**Primary source located:** U.S. Government Publishing Office, Public Law 93-198, 87 Stat. 774, Dec. 24, 1973.

**Canonical source:** https://www.govinfo.gov/content/pkg/STATUTE-87/pdf/STATUTE-87-Pg774.pdf

**What the source establishes:**
- Congress enacted the District of Columbia Self-Government and Governmental Reorganization Act (Home Rule Act).
- Congress delegated specified local legislative powers while retaining ultimate legislative authority over the District.
- The Act provides the statutory framework for the District's elected local government and Home Rule structure.

**What this verification does not establish:**
- The legal status of every contemporary institutional power or procedure described elsewhere in the prototype.
- Any particular agency's current administrative effectiveness.
- Any project-specific interpretation that has not been checked against the operative statutory text and later amendments.

**Required dataset change:** Replace the placeholder source with the exact GovInfo URL and review every specific section citation before marking the full record verified in the UI.

---

### U.S. Census ACS housing-cost-burden record

**Prototype record:** `ev-census-acs-housing-burden`

**Decision:** Needs correction before public release.

**Source family located:** U.S. Census Bureau American Community Survey, Selected Housing Characteristics (DP04), including Gross Rent as a Percentage of Household Income variables.

**Relevant official documentation:**
- https://api.census.gov/data/2022/acs/acs1/profile/variables.html
- https://api.census.gov/data/2023/acs/acs1/profile/groups/DP04.html

**Issue found:** The current prototype states a specific percentage of renters paying **over 50%** of household income while citing DP04 as though that exact threshold is directly represented there. In the DP04 profile structure reviewed during this audit, the upper published category is **35.0 percent or more**. A 50%-plus severe-rent-burden figure may be derivable from another ACS table or calculation, but the current citation/claim pair has not yet been reproduced from the cited DP04 record.

**Required dataset change:**
- Do not label the existing numerical claim verified until the exact ACS table, variable(s), geography, vintage, estimate, and margin of error are reproduced.
- Either replace the claim with a directly supported DP04 statistic or cite the correct detailed ACS table/calculation for the 50%-plus threshold.
- Replace the placeholder URL with the exact Census query or API endpoint used.

**Current release status:** Treat as demo/unverified pending correction.

---

## Global findings from the first data pass

`src/data/mockData.ts` currently contains multiple records that combine one or more of the following:

- `epistemicStatus: 'Verified'`
- `dataStatus: 'Verified Real-World Record'`
- `isDemoData: false`
- `Official Source Placeholder:` URLs

Those combinations are not acceptable for public release. A placeholder is not a reproducible verification trail.

### Release rule

Until each record is individually reviewed, any record with a placeholder URL must be treated as **Simulated Demonstration Record / unverified demo**, regardless of whether the underlying institution, law, report, or statistic is real.

This is a conservative publication rule, not a finding that the underlying claim is false.

---

## Next verification sequence

1. Mayor's Order 2019-036 and the 36,000 / 12,000 housing target.
2. FY2022 Local Budget Act / HPTF appropriation claim.
3. ODCA Housing Production Trust Fund audit claim.
4. DHCD housing production/preservation figures.
5. WMATA Vital Signs performance claims.
6. DDOT bus-priority mileage claims.
7. MPD 2024 crime-statistics claims.
8. Secure DC enactment, vote, legal citation, and scope.
9. All remaining public problems, institutions, actors, commitments, budgets, dates, and outcomes.

Every verification decision should preserve POWER's rule: **official does not mean infallible, and a source proves only what it actually establishes.**
