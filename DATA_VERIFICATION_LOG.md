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

### Mayor's Order 2019-036 — Housing Initiative

**Prototype record:** `ev-mayor-order-2019`

**Decision:** Verified source / bounded claim, subject to correcting the dataset source URL and reviewing any downstream interpretation.

**Primary source located:** District of Columbia Office of Planning copy of Mayor's Order 2019-036, dated May 10, 2019.

**Canonical source:** https://planning.dc.gov/sites/default/files/dc/sites/op/page_content/attachments/2019-036%20Housing%20Initiative%20%285.9%29.pdf

**What the source directly establishes:**
- The District set a goal to create **36,000 new residential units by 2025**.
- The Order states that **at least 12,000** of the new units should be affordable to low-income households.
- The Order also identifies a goal of preserving an additional 6,000 affordable units.
- The Office of Planning and related housing agencies were directed to investigate and implement policy approaches and area-specific planning.

**What it does not establish:**
- That 36,000 units were ultimately delivered.
- That the 12,000 affordable-unit target was achieved.
- That a particular budget appropriation was made solely because of this order.
- That subsequent housing outcomes were caused by the order.

**Required dataset change:** Replace the placeholder URL with the exact DC government PDF and ensure downstream implementation/outcome fields are separately sourced.

---

### FY2022 Housing Production Trust Fund appropriation

**Prototype record:** `ev-council-hptf-act-2021`

**Decision:** Partially verified; citation/title in the prototype needs correction and the claim should be bounded to authorization/appropriation rather than expenditure.

**Official sources located:**
- D.C. Act 24-175, Fiscal Year 2022 Local Budget Emergency Act of 2021: https://code.dccouncil.gov/us/dc/council/acts/24-175
- D.C. Law 24-43, Fiscal Year 2022 Local Budget Act of 2021: https://code.dccouncil.gov/us/dc/council/laws/24-43

**What the Act source establishes:**
- The Housing Production Trust Fund line is stated as **$250,000,000** in the FY2022 emergency budget act.
- The law/act framework authorizes expenditure subject to the terms of the enacted budget.

**Issue found in the prototype:**
- The current record title cites **“D.C. Act 24-159”**, which does not match the official source located for the $250 million HPTF line.
- The current record wording should distinguish an appropriation/authorization from actual disbursement or completed expenditure.

**Required dataset change:**
- Correct the legal citation/title to the operative official source used.
- Replace the placeholder URL.
- Preserve the existing `doesNotEstablish` distinction that appropriation does not prove full expenditure, project completion, or downstream housing outcomes.

**Current release status:** Needs citation correction before the record can be publicly labeled verified.

---

### ODCA Housing Production Trust Fund audit record

**Prototype record:** `ev-odca-hptf-audit-2022`

**Decision:** Needs correction / further verification.

**Official material located:** An Office of the D.C. Auditor report on the District of Columbia Housing Production Trust Fund was located, but the specific prototype claim that FY2018–FY2021 administration failed a **50%** Extremely Low-Income allocation requirement was not reproduced from the located source. The ODCA material reviewed describes a statutory targeting framework that included **40%** for households at or below 30% AMI and another 40% for households at 31–50% AMI in the cited period.

**Issue found:** The prototype's percentage, audit window, and wording may combine material from different statutory periods or reports.

**Required dataset change:** Keep this record demo/unverified until the exact ODCA report, audit period, applicable statutory language, and finding are matched line-for-line to the claim.

---

### DHCD FY2024 housing-production record

**Prototype record:** `ev-dhcd-pipeline-report-2024`

**Decision:** Needs correction / exact source not reproduced.

**Official material located:**
- DHCD Housing Production Trust Fund Reports: https://dhcd.dc.gov/page/housing-production-trust-fund-reports
- 2024 Consolidated Request for Proposals for Affordable Housing Projects: https://dhcd.dc.gov/publication/2024-consolidated-request-proposals-affordable-housing-projects

**Issue found:** The current prototype cites a “DHCD Annual Housing Production and Preservation Report: FY2024 Mid-Year Update” with figures of **31,450** total units delivered or under construction and **9,210** covenant-restricted affordable units. That exact report/figure pair was not reproduced from the official DHCD sources reviewed. An official 2024 DHCD page states that **more than 9,800 affordable units had been produced since 2019**, which does not match the prototype's 9,210 figure.

**Required dataset change:** Keep the record as demonstration data until the exact report, date, methodology, and figures are located. Do not substitute the 9,800 figure into the prototype without reconciling whether the two metrics measure the same thing.

---

### DDOT bus-priority mileage record

**Prototype record:** `ev-ddot-bus-priority-2023`

**Decision:** Needs correction.

**Official sources located:**
- FY2023 DDOT Performance Oversight Hearing testimony: https://ddot.dc.gov/sites/default/files/dc/sites/ddot/release_content/attachments/FY23%20DDOT%20Performance%20Oversight%20Hearing%20Testimony%20240209%202_1.pdf
- DDOT Bus Lane and Bus Zone Enforcement FAQ: https://ddot.dc.gov/page/ddot-bus-lane-and-bus-zone-enforcement-faqs

**Issue found:** The prototype states **12.4 lane-miles completed** in a 2023 annual progress report. DDOT's FY2023 oversight testimony states **12.1 lane-miles of bus lanes completed**, while a later DDOT page refers to **more than 12.7 lane-miles** in the District. These are time-sensitive metrics and the prototype's 12.4 figure was not reproduced from the official sources reviewed.

**Required dataset change:** Use the exact figure tied to a specific dated source and reporting period. Do not blend figures from different dates.

---

### WMATA Vital Signs performance record

**Prototype record:** `ev-wmata-vital-signs-2024`

**Decision:** Needs correction / likely metric conflation.

**Official material reviewed:** WMATA performance-report material contains values such as **78.1%** and **87.4%** in route-level real-time prediction availability tables, but the source located was FY2023 and those percentages were not systemwide Metrobus and Metrorail on-time performance values as described in the prototype.

**Issue found:** The prototype's wording may have conflated route prediction-availability percentages with on-time performance metrics.

**Required dataset change:** Keep as demo/unverified until the exact FY2024 report is located and each percentage is tied to the correct metric, mode, period, and denominator.

---

### MPD 2024 crime-trend record

**Prototype record:** `ev-mpd-crime-stats-2024`

**Decision:** Unverified demo pending exact source reproduction.

**Issue found:** The current prototype gives **142 homicides YTD through September 2024**, a **28% decrease** from an equivalent 2023 period, and **26% lower total violent crime**. An exact MPD source reproducing that complete claim set was not located in the current pass.

**Required dataset change:** Do not publish as verified until the exact MPD data snapshot, cutoff date, comparison period, and calculation are reproduced. Because MPD dashboards are dynamic, POWER should ideally preserve the retrieval date and archived/source snapshot where possible.

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

1. Secure DC enactment, vote, legal citation, and scope.
2. All remaining public problems, institutions, actors, commitments, budgets, dates, and outcomes.
3. Replace every placeholder source URL and reconcile `epistemicStatus`, `dataStatus`, and `isDemoData` across the corpus.
4. Run `node scripts/public-release-audit.mjs`; the repository should not be made public until it passes.

Every verification decision should preserve POWER's rule: **official does not mean infallible, and a source proves only what it actually establishes.**
