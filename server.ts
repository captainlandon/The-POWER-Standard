import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { GoogleGenAI } from '@google/genai';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;

app.use(express.json({ limit: '10mb' }));

// Shared Gemini client utility on the server.
// The API key is read only from the server environment and is never embedded in client code.
const apiKey = process.env.GEMINI_API_KEY || '';
let ai: GoogleGenAI | null = null;
if (apiKey) {
  ai = new GoogleGenAI({
    apiKey,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      },
    },
  });
}

// Helper to query Gemini with system instruction.
async function queryGemini(systemInstruction: string, prompt: string): Promise<string> {
  if (!ai || !apiKey) {
    throw new Error('GEMINI_API_KEY_UNAVAILABLE');
  }
  const response = await ai.models.generateContent({
    model: 'gemini-flash-latest',
    contents: prompt,
    config: {
      systemInstruction,
      temperature: 0.2,
      responseMimeType: 'application/json',
    },
  });
  return response.text?.trim() || '';
}

/* =========================================================================
   POWER Standard Research API Endpoints
   IMPORTANT: Current records are prototype/demo material unless a record
   explicitly links sufficient primary sources and has been independently reviewed.
   ========================================================================= */

app.get('/api/health', (_req, res) => {
  res.json({
    status: 'ok',
    service: 'The POWER Standard API v2.0',
    geminiConfigured: !!apiKey,
    timestamp: new Date().toISOString(),
  });
});

app.get('/api/v2/plans', (_req, res) => {
  res.json({
    standardVersion: '2.0.0',
    jurisdiction: 'District of Columbia',
    dataStatus: 'Prototype demonstration data — not a production-verified civic record',
    methodologyNotice:
      'Titles, legal references, amounts, statuses, and classifications in this endpoint are demonstration material and must be independently sourced and reviewed before public reliance.',
    totalRecords: 3,
    items: [
      {
        id: 'comm-housing-36k',
        title: 'Produce 36,000 New Housing Units by 2025 (12,000 Affordable)',
        office: 'Executive Office of the Mayor',
        authorityType: 'Executive',
        legalBasis: "Mayor's Order 2019-036",
        budgetAppropriated: 100000000,
        currency: 'USD',
        status: 'Prototype status — verification required',
        epistemicStatus: 'Demonstration record — source verification required',
      },
      {
        id: 'comm-secure-dc',
        title: 'Enact Secure DC Omnibus Crime Legislation & Judicial Pretrial Reforms',
        office: 'Council of the District of Columbia — Ward 2',
        authorityType: 'Legislative',
        legalBasis: 'D.C. Act 25-410 (Secure DC Omnibus Amendment Act of 2024)',
        budgetAppropriated: 18200000,
        currency: 'USD',
        status: 'Prototype status — verification required',
        epistemicStatus: 'Demonstration record — source verification required',
      },
      {
        id: 'comm-bus-lanes',
        title: 'Construct 50 Miles of Dedicated Rapid Transit Bus Lanes by 2026',
        office: 'Council of the District of Columbia — Ward 6',
        authorityType: 'Legislative',
        legalBasis: 'D.C. Law 24-045 & DDOT Bus Priority Directive',
        budgetAppropriated: 36000000,
        currency: 'USD',
        status: 'Prototype status — verification required',
        epistemicStatus: 'Demonstration record — source verification required',
      },
    ],
  });
});

app.get('/api/v2/problems/housing-affordability', (_req, res) => {
  res.json({
    id: 'housing-affordability',
    title: 'Severe Housing Cost Burden & Affordable Supply Deficit',
    jurisdiction: 'District of Columbia',
    dataStatus: 'Prototype demonstration record — source verification required',
    baselineProblemStatement: 'Over 21% of DC households spend greater than 50% of income on rent, concentrated heavily in Wards 7 and 8.',
    flourishingDomain: 'Material security',
    indicators: [
      {
        name: 'Severe Housing Cost Burden (>50% income on rent)',
        baseline: '19.8% (2019)',
        current: '21.4% (2024)',
        source: 'U.S. Census Bureau ACS 5-Year Estimates — exact table/source link required before production use',
      },
    ],
    primaryAuthorities: ['dc-dhcd', 'dc-council', 'dc-dcha'],
  });
});

app.get('/api/v2/flourishing/domains', (_req, res) => {
  res.json({
    standardVersion: '2.0',
    description: 'Eight non-composite flourishing outcome domains used by the current POWER prototype methodology.',
    domains: [
      'Material security',
      'Health',
      'Education and capability',
      'Safety and justice',
      'Social and civic life',
      'Environmental quality',
      'Agency and voice',
      'Meaning and culture',
    ],
    epistemicPrinciple: 'Never collapse these domains into a single aggregate municipal ranking. Maintain disaggregated distributions and explicit causal caveats.',
  });
});

/* =========================================================================
   AI CIVIC INTELLIGENCE ENGINE (The POWER Standard)
   AI output is analytical assistance, not an authoritative legal, factual,
   electoral, or policy judgment. Important claims require source verification.
   ========================================================================= */

/**
 * 1. AI POWER Standard Plan Auditor
 * Evaluates draft plans against the 9 Field Families of the POWER Plan taxonomy.
 * It deliberately does NOT assign a composite numeric score or letter grade.
 */
app.post('/api/ai/audit-plan', async (req, res) => {
  const plan = req.body || {};

  const systemInstruction = `You are the Plan Review Assistant for The POWER Standard (Public Office Work Evidence and Results).
Your role is to conduct an impartial, rigorous, nonpartisan assessment of public policy proposals and candidate plans.
Do not endorse, oppose, rank, score, or assign a letter grade to a plan or political actor.
Do not convert multidimensional evidence into a composite score.
Assess each dimension independently and preserve uncertainty.

The POWER Standard reviews plans across 9 dimensions:
1. Problem Precision (affected population, baseline metrics, measurement uncertainty disclosed)
2. Statutory Authority (does the candidate/office have legal power, or is it outside municipal/charter jurisdiction?)
3. Intervention Specificity (operational owners, concrete deliverables, timeline)
4. Resource Realism (budget numbers, funding mechanisms, revenue offsets)
5. Delivery Feasibility (milestones, decision gates, documented bottlenecks)
6. Evidence & Causal Logic (distinguishes correlation from direct policy causation, cites empirical sources)
7. Flourishing Outcomes (distribution across relevant populations, acknowledges confounds)
8. Institutional Veto Points (intergovernmental vetoes, court rulings, oversight, procurement hurdles)
9. Accountability & Independent Audit (auditor specified, public correction log)

For each dimension use only one status: "Substantial", "Partial", "Limited", "Insufficient", or "Unknown".
A status describes completeness/evidentiary support; it is not a political quality score.
If a legal or factual claim cannot be verified from supplied evidence, say Unknown or verification required.

Return STRICT JSON only matching this schema:
{
  "summary": string,
  "assessmentMatrix": [
    {
      "dimension": string,
      "status": "Substantial" | "Partial" | "Limited" | "Insufficient" | "Unknown",
      "basis": string,
      "missingOrUnverified": string[]
    }
  ],
  "authorityAudit": {
    "status": "Supported" | "Partially Supported" | "Unsupported" | "Unknown",
    "statutoryAssessment": string,
    "jurisdictionalLimits": string
  },
  "causalLogicAudit": {
    "confidenceLevel": "Direct" | "Correlated" | "Macro Trend" | "Unsubstantiated" | "Unknown",
    "assessment": string,
    "confoundingVariables": string[]
  },
  "vetoPointsIdentified": string[],
  "distributionalConsiderations": string,
  "evidentiaryGaps": string[],
  "actionableSuggestions": [
    {
      "field": string,
      "currentWeakness": string,
      "recommendedImprovement": string
    }
  ],
  "methodologyNotice": string
}`;

  const userPrompt = `Review the following POWER Plan submission:
Plan Title: ${plan.planTitle || 'Untitled'}
Target Office: ${plan.officeSoughtOrHeld || 'Unspecified'}
Jurisdiction: ${plan.jurisdiction || 'District of Columbia'}
Problem Definition: ${plan.baselineProblemStatement || 'Unstated'}
Affected Population: ${plan.affectedPopulation || 'Unstated'}
Intervention Summary: ${plan.actionSummary || 'Unstated'}
Implementation Owner: ${plan.implementationOwner || 'Unstated'}
Veto Points Disclosed: ${plan.vetoPoints || 'None disclosed'}
Authority Type: ${plan.authorityType || 'Unspecified'}
Legal Basis: ${plan.legalBasis || 'Unspecified'}
Direct Execution Power Claimed: ${plan.hasUnilateralAuthority ? 'Yes (unilateral)' : 'No (shared/dependent)'}
Statutory Prerequisites: ${plan.statutoryPrerequisites || 'None'}
Estimated Budget: $${plan.estimatedCostTotal || '0'}
Revenue Source: ${plan.revenueSource || 'Unspecified'}
Appropriation Mechanism: ${plan.appropriationMechanism || 'Unspecified'}
Delivery Milestones: ${plan.milestones || 'Unspecified'}
Documented Blockers: ${plan.documentedBlockers || 'None'}
Primary Evidence Citations: ${plan.primarySources || 'None'}
Assumptions Disclosed: ${plan.assumptions || 'None'}
Selected Flourishing Domains: ${(plan.selectedFlourishingDomains || []).join(', ') || 'None'}
Equity Targeting: ${plan.equityDimension || 'None'}
Independent Audit Commitment: ${plan.auditPlan || 'None'}
`;

  try {
    const rawJson = await queryGemini(systemInstruction, userPrompt);
    const parsed = JSON.parse(rawJson);
    res.json({ success: true, audit: parsed, source: 'gemini-flash-latest' });
  } catch (err) {
    console.warn('Gemini plan review fallback triggered:', (err as Error).message);

    const statusFromPresence = (present: boolean): 'Partial' | 'Insufficient' =>
      present ? 'Partial' : 'Insufficient';

    const hasLegalBasis = !!(plan.legalBasis && plan.legalBasis.length > 5);
    const hasBudget = Number(plan.estimatedCostTotal) > 0;
    const hasUncertainty = !!(plan.uncertaintyDisclosure && plan.uncertaintyDisclosure.length > 10);
    const hasVeto = !!(plan.vetoPoints && plan.vetoPoints.length > 10);
    const hasProblem = !!(plan.baselineProblemStatement && plan.baselineProblemStatement.length > 10);
    const hasIntervention = !!(plan.actionSummary && plan.actionSummary.length > 10);
    const hasMilestones = !!(plan.milestones && String(plan.milestones).length > 10);
    const hasSources = !!(plan.primarySources && String(plan.primarySources).length > 10);
    const hasAudit = !!(plan.auditPlan && String(plan.auditPlan).length > 10);

    res.json({
      success: true,
      audit: {
        summary:
          'Fallback review based only on fields supplied in the submission. It does not independently verify legal authority, factual claims, costs, or evidence.',
        assessmentMatrix: [
          { dimension: 'Problem Precision', status: statusFromPresence(hasProblem), basis: hasProblem ? 'A problem statement was supplied.' : 'No sufficiently detailed problem statement was supplied.', missingOrUnverified: ['Baseline evidence and measurement uncertainty require verification.'] },
          { dimension: 'Statutory Authority', status: statusFromPresence(hasLegalBasis), basis: hasLegalBasis ? 'A legal basis was supplied but has not been independently verified.' : 'No explicit legal basis was supplied.', missingOrUnverified: ['Verify authority against current law and jurisdiction.'] },
          { dimension: 'Intervention Specificity', status: statusFromPresence(hasIntervention), basis: hasIntervention ? 'An intervention summary was supplied.' : 'No sufficiently detailed intervention was supplied.', missingOrUnverified: ['Operational ownership and deliverables may require more detail.'] },
          { dimension: 'Resource Realism', status: statusFromPresence(hasBudget), basis: hasBudget ? 'A non-zero estimated cost was supplied.' : 'No non-zero estimated cost was supplied.', missingOrUnverified: ['Funding source, appropriation mechanism, and cost basis require verification.'] },
          { dimension: 'Delivery Feasibility', status: statusFromPresence(hasMilestones), basis: hasMilestones ? 'Milestones were supplied.' : 'No sufficiently detailed milestones were supplied.', missingOrUnverified: ['Dependencies, decision gates, and delivery assumptions require verification.'] },
          { dimension: 'Evidence & Causal Logic', status: statusFromPresence(hasSources), basis: hasSources ? 'Sources were supplied but not independently checked.' : 'No sufficiently detailed primary sources were supplied.', missingOrUnverified: ['Source quality, causal logic, and confounding variables require review.'] },
          { dimension: 'Flourishing Outcomes', status: plan.selectedFlourishingDomains?.length ? 'Partial' : 'Unknown', basis: plan.selectedFlourishingDomains?.length ? 'Outcome domains were selected.' : 'No outcome domains were supplied.', missingOrUnverified: ['Distributional effects and outcome measurement require evidence.'] },
          { dimension: 'Institutional Veto Points', status: statusFromPresence(hasVeto), basis: hasVeto ? 'Veto points were supplied but not independently verified.' : 'No sufficiently detailed veto points were supplied.', missingOrUnverified: ['Formal and informal dependencies require jurisdiction-specific verification.'] },
          { dimension: 'Accountability & Independent Audit', status: statusFromPresence(hasAudit), basis: hasAudit ? 'An audit/accountability plan was supplied.' : 'No sufficiently detailed audit plan was supplied.', missingOrUnverified: ['Independence, publication, and correction procedures require review.'] },
        ],
        authorityAudit: {
          status: hasLegalBasis ? 'Partially Supported' : 'Unknown',
          statutoryAssessment: hasLegalBasis
            ? `Submission cites ${plan.legalBasis}; this fallback has not verified the citation or the scope of authority it establishes.`
            : 'No explicit statutory citation was supplied; authority is unknown.',
          jurisdictionalLimits: 'Unknown until current, jurisdiction-specific legal sources are reviewed.',
        },
        causalLogicAudit: {
          confidenceLevel: 'Unknown',
          assessment: 'Causal confidence cannot be established by the fallback rules engine from form completeness alone.',
          confoundingVariables: [],
        },
        vetoPointsIdentified: hasVeto ? [String(plan.vetoPoints)] : [],
        distributionalConsiderations: 'Requires evidence and disaggregated analysis; no automatic equity conclusion is assigned.',
        evidentiaryGaps: [
          'Independent verification of cited legal authority and public records.',
          'Source-linked baseline, resource, implementation, and outcome evidence.',
          ...(hasUncertainty ? [] : ['Explicit uncertainty and limitations disclosure.']),
        ],
        actionableSuggestions: [
          {
            field: 'evidence',
            currentWeakness: 'The fallback engine can assess field presence but cannot independently establish truth or legal validity.',
            recommendedImprovement: 'Attach primary sources and specify what each source establishes and does not establish.',
          },
          {
            field: 'authority',
            currentWeakness: hasLegalBasis ? 'Legal basis supplied but unverified.' : 'No legal basis supplied.',
            recommendedImprovement: 'Provide current jurisdiction-specific authority and identify shared authority, prerequisites, and veto points.',
          },
        ],
        methodologyNotice:
          'No composite score or letter grade is produced. Each dimension is assessed independently; Unknown is a valid result.',
      },
      source: 'power-standard-rules-engine-fallback',
    });
  }
});

/**
 * 2. AI Evidentiary Claim Analyzer
 * Deconstructs public claims into claim types, evidentiary strength, and verification checklists.
 */
app.post(['/api/ai/analyze-evidence', '/api/ai/analyze-claim'], async (req, res) => {
  const { claimText, context, sourceName, publisher } = req.body || {};

  const systemInstruction = `You are The POWER Standard Senior Evidence Validator.
Analyze the public claim or empirical statement provided.
Deconstruct it into strict civic provenance categories:
- claimType: "Direct Action" | "Causal Attribution" | "Correlation" | "Procedural Milestone" | "Projected Forecast"
- evidentiaryStrength: "Direct" | "Strong" | "Corroborative" | "Limited" | "Contested" | "Insufficient"
- sourceClassification: "Primary Source" | "Secondary Source" | "Derived Analysis"
- epistemicCaveats: string explaining unmeasured confounds, data lag, or scope limits
- establishes: string[] (what this claim/evidence actually proves)
- doesNotEstablish: string[] (what it leaps over or cannot prove)
- verificationChecklist: string[] (specific public documents needed to independently verify)

Do not treat an official source as universally true; identify only what the source can establish.
Do not infer intent from correlation.
Return STRICT JSON only matching that schema.`;

  const userPrompt = `Analyze this claim:
Claim Text: "${claimText || 'No claim provided'}"
Source: ${sourceName || 'Unknown'} (${publisher || 'Unknown Publisher'})
Context: ${context || 'Public official statement / policy announcement'}`;

  try {
    const rawJson = await queryGemini(systemInstruction, userPrompt);
    const parsed = JSON.parse(rawJson);
    res.json({ success: true, analysis: parsed, source: 'gemini-flash-latest' });
  } catch (err) {
    console.warn('Gemini evidence analysis fallback:', (err as Error).message);
    res.json({
      success: true,
      analysis: {
        claimType: 'Causal Attribution',
        evidentiaryStrength: 'Insufficient',
        sourceClassification: 'Derived Analysis',
        epistemicCaveats: 'Fallback demonstration analysis only. The supplied claim has not been independently sourced or verified.',
        establishes: ['A claim was submitted for analysis.'],
        doesNotEstablish: [
          'That the underlying factual assertion is true.',
          'That correlation establishes causation or intent.',
          'That a cited institution or source supports the claim unless independently checked.',
        ],
        verificationChecklist: [
          'Obtain the relevant primary public record.',
          'Confirm jurisdiction, effective date, and scope.',
          'Identify corroborating or conflicting evidence.',
        ],
      },
      source: 'power-standard-rules-engine-fallback',
    });
  }
});

/**
 * 3. AI Statutory Authority & Veto Point Discovery
 * Maps civic problems to legal jurisdiction, charter power, and institutional veto points.
 */
app.post('/api/ai/discover-authority', async (req, res) => {
  const { issueDescription, jurisdiction = 'District of Columbia' } = req.body || {};

  const systemInstruction = `You are The POWER Standard Authority Research Assistant.
Given a public problem or desired civic reform in a specific jurisdiction, map the likely legal power structure using supplied context.
Do not claim exact legal authority unless supported by current source material in the request/context.
Distinguish formal authority from informal influence, and identify uncertainty explicitly.
This is civic research assistance, not legal advice.

Return STRICT JSON only matching this schema:
{
  "issue": string,
  "primaryLegalAuthority": {
    "institution": string,
    "officeTitle": string,
    "legalBasis": string,
    "statutoryPower": string
  },
  "sharedOrDependentEntities": string[],
  "jurisdictionalLimits": string,
  "institutionalVetoPoints": string[],
  "actionableCivicLeveragePoint": string,
  "powerStandardRecommendation": string,
  "verificationRequired": string[]
}`;

  const userPrompt = `Map the authority and institutional veto points for this civic problem:
Issue: "${issueDescription || 'Affordable housing production and rent regulation'}"
Jurisdiction: "${jurisdiction}"`;

  try {
    const rawJson = await queryGemini(systemInstruction, userPrompt);
    const parsed = JSON.parse(rawJson);
    res.json({ success: true, authorityMapping: parsed, source: 'gemini-flash-latest' });
  } catch (err) {
    console.warn('Gemini authority discovery fallback:', (err as Error).message);
    res.json({
      success: true,
      authorityMapping: {
        issue: issueDescription || 'General Municipal Reform',
        primaryLegalAuthority: {
          institution: 'Unknown — jurisdiction-specific research required',
          officeTitle: 'Unknown',
          legalBasis: 'Not independently verified by fallback engine',
          statutoryPower: 'Unknown',
        },
        sharedOrDependentEntities: [],
        jurisdictionalLimits: 'Unknown until current legal and administrative sources are reviewed.',
        institutionalVetoPoints: [],
        actionableCivicLeveragePoint: 'Identify the responsible institution and current formal participation process before recommending action.',
        powerStandardRecommendation: 'Verify authority before accountability: attach current primary legal/administrative sources and map dependencies explicitly.',
        verificationRequired: [
          'Current statute, charter, regulation, order, or other controlling authority.',
          'Current institutional responsibilities and delegated powers.',
          'Current procedural requirements, dependencies, and veto points.',
        ],
      },
      source: 'power-standard-rules-engine-fallback',
    });
  }
});

/**
 * 4. AI Nonpartisan Policy Tradeoff & Flourishing Equity Simulator
 * Compares two policy proposals across the 8 Flourishing Domains with causal caveats.
 */
app.post('/api/ai/simulate-tradeoffs', async (req, res) => {
  const { proposalA, proposalB, problemContext } = req.body || {};

  const systemInstruction = `You are The POWER Standard Nonpartisan Tradeoff Examiner.
Compare two competing policy approaches using procedural impartiality and empirical discipline.
Do NOT take sides, endorse, rank, score, or express political preferences.
Do not create false balance: unequal evidence may receive unequal evidentiary weight, which must be explained.
Examine:
- Comparative strengths and limitations of each proposal
- Fiscal & opportunity-cost tradeoffs
- Distribution across Flourishing Outcome Domains
- Distributional effects where supported by evidence
- Unintended systemic consequences / veto risks

Return STRICT JSON only matching this schema:
{
  "nonpartisanOverview": string,
  "approachA": {
    "title": string,
    "coreMechanism": string,
    "primaryBenefits": string[],
    "fiscalTradeoff": string,
    "flourishingStrengths": string[]
  },
  "approachB": {
    "title": string,
    "coreMechanism": string,
    "primaryBenefits": string[],
    "fiscalTradeoff": string,
    "flourishingStrengths": string[]
  },
  "distributionalImpact": string,
  "unintendedConsequencesAndRisks": string[],
  "testableMetricsForPublicReview": string[],
  "evidenceLimitations": string[]
}`;

  const userPrompt = `Compare these two civic proposals for the problem "${problemContext || 'Municipal Policy Problem'}":
Proposal A: ${JSON.stringify(proposalA || 'Approach A')}
Proposal B: ${JSON.stringify(proposalB || 'Approach B')}`;

  try {
    const rawJson = await queryGemini(systemInstruction, userPrompt);
    const parsed = JSON.parse(rawJson);
    res.json({ success: true, comparison: parsed, source: 'gemini-flash-latest' });
  } catch (err) {
    console.warn('Gemini tradeoff simulation fallback:', (err as Error).message);
    res.json({
      success: true,
      comparison: {
        nonpartisanOverview: 'Fallback mode cannot substantively compare the proposals without independently verified evidence. The entries below identify the need for structured comparison rather than supplying policy conclusions.',
        approachA: {
          title: proposalA?.title || 'Approach A',
          coreMechanism: 'Requires review from the submitted proposal and supporting sources.',
          primaryBenefits: [],
          fiscalTradeoff: 'Unknown until costs, funding mechanisms, and opportunity costs are sourced.',
          flourishingStrengths: [],
        },
        approachB: {
          title: proposalB?.title || 'Approach B',
          coreMechanism: 'Requires review from the submitted proposal and supporting sources.',
          primaryBenefits: [],
          fiscalTradeoff: 'Unknown until costs, funding mechanisms, and opportunity costs are sourced.',
          flourishingStrengths: [],
        },
        distributionalImpact: 'Unknown until relevant disaggregated evidence is supplied.',
        unintendedConsequencesAndRisks: [],
        testableMetricsForPublicReview: [],
        evidenceLimitations: ['Fallback demonstration mode does not independently verify policy evidence or causal claims.'],
      },
      source: 'power-standard-rules-engine-fallback',
    });
  }
});

/**
 * 5. AI Ethics & Influence Correlation Examiner
 * Analyzes campaign donor patterns and lobbying disclosures with mandatory epistemic safeguards.
 */
app.post('/api/ai/examine-influence', async (req, res) => {
  const { entityName, officialName, contributions, legislativeAction } = req.body || {};

  const systemInstruction = `You are The POWER Standard Ethics & Campaign Transparency Analyst.
Examine disclosed contributions, lobbying records, and legislative actions with strict evidentiary discipline.
CRITICAL MANDATORY SAFEGUARD:
You MUST NEVER assert corrupt intent, bribery, or illegal quid-pro-quo unless an authoritative adjudicative or official public record establishes the relevant finding.
A chronological relationship is not proof of causation or improper influence.
Your task is to identify chronology, evidentiary status, source gaps, and constructive transparency questions.

Return STRICT JSON only matching this schema:
{
  "entityName": string,
  "officialName": string,
  "chronologySummary": string,
  "evidentiaryClassification": "Chronological Correlation Only" | "Procedural Disclosure Milestone" | "Official Finding Under Review" | "Standard Regulated Civic Engagement" | "Insufficient Evidence",
  "epistemicDisclaimer": string,
  "transparencyQuestionsForPublic": string[],
  "statutoryFrameworkApplicable": string,
  "verificationRequired": string[]
}`;

  const userPrompt = `Examine this influence and ethics record:
Donor / Entity: ${entityName || 'Unspecified Entity'}
Public Official / Body: ${officialName || 'Unspecified Official / Body'}
Disclosed Contributions / Lobbying: ${contributions || 'No verified record supplied'}
Legislative / Procurement Action: ${legislativeAction || 'No verified action supplied'}`;

  try {
    const rawJson = await queryGemini(systemInstruction, userPrompt);
    const parsed = JSON.parse(rawJson);
    res.json({ success: true, examination: parsed, source: 'gemini-flash-latest' });
  } catch (err) {
    console.warn('Gemini ethics examination fallback:', (err as Error).message);
    res.json({
      success: true,
      examination: {
        entityName: entityName || 'Unspecified Entity',
        officialName: officialName || 'Unspecified Official / Body',
        chronologySummary: 'Fallback mode cannot establish chronology without verified source records.',
        evidentiaryClassification: 'Insufficient Evidence',
        epistemicDisclaimer: 'No inference of improper influence, corrupt intent, causation, or wrongdoing should be drawn from unverified or merely chronological information.',
        transparencyQuestionsForPublic: [
          'What primary disclosure records establish the contribution or lobbying activity?',
          'What official record establishes the government action and date?',
          'Are there applicable recusal, disclosure, or ethics rules, and what source establishes them?',
        ],
        statutoryFrameworkApplicable: 'Unknown until current jurisdiction-specific law and ethics rules are verified.',
        verificationRequired: [
          'Primary campaign-finance or lobbying disclosure records.',
          'Official legislative, regulatory, procurement, or ethics records.',
          'Current jurisdiction-specific statutory framework.',
        ],
      },
      source: 'power-standard-rules-engine-fallback',
    });
  }
});

/* =========================================================================
   Vite Dev Server Integration & Static Serving
   ========================================================================= */

if (process.env.NODE_ENV !== 'production') {
  const { createServer: createViteServer } = await import('vite');
  const vite = await createViteServer({
    server: { middlewareMode: true, host: '0.0.0.0', port },
    appType: 'spa',
  });
  app.use(vite.middlewares);

  app.use('*', async (req, res, next) => {
    const url = req.originalUrl;
    if (url.startsWith('/api')) return next();
    try {
      let template = await fs.promises.readFile(path.resolve(__dirname, 'index.html'), 'utf-8');
      template = await vite.transformIndexHtml(url, template);
      res.status(200).set({ 'Content-Type': 'text/html' }).end(template);
    } catch (e) {
      vite.ssrFixStacktrace(e as Error);
      next(e);
    }
  });
} else {
  app.use(express.static(path.resolve(__dirname, 'dist')));
  app.get('*', (_req, res) => {
    res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
  });
}

app.listen(port, '0.0.0.0', () => {
  console.log(`The POWER Standard server listening on http://0.0.0.0:${port} [env=${process.env.NODE_ENV || 'development'}]`);
});
