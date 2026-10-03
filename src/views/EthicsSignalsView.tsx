import React, { useState } from 'react';
import { ETHICS_SIGNALS, MONEY_INFLUENCE_RECORDS } from '../data/ecosystemData';
import { EthicsSignal, EthicsSignalStatus, EthicsSignalCategory, MoneyInfluenceRecord } from '../types/power';
import { DataStatusBadge, SimulatedRecordNotice } from '../components/Badge';
import { 
  ShieldAlert, 
  AlertTriangle, 
  HelpCircle, 
  CheckCircle2, 
  DollarSign, 
  FileText, 
  ExternalLink, 
  Search, 
  Filter, 
  Scale, 
  Info,
  Clock,
  Building2,
  Lock
} from 'lucide-react';

interface EthicsSignalsViewProps {
  onNavigate: (view: string, id?: string) => void;
  onOpenCorrection: (recordTitle: string, recordId: string) => void;
}

export const EthicsSignalsView: React.FC<EthicsSignalsViewProps> = ({
  onNavigate,
  onOpenCorrection
}) => {
  const [activeTab, setActiveTab] = useState<'signals' | 'money'>('signals');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedStatus, setSelectedStatus] = useState<string>('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredSignals = ETHICS_SIGNALS.filter(sig => {
    const matchesCategory = selectedCategory === 'All' || sig.category === selectedCategory;
    const matchesStatus = selectedStatus === 'All' || sig.status === selectedStatus;
    const matchesSearch = sig.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          sig.explanation.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          sig.targetEntityName.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesStatus && matchesSearch;
  });

  const filteredMoney = MONEY_INFLUENCE_RECORDS.filter(m => {
    return m.donorOrEntity.toLowerCase().includes(searchTerm.toLowerCase()) ||
           m.recipientOfficeOrCandidate.toLowerCase().includes(searchTerm.toLowerCase()) ||
           m.category.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const getStatusBadgeStyle = (status: EthicsSignalStatus) => {
    switch (status) {
      case 'Substantiated Concern':
        return 'bg-rose-100 text-rose-900 border-rose-300';
      case 'Under Review':
        return 'bg-amber-100 text-amber-900 border-amber-300';
      case 'Explained':
        return 'bg-blue-100 text-blue-900 border-blue-300';
      case 'Corrected':
        return 'bg-emerald-100 text-emerald-900 border-emerald-300';
      default:
        return 'bg-slate-100 text-slate-800 border-slate-300';
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Header */}
      <div className="flex items-start justify-between flex-wrap gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-[11px] font-mono font-bold bg-amber-50 text-amber-800 border border-amber-300 mb-2">
            <ShieldAlert className="w-3.5 h-3.5" />
            Layer 7 • Panoptica-Style Governance Risk Indicators
          </div>
          <h1 className="text-3xl sm:text-4xl font-serif font-black text-slate-900">
            Ethics Signals & Money Influence
          </h1>
          <p className="text-sm text-slate-600 max-w-3xl mt-1 leading-relaxed">
            Surface observable patterns consistent with known governance risks: procurement sole-sourcing, campaign contribution timing, revolving-door relationships, and procedural irregularities. Built as an objective evidence triage system—never an automated guilt engine.
          </p>
        </div>
      </div>

      {/* Simulated Demonstration Record Notice */}
      <SimulatedRecordNotice />

      {/* Due Process & Neutrality Charter Callout (Business Plan v2.0 - Page 14) */}
      <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-7 border border-slate-800 space-y-3">
        <div className="flex items-center gap-2 text-amber-400 font-bold text-xs uppercase font-mono tracking-wider">
          <Scale className="w-4 h-4" />
          <span>Non-Defamation & Due Process Standard</span>
        </div>
        <p className="text-xs text-slate-300 leading-relaxed font-sans">
          <strong>Language matters:</strong> POWER may report that an observable pattern is consistent with a defined risk indicator. It does NOT declare corruption, criminal intent, or fraud unless an authoritative court or official adjudicative body has issued a formal finding. Every record includes documented counterevidence, named human review, and a transparent public appeal mechanism.
        </p>
      </div>

      {/* Main Tab Switcher */}
      <div className="flex items-center gap-3 border-b border-slate-200 pb-3">
        <button
          type="button"
          onClick={() => setActiveTab('signals')}
          className={`px-4 py-2 text-xs font-bold rounded-lg transition-all ${
            activeTab === 'signals'
              ? 'bg-slate-900 text-white shadow-xs'
              : 'bg-white text-slate-700 border border-slate-300 hover:bg-slate-50'
          }`}
        >
          Ethics Signals Triage ({ETHICS_SIGNALS.length})
        </button>
        <button
          type="button"
          onClick={() => setActiveTab('money')}
          className={`px-4 py-2 text-xs font-bold rounded-lg transition-all ${
            activeTab === 'money'
              ? 'bg-slate-900 text-white shadow-xs'
              : 'bg-white text-slate-700 border border-slate-300 hover:bg-slate-50'
          }`}
        >
          Money & Influence Layer ({MONEY_INFLUENCE_RECORDS.length})
        </button>
      </div>

      {/* TAB 1: ETHICS SIGNALS */}
      {activeTab === 'signals' && (
        <div className="space-y-6">
          {/* Filters */}
          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="relative w-full sm:w-80">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
              <input
                type="text"
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                placeholder="Search signals by entity or description..."
                className="w-full pl-9 pr-3 py-1.5 text-xs bg-slate-50 border border-slate-300 rounded-lg focus:outline-hidden focus:ring-1 focus:ring-slate-900"
              />
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto flex-wrap text-xs">
              <div className="flex items-center gap-1.5">
                <span className="font-semibold text-slate-600">Category:</span>
                <select
                  value={selectedCategory}
                  onChange={e => setSelectedCategory(e.target.value)}
                  className="bg-slate-50 border border-slate-300 rounded px-2.5 py-1.5 text-slate-800 text-xs focus:outline-hidden"
                >
                  <option value="All">All Categories</option>
                  <option value="Procurement Anomaly">Procurement Anomaly</option>
                  <option value="Campaign Finance / Lobbying Overlap">Campaign Finance / Lobbying Overlap</option>
                  <option value="Revolving-Door Relationship">Revolving-Door Relationship</option>
                  <option value="Unusual Procedural Change">Unusual Procedural Change</option>
                </select>
              </div>

              <div className="flex items-center gap-1.5">
                <span className="font-semibold text-slate-600">Status:</span>
                <select
                  value={selectedStatus}
                  onChange={e => setSelectedStatus(e.target.value)}
                  className="bg-slate-50 border border-slate-300 rounded px-2.5 py-1.5 text-slate-800 text-xs focus:outline-hidden"
                >
                  <option value="All">All Statuses</option>
                  <option value="Under Review">Under Review</option>
                  <option value="Explained">Explained</option>
                  <option value="Substantiated Concern">Substantiated Concern</option>
                </select>
              </div>
            </div>
          </div>

          {/* Signals Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredSignals.map(sig => (
              <div
                key={sig.id}
                className="bg-white border border-slate-200 rounded-xl p-6 shadow-xs hover:shadow-md transition-all space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs flex-wrap gap-2">
                    <span className="font-mono font-bold text-amber-900 bg-amber-50 px-2 py-0.5 rounded border border-amber-300 text-[10px] uppercase">
                      {sig.category}
                    </span>
                    <span className={`px-2 py-0.5 rounded font-mono font-bold text-[10px] border ${getStatusBadgeStyle(sig.status)}`}>
                      Status: {sig.status}
                    </span>
                  </div>

                  <h3 className="text-lg font-serif font-bold text-slate-900 leading-snug">
                    {sig.title}
                  </h3>

                  <div className="text-xs text-slate-700">
                    Target Entity: <strong className="text-slate-900">{sig.targetEntityName}</strong> ({sig.targetEntityType})
                  </div>

                  {/* Observable Pattern Definition */}
                  <div className="bg-slate-50 p-3 rounded-lg border border-slate-200 text-xs space-y-1">
                    <span className="font-mono text-[10px] uppercase font-bold text-slate-500 block">
                      Observable Pattern & Public Risk
                    </span>
                    <p className="text-slate-800 leading-relaxed font-sans">
                      {sig.signalDefinition}
                    </p>
                  </div>

                  {/* Neutral Explanation */}
                  <div className="text-xs text-slate-700 space-y-1">
                    <strong className="block text-slate-900">Documented Observation:</strong>
                    <p className="leading-relaxed">{sig.explanation}</p>
                  </div>

                  {/* Documented Counterevidence / Response Opportunity */}
                  <div className="p-3 bg-blue-50/70 border border-blue-200 rounded-lg text-xs text-slate-800 space-y-1">
                    <div className="font-mono text-[10px] font-bold text-blue-900 uppercase flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                      <span>Documented Context & Agency Response</span>
                    </div>
                    <p className="text-slate-700 leading-relaxed">
                      {sig.counterevidence}
                    </p>
                  </div>

                  {/* Source set */}
                  <div className="text-[11px] font-mono text-slate-500 space-y-0.5 pt-1">
                    <span className="font-bold text-slate-600">Official Sources:</span>
                    <ul className="list-disc list-inside">
                      {sig.sourceSet.map((src, i) => (
                        <li key={i} className="truncate">{src}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Footer Controls: Challenge / Suggest Correction */}
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="font-mono text-slate-400 text-[10px]">Flagged: {sig.dateFlagged}</span>
                  <button
                    type="button"
                    onClick={() => onOpenCorrection(sig.title, sig.id)}
                    className="text-amber-800 hover:text-amber-950 font-bold inline-flex items-center gap-1"
                  >
                    <span>Submit Counterevidence / Challenge</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 2: MONEY & INFLUENCE LAYER */}
      {activeTab === 'money' && (
        <div className="space-y-6">
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-xs text-slate-700 flex items-start gap-3">
            <DollarSign className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <strong className="text-slate-900 font-bold block mb-0.5">Money & Influence Transparency Standard:</strong>
              Public campaign finance filings, registered lobbying activity, and municipal procurement contract awards are correlated with related policy proposals. All data is sourced directly from the D.C. Office of Campaign Finance (OCF) and the Board of Ethics and Government Accountability (BEGA).
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-xs">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 font-mono uppercase text-[10px]">
                  <tr>
                    <th className="p-3.5">Category</th>
                    <th className="p-3.5">Contributor / Entity</th>
                    <th className="p-3.5">Recipient Office</th>
                    <th className="p-3.5">Amount (USD)</th>
                    <th className="p-3.5">Date</th>
                    <th className="p-3.5">Disclosure Citation</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {filteredMoney.map(item => (
                    <tr key={item.id} className="hover:bg-slate-50/80 transition-colors">
                      <td className="p-3.5 font-mono text-[11px] font-bold">
                        <span className={`px-2 py-0.5 rounded border ${
                          item.category === 'Municipal Vendor Contract' 
                            ? 'bg-purple-50 text-purple-900 border-purple-200' 
                            : item.category === 'Lobbying Registration'
                            ? 'bg-blue-50 text-blue-900 border-blue-200'
                            : 'bg-emerald-50 text-emerald-900 border-emerald-200'
                        }`}>
                          {item.category}
                        </span>
                      </td>
                      <td className="p-3.5 font-semibold text-slate-900">{item.donorOrEntity}</td>
                      <td className="p-3.5 text-slate-700">{item.recipientOfficeOrCandidate}</td>
                      <td className="p-3.5 font-mono font-bold text-slate-900">
                        ${item.amount.toLocaleString()}
                      </td>
                      <td className="p-3.5 font-mono text-slate-500">{item.date}</td>
                      <td className="p-3.5 font-mono text-slate-600">
                        <div className="truncate max-w-xs">{item.disclosureSource}</div>
                        <span className="text-[10px] text-slate-400 italic block mt-0.5">{item.caveatNote}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
