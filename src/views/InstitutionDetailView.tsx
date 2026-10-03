import React from 'react';
import { INSTITUTIONS, PUBLIC_PROBLEMS, PUBLIC_ACTORS, COMMITMENTS, EVIDENCE_STORE } from '../data/mockData';
import { AuthorityBadge, EpistemicBadge, DataStatusBadge, SimulatedRecordNotice } from '../components/Badge';
import { ArrowLeft, Building2, BookOpen, ShieldAlert, CheckCircle2, XCircle, ArrowRight, UserCheck, FileText, Upload, Edit3 } from 'lucide-react';

interface InstitutionDetailViewProps {
  institutionId: string;
  onBack: () => void;
  onNavigate: (view: string, id?: string) => void;
  onOpenEvidence: (id: string) => void;
  onOpenCorrection: (recordTitle: string, recordId: string) => void;
  onOpenUpload: (recordId: string, stageName: string) => void;
}

export const InstitutionDetailView: React.FC<InstitutionDetailViewProps> = ({
  institutionId,
  onBack,
  onNavigate,
  onOpenEvidence,
  onOpenCorrection,
  onOpenUpload
}) => {
  const inst = INSTITUTIONS.find(i => i.id === institutionId) || INSTITUTIONS[0];
  const connectedProblems = PUBLIC_PROBLEMS.filter(p => inst.relevantProblemIds.includes(p.id));
  const leaders = PUBLIC_ACTORS.filter(a => inst.leadershipActorIds.includes(a.id));
  const relatedCommitments = COMMITMENTS.filter(c => leaders.some(l => l.id === c.actorId));
  const relatedEvidence = EVIDENCE_STORE.filter(e => inst.evidenceIds.includes(e.id));

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
          <span>Back to All Institutions</span>
        </button>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => onOpenUpload(inst.id, 'Institutional Charter & Rules')}
            className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-300 rounded-lg transition-colors"
          >
            <Upload className="w-3.5 h-3.5 text-slate-500" />
            <span>Upload Document</span>
          </button>
          <button
            type="button"
            onClick={() => onOpenCorrection(inst.name, inst.id)}
            className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-semibold text-amber-800 bg-amber-50 hover:bg-amber-100 border border-amber-300 rounded-lg transition-colors"
          >
            <Edit3 className="w-3.5 h-3.5 text-amber-600" />
            <span>Challenge Authority Classification</span>
          </button>
        </div>
      </div>

      {/* Simulated Demonstration Record Notice (Requirement 2) */}
      <SimulatedRecordNotice />

      {/* Main Header */}
      <div className="bg-white border border-slate-200 rounded-xl p-6 sm:p-8 shadow-xs space-y-6">
        <div className="flex items-start justify-between flex-wrap gap-4">
          <div className="space-y-2 max-w-3xl">
            <div className="flex items-center gap-2 flex-wrap text-xs font-mono">
              <DataStatusBadge status={inst.dataStatus} />
              <span className="bg-slate-100 font-bold px-2 py-0.5 rounded border border-slate-200 text-slate-800">
                {inst.abbreviation}
              </span>
              <span className="text-slate-500">{inst.institutionType}</span>
              <span className="text-slate-300">•</span>
              <span className="text-slate-500">Jurisdiction: {inst.jurisdiction}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-serif font-black text-slate-900">
              {inst.name}
            </h1>

            <p className="text-sm text-slate-700 leading-relaxed">
              {inst.mission}
            </p>
          </div>

          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs space-y-2 w-full sm:w-72">
            <div className="font-mono font-bold text-slate-500 uppercase text-[10px]">
              Foundational Legal Basis
            </div>
            <p className="text-slate-900 font-mono text-[11px] leading-snug">
              {inst.legalBasis}
            </p>
            {relatedEvidence[0] && (
              <button
                type="button"
                onClick={() => onOpenEvidence(relatedEvidence[0].id)}
                className="text-[11px] text-blue-700 font-semibold hover:underline block pt-1"
              >
                Inspect Primary Statutory Text →
              </button>
            )}
          </div>
        </div>

        {/* Formal Authority Summary */}
        <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 text-xs space-y-1.5">
          <span className="font-mono font-bold text-slate-700 uppercase tracking-wider block text-[10px]">
            Summary of Formal Legal Authority (Home Rule Charter & DC Code)
          </span>
          <p className="text-slate-800 leading-relaxed font-sans text-xs sm:text-sm">
            {inst.formalAuthoritySummary}
          </p>
        </div>

        {/* The Two Halves: Powers vs Jurisdictional Limits Safeguard */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
          {/* Key Powers */}
          <div className="bg-emerald-50/50 border border-emerald-200 rounded-xl p-5 space-y-3">
            <div className="flex items-center gap-2 text-emerald-900 font-bold text-xs uppercase tracking-wider">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Formal Statutory Responsibilities</span>
            </div>
            <ul className="space-y-2 text-xs text-slate-800">
              {inst.keyResponsibilities.map((resp, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold">•</span>
                  <span>{resp}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Jurisdictional Limits */}
          <div className="bg-rose-50/50 border border-rose-200 rounded-xl p-5 space-y-3">
            <div className="flex items-center gap-2 text-rose-900 font-bold text-xs uppercase tracking-wider">
              <XCircle className="w-4 h-4 text-rose-600" />
              <span>What This Institution CANNOT Legally Do</span>
            </div>
            <ul className="space-y-2 text-xs text-slate-800">
              {inst.jurisdictionalLimits.map((limit, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-rose-600 font-bold">•</span>
                  <span>{limit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Leadership & Public Actors in this Institution */}
      {leaders.length > 0 && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-serif font-bold text-slate-900 flex items-center gap-2">
              <UserCheck className="w-5 h-5 text-indigo-700" />
              <span>Leadership & Public Actors</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {leaders.map(actor => (
              <div 
                key={actor.id} 
                onClick={() => onNavigate('actor-detail', actor.id)}
                className="bg-white border border-slate-200 rounded-xl p-5 hover:border-slate-400 cursor-pointer shadow-xs transition-all flex items-center justify-between"
              >
                <div>
                  <h3 className="font-bold text-slate-900 text-base">{actor.name}</h3>
                  <p className="text-xs text-slate-600">{actor.office}</p>
                  <p className="text-[10px] font-mono text-slate-400 mt-1">{actor.termDates}</p>
                </div>
                <div className="text-right">
                  <div className="text-xs font-mono font-bold text-indigo-700">
                    {actor.documentedCommitmentsCount} Commitments
                  </div>
                  <span className="text-[11px] text-blue-700 font-semibold flex items-center justify-end gap-1 mt-1">
                    Profile <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Connected Problems */}
      <div className="space-y-4">
        <h2 className="text-xl font-serif font-bold text-slate-900">
          Public Problems Under {inst.abbreviation} Jurisdiction
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {connectedProblems.map(p => (
            <div 
              key={p.id}
              onClick={() => onNavigate('problem-detail', p.id)}
              className="bg-white border border-slate-200 rounded-xl p-4 hover:border-blue-500 cursor-pointer shadow-xs transition-all"
            >
              <h3 className="font-serif font-bold text-slate-900 text-sm hover:text-blue-700">
                {p.title}
              </h3>
              <p className="text-xs text-slate-500 line-clamp-2 mt-1">{p.shortDescription}</p>
              <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-blue-700 font-medium">
                <span>Inspect Problem Chain</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
