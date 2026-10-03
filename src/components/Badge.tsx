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
  Layers, 
  Search, 
  Building2,
  DollarSign,
  Gavel,
  Briefcase,
  AlertOctagon,
  Info
} from 'lucide-react';

/**
 * AuthorityBadge
 * Quiet institutional marker indicating statutory jurisdiction.
 */
export const AuthorityBadge: React.FC<{ type: AuthorityType; size?: 'sm' | 'md' }> = ({ type, size = 'sm' }) => {
  const styles: Record<AuthorityType, { icon: React.ReactNode }> = {
    Legislative: { icon: <Gavel className="w-3 h-3 inline mr-1 text-[#0A1D3B]/70" /> },
    Executive: { icon: <Building2 className="w-3 h-3 inline mr-1 text-[#0A1D3B]/70" /> },
    Budgetary: { icon: <DollarSign className="w-3 h-3 inline mr-1 text-[#0A1D3B]/70" /> },
    Regulatory: { icon: <FileText className="w-3 h-3 inline mr-1 text-[#0A1D3B]/70" /> },
    Enforcement: { icon: <Scale className="w-3 h-3 inline mr-1 text-[#0A1D3B]/70" /> },
    Administrative: { icon: <Briefcase className="w-3 h-3 inline mr-1 text-[#0A1D3B]/70" /> },
    Oversight: { icon: <Search className="w-3 h-3 inline mr-1 text-[#0A1D3B]/70" /> },
    Appointment: { icon: <Layers className="w-3 h-3 inline mr-1 text-[#0A1D3B]/70" /> },
    Advisory: { icon: <HelpCircle className="w-3 h-3 inline mr-1 text-[#0A1D3B]/70" /> },
  };

  const style = styles[type] || styles.Administrative;
  const padding = size === 'sm' ? 'px-2 py-0.5 text-[11px]' : 'px-2.5 py-1 text-xs';

  return (
    <span 
      className={`inline-flex items-center font-mono font-medium rounded bg-stone-100 text-[#0A1D3B] border border-stone-200/80 ${padding}`}
      title={`${type} Authority under statutory charter`}
    >
      {style.icon}
      {type} Authority
    </span>
  );
};

/**
 * EpistemicBadge (Section 15)
 * Understated editorial marker: small dot, thin border, subtle background, clear text, accessible tooltip.
 * Decouples claim conclusiveness from partisanship or hype.
 */
export const EpistemicBadge: React.FC<{ status: EpistemicStatus; onClick?: () => void }> = ({ status, onClick }) => {
  const config: Record<EpistemicStatus, { dot: string; text: string; bg: string; border: string; desc: string }> = {
    Verified: { 
      dot: 'bg-emerald-600',
      text: 'text-emerald-900',
      bg: 'bg-emerald-50/80',
      border: 'border-emerald-200',
      desc: 'Directly corroborated for this specific assertion by primary authoritative record.'
    },
    Supported: { 
      dot: 'bg-[#2457A7]',
      text: 'text-[#0A1D3B]',
      bg: 'bg-blue-50/70',
      border: 'border-blue-200',
      desc: 'Corroborated by secondary reports or non-definitive government documentation.'
    },
    Derived: { 
      dot: 'bg-purple-600',
      text: 'text-purple-900',
      bg: 'bg-purple-50/70',
      border: 'border-purple-200',
      desc: 'Calculated, synthesized, or modeled from identified empirical records.'
    },
    Disputed: { 
      dot: 'bg-amber-600',
      text: 'text-amber-900',
      bg: 'bg-amber-50/80',
      border: 'border-amber-200',
      desc: 'Material conflicts exist across credible official or academic records.'
    },
    Unclear: { 
      dot: 'bg-stone-500',
      text: 'text-stone-800',
      bg: 'bg-stone-100/90',
      border: 'border-stone-300',
      desc: 'Partial evidence exists but does not warrant a definitive empirical conclusion.'
    },
    Unknown: { 
      dot: 'bg-[#C7353A]',
      text: 'text-[#C7353A]',
      bg: 'bg-rose-50/80',
      border: 'border-rose-200',
      desc: 'No adequate empirical public documentation has been located to verify this claim.'
    },
  };

  const c = config[status] || config.Unclear;

  return (
    <span
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      title={`Epistemic State: ${status} — ${c.desc}`}
      className={`inline-flex items-center gap-1.5 px-2 py-0.5 text-[11px] font-sans font-medium rounded border ${c.bg} ${c.text} ${c.border} ${
        onClick ? 'cursor-pointer hover:opacity-90 focus:outline-hidden focus:ring-1 focus:ring-[#0A1D3B]' : ''
      }`}
    >
      <span className={`w-1.5 h-1.5 rounded-full ${c.dot} shrink-0`} aria-hidden="true" />
      <span>{status}</span>
    </span>
  );
};

/**
 * StatusBadge
 * Implementation progression indicator matching RecordStatus.
 */
export const StatusBadge: React.FC<{ status: RecordStatus }> = ({ status }) => {
  const styles: Record<RecordStatus, { dot: string; text: string; bg: string; border: string }> = {
    'Proposed': { dot: 'bg-stone-500', text: 'text-stone-800', bg: 'bg-stone-100', border: 'border-stone-200' },
    'Announced': { dot: 'bg-blue-500', text: 'text-blue-900', bg: 'bg-blue-50', border: 'border-blue-200' },
    'Pending': { dot: 'bg-amber-500', text: 'text-amber-900', bg: 'bg-amber-50', border: 'border-amber-200' },
    'Introduced': { dot: 'bg-indigo-500', text: 'text-indigo-900', bg: 'bg-indigo-50', border: 'border-indigo-200' },
    'Funded': { dot: 'bg-emerald-500', text: 'text-emerald-900', bg: 'bg-emerald-50', border: 'border-emerald-200' },
    'Partially implemented': { dot: 'bg-teal-500', text: 'text-teal-900', bg: 'bg-teal-50', border: 'border-teal-200' },
    'Implemented': { dot: 'bg-emerald-600', text: 'text-emerald-950', bg: 'bg-emerald-100', border: 'border-emerald-300' },
    'Superseded': { dot: 'bg-stone-400', text: 'text-stone-700', bg: 'bg-stone-50', border: 'border-stone-200' },
    'Expired': { dot: 'bg-rose-500', text: 'text-rose-900', bg: 'bg-rose-50', border: 'border-rose-200' },
    'Insufficient evidence': { dot: 'bg-[#C7353A]', text: 'text-rose-950', bg: 'bg-rose-50', border: 'border-rose-200' },
    'Outcome measurement pending': { dot: 'bg-purple-500', text: 'text-purple-900', bg: 'bg-purple-50', border: 'border-purple-200' },
  };

  const style = styles[status] || { dot: 'bg-stone-400', text: 'text-stone-700', bg: 'bg-stone-50', border: 'border-stone-200' };

  return (
    <span className={`inline-flex items-center gap-1.5 px-2 py-0.5 text-[11px] font-sans font-medium rounded border ${style.bg} ${style.text} ${style.border}`}>
      <span className={`w-1.5 h-1.5 rounded-full ${style.dot} shrink-0`} aria-hidden="true" />
      <span>{status}</span>
    </span>
  );
};

/**
 * SpecificityBadge
 */
export const SpecificityBadge: React.FC<{ level: SpecificityLevel }> = ({ level }) => {
  const styles: Record<SpecificityLevel, { text: string; bg: string }> = {
    'General aspiration': { text: 'text-stone-600 italic', bg: 'bg-stone-100' },
    'Target without timeline': { text: 'text-amber-800 font-medium', bg: 'bg-amber-50' },
    'Specific implementation plan': { text: 'text-[#2457A7] font-semibold', bg: 'bg-blue-50' },
    'Legislative draft / Rule proposal': { text: 'text-emerald-800 font-semibold', bg: 'bg-emerald-50' },
  };

  const s = styles[level] || { text: 'text-stone-600', bg: 'bg-stone-50' };

  return (
    <span className={`inline-flex items-center px-2 py-0.5 rounded text-[11px] font-sans ${s.text} ${s.bg} border border-stone-200`} title={level}>
      {level}
    </span>
  );
};

/**
 * EvidentiaryStrengthBadge
 * Decouples claim strength from source authenticity.
 */
export const EvidentiaryStrengthBadge: React.FC<{ strength: EvidentiaryStrength }> = ({ strength }) => {
  const config: Record<EvidentiaryStrength, { dot: string; text: string; bg: string; border: string }> = {
    'Direct': { dot: 'bg-emerald-600', text: 'text-emerald-900', bg: 'bg-emerald-50', border: 'border-emerald-200' },
    'Strong': { dot: 'bg-[#2457A7]', text: 'text-[#0A1D3B]', bg: 'bg-blue-50', border: 'border-blue-200' },
    'Corroborative': { dot: 'bg-indigo-500', text: 'text-indigo-900', bg: 'bg-indigo-50', border: 'border-indigo-200' },
    'Limited': { dot: 'bg-stone-500', text: 'text-stone-800', bg: 'bg-stone-100', border: 'border-stone-200' },
    'Contested': { dot: 'bg-amber-600', text: 'text-amber-900', bg: 'bg-amber-50', border: 'border-amber-200' },
    'Insufficient': { dot: 'bg-[#C7353A]', text: 'text-rose-900', bg: 'bg-rose-50', border: 'border-rose-200' },
    'Context Only': { dot: 'bg-slate-400', text: 'text-slate-700', bg: 'bg-slate-50', border: 'border-slate-200' },
  };

  const c = config[strength] || config['Context Only'];

  return (
    <span 
      className={`inline-flex items-center gap-1.5 px-2 py-0.5 text-[11px] font-sans font-medium rounded border ${c.bg} ${c.text} ${c.border}`}
      title={`Evidentiary Strength: ${strength}`}
    >
      <span className={`w-1.5 h-1.5 rounded-full ${c.dot} shrink-0`} />
      <span>{strength} Proof</span>
    </span>
  );
};

/**
 * ClaimTypeBadge
 */
export const ClaimTypeBadge: React.FC<{ claimType?: ClaimType }> = ({ claimType = 'Direct Action' }) => {
  return (
    <span className="inline-flex items-center px-2 py-0.5 text-[11px] font-mono text-[#596273] bg-stone-100/90 rounded border border-stone-200/80">
      {claimType}
    </span>
  );
};

/**
 * DataStatusBadge
 * Unmistakable archival transparency stamp.
 */
export const DataStatusBadge: React.FC<{ status: DataStatus; inline?: boolean }> = ({ status }) => {
  if (status === 'Simulated Demonstration Record') {
    return (
      <span 
        className="inline-flex items-center gap-1 px-2 py-0.5 rounded font-mono font-medium text-[10px] tracking-wide uppercase bg-amber-50 text-amber-950 border border-amber-300"
        title="Simulated demonstration data for prototype research inspection."
      >
        <AlertTriangle className="w-3 h-3 text-amber-700 shrink-0" />
        SIMULATED RECORD
      </span>
    );
  }

  if (status === 'Verified Real-World Record') {
    return (
      <span 
        className="inline-flex items-center gap-1 px-2 py-0.5 rounded font-mono font-medium text-[10px] tracking-wide uppercase bg-emerald-50 text-emerald-900 border border-emerald-300"
        title="Verified primary record corroborated against enacted statutes or audits."
      >
        <ShieldCheck className="w-3 h-3 text-emerald-700 shrink-0" />
        VERIFIED RECORD
      </span>
    );
  }

  return (
    <span 
      className="inline-flex items-center gap-1 px-2 py-0.5 rounded font-mono font-medium text-[10px] tracking-wide uppercase bg-blue-50 text-[#0A1D3B] border border-blue-200"
      title="Partially verified municipal record."
    >
      <Info className="w-3 h-3 text-[#2457A7] shrink-0" />
      PARTIALLY VERIFIED
    </span>
  );
};

/**
 * SimulatedRecordNotice
 * Explanatory banner for simulated demonstration records.
 */
export const SimulatedRecordNotice: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`p-3.5 bg-amber-50/90 border border-amber-300/80 rounded-lg text-xs text-amber-950 flex items-start gap-3 ${className}`}>
      <AlertTriangle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
      <div className="space-y-0.5 leading-relaxed">
        <div className="font-mono font-bold tracking-tight uppercase text-[11px] text-amber-900">
          PROTOTYPE DEMONSTRATION RECORD
        </div>
        <p className="text-[12px] text-amber-950/90">
          This record illustrates The POWER Standard data specification and evidentiary taxonomy using Washington, DC municipal examples. Portions reflect simulated prototype data and should not be cited as definitive factual findings without checking cited primary government sources.
        </p>
      </div>
    </div>
  );
};

/**
 * DemoBanner
 * Top American civic proclamation notice.
 */
export const DemoBanner: React.FC = () => {
  return (
    <aside 
      aria-label="Official Public Archive Notice" 
      className="bg-[#0A1D3B] text-white border-b border-[#B38A3E]/30 text-[11px] py-1.5 px-4 font-sans relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between flex-wrap gap-2 relative z-10">
        <div className="flex items-center gap-2.5 flex-wrap">
          <div className="flex items-center gap-1 text-[#B38A3E] font-bold text-[10px] tracking-widest uppercase">
            <span>★</span>
            <span>★</span>
            <span>★</span>
          </div>
          <span className="font-mono font-semibold tracking-wider text-[#FAF7F0] text-[11px]">
            AN OPEN RECORD OF THE AMERICAN DEMOCRACY
          </span>
          <span className="text-[#B38A3E]/60 hidden md:inline">|</span>
          <span className="text-stone-300 hidden md:inline italic font-serif">
            "Public office is a public trust."
          </span>
        </div>

        <div className="flex items-center gap-3 text-stone-300 font-mono text-[10px]">
          <span className="text-[#B38A3E] font-semibold">NONPARTISAN CIVIC ARCHIVE</span>
          <span className="text-stone-500">•</span>
          <span>JURISDICTION: WASHINGTON, DC (HOME RULE)</span>
          <span className="text-stone-500">•</span>
          <span className="text-amber-300/90 font-medium">PROTOTYPE LEDGER</span>
        </div>
      </div>
      {/* Subtle bottom patriotic micro-rule: Navy into subtle Gold into Navy */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#B38A3E]/40 to-transparent" />
    </aside>
  );
};
