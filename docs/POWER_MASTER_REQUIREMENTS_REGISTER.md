# POWER Master Requirements Register v0.1

Compiled October 26, 2026. Source families: September POWER Master specification, Business Plan v2.0, October briefing packet, Institutional Structure and Flourishing Framework, October Retrospective discussions, GitHub README and ROADMAP.

Status is conservative: **proposed** unless evidence establishes a specific implementation. A code draft is not a release.

| ID | Recommendation | Priority | Status | Existing trace | Acceptance |
|---|---|---|---|---|---|
| P01 | Preserve problem-to-evidence accountability chain | P0 | partial | README | Reproducible end-to-end civic record |
| P02 | Canonical POWER Plan Builder | P0 | prototype | existing app | Full jurisdiction-aware plan |
| P03 | Candidate-submitted and POWER-compiled records | P0 | partial | Master spec | Clearly differentiated publication |
| P04 | Submission and disputed-status vocabulary | P0 | proposed | Master spec | Reviewable transitions |
| P05 | Plan authority, funding, dependencies and milestones | P0 | partial | existing app | Source-backed plan |
| P06 | Mandate Ledger | P0 | prototype | existing app | Source-backed implementation trail |
| P07 | Event-driven milestone accountability | P0 | proposed | ROADMAP | Milestone and change audit |
| P08 | Separate promise/appropriation/spending/action/outcome | P0 | partial | Issue #9 | Verified distinctions |
| P09 | Formal and practical authority Power Map | P0 | partial | Issue #7 | Validated jurisdiction map |
| P10 | Problem Atlas with real local source records | P0 | partial | Issue #4 | At least ten verified cases |
| P11 | DC-first, nationally extensible architecture | P0 | strategy | ROADMAP | Tested local workflow |
| E01 | Claim-level provenance | P0 | partial | Issue #6 | Each claim linked to bounded source |
| E02 | Primary, secondary and derived evidence types | P0 | typed | src/types/power.ts | Tested display and classification |
| E03 | Evidentiary and causal confidence | P0 | partial | Issue #2 | Published review rubric |
| E04 | Preserve Unknown and disputed states | P0 | partial | src/types/power.ts | UI handles uncertainty |
| E05 | Explain what source does and does not establish | P0 | partial | existing Evidence Drawer | Claim-level citations |
| E06 | Corrections, appeals and version history | P0 | prototype | existing app | Auditable review workflow |
| E07 | Independent human review | P0 | proposed | Retrospective policy | Recorded reviewer approval |
| E08 | Demo/verified separation | P0 | guard present | Issue #9 | Release tests |
| E09 | Automated release and provenance tests | P0 | checks present | CI | Passing checks |
| E10 | Version methodology changes | P0 | partial | ROADMAP | Public revision log |
| E11 | Preserve conflicting community evidence | P1 | proposed | Master spec | Non-destructive submissions |
| E12 | Human-controlled AI research | P0 | partial | PR #11 | Attribution and approval |
| H01 | Integrate Retrospective within POWER | P0 | draft branch | PR #11 | Review and merge |
| H02 | Historical policies/events/claims/sources schema | P0 | typed | PR #11 | Schema tests |
| H03 | American Civic Covenant | P0 | proposed | October 26 discussion | Charter and documented schema |
| H04 | Distinguish ideals, constitutional law and later commitments | P0 | proposed | October 26 discussion | Source taxonomy |
| H05 | Historic legal requirements vs later interpretations | P0 | proposed | October 26 discussion | Dual-lens case example |
| H06 | Policy genealogy | P1 | proposed | Retrospective PRD | Trace amendments and successors |
| H07 | Historical timeline, source viewer and geography | P1 | partial branch | PR #11 | Integrated browsable case |
| H08 | Source-verified 1934 housing pilot | P0 | research draft | PR #11 | Reviewed source-to-claim audit |
| H09 | Separate instructions, implementation, association, causality | P0 | methodology | research packet 03 | Claim-specific distinctions |
| H10 | Historical-to-contemporary policy linkage | P0 | proposed | Retrospective PRD | Live cross-record link |
| H11 | Expand only after pilot validation | P0 | strategy | Retrospective PRD | Pilot acceptance report |
| C01 | POWER Learn | P1 | prototype | existing app | Civic literacy usability test |
| C02 | My Civic Context | P1 | partial | ROADMAP | Jurisdiction-aware user view |
| C03 | Participation Context | P0 | proposed | Issue #3 | Show decision influence points |
| C04 | Participation Ledger | P1 | proposed | Briefing packet | Input-to-response record |
| C05 | Community evidence | P1 | proposed | Master spec | Labeled submissions |
| C06 | Nonpartisan civic action | P1 | partial | ROADMAP | Verified procedural paths |
| C07 | Civic comprehension tests | P0 | proposed | ROADMAP | Recorded study |
| C08 | Three-problem DC pilot | P0 | proposed | Issue #7 | Public case walkthrough |
| C09 | Accessibility and progressive disclosure | P0 | partial | Issue #5 | WCAG/manual audit |
| X01 | Multidimensional flourishing outcomes | P1 | prototype | Institutional Framework | Tested indicators |
| X02 | Eight outcome domains | P1 | framework | Institutional Framework | Defined measures |
| X03 | Distribution and uncertainty | P1 | proposed | Institutional Framework | Disaggregated data |
| X04 | No aggregate political verdict scores | P0 | principle | README | UI review |
| X05 | Event-centered Civic Wire | P1 | prototype | existing app | Traceable updates |
| X06 | Party history civic education | P2 | partial | Master spec | Neutral record view |
| X07 | Ethics and financial influence signals | P2 | prototype | existing app | Evidence/due process |
| X08 | Experimental forecast signals kept separate | P3 | research | Master spec | Clear label and isolation |
| X09 | Research APIs and machine-readable standard | P2 | partial | ROADMAP | Stable documented endpoint |
| X10 | Panoptica/Prism interoperability | P2 | proposed | ecosystem plans | Explicit interfaces |
| G01 | Tao stewardship model | P0 | proposed | Institutional Framework | Legal/governance decision |
| G02 | POWER operations vs Innovatio implementation | P0 | proposed | Institutional Framework | Organizational agreements |
| G03 | Editorial and funding independence firewalls | P0 | proposed | Institutional Framework | Published policy |
| G04 | Conflict, inclusion, correction and appeals rules | P0 | partial | institutional briefs | Adopted policies |
| G05 | Distributed oversight | P1 | proposed | Master spec | Charter and representatives |
| G06 | Equal treatment for campaign tools | P0 | proposed | Institutional Framework | Legal review and criteria |
| G07 | Free public-interest core | P0 | principle | Business Plan | Published access policy |
| G08 | Diversified funding | P1 | modeled | Business Plan | Feasibility and funding plan |
| G09 | Counsel review of governance, elections and privacy | P0 | pending | Institutional Framework | Written counsel advice |
| D01 | Focused DC MVP | P0 | strategy | ROADMAP | One deployable case |
| D02 | 10–20 verified records | P0 | incomplete | Issue #4 | Published reproducible records |
| D03 | CI validation | P0 | initial checks | GitHub Actions | Green tests |
| D04 | Browser/mobile/accessibility testing | P0 | pending | Issue #5 | Test report |
| D05 | AI endpoint abuse controls | P0 | pending | release checklist | Security review |
| D06 | Multidisciplinary contributor recruitment | P1 | proposed | Business Plan | Defined work packages |
| D07 | Open contributor workflow | P0 | partial | Issue #1 | Contributor onboarding |
| D08 | Community validation | P1 | proposed | ROADMAP | Interviews and feedback |
| D09 | Scoped partnerships | P1 | exploration | October briefs | Verified commitments |
| D10 | Complete civic accountability demonstration | P0 | in progress | PR #11 | Tested walkthrough |

## Consolidation decisions

1. Retrospective is a POWER module, not a second platform.
2. The Covenant is an interpretive reference with exact texts, dates, legal status, and documented disagreements, not an automatic political verdict.
3. The Mandate Ledger is a public record; an institutional Workbench is an optional workflow.
4. No causation should be inferred from a descriptive geographic comparison.
5. Panoptica and Prism remain separate systems.
6. Open-source publication, evidentiary approval, and production deployment have distinct gates.

## Immediate execution

- Resolve Issues #2, #4, #6 and #9 for verified evidence, plus #3 and #5 for participation and accessibility.
- Complete and review Retrospective draft PR #11; do not treat it as merged or deployed.
- Specify H03–H05 in a distinct Covenant PRD and data contract.
- Deliver one fully sourced, publicly inspectable DC case and one reviewed historical case.
- Require every future PR to list impacted requirement IDs, evidence of acceptance and remaining caveats.

## Change control

Only change status when there is a supporting commit, reviewer signoff, test, or governing decision. Keep recommendation IDs stable; mark superseded or merged recommendations explicitly rather than deleting their history.

## New focused issue ownership
- [#13 American Civic Covenant](https://github.com/captainlandon/The-POWER-Standard/issues/13): H03–H05.
- [#14 End-to-end civic accountability demonstration](https://github.com/captainlandon/The-POWER-Standard/issues/14): P01/P05–P10 and D01/D02/D10; coordinates rather than duplicates existing research and data tickets.

**Inventory count:** 72 recommendations, grouped under seven families.

## October 28 briefing audit addendum

These are **proposals**, not implemented features. They derive from the October 28 Actualization Daily Brief, October 26 Innovatio Realization Review, and follow-up review of POWER methodology.

| ID | Recommendation | Priority | Status | Trace | Acceptance |
|---|---|---|---|---|---|
| N01 | Information timeliness, including whether disclosure occurs before relevant civic decisions | P0 | proposed | [#16](https://github.com/captainlandon/The-POWER-Standard/issues/16) | Timely, late, unavailable and unknown examples with sourced deadlines |
| N02 | Disclosure-system reliability, outages, restoration and fallback channels | P1 | proposed | [#16](https://github.com/captainlandon/The-POWER-Standard/issues/16) | Time-stamped outage record with bounded facts |
| N03 | Eviction-resolution process record | P1 | proposed | P10 / C03 | Define filing, mediation, counsel, intervention and durable outcomes |
| N04 | Administrative delay and burden indicators | P1 | proposed | P10 / X03 | Dated duration and burden data with causal caveats |
| N05 | Community-created substitute service or access | P1 | proposed | C05 / C08 | Distinguish institution and community actions |
| N06 | Costs shifted to residents and volunteers | P1 | proposed | X03 | Trace documented time, travel and expenses |
| N07 | Policy Analysis Protocol in POWER Plans | P0 | proposed | [#17](https://github.com/captainlandon/The-POWER-Standard/issues/17) | Complete multi-step plan with causal model, alternatives and feasibility |
| N08 | Realization evidence ladder: code, CI, deployment, use, benefit | P0 | proposed | [#18](https://github.com/captainlandon/The-POWER-Standard/issues/18) | Independent stage-gate evidence and live demonstration |
| N09 | Public consultation package and feedback history | P1 | proposed | G04 / C04 | Accessible comments and documented disposition |
| N10 | Normative purpose review without a universal ideological verdict | P1 | proposed | [#13](https://github.com/captainlandon/The-POWER-Standard/issues/13) | Source-cited, period-correct legal and interpretive context |

### Prioritization rule
N01, N07 and N08 are foundational upgrades; N02–N06, N09, N10 refine existing modules rather than justify new stand-alone products. Do not turn a news brief into a verified POWER case without rechecking primary records.

**Register totals:** 72 original items + 10 proposed October 28 additions = 82 tracked recommendations (some additions refine existing requirements, not distinct modules).
