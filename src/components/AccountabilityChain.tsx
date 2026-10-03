import React, { useState } from 'react';
import { 
  AlertCircle, 
  Scale, 
  FileText, 
  DollarSign, 
  CheckCircle2, 
  BarChart3, 
  ShieldCheck,
  ChevronRight,
  Info
} from 'lucide-react';

export const AccountabilityChain: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps = [
    {
      label: 'Problem',
      sub: 'What is happening?',
      icon: <AlertCircle className="w-4 h-4" />,
      rule: 'Rule 1: Objective Baselines',
      detail: 'Every investigation begins with a verifiable public condition, measured by authoritative statistical indicators, geography, and affected populations.',
      example: 'Housing affordability in DC: 46.8% of renters burdened; baseline tracked by U.S. Census Bureau ACS.'
    },
    {
      label: 'Authority',
      sub: 'Who has legal power?',
      icon: <Scale className="w-4 h-4" />,
      rule: 'Rule 2: Authority Before Accountability',
      detail: 'Clearly distinguish what an official says they want from what their office has statutory authority to execute. Do not blame an actor for outcomes outside their legal jurisdiction.',
      example: 'DC Mayor directs police & roads, but cannot prosecute adult felonies (handled by federal U.S. Attorney).'
    },
    {
      label: 'Commitment',
      sub: 'What was stated or promised?',
      icon: <FileText className="w-4 h-4" />,
      rule: 'Rule 3: Separate Statement from Action',
      detail: 'Document exact public statements, campaign pledges, and executive announcements without partisan grading or ideological labels. Distinguish general aspirations from concrete action plans.',
      example: 'Commitment to deliver 36,000 housing units by 2025 classified as "Specific implementation plan".'
    },
    {
      label: 'Resources',
      sub: 'Was funding allocated?',
      icon: <DollarSign className="w-4 h-4" />,
      rule: 'Rule 4: Never Conflate Budgets',
      detail: 'Disentangle proposed budgets from authorized budgets, enacted appropriations, and actual dollars spent. A budget proposal is not money disbursed.',
      example: 'Mayor proposed $200M for HPTF; Council appropriated $250M; actual drawn expenditures were $238M.'
    },
    {
      label: 'Implementation',
      sub: 'What actions were taken?',
      icon: <CheckCircle2 className="w-4 h-4" />,
      rule: 'Rule 5: Documented Institutional Steps',
      detail: 'Track verifiable milestones: bills introduced/enacted, executive orders signed, regulations adopted, contracts awarded, audits conducted.',
      example: 'Council enacted Secure DC Omnibus (D.C. Law 25-175) 12-1; signed into law March 2024.'
    },
    {
      label: 'Outcome',
      sub: 'What happened afterward?',
      icon: <BarChart3 className="w-4 h-4" />,
      rule: 'Rule 6: Implementation ≠ Causation',
      detail: 'An indicator shifting after a policy intervention does NOT mathematically prove causation. POWER displays measured outcomes alongside explicit causal caveats and methodological limits.',
      example: 'Violent crime decreased 28% in 2024; POWER notes crime dropped nationwide across cities without identical legislation.'
    },
    {
      label: 'Evidence',
      sub: 'What is the provenance?',
      icon: <ShieldCheck className="w-4 h-4" />,
      rule: 'Rule 7: Auditability & Unknowns',
      detail: 'Every factual assertion links to primary government records, audits, or datasets. When evidence is incomplete or absent, POWER marks it as "Unknown" rather than guessing.',
      example: 'Epistemic badges: Verified, Supported, Derived, Disputed, Unclear, Unknown.'
    }
  ];

  return (
    <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-xs">
      <div className="flex items-center justify-between flex-wrap gap-2 mb-4">
        <div>
          <span className="text-xs font-mono font-bold text-indigo-700 uppercase tracking-wider">
            The POWER Accountability Architecture
          </span>
          <h3 className="text-lg font-serif font-bold text-slate-900">
            The 7-Stage Chain of Public Record Verification
          </h3>
        </div>
        <div className="flex items-center gap-1.5 text-xs text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
          <Info className="w-3.5 h-3.5 text-slate-600" />
          <span>Click any phase to inspect the verification standard</span>
        </div>
      </div>

      {/* Progress / Step navigation buttons */}
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2 mb-6">
        {steps.map((s, idx) => {
          const isActive = activeStep === idx;
          return (
            <button
              key={idx}
              type="button"
              onClick={() => setActiveStep(idx)}
              className={`p-3 rounded-lg border text-left transition-all relative ${
                isActive
                  ? 'bg-slate-900 text-white border-slate-900 shadow-md ring-2 ring-indigo-500/20'
                  : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100 hover:border-slate-300'
              }`}
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className={`text-[10px] font-mono font-bold ${isActive ? 'text-indigo-300' : 'text-slate-400'}`}>
                  0{idx + 1}
                </span>
                <span className={isActive ? 'text-indigo-300' : 'text-slate-500'}>
                  {s.icon}
                </span>
              </div>
              <div className="font-bold text-xs sm:text-sm tracking-tight">{s.label}</div>
              <div className={`text-[10px] truncate ${isActive ? 'text-slate-300' : 'text-slate-500'}`}>
                {s.sub}
              </div>
            </button>
          );
        })}
      </div>

      {/* Step Detail Card */}
      <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
        <div className="flex items-start justify-between gap-4 flex-wrap mb-2">
          <div className="flex items-center gap-2">
            <span className="bg-indigo-100 text-indigo-800 text-xs font-mono font-bold px-2 py-0.5 rounded border border-indigo-200">
              {steps[activeStep].rule}
            </span>
            <span className="text-xs text-slate-500">Stage {activeStep + 1} of 7</span>
          </div>
          <div className="flex items-center gap-1">
            <button
              type="button"
              disabled={activeStep === 0}
              onClick={() => setActiveStep(prev => Math.max(0, prev - 1))}
              className="px-2.5 py-1 text-xs border border-slate-300 rounded bg-white text-slate-600 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-100"
            >
              Previous
            </button>
            <button
              type="button"
              disabled={activeStep === steps.length - 1}
              onClick={() => setActiveStep(prev => Math.min(steps.length - 1, prev + 1))}
              className="px-2.5 py-1 text-xs border border-slate-300 rounded bg-white text-slate-600 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-100"
            >
              Next Stage
            </button>
          </div>
        </div>

        <h4 className="text-base font-serif font-bold text-slate-900 mb-1">
          Stage {activeStep + 1}: {steps[activeStep].label} — {steps[activeStep].sub}
        </h4>
        <p className="text-sm text-slate-700 leading-relaxed mb-3">
          {steps[activeStep].detail}
        </p>

        <div className="bg-white border border-slate-200 p-3 rounded text-xs text-slate-800 flex items-start gap-2">
          <span className="font-mono font-bold text-indigo-700 uppercase shrink-0">In Practice:</span>
          <span className="italic text-slate-600">{steps[activeStep].example}</span>
        </div>
      </div>
    </div>
  );
};
