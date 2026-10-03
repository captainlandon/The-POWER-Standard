import React from 'react';
import { 
  AuthorityType, 
  EpistemicStatus, 
  RecordStatus, 
  SpecificityLevel,
  DataStatus,
  EvidentiaryStrength,
  ClaimType
} from '../types/power';
import { 
  ShieldCheck, 
  HelpCircle, 
  AlertTriangle, 
  Scale, 
  FileText, 
  CheckCircle2, 
  Clock, 
  Layers, 
  Search, 
  Building2,
  DollarSign,
  Gavel,
  Briefcase,
  AlertOctagon,
  Sparkles
} from 'lucide-react';

export const AuthorityBadge: React.FC<{ type: AuthorityType; size?: 'sm' | 'md' }> = ({ type, size = 'sm' }) => {
  const styles: Record<AuthorityType, { bg: string; text: string; border: string; icon: React.ReactNode }> = {
    Legislative: { bg: 'bg-indigo-50', text: 'text-indigo-800', border: 'border-indigo-200', icon: <Gavel className="w-3 h-3 inline mr-1" /> },
    Executive: { bg: 'bg-blue-50', text: 'text-blue-800', border: 'border-blue-200', icon: <Building2 className="w-3 h-3 inline mr-1" /> },
    Budgetary: { bg: 'bg-emerald-50', text: 'text-emerald-800', border: 'border-emerald-200', icon: <DollarSign className="w-3 h-3 inline mr-1" /> },
    Regulatory: { bg: 'bg-cyan-50', text: 'text-cyan-800', border: 'border-cyan-200', icon: <FileText className="w-3 h-3 inline mr-1" /> },
    Enforcement: { bg: 'bg-amber-50', text: 'text-amber-800', border: 'border-amber-200', icon: <Scale className="w-3 h-3 inline mr-1" /> },
    Administrative: { bg: 'bg-slate-100', text: 'text-slate-800', border: 'border-slate-300', icon: <Briefcase className="w-3 h-3 inline mr-1" /> },
    Oversight: { bg: 'bg-violet-50', text: 'text-violet-800', border: 'border-violet-200', icon: <Search className="w-3 h-3 inline mr-1" /> },
    Appointment: { bg: 'bg-teal-50', text: 'text-teal-800', border: 'border-teal-200', icon: <Layers className="w-3 h-3 inline mr-1" /> },
    Advisory: { bg: 'bg-stone-100', text: 'text-stone-700', border: 'border-stone-300', icon: <HelpCircle className="w-3 h-3 inline mr-1" /> },
  };

  const style = styles[type] || styles.Administrative;
  const padding = size === 'sm' ? 'px-2 py-0.5 text-xs' : 'px-2.5 py-1 text-sm';

  return (
    <span className={`inline-flex items-center font-medium rounded border ${style.bg} ${style.text} ${style.border} ${padding}`}>
      {style.icon}
      {type} Authority
    </span>
  );
};

export const EpistemicBadge: React.FC<{ status: EpistemicStatus; onClick?: () => void }> = ({ status, onClick }) => {
  const styles: Record<EpistemicStatus, { bg: string; text: string; border: string; icon: React.ReactNode; desc: string }> = {
    Verified: { 
      bg: 'bg-emerald-50', 
      text: 'text-emerald-850', 
      border: 'border-emerald-300', 
      icon: <ShieldCheck className="w-3 h-3 inline mr-1 text-emerald-700" />, 
      desc: 'Directly supported for the specific claim by authoritative evidence. (Not assigned merely because a source is governmental).' 
    },
    Supported: { 
      bg: 'bg-blue-50', 
      text: 'text-blue-850', 
      border: 'border-blue-300', 
      icon: <CheckCircle2 className="w-3 h-3 inline mr-1 text-blue-700" />, 
      desc: 'Well-supported but dependent on multiple or non-conclusive sources.' 
    },
    Derived: { 
      bg: 'bg-purple-50', 
      text: 'text-purple-850', 
      border: 'border-purple-300', 
      icon: <Layers className="w-3 h-3 inline mr-1 text-purple-700" />, 
      desc: 'Calculated or synthesized from identified evidence.' 
    },
    Disputed: { 
      bg: 'bg-amber-50', 
      text: 'text-amber-850', 
      border: 'border-amber-300', 
      icon: <AlertTriangle className="w-3 h-3 inline mr-1 text-amber-700" />, 
      desc: 'Credible evidence or interpretations materially conflict.' 
    },
    Unclear: { 
      bg: 'bg-yellow-50', 
      text: 'text-yellow-850', 
      border: 'border-yellow-300', 
      icon: <HelpCircle className="w-3 h-3 inline mr-1 text-yellow-700" />, 
      desc: 'Evidence exists but does not permit a confident conclusion.' 
    },
    Unknown: { 
      bg: 'bg-rose-50', 
      text: 'text-rose-850', 
      border: 'border-rose-300', 
      icon: <AlertOctagon className="w-3 h-3 inline mr-1 text-rose-700" />, 
      desc: 'Adequate evidence has not been located.' 
    },
  };

  const style = styles[status] || styles.Unclear;

  return (
    <button
      type="button"
      onClick={onClick}
      title={`${status}: ${style.desc}`}
      className={`inline-flex items-center px-2 py-0.5 text-xs font-semibold rounded border transition-colors ${style.bg} ${style.text} ${style.border} ${onClick ? 'cursor-pointer hover:opacity-90' : 'cursor-default'}`}
    >
      {style.icon}
      <span>{status}</span>
    </button>
  );
};

export const StatusBadge: React.FC<{ status: RecordStatus }> = ({ status }) => {
  const styles: Record<RecordStatus, { bg: string; text: string; border: string }> = {
    'Proposed': { bg: 'bg-sky-50', text: 'text-sky-800', border: 'border-sky-200' },
    'Announced': { bg: 'bg-blue-50', text: 'text-blue-800', border: 'border-blue-200' },
    'Pending': { bg: 'bg-amber-50', text: 'text-amber-800', border: 'border-amber-200' },
    'Introduced': { bg: 'bg-indigo-50', text: 'text-indigo-800', border: 'border-indigo-200' },
    'Funded': { bg: 'bg-emerald-50', text: 'text-emerald-800', border: 'border-emerald-200' },
    'Partially implemented': { bg: 'bg-teal-50', text: 'text-teal-800', border: 'border-teal-300' },
    'Implemented': { bg: 'bg-emerald-100', text: 'text-emerald-900', border: 'border-emerald-400' },
    'Superseded': { bg: 'bg-slate-100', text: 'text-slate-700', border: 'border-slate-300' },
    'Expired': { bg: 'bg-stone-100', text: 'text-stone-700', border: 'border-stone-300' },
    'Insufficient evidence': { bg: 'bg-rose-50', text: 'text-rose-800', border: 'border-rose-300' },
    'Outcome measurement pending': { bg: 'bg-amber-50', text: 'text-amber-800', border: 'border-amber-300' },
  };

  const style = styles[status] || styles.Pending;

  return (
    <span className={`inline-flex items-center px-2 py-0.5 text-xs font-medium rounded border ${style.bg} ${style.text} ${style.border}`}>
      <Clock className="w-3 h-3 inline mr-1 text-slate-500" />
      {status}
    </span>
  );
};

export const SpecificityBadge: React.FC<{ level: SpecificityLevel }> = ({ level }) => {
  const styles: Record<SpecificityLevel, { bg: string; text: string; border: string; label: string }> = {
    'General aspiration': { bg: 'bg-slate-100', text: 'text-slate-700', border: 'border-slate-200', label: 'General Aspiration' },
    'Target without timeline': { bg: 'bg-amber-50', text: 'text-amber-800', border: 'border-amber-200', label: 'Target Without Timeline' },
    'Specific implementation plan': { bg: 'bg-indigo-50', text: 'text-indigo-800', border: 'border-indigo-200', label: 'Actionable Implementation Plan' },
    'Legislative draft / Rule proposal': { bg: 'bg-emerald-50', text: 'text-emerald-800', border: 'border-emerald-200', label: 'Legislative / Rule Draft' },
  };

  const style = styles[level] || styles['General aspiration'];

  return (
    <span className={`inline-flex items-center px-2 py-0.5 text-xs font-medium rounded border ${style.bg} ${style.text} ${style.border}`}>
      {style.label}
    </span>
  );
};

export const EvidentiaryStrengthBadge: React.FC<{ strength: EvidentiaryStrength }> = ({ strength }) => {
  const styles: Record<EvidentiaryStrength, { bg: string; text: string; border: string }> = {
    'Direct': { bg: 'bg-emerald-100', text: 'text-emerald-900', border: 'border-emerald-400' },
    'Strong': { bg: 'bg-blue-100', text: 'text-blue-900', border: 'border-blue-300' },
    'Corroborative': { bg: 'bg-indigo-50', text: 'text-indigo-800', border: 'border-indigo-200' },
    'Limited': { bg: 'bg-amber-50', text: 'text-amber-800', border: 'border-amber-300' },
    'Contested': { bg: 'bg-rose-100', text: 'text-rose-900', border: 'border-rose-300' },
    'Insufficient': { bg: 'bg-stone-100', text: 'text-stone-800', border: 'border-stone-300' },
    'Context Only': { bg: 'bg-slate-100', text: 'text-slate-700', border: 'border-slate-300' },
  };
  const style = styles[strength] || styles['Corroborative'];
  return (
    <span className={`inline-flex items-center px-2 py-0.5 text-[11px] font-mono font-bold rounded border ${style.bg} ${style.text} ${style.border}`}>
      Strength: {strength}
    </span>
  );
};

export const ClaimTypeBadge: React.FC<{ claimType: ClaimType }> = ({ claimType }) => {
  return (
    <span className="inline-flex items-center px-2 py-0.5 text-[11px] font-mono font-medium rounded bg-slate-100 text-slate-800 border border-slate-300">
      Claim Type: {claimType}
    </span>
  );
};

/**
 * Prominent Demonstration Record Labeling (Requirement 2)
 */
export const DataStatusBadge: React.FC<{ status: DataStatus; inline?: boolean }> = ({ status, inline = false }) => {
  if (status === 'Simulated Demonstration Record') {
    return (
      <div className={`${inline ? 'inline-flex items-center' : 'block'} group relative`}>
        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded font-mono font-bold text-[10px] uppercase tracking-wider bg-amber-500/15 text-amber-900 border border-amber-500/40">
          <AlertTriangle className="w-3 h-3 text-amber-700 shrink-0" />
          SIMULATED DEMONSTRATION RECORD
        </span>
      </div>
    );
  }

  if (status === 'Verified Real-World Record') {
    return (
      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded font-mono font-bold text-[10px] uppercase tracking-wider bg-emerald-500/15 text-emerald-900 border border-emerald-500/40">
        <ShieldCheck className="w-3 h-3 text-emerald-700 shrink-0" />
        VERIFIED REAL-WORLD RECORD
      </span>
    );
  }

  return (
    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded font-mono font-bold text-[10px] uppercase tracking-wider bg-blue-500/15 text-blue-900 border border-blue-500/40">
      <Sparkles className="w-3 h-3 text-blue-700 shrink-0" />
      PARTIALLY VERIFIED RECORD
    </span>
  );
};

/**
 * Explanatory banner for simulated demonstration records (Requirement 2)
 */
export const SimulatedRecordNotice: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`p-3 bg-amber-50/90 border border-amber-300/80 rounded-lg text-xs text-amber-950 flex items-start gap-2.5 ${className}`}>
      <AlertTriangle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
      <div className="space-y-0.5 leading-snug">
        <span className="font-mono font-bold uppercase tracking-wider text-[10px] text-amber-900 block">
          SIMULATED DEMONSTRATION RECORD
        </span>
        <p className="text-[11px] text-amber-900">
          This record was created to demonstrate the POWER data model and should not be treated as a factual representation of an actual public action unless explicitly marked <strong className="text-emerald-900">Verified Real-World Record</strong>.
        </p>
      </div>
    </div>
  );
};

export const DemoBanner: React.FC = () => {
  return (
    <div className="bg-slate-950 text-slate-200 border-b border-slate-800 py-1.5 px-4 text-xs">
      <div className="max-w-7xl mx-auto flex items-center justify-between flex-wrap gap-2">
        <div className="flex items-center gap-2">
          <span className="bg-amber-500/20 text-amber-300 border border-amber-500/40 px-2 py-0.5 rounded font-mono font-semibold text-[10px] uppercase tracking-wider">
            DEMONSTRATION PROTOTYPE v2.0
          </span>
          <span className="text-slate-300">
            Jurisdiction: <strong className="text-white">Washington, DC</strong>. Public Office Work Evidence and Results (Business Plan v2.0 standard).
          </span>
        </div>
        <div className="text-slate-400 hidden lg:block text-[11px] font-mono">
          “Ambitious in scope and conservative in what it claims to have already achieved.”
        </div>
      </div>
    </div>
  );
};
