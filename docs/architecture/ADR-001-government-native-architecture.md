# ADR-001: Government-native POWER architecture and product boundaries

**Date:** 2026-11-23  
**Status:** Proposed for review  
**Scope:** POWER Standard; architecture and product requirements only  
**Supersedes:** No existing accepted ADR; older designs remain historical evidence.

## Context

POWER's mission is to make government understandable, navigable, transparent, auditable, and participatory. Sources supplied today include GPO/GovInfo, USAGov, White House, State, SSA, House, Congress.gov, Data.gov, an organizational diagram of the federal government, and research on official, nonprofit, academic, and private-sector sources. **These sources substantiate and organize already contemplated capabilities; adding a source does not approve a new feature.**

Ducit is an analogy for the quality of personalized navigation, agency, and simplicity sought in POWER. **Ducit remains a separate life-navigation product and is not a POWER dependency, rebrand, integration commitment, or merger.** Other Innovatio projects remain separate unless explicitly authorized.

## Decisions

1. **Institutional skeleton:** Represent real constitutional and legal authority, federalism, branches, offices, agencies, courts, processes, and changing jurisdictional arrangements. Do not impose a uniform three-branch hierarchy on every jurisdiction. DC, tribal governments, territories, state and local institutions require legally accurate models.
2. **Graph beneath the journey:** Preserve the readable Problem → Authority → Actor → Commitment → Resources → Implementation → Outcomes → Evidence chain as a *user-facing analytical path*, not a strict database hierarchy. Include feedback, oversight, judicial review, institutional changes, and participation as cross-links.
3. **Product boundary:** Maintain the POWER Standard (normative POAAI methodology), POWER Platform (public experience), and POWER Ecosystem (sources, institutions, partnerships, future integrations). These are layers of one project, not automatically separate products.
4. **Existing capabilities:** Retain Problem Atlas, Power Map, Plans/Plan Builder, Plan Comparison, Mandate Ledger, Evidence, POWER Learn, My Civic Context, Participation Context/Ledger, Civic Action, Civic Wire, Retrospective, and related concepts. Consolidate navigation and shared infrastructure without silently removing capabilities.
5. **UX:** Prefer question-first entry with direct institutional browsing. The earlier six-card concept (Power Map, Mandate Ledger, Problem Atlas, Retrospective, Civic Action, POWER Learn) is a *design hypothesis*, not a verified historical list of the original six requirements. Validate original POAAI documents before declaring it canonical.
6. **Moonshot and MVP:** Describe the comprehensive destination separately from validated implementation. Prioritize bounded, source-linked DC housing and federal legislative examples; no claim of production readiness without live validation.
7. **Independence:** Design for voluntary institutional interoperability and possible government adoption, without ceding unilateral control of evidence, methodology, corrections, or independent public scrutiny.
8. **Evidence neutrality:** Official records prove what was officially recorded, not the truth of every statement. Separate descriptive facts, legal interpretation, and normative analysis. Never equate an appropriation with expenditure, a vote with sole responsibility, or correlation with causation. Avoid partisan rankings.
9. **Freshness:** Store event time, publication time, ingestion time, last checked time, source version, and known reporting lag where available. Do not promise universal real-time coverage.
10. **Data governance:** Track provenance, reuse rights, source authority, original publisher and intermediaries, historical versioning, corrections, privacy, accessibility, and source-specific limitations.

## Public experience hypothesis

**Ask → Explore → Examine evidence → Participate → Follow.** This is an interface proposal for user testing, not an assertion that all steps exist in the deployed application. Role-sensitive experiences for residents, officials, researchers, and educators should share underlying records.

## Verification and consequences

- Existing main-branch README and ROADMAP already cover much of the mission and planned modules.
- Source registry in this branch is research inventory; not deployed connectors.
- Offline GovInfo and Congress.gov prototypes described in conversation have not been verified as merged into this repository.
- Do not claim complete source coverage, real-time activity, live ingestion, institutional adoption, or functioning end-to-end participation.
- Before modifying main README, roadmap, public site, or application UX, review this ADR and confirm the original POAAI requirements, existing code contracts, and relevant acceptance tests.

## Open decisions

- Confirm the historical original six capabilities from source documents.
- Decide final UX navigation through usability testing, not a mockup alone.
- Define jurisdiction-aware institutional schema and temporal entity IDs.
- Verify live source connectors, licensing, retention, and freshness SLAs.
- Decide stewardship, governance, and independent institutional adoption rules.
