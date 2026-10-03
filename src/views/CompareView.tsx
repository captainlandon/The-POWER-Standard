import React, { useState } from 'react';
import { PUBLIC_ACTORS, COMMITMENTS, INSTITUTIONS, PUBLIC_PROBLEMS } from '../data/mockData';
import { Scale, CheckCircle2, AlertTriangle, ArrowRight, UserCheck, FileText, Building2, HelpCircle } from 'lucide-react';
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

  const commA = COMMITMENTS.find(c => c.id === selectedCommitmentA) || COMMITMENTS[0];
  const commB = COMMITMENTS.find(c => c.id === selectedCommitmentB) || COMMITMENTS[1];

  const actorA = PUBLIC_ACTORS.find(a => a.id === selectedActorA) || PUBLIC_ACTORS[0];
  const actorB = PUBLIC_ACTORS.find(a => a.id === selectedActorB) || PUBLIC_ACTORS[1];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Header */}
      <div>
        <div className="text-xs font-mono font-bold uppercase tracking-wider text-indigo-700 mb-1">
          Objective Comparative Analysis
        </div>
        <h1 className="text-3xl sm:text-4xl font-serif font-black text-slate-900">
          Compare Public Records Side-by-Side
        </h1>
        <p className="text-sm text-slate-600 max-w-3xl mt-2 leading-relaxed">
          Compare factual dimensions across commitments or public offices. In accordance with The POWER Standard, this tool never computes political grades, assigns winner badges, or ranks candidates ideologically.
        </p>
      </div>

      {/* Nonpartisan Standard Notice */}
      <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-xs text-slate-700 flex items-start gap-3">
        <Scale className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
        <div>
          <strong className="text-slate-900 font-bold block mb-0.5">Strict Non-Ranking Guarantee:</strong>
          POWER provides standardized comparative metrics (such as statutory powers, plan specificity levels, resource breakdowns, and verified outcome availability). Users are empowered to inspect the evidence and reach their own independent conclusions.
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
    </div>
  );
};
