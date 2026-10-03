import React, { useState } from 'react';
import { PUBLIC_ACTORS, INSTITUTIONS, COMMITMENTS, EVIDENCE_STORE } from '../data/mockData';
import { AuthorityBadge, StatusBadge, SpecificityBadge, EpistemicBadge, DataStatusBadge, SimulatedRecordNotice } from '../components/Badge';
import { ArrowLeft, User, Building2, BookOpen, Clock, FileText, CheckCircle2, ShieldAlert, ArrowRight, Upload, Edit3, ExternalLink } from 'lucide-react';

interface ActorDetailViewProps {
  actorId: string;
  onBack: () => void;
  onNavigate: (view: string, id?: string) => void;
  onOpenEvidence: (id: string) => void;
  onOpenCorrection: (recordTitle: string, recordId: string) => void;
  onOpenUpload: (recordId: string, stageName: string) => void;
}

export const ActorDetailView: React.FC<ActorDetailViewProps> = ({
  actorId,
  onBack,
  onNavigate,
  onOpenEvidence,
  onOpenCorrection,
  onOpenUpload
}) => {
  const [activeTab, setActiveTab] = useState<'commitments' | 'authority' | 'actions' | 'evidence' | 'timeline'>('commitments');

  const actor = PUBLIC_ACTORS.find(a => a.id === actorId) || PUBLIC_ACTORS[0];
  const institution = INSTITUTIONS.find(i => i.id === actor.institutionId);
  const relatedCommitments = COMMITMENTS.filter(c => actor.commitmentIds.includes(c.id));
  const relatedEvidence = EVIDENCE_STORE.filter(e => actor.evidenceIds.includes(e.id));
  const implementationEvents = relatedCommitments.flatMap(c => c.implementationEvents);

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
          <span>Back to All People</span>
        </button>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => onOpenUpload(actor.id, 'Official Public Records')}
            className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-300 rounded-lg transition-colors"
          >
            <Upload className="w-3.5 h-3.5 text-slate-500" />
            <span>Upload Document</span>
          </button>
          <button
            type="button"
            onClick={() => onOpenCorrection(actor.name, actor.id)}
            className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-semibold text-amber-800 bg-amber-50 hover:bg-amber-100 border border-amber-300 rounded-lg transition-colors"
          >
            <Edit3 className="w-3.5 h-3.5 text-amber-600" />
            <span>Challenge / Suggest Correction</span>
          </button>
        </div>
      </div>

      {/* Simulated Demonstration Record Notice (Requirement 2) */}
      <SimulatedRecordNotice />

      {/* Profile Header */}
      <div className="bg-white border border-slate-200 rounded-xl p-6 sm:p-8 shadow-xs space-y-6">
        <div className="flex items-start justify-between flex-wrap gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-2 flex-wrap text-xs font-mono">
              <DataStatusBadge status={actor.dataStatus} />
              <span className="bg-slate-100 font-bold px-2 py-0.5 rounded border border-slate-200 text-slate-800">
                {actor.jurisdiction}
              </span>
              <span className="text-slate-500">{actor.termStatus} Official</span>
              <span className="text-slate-300">•</span>
              <span className="text-slate-500">Term: {actor.termDates}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-serif font-black text-slate-900">
              {actor.name}
            </h1>

            <div className="text-sm font-semibold text-slate-700">
              {actor.office} — {institution?.name}
            </div>

            <p className="text-xs text-slate-600 leading-relaxed font-sans">
              {actor.relevantAuthoritySummary}
            </p>

            <div className="pt-2 text-xs font-mono text-slate-500 flex items-center gap-1.5">
              <ExternalLink className="w-3.5 h-3.5 text-blue-600" />
              <span>{actor.officialWebsitePlaceholder}</span>
            </div>
          </div>

          {/* Database Descriptors (Strictly Nonpartisan Database Counts) */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 w-full sm:w-80 space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-mono font-bold text-slate-600 uppercase text-[10px]">
                Database Descriptors
              </span>
              <span className="text-[10px] text-slate-400 font-mono">Neutral Record</span>
            </div>

            <div className="space-y-2 text-xs divide-y divide-slate-200">
              <div className="flex items-center justify-between pt-1">
                <span className="text-slate-600">Documented commitments:</span>
                <span className="font-mono font-bold text-slate-900">{actor.documentedCommitmentsCount}</span>
              </div>
              <div className="flex items-center justify-between pt-1.5">
                <span className="text-slate-600">Specific implementation plans:</span>
                <span className="font-mono font-bold text-slate-900">{actor.specificPlansCount}</span>
              </div>
              <div className="flex items-center justify-between pt-1.5">
                <span className="text-slate-600">Implementation records:</span>
                <span className="font-mono font-bold text-slate-900">{actor.implementationRecordsCount}</span>
              </div>
              <div className="flex items-center justify-between pt-1.5">
                <span className="text-slate-600">Outcome data available:</span>
                <span className="font-mono font-bold text-slate-900">{actor.outcomeDataAvailableCount}</span>
              </div>
              <div className="flex items-center justify-between pt-1.5">
                <span className="text-slate-600">Records with insufficient evidence:</span>
                <span className="font-mono font-bold text-rose-700">{actor.insufficientEvidenceCount}</span>
              </div>
            </div>

            <div className="pt-1 text-[10px] text-slate-400 font-mono leading-tight">
              * Counts represent verified database entries, not approval ratings or political scorecards.
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b border-slate-200">
        <nav className="flex space-x-2 sm:space-x-8 overflow-x-auto text-xs sm:text-sm font-medium">
          {[
            { id: 'commitments', label: `Documented Commitments (${relatedCommitments.length})` },
            { id: 'authority', label: `Formal Authorities (${actor.authorities.length})` },
            { id: 'actions', label: `Documented Actions (${implementationEvents.length})` },
            { id: 'timeline', label: 'Chronological Timeline' },
            { id: 'evidence', label: `Evidence Sources (${relatedEvidence.length})` },
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

      {/* Tab: Commitments */}
      {activeTab === 'commitments' && (
        <div className="space-y-4">
          {relatedCommitments.map(comm => (
            <div key={comm.id} className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs space-y-3">
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

              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
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
                  View Complete Commitment Record →
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Tab: Authority */}
      {activeTab === 'authority' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {actor.authorities.map(auth => (
              <div key={auth.id} className="bg-white border border-slate-200 rounded-xl p-5 space-y-4 shadow-xs">
                <div className="flex items-start justify-between">
                  <AuthorityBadge type={auth.authorityType} size="md" />
                  <span className="text-xs font-mono text-slate-400">{auth.jurisdiction}</span>
                </div>

                <h3 className="font-serif font-bold text-base text-slate-900">{auth.title}</h3>
                <div className="text-xs font-mono text-indigo-700 bg-indigo-50 p-2 rounded border border-indigo-200">
                  Legal Basis: {auth.legalBasis}
                </div>

                {/* What controls vs does not control */}
                <div className="space-y-2 text-xs">
                  <div className="bg-emerald-50 p-3 rounded border border-emerald-200 text-emerald-950">
                    <strong className="block mb-1 font-semibold text-emerald-800">What {actor.name} Has Statutory Power to Control:</strong>
                    <ul className="space-y-1">
                      {auth.whatItControls.map((c, i) => (
                        <li key={i}>• {c}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-rose-50 p-3 rounded border border-rose-200 text-rose-950">
                    <strong className="block mb-1 font-semibold text-rose-800">What {actor.name} Does NOT Control:</strong>
                    <ul className="space-y-1">
                      {auth.whatItDoesNotControl.map((c, i) => (
                        <li key={i}>• {c}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab: Actions */}
      {activeTab === 'actions' && (
        <div className="space-y-4">
          {implementationEvents.map(event => (
            <div key={event.id} className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs space-y-2 text-xs">
              <div className="flex items-center justify-between">
                <span className="font-mono text-slate-500 font-bold">{event.date}</span>
                <EpistemicBadge status={event.epistemicStatus} />
              </div>
              <h3 className="text-base font-serif font-bold text-slate-900">{event.title}</h3>
              <p className="text-slate-700 leading-relaxed">{event.description}</p>
              <div className="pt-2 text-slate-400 border-t border-slate-100 flex items-center justify-between">
                <span>Entity: <strong>{event.responsibleEntity}</strong></span>
                <button
                  type="button"
                  onClick={() => onOpenEvidence(event.evidenceId)}
                  className="text-blue-700 hover:underline font-mono"
                >
                  Verify Source →
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Tab: Timeline */}
      {activeTab === 'timeline' && (
        <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-xs space-y-6">
          <h3 className="font-serif font-bold text-lg text-slate-900">
            Chronological Accountability Timeline
          </h3>

          <div className="relative pl-6 border-l-2 border-indigo-200 space-y-6">
            {implementationEvents.map((evt, idx) => (
              <div key={evt.id} className="relative group">
                <div className="w-3 h-3 bg-indigo-600 rounded-full absolute -left-[31px] top-1 ring-4 ring-white" />
                <div className="space-y-1">
                  <div className="text-xs font-mono font-bold text-indigo-700">{evt.date}</div>
                  <h4 className="text-sm font-bold text-slate-900">{evt.title}</h4>
                  <p className="text-xs text-slate-600">{evt.description}</p>
                  <div className="pt-1">
                    <button
                      type="button"
                      onClick={() => onOpenEvidence(evt.evidenceId)}
                      className="text-[11px] font-mono text-blue-700 hover:underline"
                    >
                      Inspect Source Reference →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab: Evidence */}
      {activeTab === 'evidence' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {relatedEvidence.map(ev => (
            <div
              key={ev.id}
              onClick={() => onOpenEvidence(ev.id)}
              className="bg-white border border-slate-200 rounded-xl p-5 hover:border-slate-400 cursor-pointer shadow-xs space-y-2 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-mono font-bold text-indigo-700">{ev.sourceType} Source</span>
                  <EpistemicBadge status={ev.epistemicStatus} />
                </div>
                <h3 className="font-serif font-bold text-sm text-slate-900">{ev.title}</h3>
                <p className="text-xs text-slate-600 italic mt-1 line-clamp-2">“{ev.excerpt}”</p>
              </div>
              <div className="text-[11px] text-slate-500 pt-2 border-t border-slate-100 font-mono">
                {ev.publisher} • {ev.publicationDate}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
