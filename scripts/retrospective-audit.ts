/** Retrospective release gate and adversarial regression tests (RETRO-003, RETRO-009). */
import { retrospectivePilot } from '../src/data/retrospectivePilot';
import {
  applyRetrospectiveReleasePolicy,
  historicalClaimPublicationErrors,
  retrospectiveDatasetErrors,
  VERIFIED, DEMO
} from '../src/data/retrospectiveReleasePolicy';
import type { HistoricalClaim, HistoricalSource } from '../src/types/retrospective';

function assert(condition: unknown, message: string): asserts condition {
  if (!condition) throw new Error('Retrospective audit failed: ' + message);
}

const sampleSource: HistoricalSource = {
  id: 'fixture-source', title: 'Synthetic test document', issuingBody: 'Fixture only',
  sourceType: 'Primary', canonicalUrl: 'https://example.org/test-document',
  published: { value: '1934', precision: 'year' }, retrievedAt: '2026-10-19',
  verificationState: 'approved'
};
const sampleClaim: HistoricalClaim = {
  id: 'fixture-claim', caseId: 'fixture-case', text: 'Synthetic test assertion',
  claimType: 'Statement', epistemicStatus: 'Verified', evidentiaryStrength: 'Direct',
  sourceLinks: [{
    sourceId: sampleSource.id, relation: 'supports', locator: 'Section 1',
    establishes: 'Only the synthetic test assertion',
    doesNotEstablish: ['Real-world historical findings']
  }],
  temporalScope: { value: '1934', precision: 'year' },
  geography: 'United States', limitations: [],
  reviewState: 'approved', reviewedBy: 'test-reviewer', reviewedAt: '2026-10-19',
  dataStatus: VERIFIED
};
const sources = new Map([[sampleSource.id, sampleSource]]);
assert(historicalClaimPublicationErrors(sampleClaim, sources).length === 0, 'Valid synthetic claim rejected.');
const missingLocator = { ...sampleClaim, sourceLinks: [{ ...sampleClaim.sourceLinks[0], locator: '' }] };
assert(historicalClaimPublicationErrors(missingLocator, sources).some(e => e.includes('locator')), 'Missing locator accepted.');
const missingReviewer = { ...sampleClaim, reviewedBy: undefined };
assert(historicalClaimPublicationErrors(missingReviewer, sources).some(e => e.includes('human approval')), 'Missing review accepted.');
const causalClaim: HistoricalClaim = { ...sampleClaim, claimType: 'Causal Claim' };
assert(historicalClaimPublicationErrors(causalClaim, sources).some(e => e.includes('causal methodology')), 'Unsupported causal claim accepted.');
const demoDowngrade = applyRetrospectiveReleasePolicy({
  ...retrospectivePilot,
  claims: [missingLocator],
  sources: [sampleSource],
  cases: [{ ...retrospectivePilot.cases[0], claimIds: [missingLocator.id], dataStatus: VERIFIED }]
});
assert(demoDowngrade.claims[0].dataStatus === DEMO, 'Unverified claim was not downgraded.');
assert(demoDowngrade.cases[0].dataStatus === DEMO, 'Unverified case was not downgraded.');
assert(retrospectiveDatasetErrors({
  ...retrospectivePilot,
  claims: [missingLocator], sources: [sampleSource],
  cases: [{ ...retrospectivePilot.cases[0], claimIds: [missingLocator.id] }]
}).length > 0, 'Invalid verified claim did not fail CI.');
const datasetErrors = retrospectiveDatasetErrors(retrospectivePilot);
assert(datasetErrors.length === 0, datasetErrors.join('; '));
console.log('POWER Retrospective audit passed: draft corpus and adversarial publication-gate tests.');
