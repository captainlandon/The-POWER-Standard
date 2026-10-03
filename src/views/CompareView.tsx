import React, { useState } from 'react';
import { PUBLIC_ACTORS, COMMITMENTS, INSTITUTIONS, PUBLIC_PROBLEMS } from '../data/mockData';
import { 
  Scale, 
  CheckCircle2, 
  AlertTriangle, 
  ArrowRight, 
  UserCheck, 
  FileText, 
  Building2, 
  HelpCircle,
  Sparkles,
  Loader2,
  X,
  RefreshCw,
  Layers,
  ShieldAlert
} from 'lucide-react';
import { StatusBadge, SpecificityBadge, DataStatusBadge, SimulatedRecordNotice } from '../components/Badge';

interface CompareViewProps {
  onNavigate: (view: string, id?: string) => void;
  onOpenEvidence: (id: string) => void;
}

export const CompareView: React.FC<CompareViewProps> = ({ onNavigate, onOpenEvidence }) => {
  const [compareMode, setCompareMode] = useState<'actors' | 'commitments'>('commitments');
  const [selectedCommitmentA, setSelectedCommitmentA] = useState<string>(COMMITMENTS[0].id);
  const [selectedCommitmentB, setSelectedCommitmentB] = useState<string>(COMMITMENTS[1].id);
  const [selectedActorA, setSelectedActorA] = useState<string>(PUBLIC_ACTORS[0].id);
  const [selectedActorB, setSelectedActorB] = useState<string>(PUBLIC_ACTORS[1].id);

  // AI Tradeoff Simulation State
  const [isSimulating, setIsSimulating] = useState(false);
  const [simResult, setSimResult] = useState<any | null>(null);
  const [simError, setSimError] = useState<string | null>(null);
  const [isSimModalOpen, setIsSimModalOpen] = useState(false);

  const commA = COMMITMENTS.find(c => c.id === selectedCommitmentA) || COMMITMENTS[0];
  const commB = COMMITMENTS.find(c => c.id === selectedCommitmentB) || COMMITMENTS[1];

  const actorA = PUBLIC_ACTORS.find(a => a.id === selectedActorA) || PUBLIC_ACTORS[0];
  const actorB = PUBLIC_ACTORS.find(a => a.id === selectedActorB) || PUBLIC_ACTORS[1];

  const handleRunTradeoffAnalysis = async () => {
    setIsSimulating(true);
    setSimError(null);
    try {
      const payload = compareMode === 'commitments' 
        ? {
            proposalA: { 
              title: commA.title, 
              mechanism: commA.originalWordingOrParaphrase, 
              resources: commA.resources?.map(r => `${r.label}: $${r.appropriatedAmount || r.proposedAmount || 0}`).join(', ') || 'General revenue', 
              status: commA.status 
            },
            proposalB: { 
              title: commB.title, 
              mechanism: commB.originalWordingOrParaphrase, 
              resources: commB.resources?.map(r => `${r.label}: $${r.appropriatedAmount || r.proposedAmount || 0}`).join(', ') || 'General revenue', 
              status: commB.status 
            },
            problemContext: 'Comparative Civic Governance & Public Policy Tradeoffs in Washington, DC',
          }
        : {
            proposalA: { 
              title: `${actorA.name} (${actorA.office})`, 
              record: `Implementation records: ${actorA.implementationRecordsCount}`, 
              bio: actorA.relevantAuthoritySummary 
            },
            proposalB: { 
              title: `${actorB.name} (${actorB.office})`, 
              record: `Implementation records: ${actorB.implementationRecordsCount}`, 
              bio: actorB.relevantAuthoritySummary 
            },
            problemContext: 'Comparative Public Office Performance & Jurisdictional Responsibility',
          };

      const res = await fetch('/api/ai/simulate-tradeoffs', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (data.comparison) {
        setSimResult(data.comparison);
        setIsSimModalOpen(true);
      } else {
        setSimError('Tradeoff analysis could not be generated. Please try again.');
      }
    } catch (e) {
      setSimError((e as Error).message);
    } finally {
      setIsSimulating(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Header */}
      <div className="border-b border-stone-200 pb-4">
        <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#0A1D3B] mb-1 flex items-center gap-1.5">
          <span className="text-[#B38A3E]">★ ★ ★</span>
          <span>Deliberative Democracy · Nonpartisan Comparative Ledger</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-serif font-black text-[#0A1D3B]">
          Compare Public Policies & Records Side-by-Side
        </h1>
        <p className="text-sm text-[#596273] max-w-3xl mt-2 leading-relaxed font-sans">
          In a constitutional republic, sovereign citizens inspect policy tradeoffs, statutory feasibility, and budgetary realism. In strict accordance with The POWER Standard, this tool never computes partisan grades, assigns editorial winner badges, or tells the voter whom to support.
        </p>
      </div>

      {/* Nonpartisan Standard Notice */}
      <div className="bg-[#FAF7F0] border border-stone-300 rounded-xl p-4 text-xs text-[#17202A] flex items-start gap-3">
        <Scale className="w-5 h-5 text-[#0A1D3B] shrink-0 mt-0.5" />
        <div>
          <strong className="text-[#0A1D3B] font-mono uppercase text-[11px] block mb-0.5 tracking-wide">
            The Sovereign Citizen Guarantee (Strict Non-Ranking Standard):
          </strong>
          <p className="leading-relaxed">
            POWER organizes objective empirical dimensions: statutory authority, plan specificity, resource breakdowns, and longitudinal outcomes. We never rank or endorse candidates. The voter is the sovereign auditor.
          </p>
        </div>
      </div>

      {/* Simulated Demonstration Record Notice (Requirement 2) */}
      <SimulatedRecordNotice />

      {/* Mode Selector */}
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={() => setCompareMode('commitments')}
          className={`px-4 py-2 text-xs font-bold rounded-lg border transition-all ${
            compareMode === 'commitments'
              ? 'bg-slate-900 text-white border-slate-900 shadow-sm'
              : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-50'
          }`}
        >
          Compare Commitments & Action Plans
        </button>
        <button
          type="button"
          onClick={() => setCompareMode('actors')}
          className={`px-4 py-2 text-xs font-bold rounded-lg border transition-all ${
            compareMode === 'actors'
              ? 'bg-slate-900 text-white border-slate-900 shadow-sm'
              : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-50'
          }`}
        >
          Compare Public Actors & Authorities
        </button>
      </div>

      {/* COMPARE COMMITMENTS MODE */}
      {compareMode === 'commitments' && (
        <div className="space-y-6">
          {/* Selectors */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-5 rounded-xl border border-slate-200 shadow-xs">
            <div>
              <label className="block text-xs font-bold font-mono text-slate-500 uppercase mb-1">
                Record A: Select Commitment
              </label>
              <select
                value={selectedCommitmentA}
                onChange={(e) => setSelectedCommitmentA(e.target.value)}
                className="w-full bg-slate-50 border border-slate-300 rounded p-2 text-xs text-slate-900 font-semibold focus:outline-hidden"
              >
                {COMMITMENTS.map(c => (
                  <option key={c.id} value={c.id}>{c.title}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold font-mono text-slate-500 uppercase mb-1">
                Record B: Select Commitment
              </label>
              <select
                value={selectedCommitmentB}
                onChange={(e) => setSelectedCommitmentB(e.target.value)}
                className="w-full bg-slate-50 border border-slate-300 rounded p-2 text-xs text-slate-900 font-semibold focus:outline-hidden"
              >
                {COMMITMENTS.map(c => (
                  <option key={c.id} value={c.id}>{c.title}</option>
                ))}
              </select>
            </div>
          </div>

          {/* AI Nonpartisan Policy Tradeoff & Equity Stress-Test Trigger */}
          <div className="bg-slate-900 text-white rounded-xl p-4 flex items-center justify-between flex-wrap gap-4 border border-slate-800 shadow-sm">
            <div className="space-y-0.5 max-w-xl">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-amber-400 text-slate-950 uppercase">
                  Impartial AI Policy Stress-Test
                </span>
                <span className="text-xs text-slate-400 font-mono">Model: Gemini Nonpartisan Tradeoff Engine</span>
              </div>
              <p className="text-xs text-slate-300">
                Simulate fiscal opportunity costs, unintended consequences, and distributional equity across the 8 Flourishing Domains without ideological bias.
              </p>
            </div>

            <button
              type="button"
              onClick={handleRunTradeoffAnalysis}
              disabled={isSimulating}
              className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-lg text-xs flex items-center gap-2 shadow-sm transition-all disabled:opacity-50"
            >
              {isSimulating ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Sparkles className="w-3.5 h-3.5 text-amber-300" />}
              <span>{isSimulating ? 'Evaluating Tradeoffs...' : 'Stress-Test Policy Tradeoffs (Gemini)'}</span>
            </button>
          </div>

          {/* Comparison Table / Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Column A */}
            <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-xs space-y-5">
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs flex-wrap gap-2">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-indigo-700 font-bold bg-indigo-50 px-2 py-0.5 rounded border border-indigo-200">
                      Record A
                    </span>
                    <DataStatusBadge status={commA.dataStatus} />
                  </div>
                  <StatusBadge status={commA.status} />
                </div>
                <h3 className="text-xl font-serif font-bold text-slate-900">{commA.title}</h3>
                <div className="text-xs text-slate-500 font-mono">Date: {commA.date}</div>
              </div>

              {/* Dimension: Verbatim Statement */}
              <div className="space-y-1 text-xs">
                <span className="font-mono text-[10px] uppercase font-bold text-slate-400">Verbatim Statement</span>
                <blockquote className="bg-slate-50 p-3 rounded border-l-4 border-slate-400 italic text-slate-700">
                  “{commA.originalWordingOrParaphrase}”
                </blockquote>
              </div>

              {/* Dimension: Specificity Level */}
              <div className="space-y-1 text-xs">
                <span className="font-mono text-[10px] uppercase font-bold text-slate-400">Plan Specificity</span>
                <div><SpecificityBadge level={commA.specificityLevel} /></div>
              </div>

              {/* Dimension: Unilateral Authority Check */}
              <div className="space-y-1 text-xs">
                <span className="font-mono text-[10px] uppercase font-bold text-slate-400">Direct Execution Power</span>
                <div className={`p-2.5 rounded font-mono font-semibold text-xs ${
                  commA.authorityCheck.canActorDirectlyExecute ? 'bg-emerald-50 text-emerald-900 border border-emerald-200' : 'bg-amber-50 text-amber-900 border border-amber-200'
                }`}>
                  {commA.authorityCheck.canActorDirectlyExecute ? 'Direct Authority' : 'Requires Other Institutions'}
                </div>
              </div>

              {/* Dimension: Budget Tracking */}
              <div className="space-y-1 text-xs">
                <span className="font-mono text-[10px] uppercase font-bold text-slate-400">Resource Tracking</span>
                <div className="bg-slate-50 p-3 rounded border border-slate-200 space-y-1">
                  <div>Appropriated: <strong className="font-mono">${((commA.resources[0]?.appropriatedAmount || 0) / 1000000).toFixed(1)}M</strong></div>
                  <div>Actually Spent: <strong className="font-mono">${((commA.resources[0]?.spentAmount || 0) / 1000000).toFixed(1)}M</strong></div>
                </div>
              </div>

              {/* Dimension: Implementation Milestones */}
              <div className="space-y-1 text-xs">
                <span className="font-mono text-[10px] uppercase font-bold text-slate-400">Documented Actions</span>
                <div className="font-mono font-bold text-slate-900">{commA.implementationEvents.length} recorded events</div>
              </div>

              {/* Dimension: Unknowns Count */}
              <div className="space-y-1 text-xs">
                <span className="font-mono text-[10px] uppercase font-bold text-slate-400">Documented Unknowns</span>
                <div className="text-amber-800 font-mono font-bold">{commA.unknowns.length} unresolved gaps</div>
              </div>

              <div className="pt-3 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => onNavigate('commitment-detail', commA.id)}
                  className="font-bold text-blue-700 hover:text-blue-900 text-xs inline-flex items-center gap-1"
                >
                  <span>Open Full Record A</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Column B */}
            <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-xs space-y-5">
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs flex-wrap gap-2">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-purple-700 font-bold bg-purple-50 px-2 py-0.5 rounded border border-purple-200">
                      Record B
                    </span>
                    <DataStatusBadge status={commB.dataStatus} />
                  </div>
                  <StatusBadge status={commB.status} />
                </div>
                <h3 className="text-xl font-serif font-bold text-slate-900">{commB.title}</h3>
                <div className="text-xs text-slate-500 font-mono">Date: {commB.date}</div>
              </div>

              {/* Dimension: Verbatim Statement */}
              <div className="space-y-1 text-xs">
                <span className="font-mono text-[10px] uppercase font-bold text-slate-400">Verbatim Statement</span>
                <blockquote className="bg-slate-50 p-3 rounded border-l-4 border-slate-400 italic text-slate-700">
                  “{commB.originalWordingOrParaphrase}”
                </blockquote>
              </div>

              {/* Dimension: Specificity Level */}
              <div className="space-y-1 text-xs">
                <span className="font-mono text-[10px] uppercase font-bold text-slate-400">Plan Specificity</span>
                <div><SpecificityBadge level={commB.specificityLevel} /></div>
              </div>

              {/* Dimension: Unilateral Authority Check */}
              <div className="space-y-1 text-xs">
                <span className="font-mono text-[10px] uppercase font-bold text-slate-400">Direct Execution Power</span>
                <div className={`p-2.5 rounded font-mono font-semibold text-xs ${
                  commB.authorityCheck.canActorDirectlyExecute ? 'bg-emerald-50 text-emerald-900 border border-emerald-200' : 'bg-amber-50 text-amber-900 border border-amber-200'
                }`}>
                  {commB.authorityCheck.canActorDirectlyExecute ? 'Direct Authority' : 'Requires Other Institutions'}
                </div>
              </div>

              {/* Dimension: Budget Tracking */}
              <div className="space-y-1 text-xs">
                <span className="font-mono text-[10px] uppercase font-bold text-slate-400">Resource Tracking</span>
                <div className="bg-slate-50 p-3 rounded border border-slate-200 space-y-1">
                  <div>Appropriated: <strong className="font-mono">${((commB.resources[0]?.appropriatedAmount || 0) / 1000000).toFixed(1)}M</strong></div>
                  <div>Actually Spent: <strong className="font-mono">${((commB.resources[0]?.spentAmount || 0) / 1000000).toFixed(1)}M</strong></div>
                </div>
              </div>

              {/* Dimension: Implementation Milestones */}
              <div className="space-y-1 text-xs">
                <span className="font-mono text-[10px] uppercase font-bold text-slate-400">Documented Actions</span>
                <div className="font-mono font-bold text-slate-900">{commB.implementationEvents.length} recorded events</div>
              </div>

              {/* Dimension: Unknowns Count */}
              <div className="space-y-1 text-xs">
                <span className="font-mono text-[10px] uppercase font-bold text-slate-400">Documented Unknowns</span>
                <div className="text-amber-800 font-mono font-bold">{commB.unknowns.length} unresolved gaps</div>
              </div>

              <div className="pt-3 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => onNavigate('commitment-detail', commB.id)}
                  className="font-bold text-blue-700 hover:text-blue-900 text-xs inline-flex items-center gap-1"
                >
                  <span>Open Full Record B</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* COMPARE ACTORS MODE */}
      {compareMode === 'actors' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-5 rounded-xl border border-slate-200 shadow-xs">
            <div>
              <label className="block text-xs font-bold font-mono text-slate-500 uppercase mb-1">
                Official A
              </label>
              <select
                value={selectedActorA}
                onChange={(e) => setSelectedActorA(e.target.value)}
                className="w-full bg-slate-50 border border-slate-300 rounded p-2 text-xs text-slate-900 font-semibold focus:outline-hidden"
              >
                {PUBLIC_ACTORS.map(a => (
                  <option key={a.id} value={a.id}>{a.name} ({a.office})</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold font-mono text-slate-500 uppercase mb-1">
                Official B
              </label>
              <select
                value={selectedActorB}
                onChange={(e) => setSelectedActorB(e.target.value)}
                className="w-full bg-slate-50 border border-slate-300 rounded p-2 text-xs text-slate-900 font-semibold focus:outline-hidden"
              >
                {PUBLIC_ACTORS.map(a => (
                  <option key={a.id} value={a.id}>{a.name} ({a.office})</option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[actorA, actorB].map((actor, idx) => {
              const inst = INSTITUTIONS.find(i => i.id === actor.institutionId);

              return (
                <div key={actor.id} className="bg-white border border-slate-200 rounded-xl p-6 shadow-xs space-y-4">
                  <div className="flex items-center justify-between text-xs flex-wrap gap-2">
                    <div className="flex items-center gap-2">
                      <span className="font-mono font-bold bg-slate-100 text-slate-800 px-2 py-0.5 rounded">
                        Profile {idx === 0 ? 'A' : 'B'}
                      </span>
                      <DataStatusBadge status={actor.dataStatus} />
                    </div>
                    <span className="text-slate-500">{actor.termStatus}</span>
                  </div>

                  <div>
                    <h3 className="text-2xl font-serif font-bold text-slate-900">{actor.name}</h3>
                    <div className="text-xs font-semibold text-slate-700">{actor.office}</div>
                    <div className="text-xs text-slate-500">{inst?.name}</div>
                  </div>

                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-2 text-xs">
                    <span className="font-mono font-bold text-slate-600 uppercase text-[10px]">
                      Database Record Descriptors
                    </span>
                    <div className="space-y-1.5 divide-y divide-slate-200">
                      <div className="flex justify-between pt-1">
                        <span className="text-slate-600">Documented commitments:</span>
                        <strong className="font-mono">{actor.documentedCommitmentsCount}</strong>
                      </div>
                      <div className="flex justify-between pt-1">
                        <span className="text-slate-600">Specific implementation plans:</span>
                        <strong className="font-mono">{actor.specificPlansCount}</strong>
                      </div>
                      <div className="flex justify-between pt-1">
                        <span className="text-slate-600">Documented actions:</span>
                        <strong className="font-mono">{actor.implementationRecordsCount}</strong>
                      </div>
                      <div className="flex justify-between pt-1">
                        <span className="text-slate-600">Outcome data points:</span>
                        <strong className="font-mono">{actor.outcomeDataAvailableCount}</strong>
                      </div>
                      <div className="flex justify-between pt-1">
                        <span className="text-slate-600">Insufficient evidence entries:</span>
                        <strong className="font-mono text-rose-700">{actor.insufficientEvidenceCount}</strong>
                      </div>
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={() => onNavigate('actor-detail', actor.id)}
                      className="font-bold text-blue-700 hover:text-blue-900 text-xs inline-flex items-center gap-1"
                    >
                      <span>View Complete Profile</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
      {/* AI Nonpartisan Policy Tradeoff & Equity Stress-Test Modal */}
      {isSimModalOpen && simResult && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-150">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] flex flex-col shadow-2xl border border-slate-200">
            {/* Modal Header */}
            <div className="p-6 border-b border-slate-200 bg-slate-900 text-white rounded-t-2xl flex items-start justify-between">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-amber-400 text-slate-950 uppercase">
                    Nonpartisan Policy Tradeoff Audit
                  </span>
                  <span className="text-xs text-slate-400 font-mono">
                    Model: Gemini Impartial Stress-Test
                  </span>
                </div>
                <h3 className="text-xl font-serif font-bold text-white">
                  Empirical Tradeoff & Flourishing Equity Evaluation
                </h3>
                <p className="text-xs text-slate-300 max-w-2xl leading-relaxed">
                  {simResult.nonpartisanOverview}
                </p>
              </div>

              <button
                type="button"
                onClick={() => setIsSimModalOpen(false)}
                className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 overflow-y-auto space-y-6 text-xs text-slate-800">
              {/* Comparative Approaches */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Approach A */}
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] uppercase font-bold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded border border-indigo-200">
                      Approach A
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-slate-900">{simResult.approachA?.title}</h4>
                  <p className="text-slate-600 text-xs">{simResult.approachA?.coreMechanism}</p>
                  
                  <div className="space-y-1.5 pt-1">
                    <span className="font-mono font-bold text-[10px] uppercase text-emerald-800">Primary Strengths:</span>
                    <ul className="space-y-1">
                      {(simResult.approachA?.primaryBenefits || []).map((b: string, i: number) => (
                        <li key={i} className="flex items-start gap-1 text-[11px] text-slate-700">
                          <span className="text-emerald-600 font-bold">•</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-white p-2.5 rounded border border-slate-200 text-[11px] text-slate-700">
                    <strong className="text-slate-900 font-mono text-[10px] uppercase block">Fiscal & Resource Tradeoff:</strong>
                    {simResult.approachA?.fiscalTradeoff}
                  </div>
                </div>

                {/* Approach B */}
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] uppercase font-bold text-purple-700 bg-purple-50 px-2 py-0.5 rounded border border-purple-200">
                      Approach B
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-slate-900">{simResult.approachB?.title}</h4>
                  <p className="text-slate-600 text-xs">{simResult.approachB?.coreMechanism}</p>
                  
                  <div className="space-y-1.5 pt-1">
                    <span className="font-mono font-bold text-[10px] uppercase text-emerald-800">Primary Strengths:</span>
                    <ul className="space-y-1">
                      {(simResult.approachB?.primaryBenefits || []).map((b: string, i: number) => (
                        <li key={i} className="flex items-start gap-1 text-[11px] text-slate-700">
                          <span className="text-emerald-600 font-bold">•</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-white p-2.5 rounded border border-slate-200 text-[11px] text-slate-700">
                    <strong className="text-slate-900 font-mono text-[10px] uppercase block">Fiscal & Resource Tradeoff:</strong>
                    {simResult.approachB?.fiscalTradeoff}
                  </div>
                </div>
              </div>

              {/* Ward-Level Equity & Distribution */}
              <div className="bg-purple-50/70 border border-purple-200 rounded-xl p-4 space-y-1.5">
                <div className="font-mono font-bold text-xs uppercase text-purple-900 flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-purple-700" />
                  Ward-Level Distributional Equity Impact
                </div>
                <p className="text-purple-950 text-xs leading-relaxed">
                  {simResult.wardLevelEquityImpact}
                </p>
              </div>

              {/* Unintended Systemic Consequences */}
              <div className="bg-amber-50/70 border border-amber-200 rounded-xl p-4 space-y-2">
                <div className="font-mono font-bold text-xs uppercase text-amber-900 flex items-center gap-1.5">
                  <AlertTriangle className="w-3.5 h-3.5 text-amber-700" />
                  Unintended Systemic Consequences & Veto Risks
                </div>
                <ul className="space-y-1 text-slate-700">
                  {(simResult.unintendedConsequencesAndRisks || []).map((c: string, i: number) => (
                    <li key={i} className="flex items-start gap-1.5 text-[11px]">
                      <span className="text-amber-600 font-bold">•</span>
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Voter Accountability Checklist */}
              <div className="space-y-2">
                <div className="font-mono font-bold text-xs uppercase text-slate-800 flex items-center gap-1.5">
                  <Scale className="w-3.5 h-3.5 text-indigo-700" />
                  Objective Metrics for Citizens to Hold Officials Accountable
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {(simResult.testableMetricsForVoters || []).map((metric: string, idx: number) => (
                    <div key={idx} className="bg-slate-50 border border-slate-200 rounded-lg p-3 text-[11px] text-slate-800 leading-snug">
                      <span className="font-mono font-bold text-indigo-700 block mb-1">Metric 0{idx + 1}</span>
                      {metric}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-slate-50 border-t border-slate-200 rounded-b-2xl flex items-center justify-between">
              <span className="text-[11px] text-slate-500 font-mono">
                The POWER Standard • Objective Nonpartisan Comparative Framework
              </span>
              <button
                type="button"
                onClick={() => setIsSimModalOpen(false)}
                className="px-4 py-1.5 text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors shadow-xs"
              >
                Done Reviewing
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
