# The POWER Standard

**Participation is voluntary. Accountability is not.**

**POWER (Public Office Work Evidence and Results)** is an open-source, nonpartisan civic-accountability project connecting public problems, governmental authority, plans, implementation, outcomes, and the evidence behind them.

**We are building in public and seeking contributors, technical collaborators, research partners, and prospective co-founders.** The repository contains a working prototype and developing research, **not a production-ready civic-data service**.

[Explore beginner-friendly issues](https://github.com/captainlandon/The-POWER-Standard/issues) · [Start contributing](./CONTRIBUTING.md) · [See the roadmap](./ROADMAP.md) · [Discuss an idea](https://github.com/captainlandon/The-POWER-Standard/issues/new) · [Review release limitations](./PUBLIC_RELEASE_CHECKLIST.md)

## Start here: find a way to contribute

| Your expertise | Useful starting point |
|---|---|
| React / TypeScript / testing | [Evidence display issue #6](https://github.com/captainlandon/The-POWER-Standard/issues/6) |
| Public records / civic data | [Real DC dataset issue #4](https://github.com/captainlandon/The-POWER-Standard/issues/4) |
| UX / accessibility | [Accessibility issue #5](https://github.com/captainlandon/The-POWER-Standard/issues/5) |
| Civic research / government process | [Decision-process research issue #7](https://github.com/captainlandon/The-POWER-Standard/issues/7) |
| Product architecture / history | [American Civic Covenant issue #13](https://github.com/captainlandon/The-POWER-Standard/issues/13) |
| Documentation / new contributor | [Documentation issue #1](https://github.com/captainlandon/The-POWER-Standard/issues/1) |

**New here?** Read [CONTRIBUTING.md](./CONTRIBUTING.md), comment on an issue describing your approach, and start with a small, reviewable PR. **Not technical?** Primary-source checking, plain-language writing, and user testing are equally valuable. For partnership or co-founder interest, open a focused introductory issue without sharing private information, or initiate contact through a professional channel.

## Run the prototype locally

Prerequisites: a recent Node.js release compatible with Vite 8 and npm. Use the repository's lockfile and environment template where provided.

```bash
npm install
npm run dev
```

Then follow the local URL printed by the development server. Optional AI functionality requires separately configured credentials; never commit keys. Before opening a PR, run:

```bash
npm run check
```

**Important:** Some interfaces contain demonstrative records. Do not interpret prototype content as independently verified governmental findings.

---

## Three core instruments

**POWER Plans: What will you do and how?** A proposed common planning standard for candidates and public institutions, addressing authority, causal logic, alternative approaches, costs, implementation, dependencies, and measurable outcomes. [Contribute to the Policy Analysis Protocol](https://github.com/captainlandon/The-POWER-Standard/issues/17).

**Mandate Ledger: What actually happened?** A traceable record of commitments, legislation, budgets, implementation, obstacles and outcomes, distinguished from announcements and promises.

**POWER Retrospective: What can history establish?** Historical decisions and consequences examined against original documents, applicable law, and clearly bounded evidence. [Explore the research-in-progress](https://github.com/captainlandon/The-POWER-Standard/pull/11).

All three share an evidence standard and the developing [American Civic Covenant](https://github.com/captainlandon/The-POWER-Standard/issues/13). The project does not assign a single ideological or political score.

**Evidence is useful only when it is accurate, traceable, and available in time.** New work will consider disclosure delays and system availability ([issue #16](https://github.com/captainlandon/The-POWER-Standard/issues/16)), and distinguish built code from deployment, authentic use, and proven benefit ([issue #18](https://github.com/captainlandon/The-POWER-Standard/issues/18)).

## Why POWER exists

Public accountability is difficult because the relevant information is fragmented across campaigns, legislation, budgets, agencies, public records, government websites, and news coverage. Residents are often left to answer basic questions on their own:

- What problem is being addressed?
- Who actually has authority to act?
- What was proposed or promised?
- What resources were committed?
- What was implemented?
- What outcomes followed?
- What evidence supports those conclusions?
- Where can public participation meaningfully affect the process?

POWER is being built to organize those pieces into a transparent, source-linked public record.

## The core accountability chain

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

The goal is not to tell users what political conclusion to reach. The goal is to make the underlying record easier to inspect, understand, compare, and challenge.

## Core principles

### Authority Before Accountability
Establish what an office, institution, or actor can actually control before assigning responsibility.

### Evidence Before Judgment
Separate sourced facts from interpretation and make evidentiary support visible.

### Influence Before Participation
Before asking people to participate, show what remains open to influence, who ultimately decides, and how public input can affect the process.

### Nonpartisanship Is Not False Balance
Competing claims should not receive equal evidentiary weight when the underlying evidence is unequal.

### Official Does Not Mean Infallible
An official source can establish what an institution reported, enacted, spent, or recorded without being treated as universal or unquestionable truth.

### Unknown Is a Valid Answer
Missing or inconclusive evidence should remain unknown rather than being converted into a score or assumption.

### Comprehension Before Complexity
Civic information should be understandable without requiring prior expertise in law, policy, budgeting, or government procedure.

### Participation Requires Feedback
People should be able to see what happened after they participated and whether their input affected a decision.

### POWER Must Be Auditable Too
The platform’s methodology, classifications, sourcing rules, corrections, and revisions should themselves be inspectable and versioned.

## Planned platform components

POWER is being designed as both a public-facing platform and a civic-accountability methodology. Planned components include:

- **Problem Atlas** — structured records of public problems, their scope, evidence, affected populations, responsible institutions, and status.
- **Power Map** — maps institutions, offices, authority, responsibilities, dependencies, and veto points.
- **POWER Plans** — versioned, source-linked representations of proposed public action, including authority, resources, timelines, assumptions, constraints, and intended outcomes.
- **Plan Comparison** — compares plans without reducing them to partisan rankings or simplistic winner/loser scores.
- **Mandate Ledger** — connects commitments to legislation, budgets, administrative actions, implementation evidence, revisions, blockers, and outcomes.
- **Evidence Layer** — exposes sources, evidentiary strength, limitations, provenance, and what a source does or does not establish.
- **POWER Learn** — plain-language civic education explaining how government processes work and how decisions move through institutions.
- **My Civic Context** — helps users understand which institutions and representatives affect them and what those offices do or do not control.
- **Participation Context** — shows what stage a decision is in, what remains negotiable, who decides, and what kind of influence a participation mechanism actually provides.
- **Participation Ledger** — records opportunities for public input, institutional responses, changes made, explanations given, and final decisions.
- **Civic Action** — identifies lawful, nonpartisan participation mechanisms relevant to a user’s objective and jurisdiction.
- **Civic Wire** — a record-centered stream of meaningful updates to plans, commitments, implementation, and evidence.
- **Flourishing Outcomes** — explores multidimensional public outcomes without collapsing them into a single ideological score.

## What POWER is not

POWER is **not** intended to be:

- a partisan campaign platform;
- an endorsement or election-prediction system;
- a simplistic political scorecard;
- a replacement for journalism, government records, or civic organizations;
- a system that treats the existence of a statement as proof of implementation;
- a system that treats appropriations as expenditures, implementation as outcomes, or outcomes as proof of causation.

POWER is intended to help users distinguish those categories more clearly.

## Civic participation model

POWER treats meaningful participation as a process rather than a button:

```text
Understand the problem
        ↓
Identify who has authority
        ↓
Understand the decision process
        ↓
See what remains open to influence
        ↓
Choose an available participation mechanism
        ↓
Participate
        ↓
Track what happened
        ↓
Inspect the evidence
```

This design is intended to reduce the gap between being told that participation is available and understanding whether, where, and how participation can actually matter.

## Current status

POWER is under active development and validation. The current work includes:

- refining the data model and methodology;
- developing the working prototype;
- improving accessibility and mobile usability;
- incorporating real public records;
- defining sourcing, evidence, correction, and governance rules;
- testing civic-literacy and participation workflows;
- preparing user research and community validation;
- documenting contributor workflows and a public roadmap.

This repository should be treated as a developing project rather than a finished public authority or production data service.

## Prototype data and verification status

The prototype contains a mixture of real public institutions, laws, reports, and policy examples together with demonstration records used to test POWER's data model and interface. **A real institution or source name does not automatically mean that every associated prototype claim has been independently verified.**

For public-release safety, unresolved records are treated conservatively as demonstration data until their exact source, date, jurisdiction, scope, and claim boundaries have been checked. A source is considered evidence only for what it actually establishes.

See:

- [DATA_VERIFICATION_LOG.md](./DATA_VERIFICATION_LOG.md) for record-by-record verification decisions and corrections;
- [PROTOTYPE_DATA_POLICY.md](./PROTOTYPE_DATA_POLICY.md) for publication-status rules;
- [PUBLIC_RELEASE_CHECKLIST.md](./PUBLIC_RELEASE_CHECKLIST.md) for the repository publication gate;
- [SOURCE_DATA_CLEANUP_PLAN.md](./SOURCE_DATA_CLEANUP_PLAN.md) for the path from demonstration data to source-level verified records.

The repository also includes an automated release-readiness check that runs type checking, civic-data release checks, and a production build. Automation supplements manual verification; it does not replace it.

## Technology

The current prototype uses:

- React
- TypeScript
- Vite
- Tailwind CSS
- Express
- Google GenAI tooling

The technology stack may evolve as the project moves from prototype to validated civic infrastructure.

## Design approach

POWER aims to combine the reliability and accessibility expected of public-service software with a distinct civic-institutional identity. Design priorities include:

- accessibility as civic access;
- mobile-first and responsive interfaces;
- plain language;
- progressive disclosure;
- source visibility and provenance;
- clear process visualization;
- nonpartisan visual language;
- usability testing with real people;
- transparent uncertainty and limitations.

Relevant design and research influences include public-service design systems, civic-design research, digital-participation research, and the broader civic-technology ecosystem.

## Contributing

POWER is being developed as public-interest civic infrastructure and welcomes contributors interested in areas such as:

- frontend and full-stack development;
- UX and accessibility;
- civic data and public records;
- public policy and government process research;
- information architecture;
- data modeling and provenance;
- usability testing;
- documentation;
- civic participation research;
- governance and methodology design.

See [CONTRIBUTING.md](./CONTRIBUTING.md) for contribution standards, workflow, evidence requirements, accessibility expectations, and suggested first contributions.

See [ROADMAP.md](./ROADMAP.md) for current priorities, validation phases, contributor-readiness work, and the path from prototype to validated civic infrastructure.

Security-sensitive findings should follow [SECURITY.md](./SECURITY.md) rather than being posted publicly before remediation.

## License

This repository is licensed under the terms in [LICENSE](./LICENSE).

## Project direction

The immediate goal is to move POWER from a working concept and prototype into a validated, maintainable civic platform by combining real public data, transparent methodology, user research, open-source collaboration, and community partnerships.

The long-term objective is straightforward:

**Make it easier for people to understand public problems, identify who has power to act, follow what government says it will do, inspect what actually happened, and participate with clearer knowledge of where their influence can matter.**
