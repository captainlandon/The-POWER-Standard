import React, { useState } from 'react';
import { EVIDENCE_STORE } from '../data/mockData';
import { EpistemicBadge, DataStatusBadge, EvidentiaryStrengthBadge, ClaimTypeBadge, SimulatedRecordNotice } from '../components/Badge';
import { SourceType, EpistemicStatus } from '../types/power';
import { 
  Search, 
  Filter, 
  ShieldCheck, 
  FileText, 
  ExternalLink, 
  Edit3, 
  Upload, 
  BookOpen, 
  Layers, 
  CheckCircle2, 
  XCircle,
  Sparkles,
  Loader2,
  X,
  AlertTriangle,
  Scale,
  Check
} from 'lucide-react';

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

  // AI Claim Analyzer State
  const [customClaimText, setCustomClaimText] = useState('Our administration reduced violent crime by 22% exclusively through our new targeted hot-spot policing initiative.');
  const [customContext, setCustomContext] = useState('Mayoral Executive Press Release & Campaign Briefing');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<any | null>(null);
  const [analysisError, setAnalysisError] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleRunClaimAnalysis = async (claimToAnalyze?: string, contextToAnalyze?: string) => {
    const text = claimToAnalyze || customClaimText;
    const ctx = contextToAnalyze || customContext;
    if (!text.trim()) return;

    setIsAnalyzing(true);
    setAnalysisError(null);
    try {
      const res = await fetch('/api/ai/analyze-evidence', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          claimText: text,
          context: ctx,
          sourceName: 'Public Statement Archive',
          publisher: 'The POWER Standard Provenance Auditor',
        }),
      });
      const data = await res.json();
      if (data.analysis) {
        setAnalysisResult(data.analysis);
        setIsModalOpen(true);
      } else {
        setAnalysisError('Analysis could not be generated. Please try again.');
      }
    } catch (e) {
      setAnalysisError((e as Error).message);
    } finally {
      setIsAnalyzing(false);
    }
  };

  const handleCardAnalyze = (ev: typeof EVIDENCE_STORE[0]) => {
    setCustomClaimText(ev.supportsClaim);
    setCustomContext(`Documented in: ${ev.title} (${ev.publisher})`);
    handleRunClaimAnalysis(ev.supportsClaim, `Documented in: ${ev.title} (${ev.publisher})`);
  };

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
      <div className="flex items-start justify-between flex-wrap gap-4 border-b border-stone-200 pb-4">
        <div>
          <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#0A1D3B] mb-1 flex items-center gap-1.5">
            <span className="text-[#B38A3E]">★ ★ ★</span>
            <span>Freedom of Information & Civic Provenance · National Public Ledger</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-serif font-black text-[#0A1D3B]">
            Public Evidence & Provenance Repository
          </h1>
          <p className="text-sm text-[#596273] max-w-3xl mt-2 leading-relaxed">
            In a self-governing democracy, an assertion without public documentation is merely political rhetoric. Every record in The POWER Standard is anchored to primary statutes, enacted legislative budgets, government audits, or official census microdata. Inspect evidentiary weight, legal limits, and epistemic classifications below.
          </p>
        </div>

        <button
          type="button"
          onClick={() => onOpenUpload('repository', 'General Evidence Repository')}
          className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-white bg-[#0A1D3B] hover:bg-[#1B4D89] rounded-lg shadow-xs transition-colors border border-[#B38A3E]/40"
        >
          <Upload className="w-4 h-4 text-[#B38A3E]" />
          <span>Deposit Primary Record</span>
        </button>
      </div>

      {/* Simulated Demonstration Record Notice (Requirement 2) */}
      <SimulatedRecordNotice />

      {/* AI Evidentiary Claim Deconstructor & Provenance Validator (The POWER Standard v2.0) */}
      <div className="bg-slate-900 text-white rounded-2xl p-6 border border-slate-800 shadow-md space-y-4">
        <div className="flex items-start justify-between flex-wrap gap-4">
          <div className="space-y-1 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-amber-400 text-slate-950 uppercase">
                AI Claim Deconstructor
              </span>
              <span className="text-xs text-slate-400 font-mono">
                Model: Gemini Impartial Provenance Validator
              </span>
            </div>
            <h2 className="text-lg font-serif font-bold text-white">
              Deconstruct Any Public Policy Claim or Official Statement
            </h2>
            <p className="text-xs text-slate-300 leading-relaxed">
              Paste any politician’s press release quote, campaign promise, or legislative assertion. The engine dissects claim type, causal confidence, confounding variables, and generates an independent FOIA/verification checklist.
            </p>
          </div>

          <div className="flex items-center gap-2 flex-wrap text-xs">
            <span className="text-slate-400 font-mono text-[11px]">Quick Samples:</span>
            <button
              type="button"
              onClick={() => {
                setCustomClaimText('Our $100M Housing Production Trust Fund appropriation directly created 3,200 deeply affordable family apartments.');
                setCustomContext('Mayoral Budget Presentation');
              }}
              className="px-2.5 py-1 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white rounded border border-slate-700 text-[11px] transition-colors"
            >
              Housing Fund
            </button>
            <button
              type="button"
              onClick={() => {
                setCustomClaimText('Homicides declined 24% because we deployed 40 community violence interrupters across high-incident corridors.');
                setCustomContext('ONSE Annual Oversight Hearing');
              }}
              className="px-2.5 py-1 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white rounded border border-slate-700 text-[11px] transition-colors"
            >
              Crime Reduction
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <div className="md:col-span-2">
            <textarea
              rows={2}
              value={customClaimText}
              onChange={(e) => setCustomClaimText(e.target.value)}
              placeholder="Paste public official quote or claim..."
              className="w-full bg-slate-950 border border-slate-700 rounded-xl p-3 text-xs text-white placeholder-slate-500 focus:outline-hidden focus:ring-1 focus:ring-amber-400 font-mono leading-relaxed"
            />
          </div>
          <div className="flex flex-col justify-between gap-2">
            <input
              type="text"
              value={customContext}
              onChange={(e) => setCustomContext(e.target.value)}
              placeholder="Context / Speaker / Document"
              className="w-full bg-slate-950 border border-slate-700 rounded-xl p-2.5 text-xs text-white placeholder-slate-500 focus:outline-hidden focus:ring-1 focus:ring-amber-400"
            />
            <button
              type="button"
              onClick={() => handleRunClaimAnalysis()}
              disabled={isAnalyzing}
              className="w-full py-2 px-4 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl text-xs flex items-center justify-center gap-2 shadow-sm transition-all disabled:opacity-50"
            >
              {isAnalyzing ? <Loader2 className="w-4 h-4 animate-spin" /> : <Sparkles className="w-4 h-4 text-amber-300" />}
              <span>{isAnalyzing ? 'Deconstructing Claim...' : 'Deconstruct Claim Provenance'}</span>
            </button>
          </div>
        </div>

        {analysisError && (
          <div className="p-3 bg-rose-950/80 border border-rose-800 text-rose-200 text-xs rounded-xl flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 text-rose-400 shrink-0" />
            <span>{analysisError}</span>
          </div>
        )}
      </div>

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

            <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs flex-wrap gap-2">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => onOpenCorrection(ev.title, ev.id)}
                  className="text-amber-800 hover:text-amber-950 font-semibold inline-flex items-center gap-1 text-[11px]"
                >
                  <Edit3 className="w-3.5 h-3.5" />
                  <span>Challenge</span>
                </button>

                <button
                  type="button"
                  onClick={() => handleCardAnalyze(ev)}
                  className="text-indigo-700 hover:text-indigo-900 font-semibold inline-flex items-center gap-1 text-[11px] bg-indigo-50 hover:bg-indigo-100 px-2 py-0.5 rounded border border-indigo-200 transition-colors"
                >
                  <Sparkles className="w-3 h-3 text-indigo-600" />
                  <span>AI Claim Audit</span>
                </button>
              </div>

              <button
                type="button"
                onClick={() => onOpenEvidence(ev.id)}
                className="font-bold text-blue-700 hover:text-blue-900 inline-flex items-center gap-1 text-[11px]"
              >
                <span>Inspect Scope & Provenance</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* AI Claim Deconstruction Analysis Modal */}
      {isModalOpen && analysisResult && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-150">
          <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] flex flex-col shadow-2xl border border-slate-200">
            {/* Modal Header */}
            <div className="p-6 border-b border-slate-200 bg-slate-900 text-white rounded-t-2xl flex items-start justify-between">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-amber-400 text-slate-950 uppercase">
                    POWER Standard Provenance Audit
                  </span>
                  <span className="text-xs text-slate-400 font-mono">
                    Gemini Claim Deconstructor
                  </span>
                </div>
                <h3 className="text-lg font-serif font-bold text-white">
                  Empirical Claim Provenance & Verification Report
                </h3>
              </div>

              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 overflow-y-auto space-y-6 text-xs text-slate-800">
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-2">
                <span className="text-[10px] font-mono font-bold uppercase text-slate-500">Claim Evaluated</span>
                <p className="text-sm font-serif italic text-slate-900 leading-snug">
                  “{customClaimText}”
                </p>
                <div className="text-[11px] text-slate-500 font-mono">
                  Context: {customContext}
                </div>
              </div>

              {/* Taxonomy Classifications */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="bg-blue-50/70 border border-blue-200 rounded-xl p-3.5 space-y-1">
                  <span className="text-[10px] font-mono font-bold uppercase text-blue-800">Claim Type</span>
                  <div className="font-bold text-blue-950 text-sm">
                    {analysisResult.claimType || 'Causal Attribution'}
                  </div>
                  <span className="text-[10px] text-blue-900/80">Structural classification</span>
                </div>

                <div className="bg-emerald-50/70 border border-emerald-200 rounded-xl p-3.5 space-y-1">
                  <span className="text-[10px] font-mono font-bold uppercase text-emerald-800">Evidentiary Strength</span>
                  <div className="font-bold text-emerald-950 text-sm">
                    {analysisResult.evidentiaryStrength || 'Corroborative'}
                  </div>
                  <span className="text-[10px] text-emerald-900/80">Empirical certainty</span>
                </div>

                <div className="bg-purple-50/70 border border-purple-200 rounded-xl p-3.5 space-y-1">
                  <span className="text-[10px] font-mono font-bold uppercase text-purple-800">Source Class</span>
                  <div className="font-bold text-purple-950 text-sm">
                    {analysisResult.sourceClassification || 'Secondary Source'}
                  </div>
                  <span className="text-[10px] text-purple-900/80">Statutory provenance</span>
                </div>
              </div>

              {/* Epistemic Caveats */}
              <div className="p-4 bg-amber-50/80 border border-amber-200 rounded-xl space-y-1.5">
                <div className="font-mono font-bold text-xs uppercase text-amber-900 flex items-center gap-1.5">
                  <AlertTriangle className="w-3.5 h-3.5 text-amber-700" />
                  POWER Standard Epistemic Caveat & Confounding Variables
                </div>
                <p className="text-amber-950 text-xs leading-relaxed">
                  {analysisResult.epistemicCaveats}
                </p>
              </div>

              {/* Proves vs Does NOT Prove */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-emerald-50/70 border border-emerald-200 rounded-xl p-4 space-y-2">
                  <div className="font-mono font-bold text-[11px] uppercase text-emerald-900 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                    What This Claim Actually Establishes
                  </div>
                  <ul className="space-y-1.5 text-slate-700">
                    {(analysisResult.establishes || []).map((item: string, i: number) => (
                      <li key={i} className="flex items-start gap-1.5 text-[11px] leading-relaxed">
                        <span className="text-emerald-600 font-bold">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-rose-50/70 border border-rose-200 rounded-xl p-4 space-y-2">
                  <div className="font-mono font-bold text-[11px] uppercase text-rose-900 flex items-center gap-1.5">
                    <XCircle className="w-4 h-4 text-rose-700" />
                    What This Claim CANNOT Prove (Epistemic Leap)
                  </div>
                  <ul className="space-y-1.5 text-slate-700">
                    {(analysisResult.doesNotEstablish || []).map((item: string, i: number) => (
                      <li key={i} className="flex items-start gap-1.5 text-[11px] leading-relaxed">
                        <span className="text-rose-600 font-bold">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Verification Checklist */}
              <div className="space-y-2">
                <div className="font-mono font-bold text-xs uppercase text-slate-800 flex items-center gap-1.5">
                  <Scale className="w-3.5 h-3.5 text-indigo-700" />
                  Independent Public Audit Verification Checklist
                </div>
                <p className="text-[11px] text-slate-500">
                  To independently corroborate this statement, the public or press must inspect these specific primary records:
                </p>
                <div className="space-y-2">
                  {(analysisResult.verificationChecklist || []).map((doc: string, i: number) => (
                    <div key={i} className="flex items-start gap-2 bg-slate-50 border border-slate-200 rounded-lg p-3 text-slate-800 text-xs">
                      <div className="w-5 h-5 rounded-full bg-indigo-100 text-indigo-900 font-mono text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                        {i + 1}
                      </div>
                      <div className="leading-relaxed">{doc}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-slate-50 border-t border-slate-200 rounded-b-2xl flex items-center justify-between">
              <span className="text-[11px] text-slate-500 font-mono">
                The POWER Standard • Layer 7 Evidence Framework
              </span>
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-1.5 text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors shadow-xs"
              >
                Close Audit Report
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
