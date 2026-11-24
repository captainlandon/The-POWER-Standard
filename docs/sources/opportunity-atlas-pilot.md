# Opportunity Atlas — DC pilot (2026-11-24)
Status: proposed; no data ingestion or deployment verified.

## First vertical slice
Select the canonical All Outcomes by Census Tract table and its release-specific codebook at https://opportunityinsights.org/paper/the-opportunity-atlas/. Use one pooled demographic estimate of adult household income rank at parental income percentile 25, subject to confirming exact column, cohort and units in that codebook. Filter DC state FIPS 11 and county 001. Retain 2010 tract geography; do not silently interpret as 2020 geography. Verify redistribution terms before publishing extracts.

## Data contract
Record source URL, retrieval timestamp, release/version, SHA-256, codebook URL, geography vintage, 11-character GEOID, birth cohort, subgroup, parental percentile, metric, unit, estimate, available standard error/suppression flag. Preserve missing values; never substitute zero. Reject duplicate keys and invalid GEOIDs. Use explicit weighted crosswalk only after validating method and coverage; avoid mechanical conversion of rates.

## Acceptance gates
1. Fetch actual publisher file and codebook; record hash and terms.
2. Validate schema and units against codebook, check DC row counts and uniqueness, compare sampled rows with source.
3. Test malformed IDs, missing/suppressed estimates, duplicate records and mixed vintages.
4. Render one historical neighborhood profile with source and cohort visible, no personal predictions.
5. Independent review of data interpretation and reproducibility before public pilot.

## Product and collaboration
POWER owns the initial source-linked historical outcome view. Panoptica and Tao research can reuse reviewed aggregate data independently. Gudsy collaboration hypothesis: historical community context alongside separately sourced, current nonprofit discovery; validate actual service eligibility, coverage and availability; never infer individual need from tract averages. No partnership or API access assumed.

## Presentation insert
Title: From circumstances to agency.
Sequence: historical neighborhood outcomes → public commitments and resources (POWER) → institutional evidence (Panoptica) → current resource discovery (potential Gudsy collaboration) → informed individual action.
Label each relationship conceptual, and the pilot proposed. No invented maturity scores or claims of causal impact.

## References
- https://opportunityinsights.org/data/
- https://opportunityinsights.org/wp-content/uploads/2024/07/Opportunity_Atlas_Methods_Modules_1_and_2.pdf
- https://opportunityinsights.org/wp-content/uploads/2019/07/Codebook-for-Table-9.pdf
