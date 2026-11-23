# POWER Master Source Registry — v0.1

**Status:** Research inventory, not live connector inventory. **As of:** 2026-11-23. **Owner:** POWER Standard. **Purpose:** Organize sources for existing POWER capabilities without feature proliferation.

## Governance

- Government organization is the underlying institutional skeleton; public-facing UX may be question-first.
- Distinguish official primary records, government aggregators, third-party research, and platform intermediaries.
- Never infer policy implementation, success, causal attribution, or verification from publication alone.
- Track original publisher, intermediary, identifiers, jurisdiction, event date, publication date, retrieval time, content hash, correction history, and evidence review state.
- Do not assume an API, open license, partnership, or real-time availability merely from a public website.
- Source priority is **engineering sequencing**, not a political judgment or institutional ranking.

## Inventory

The machine-readable registry is [master-source-registry.csv](./master-source-registry.csv), containing **36 entries**. Each entry has a URL, coverage, POWER mapping, access caveats, and status. Entries marked *discovery only* or *not integrated* require endpoint, rate-limit, license, freshness, and sample-payload verification.

## Initial validation sequence

1. **Congress.gov + GovInfo:** authenticate server-side, retrieve one real bill and text package, reconcile identifiers, preserve source bytes and provenance. Prior prototypes tested only synthetic payloads.
2. **DC Council + DC CFO + DC Open Data:** test one local housing-related legislative/fiscal record and its authoritative identifiers.
3. **USAspending + Treasury + GAO:** validate the fiscal and oversight links without conflating appropriations, obligations, outlays, awards, and outcomes.
4. **Federal Register + Regulations.gov:** validate notice/docket relationships and public participation deadlines.
5. **OpenFEC + state legislative sources:** validate access restrictions and provenance before use.

## Connector acceptance criteria

- Real official response retrieved; response schema and canonical IDs recorded.
- Terms, access, quotas, and permitted reuse documented.
- Raw record or permissible integrity representation retained, with checksum and retrieval timestamp.
- At least one repeat ingestion is idempotent; changed records create new versions.
- User-visible claims link to original documents and carry reviewed/unreviewed state.
- Data gaps and cross-source disagreements are explicit, never silently resolved.
- Integration works with the existing POWER Evidence Layer rather than introducing parallel product modules.

## Backlog and provenance

This is a **research and architecture PR**, not a production API deployment. No API keys, live endpoints, or connectors were tested in this commit. Sources and mappings consolidate earlier POWER research and require individual validation before operational claims.

## 2026-11-23 election and ecosystem-source addendum

Seven leads from the civic-API review were added: Google Civic Information (election/divisions only), Democracy Works, LegiScan, Vote Smart, API Evangelist, Civic Tech Field Guide, and Awesome Civic Tech. Plural Open/Open States was already tracked; do not duplicate it. The Google Representatives API was discontinued in April 2025, so do not design representative lookup around that endpoint. The earlier reference to Google Civic Information as a general elected-representative lookup is no longer valid. All added rows remain unintegrated; official documentation review is *not* a live API test or license grant. Check user-location privacy when using address-based services.

**Source selection rule:** Prefer authoritative records for legal and official status; aggregators can help with multi-jurisdiction normalization but must preserve upstream IDs, original document links, lag, license, and source disagreements. API Evangelist and Civic Tech Field Guide are discovery/indexing systems, not substitutes for government data. All political-information claims still require claim-level evidence.
