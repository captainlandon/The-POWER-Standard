import React from 'react';
import { EvidenceItem } from '../types/power';
import { EpistemicBadge, DataStatusBadge, EvidentiaryStrengthBadge, ClaimTypeBadge } from './Badge';
import { 
  X, 
  ExternalLink, 
  ShieldCheck, 
  FileText, 
  AlertCircle, 
  Edit3, 
  Bookmark, 
  CheckCircle2, 
  XCircle, 
  Info,
  Scale,
  AlertTriangle
} from 'lucide-react';

interface EvidenceDrawerProps {
  evidence: EvidenceItem | null;
  isOpen: boolean;
  onClose: () => void;
  onSuggestCorrection?: (evidence: EvidenceItem) => void;
}

export const EvidenceDrawer: React.FC<EvidenceDrawerProps> = ({
  evidence,
  isOpen,
  onClose,
  onSuggestCorrection
}) => {
  if (!isOpen || !evidence) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-slate-900/60 backdrop-blur-xs flex justify-end transition-opacity duration-300">
      <div 
        className="w-full max-w-2xl bg-white h-full shadow-2xl flex flex-col border-l border-slate-200 overflow-y-auto"
        role="dialog"
        aria-modal="true"
        aria-labelledby="evidence-drawer-title"
      >
        {/* Header */}
        <div className="p-5 border-b border-slate-200 bg-slate-50 flex items-start justify-between sticky top-0 z-10">
          <div className="space-y-2">
            <div className="flex items-center gap-2 flex-wrap">
              <span className={`px-2.5 py-0.5 text-xs font-bold rounded uppercase tracking-wider font-mono ${
                evidence.sourceType === 'Primary' 
                  ? 'bg-blue-100 text-blue-900 border border-blue-300' 
                  : evidence.sourceType === 'Secondary'
                  ? 'bg-emerald-100 text-emerald-900 border border-emerald-300'
                  : 'bg-purple-100 text-purple-900 border border-purple-300'
              }`}>
                {evidence.sourceType} Source
              </span>
              <EvidentiaryStrengthBadge strength={evidence.evidentiaryStrength} />
              <ClaimTypeBadge claimType={evidence.claimType} />
              <EpistemicBadge status={evidence.epistemicStatus} />
            </div>

            <div className="pt-0.5">
              <DataStatusBadge status={evidence.dataStatus} />
            </div>

            <h2 id="evidence-drawer-title" className="text-lg font-serif font-bold text-slate-900 leading-snug">
              {evidence.title}
            </h2>
          </div>

          <button 
            type="button" 
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-200 rounded-lg transition-colors shrink-0 ml-2"
            aria-label="Close evidence panel"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Simulated Record Notice banner if demo record */}
        {evidence.dataStatus === 'Simulated Demonstration Record' && (
          <div className="bg-amber-50 border-b border-amber-200 px-6 py-2.5 text-xs text-amber-900 flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 text-amber-700 shrink-0" />
            <span className="text-[11px] leading-tight">
              <strong>Simulated demonstration record:</strong> Created to demonstrate POWER provenance schema. Not an official certified government transcript unless marked Verified Real-World Record.
            </span>
          </div>
        )}

        {/* Body content */}
        <div className="p-6 space-y-6 flex-1 text-sm text-slate-700">
          {/* Metadata Grid */}
          <div className="grid grid-cols-2 gap-4 bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs">
            <div>
              <span className="block font-semibold text-slate-500 uppercase tracking-wider mb-1 text-[10px] font-mono">
                Publisher / Institution
              </span>
              <span className="font-semibold text-slate-900 flex items-center gap-1.5 text-xs">
                <FileText className="w-3.5 h-3.5 text-slate-500" />
                {evidence.publisher}
              </span>
            </div>
            <div>
              <span className="block font-semibold text-slate-500 uppercase tracking-wider mb-1 text-[10px] font-mono">
                Date of Publication
              </span>
              <span className="font-semibold text-slate-900 text-xs font-mono">
                {evidence.publicationDate}
              </span>
            </div>
            <div className="col-span-2 pt-2 border-t border-slate-200">
              <span className="block font-semibold text-slate-500 uppercase tracking-wider mb-1 text-[10px] font-mono">
                Authoritative Record Locator
              </span>
              <div className="flex items-center gap-2 p-2 bg-white rounded border border-slate-200 font-mono text-[11px] text-slate-600 break-all">
                <ExternalLink className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                <span>{evidence.urlPlaceholder}</span>
              </div>
            </div>
          </div>

          {/* Verbatim Record Excerpt */}
          <div className="space-y-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-600 flex items-center gap-1.5 font-mono">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Verbatim Primary Excerpt</span>
            </h3>
            <blockquote className="p-4 bg-amber-50/40 border-l-4 border-amber-400 text-slate-800 italic rounded-r-lg font-serif leading-relaxed text-sm">
              “{evidence.excerpt}”
            </blockquote>
          </div>

          {/* WHAT THIS EVIDENCE PROVES / DOES NOT PROVE COMPONENT (Requirements 5 & 10) */}
          <div className="border border-slate-200 rounded-xl overflow-hidden shadow-xs space-y-0">
            <div className="bg-slate-900 text-white px-4 py-2.5 flex items-center justify-between text-xs font-mono">
              <span className="font-bold uppercase tracking-wider flex items-center gap-1.5 text-amber-300">
                <Scale className="w-3.5 h-3.5" />
                Evidentiary Scope & Limits
              </span>
              <span className="text-[11px] text-slate-400">Epistemic Precision Standard</span>
            </div>

            {/* This Evidence Establishes */}
            <div className="p-4 bg-emerald-50/60 border-b border-emerald-100 space-y-2">
              <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-900 font-mono">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                <span>What This Evidence Directly Establishes</span>
              </div>
              <ul className="space-y-1.5 text-xs text-slate-800 pl-1">
                {evidence.establishes.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-emerald-700 font-bold">•</span>
                    <span className="leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* This Evidence DOES NOT Establish */}
            <div className="p-4 bg-rose-50/60 space-y-2">
              <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-rose-900 font-mono">
                <XCircle className="w-4 h-4 text-rose-700 shrink-0" />
                <span>What This Evidence Does NOT Independently Establish</span>
              </div>
              <ul className="space-y-1.5 text-xs text-slate-800 pl-1">
                {evidence.doesNotEstablish.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-rose-700 font-bold">•</span>
                    <span className="leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-2 text-[11px] text-rose-800/80 italic">
                * Note: Asserting these secondary points requires linking additional independent primary records.
              </div>
            </div>
          </div>

          {/* Supported Claims in Record */}
          <div className="space-y-1.5">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-600 font-mono">
              Specific Claim Anchored in POWER Record
            </h3>
            <div className="p-3 bg-white border border-slate-200 rounded-lg text-xs text-slate-800 leading-relaxed font-medium">
              {evidence.supportsClaim}
            </div>
          </div>

          {/* Methodology & Verification Note */}
          {evidence.methodologyNote && (
            <div className="space-y-1.5">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-600 flex items-center gap-1.5 font-mono">
                <AlertCircle className="w-4 h-4 text-indigo-600" />
                <span>Evidentiary Relevance & Methodological Note</span>
              </h3>
              <p className="p-3 bg-indigo-50/50 border border-indigo-200 rounded-lg text-xs leading-relaxed text-slate-700">
                {evidence.methodologyNote}
              </p>
            </div>
          )}

          {/* Epistemic Provenance Rule */}
          <div className="bg-slate-100 p-4 rounded-xl text-xs text-slate-600 space-y-1.5">
            <div className="font-semibold text-slate-800 flex items-center gap-1.5">
              <Bookmark className="w-3.5 h-3.5 text-slate-700" />
              <span>Source Authenticity vs Evidentiary Relevance</span>
            </div>
            <p className="text-[11px] leading-relaxed">
              An official source conclusively establishes that an institution made a statement or enacted a statute, but it does NOT establish that the stated outcome was achieved or that an appropriation was fully expended. POWER enforces strict evidentiary separation at every stage.
            </p>
          </div>
        </div>

        {/* Footer actions */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between gap-3 sticky bottom-0">
          <button
            type="button"
            onClick={() => {
              if (onSuggestCorrection) onSuggestCorrection(evidence);
            }}
            className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-indigo-700 bg-indigo-50 hover:bg-indigo-100 border border-indigo-200 rounded-md transition-colors"
          >
            <Edit3 className="w-3.5 h-3.5" />
            Suggest Correction / Challenge
          </button>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-slate-700 hover:text-slate-900 bg-white hover:bg-slate-100 border border-slate-300 rounded-md transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
