import React, { useState } from 'react';
import { 
  FileText, 
  CheckCircle2, 
  ArrowRight, 
  ArrowLeft, 
  Scale, 
  DollarSign, 
  Layers, 
  AlertTriangle, 
  Download, 
  Copy, 
  Check, 
  Sparkles, 
  ShieldCheck, 
  Info,
  Building2,
  Calendar,
  Compass,
  Loader2,
  X,
  RefreshCw
} from 'lucide-react';
import { 
  AuthorityType, 
  ParticipationStatus, 
  FlourishingDomainName, 
  DataStatus 
} from '../types/power';
import { AuthorityBadge, DataStatusBadge, SimulatedRecordNotice } from '../components/Badge';
import { FLOURISHING_DOMAINS } from '../data/ecosystemData';
import { INSTITUTIONS, PUBLIC_PROBLEMS } from '../data/mockData';

interface PlanBuilderViewProps {
  onNavigate: (view: string, id?: string) => void;
}

export const PlanBuilderView: React.FC<PlanBuilderViewProps> = ({ onNavigate }) => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [copiedJson, setCopiedJson] = useState(false);

  // Form State matching the 9 Field Families of the POWER Plan Object (Business Plan v2.0 - Page 5-6)
  const [formData, setFormData] = useState({
    // 1. Identity
    planTitle: 'Comprehensive Community Violence Intervention & Youth Apprenticeship Plan',
    officeSoughtOrHeld: 'Council of the District of Columbia — Ward 8',
    candidateOrOffice: 'Candidate-Submitted Proposal (Simulated)',
    jurisdiction: 'District of Columbia',
    participationStatus: 'Candidate-Submitted' as ParticipationStatus,
    version: '1.0.0-draft',
    targetYear: '2025-2027',

    // 2. Problem Definition
    problemId: 'violent-crime',
    affectedPopulation: 'Youth ages 16-24 and families residing in high-incident police service areas in Ward 8 and Ward 7.',
    geography: 'Ward 8 and Ward 7, Washington DC',
    baselineProblemStatement: 'Homicide rate in Ward 8 remains disproportionately high (48 homicides YTD 2024), while youth disconnectivity from accredited vocational pathways exceeds 28%.',
    uncertaintyDisclosure: 'Data on unregistered firearms and cross-border Maryland/Virginia procurement is incomplete and difficult to measure.',

    // 3. Intervention
    actionSummary: 'Deploy 40 licensed community credible messengers integrated with paid full-time union electrical/hvac apprenticeship pipelines and trauma-informed cognitive behavioral therapy.',
    implementationOwner: 'Office of Neighborhood Safety and Engagement (ONSE) in partnership with DC Department of Employment Services (DOES)',
    intergovernmentalDependencies: 'Requires coordination with D.C. Superior Court juvenile division and Court Services and Offender Supervision Agency (CSOSA).',
    vetoPoints: 'Council budget appropriation committee approval; Union apprenticeship joint labor-management committee slot allocation.',

    // 4. Authority
    authorityType: 'Legislative' as AuthorityType,
    legalBasis: 'D.C. Official Code § 7-2831 (Neighborhood Safety and Engagement Act of 2016)',
    hasUnilateralAuthority: false,
    statutoryPrerequisites: 'Requires legislative amendment to broaden ONSE grantmaking authority to include multi-year workforce stipend guarantees.',

    // 5. Resources
    estimatedCostTotal: 14500000,
    timeToDeploy: '9 months from legislative enactment',
    staffingRequired: '40 full-time outreach specialists, 6 case managers, 2 clinical supervisors',
    revenueSource: 'General Fund local revenue and dedicated sports wagering tax allocations',
    appropriationMechanism: 'Annual Council Budget Support Act line-item appropriation',

    // 6. Delivery
    milestones: 'Q1: RFP issued for community non-profit partner; Q2: Credible messenger training cohort starts; Q3: First 150 apprentices placed.',
    decisionPoints: 'Month 12 independent review of participant retention and rearrest metrics before Year 2 tranche release.',
    documentedBlockers: 'High commercial insurance and bonding requirements for non-traditional grassroots community organizations.',
    fallbackOptions: 'Partner with established community development credit unions for fiscal sponsorship.',

    // 7. Evidence
    primarySources: 'ONSE Annual Performance Oversight Report 2023; Urban Institute Evaluation of Cure Violence Programs.',
    assumptions: 'Assumes sustained baseline job availability in regional green infrastructure and transit electrification sectors.',

    // 8. Flourishing Outcomes
    selectedFlourishingDomains: ['Safety and justice', 'Education and capability', 'Material security'] as FlourishingDomainName[],
    equityDimension: 'Prioritizes residents with prior justice-system involvement and individuals residing east of the Anacostia River.',

    // 9. Accountability
    auditPlan: 'Annual audit by the Office of the District of Columbia Auditor (ODCA) with mandatory quarterly public Council dashboard updates.'
  });

  const [isAuditing, setIsAuditing] = useState(false);
  const [auditResult, setAuditResult] = useState<any | null>(null);
  const [auditError, setAuditError] = useState<string | null>(null);
  const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);

  const handleRunAiAudit = async () => {
    setIsAuditing(true);
    setAuditError(null);
    try {
      const res = await fetch('/api/ai/audit-plan', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.audit) {
        setAuditResult(data.audit);
        setIsAuditModalOpen(true);
      } else {
        setAuditError('Audit could not be completed. Please check network connection.');
      }
    } catch (e) {
      setAuditError((e as Error).message);
    } finally {
      setIsAuditing(false);
    }
  };

  const handleApplySuggestion = (field: string, text: string) => {
    if (field === 'authority') {
      setFormData(prev => ({
        ...prev,
        statutoryPrerequisites: text,
      }));
    } else if (field === 'vetoPoints') {
      setFormData(prev => ({
        ...prev,
        vetoPoints: prev.vetoPoints ? `${prev.vetoPoints}; ${text}` : text,
      }));
    } else if (field === 'flourishingOutcomes' || field === 'evidence') {
      setFormData(prev => ({
        ...prev,
        assumptions: prev.assumptions ? `${prev.assumptions} ${text}` : text,
      }));
    }
  };

  const handleDomainToggle = (domain: FlourishingDomainName) => {
    setFormData(prev => {
      const exists = prev.selectedFlourishingDomains.includes(domain);
      return {
        ...prev,
        selectedFlourishingDomains: exists 
          ? prev.selectedFlourishingDomains.filter(d => d !== domain)
          : [...prev.selectedFlourishingDomains, domain]
      };
    });
  };

  const generatedPlanObject = {
    $schema: 'https://thepowerstandard.org/schemas/v2.0/power-plan.json',
    id: `plan-${Date.now().toString().slice(-6)}`,
    dataStatus: 'Simulated Demonstration Record' as DataStatus,
    timestamp: new Date().toISOString(),
    identity: {
      title: formData.planTitle,
      office: formData.officeSoughtOrHeld,
      author: formData.candidateOrOffice,
      jurisdiction: formData.jurisdiction,
      participationStatus: formData.participationStatus,
      version: formData.version,
      targetCycle: formData.targetYear
    },
    problem: {
      problemId: formData.problemId,
      affectedPopulation: formData.affectedPopulation,
      geography: formData.geography,
      baselineStatement: formData.baselineProblemStatement,
      uncertainty: formData.uncertaintyDisclosure
    },
    intervention: {
      summary: formData.actionSummary,
      implementationOwner: formData.implementationOwner,
      dependencies: formData.intergovernmentalDependencies,
      vetoPoints: formData.vetoPoints.split(';').map(s => s.trim())
    },
    authority: {
      authorityType: formData.authorityType,
      legalBasis: formData.legalBasis,
      directExecutionPower: formData.hasUnilateralAuthority,
      prerequisites: formData.statutoryPrerequisites
    },
    resources: {
      estimatedCost: formData.estimatedCostTotal,
      currency: 'USD',
      timeframe: formData.timeToDeploy,
      staffing: formData.staffingRequired,
      revenuePath: formData.revenueSource,
      appropriationMechanism: formData.appropriationMechanism
    },
    delivery: {
      milestones: formData.milestones,
      decisionPoints: formData.decisionPoints,
      blockers: formData.documentedBlockers,
      fallbackOptions: formData.fallbackOptions
    },
    evidence: {
      citations: formData.primarySources,
      assumptions: formData.assumptions
    },
    flourishingOutcomes: {
      domains: formData.selectedFlourishingDomains,
      equityTargeting: formData.equityDimension,
      causalCaveat: 'The POWER Standard recognizes that outcome improvements must be evaluated alongside macroeconomic and demographic factors without assuming simple policy causality.'
    },
    accountability: {
      auditMethod: formData.auditPlan,
      publicCorrectionLogAvailable: true
    }
  };

  const handleCopyJson = () => {
    navigator.clipboard.writeText(JSON.stringify(generatedPlanObject, null, 2));
    setCopiedJson(true);
    setTimeout(() => setCopiedJson(false), 2000);
  };

  const handleDownloadJson = () => {
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(generatedPlanObject, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute('href', dataStr);
    downloadAnchor.setAttribute('download', `power-plan-${formData.version}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  const steps = [
    { num: 1, title: 'Identity & Problem', desc: 'Who, what office, and what civic problem' },
    { num: 2, title: 'Power & Authority', desc: 'Statutory basis and veto points' },
    { num: 3, title: 'Resources & Money', desc: 'Cost estimates and appropriation path' },
    { num: 4, title: 'Delivery & Blockers', desc: 'Milestones, decision gates, and risks' },
    { num: 5, title: 'Flourishing & Proof', desc: 'Outcome domains, evidence, and export' }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Header */}
      <div className="flex items-start justify-between flex-wrap gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-[11px] font-mono font-bold bg-indigo-50 text-indigo-800 border border-indigo-200 mb-2">
            <Compass className="w-3.5 h-3.5" />
            Layer 3 • Public Plan Operating Standard
          </div>
          <h1 className="text-3xl sm:text-4xl font-serif font-black text-slate-900">
            Interactive Plan Builder
          </h1>
          <p className="text-sm text-slate-600 max-w-3xl mt-1 leading-relaxed">
            The POWER Plan is a standardized, jurisdiction-aware public instrument. Use this guided builder to convert political promises into sourced, testable public plans with identified authorities, budget paths, veto points, and flourishing outcomes.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handleRunAiAudit}
            disabled={isAuditing}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold text-white bg-indigo-900 hover:bg-indigo-950 rounded-lg transition-all shadow-xs disabled:opacity-60"
          >
            {isAuditing ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Sparkles className="w-3.5 h-3.5 text-amber-300" />}
            <span>{isAuditing ? 'Auditing Plan...' : 'Run Impartial POWER Audit (Gemini)'}</span>
          </button>

          <button
            type="button"
            onClick={() => onNavigate('commitments')}
            className="px-3.5 py-2 text-xs font-semibold text-slate-700 bg-white border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors"
          >
            Browse Published Plans
          </button>
        </div>
      </div>

      {/* Simulated Demonstration Record Notice */}
      <SimulatedRecordNotice />

      {/* Wizard Step Navigation */}
      <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-xs">
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
          {steps.map(s => (
            <button
              key={s.num}
              type="button"
              onClick={() => setCurrentStep(s.num)}
              className={`p-3 rounded-xl text-left transition-all border ${
                currentStep === s.num
                  ? 'bg-slate-900 text-white border-slate-900 shadow-sm'
                  : currentStep > s.num
                  ? 'bg-indigo-50/60 text-slate-800 border-indigo-200 hover:bg-indigo-50'
                  : 'bg-slate-50 text-slate-500 border-slate-200 hover:bg-slate-100'
              }`}
            >
              <div className="flex items-center justify-between text-xs font-mono font-bold mb-1">
                <span>Step 0{s.num}</span>
                {currentStep > s.num && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />}
              </div>
              <div className="text-xs font-bold leading-tight line-clamp-1">{s.title}</div>
              <div className="text-[10px] text-slate-400 line-clamp-1 mt-0.5">{s.desc}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Main Wizard Form Body */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs space-y-6">
        {/* STEP 1: IDENTITY & PROBLEM DEFINITION */}
        {currentStep === 1 && (
          <div className="space-y-6 animate-in fade-in duration-150">
            <div className="border-b border-slate-100 pb-4">
              <h2 className="text-xl font-serif font-bold text-slate-900">
                1. Plan Identity & Problem Definition
              </h2>
              <p className="text-xs text-slate-600 mt-0.5">
                Establish who is making the commitment, what office is sought, and the specific civic problem being targeted.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="md:col-span-2">
                <label className="block font-semibold text-slate-700 mb-1">
                  Public Plan Title <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.planTitle}
                  onChange={e => setFormData({ ...formData, planTitle: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-300 rounded-lg p-2.5 text-slate-900 font-semibold focus:ring-1 focus:ring-slate-900 focus:outline-hidden"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Office Sought or Held <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.officeSoughtOrHeld}
                  onChange={e => setFormData({ ...formData, officeSoughtOrHeld: e.target.value })}
                  placeholder="e.g. Mayor of Washington DC, Ward Councilmember"
                  className="w-full bg-slate-50 border border-slate-300 rounded-lg p-2.5 text-slate-900 focus:ring-1 focus:ring-slate-900 focus:outline-hidden"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Participation Status <span className="text-slate-400 font-normal">(Business Plan v2.0 Standard)</span>
                </label>
                <select
                  value={formData.participationStatus}
                  onChange={e => setFormData({ ...formData, participationStatus: e.target.value as ParticipationStatus })}
                  className="w-full bg-slate-50 border border-slate-300 rounded-lg p-2.5 text-slate-900 font-mono text-xs focus:ring-1 focus:ring-slate-900 focus:outline-hidden"
                >
                  <option value="Candidate-Submitted">Candidate-Submitted (Direct Author Submission)</option>
                  <option value="Office-Verified">Office-Verified (Confirmed by Incumbent Staff)</option>
                  <option value="POWER-Compiled">POWER-Compiled (Assembled from Public Records by Research Team)</option>
                </select>
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Target Civic Problem
                </label>
                <select
                  value={formData.problemId}
                  onChange={e => setFormData({ ...formData, problemId: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-300 rounded-lg p-2.5 text-slate-900 font-semibold focus:ring-1 focus:ring-slate-900 focus:outline-hidden"
                >
                  {PUBLIC_PROBLEMS.map(p => (
                    <option key={p.id} value={p.id}>{p.title} ({p.geography})</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Target Implementation Horizon
                </label>
                <input
                  type="text"
                  value={formData.targetYear}
                  onChange={e => setFormData({ ...formData, targetYear: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-300 rounded-lg p-2.5 text-slate-900 focus:ring-1 focus:ring-slate-900 focus:outline-hidden"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block font-semibold text-slate-700 mb-1">
                  Affected Population & Geography
                </label>
                <input
                  type="text"
                  value={formData.affectedPopulation}
                  onChange={e => setFormData({ ...formData, affectedPopulation: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-300 rounded-lg p-2.5 text-slate-900 focus:ring-1 focus:ring-slate-900 focus:outline-hidden"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block font-semibold text-slate-700 mb-1">
                  Baseline Empirical Problem Statement
                </label>
                <textarea
                  rows={2}
                  value={formData.baselineProblemStatement}
                  onChange={e => setFormData({ ...formData, baselineProblemStatement: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-300 rounded-lg p-2.5 text-slate-900 focus:ring-1 focus:ring-slate-900 focus:outline-hidden leading-relaxed"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block font-semibold text-slate-700 mb-1">
                  Explicit Uncertainty Disclosure <span className="text-slate-400 font-normal">(What remains unknown or unmeasured?)</span>
                </label>
                <input
                  type="text"
                  value={formData.uncertaintyDisclosure}
                  onChange={e => setFormData({ ...formData, uncertaintyDisclosure: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-300 rounded-lg p-2.5 text-slate-900 focus:ring-1 focus:ring-slate-900 focus:outline-hidden"
                />
              </div>
            </div>
          </div>
        )}

        {/* STEP 2: POWER & AUTHORITY */}
        {currentStep === 2 && (
          <div className="space-y-6 animate-in fade-in duration-150">
            <div className="border-b border-slate-100 pb-4">
              <h2 className="text-xl font-serif font-bold text-slate-900">
                2. Institutional Power & Legal Authority Mapping
              </h2>
              <p className="text-xs text-slate-600 mt-0.5">
                The primary rule of The POWER Standard: <em>Authority before accountability</em>. Specify the legal basis and identify veto points.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Formal Authority Domain
                </label>
                <select
                  value={formData.authorityType}
                  onChange={e => setFormData({ ...formData, authorityType: e.target.value as AuthorityType })}
                  className="w-full bg-slate-50 border border-slate-300 rounded-lg p-2.5 text-slate-900 font-medium focus:ring-1 focus:ring-slate-900 focus:outline-hidden"
                >
                  <option value="Legislative">Legislative Authority (D.C. Council Ordinance)</option>
                  <option value="Executive">Executive Authority (Mayoral Administrative Order)</option>
                  <option value="Budgetary">Budgetary Authority (Appropriation & Capital Plan)</option>
                  <option value="Regulatory">Regulatory Authority (Administrative Rulemaking)</option>
                  <option value="Enforcement">Enforcement Authority (Police / Code Inspection)</option>
                  <option value="Oversight">Oversight Authority (Audits & Hearings)</option>
                </select>
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Can the office execute this unilaterally?
                </label>
                <div className="flex items-center gap-3 pt-2">
                  <label className="inline-flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="unilateral"
                      checked={formData.hasUnilateralAuthority}
                      onChange={() => setFormData({ ...formData, hasUnilateralAuthority: true })}
                      className="text-slate-900"
                    />
                    <span>Yes (Direct Statutory Power)</span>
                  </label>
                  <label className="inline-flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="unilateral"
                      checked={!formData.hasUnilateralAuthority}
                      onChange={() => setFormData({ ...formData, hasUnilateralAuthority: false })}
                      className="text-slate-900"
                    />
                    <span>No (Requires Other Institutions / Veto Points)</span>
                  </label>
                </div>
              </div>

              <div className="md:col-span-2">
                <label className="block font-semibold text-slate-700 mb-1">
                  Foundational Legal Basis / Statutory Code
                </label>
                <input
                  type="text"
                  value={formData.legalBasis}
                  onChange={e => setFormData({ ...formData, legalBasis: e.target.value })}
                  placeholder="e.g. D.C. Official Code § 1-204.04 (Home Rule Act), D.C. Law 21-125"
                  className="w-full bg-slate-50 border border-slate-300 rounded-lg p-2.5 text-slate-900 font-mono text-xs focus:ring-1 focus:ring-slate-900 focus:outline-hidden"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block font-semibold text-slate-700 mb-1">
                  Implementation Owner & Lead Responsible Agency
                </label>
                <input
                  type="text"
                  value={formData.implementationOwner}
                  onChange={e => setFormData({ ...formData, implementationOwner: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-300 rounded-lg p-2.5 text-slate-900 focus:ring-1 focus:ring-slate-900 focus:outline-hidden"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block font-semibold text-slate-700 mb-1">
                  Known Veto Points, Institutional Bottlenecks & Approvals Required
                </label>
                <textarea
                  rows={2}
                  value={formData.vetoPoints}
                  onChange={e => setFormData({ ...formData, vetoPoints: e.target.value })}
                  placeholder="e.g. Council Committee Vote; Federal Congressional Review Period; CFO Fiscal Certification; Zoning Commission approval"
                  className="w-full bg-slate-50 border border-slate-300 rounded-lg p-2.5 text-slate-900 focus:ring-1 focus:ring-slate-900 focus:outline-hidden leading-relaxed"
                />
              </div>
            </div>
          </div>
        )}

        {/* STEP 3: RESOURCES & BUDGET */}
        {currentStep === 3 && (
          <div className="space-y-6 animate-in fade-in duration-150">
            <div className="border-b border-slate-100 pb-4">
              <h2 className="text-xl font-serif font-bold text-slate-900">
                3. Resources, Staffing & Appropriation Path
              </h2>
              <p className="text-xs text-slate-600 mt-0.5">
                Every realistic public plan must account for dollars, headcount, and the municipal appropriation vehicle.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Estimated Total Cost (USD)
                </label>
                <div className="relative">
                  <DollarSign className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                  <input
                    type="number"
                    value={formData.estimatedCostTotal}
                    onChange={e => setFormData({ ...formData, estimatedCostTotal: Number(e.target.value) })}
                    className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-slate-900 font-mono font-bold focus:ring-1 focus:ring-slate-900 focus:outline-hidden"
                  />
                </div>
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Estimated Time to Operational Deployment
                </label>
                <input
                  type="text"
                  value={formData.timeToDeploy}
                  onChange={e => setFormData({ ...formData, timeToDeploy: e.target.value })}
                  placeholder="e.g. 6 months after budget passage"
                  className="w-full bg-slate-50 border border-slate-300 rounded-lg p-2.5 text-slate-900 focus:ring-1 focus:ring-slate-900 focus:outline-hidden"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block font-semibold text-slate-700 mb-1">
                  Staffing & Systems Required
                </label>
                <input
                  type="text"
                  value={formData.staffingRequired}
                  onChange={e => setFormData({ ...formData, staffingRequired: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-300 rounded-lg p-2.5 text-slate-900 focus:ring-1 focus:ring-slate-900 focus:outline-hidden"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Revenue Source Identification
                </label>
                <input
                  type="text"
                  value={formData.revenueSource}
                  onChange={e => setFormData({ ...formData, revenueSource: e.target.value })}
                  placeholder="e.g. General Fund surplus, federal grant, dedicated tax"
                  className="w-full bg-slate-50 border border-slate-300 rounded-lg p-2.5 text-slate-900 focus:ring-1 focus:ring-slate-900 focus:outline-hidden"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Appropriation Path / Legislative Vehicle
                </label>
                <input
                  type="text"
                  value={formData.appropriationMechanism}
                  onChange={e => setFormData({ ...formData, appropriationMechanism: e.target.value })}
                  placeholder="e.g. Local Budget Act of FY2026, Capital Improvement Plan"
                  className="w-full bg-slate-50 border border-slate-300 rounded-lg p-2.5 text-slate-900 focus:ring-1 focus:ring-slate-900 focus:outline-hidden"
                />
              </div>
            </div>
          </div>
        )}

        {/* STEP 4: DELIVERY & BLOCKERS */}
        {currentStep === 4 && (
          <div className="space-y-6 animate-in fade-in duration-150">
            <div className="border-b border-slate-100 pb-4">
              <h2 className="text-xl font-serif font-bold text-slate-900">
                4. Delivery Milestones, Decision Points & Risk Fallbacks
              </h2>
              <p className="text-xs text-slate-600 mt-0.5">
                Plans without milestones cannot be tracked. Define measurable decision points and acknowledge known operational blockers.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="md:col-span-2">
                <label className="block font-semibold text-slate-700 mb-1">
                  Key Delivery Milestones & Timetable
                </label>
                <textarea
                  rows={2}
                  value={formData.milestones}
                  onChange={e => setFormData({ ...formData, milestones: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-300 rounded-lg p-2.5 text-slate-900 focus:ring-1 focus:ring-slate-900 focus:outline-hidden leading-relaxed"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block font-semibold text-slate-700 mb-1">
                  Formal Review Decision Points (Off-Ramps & Tranche Releases)
                </label>
                <input
                  type="text"
                  value={formData.decisionPoints}
                  onChange={e => setFormData({ ...formData, decisionPoints: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-300 rounded-lg p-2.5 text-slate-900 focus:ring-1 focus:ring-slate-900 focus:outline-hidden"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Documented Operational Blockers
                </label>
                <input
                  type="text"
                  value={formData.documentedBlockers}
                  onChange={e => setFormData({ ...formData, documentedBlockers: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-300 rounded-lg p-2.5 text-slate-900 focus:ring-1 focus:ring-slate-900 focus:outline-hidden"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Fallback Options If Bottlenecks Occur
                </label>
                <input
                  type="text"
                  value={formData.fallbackOptions}
                  onChange={e => setFormData({ ...formData, fallbackOptions: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-300 rounded-lg p-2.5 text-slate-900 focus:ring-1 focus:ring-slate-900 focus:outline-hidden"
                />
              </div>
            </div>
          </div>
        )}

        {/* STEP 5: FLOURISHING DOMAINS & EXPORT */}
        {currentStep === 5 && (
          <div className="space-y-6 animate-in fade-in duration-150">
            <div className="border-b border-slate-100 pb-4">
              <h2 className="text-xl font-serif font-bold text-slate-900">
                5. Flourishing Outcomes, Evidence Proof & Schema Export
              </h2>
              <p className="text-xs text-slate-600 mt-0.5">
                Connect the plan to the 8 Flourishing Domains (Business Plan v2.0 Page 13) and export the standardized JSON plan object.
              </p>
            </div>

            {/* Flourishing Domains Multi-Select */}
            <div className="space-y-2">
              <label className="block font-semibold text-slate-700 text-xs">
                Select Connected Flourishing Outcome Domains:
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {FLOURISHING_DOMAINS.map(d => {
                  const selected = formData.selectedFlourishingDomains.includes(d.domain);
                  return (
                    <button
                      key={d.domain}
                      type="button"
                      onClick={() => handleDomainToggle(d.domain)}
                      className={`p-2.5 rounded-lg border text-left transition-all text-xs ${
                        selected
                          ? 'bg-indigo-50 border-indigo-300 text-indigo-950 font-bold shadow-xs'
                          : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span>{d.domain}</span>
                        {selected && <Check className="w-3.5 h-3.5 text-indigo-700" />}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="md:col-span-2">
                <label className="block font-semibold text-slate-700 mb-1">
                  Primary Source Evidence & Research Citations
                </label>
                <input
                  type="text"
                  value={formData.primarySources}
                  onChange={e => setFormData({ ...formData, primarySources: e.target.value })}
                  placeholder="e.g. D.C. Auditor Report 2023; Bureau of Labor Statistics dataset"
                  className="w-full bg-slate-50 border border-slate-300 rounded-lg p-2.5 text-slate-900 focus:ring-1 focus:ring-slate-900 focus:outline-hidden"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block font-semibold text-slate-700 mb-1">
                  Independent Public Audit Commitment
                </label>
                <input
                  type="text"
                  value={formData.auditPlan}
                  onChange={e => setFormData({ ...formData, auditPlan: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-300 rounded-lg p-2.5 text-slate-900 focus:ring-1 focus:ring-slate-900 focus:outline-hidden"
                />
              </div>
            </div>

            {/* AI POWER Plan Standard Certification Audit (Business Plan v2.0) */}
            <div className="bg-slate-900 text-white rounded-xl p-5 space-y-4 border border-slate-800 shadow-md">
              <div className="flex items-start justify-between flex-wrap gap-4">
                <div className="space-y-1 max-w-xl">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-amber-400 text-slate-950 uppercase">
                      Impartial AI Standard Auditor
                    </span>
                    <span className="text-xs text-slate-400 font-mono">
                      Civic Rigor Engine
                    </span>
                  </div>
                  <h3 className="text-base font-serif font-bold text-white">
                    Audit Plan Against The 9 POWER Dimensions
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Evaluate this proposal for legal authority boundaries, fiscal realism, causal logic validity, and institutional veto points before publishing.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={handleRunAiAudit}
                  disabled={isAuditing}
                  className="inline-flex items-center gap-2 px-4 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-lg text-xs transition-all shadow-sm disabled:opacity-50"
                >
                  {isAuditing ? <Loader2 className="w-4 h-4 animate-spin text-white" /> : <Sparkles className="w-4 h-4 text-amber-300" />}
                  <span>{isAuditing ? 'Conducting Deep Audit...' : auditResult ? 'Re-Run Impartial Audit' : 'Run POWER Standard Audit'}</span>
                </button>
              </div>

              {auditResult && (
                <div className="bg-slate-800/90 rounded-lg p-3.5 border border-slate-700 flex items-center justify-between flex-wrap gap-3 text-xs">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-amber-400 text-slate-950 font-mono font-black flex items-center justify-center text-sm">
                      {auditResult.overallScore}
                    </div>
                    <div>
                      <div className="font-bold text-white flex items-center gap-2">
                        <span>{auditResult.grade}</span>
                        <span className="text-[10px] font-mono font-normal text-slate-400">• Authority: {auditResult.authorityAudit?.isAuthorized ? 'Verified' : 'Flagged'}</span>
                      </div>
                      <p className="text-slate-300 text-[11px] line-clamp-1">{auditResult.summary}</p>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => setIsAuditModalOpen(true)}
                    className="px-3 py-1.5 bg-white/10 hover:bg-white/20 text-white rounded font-semibold text-xs border border-white/20 transition-colors"
                  >
                    View Full Audit Report ({auditResult.actionableSuggestions?.length || 0} Suggestions)
                  </button>
                </div>
              )}

              {auditError && (
                <div className="p-3 bg-rose-950/80 border border-rose-800 text-rose-200 text-xs rounded-lg flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-rose-400 shrink-0" />
                  <span>{auditError}</span>
                </div>
              )}
            </div>

            {/* Live Schema Preview & Export Actions */}
            <div className="pt-4 border-t border-slate-200 space-y-3">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-indigo-700" />
                  <span className="text-xs font-mono font-bold uppercase text-slate-700">
                    Compiled POWER Plan Object (JSON Schema v2.0)
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={handleCopyJson}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold bg-white border border-slate-300 rounded-lg hover:bg-slate-50 text-slate-700 transition-colors"
                  >
                    {copiedJson ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-slate-500" />}
                    <span>{copiedJson ? 'Copied' : 'Copy JSON'}</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleDownloadJson}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors shadow-xs"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download .json</span>
                  </button>
                </div>
              </div>

              <pre className="p-4 bg-slate-950 text-slate-200 rounded-xl text-[11px] font-mono overflow-x-auto max-h-72 border border-slate-800 leading-snug">
                {JSON.stringify(generatedPlanObject, null, 2)}
              </pre>
            </div>
          </div>
        )}

        {/* Wizard Footer Controls */}
        <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
          <button
            type="button"
            disabled={currentStep === 1}
            onClick={() => setCurrentStep(prev => Math.max(1, prev - 1))}
            className={`inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-lg border transition-colors ${
              currentStep === 1
                ? 'opacity-40 cursor-not-allowed bg-slate-100 text-slate-400 border-slate-200'
                : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-50'
            }`}
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Previous Step</span>
          </button>

          <span className="text-xs font-mono text-slate-400">
            Step {currentStep} of {steps.length}
          </span>

          {currentStep < 5 ? (
            <button
              type="button"
              onClick={() => setCurrentStep(prev => Math.min(5, prev + 1))}
              className="inline-flex items-center gap-1.5 px-5 py-2 text-xs font-bold bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors shadow-xs"
            >
              <span>Next: {steps[currentStep].title}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          ) : (
            <button
              type="button"
              onClick={handleRunAiAudit}
              disabled={isAuditing}
              className="inline-flex items-center gap-1.5 px-5 py-2 text-xs font-bold bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg transition-colors shadow-xs disabled:opacity-60"
            >
              {isAuditing ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <CheckCircle2 className="w-3.5 h-3.5" />}
              <span>{isAuditing ? 'Validating Plan...' : 'Validate & Audit Plan'}</span>
            </button>
          )}
        </div>
      </div>

      {/* AI POWER Plan Audit Modal */}
      {isAuditModalOpen && auditResult && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] flex flex-col shadow-2xl border border-slate-200">
            {/* Modal Header */}
            <div className="p-6 border-b border-slate-200 flex items-start justify-between bg-slate-900 text-white rounded-t-2xl">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-amber-400 text-slate-950 uppercase">
                    POWER Standard v2.0 Audit
                  </span>
                  <span className="text-xs text-slate-300 font-mono">
                    Evaluation Engine: Gemini Impartial Examiner
                  </span>
                </div>
                <h3 className="text-xl font-serif font-black text-white">
                  Civic Plan Audit & Certification Review
                </h3>
                <p className="text-xs text-slate-300 max-w-2xl">
                  {auditResult.summary}
                </p>
              </div>

              <button
                type="button"
                onClick={() => setIsAuditModalOpen(false)}
                className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 overflow-y-auto space-y-6 text-xs text-slate-800">
              {/* Score & Summary Banner */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-slate-900 text-white flex flex-col items-center justify-center font-mono font-bold shrink-0 shadow-inner">
                    <span className="text-xl font-black">{auditResult.overallScore}</span>
                    <span className="text-[9px] text-slate-400 uppercase">/ 100</span>
                  </div>
                  <div>
                    <div className="text-[10px] font-mono font-bold text-slate-500 uppercase">Audit Score</div>
                    <div className="font-bold text-slate-900 text-sm mt-0.5">{auditResult.grade}</div>
                  </div>
                </div>

                <div className="bg-blue-50/70 border border-blue-200 rounded-xl p-4 space-y-1">
                  <div className="text-[10px] font-mono font-bold text-blue-800 uppercase flex items-center gap-1">
                    <Scale className="w-3.5 h-3.5 text-blue-700" />
                    Authority Verification
                  </div>
                  <div className="font-bold text-blue-950">
                    {auditResult.authorityAudit?.isAuthorized ? 'Statutory Basis Cited' : 'Jurisdictional Gap'}
                  </div>
                  <p className="text-[11px] text-blue-900/80 leading-relaxed">
                    {auditResult.authorityAudit?.statutoryAssessment}
                  </p>
                </div>

                <div className="bg-emerald-50/70 border border-emerald-200 rounded-xl p-4 space-y-1">
                  <div className="text-[10px] font-mono font-bold text-emerald-800 uppercase flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
                    Causal Confidence
                  </div>
                  <div className="font-bold text-emerald-950">
                    {auditResult.causalLogicAudit?.confidenceLevel || 'Correlated'}
                  </div>
                  <p className="text-[11px] text-emerald-900/80 leading-relaxed">
                    {auditResult.causalLogicAudit?.assessment}
                  </p>
                </div>
              </div>

              {/* Confounding Variables & Veto Points */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-amber-50/70 border border-amber-200 rounded-xl p-4 space-y-2">
                  <div className="font-mono font-bold text-[11px] uppercase text-amber-900 flex items-center gap-1.5">
                    <AlertTriangle className="w-3.5 h-3.5 text-amber-700" />
                    Documented Institutional Veto Points
                  </div>
                  <ul className="space-y-1 text-slate-700">
                    {(auditResult.vetoPointsIdentified || []).map((v: string, i: number) => (
                      <li key={i} className="flex items-start gap-1.5 text-[11px]">
                        <span className="text-amber-600 font-bold">•</span>
                        <span>{v}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-purple-50/70 border border-purple-200 rounded-xl p-4 space-y-2">
                  <div className="font-mono font-bold text-[11px] uppercase text-purple-900 flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5 text-purple-700" />
                    Flourishing & Macro Confounds
                  </div>
                  <p className="text-[11px] text-purple-950 leading-relaxed">
                    {auditResult.flourishingEquityRisk}
                  </p>
                  <div className="pt-1">
                    <span className="text-[10px] font-mono font-bold text-purple-800 uppercase">External Confounds:</span>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {(auditResult.causalLogicAudit?.confoundingVariables || []).map((c: string, idx: number) => (
                        <span key={idx} className="bg-white/80 border border-purple-200 text-purple-900 px-2 py-0.5 rounded text-[10px]">
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Actionable Suggestions with 1-click apply */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-mono font-bold text-xs uppercase text-slate-700 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
                    Impartial Recommendations to Elevate Plan to Standard
                  </span>
                  <span className="text-[11px] text-slate-500">Click to integrate suggestions into form</span>
                </div>

                <div className="space-y-2.5">
                  {(auditResult.actionableSuggestions || []).map((sug: any, idx: number) => (
                    <div key={idx} className="bg-slate-50 border border-slate-200 rounded-xl p-3.5 flex items-start justify-between gap-4">
                      <div className="space-y-1 max-w-2xl">
                        <div className="flex items-center gap-2">
                          <span className="font-mono font-bold text-[10px] uppercase bg-slate-200 text-slate-800 px-1.5 py-0.5 rounded">
                            Field: {sug.field}
                          </span>
                          <span className="text-slate-500 text-[11px]">{sug.currentWeakness}</span>
                        </div>
                        <p className="text-slate-900 text-xs font-medium leading-relaxed">
                          {sug.recommendedImprovement}
                        </p>
                      </div>

                      <button
                        type="button"
                        onClick={() => handleApplySuggestion(sug.field, sug.recommendedImprovement)}
                        className="inline-flex items-center gap-1 px-3 py-1.5 bg-indigo-50 hover:bg-indigo-100 text-indigo-900 font-bold border border-indigo-200 rounded-lg text-xs transition-colors shrink-0"
                      >
                        <Check className="w-3.5 h-3.5 text-indigo-700" />
                        Apply
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-slate-50 border-t border-slate-200 rounded-b-2xl flex items-center justify-between">
              <span className="text-[11px] text-slate-500 font-mono">
                The POWER Standard • Civic Plan Verification Protocol
              </span>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleRunAiAudit}
                  disabled={isAuditing}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-700 bg-white border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors"
                >
                  <RefreshCw className={`w-3.5 h-3.5 ${isAuditing ? 'animate-spin' : ''}`} />
                  <span>Re-audit</span>
                </button>
                <button
                  type="button"
                  onClick={() => setIsAuditModalOpen(false)}
                  className="px-4 py-1.5 text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors shadow-xs"
                >
                  Done Reviewing
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
