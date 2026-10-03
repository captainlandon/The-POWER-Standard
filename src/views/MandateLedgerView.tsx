import React, { useState } from 'react';
import { MANDATE_LEDGER_ENTRIES } from '../data/ecosystemData';
import { MandateLedgerEntry } from '../types/power';
import { DataStatusBadge, SimulatedRecordNotice } from '../components/Badge';
import { 
  Layers, 
  CheckCircle2, 
  Clock, 
  AlertTriangle, 
  DollarSign, 
  FileText, 
  ExternalLink, 
  Building2, 
  ArrowRight,
  Filter,
  Search,
  Scale
} from 'lucide-react';

interface MandateLedgerViewProps {
  onNavigate: (view: string, id?: string) => void;
  onOpenEvidence: (id: string) => void;
}

export const MandateLedgerView: React.FC<MandateLedgerViewProps> = ({
  onNavigate,
  onOpenEvidence
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStatus, setSelectedStatus] = useState<string>('All');
  const [activeEntryId, setActiveEntryId] = useState<string>(MANDATE_LEDGER_ENTRIES[0].id);

  const filteredEntries = MANDATE_LEDGER_ENTRIES.filter(e => {
    const matchesSearch = e.planTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          e.electedActorName.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = selectedStatus === 'All' || e.mandateStatus === selectedStatus;
    return matchesSearch && matchesStatus;
  });

  const activeEntry = MANDATE_LEDGER_ENTRIES.find(e => e.id === activeEntryId) || MANDATE_LEDGER_ENTRIES[0];

  const calcPercentage = (num: number, denom: number) => {
    if (!denom || denom === 0) return 0;
    return Math.min(100, Math.round((num / denom) * 100));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Header */}
      <div className="flex items-start justify-between flex-wrap gap-4 border-b border-stone-200 pb-4">
        <div>
          <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#0A1D3B] mb-1 flex items-center gap-1.5">
            <span className="text-[#B38A3E]">★ ★ ★</span>
            <span>Post-Election Governance · Public Trust & Delivery Audit</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-serif font-black text-[#0A1D3B]">
            The Public Mandate Ledger
          </h1>
          <p className="text-sm text-[#596273] max-w-3xl mt-1 leading-relaxed">
            In our democracy, an election confers a governing mandate under the Constitution, not unilateral power. The Mandate Ledger connects campaign commitments to real legislative roll calls, enacted budget appropriations, agency rules, and empirical community outcomes.
          </p>
        </div>

        <button
          type="button"
          onClick={() => onNavigate('plan-builder')}
          className="px-4 py-2 text-xs font-bold text-white bg-[#0A1D3B] hover:bg-[#1B4D89] rounded-lg shadow-xs transition-colors border border-[#B38A3E]/40"
        >
          Draft in Plan Builder
        </button>
      </div>

      {/* Simulated Demonstration Record Notice */}
      <SimulatedRecordNotice />

      {/* Search and Filters */}
      <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="relative w-full sm:w-80">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search plans or elected officials..."
            className="w-full pl-9 pr-3 py-1.5 text-xs bg-slate-50 border border-slate-300 rounded-lg focus:outline-hidden focus:ring-1 focus:ring-slate-900"
          />
        </div>

        <div className="flex items-center gap-2 w-full sm:w-auto">
          <Filter className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-xs font-semibold text-slate-600">Mandate Status:</span>
          <select
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
            className="text-xs bg-slate-50 border border-slate-300 rounded px-2.5 py-1.5 text-slate-800 focus:outline-hidden"
          >
            <option value="All">All Mandates</option>
            <option value="Enacted & Active">Enacted & Active</option>
            <option value="Enacted & Funded">Enacted & Funded</option>
            <option value="Partially Funded">Partially Funded</option>
            <option value="Veto Point Stalled">Veto Point Stalled</option>
          </select>
        </div>
      </div>

      {/* Ledger Main Content Split View */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: List of Mandates */}
        <div className="lg:col-span-5 space-y-4">
          <h2 className="text-xs font-mono font-bold uppercase text-slate-500 tracking-wider">
            Tracked Post-Election Mandates ({filteredEntries.length})
          </h2>

          <div className="space-y-3">
            {filteredEntries.map(entry => {
              const isSelected = entry.id === activeEntry.id;
              const spendRatio = calcPercentage(entry.budgetExpended, entry.budgetAppropriated);

              return (
                <div
                  key={entry.id}
                  onClick={() => setActiveEntryId(entry.id)}
                  className={`p-4 rounded-xl border cursor-pointer transition-all ${
                    isSelected
                      ? 'bg-white border-indigo-600 shadow-md ring-1 ring-indigo-600'
                      : 'bg-white border-slate-200 hover:border-slate-300 hover:shadow-xs'
                  }`}
                >
                  <div className="flex items-center justify-between text-xs mb-1.5">
                    <span className="font-mono text-[10px] bg-slate-100 text-slate-700 px-2 py-0.5 rounded border border-slate-200">
                      {entry.electionYear}
                    </span>
                    <span className={`px-2 py-0.5 rounded font-mono text-[10px] font-bold ${
                      entry.mandateStatus === 'Enacted & Active' || entry.mandateStatus === 'Enacted & Funded'
                        ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                        : 'bg-amber-50 text-amber-800 border border-amber-200'
                    }`}>
                      {entry.mandateStatus}
                    </span>
                  </div>

                  <h3 className="text-sm font-serif font-bold text-slate-900 leading-snug">
                    {entry.planTitle}
                  </h3>

                  <div className="text-xs text-slate-600 mt-1">
                    <strong>{entry.electedActorName}</strong> • {entry.electedOffice}
                  </div>

                  {/* Budget expenditure progress preview */}
                  <div className="mt-3 pt-3 border-t border-slate-100 space-y-1">
                    <div className="flex justify-between text-[11px] font-mono">
                      <span className="text-slate-500">Expenditure of Appropriated:</span>
                      <strong className="text-slate-900">${(entry.budgetExpended / 1e6).toFixed(1)}M / ${(entry.budgetAppropriated / 1e6).toFixed(1)}M ({spendRatio}%)</strong>
                    </div>
                    <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                      <div 
                        className={`h-full ${spendRatio >= 75 ? 'bg-emerald-500' : 'bg-blue-500'}`} 
                        style={{ width: `${spendRatio}%` }} 
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column: Active Mandate Full Detail */}
        <div className="lg:col-span-7 bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs space-y-6">
          <div className="space-y-2 border-b border-slate-100 pb-4">
            <div className="flex items-center gap-2 flex-wrap text-xs">
              <DataStatusBadge status={activeEntry.dataStatus} />
              <span className="font-mono text-slate-500">{activeEntry.electionYear}</span>
            </div>

            <h2 className="text-2xl font-serif font-bold text-slate-900">
              {activeEntry.planTitle}
            </h2>

            <div className="text-xs text-slate-700">
              Elected Officeholder: <strong className="text-slate-900">{activeEntry.electedActorName}</strong> ({activeEntry.electedOffice})
            </div>
          </div>

          {/* Budget Pipeline Breakdown: Requested vs Appropriated vs Expended */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 space-y-3">
            <div className="flex items-center justify-between text-xs font-mono font-bold text-slate-700">
              <span className="flex items-center gap-1.5">
                <DollarSign className="w-4 h-4 text-emerald-600" />
                Budget Lifecycle Reconciliation
              </span>
              <span className="text-slate-400">Appropriation Path</span>
            </div>

            <div className="grid grid-cols-3 gap-3 text-center text-xs">
              <div className="bg-white p-3 rounded-lg border border-slate-200">
                <span className="text-[10px] font-mono uppercase text-slate-400 block">Proposed / Requested</span>
                <strong className="text-base font-mono text-slate-900">${(activeEntry.budgetRequested / 1e6).toFixed(1)}M</strong>
              </div>
              <div className="bg-white p-3 rounded-lg border border-slate-200">
                <span className="text-[10px] font-mono uppercase text-blue-500 block">Council Appropriated</span>
                <strong className="text-base font-mono text-blue-900">${(activeEntry.budgetAppropriated / 1e6).toFixed(1)}M</strong>
              </div>
              <div className="bg-white p-3 rounded-lg border border-slate-200">
                <span className="text-[10px] font-mono uppercase text-emerald-600 block">Disbursed / Spent</span>
                <strong className="text-base font-mono text-emerald-900">${(activeEntry.budgetExpended / 1e6).toFixed(1)}M</strong>
              </div>
            </div>

            <p className="text-[11px] text-slate-500 italic">
              *The POWER Standard enforces the strict rule: <strong>Appropriation ≠ Expenditure</strong>. Allocated funds must be tracked through signed contracts and actual vendor disbursements.
            </p>
          </div>

          {/* Post-Election Action Timeline */}
          <div className="space-y-4">
            <h3 className="text-xs font-mono font-bold uppercase text-slate-600 tracking-wider flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-indigo-700" />
              <span>Official Action Timeline & Milestones</span>
            </h3>

            <div className="space-y-3 border-l-2 border-slate-200 pl-4 ml-2">
              {activeEntry.actionMilestones.map((m, idx) => (
                <div key={idx} className="relative space-y-1">
                  <div className="absolute -left-[23px] top-1 w-3 h-3 rounded-full border-2 border-white bg-slate-900" />
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-mono font-bold text-indigo-900 bg-indigo-50 px-2 py-0.5 rounded border border-indigo-200 text-[10px]">
                      {m.stage}
                    </span>
                    <span className="text-slate-400 font-mono text-[11px]">{m.date}</span>
                  </div>

                  <p className="text-xs text-slate-800 leading-snug">
                    {m.details}
                  </p>

                  {m.isBlocked && (
                    <div className="mt-1 p-2 bg-amber-50 border border-amber-300 rounded text-xs text-amber-900 flex items-start gap-1.5">
                      <AlertTriangle className="w-3.5 h-3.5 text-amber-700 shrink-0 mt-0.5" />
                      <span><strong>Documented Obstacle:</strong> {m.blockerReason}</span>
                    </div>
                  )}

                  <button
                    type="button"
                    onClick={() => onOpenEvidence(m.sourceEvidenceId)}
                    className="text-[11px] text-blue-700 hover:underline font-mono inline-flex items-center gap-1 pt-0.5"
                  >
                    <ExternalLink className="w-3 h-3" />
                    <span>Inspect Primary Source Evidence</span>
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Veto Points & Institutional Blockers (Crucial Safeguard against simplistic personal blaming) */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-2">
            <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-slate-800">
              <Scale className="w-4 h-4 text-indigo-700" />
              <span>Institutional Veto Points & Legal Obstacles</span>
            </div>
            <ul className="space-y-1 text-xs text-slate-600 list-disc list-inside">
              {activeEntry.vetoPointsAndObstacles.map((vp, i) => (
                <li key={i} className="leading-snug">{vp}</li>
              ))}
            </ul>
          </div>

          {/* Footer Navigation */}
          <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
            <button
              type="button"
              onClick={() => onNavigate('commitment-detail', activeEntry.planId)}
              className="text-blue-700 hover:text-blue-900 font-bold inline-flex items-center gap-1"
            >
              <span>View Full Baseline Plan Record</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
