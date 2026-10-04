# The POWER Standard

**The POWER Standard is a nonpartisan civic-accountability platform that connects public problems, institutional authority, public plans, implementation, outcomes, and evidence so people can see who can act, what was promised, what happened, and what remains unresolved.**

> “Knowledge will forever govern ignorance; and a people who mean to be their own governors must arm themselves with the power which knowledge gives.” — James Madison

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
