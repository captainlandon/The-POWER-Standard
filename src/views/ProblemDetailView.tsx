import React, { useState } from 'react';
import { 
  PUBLIC_PROBLEMS, 
  INSTITUTIONS, 
  PUBLIC_ACTORS, 
  COMMITMENTS, 
  EVIDENCE_STORE 
} from '../data/mockData';
import { AuthorityGraph } from '../components/AuthorityGraph';
import { StatusBadge, SpecificityBadge, EpistemicBadge, DataStatusBadge, SimulatedRecordNotice } from '../components/Badge';
import { 
  ArrowLeft, 
  Building2, 
  User, 
  FileText, 
  CheckCircle2, 
  AlertTriangle, 
  TrendingUp, 
  TrendingDown, 
  Minus, 
  Scale, 
  Upload, 
  Edit3, 
  Share2, 
  Info,
  Calendar,
  Layers,
  BarChart3
} from 'lucide-react';

interface ProblemDetailViewProps {
  problemId: string;
  onBack: () => void;
  onNavigate: (view: string, id?: string) => void;
  onOpenEvidence: (id: string) => void;
  onOpenCorrection: (recordTitle: string, recordId: string) => void;
  onOpenUpload: (recordId: string, stageName: string) => void;
}

export const ProblemDetailView: React.FC<ProblemDetailViewProps> = ({
  problemId,
  onBack,
  onNavigate,
  onOpenEvidence,
  onOpenCorrection,
  onOpenUpload
}) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'authority' | 'commitments' | 'actions' | 'outcomes' | 'evidence'>('overview');

  const problem = PUBLIC_PROBLEMS.find(p => p.id === problemId) || PUBLIC_PROBLEMS[0];
  const relatedInstitutions = INSTITUTIONS.filter(i => problem.institutionIds.includes(i.id));
  const relatedCommitments = COMMITMENTS.filter(c => problem.commitmentIds.includes(c.id));
  const relatedEvidence = EVIDENCE_STORE.filter(e => problem.evidenceIds.includes(e.id));
  const relatedActors = PUBLIC_ACTORS.filter(a => a.commitmentIds.some(cid => problem.commitmentIds.includes(cid)));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Top Breadcrumb & Controls */}
      <div className="flex items-center justify-between flex-wrap gap-4">
        <button
          type="button"
          onClick={onBack}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-slate-900 bg-white px-3 py-1.5 rounded-lg border border-slate-200 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to All Problems</span>
        </button>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => onOpenUpload(problem.id, 'Public Problem Indicators')}
            className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-300 rounded-lg transition-colors"
          >
            <Upload className="w-3.5 h-3.5 text-slate-500" />
            <span>Upload Document</span>
          </button>

          <button
            type="button"
            onClick={() => onOpenCorrection(problem.title, problem.id)}
            className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-semibold text-amber-800 bg-amber-50 hover:bg-amber-100 border border-amber-300 rounded-lg transition-colors"
          >
            <Edit3 className="w-3.5 h-3.5 text-amber-600" />
            <span>Challenge / Suggest Correction</span>
          </button>
        </div>
      </div>

      {/* Simulated Demonstration Record Notice (Requirement 2) */}
      <SimulatedRecordNotice />

      {/* Main Header Card */}
      <div className="bg-white border border-slate-200 rounded-xl p-6 sm:p-8 shadow-xs space-y-6">
        <div className="flex items-start justify-between flex-wrap gap-4">
          <div className="space-y-2 max-w-3xl">
            <div className="flex items-center gap-2 flex-wrap text-xs font-mono">
              <DataStatusBadge status={problem.dataStatus} />
              <span className="bg-indigo-50 text-indigo-800 px-2.5 py-0.5 rounded font-bold border border-indigo-200">
                Civic Problem Record
              </span>
              <span className="text-slate-500">Geography: {problem.geography}</span>
              <span className="text-slate-300">•</span>
              <span className="text-slate-500">Updated: {problem.lastUpdated}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-serif font-black text-slate-900">
              {problem.title} — {problem.geography}
            </h1>

            <p className="text-sm text-slate-700 leading-relaxed font-sans">
              {problem.fullDescription}
            </p>
          </div>

          <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl text-xs space-y-2 w-full sm:w-64">
            <span className="font-mono font-bold text-slate-500 uppercase tracking-wider block text-[10px]">
              Affected Population
            </span>
            <div className="text-slate-900 font-medium leading-snug">
              {problem.affectedPopulation}
            </div>
            <div className="pt-2 border-t border-slate-200 text-slate-600">
              <strong className="block text-[10px] uppercase font-mono text-slate-400">Trend Synthesis</strong>
              <span className="leading-snug">{problem.trendSummary}</span>
            </div>
          </div>
        </div>

        {/* Major Indicators & Trend Visualizer */}
        <div className="pt-4 border-t border-slate-100 space-y-4">
          <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 flex items-center gap-2">
            <BarChart3 className="w-4 h-4 text-indigo-600" />
            <span>Authoritative Statistical Indicators</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {problem.indicators.map((ind, idx) => (
              <div key={idx} className="bg-slate-50/70 border border-slate-200 rounded-xl p-4 space-y-3">
                <div className="flex items-start justify-between gap-2">
                  <div className="font-bold text-xs text-slate-900 leading-snug">{ind.name}</div>
                  <span className="text-xs font-mono font-bold text-slate-800 bg-white px-2 py-0.5 rounded border border-slate-200 shrink-0">
                    {ind.current.value}
                  </span>
                </div>

                {/* Sparkline / Bar progression */}
                <div className="space-y-1">
                  <div className="flex items-end gap-1.5 h-16 pt-2">
                    {ind.dataSeries.map((pt, pIdx) => {
                      // Normalize bar height
                      const min = Math.min(...ind.dataSeries.map(d => d.value)) * 0.8;
                      const max = Math.max(...ind.dataSeries.map(d => d.value)) * 1.1;
                      const heightPct = Math.max(15, Math.min(100, ((pt.value - min) / (max - min || 1)) * 100));

                      return (
                        <div key={pIdx} className="flex-1 flex flex-col items-center gap-1 h-full justify-end group/bar">
                          <div 
                            style={{ height: `${heightPct}%` }}
                            className="w-full bg-indigo-600/70 group-hover/bar:bg-indigo-700 rounded-t transition-all"
                            title={`${pt.year}: ${pt.value}`}
                          />
                          <span className="text-[9px] font-mono text-slate-400">{pt.year.slice(-2)}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-200 text-[10px] text-slate-500 space-y-1">
                  <div><strong>Source:</strong> {ind.sourceName}</div>
                  <div className="italic text-slate-400">Note: {ind.methodologicalLimitation}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tabs Navigation */}
      <div className="border-b border-slate-200">
        <nav className="flex space-x-2 sm:space-x-8 overflow-x-auto text-xs sm:text-sm font-medium">
          {[
            { id: 'overview', label: 'Overview & Chain' },
            { id: 'authority', label: `Who Has Authority (${relatedInstitutions.length})` },
            { id: 'commitments', label: `Documented Commitments (${relatedCommitments.length})` },
            { id: 'actions', label: 'Implementation Milestones' },
            { id: 'outcomes', label: 'Measured Outcomes' },
            { id: 'evidence', label: `Evidence & Provenance (${relatedEvidence.length})` },
          ].map(tab => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id as any)}
              className={`pb-3 px-1 border-b-2 font-medium whitespace-nowrap transition-colors ${
                activeTab === tab.id
                  ? 'border-indigo-600 text-indigo-950 font-bold'
                  : 'border-transparent text-slate-500 hover:text-slate-800 hover:border-slate-300'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Tab 1: Overview */}
      {activeTab === 'overview' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-5 rounded-xl border border-slate-200 space-y-3">
              <span className="text-xs font-mono font-bold text-slate-400 uppercase">Stage 1</span>
              <h3 className="font-serif font-bold text-slate-900 text-base">Institutional Grid</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Authority is divided among {relatedInstitutions.length} civic bodies, from executive departments to the independent Council and regional interstate authorities.
              </p>
              <button
                type="button"
                onClick={() => setActiveTab('authority')}
                className="text-xs font-bold text-indigo-700 hover:underline inline-flex items-center gap-1"
              >
                Inspect Authority Map →
              </button>
            </div>

            <div className="bg-white p-5 rounded-xl border border-slate-200 space-y-3">
              <span className="text-xs font-mono font-bold text-slate-400 uppercase">Stage 2</span>
              <h3 className="font-serif font-bold text-slate-900 text-base">Recorded Commitments</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {relatedCommitments.length} distinct public targets, statutory promises, or budget floors currently tracked with full text transcripts.
              </p>
              <button
                type="button"
                onClick={() => setActiveTab('commitments')}
                className="text-xs font-bold text-indigo-700 hover:underline inline-flex items-center gap-1"
              >
                Inspect Commitments →
              </button>
            </div>

            <div className="bg-white p-5 rounded-xl border border-slate-200 space-y-3">
              <span className="text-xs font-mono font-bold text-slate-400 uppercase">Stage 3</span>
              <h3 className="font-serif font-bold text-slate-900 text-base">Evidence Provenance</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {relatedEvidence.length} primary audits, budget enactments, and statistical censuses anchor this record.
              </p>
              <button
                type="button"
                onClick={() => setActiveTab('evidence')}
                className="text-xs font-bold text-indigo-700 hover:underline inline-flex items-center gap-1"
              >
                Inspect Evidence Sources →
              </button>
            </div>
          </div>

          {/* Embedded Authority Map */}
          <div className="pt-4">
            <AuthorityGraph
              problem={problem}
              institutions={relatedInstitutions}
              actors={relatedActors}
              onOpenEvidence={onOpenEvidence}
              onSelectActor={(aid) => onNavigate('actor-detail', aid)}
              onSelectInstitution={(iid) => onNavigate('institution-detail', iid)}
            />
          </div>
        </div>
      )}

      {/* Tab 2: Who Has Authority */}
      {activeTab === 'authority' && (
        <div className="space-y-6">
          <AuthorityGraph
            problem={problem}
            institutions={relatedInstitutions}
            actors={relatedActors}
            onOpenEvidence={onOpenEvidence}
            onSelectActor={(aid) => onNavigate('actor-detail', aid)}
            onSelectInstitution={(iid) => onNavigate('institution-detail', iid)}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
            {relatedInstitutions.map((inst) => (
              <div key={inst.id} className="bg-white border border-slate-200 rounded-xl p-5 space-y-4 shadow-xs">
                <div className="flex items-start justify-between">
                  <div>
                    <span className="text-xs font-mono text-slate-400">{inst.institutionType}</span>
                    <h3 className="text-lg font-serif font-bold text-slate-900">{inst.name}</h3>
                  </div>
                  <span className="bg-slate-100 font-mono text-xs font-bold px-2 py-1 rounded">
                    {inst.abbreviation}
                  </span>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">{inst.mission}</p>

                <div className="bg-slate-50 p-3 rounded text-xs space-y-1.5 border border-slate-200">
                  <div className="font-bold text-slate-700">Formal Statutory Authority:</div>
                  <p className="text-slate-600">{inst.formalAuthoritySummary}</p>
                </div>

                <div className="pt-2 flex items-center justify-between text-xs">
                  <button
                    type="button"
                    onClick={() => onNavigate('institution-detail', inst.id)}
                    className="font-bold text-blue-700 hover:text-blue-900"
                  >
                    View Full Legal Charter →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab 3: Commitments */}
      {activeTab === 'commitments' && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-serif font-bold text-slate-900">
              Documented Commitments on {problem.title}
            </h2>
            <button
              type="button"
              onClick={() => onOpenUpload(problem.id, 'Commitment Documentation')}
              className="text-xs font-semibold text-indigo-700 bg-indigo-50 border border-indigo-200 px-3 py-1.5 rounded-lg hover:bg-indigo-100"
            >
              + Submit Documented Commitment
            </button>
          </div>

          <div className="space-y-4">
            {relatedCommitments.map((comm) => {
              const actor = PUBLIC_ACTORS.find(a => a.id === comm.actorId);
              return (
                <div key={comm.id} className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs space-y-4">
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <div className="flex items-center gap-2">
                      <StatusBadge status={comm.status} />
                      <SpecificityBadge level={comm.specificityLevel} />
                    </div>
                    <span className="text-xs font-mono text-slate-400">{comm.date}</span>
                  </div>

                  <h3 
                    onClick={() => onNavigate('commitment-detail', comm.id)}
                    className="text-lg font-serif font-bold text-slate-900 hover:text-blue-700 cursor-pointer"
                  >
                    {comm.title}
                  </h3>

                  <blockquote className="bg-slate-50 p-3 rounded border-l-4 border-slate-400 text-xs italic text-slate-700 font-serif">
                    “{comm.originalWordingOrParaphrase}”
                  </blockquote>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs pt-1">
                    <div>
                      <span className="text-slate-400 block text-[10px] uppercase font-mono">Responsible Actor</span>
                      <strong className="text-slate-800">{actor?.name}</strong> ({actor?.office})
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[10px] uppercase font-mono">Direct Legal Execution</span>
                      <span className={comm.authorityCheck.canActorDirectlyExecute ? 'text-emerald-700 font-semibold' : 'text-amber-700 font-semibold'}>
                        {comm.authorityCheck.canActorDirectlyExecute ? 'Yes (Within Direct Powers)' : 'Requires Other Institutions'}
                      </span>
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[10px] uppercase font-mono">Last Verified</span>
                      <span className="text-slate-700 font-mono">{comm.lastVerifiedDate}</span>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                    <button
                      type="button"
                      onClick={() => onOpenEvidence(comm.sourceEvidenceId)}
                      className="text-slate-500 hover:text-slate-800 font-mono text-[11px]"
                    >
                      Source Reference →
                    </button>
                    <button
                      type="button"
                      onClick={() => onNavigate('commitment-detail', comm.id)}
                      className="font-bold text-blue-700 hover:text-blue-900"
                    >
                      View Comprehensive Commitment Lifecycle →
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Tab 4: Actions (Implementation Milestones) */}
      {activeTab === 'actions' && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-serif font-bold text-slate-900">
              Documented Implementation Actions & Legislation
            </h2>
            <button
              type="button"
              onClick={() => onOpenUpload(problem.id, 'Implementation Milestones')}
              className="text-xs font-semibold text-indigo-700 bg-indigo-50 border border-indigo-200 px-3 py-1.5 rounded-lg hover:bg-indigo-100"
            >
              + Submit Action Evidence
            </button>
          </div>

          <div className="space-y-4">
            {relatedCommitments.flatMap(c => c.implementationEvents).map((event) => (
              <div key={event.id} className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs space-y-2">
                <div className="flex items-center justify-between flex-wrap gap-2 text-xs">
                  <span className="font-mono text-slate-500 font-semibold">{event.date}</span>
                  <div className="flex items-center gap-2">
                    <span className="bg-indigo-50 text-indigo-800 px-2 py-0.5 rounded font-mono font-medium border border-indigo-200">
                      {event.eventType}
                    </span>
                    <EpistemicBadge status={event.epistemicStatus} />
                  </div>
                </div>

                <h3 className="font-serif font-bold text-base text-slate-900">{event.title}</h3>
                <p className="text-xs text-slate-700 leading-relaxed">{event.description}</p>

                <div className="pt-2 flex items-center justify-between text-xs text-slate-500 border-t border-slate-100">
                  <span>Entity: <strong>{event.responsibleEntity}</strong></span>
                  <button
                    type="button"
                    onClick={() => onOpenEvidence(event.evidenceId)}
                    className="text-indigo-700 hover:text-indigo-900 font-mono text-[11px]"
                  >
                    Inspect Provenance Source →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab 5: Outcomes */}
      {activeTab === 'outcomes' && (
        <div className="space-y-6">
          <div className="bg-amber-50 border border-amber-300 rounded-xl p-4 text-xs text-amber-900 flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <strong className="font-bold">POWER Causal Non-Attribution Principle:</strong>
              <p>
                Measured indicators reflect documented changes in the real world. However, an outcome occurring after a policy intervention does NOT prove the policy caused the change. Macroeconomic conditions, demographic movements, and external shocks contribute to civic metrics.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {relatedCommitments.flatMap(c => c.outcomes).map((out) => (
              <div key={out.id} className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs space-y-3">
                <div className="flex items-start justify-between flex-wrap gap-2">
                  <h3 className="text-base font-serif font-bold text-slate-900">{out.metricName}</h3>
                  <EpistemicBadge status={out.epistemicStatus} />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 bg-slate-50 p-3 rounded-lg border border-slate-200 text-xs">
                  <div>
                    <span className="text-slate-400 uppercase font-mono text-[10px] block">Baseline Measurement</span>
                    <strong className="text-slate-800 font-mono text-sm">{out.baseline.value}</strong>
                    <span className="text-slate-500 text-[11px] block">Period: {out.baseline.period}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 uppercase font-mono text-[10px] block">Current Verified Metric</span>
                    <strong className="text-slate-900 font-mono text-sm">{out.currentMeasurement.value}</strong>
                    <span className="text-slate-500 text-[11px] block">Period: {out.currentMeasurement.period}</span>
                  </div>
                </div>

                <div className="space-y-2 text-xs">
                  <div className="bg-indigo-50/50 p-3 rounded border border-indigo-200 text-slate-800">
                    <strong className="text-indigo-900 block font-mono text-[10px] uppercase">Causal Caveat:</strong>
                    <span>{out.causalCaveat}</span>
                  </div>
                  <div className="text-slate-500 text-[11px]">
                    <strong>Methodological Limitation:</strong> {out.knownMethodologicalLimitations}
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-slate-400 font-mono">Source: {out.source}</span>
                  <button
                    type="button"
                    onClick={() => onOpenEvidence(out.evidenceId)}
                    className="text-blue-700 hover:text-blue-900 font-medium"
                  >
                    View Source Citation →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab 6: Evidence & Provenance */}
      {activeTab === 'evidence' && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-serif font-bold text-slate-900">
                Primary and Secondary Evidence Repositories
              </h2>
              <p className="text-xs text-slate-600">
                Trace all data claims for this problem back to original official publications and audits.
              </p>
            </div>
            <button
              type="button"
              onClick={() => onOpenUpload(problem.id, 'New Primary Source')}
              className="text-xs font-semibold text-indigo-700 bg-indigo-50 border border-indigo-200 px-3 py-1.5 rounded-lg hover:bg-indigo-100"
            >
              + Submit Evidence Source
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {relatedEvidence.map((ev) => (
              <div 
                key={ev.id} 
                onClick={() => onOpenEvidence(ev.id)}
                className="bg-white border border-slate-200 rounded-xl p-5 hover:border-slate-400 cursor-pointer shadow-xs transition-all space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs font-mono font-bold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded border border-indigo-200">
                      {ev.sourceType} Source
                    </span>
                    <EpistemicBadge status={ev.epistemicStatus} />
                  </div>

                  <h3 className="font-serif font-bold text-sm text-slate-900 leading-snug">
                    {ev.title}
                  </h3>

                  <p className="text-xs text-slate-600 italic line-clamp-2">
                    “{ev.excerpt}”
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 text-xs text-slate-500 space-y-1">
                  <div>Publisher: <strong className="text-slate-700">{ev.publisher}</strong></div>
                  <div className="font-mono text-[10px] text-slate-400">{ev.publicationDate}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
