/** POWER Retrospective conservative publication gate (RETRO-002).
 * Every historical case and claim starts as demonstration/draft content.
 * Only explicitly human-reviewed, source-bounded claims may be published as verified.
 */
import type { HistoricalClaim, HistoricalCase, HistoricalSource, RetrospectiveDataset } from '../types/retrospective';

export const VERIFIED = 'Verified Real-World Record' as const;
export const DEMO = 'Simulated Demonstration Record' as const;

const isHttpUrl = (url: string): boolean => {
  try {
    const parsed = new URL(url);
    return (parsed.protocol === 'https:' || parsed.protocol === 'http:') && Boolean(parsed.hostname);
  } catch {
    return false;
  }
};

export function historicalClaimPublicationErrors(
  claim: HistoricalClaim,
  sources: ReadonlyMap<string, HistoricalSource>
): string[] {
  const errors: string[] = [];
  if (claim.reviewState !== 'approved' || !claim.reviewedBy || !claim.reviewedAt)
    errors.push('Claim requires documented human approval and review timestamp.');
  if (!claim.sourceLinks.length) errors.push('Claim requires at least one source link.');
  if (!claim.geography.trim()) errors.push('Claim requires geographic scope.');
  if (!claim.temporalScope.precision) errors.push('Claim requires temporal precision.');
  for (const link of claim.sourceLinks) {
    const source = sources.get(link.sourceId);
    if (!source) { errors.push('Missing source: ' + link.sourceId); continue; }
    if (source.verificationState !== 'approved') errors.push('Source not approved: ' + source.id);
    if (!isHttpUrl(source.canonicalUrl)) errors.push('Source missing canonical URL: ' + source.id);
    if (!link.locator.trim()) errors.push('Source missing locator: ' + source.id);
    if (!link.establishes.trim()) errors.push('Source link missing bounded establishment: ' + source.id);
    if (!link.doesNotEstablish.length) errors.push('Source link missing limitation boundaries: ' + source.id);
  }
  if (claim.claimType === 'Causal Claim' && !claim.causalMethod?.trim())
    errors.push('Causal claim requires explicit causal methodology.');
  if (!claim.sourceLinks.some(link => link.relation === 'supports'))
    errors.push('Claim requires supporting evidence, not only contextual or contradicting sources.');
  return errors;
}

export function applyRetrospectiveReleasePolicy(dataset: RetrospectiveDataset): RetrospectiveDataset {
  const sources = new Map(dataset.sources.map(source => [source.id, source]));
  const claims = dataset.claims.map(claim => {
    const errors = historicalClaimPublicationErrors(claim, sources);
    return errors.length ? { ...claim, dataStatus: DEMO, epistemicStatus: 'Unclear' as const }
      : { ...claim };
  });
  const claimsById = new Map(claims.map(claim => [claim.id, claim]));
  const cases = dataset.cases.map(item => {
    const allClaimsVerified = item.claimIds.length > 0 && item.claimIds.every(id => claimsById.get(id)?.dataStatus === VERIFIED);
    const approved = item.reviewState === 'approved' && allClaimsVerified;
    return approved ? { ...item } : { ...item, dataStatus: DEMO };
  });
  return { ...dataset, claims, cases };
}

/** Invariant check for CI: silently downgraded content is still a release error
 * if an author attempted to label it verified upstream. */
export function retrospectiveDatasetErrors(dataset: RetrospectiveDataset): string[] {
  const errors: string[] = [];
  const sources = new Map(dataset.sources.map(source => [source.id, source]));
  const caseIds = new Set(dataset.cases.map(c => c.id));
  const claimIds = new Set(dataset.claims.map(c => c.id));
  for (const claim of dataset.claims) {
    if (!caseIds.has(claim.caseId)) errors.push('Claim references missing case: ' + claim.id);
    if (claim.dataStatus === VERIFIED) {
      errors.push(...historicalClaimPublicationErrors(claim, sources).map(msg => claim.id + ': ' + msg));
    }
  }
  for (const item of dataset.cases) {
    for (const id of item.claimIds) if (!claimIds.has(id)) errors.push('Case references missing claim: ' + id);
    if (item.dataStatus === VERIFIED && (item.reviewState !== 'approved' || !item.claimIds.length ||
        item.claimIds.some(id => dataset.claims.find(c => c.id === id)?.dataStatus !== VERIFIED)))
      errors.push('Verified case is not fully approved and source-backed: ' + item.id);
  }
  return errors;
}
