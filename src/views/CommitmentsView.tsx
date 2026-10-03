import React, { useState } from 'react';
import { COMMITMENTS, PUBLIC_ACTORS, PUBLIC_PROBLEMS } from '../data/mockData';
import { StatusBadge, SpecificityBadge, DataStatusBadge, SimulatedRecordNotice } from '../components/Badge';
import { Search, Filter, ArrowRight, FileText, CheckCircle2, Clock } from 'lucide-react';
import { RecordStatus, SpecificityLevel } from '../types/power';

interface CommitmentsViewProps {
  onSelectCommitment: (id: string) => void;
}

export const CommitmentsView: React.FC<CommitmentsViewProps> = ({ onSelectCommitment }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStatus, setSelectedStatus] = useState<string>('All');
  const [selectedSpecificity, setSelectedSpecificity] = useState<string>('All');

  const filtered = COMMITMENTS.filter(c => {
    const actor = PUBLIC_ACTORS.find(a => a.id === c.actorId);
    const problem = PUBLIC_PROBLEMS.find(p => p.id === c.problemId);

    const matchesSearch = c.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          c.originalWordingOrParaphrase.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          actor?.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          problem?.title.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus = selectedStatus === 'All' || c.status === selectedStatus;
    const matchesSpec = selectedSpecificity === 'All' || c.specificityLevel === selectedSpecificity;

    return matchesSearch && matchesStatus && matchesSpec;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Header */}
      <div className="border-b border-stone-200 pb-4">
        <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#0A1D3B] mb-1 flex items-center gap-1.5">
          <span className="text-[#B38A3E]">★ ★ ★</span>
          <span>Public Covenants & Legislative Commitments · The Public Record</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-serif font-black text-[#0A1D3B]">
          Documented Public Commitments
        </h1>
        <p className="text-sm text-[#596273] max-w-3xl mt-2 leading-relaxed">
          In a constitutional democracy, official promises and campaign pledges form the civic covenant between the citizenry and public offices. POWER preserves verbatim records, separating general political rhetoric from concrete legislative plans with identified revenue offsets.
        </p>
      </div>

      {/* Simulated Demonstration Record Notice (Requirement 2) */}
      <SimulatedRecordNotice />

      {/* Filter Bar */}
      <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="relative w-full sm:w-80">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search commitments, actors, or problems..."
            className="w-full pl-9 pr-3 py-1.5 text-xs bg-slate-50 border border-slate-300 rounded-lg focus:outline-hidden focus:ring-1 focus:ring-slate-900"
          />
        </div>

        <div className="flex items-center gap-3 w-full sm:w-auto flex-wrap">
          <div className="flex items-center gap-1.5 text-xs">
            <span className="font-semibold text-slate-600">Status:</span>
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="bg-slate-50 border border-slate-300 rounded px-2 py-1 text-slate-800 text-xs focus:outline-hidden"
            >
              <option value="All">All Statuses</option>
              <option value="Partially implemented">Partially implemented</option>
              <option value="Implemented">Implemented</option>
              <option value="Pending">Pending</option>
              <option value="Proposed">Proposed</option>
              <option value="Insufficient evidence">Insufficient evidence</option>
            </select>
          </div>

          <div className="flex items-center gap-1.5 text-xs">
            <span className="font-semibold text-slate-600">Specificity:</span>
            <select
              value={selectedSpecificity}
              onChange={(e) => setSelectedSpecificity(e.target.value)}
              className="bg-slate-50 border border-slate-300 rounded px-2 py-1 text-slate-800 text-xs focus:outline-hidden"
            >
              <option value="All">All Levels</option>
              <option value="General aspiration">General aspiration</option>
              <option value="Specific implementation plan">Specific implementation plan</option>
              <option value="Legislative draft / Rule proposal">Legislative draft / Rule proposal</option>
            </select>
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filtered.map((comm) => {
          const actor = PUBLIC_ACTORS.find(a => a.id === comm.actorId);
          const problem = PUBLIC_PROBLEMS.find(p => p.id === comm.problemId);

          return (
            <div
              key={comm.id}
              className="bg-white border border-slate-200 rounded-xl p-6 shadow-xs hover:shadow-md transition-all flex flex-col justify-between space-y-4 group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between flex-wrap gap-2 text-xs">
                  <div className="flex items-center gap-2 flex-wrap">
                    <DataStatusBadge status={comm.dataStatus} />
                    <StatusBadge status={comm.status} />
                    <SpecificityBadge level={comm.specificityLevel} />
                  </div>
                  <span className="font-mono text-slate-400">{comm.date}</span>
                </div>

                <h2 
                  onClick={() => onSelectCommitment(comm.id)}
                  className="text-lg font-serif font-bold text-slate-900 group-hover:text-blue-700 cursor-pointer transition-colors"
                >
                  {comm.title}
                </h2>

                <blockquote className="bg-slate-50 p-3 rounded-lg border-l-4 border-slate-400 text-xs italic text-slate-700 font-serif leading-relaxed">
                  “{comm.originalWordingOrParaphrase}”
                </blockquote>

                <div className="grid grid-cols-2 gap-2 text-xs pt-1">
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase font-mono block">Public Actor</span>
                    <strong className="text-slate-800">{actor?.name}</strong>
                    <div className="text-[11px] text-slate-500">{actor?.office}</div>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase font-mono block">Civic Problem</span>
                    <span className="text-slate-800 font-medium">{problem?.title}</span>
                  </div>
                </div>

                {/* Direct execution check preview */}
                <div className="bg-slate-50 p-2.5 rounded border border-slate-200 text-xs flex items-center justify-between">
                  <span className="text-slate-600">Can actor execute unilaterally?</span>
                  <span className={`font-semibold font-mono text-[11px] ${comm.authorityCheck.canActorDirectlyExecute ? 'text-emerald-700' : 'text-amber-800'}`}>
                    {comm.authorityCheck.canActorDirectlyExecute ? 'Yes' : 'Requires Other Entities'}
                  </span>
                </div>
              </div>

              {/* Footer */}
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-slate-500 font-mono text-[11px]">
                  {comm.resources.length} Funding Allocations
                </span>

                <button
                  type="button"
                  onClick={() => onSelectCommitment(comm.id)}
                  className="font-bold text-blue-700 hover:text-blue-900 inline-flex items-center gap-1 group/btn"
                >
                  <span>Inspect Lifecycle</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
