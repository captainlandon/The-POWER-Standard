import React from 'react';
import { ArrowRight, CheckCircle2, FileCheck2 } from 'lucide-react';

interface VerifiedCaseCalloutProps {
  onNavigate: (view: string, id?: string) => void;
  lens: 'plan' | 'evidence' | 'mandate';
}

const lensCopy = {
  plan: {
    eyebrow: 'Plan Builder to Public Record',
    text: 'See how one documented housing commitment moves from a stated goal through authority, resources, implementation, and dated results.',
  },
  evidence: {
    eyebrow: 'Verified Evidence Case',
    text: 'Inspect 14 official sources with explicit boundaries for what each document establishes and what it cannot prove.',
  },
  mandate: {
    eyebrow: 'Mandate to Measured Result',
    text: 'Follow the 36,000-home and 12,000-affordable-home targets without collapsing timing, methodology, and causation into one score.',
  },
};

export const VerifiedCaseCallout: React.FC<VerifiedCaseCalloutProps> = ({ onNavigate, lens }) => {
  const copy = lensCopy[lens];

  return (
    <section className="bg-[#0A1D3B] text-white rounded-2xl border border-[#B38A3E]/50 p-5 sm:p-6 shadow-sm">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-start gap-3 max-w-3xl">
          <div className="w-10 h-10 rounded-lg bg-[#B38A3E]/15 border border-[#B38A3E]/40 flex items-center justify-center shrink-0">
            <FileCheck2 className="w-5 h-5 text-[#E6C36A]" aria-hidden="true" />
          </div>
          <div>
            <div className="flex items-center gap-2 text-[10px] font-mono font-bold uppercase tracking-wider text-[#E6C36A]">
              <CheckCircle2 className="w-3.5 h-3.5" aria-hidden="true" />
              <span>{copy.eyebrow}</span>
            </div>
            <h2 className="font-serif font-black text-lg mt-1">D.C. 36,000 by 2025 Housing Case</h2>
            <p className="text-xs text-slate-200 leading-relaxed mt-1">{copy.text}</p>
          </div>
        </div>
        <button
          type="button"
          onClick={() => onNavigate('case-dc-housing')}
          className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-[#FAF7F0] text-[#0A1D3B] hover:bg-white rounded-lg text-xs font-bold border border-[#B38A3E] shrink-0 focus:outline-hidden focus:ring-2 focus:ring-[#E6C36A]"
        >
          Open verified case
          <ArrowRight className="w-4 h-4" aria-hidden="true" />
        </button>
      </div>
    </section>
  );
};

