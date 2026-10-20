/** Historically grounded research intake. Records stay draft until human review. */
import type { RetrospectiveDataset } from '../types/retrospective';

const statute = 'https://www.govinfo.gov/content/pkg/STATUTE-48/pdf/STATUTE-48-Pg1246.pdf';
const archives = 'https://www.archives.gov/research/guide-fed-records/groups/031.html';
const hud = 'https://archives.hud.gov/news/2024/pr24-162.cfm';
const DEMO = 'Simulated Demonstration Record' as const;
export const retrospectivePilot: RetrospectiveDataset = {
  cases: [{
    id: 'retro-housing-1934', slug: 'national-housing-act-1934',
    title: 'National Housing Act of 1934: research pilot',
    description: 'An initial investigation into the statute, federal mortgage insurance, implementation, and subsequent housing-finance history. Downstream impacts remain unassessed.',
    jurisdictions: ['United States'], period: { value: '1934', precision: 'year' },
    issueTags: ['housing', 'federal-policy', 'mortgage-insurance'],
    policyIds: ['policy-national-housing-1934'], eventIds: ['event-enactment-1934'],
    claimIds: ['claim-enactment-1934', 'claim-fha-authority', 'claim-mortgage-insurance'],
    revision: 2, reviewState: 'draft', dataStatus: DEMO,
    limitations: [
      'Source transcription and bounded statements are in the researcher intake queue, not independently approved.',
      'Enactment and statutory authorization do not establish implementation volume, homeownership changes, or causal impacts.',
      'Administrative practices, geographic distribution, discriminatory impacts, amendments, and later outcomes require separate documentary and statistical investigation.'
    ]
  }],
  policies: [{
    id: 'policy-national-housing-1934', title: 'National Housing Act of 1934',
    legalCitation: 'Pub. L. 73-479, ch. 847, 48 Stat. 1246',
    enactment: { value: '1934-06-27', precision: 'day' },
    jurisdictions: ['United States'], institutionIds: [],
    caseIds: ['retro-housing-1934'], sourceIds: ['source-statute-1934']
  }],
  events: [{
    id: 'event-enactment-1934', caseId: 'retro-housing-1934',
    title: 'National Housing Act enacted', eventType: 'Legislative enactment',
    summary: 'A researcher-proposed event extracted from the statutory heading, pending human review.',
    date: { value: '1934-06-27', precision: 'day' },
    institutionIds: [], claimIds: ['claim-enactment-1934'], sourceIds: ['source-statute-1934']
  }],
  claims: [{
    id: 'claim-enactment-1934', caseId: 'retro-housing-1934',
    text: 'The National Housing Act was enacted June 27, 1934 as Public Law 73-479.',
    claimType: 'Statement', epistemicStatus: 'Supported', evidentiaryStrength: 'Direct',
    sourceLinks: [{
      sourceId: 'source-statute-1934', relation: 'supports',
      locator: '48 Stat. 1246, heading and opening paragraph',
      establishes: 'The Act title, legislation identifier, and enactment date.',
      doesNotEstablish: ['That any particular administrative program was fully operational on that date.', 'Downstream housing outcomes.']
    }],
    temporalScope: { value: '1934-06-27', precision: 'day' }, geography: 'United States',
    limitations: ['Pending human verification and publication approval.'],
    reviewState: 'draft', dataStatus: DEMO
  },{
    id: 'claim-fha-authority', caseId: 'retro-housing-1934',
    text: 'Section 1 authorized the President to create a Federal Housing Administration.',
    claimType: 'Authority', epistemicStatus: 'Supported', evidentiaryStrength: 'Direct',
    sourceLinks: [{
      sourceId: 'source-statute-1934', relation: 'supports',
      locator: '48 Stat. 1246, Title I, Section 1',
      establishes: 'Statutory authority for creation of a Federal Housing Administration.',
      doesNotEstablish: ['Operational implementation details.', 'Number of mortgages insured.', 'Policy outcomes.']
    }],
    temporalScope: { value: '1934-06-27', precision: 'day' }, geography: 'United States',
    limitations: ['Authority is distinct from observed implementation.', 'Pending reviewer approval.'],
    reviewState: 'draft', dataStatus: DEMO
  },{
    id: 'claim-mortgage-insurance', caseId: 'retro-housing-1934',
    text: 'Section 203 authorized insurance for eligible mortgages subject to statutory conditions.',
    claimType: 'Authority', epistemicStatus: 'Supported', evidentiaryStrength: 'Direct',
    sourceLinks: [{
      sourceId: 'source-statute-1934', relation: 'supports',
      locator: '48 Stat. 1248, Title II, Section 203(a)-(b)',
      establishes: 'Authorization of mortgage insurance with eligibility conditions.',
      doesNotEstablish: ['How lenders applied the rules.', 'Who obtained mortgages.', 'Distributional or causal effects.']
    }],
    temporalScope: { value: '1934-06-27', precision: 'day' }, geography: 'United States',
    limitations: ['Administrative rules and practices must be audited independently.', 'Pending reviewer approval.'],
    reviewState: 'draft', dataStatus: DEMO
  }],
  sources: [{
    id: 'source-statute-1934', title: 'National Housing Act, Public Law 73-479',
    issuingBody: '73rd United States Congress / Government Publishing Office',
    sourceType: 'Primary', canonicalUrl: statute,
    published: { value: '1934-06-27', precision: 'day' },
    retrievedAt: '2026-10-20', archiveIdentifier: '48 Stat. 1246',
    verificationState: 'draft'
  },{
    id: 'source-nara-rg31', title: 'Records of the Federal Housing Administration, Record Group 31',
    issuingBody: 'National Archives and Records Administration', sourceType: 'Primary',
    canonicalUrl: archives, published: { value: null, precision: 'unknown' },
    retrievedAt: '2026-10-20', archiveIdentifier: 'RG 31',
    verificationState: 'draft',
    rightsOrAccessNotes: 'Finding aid rather than proof of particular administrative actions or outcomes.'
  },{
    id: 'source-hud-90years', title: 'FHA 90th-anniversary historical overview (2024)',
    issuingBody: 'U.S. Department of Housing and Urban Development',
    sourceType: 'Secondary', canonicalUrl: hud,
    published: { value: '2024-06-27', precision: 'day' },
    retrievedAt: '2026-10-20', verificationState: 'draft'
  }],
  relationships: [], outcomes: []
};
