/** A bounded draft fixture, NOT a verified account of the 1934 Act. */
import type { RetrospectiveDataset } from '../types/retrospective';
export const retrospectivePilot: RetrospectiveDataset = {
  cases: [{
    id: 'retro-housing-1934', slug: 'national-housing-act-1934',
    title: 'National Housing Act of 1934: research pilot',
    description: 'Research staging area for legislation, institutional history, and housing outcomes. No historical claim is certified by this placeholder.',
    jurisdictions: ['United States'], period: { value: '1934', precision: 'year' },
    issueTags: ['housing', 'federal-policy'], policyIds: [], eventIds: [], claimIds: [],
    revision: 1, reviewState: 'draft',
    dataStatus: 'Simulated Demonstration Record',
    limitations: ['Historical source review and evidence extraction have not yet been completed.']
  }],
  policies: [], events: [], claims: [], sources: [], relationships: [], outcomes: []
};
