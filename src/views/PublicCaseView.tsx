import React, { useMemo, useState } from 'react';
import {
  AlertTriangle,
  ArrowRight,
  Building2,
  CalendarClock,
  CheckCircle2,
  CircleDollarSign,
  ExternalLink,
  FileCheck2,
  HelpCircle,
  Landmark,
  Scale,
} from 'lucide-react';
import {
  DC_HOUSING_36000_BY_2025_CASE,
  DC_HOUSING_CASE_SOURCES,
  type PowerCaseStage,
} from '../data/cases';

interface PublicCaseViewProps {
  onNavigate: (view: string, id?: string) => void;
  onOpenEvidence: (id: string) => void;
}

const stages: Array<{ id: PowerCaseStage; description: string }> = [
  { id: 'Authority', description: 'Who can act, under which law, and with what limits?' },
  { id: 'Plan', description: 'What measurable action and geographic strategy were published?' },
  { id: 'Resource', description: 'What was proposed, reported, obligated, or spent?' },
  { id: 'Implementation', description: 'Which actions and projects actually entered delivery?' },
  { id: 'Outcome', description: 'What was reported, on what date, and under which method?' },
  { id: 'Oversight', description: 'What did independent review identify or question?' },
];

export const PublicCaseView: React.FC<PublicCaseViewProps> = ({ onNavigate, onOpenEvidence }) => {
  const [activeStage, setActiveStage] = useState<PowerCaseStage>('Authority');
  const activeSources = useMemo(
    () => DC_HOUSING_CASE_SOURCES.filter((source) => source.stage === activeStage),
    [activeStage],
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <header className="border-b border-stone-200 pb-6 space-y-4">
        <div className="flex flex-wrap items-center gap-2 text-[10px] font-mono font-bold uppercase tracking-wider">
          <span className="px-2.5 py-1 rounded bg-emerald-100 text-emerald-900 border border-emerald-300">Verified real-world case</span>
          <span className="px-2.5 py-1 rounded bg-blue-100 text-blue-900 border border-blue-300">POWER-Compiled</span>
          <span className="text-slate-500">Last reviewed November 3, 2026</span>
        </div>
        <div className="max-w-4xl">
          <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#B38A3E] mb-1">First end-to-end accountability record</div>
          <h1 className="text-3xl sm:text-5xl font-serif font-black text-[#0A1D3B]">{DC_HOUSING_36000_BY_2025_CASE.title}</h1>
          <p className="text-base text-[#596273] mt-3 leading-relaxed">{DC_HOUSING_36000_BY_2025_CASE.publicQuestion}</p>
        </div>
      </header>

      <section className="grid grid-cols-1 lg:grid-cols-3 gap-4" aria-label="Case summary">
        <div className="lg:col-span-2 bg-white border border-slate-200 rounded-2xl p-6 shadow-xs">
          <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-500">Documented commitment</div>
          <p className="font-serif text-xl font-bold text-slate-900 mt-2 leading-relaxed">{DC_HOUSING_36000_BY_2025_CASE.commitment}</p>
        </div>
        <div className="bg-[#0A1D3B] text-white border border-[#B38A3E]/50 rounded-2xl p-6 shadow-xs">
          <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#E6C36A]">Evidence register</div>
          <div className="text-4xl font-mono font-black mt-2">{DC_HOUSING_CASE_SOURCES.length}</div>
          <p className="text-xs text-slate-200 mt-1">Official sources with bounded claim-level uses</p>
        </div>
      </section>

      <section className="bg-amber-50 border border-amber-300 rounded-2xl p-6" aria-labelledby="case-finding">
        <div className="flex items-start gap-3">
          <CalendarClock className="w-6 h-6 text-amber-700 shrink-0" aria-hidden="true" />
          <div>
            <h2 id="case-finding" className="font-serif text-xl font-black text-amber-950">The dated finding</h2>
            <p className="text-sm text-amber-950 leading-relaxed mt-2">{DC_HOUSING_36000_BY_2025_CASE.reportedStatus}</p>
            <p className="text-xs text-amber-900/80 leading-relaxed mt-3 border-t border-amber-200 pt-3">{DC_HOUSING_36000_BY_2025_CASE.powerAssessment}</p>
          </div>
        </div>
      </section>

      <section className="space-y-4" aria-labelledby="case-chain">
        <div>
          <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#B38A3E]">One record, six accountable stages</div>
          <h2 id="case-chain" className="font-serif text-2xl font-black text-[#0A1D3B]">Trace the accountability chain</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2" role="tablist" aria-label="Accountability stages">
          {stages.map((stage) => {
            const count = DC_HOUSING_CASE_SOURCES.filter((source) => source.stage === stage.id).length;
            const active = activeStage === stage.id;
            return (
              <button
                key={stage.id}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => setActiveStage(stage.id)}
                className={`text-left rounded-xl border p-3 transition-colors focus:outline-hidden focus:ring-2 focus:ring-[#2457A7] ${
                  active ? 'bg-[#0A1D3B] border-[#0A1D3B] text-white' : 'bg-white border-slate-200 text-slate-800 hover:border-[#2457A7]'
                }`}
              >
                <span className={`text-[10px] font-mono font-bold uppercase ${active ? 'text-[#E6C36A]' : 'text-slate-500'}`}>{count} {count === 1 ? 'source' : 'sources'}</span>
                <span className="block font-bold text-sm mt-1">{stage.id}</span>
              </button>
            );
          })}
        </div>

        <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-xs">
          <p className="text-xs text-slate-600 mb-4">{stages.find((stage) => stage.id === activeStage)?.description}</p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {activeSources.map((source) => (
              <article key={source.id} className="border border-slate-200 rounded-xl p-4 space-y-3">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="text-[10px] font-mono font-bold uppercase text-emerald-700">{source.publisher}</div>
                    <h3 className="font-serif font-bold text-slate-900 mt-1">{source.title}</h3>
                  </div>
                  <FileCheck2 className="w-5 h-5 text-emerald-700 shrink-0" aria-hidden="true" />
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">{source.claimAsPublished}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[11px]">
                  <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-3">
                    <strong className="text-emerald-900">Establishes</strong>
                    <p className="text-emerald-900/80 mt-1">{source.establishes[0]}</p>
                  </div>
                  <div className="bg-slate-50 border border-slate-200 rounded-lg p-3">
                    <strong className="text-slate-800">Does not establish</strong>
                    <p className="text-slate-600 mt-1">{source.doesNotEstablish[0]}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 pt-1">
                  <button type="button" onClick={() => onOpenEvidence(source.id)} className="text-xs font-bold text-[#2457A7] hover:underline">Inspect evidence record</button>
                  <a href={source.urlPlaceholder} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-xs font-bold text-slate-600 hover:text-[#0A1D3B]">
                    Official source <ExternalLink className="w-3 h-3" aria-hidden="true" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3" aria-label="Connected POWER instruments">
        {[
          { view: 'plan-builder', icon: Scale, title: 'Plan Builder', text: 'Structure a promise before election day.' },
          { view: 'institutions', icon: Landmark, title: 'Power Map', text: 'Separate direct authority from dependencies.' },
          { view: 'evidence', icon: FileCheck2, title: 'Evidence Library', text: 'Inspect claims, sources, and limitations.' },
          { view: 'mandate-ledger', icon: Building2, title: 'Mandate Ledger', text: 'Follow delivery after an election.' },
        ].map((item) => {
          const Icon = item.icon;
          return (
            <button key={item.view} type="button" onClick={() => onNavigate(item.view)} className="text-left bg-white border border-slate-200 hover:border-[#2457A7] rounded-xl p-4 group focus:outline-hidden focus:ring-2 focus:ring-[#2457A7]">
              <Icon className="w-5 h-5 text-[#2457A7]" aria-hidden="true" />
              <h3 className="font-serif font-bold text-[#0A1D3B] mt-3">{item.title}</h3>
              <p className="text-xs text-slate-600 mt-1">{item.text}</p>
              <span className="inline-flex items-center gap-1 text-[11px] font-bold text-[#2457A7] mt-3">Open instrument <ArrowRight className="w-3 h-3" /></span>
            </button>
          );
        })}
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <div className="bg-white border border-slate-200 rounded-2xl p-6">
          <div className="flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-[#2457A7]" aria-hidden="true" />
            <h2 className="font-serif text-xl font-black text-[#0A1D3B]">What remains unknown</h2>
          </div>
          <ul className="mt-4 space-y-2 text-xs text-slate-700">
            {DC_HOUSING_36000_BY_2025_CASE.unknowns.map((unknown) => (
              <li key={unknown} className="flex items-start gap-2"><span className="text-[#B38A3E] font-bold">?</span><span>{unknown}</span></li>
            ))}
          </ul>
        </div>
        <div className="bg-slate-900 text-white border border-slate-800 rounded-2xl p-6">
          <div className="flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-amber-300" aria-hidden="true" />
            <h2 className="font-serif text-xl font-black">Challenge or correct this record</h2>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed mt-3">{DC_HOUSING_36000_BY_2025_CASE.correctionPath.reviewRule}</p>
          <a href={DC_HOUSING_36000_BY_2025_CASE.correctionPath.repositoryIssueUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 mt-5 px-4 py-2 rounded-lg bg-[#E6C36A] text-slate-950 text-xs font-bold hover:bg-amber-300">
            Open correction record <ExternalLink className="w-4 h-4" aria-hidden="true" />
          </a>
        </div>
      </section>
    </div>
  );
};

