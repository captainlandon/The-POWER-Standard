import React, { useState } from 'react';
import { 
  COMMITMENTS, 
  PUBLIC_ACTORS, 
  PUBLIC_PROBLEMS, 
  INSTITUTIONS, 
  EVIDENCE_STORE 
} from '../data/mockData';
import { StatusBadge, SpecificityBadge, EpistemicBadge, DataStatusBadge, SimulatedRecordNotice } from '../components/Badge';
import { 
  ArrowLeft, 
  DollarSign, 
  Calendar, 
  CheckCircle2, 
  AlertTriangle, 
  HelpCircle, 
  FileText, 
  Scale, 
  Building2, 
  Upload, 
  Edit3, 
  ArrowRight,
  ExternalLink,
  ShieldAlert,
  Clock,
  Layers
} from 'lucide-react';

interface CommitmentDetailViewProps {
  commitmentId: string;
  onBack: () => void;
  onNavigate: (view: string, id?: string) => void;
  onOpenEvidence: (id: string) => void;
  onOpenCorrection: (recordTitle: string, recordId: string) => void;
  onOpenUpload: (recordId: string, stageName: string) => void;
}

export const CommitmentDetailView: React.FC<CommitmentDetailViewProps> = ({
  commitmentId,
  onBack,
  onNavigate,
  onOpenEvidence,
  onOpenCorrection,
  onOpenUpload
}) => {
  const [selectedTimelineEvent, setSelectedTimelineEvent] = useState<string | null>(null);

  const comm = COMMITMENTS.find(c => c.id === commitmentId) || COMMITMENTS[0];
  const actor = PUBLIC_ACTORS.find(a => a.id === comm.actorId);
  const problem = PUBLIC_PROBLEMS.find(p => p.id === comm.problemId);
  const relatedEvidence = EVIDENCE_STORE.filter(e => comm.evidenceIds.includes(e.id));

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
          <span>Back to All Commitments</span>
        </button>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => onOpenUpload(comm.id, 'Commitment Milestone & Evidence')}
            className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-300 rounded-lg transition-colors"
          >
            <Upload className="w-3.5 h-3.5 text-slate-500" />
            <span>Upload Supporting Record</span>
          </button>
          <button
            type="button"
            onClick={() => onOpenCorrection(comm.title, comm.id)}
            className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-semibold text-amber-800 bg-amber-50 hover:bg-amber-100 border border-amber-300 rounded-lg transition-colors"
          >
            <Edit3 className="w-3.5 h-3.5 text-amber-600" />
            <span>Challenge Record</span>
          </button>
        </div>
      </div>

      {/* Simulated Demonstration Record Notice (Requirement 2) */}
      <SimulatedRecordNotice />

      {/* Header Record Card */}
      <div className="bg-white border border-slate-200 rounded-xl p-6 sm:p-8 shadow-xs space-y-6">
        <div className="flex items-start justify-between flex-wrap gap-4">
          <div className="space-y-2 max-w-3xl">
            <div className="flex items-center gap-2 flex-wrap text-xs font-mono">
              <DataStatusBadge status={comm.dataStatus} />
              <StatusBadge status={comm.status} />
              <SpecificityBadge level={comm.specificityLevel} />
              <span className="text-slate-400">•</span>
              <span className="text-slate-500">Documented Date: {comm.date}</span>
              <span className="text-slate-400">•</span>
              <span className="text-slate-500">Verified: {comm.lastVerifiedDate}</span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-serif font-black text-slate-900">
              {comm.title}
            </h1>

            <div className="flex items-center gap-4 text-xs text-slate-700 pt-1 flex-wrap">
              <div>
                <span className="text-slate-400 block text-[10px] uppercase font-mono">Public Actor</span>
                <strong 
                  onClick={() => actor && onNavigate('actor-detail', actor.id)}
                  className="text-slate-900 hover:text-blue-700 cursor-pointer font-bold"
                >
                  {actor?.name}
                </strong> ({actor?.office})
              </div>
              <div className="h-6 w-px bg-slate-200 hidden sm:block" />
              <div>
                <span className="text-slate-400 block text-[10px] uppercase font-mono">Civic Problem</span>
                <strong 
                  onClick={() => problem && onNavigate('problem-detail', problem.id)}
                  className="text-slate-900 hover:text-blue-700 cursor-pointer font-bold"
                >
                  {problem?.title}
                </strong> ({problem?.geography})
              </div>
            </div>
          </div>

          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs space-y-2 w-full sm:w-64">
            <span className="font-mono font-bold text-slate-500 uppercase text-[10px] block">
              Official Source Statement
            </span>
            <div className="text-slate-900 font-medium">
              {comm.sourceStatement}
            </div>
            <button
              type="button"
              onClick={() => onOpenEvidence(comm.sourceEvidenceId)}
              className="text-[11px] text-blue-700 font-semibold hover:underline block pt-1"
            >
              Inspect Source Document →
            </button>
          </div>
        </div>

        {/* 1. What was stated? */}
        <div className="space-y-2">
          <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
            <FileText className="w-3.5 h-3.5 text-indigo-600" />
            <span>1. What Was Stated (Verbatim Citation or Documented Paraphrase)</span>
          </h2>
          <blockquote className="bg-slate-50 border-l-4 border-indigo-500 p-4 rounded-r-lg text-sm italic font-serif text-slate-800 leading-relaxed">
            “{comm.originalWordingOrParaphrase}”
          </blockquote>
        </div>

        {/* 2. What authority applies? */}
        <div className="space-y-3 pt-2">
          <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
            <Scale className="w-3.5 h-3.5 text-indigo-600" />
            <span>2. What Authority Applies? (Direct Powers vs Dependencies)</span>
          </h2>

          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-3 text-xs">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-slate-700">Can {actor?.name} execute this action unilaterally?</span>
              <span className={`px-2.5 py-0.5 rounded font-mono font-bold text-xs ${
                comm.authorityCheck.canActorDirectlyExecute 
                  ? 'bg-emerald-100 text-emerald-900 border border-emerald-300' 
                  : 'bg-amber-100 text-amber-900 border border-amber-300'
              }`}>
                {comm.authorityCheck.canActorDirectlyExecute ? 'Yes — Within Direct Authority' : 'No — Requires Other Entities'}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
              <div>
                <strong className="block text-slate-600 mb-1">Required Participating Institutions:</strong>
                <ul className="space-y-1 text-slate-800">
                  {comm.authorityCheck.requiredInstitutions.map((inst, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <span className="text-indigo-600 font-bold">•</span>
                      <span>{inst}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <strong className="block text-slate-600 mb-1">Legal Prerequisites & Constraints:</strong>
                <ul className="space-y-1 text-slate-800">
                  {comm.authorityCheck.legalPrerequisites.map((prereq, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <span className="text-amber-600 font-bold">•</span>
                      <span>{prereq}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* 3. What would implementation require? */}
        {comm.plan && (
          <div className="space-y-3 pt-2">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-indigo-600" />
              <span>3. Implementation Mechanism & Action Plan</span>
            </h2>

            <div className="bg-white border border-slate-200 rounded-xl p-5 space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pb-3 border-b border-slate-100">
                <div>
                  <span className="text-slate-400 uppercase font-mono text-[10px] block">Responsible Agencies</span>
                  <span className="font-semibold text-slate-800">{comm.plan.responsibleAgencies.join(', ')}</span>
                </div>
                <div>
                  <span className="text-slate-400 uppercase font-mono text-[10px] block">Estimated Timeline</span>
                  <span className="font-semibold text-slate-800">{comm.plan.timelineEstimate}</span>
                </div>
                <div>
                  <span className="text-slate-400 uppercase font-mono text-[10px] block">Budget Estimate</span>
                  <span className="font-semibold text-slate-800">{comm.plan.budgetAllocatedOrRequired}</span>
                </div>
              </div>

              <div>
                <strong className="block text-slate-700 mb-2">Concrete Action Milestones:</strong>
                <ul className="space-y-1.5 text-slate-800">
                  {comm.plan.concreteActions.map((action, i) => (
                    <li key={i} className="flex items-start gap-2 bg-slate-50 p-2 rounded border border-slate-100">
                      <span className="text-indigo-600 font-mono font-bold">0{i+1}.</span>
                      <span>{action}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <div className="bg-slate-50 p-3 rounded border border-slate-200">
                  <span className="font-semibold text-slate-700 block mb-1">Legislative Requirements:</span>
                  <p className="text-slate-600">{comm.plan.legislativeRequirements.join('; ')}</p>
                </div>
                <div className="bg-slate-50 p-3 rounded border border-slate-200">
                  <span className="font-semibold text-slate-700 block mb-1">Key Performance Targets:</span>
                  <p className="text-slate-600">{comm.plan.performanceIndicators.join('; ')}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 4. Resources: Disentangled Proposed vs Authorized vs Appropriated vs Spent */}
        <div className="space-y-3 pt-2">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
              <DollarSign className="w-3.5 h-3.5 text-emerald-600" />
              <span>4. Public Resources: Disentangled Budget Breakdown</span>
            </h2>
            <span className="text-[11px] font-mono text-slate-400">
              * Do NOT conflate proposed funding with actual dollars spent
            </span>
          </div>

          <div className="space-y-3">
            {comm.resources.map((res, i) => {
              const maxVal = Math.max(
                res.proposedAmount || 0,
                res.authorizedAmount || 0,
                res.appropriatedAmount || 0,
                res.spentAmount || 0,
                1
              );

              const fmt = (n?: number) => n !== undefined ? `$${(n / 1000000).toFixed(1)}M` : 'N/A';

              return (
                <div key={i} className="bg-slate-50 border border-slate-200 rounded-xl p-5 space-y-4">
                  <div className="flex items-center justify-between flex-wrap gap-2 text-xs">
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm">{res.label}</h4>
                      <span className="text-slate-500 font-mono">{res.fiscalYear} • {res.notes}</span>
                    </div>
                    <button
                      type="button"
                      onClick={() => onOpenEvidence(res.evidenceId)}
                      className="text-blue-700 hover:underline font-mono text-[11px]"
                    >
                      Audit Citation →
                    </button>
                  </div>

                  {/* 4 distinct bars */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                    <div className="bg-white p-3 rounded-lg border border-slate-200 space-y-1">
                      <span className="text-slate-400 uppercase font-mono text-[10px] block">Proposed</span>
                      <strong className="text-slate-700 text-sm font-mono block">{fmt(res.proposedAmount)}</strong>
                      <span className="text-[10px] text-slate-400">Executive request</span>
                    </div>

                    <div className="bg-white p-3 rounded-lg border border-slate-200 space-y-1">
                      <span className="text-slate-400 uppercase font-mono text-[10px] block">Authorized</span>
                      <strong className="text-slate-700 text-sm font-mono block">{fmt(res.authorizedAmount)}</strong>
                      <span className="text-[10px] text-slate-400">Statutory ceiling</span>
                    </div>

                    <div className="bg-white p-3 rounded-lg border border-slate-200 space-y-1">
                      <span className="text-slate-400 uppercase font-mono text-[10px] block">Appropriated</span>
                      <strong className="text-emerald-700 text-sm font-mono block">{fmt(res.appropriatedAmount)}</strong>
                      <span className="text-[10px] text-emerald-600 font-medium">Council enacted</span>
                    </div>

                    <div className="bg-white p-3 rounded-lg border border-slate-200 space-y-1">
                      <span className="text-slate-400 uppercase font-mono text-[10px] block">Actually Spent</span>
                      <strong className="text-indigo-800 text-sm font-mono block">{fmt(res.spentAmount)}</strong>
                      <span className="text-[10px] text-indigo-600 font-medium">CFO disbursed</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 5. Chronological Implementation Timeline */}
        <div className="space-y-4 pt-2">
          <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 text-indigo-600" />
            <span>5. Documented Implementation Actions & Audit Events</span>
          </h2>

          <div className="relative pl-6 border-l-2 border-indigo-200 space-y-6">
            {comm.implementationEvents.map((evt, idx) => (
              <div key={evt.id} className="relative group">
                <div className="w-3 h-3 bg-indigo-600 rounded-full absolute -left-[31px] top-1 ring-4 ring-white" />
                <div className="bg-slate-50/80 border border-slate-200 rounded-lg p-4 space-y-2">
                  <div className="flex items-center justify-between flex-wrap gap-2 text-xs">
                    <span className="font-mono font-bold text-indigo-800">{evt.date}</span>
                    <div className="flex items-center gap-2">
                      <span className="bg-white text-slate-700 border border-slate-300 px-2 py-0.5 rounded text-[10px] font-mono">
                        {evt.eventType}
                      </span>
                      <EpistemicBadge status={evt.epistemicStatus} />
                    </div>
                  </div>

                  <h4 className="text-sm font-serif font-bold text-slate-900">{evt.title}</h4>
                  <p className="text-xs text-slate-700 leading-relaxed">{evt.description}</p>

                  <div className="pt-2 border-t border-slate-200 text-xs text-slate-500 flex items-center justify-between">
                    <span>Responsible: <strong>{evt.responsibleEntity}</strong></span>
                    <button
                      type="button"
                      onClick={() => onOpenEvidence(evt.evidenceId)}
                      className="text-blue-700 font-mono text-[11px] hover:underline"
                    >
                      Verify Audit Record →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 6. Measured Outcomes with Explicit Causal Separation */}
        <div className="space-y-4 pt-2">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              <span>6. Measured Outcomes & Non-Causal Evidence</span>
            </h2>
          </div>

          <div className="bg-amber-50/70 border border-amber-300 rounded-lg p-3.5 text-xs text-slate-800 space-y-1">
            <strong className="font-bold text-amber-900">Epistemic Rule 7 — Outcome ≠ Causation:</strong>
            <p>
              POWER reports measurable indicators that occurred in the timeframe following this commitment. An indicator changing in the desired direction does NOT mathematically establish that the policy was the primary causal agent.
            </p>
          </div>

          <div className="space-y-4">
            {comm.outcomes.map(out => (
              <div key={out.id} className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="font-serif font-bold text-slate-900 text-base">{out.metricName}</h4>
                  <EpistemicBadge status={out.epistemicStatus} />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs bg-slate-50 p-3 rounded-lg border border-slate-200">
                  <div>
                    <span className="text-slate-400 block text-[10px] uppercase font-mono">Baseline</span>
                    <strong className="text-slate-800 font-mono text-sm">{out.baseline.value}</strong>
                    <div className="text-[10px] text-slate-500">{out.baseline.period}</div>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px] uppercase font-mono">Current Verified Metric</span>
                    <strong className="text-slate-900 font-mono text-sm">{out.currentMeasurement.value}</strong>
                    <div className="text-[10px] text-slate-500">{out.currentMeasurement.period}</div>
                  </div>
                </div>

                <div className="text-xs bg-indigo-50/40 p-3 rounded border border-indigo-200 text-slate-800 space-y-1">
                  <span className="font-mono uppercase text-[10px] font-bold text-indigo-900 block">Causal Caveat:</span>
                  <p>{out.causalCaveat}</p>
                </div>

                <div className="text-[11px] text-slate-500">
                  <strong>Methodological Limitation:</strong> {out.knownMethodologicalLimitations}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 7. PROMINENT UNKNOWNS PANEL: "What we still don't know" */}
        <div className="bg-slate-900 text-white rounded-xl p-6 sm:p-8 space-y-4">
          <div className="flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-amber-400" />
            <h3 className="font-serif font-bold text-lg text-white">
              What We Still Don’t Know (Normalizing Civic Uncertainty)
            </h3>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed max-w-3xl">
            A core principle of The POWER Standard is that public records are often incomplete. Rather than smoothing over gaps, POWER explicitly enumerates what remains unverified, unmeasured, or shielded from public audits.
          </p>

          <div className="space-y-2 pt-2">
            {comm.unknowns.map((un, idx) => (
              <div key={idx} className="bg-slate-800/90 border border-slate-700 p-3.5 rounded-lg text-xs text-slate-200 flex items-start gap-3">
                <span className="text-amber-400 font-mono font-bold shrink-0">?</span>
                <span className="leading-relaxed">{un}</span>
              </div>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
            <span>Do you have documented evidence to resolve one of these unknowns?</span>
            <button
              type="button"
              onClick={() => onOpenUpload(comm.id, 'Resolution of Documented Unknown')}
              className="px-3 py-1.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold rounded text-xs transition-colors"
            >
              Submit Evidence Document
            </button>
          </div>
        </div>

        {/* 8. Evidence Provenance List */}
        <div className="space-y-4 pt-2">
          <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
            <ShieldAlert className="w-3.5 h-3.5 text-indigo-600" />
            <span>8. Traceable Citations Supporting This Commitment Record</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {relatedEvidence.map(ev => (
              <div 
                key={ev.id}
                onClick={() => onOpenEvidence(ev.id)}
                className="bg-slate-50 border border-slate-200 rounded-xl p-4 hover:border-slate-400 cursor-pointer text-xs space-y-2"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono font-bold text-indigo-800">{ev.sourceType} Source</span>
                  <EpistemicBadge status={ev.epistemicStatus} />
                </div>
                <h4 className="font-serif font-bold text-slate-900 text-sm">{ev.title}</h4>
                <p className="text-slate-600 italic line-clamp-2">“{ev.excerpt}”</p>
                <div className="text-[10px] text-slate-400 font-mono pt-1">
                  Publisher: {ev.publisher} ({ev.publicationDate})
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
