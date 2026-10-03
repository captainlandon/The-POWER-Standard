import React, { useState } from 'react';
import { EVIDENCE_STORE } from '../data/mockData';
import { EpistemicBadge, DataStatusBadge, EvidentiaryStrengthBadge, ClaimTypeBadge, SimulatedRecordNotice } from '../components/Badge';
import { SourceType, EpistemicStatus } from '../types/power';
import { Search, Filter, ShieldCheck, FileText, ExternalLink, Edit3, Upload, BookOpen, Layers, CheckCircle2, XCircle } from 'lucide-react';

interface EvidenceViewProps {
  onOpenEvidence: (id: string) => void;
  onOpenCorrection: (recordTitle: string, recordId: string) => void;
  onOpenUpload: (recordId: string, stageName: string) => void;
}

export const EvidenceView: React.FC<EvidenceViewProps> = ({
  onOpenEvidence,
  onOpenCorrection,
  onOpenUpload
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState<string>('All');
  const [selectedStatus, setSelectedStatus] = useState<string>('All');

  const filtered = EVIDENCE_STORE.filter(ev => {
    const matchesSearch = ev.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          ev.publisher.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          ev.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          ev.supportsClaim.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesType = selectedType === 'All' || ev.sourceType === selectedType;
    const matchesStatus = selectedStatus === 'All' || ev.epistemicStatus === selectedStatus;

    return matchesSearch && matchesType && matchesStatus;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Header */}
      <div className="flex items-start justify-between flex-wrap gap-4">
        <div>
          <div className="text-xs font-mono font-bold uppercase tracking-wider text-indigo-700 mb-1">
            Provenance & Verification Archive
          </div>
          <h1 className="text-3xl sm:text-4xl font-serif font-black text-slate-900">
            Public Evidence Repository
          </h1>
          <p className="text-sm text-slate-600 max-w-3xl mt-2 leading-relaxed">
            Every material claim in The POWER Standard is anchored to primary statutes, enacted budgets, government audits, or authoritative datasets. Inspect evidentiary strength and scope limits below.
          </p>
        </div>

        <button
          type="button"
          onClick={() => onOpenUpload('repository', 'General Evidence Repository')}
          className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 rounded-lg shadow-xs transition-colors"
        >
          <Upload className="w-4 h-4" />
          <span>Submit Primary Document</span>
        </button>
      </div>

      {/* Simulated Demonstration Record Notice (Requirement 2) */}
      <SimulatedRecordNotice />

      {/* Epistemic Provenance Summary Bar */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
        <div className="bg-white p-3.5 rounded-xl border border-slate-200 space-y-1">
          <span className="font-mono text-[10px] text-slate-400 uppercase font-bold">Total Evidence Items</span>
          <div className="text-xl font-mono font-bold text-slate-900">{EVIDENCE_STORE.length}</div>
          <span className="text-[10px] text-slate-500">Indexed public records</span>
        </div>
        <div className="bg-white p-3.5 rounded-xl border border-slate-200 space-y-1">
          <span className="font-mono text-[10px] text-blue-600 uppercase font-bold">Primary Sources</span>
          <div className="text-xl font-mono font-bold text-blue-900">
            {EVIDENCE_STORE.filter(e => e.sourceType === 'Primary').length}
          </div>
          <span className="text-[10px] text-slate-500">Laws, budgets, censuses</span>
        </div>
        <div className="bg-white p-3.5 rounded-xl border border-slate-200 space-y-1">
          <span className="font-mono text-[10px] text-emerald-600 uppercase font-bold">Secondary Sources</span>
          <div className="text-xl font-mono font-bold text-emerald-900">
            {EVIDENCE_STORE.filter(e => e.sourceType === 'Secondary').length}
          </div>
          <span className="text-[10px] text-slate-500">Reporting & audits</span>
        </div>
        <div className="bg-white p-3.5 rounded-xl border border-slate-200 space-y-1">
          <span className="font-mono text-[10px] text-purple-600 uppercase font-bold">Derived Analysis</span>
          <div className="text-xl font-mono font-bold text-purple-900">
            {EVIDENCE_STORE.filter(e => e.sourceType === 'Derived').length}
          </div>
          <span className="text-[10px] text-slate-500">POWER syntheses</span>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="relative w-full sm:w-80">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search citations, publishers, or claims..."
            className="w-full pl-9 pr-3 py-1.5 text-xs bg-slate-50 border border-slate-300 rounded-lg focus:outline-hidden focus:ring-1 focus:ring-slate-900"
          />
        </div>

        <div className="flex items-center gap-3 w-full sm:w-auto flex-wrap">
          <div className="flex items-center gap-1.5 text-xs">
            <span className="font-semibold text-slate-600">Source Class:</span>
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="bg-slate-50 border border-slate-300 rounded px-2 py-1 text-slate-800 text-xs focus:outline-hidden"
            >
              <option value="All">All 3 Classes</option>
              <option value="Primary">Primary Source (First-Party Record)</option>
              <option value="Secondary">Secondary Source (Journalism / Watchdog)</option>
              <option value="Derived">Derived Analysis (POWER Synthesis)</option>
            </select>
          </div>

          <div className="flex items-center gap-1.5 text-xs">
            <span className="font-semibold text-slate-600">Epistemic State:</span>
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="bg-slate-50 border border-slate-300 rounded px-2 py-1 text-slate-800 text-xs focus:outline-hidden"
            >
              <option value="All">All States</option>
              <option value="Verified">Verified</option>
              <option value="Supported">Supported</option>
              <option value="Derived">Derived</option>
              <option value="Disputed">Disputed</option>
              <option value="Unclear">Unclear</option>
              <option value="Unknown">Unknown</option>
            </select>
          </div>
        </div>
      </div>

      {/* Evidence Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filtered.map((ev) => (
          <div
            key={ev.id}
            className="bg-white border border-slate-200 rounded-xl p-6 shadow-xs hover:shadow-md transition-all flex flex-col justify-between space-y-4"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between flex-wrap gap-2 text-xs">
                <div className="flex items-center gap-1.5 flex-wrap">
                  <span className={`px-2 py-0.5 rounded font-mono font-bold text-[11px] ${
                    ev.sourceType === 'Primary' 
                      ? 'bg-blue-100 text-blue-900 border border-blue-300' 
                      : ev.sourceType === 'Secondary'
                      ? 'bg-emerald-100 text-emerald-900 border border-emerald-300'
                      : 'bg-purple-100 text-purple-900 border border-purple-300'
                  }`}>
                    {ev.sourceType} Source
                  </span>
                  <EvidentiaryStrengthBadge strength={ev.evidentiaryStrength} />
                  <ClaimTypeBadge claimType={ev.claimType} />
                </div>
                <EpistemicBadge status={ev.epistemicStatus} />
              </div>

              <div className="pt-0.5">
                <DataStatusBadge status={ev.dataStatus} />
              </div>

              <h2 
                onClick={() => onOpenEvidence(ev.id)}
                className="text-base font-serif font-bold text-slate-900 hover:text-blue-700 cursor-pointer transition-colors leading-snug"
              >
                {ev.title}
              </h2>

              <blockquote className="bg-slate-50 p-3 rounded-lg border-l-4 border-slate-400 text-xs italic text-slate-700 font-serif leading-relaxed">
                “{ev.excerpt}”
              </blockquote>

              {/* What this proves vs does not prove preview */}
              <div className="grid grid-cols-2 gap-2 text-[11px] pt-1">
                <div className="bg-emerald-50/70 p-2.5 rounded border border-emerald-200 space-y-1">
                  <span className="font-mono font-bold text-emerald-900 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-emerald-700" />
                    Establishes ({ev.establishes.length})
                  </span>
                  <p className="text-slate-700 line-clamp-2">{ev.establishes[0]}</p>
                </div>
                <div className="bg-rose-50/70 p-2.5 rounded border border-rose-200 space-y-1">
                  <span className="font-mono font-bold text-rose-900 flex items-center gap-1">
                    <XCircle className="w-3 h-3 text-rose-700" />
                    Does NOT Prove ({ev.doesNotEstablish.length})
                  </span>
                  <p className="text-slate-700 line-clamp-2">{ev.doesNotEstablish[0]}</p>
                </div>
              </div>

              <div className="text-xs space-y-1 pt-1">
                <div className="text-slate-700">
                  <strong className="text-slate-900 font-mono text-[11px]">Claim Supported:</strong> {ev.supportsClaim}
                </div>
                <div className="text-slate-500 font-mono text-[11px]">
                  Publisher: {ev.publisher} • {ev.publicationDate}
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
              <button
                type="button"
                onClick={() => onOpenCorrection(ev.title, ev.id)}
                className="text-amber-800 hover:text-amber-950 font-semibold inline-flex items-center gap-1 text-[11px]"
              >
                <Edit3 className="w-3.5 h-3.5" />
                <span>Challenge Citation</span>
              </button>

              <button
                type="button"
                onClick={() => onOpenEvidence(ev.id)}
                className="font-bold text-blue-700 hover:text-blue-900 inline-flex items-center gap-1"
              >
                <span>Inspect Scope & Provenance</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
