import type { EvidenceItem } from '../../types/power';

export type PowerCaseStage =
  | 'Authority'
  | 'Plan'
  | 'Resource'
  | 'Implementation'
  | 'Outcome'
  | 'Oversight';

export interface PowerCaseSource extends EvidenceItem {
  stage: PowerCaseStage;
  retrievedDate: string;
  claimAsPublished: string;
}

export interface PowerCaseRecord {
  id: string;
  title: string;
  geography: string;
  participationStatus: 'POWER-Compiled';
  publicQuestion: string;
  commitment: string;
  sourceIds: string[];
  reportedStatus: string;
  powerAssessment: string;
  unknowns: string[];
  correctionPath: {
    repositoryIssueUrl: string;
    requiredFields: string[];
    reviewRule: string;
    historyRule: string;
  };
  lastReviewed: string;
}

const VERIFIED = {
  sourceType: 'Primary',
  dataStatus: 'Verified Real-World Record',
  isDemoData: false,
  epistemicStatus: 'Verified',
} as const;

/**
 * Claim-level source set for GitHub Issue #14.
 *
 * "Verified" means that the linked official source was located and the bounded
 * claim below was reproduced from it. It does not mean that POWER independently
 * audited the underlying government data or established causation.
 */
export const DC_HOUSING_CASE_SOURCES: PowerCaseSource[] = [
  {
    ...VERIFIED,
    id: 'case-dc-housing-home-rule-act',
    stage: 'Authority',
    title: 'District of Columbia Self-Government and Governmental Reorganization Act',
    claimType: 'Authority',
    evidentiaryStrength: 'Direct',
    publisher: 'United States Government Publishing Office',
    publicationDate: '1973-12-24',
    retrievedDate: '2026-11-03',
    urlPlaceholder: 'https://www.govinfo.gov/content/pkg/STATUTE-87/pdf/STATUTE-87-Pg774.pdf',
    excerpt: 'Primary statutory source for the District government structure and the Mayor\'s local executive authority.',
    claimAsPublished: 'The Home Rule Act establishes the District government framework within which the Mayor and Council exercise local authority, subject to federal constraints.',
    supportsClaim: 'The D.C. housing commitment operates through local executive, legislative, budgetary, and administrative authority rather than mayoral power alone.',
    establishes: ['The statutory framework cited by Mayor\'s Order 2019-036.', 'A basis for separating mayoral authority from Council and federal authority.'],
    doesNotEstablish: ['That the Mayor can appropriate funds without Council action.', 'That every housing outcome is within District control.'],
    methodologyNote: 'Authority is bounded to the statutory framework. Application to a particular action may require legal review.',
  },
  {
    ...VERIFIED,
    id: 'case-dc-housing-mayors-order-2019-036',
    stage: 'Authority',
    title: 'Mayor\'s Order 2019-036: Housing Initiative',
    claimType: 'Authority',
    evidentiaryStrength: 'Direct',
    publisher: 'Office of the Mayor, District of Columbia',
    publicationDate: '2019-05-10',
    retrievedDate: '2026-11-03',
    urlPlaceholder: 'https://planning.dc.gov/sites/default/files/dc/sites/op/page_content/attachments/Mayor%27s%20Order%20on%20Housing.pdf',
    excerpt: 'The order states that the District must create 36,000 new residential units by 2025, including at least 12,000 affordable units, and preserve an additional 6,000 affordable units.',
    claimAsPublished: 'The Mayor formally directed District agencies to pursue a 36,000-unit production goal, including at least 12,000 affordable units, by 2025.',
    supportsClaim: 'The commitment was documented in a formal executive order, not only in campaign messaging.',
    establishes: ['The goal, date, and affordability component.', 'The executive branch\'s stated policy direction.'],
    doesNotEstablish: ['A legislative appropriation.', 'Completion of the goals.', 'The causal effect of the goal on housing costs.'],
    methodologyNote: 'The source verifies the order and its targets. It does not verify implementation or outcomes.',
  },
  {
    ...VERIFIED,
    id: 'case-dc-housing-framework-equity-growth',
    stage: 'Plan',
    title: 'Housing Framework for Equity and Growth',
    claimType: 'Statement',
    evidentiaryStrength: 'Direct',
    publisher: 'D.C. Office of Planning',
    publicationDate: '2019-10',
    retrievedDate: '2026-11-03',
    urlPlaceholder: 'https://planning.dc.gov/page/housing-framework-equity-and-growth',
    excerpt: 'The framework describes the 36,000-unit and 12,000-affordable-unit goals and distributes goals across planning areas.',
    claimAsPublished: 'The District translated the citywide commitment into a planning framework with geographically distributed housing goals.',
    supportsClaim: 'The plan included an equity-oriented spatial component rather than only a citywide total.',
    establishes: ['A public planning framework.', 'A basis for comparing progress by planning area.'],
    doesNotEstablish: ['That each planning area met its goal.', 'That geographic targets alone produced equitable resident outcomes.'],
    methodologyNote: 'Planning goals are not implementation records and should not be displayed as completed units.',
  },
  {
    ...VERIFIED,
    id: 'case-dc-housing-equity-report',
    stage: 'Plan',
    title: 'Housing Equity Report',
    claimType: 'Statement',
    evidentiaryStrength: 'Direct',
    publisher: 'D.C. Office of Planning',
    publicationDate: '2019-10',
    retrievedDate: '2026-11-03',
    urlPlaceholder: 'https://planning.dc.gov/sites/default/files/dc/sites/housingdc/publication/attachments/Housing%20Equity%20Report.pdf',
    excerpt: 'The report analyzes the distribution of affordable housing and proposes planning-area targets tied to the 2025 goals.',
    claimAsPublished: 'The Office of Planning published a planning-area analysis and targets for distributing affordable housing production more equitably.',
    supportsClaim: 'The public plan contained measurable subgoals below the citywide level.',
    establishes: ['Published planning-area targets.', 'The District\'s stated equity rationale.'],
    doesNotEstablish: ['Actual production in each area.', 'Household-level flourishing or displacement outcomes.'],
    methodologyNote: 'This source establishes the plan design. Outcome evidence must come from later records.',
  },
  {
    ...VERIFIED,
    id: 'case-dc-housing-code-annual-report',
    stage: 'Authority',
    title: 'D.C. Code § 42-2803.01: Housing Production Trust Fund annual reporting',
    claimType: 'Authority',
    evidentiaryStrength: 'Direct',
    publisher: 'Council of the District of Columbia, D.C. Law Library',
    publicationDate: 'current-code',
    retrievedDate: '2026-11-03',
    urlPlaceholder: 'https://code.dccouncil.gov/us/dc/council/code/sections/42-2803.01',
    excerpt: 'The provision requires the Mayor to transmit an annual Housing Production Trust Fund report to the Council and specifies information the report must contain.',
    claimAsPublished: 'District law requires recurring reporting on Housing Production Trust Fund expenditures, obligations, assisted households, and projects.',
    supportsClaim: 'The accountability chain includes a legally required reporting mechanism.',
    establishes: ['A reporting duty.', 'Required categories of fund information.'],
    doesNotEstablish: ['That every required report is complete or timely.', 'That reported projects achieved intended outcomes.'],
    methodologyNote: 'The current code can include temporary or emergency amendments. Review the permanent version when legal timing matters.',
  },
  {
    ...VERIFIED,
    id: 'case-dc-housing-fy2022-hptf-report',
    stage: 'Resource',
    title: 'FY 2022 Housing Production Trust Fund Annual Report',
    claimType: 'Expenditure',
    evidentiaryStrength: 'Direct',
    publisher: 'D.C. Department of Housing and Community Development',
    publicationDate: '2023-03-31',
    retrievedDate: '2026-11-03',
    urlPlaceholder: 'https://dhcd.dc.gov/publication/fy-2022-housing-production-trust-fund-annual-report',
    excerpt: 'Official annual-report landing page published pursuant to the Housing Production Trust Fund reporting requirement.',
    claimAsPublished: 'DHCD published an FY 2022 annual report for the Housing Production Trust Fund.',
    supportsClaim: 'A source exists for tracing fiscal-year obligations and expenditures beyond budget announcements.',
    establishes: ['The official FY 2022 report and its publication date.'],
    doesNotEstablish: ['That an announced budget amount was fully spent.', 'That each funded project was completed.'],
    methodologyNote: 'Project-level and category totals should be extracted from the attached report before presentation as structured amounts.',
  },
  {
    ...VERIFIED,
    id: 'case-dc-housing-fy2023-hptf-report',
    stage: 'Resource',
    title: 'FY 2023 Housing Production Trust Fund Annual Report',
    claimType: 'Expenditure',
    evidentiaryStrength: 'Direct',
    publisher: 'D.C. Department of Housing and Community Development',
    publicationDate: '2024-03-01',
    retrievedDate: '2026-11-03',
    urlPlaceholder: 'https://dhcd.dc.gov/sites/default/files/dc/sites/dhcd/publication/attachments/FY%202023%20Housing%20Production%20Trust%20Fund%20%28HPTF%29%20Annual%20Report%20%28FINAL%29.pdf',
    excerpt: 'Official annual report covering Housing Production Trust Fund activity in fiscal year 2023.',
    claimAsPublished: 'DHCD published an FY 2023 report that can be used to trace fund activity during the commitment period.',
    supportsClaim: 'The resource trail can be examined across multiple fiscal years rather than through a single press release.',
    establishes: ['The existence of an official FY 2023 fund report.'],
    doesNotEstablish: ['A one-to-one causal link between every fund dollar and the citywide production total.'],
    methodologyNote: 'Structured financial values require table-level extraction and reconciliation before release.',
  },
  {
    ...VERIFIED,
    id: 'case-dc-housing-400m-announcement',
    stage: 'Resource',
    title: '$400 million Housing Production Trust Fund investment announcement',
    claimType: 'Appropriation',
    evidentiaryStrength: 'Direct',
    publisher: 'Government of the District of Columbia',
    publicationDate: '2021',
    retrievedDate: '2026-11-03',
    urlPlaceholder: 'https://beta.dc.gov/news/mayor-bowser-announces-400-million-investment-housing-production-trust-fund',
    excerpt: 'The announcement described $150 million in an FY 2021 supplemental budget and a proposed $250 million FY 2022 investment.',
    claimAsPublished: 'The Mayor announced proposed and supplemental budget actions totaling $400 million for the Housing Production Trust Fund.',
    supportsClaim: 'The administration publicly attached a large resource proposal to the housing plan.',
    establishes: ['The administration\'s announced budget proposal and supplemental amount.'],
    doesNotEstablish: ['Final Council appropriation.', 'Cash expenditure.', 'Completed housing units.'],
    methodologyNote: 'POWER must preserve the words proposed and supplemental. An announcement is not an expenditure record.',
  },
  {
    ...VERIFIED,
    id: 'case-dc-housing-66m-project-selection',
    stage: 'Implementation',
    title: '$66 million HPTF project selection announcement',
    claimType: 'Implementation',
    evidentiaryStrength: 'Direct',
    publisher: 'Government of the District of Columbia',
    publicationDate: '2021-03-26',
    retrievedDate: '2026-11-03',
    urlPlaceholder: 'https://beta.dc.gov/news/mayor-bowser-announces-66-million-investment-housing-production-trust-fund-protect-and-build',
    excerpt: 'The announcement identified nine selected projects expected to produce or preserve more than 1,100 affordable homes, including about 660 new homes.',
    claimAsPublished: 'DHCD selected nine projects for further underwriting, primarily supported by a reported $66 million HPTF investment.',
    supportsClaim: 'The commitment moved into a named project pipeline with identifiable locations and projected unit counts.',
    establishes: ['Project selection.', 'The announced pipeline and projected units.'],
    doesNotEstablish: ['Loan closing.', 'Construction completion.', 'Occupancy.', 'Final cost or unit count.'],
    methodologyNote: 'Selection is an implementation milestone, not a completed outcome.',
  },
  {
    ...VERIFIED,
    id: 'case-dc-housing-dashboard-methodology',
    stage: 'Outcome',
    title: '36,000 by 2025 dashboard and methodology notice',
    claimType: 'Outcome',
    evidentiaryStrength: 'Direct',
    publisher: 'D.C. Deputy Mayor for Planning and Economic Development',
    publicationDate: 'updated-monthly',
    retrievedDate: '2026-11-03',
    urlPlaceholder: 'https://open.dc.gov/36000by2025/index.html',
    excerpt: 'The dashboard tracks total and affordable units and notes that its affordable-unit methodology changed in September 2022.',
    claimAsPublished: 'DMPED maintained a monthly progress dashboard and broadened the affordable-unit counting methodology in September 2022.',
    supportsClaim: 'The reported outcome series has an official public source and a documented methodological change.',
    establishes: ['The official dashboard purpose.', 'The existence and general nature of the 2022 methodology change.'],
    doesNotEstablish: ['Direct comparability of all pre-change and post-change counts.', 'Net housing supply after losses.', 'Causal impact on rents.'],
    methodologyNote: 'Any time series spanning September 2022 must disclose the change and evaluate comparability.',
  },
  {
    ...VERIFIED,
    id: 'case-dc-housing-2024-milestone',
    stage: 'Outcome',
    title: 'July 2024 housing milestone announcement',
    claimType: 'Outcome',
    evidentiaryStrength: 'Direct',
    publisher: 'D.C. Office of Planning',
    publicationDate: '2024-07-29',
    retrievedDate: '2026-11-03',
    urlPlaceholder: 'https://planning.dc.gov/release/mayor-bowser-and-community-members-mark-significant-milestone-36000-new-homes-2025-1',
    excerpt: 'The District reported 36,216 total units and 9,845 affordable units as of July 29, 2024.',
    claimAsPublished: 'The administration reported that the total-unit target had been exceeded while the affordable-unit target remained incomplete as of July 29, 2024.',
    supportsClaim: 'The two principal targets had different reported statuses at that date.',
    establishes: ['The administration\'s reported totals and date.', 'That 9,845 was described as 82 percent of the affordable goal.'],
    doesNotEstablish: ['Independent verification of the unit database.', 'Final affordable-unit performance at the end of 2025.', 'Resident affordability outcomes.'],
    methodologyNote: 'Display as an agency-reported snapshot, not an independently audited final result.',
  },
  {
    ...VERIFIED,
    id: 'case-dc-housing-fy2025-return-on-investment',
    stage: 'Outcome',
    title: 'FY 2025 Return on Investment Report',
    claimType: 'Outcome',
    evidentiaryStrength: 'Direct',
    publisher: 'D.C. Deputy Mayor for Planning and Economic Development',
    publicationDate: '2026-04-24',
    retrievedDate: '2026-11-03',
    urlPlaceholder: 'https://dmped.dc.gov/sites/default/files/dc/sites/dmped/publication/attachments/Return%20on%20Investment%20Report%20-%20Fiscal%20Year%202025_04242026.pdf',
    excerpt: 'The report states that the District achieved the goal of creating 12,000 new affordable homes in February 2026.',
    claimAsPublished: 'The administration reported that the 12,000 affordable-home goal was achieved in February 2026.',
    supportsClaim: 'The affordable target was eventually reported as achieved, after the stated 2025 target date.',
    establishes: ['The administration\'s reported achievement month.', 'A later official status than the July 2024 snapshot.'],
    doesNotEstablish: ['The exact affordable-unit count on December 31, 2025.', 'Independent verification of the underlying project records.', 'That the target was achieved by the stated 2025 date.'],
    methodologyNote: 'POWER treats February 2026 as after the stated 2025 date. The report is an executive-branch performance publication, not an independent audit.',
  },
  {
    ...VERIFIED,
    id: 'case-dc-housing-odca-management-audit',
    stage: 'Oversight',
    title: 'DHCD Should Improve Management of the Housing Production Trust Fund',
    claimType: 'Other',
    evidentiaryStrength: 'Strong',
    publisher: 'Office of the District of Columbia Auditor',
    publicationDate: '2017-03-17',
    retrievedDate: '2026-11-03',
    urlPlaceholder: 'https://dcauditor.org/report/dhcd-should-improve-management-of-the-housing-production-trust-fund-to-better-meet-affordable-housing-goals/',
    excerpt: 'Independent District oversight report focused on DHCD management of the Housing Production Trust Fund.',
    claimAsPublished: 'The D.C. Auditor published management findings and recommendations concerning HPTF administration before the 2019 commitment.',
    supportsClaim: 'The case must include oversight history and not rely exclusively on executive-branch reporting.',
    establishes: ['The existence, publisher, date, and scope of the independent audit.'],
    doesNotEstablish: ['That every earlier finding persisted throughout 2019 to 2025.', 'Misconduct by any individual.'],
    methodologyNote: 'Historical oversight is context. Current-condition claims require follow-up evidence.',
  },
  {
    ...VERIFIED,
    id: 'case-dc-housing-odca-revenue-expenditure-review',
    stage: 'Oversight',
    title: 'HPTF revenues, expenditures, and five-city comparison',
    claimType: 'Expenditure',
    evidentiaryStrength: 'Strong',
    publisher: 'Office of the District of Columbia Auditor',
    publicationDate: '2016-06-30',
    retrievedDate: '2026-11-03',
    urlPlaceholder: 'https://dcauditor.org/report/the-district-of-columbia-housing-production-trust-fund-revenues-and-expenditures-and-5-city-comparison/',
    excerpt: 'Independent District oversight report concerning HPTF revenues and expenditures, with a comparison to five cities.',
    claimAsPublished: 'The D.C. Auditor published an independent historical analysis of HPTF revenue and expenditure practices.',
    supportsClaim: 'The resource system has an external oversight record that predates the commitment.',
    establishes: ['The existence, date, and stated scope of the report.'],
    doesNotEstablish: ['Current fund performance.', 'That another city\'s structure should be adopted without analysis.'],
    methodologyNote: 'Use as historical context and a guide for questions, not as a current performance score.',
  },
];

export const DC_HOUSING_36000_BY_2025_CASE: PowerCaseRecord = {
  id: 'dc-housing-36000-by-2025',
  title: 'D.C. 36,000 by 2025 housing commitment',
  geography: 'District of Columbia',
  participationStatus: 'POWER-Compiled',
  publicQuestion: 'What was promised, who could act, what resources moved, what happened, and what remains unproven?',
  commitment: 'Create 36,000 new residential units by 2025, including at least 12,000 affordable units, and preserve an additional 6,000 affordable units.',
  sourceIds: DC_HOUSING_CASE_SOURCES.map((source) => source.id),
  reportedStatus: 'The District reported 36,216 total units as of July 29, 2024 and later reported achieving 12,000 new affordable homes in February 2026. The affordable target was therefore reported as eventually achieved, but after the stated 2025 date. POWER has not yet reproduced the exact count on December 31, 2025.',
  powerAssessment: 'The available official record supports a documented executive commitment, a geographic planning framework, recurring fund reporting, named implementation actions, an agency-reported total-unit milestone, and eventual agency-reported achievement of the affordable-unit threshold. It does not establish that the affordable target was met by the stated date, net unit growth, household affordability effects, or causation.',
  unknowns: [
    'What exact, reproducible count applied to the 12,000 affordable-unit target on December 31, 2025?',
    'How many selected projects closed financing, entered construction, completed construction, and reached occupancy?',
    'How do announced, authorized, appropriated, obligated, disbursed, and expended amounts reconcile by fiscal year and project?',
    'How many units were net additions after demolitions, conversions, expirations, and other losses?',
    'How long will affordability restrictions last, and at which income bands?',
    'Did the geographic distribution of completed units match the planning-area equity targets?',
    'What changed in household rent burden, displacement risk, homelessness, and access to opportunity?',
    'How much of any observed housing or rent change can reasonably be attributed to District action rather than wider market conditions?',
  ],
  correctionPath: {
    repositoryIssueUrl: 'https://github.com/captainlandon/The-POWER-Standard/issues/14',
    requiredFields: ['evidence ID', 'contested statement', 'replacement or counter-source', 'reason', 'relevant date', 'submitter contact if follow-up is requested'],
    reviewRule: 'A correction must be reviewed against the cited source and the narrow claim the source is used to support. Disagreement alone does not remove a record, and an official source is not presumed infallible.',
    historyRule: 'Accepted corrections replace the public statement while preserving a dated change note and the prior version in repository history.',
  },
  lastReviewed: '2026-11-03',
};

