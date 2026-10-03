import React, { useState } from 'react';
import { CIVIC_WIRE_FEED, POLITICAL_PARTIES, CIVIC_ACTION_ITEMS } from '../data/ecosystemData';
import { CivicWireItem, PoliticalParty, CivicActionItem } from '../types/power';
import { SimulatedRecordNotice, EpistemicBadge } from '../components/Badge';
import { 
  Radio, 
  BookOpen, 
  Send, 
  ExternalLink, 
  FileText, 
  Calendar, 
  Building2, 
  CheckCircle2, 
  Info, 
  ArrowRight,
  ShieldCheck,
  Compass,
  Vote
} from 'lucide-react';

interface CivicWireAndPartiesViewProps {
  onNavigate: (view: string, id?: string) => void;
  onOpenEvidence: (id: string) => void;
}

export const CivicWireAndPartiesView: React.FC<CivicWireAndPartiesViewProps> = ({
  onNavigate,
  onOpenEvidence
}) => {
  const [activeTab, setActiveTab] = useState<'wire' | 'parties' | 'action'>('wire');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Header */}
      <div className="flex items-start justify-between flex-wrap gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-[11px] font-mono font-bold bg-indigo-50 text-indigo-800 border border-indigo-200 mb-2">
            <Radio className="w-3.5 h-3.5 text-indigo-700" />
            Layers 8 & 9 • Civic Wire, Party Archive & Action Center
          </div>
          <h1 className="text-3xl sm:text-4xl font-serif font-black text-slate-900">
            Public Knowledge & Civic Action
          </h1>
          <p className="text-sm text-slate-600 max-w-3xl mt-1 leading-relaxed">
            Connect daily municipal developments to stable plans, inspect the neutral multi-party educational archive, and access procedurally valid paths to participate in municipal government.
          </p>
        </div>
      </div>

      {/* Simulated Demonstration Record Notice */}
      <SimulatedRecordNotice />

      {/* Tab Switcher */}
      <div className="flex items-center gap-3 border-b border-slate-200 pb-3">
        <button
          type="button"
          onClick={() => setActiveTab('wire')}
          className={`px-4 py-2 text-xs font-bold rounded-lg transition-all ${
            activeTab === 'wire'
              ? 'bg-slate-900 text-white shadow-xs'
              : 'bg-white text-slate-700 border border-slate-300 hover:bg-slate-50'
          }`}
        >
          Civic Wire Feed ({CIVIC_WIRE_FEED.length})
        </button>
        <button
          type="button"
          onClick={() => setActiveTab('parties')}
          className={`px-4 py-2 text-xs font-bold rounded-lg transition-all ${
            activeTab === 'parties'
              ? 'bg-slate-900 text-white shadow-xs'
              : 'bg-white text-slate-700 border border-slate-300 hover:bg-slate-50'
          }`}
        >
          Party Archive ({POLITICAL_PARTIES.length})
        </button>
        <button
          type="button"
          onClick={() => setActiveTab('action')}
          className={`px-4 py-2 text-xs font-bold rounded-lg transition-all ${
            activeTab === 'action'
              ? 'bg-slate-900 text-white shadow-xs'
              : 'bg-white text-slate-700 border border-slate-300 hover:bg-slate-50'
          }`}
        >
          Civic Action Center ({CIVIC_ACTION_ITEMS.length})
        </button>
      </div>

      {/* TAB 1: CIVIC WIRE */}
      {activeTab === 'wire' && (
        <div className="space-y-6">
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-xs text-slate-700 flex items-start gap-3">
            <Radio className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
            <div>
              <strong className="text-slate-900 font-bold block mb-0.5">Civic Wire Architecture (Business Plan v2.0 - Page 6):</strong>
              Civic Wire monitors daily legislative introductions, Mayoral executive orders, statutory D.C. Register notices, and official audit publications. Each daily development is anchored to stable, persistent POWER plan objects.
            </div>
          </div>

          <div className="space-y-4">
            {CIVIC_WIRE_FEED.map(item => (
              <div
                key={item.id}
                className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs hover:shadow-md transition-all space-y-3"
              >
                <div className="flex items-center justify-between text-xs flex-wrap gap-2">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[10px] font-bold bg-indigo-50 text-indigo-900 border border-indigo-200 px-2 py-0.5 rounded">
                      {item.feedSource}
                    </span>
                    <EpistemicBadge status={item.epistemicStatus} />
                  </div>
                  <span className="font-mono text-slate-400 text-[11px]">{item.timestamp}</span>
                </div>

                <h3 className="text-lg font-serif font-bold text-slate-900 leading-snug">
                  {item.title}
                </h3>

                <p className="text-xs text-slate-700 leading-relaxed font-sans">
                  {item.summary}
                </p>

                <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    {item.relatedCommitmentId && (
                      <button
                        type="button"
                        onClick={() => onNavigate('commitment-detail', item.relatedCommitmentId)}
                        className="text-blue-700 hover:text-blue-900 font-semibold inline-flex items-center gap-1 text-[11px]"
                      >
                        <FileText className="w-3.5 h-3.5" />
                        <span>Connected Plan Record</span>
                      </button>
                    )}
                  </div>

                  <a
                    href={item.officialDocUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-slate-500 hover:text-slate-900 font-mono text-[11px] inline-flex items-center gap-1"
                  >
                    <span>Official Gazette Record</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 2: PARTY ARCHIVE */}
      {activeTab === 'parties' && (
        <div className="space-y-6">
          {/* Political Symbol Policy Notice (Business Plan v2.0 - Page 16) */}
          <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-7 border border-slate-800 space-y-3">
            <div className="flex items-center gap-2 text-amber-400 font-bold text-xs uppercase font-mono tracking-wider">
              <Vote className="w-4 h-4" />
              <span>Political Symbol Policy & Nonpartisan Education Standard</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed font-sans">
              The donkey and elephant serve as familiar historical gateways to American electoral politics, but American democracy extends far beyond two parties. POWER enumerates active and historical political parties using neutral criteria. POWER branding itself remains institutionally independent of all political organizations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {POLITICAL_PARTIES.map(party => (
              <div
                key={party.id}
                className="bg-white border border-slate-200 rounded-xl p-6 shadow-xs hover:shadow-md transition-all space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs flex-wrap gap-2">
                    <span className="font-mono font-bold bg-slate-100 text-slate-800 px-2 py-0.5 rounded border border-slate-200">
                      {party.shortCode}
                    </span>
                    <span className="font-mono text-[10px] text-slate-500 font-semibold">
                      {party.ballotStatusDC}
                    </span>
                  </div>

                  <h3 className="text-xl font-serif font-bold text-slate-900">
                    {party.name}
                  </h3>

                  <div className="text-xs text-slate-500 font-mono">
                    Founding: {party.historicalFounding}
                  </div>

                  <div className="space-y-1.5 pt-1">
                    <span className="text-[10px] font-mono uppercase font-bold text-slate-500 block">
                      Core Civic Platform Principles
                    </span>
                    <ul className="space-y-1 text-xs text-slate-700 list-disc list-inside">
                      {party.coreCivicPlatform.map((point, idx) => (
                        <li key={idx} className="leading-snug">{point}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg text-xs space-y-1">
                    <strong className="text-slate-900 block font-mono text-[10px] uppercase">
                      Local D.C. Governance & Structure
                    </strong>
                    <p className="text-slate-600 leading-relaxed">{party.localDCStructure}</p>
                  </div>

                  <p className="text-xs text-slate-500 italic leading-snug">
                    {party.neutralHistoricalNote}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                  <a
                    href={party.officialWebsite}
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-700 hover:text-blue-900 font-mono text-[11px] inline-flex items-center gap-1"
                  >
                    <span>Official Party Website</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 3: CIVIC ACTION CENTER */}
      {activeTab === 'action' && (
        <div className="space-y-6">
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-xs text-slate-700 flex items-start gap-3">
            <Compass className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
            <div>
              <strong className="text-slate-900 font-bold block mb-0.5">Procedural Participation Gateway:</strong>
              Move from passive information consumption to procedurally valid democratic participation. The links below direct to formal government hearing testimony signup portals, agency rulemaking comment dockets, and official board registers.
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {CIVIC_ACTION_ITEMS.map(act => (
              <div
                key={act.id}
                className="bg-white border border-slate-200 rounded-xl p-6 shadow-xs hover:shadow-md transition-all space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs flex-wrap gap-2">
                    <span className="font-mono font-bold bg-indigo-50 text-indigo-900 px-2 py-0.5 rounded border border-indigo-200 text-[10px] uppercase">
                      {act.type}
                    </span>
                    <span className="font-mono text-slate-500 text-[11px] flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {act.deadlineOrDate}
                    </span>
                  </div>

                  <h3 className="text-lg font-serif font-bold text-slate-900 leading-snug">
                    {act.title}
                  </h3>

                  <div className="text-xs text-slate-700 font-medium">
                    Convening Authority: <strong className="text-slate-900">{act.entity}</strong>
                  </div>

                  <div className="bg-slate-50 p-3 rounded-lg border border-slate-200 text-xs space-y-1">
                    <strong className="font-mono text-[10px] uppercase font-bold text-slate-500 block">
                      Procedural Guide & Legal Requirements
                    </strong>
                    <p className="text-slate-700 leading-relaxed font-sans">
                      {act.proceduralGuide}
                    </p>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                  <a
                    href={act.actionUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 font-bold text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors shadow-xs"
                  >
                    <span>Proceed to Official Government Portal</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
