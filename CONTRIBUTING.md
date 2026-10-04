# Contributing to The POWER Standard

Thank you for your interest in contributing to **The POWER Standard**.

POWER is being developed as open, public-interest civic infrastructure for making public problems, authority, plans, implementation, outcomes, evidence, and participation pathways easier to understand and audit.

Because this project deals with public institutions, political claims, evidence, and civic participation, contributions must meet a higher standard than ordinary product work: accuracy, traceability, accessibility, nonpartisanship, and epistemic humility are core requirements.

## Ways to contribute

Contributors are welcome across technical and non-technical areas, including:

- frontend and full-stack development;
- UX, information architecture, and accessibility;
- civic-data modeling and public-record integration;
- public policy and government-process research;
- source verification and evidence provenance;
- usability testing and user research;
- documentation and plain-language writing;
- data visualization;
- civic-participation research;
- methodology, governance, and correction-process design;
- testing, bug reports, and quality assurance.

You do not need to be a software engineer to make a useful contribution.

## Before contributing

Please familiarize yourself with the project principles in the [README](./README.md), especially:

- **Authority Before Accountability**
- **Evidence Before Judgment**
- **Influence Before Participation**
- **Nonpartisanship Is Not False Balance**
- **Official Does Not Mean Infallible**
- **Unknown Is a Valid Answer**
- **Comprehension Before Complexity**
- **Participation Requires Feedback**
- **POWER Must Be Auditable Too**

A contribution should strengthen these principles rather than bypass them.

## Contribution workflow

### 1. Start with the problem

Before writing code or creating a large design change, identify the problem being solved.

A good issue or proposal should explain:

- what is not working or missing;
- who is affected;
- why it matters to POWER's civic mission;
- what evidence or user need supports the change;
- what a successful outcome would look like.

For substantial features, avoid beginning with implementation alone. We want to validate the problem and expected civic value first.

### 2. Keep changes focused

Prefer small, reviewable contributions over large bundles of unrelated changes.

A pull request should ideally address one problem or coherent feature at a time.

### 3. Explain your reasoning

For changes involving public policy, civic data, evidence rules, classification, participation, or government process, include enough explanation for another contributor to understand how you reached the conclusion.

Where appropriate, cite primary or authoritative sources.

### 4. Test the change

Before submitting a pull request:

```bash
npm install
npm run lint
npm run build
```

If your change affects an interaction or user flow, test it at both desktop and mobile widths.

If your change affects civic content or evidence, verify the source and check that the interface does not imply more than the evidence establishes.

### 5. Submit a clear pull request

A useful pull request description should include:

- **Problem:** What problem does this address?
- **Change:** What did you change?
- **Evidence / rationale:** Why is this the appropriate change?
- **Testing:** How did you test it?
- **Limitations:** What remains unresolved?
- **Screenshots:** Include them when visual changes are involved.

## Evidence and civic-data standards

POWER should never turn uncertainty into false precision.

When adding or modifying civic records, public claims, institutional descriptions, or evidence logic:

1. Prefer source-linked claims.
2. Distinguish facts from interpretation.
3. Distinguish statements from implementation.
4. Distinguish appropriations from expenditures.
5. Distinguish implementation from outcomes.
6. Do not infer causation solely from an observed outcome.
7. Do not treat missing evidence as evidence of failure.
8. State uncertainty explicitly when the record is incomplete.
9. Treat an official source as evidence of what that source establishes, not as unquestionable truth.
10. Preserve revision history where changes materially affect interpretation.

When relevant, record what a source **does establish** and **does not establish**.

## Political and nonpartisan standard

POWER is not a campaign, endorsement, persuasion, or election-prediction platform.

Contributions must not be designed to favor or disadvantage a political party, candidate, ideology, or constituency.

Nonpartisanship does **not** require false balance. If competing factual claims have unequal evidence, POWER may represent that difference transparently. The system should expose the evidentiary basis rather than convert the difference into partisan advocacy.

## Accessibility

Accessibility is civic access.

Contributions affecting the interface should aim to support:

- keyboard navigation;
- visible focus states;
- semantic HTML;
- adequate contrast;
- screen-reader compatibility;
- responsive/mobile use;
- understandable error states;
- plain language;
- progressive disclosure rather than unnecessary complexity.

Where feasible, follow established public-service and WCAG accessibility patterns.

## Design principles

The interface should feel like trustworthy public-interest infrastructure rather than a campaign site, social network, gamified political product, or generic SaaS dashboard.

Prefer:

- clear hierarchy;
- restrained civic-institutional visual language;
- readable typography;
- visible sources and provenance;
- process clarity;
- meaningful status labels;
- explicit uncertainty;
- progressive disclosure;
- usability over decoration.

Avoid using partisan red/blue visual coding to imply political judgment.

## AI-assisted contributions

AI tools may be used to assist with research, coding, documentation, or design, but contributors remain responsible for the accuracy and quality of submitted work.

AI-generated civic claims, legal descriptions, institutional authority statements, statistics, quotations, or source summaries should be independently verified before being incorporated into POWER.

Do not represent generated content as verified public evidence without checking the underlying source.

## Good first contributions

If you are new to the project, useful starting points include:

- improving documentation;
- identifying accessibility issues;
- testing mobile layouts;
- refining plain-language explanations;
- documenting a government process with authoritative sources;
- improving source/provenance display;
- creating test cases for evidence states;
- reviewing civic terminology for ambiguity;
- helping design contributor-friendly issue templates;
- testing POWER with users unfamiliar with government terminology.

## Current priorities

See [ROADMAP.md](./ROADMAP.md) for current project priorities and sequencing.

## Questions and proposals

For larger changes, open an issue or discussion before investing substantial time in implementation. The goal is to make contributor effort useful, reviewable, and aligned with the public-interest mission of the project.

## A final standard

A good contribution to POWER should make it easier for a person to answer at least one of these questions more accurately:

- What is the problem?
- Who has authority?
- What was proposed or promised?
- What resources were committed?
- What actually happened?
- What outcomes followed?
- What evidence supports that conclusion?
- What remains unknown?
- Where can public participation meaningfully matter?

If a contribution improves one or more of those answers without obscuring uncertainty, it is probably moving POWER in the right direction.
