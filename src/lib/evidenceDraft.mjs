const stages = new Set(['commitment', 'appropriation', 'expenditure', 'implementation', 'outcome']);
/** Validate candidate extractions from a locally supplied source. Never publishes or verifies. */
export function createEvidenceDrafts(input) {
  const { source, candidates } = input || {};
  if (!source || typeof source.id !== 'string' || !source.id.trim() || typeof source.text !== 'string' || !source.text.trim()) throw new Error('Source ID and original text are required.');
  if (source.text.length > 200000 || !Array.isArray(candidates) || candidates.length > 100) throw new Error('Extraction budget exceeded or candidates are invalid.');
  if (typeof source.locator !== 'string' || !source.locator.trim()) throw new Error('Source locator is required.');
  try { if (new URL(source.url).protocol !== 'https:') throw Error(); } catch { throw new Error('An HTTPS source URL is required.'); }
  if (!Number.isFinite(Date.parse(source.retrievedAt))) throw new Error('A retrieval date is required.');
  return candidates.map((c, i) => {
    const problems = [];
    const claim = typeof c?.claim === 'string' ? c.claim.trim().slice(0, 4000) : '';
    const quote = typeof c?.quote === 'string' ? c.quote : '';
    const start = quote.trim().length >= 16 && quote.length <= 4000 ? source.text.indexOf(quote) : -1;
    if (!claim) problems.push('MISSING_CLAIM');
    if (start < 0) problems.push('QUOTE_NOT_MATCHED');
    if (!stages.has(c?.stage)) problems.push('UNKNOWN_STAGE');
    if (c?.kind === 'causal') problems.push('CAUSAL_REVIEW_REQUIRED');
    const known = key => typeof c?.[key] === 'string' && c[key].trim() ? c[key].trim().slice(0, 1000) : null;
    return {
      id: `${source.id}:candidate:${i}`, publicationStatus: 'draft', epistemicStatus: 'unknown', humanReviewed: false,
      claim: claim || null, stage: stages.has(c?.stage) ? c.stage : 'unknown',
      institution: known('institution'), jurisdiction: known('jurisdiction'), eventDate: known('eventDate'),
      source: { id: source.id, url: source.url, locator: source.locator, retrievedAt: source.retrievedAt },
      evidence: start >= 0 ? { quote, start, end: start + quote.length } : null,
      validation: { excerptMatched: start >= 0, problems },
      limitations: ['Quote matching does not establish claim support, implementation, outcomes or causation.', 'Candidate metadata requires independent human review.'],
    };
  });
}
