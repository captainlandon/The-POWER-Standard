# The POWER Standard — Roadmap

This roadmap describes the current sequencing for moving **The POWER Standard** from an early working prototype toward validated, maintainable civic infrastructure.

It is intentionally conservative about claims of completion. Items listed here are goals and workstreams, not assertions that a feature is production-ready.

## North star

POWER should make it easier for people to understand public problems, identify who has authority to act, follow plans and commitments, inspect implementation and outcomes, evaluate the supporting evidence, and understand where civic participation can meaningfully matter.

The core accountability chain is:

```text
Problem
  ↓
Authority / Institution
  ↓
Public Actor
  ↓
Plan / Commitment
  ↓
Resources
  ↓
Implementation
  ↓
Outcome
  ↓
Evidence
```

## Phase 1 — Foundation and methodological integrity

**Goal:** establish the rules that make POWER trustworthy before expanding the feature surface.

Priorities:

- finalize the core civic data model;
- define the relationship among problems, institutions, offices, actors, plans, resources, implementation, outcomes, and evidence;
- formalize evidence classes and epistemic states;
- define what records can establish and what they cannot establish;
- define authority and responsibility rules;
- establish correction, revision, and provenance requirements;
- document methodology and known limitations;
- eliminate misleading aggregate political scoring;
- distinguish statements, appropriations, expenditures, implementation, outcomes, and causation;
- preserve **Unknown** as a legitimate state;
- define versioning rules for plans and public records.

### Exit criteria

Phase 1 is meaningfully complete when a reviewer can inspect a POWER record and understand:

- where each important claim came from;
- how it was classified;
- what remains uncertain;
- who has actual authority;
- how the record can be corrected or challenged.

## Phase 2 — Real-data validation

**Goal:** prove that the model works on real civic records rather than only demo content.

Priorities:

- select an initial jurisdiction and bounded civic domain;
- create 10–20 source-linked real records;
- map institutions, offices, statutory or procedural authority, dependencies, and veto points;
- populate representative POWER Plans and Mandate Ledger records;
- test evidence displays against primary and corroborating sources;
- document ambiguities and edge cases exposed by real data;
- revise the schema based on those findings.

Washington, DC is a strong candidate for the first jurisdictional validation because it can provide a concrete, inspectable environment without defining the eventual geographic scope of the platform.

### Exit criteria

A small set of real records should be understandable and auditable end-to-end without relying on hidden assumptions.

## Phase 3 — Civic comprehension and participation

**Goal:** make institutional complexity understandable without simplifying away important constraints.

Priorities:

- mature **POWER Learn**;
- implement progressive disclosure using a bite / snack / meal model;
- improve **My Civic Context**;
- develop jurisdiction-aware explanations of offices and institutions;
- implement **Participation Context**;
- show what has already been decided and what remains open to influence;
- distinguish informational, consultative, formally considered, co-decisional, and direct public participation where applicable;
- build **Participation Ledger** records that connect public input to institutional response and final decisions;
- improve **How This Gets Done** process visualizations;
- ensure civic-action guidance is nonpartisan, procedural, sourced, and jurisdiction-aware.

### Exit criteria

A user with limited prior civics knowledge should be able to answer:

- who controls this issue;
- where the decision currently sits;
- what remains changeable;
- what participation mechanisms exist;
- what happened after participation occurred.

## Phase 4 — Accessibility and public-service UX

**Goal:** make POWER usable as public infrastructure, not merely as a technically functional prototype.

Priorities:

- audit keyboard navigation and focus behavior;
- improve semantic structure and screen-reader compatibility;
- verify contrast and readable typography;
- strengthen mobile layouts;
- improve form validation and error recovery;
- simplify civic and legal terminology;
- establish consistent design tokens and component patterns;
- incorporate proven public-service interaction patterns where appropriate;
- test critical flows with real users;
- document accessibility defects and remediation.

The visual direction should combine **Civic Institutional Modernism** with restrained **Constitutional Minimalism**: contemporary, credible, legible, and distinctly civic without excessive patriotic ornament.

### Exit criteria

Core workflows should be understandable and operable across common devices and assistive-technology contexts, with known accessibility gaps documented rather than hidden.

## Phase 5 — Open-source contributor readiness

**Goal:** make it practical for outside contributors to understand the project and produce useful work.

Priorities:

- maintain an accurate README;
- maintain this roadmap;
- maintain `CONTRIBUTING.md`;
- establish issue templates;
- define issue labels and contributor task categories;
- create beginner-friendly issues;
- document local setup and architecture;
- document civic-data and evidence conventions;
- define review expectations;
- clarify project governance and decision rights;
- establish a transparent change log for important methodological changes.

### Suggested contributor tracks

- Engineering
- UX / Accessibility
- Civic Data
- Policy / Government Process Research
- Evidence / Provenance
- User Research
- Documentation
- Methodology / Governance

## Phase 6 — Community and partner validation

**Goal:** determine whether POWER solves meaningful problems for people and organizations outside the project team.

Priorities:

- recruit residents for usability testing;
- interview civic organizations and public-interest groups;
- engage public-sector practitioners where appropriate;
- test with journalists, researchers, and policy users;
- identify at least one real-world community or institutional partner;
- test whether POWER improves comprehension, accountability, or participation decisions;
- publish what did not work as well as what did;
- revise product assumptions based on evidence.

### Initial research questions

- Can users correctly identify who has authority after using POWER?
- Can users distinguish a promise from implementation?
- Can users understand evidentiary uncertainty?
- Can users tell what public participation can actually influence?
- Does POWER reduce the time required to reconstruct a public-accountability chain?
- Which concepts create confusion or false confidence?

## Phase 7 — Governance and public trust

**Goal:** make POWER itself accountable as its influence grows.

Priorities:

- publish methodology version history;
- establish a transparent correction and appeal process;
- document conflicts-of-interest policy;
- define source-selection and inclusion standards;
- document how contested classifications are resolved;
- explore an independent methodology / public-trust advisory structure;
- separate platform operations from partisan advocacy;
- create safeguards against silent rule changes;
- define stewardship and sustainability responsibilities.

Long-term governance should recognize that choices about schemas, evidence, classifications, and presentation can themselves exercise civic power.

## Phase 8 — Broader platform capability

**Goal:** expand only after the foundational methodology and user value are validated.

Potential workstreams include:

- richer **Problem Atlas** coverage;
- expanded **Power Map** relationships;
- Plan Builder improvements;
- structured plan comparison;
- deeper Mandate Ledger timelines;
- Civic Wire as a record-change feed;
- ethics-signal research with strict evidentiary safeguards;
- public APIs and machine-readable civic records;
- research interfaces;
- certification or conformance mechanisms for POWER-standard records;
- expanded **Flourishing Outcomes** research;
- multi-jurisdiction support;
- multilingual interfaces.

These are not all immediate MVP requirements.

## What we are deliberately avoiding

POWER should not optimize for feature count.

We are deliberately avoiding:

- partisan candidate rankings;
- endorsements;
- election predictions;
- engagement-maximizing outrage mechanics;
- unexplained AI judgments;
- single-number political quality scores;
- presenting incomplete data as certainty;
- treating official claims as automatically true;
- expanding nationally before the methodology is validated locally;
- adding features simply because they are technically possible.

## Near-term public milestone

A credible early public milestone would include:

1. a documented methodology;
2. a stable core data schema;
3. a small corpus of real, source-linked civic records;
4. an accessible working prototype;
5. a public contributor workflow;
6. documented user testing;
7. at least one real community or domain validation partner;
8. a transparent list of limitations and unresolved questions.

That would move POWER from **concept + prototype** toward **validated civic infrastructure**.

## How to use this roadmap

This is a living document. Priorities may change as research, real-world records, user testing, contributors, and community partners reveal new information.

Changes to sequencing should be justified by evidence or project needs, not hidden behind silent scope changes.

For contribution guidance, see [CONTRIBUTING.md](./CONTRIBUTING.md).
