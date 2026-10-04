import {
  EVIDENCE_STORE,
  INSTITUTION_RELATIONSHIPS,
  INSTITUTIONS,
  PUBLIC_ACTORS,
  COMMITMENTS,
  PUBLIC_PROBLEMS,
} from './mockData';

/**
 * PUBLIC PROTOTYPE DATA POLICY
 *
 * The prototype began with mixed real-world examples and simulated records.
 * Before public release, we apply a conservative publication rule at runtime:
 *   - no civic record is presented as verified merely because it names an official source;
 *   - records that have not completed the reproducible verification workflow are demo records;
 *   - "Unknown" / "Unclear" is preferred to unsupported certainty;
 *   - a small allowlist is used only for records whose exact primary source has been independently checked.
 *
 * This guard is intentionally conservative. The long-term goal is to migrate every record in
 * mockData.ts to individually reviewed, source-linked records and remove the need for a runtime guard.
 */

const VERIFIED_EVIDENCE: Record<string, { sourceUrl: string; note: string }> = {
  'ev-dc-home-rule-act': {
    sourceUrl: 'https://www.govinfo.gov/content/pkg/STATUTE-87/pdf/STATUTE-87-Pg774.pdf',
    note: 'Primary statutory source independently located during the public-release audit. Verification is bounded to the Home Rule Act itself; downstream legal interpretations require separate review.',
  },
  'ev-mayor-order-2019': {
    sourceUrl: 'https://planning.dc.gov/sites/default/files/dc/sites/op/page_content/attachments/2019-036%20Housing%20Initiative%20%285.9%29.pdf',
    note: 'Primary D.C. government copy of Mayor’s Order 2019-036 independently located during the public-release audit. Verification establishes the announced housing targets, not implementation or outcomes.',
  },
};

const DEMO_SOURCE_PREFIX = 'DEMO / SOURCE REQUIRES VERIFICATION: ';

for (const evidence of EVIDENCE_STORE as any[]) {
  const verified = VERIFIED_EVIDENCE[evidence.id];

  if (verified) {
    evidence.urlPlaceholder = verified.sourceUrl;
    evidence.dataStatus = 'Verified Real-World Record';
    evidence.isDemoData = false;
    evidence.epistemicStatus = 'Verified';
    evidence.methodologyNote = `${verified.note} ${evidence.methodologyNote ?? ''}`.trim();
    continue;
  }

  // Anything not individually cleared by the verification log is published as demo data.
  evidence.dataStatus = 'Simulated Demonstration Record';
  evidence.isDemoData = true;
  if (evidence.epistemicStatus === 'Verified') evidence.epistemicStatus = 'Unclear';

  if (typeof evidence.urlPlaceholder === 'string' && evidence.urlPlaceholder.startsWith('Official Source Placeholder:')) {
    evidence.urlPlaceholder = evidence.urlPlaceholder.replace('Official Source Placeholder:', DEMO_SOURCE_PREFIX);
  }

  const releaseNote = 'Public-release status: demonstration record pending exact source reproduction and claim-level verification.';
  if (!String(evidence.methodologyNote ?? '').includes(releaseNote)) {
    evidence.methodologyNote = `${releaseNote} ${evidence.methodologyNote ?? ''}`.trim();
  }
}

// Relationship assertions can imply legal or institutional conclusions. Until each relationship is
// independently checked against its governing source, publish them as analytically provisional.
for (const relationship of INSTITUTION_RELATIONSHIPS as any[]) {
  if (relationship.epistemicStatus === 'Verified') relationship.epistemicStatus = 'Unclear';
}

// These collections contain useful prototype structure, but their composite records have not yet
// completed claim-by-claim verification. They therefore remain unambiguously demonstration data.
for (const collection of [INSTITUTIONS, PUBLIC_ACTORS, COMMITMENTS, PUBLIC_PROBLEMS] as any[][]) {
  for (const record of collection) {
    record.dataStatus = 'Simulated Demonstration Record';
    record.isDemoData = true;
    if (record.epistemicStatus === 'Verified') record.epistemicStatus = 'Unclear';

    // Legacy UI fields may display a date next to the word "Verified". Do not allow a stale date
    // to imply that a composite demo record has completed the current verification protocol.
    if ('lastVerifiedDate' in record) {
      record.lastVerifiedDate = 'Pending independent verification';
    }
  }
}
