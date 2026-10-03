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
      sub: 'The Public Condition',
      icon: <AlertCircle className="w-4 h-4" />,
      rule: 'Principle 1: Objective Civic Baselines',
      detail: 'Every inquiry begins with a verified public condition afflicting the citizenry, measured by authoritative empirical indicators, geographic ward distribution, and affected populations.',
      example: 'Housing affordability in DC: 46.8% of renters burdened; baseline tracked by U.S. Census Bureau ACS.'
    },
    {
      label: 'Power',
      sub: 'Constitutional Authority',
      icon: <Scale className="w-4 h-4" />,
      rule: 'Principle 2: Authority Before Blame',
      detail: 'Clearly distinguish what an office legally controls under the Constitution, Home Rule Charter, or statute from what it cannot control. Never attribute responsibility to an office lacking statutory authority.',
      example: 'The Mayor directs the police department and municipal streets, but adult felony prosecutions are constitutionally assigned to the federal U.S. Attorney.'
    },
    {
      label: 'Plan',
      sub: 'The Policy Covenant',
      icon: <FileText className="w-4 h-4" />,
      rule: 'Principle 3: Written Plan vs. Rhetoric',
      detail: 'Document the precise public plan, statute, or executive commitment made to voters without partisan grading. Distinguish broad campaign aspirations from concrete legislative drafts.',
      example: 'Commitment to deliver 36,000 housing units by 2025 classified as a quantified municipal target with statutory milestones.'
    },
    {
      label: 'Money',
      sub: 'The Public Treasury',
      icon: <DollarSign className="w-4 h-4" />,
      rule: 'Principle 4: Appropriations ≠ Cash Disbursed',
      detail: 'Disentangle proposed budget requests from legislative appropriations, agency obligations, and actual disbursements drawn from the public treasury.',
      example: 'Mayor proposed $200M for Housing Production Trust Fund; Council appropriated $250M; audited disbursements totaled $238M.'
    },
    {
      label: 'Action',
      sub: 'Administrative Execution',
      icon: <CheckCircle2 className="w-4 h-4" />,
      rule: 'Principle 5: Documented Institutional Steps',
      detail: 'Track verifiable institutional milestones: legislation introduced and enacted, executive orders signed, regulations promulgated, RFPs awarded, and public hearings held.',
      example: 'D.C. Council enacted Secure DC Omnibus (D.C. Act 25-410) 12-1; published in D.C. Register March 2024.'
    },
    {
      label: 'Result',
      sub: 'Measured Community Outcome',
      icon: <BarChart3 className="w-4 h-4" />,
      rule: 'Principle 6: Correlation ≠ Policy Causation',
      detail: 'An indicator improving or declining after an enacted law does not automatically prove policy causation. POWER publishes outcome data alongside explicit macroeconomic caveats.',
      example: 'Violent crime decreased 28% in 2024; POWER notes regional and national crime shifts occurred across jurisdictions without identical municipal legislation.'
    },
    {
      label: 'Evidence',
      sub: 'Primary Public Provenance',
      icon: <ShieldCheck className="w-4 h-4" />,
      rule: 'Principle 7: Sovereign Citizen Auditability',
      detail: 'Every factual assertion links directly to primary government records, audits, or datasets. When evidence is contested or missing, POWER records it as "Unknown" rather than speculating.',
      example: 'Direct links to D.C. Auditor reports, Annual Comprehensive Financial Reports (ACFR), and official municipal gazettes.'
    }
  ];

  return (
    <div className="bg-white border border-[#0A1D3B]/15 rounded-xl p-6 shadow-xs relative">
      {/* Top classical civic header */}
      <div className="flex items-center justify-between flex-wrap gap-3 mb-5 pb-3 border-b border-stone-200">
        <div>
          <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-[#0A1D3B] uppercase tracking-wider">
            <span className="text-[#B38A3E]">★ ★ ★</span>
            <span>The Democratic Accountability Covenant</span>
          </div>
          <h3 className="text-xl font-serif font-black text-[#0A1D3B]">
            From Public Problem to Audited Result
          </h3>
        </div>
        <div className="flex items-center gap-1.5 text-xs text-[#596273] bg-[#FAF7F0] px-3 py-1 rounded border border-stone-200">
          <Info className="w-3.5 h-3.5 text-[#2457A7]" />
          <span>Click any stage to inspect the democratic standard</span>
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
                  ? 'bg-[#0A1D3B] text-white border-[#0A1D3B] shadow-md ring-2 ring-[#B38A3E]/30'
                  : 'bg-[#FAF7F0] border-stone-200 text-[#17202A] hover:bg-stone-100 hover:border-stone-300'
              }`}
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className={`text-[10px] font-mono font-bold ${isActive ? 'text-[#B38A3E]' : 'text-[#596273]'}`}>
                  0{idx + 1}
                </span>
                <span className={isActive ? 'text-[#B38A3E]' : 'text-[#2457A7]'}>
                  {s.icon}
                </span>
              </div>
              <div className="font-serif font-bold text-xs sm:text-sm tracking-tight">{s.label}</div>
              <div className={`text-[10px] truncate ${isActive ? 'text-stone-300' : 'text-[#596273]'}`}>
                {s.sub}
              </div>
            </button>
          );
        })}
      </div>

      {/* Step Detail Card */}
      <div className="bg-[#FAF7F0] border border-stone-200 rounded-lg p-5">
        <div className="flex items-start justify-between gap-4 flex-wrap mb-2">
          <div className="flex items-center gap-2">
            <span className="bg-[#0A1D3B] text-[#FAF7F0] text-xs font-mono font-bold px-2 py-0.5 rounded border border-[#B38A3E]/40">
              {steps[activeStep].rule}
            </span>
            <span className="text-xs text-[#596273] font-mono">Stage {activeStep + 1} of 7</span>
          </div>
          <div className="flex items-center gap-1">
            <button
              type="button"
              disabled={activeStep === 0}
              onClick={() => setActiveStep(prev => Math.max(0, prev - 1))}
              className="px-2.5 py-1 text-xs border border-stone-300 rounded bg-white text-stone-700 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-stone-100"
            >
              Previous
            </button>
            <button
              type="button"
              disabled={activeStep === steps.length - 1}
              onClick={() => setActiveStep(prev => Math.min(steps.length - 1, prev + 1))}
              className="px-2.5 py-1 text-xs border border-stone-300 rounded bg-white text-stone-700 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-stone-100 font-semibold"
            >
              Next Stage
            </button>
          </div>
        </div>

        <h4 className="text-base font-serif font-bold text-[#0A1D3B] mb-1">
          Stage {activeStep + 1}: {steps[activeStep].label} — {steps[activeStep].sub}
        </h4>
        <p className="text-sm text-[#17202A] leading-relaxed mb-3">
          {steps[activeStep].detail}
        </p>

        <div className="bg-white border border-stone-200 p-3 rounded text-xs text-[#17202A] flex items-start gap-2">
          <span className="font-mono font-bold text-[#0A1D3B] uppercase shrink-0">Civic Benchmark:</span>
          <span className="italic text-[#596273]">{steps[activeStep].example}</span>
        </div>
      </div>
    </div>
  );
};
