import React, { useState } from 'react';
import { INSTITUTIONS, PUBLIC_PROBLEMS, PUBLIC_ACTORS } from '../data/mockData';
import { AuthorityBadge, DataStatusBadge, SimulatedRecordNotice } from '../components/Badge';
import { Building2, Search, Filter, ArrowRight, BookOpen, Scale, ShieldAlert } from 'lucide-react';

interface InstitutionsViewProps {
  onSelectInstitution: (id: string) => void;
}

export const InstitutionsView: React.FC<InstitutionsViewProps> = ({ onSelectInstitution }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState<string>('All');

  const filtered = INSTITUTIONS.filter(i => {
    const matchesSearch = i.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          i.abbreviation.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          i.mission.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = selectedType === 'All' || i.institutionType === selectedType;
    return matchesSearch && matchesType;
  });

  const types = Array.from(new Set(INSTITUTIONS.map(i => i.institutionType)));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <div>
        <div className="text-xs font-mono font-bold uppercase tracking-wider text-indigo-700 mb-1">
          Civic Governance Directory
        </div>
        <h1 className="text-3xl sm:text-4xl font-serif font-black text-slate-900">
          Responsible Public Institutions
        </h1>
        <p className="text-sm text-slate-600 max-w-3xl mt-2 leading-relaxed">
          Inspect public institutions by their formal statutory charters, formal legal powers, budget authorities, and explicitly defined jurisdictional boundaries.
        </p>
      </div>

      {/* Simulated Demonstration Record Notice (Requirement 2) */}
      <SimulatedRecordNotice />

      {/* Filter and Search Bar */}
      <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="relative w-full sm:w-80">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search institutions by name or abbreviation..."
            className="w-full pl-9 pr-3 py-1.5 text-xs bg-slate-50 border border-slate-300 rounded-lg focus:outline-hidden focus:ring-1 focus:ring-slate-900"
          />
        </div>

        <div className="flex items-center gap-2 w-full sm:w-auto">
          <Filter className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-xs font-semibold text-slate-600">Type:</span>
          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className="text-xs bg-slate-50 border border-slate-300 rounded px-2.5 py-1.5 text-slate-800 focus:outline-hidden"
          >
            <option value="All">All Types</option>
            {types.map(t => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Institutions Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((inst) => {
          const connectedProblems = PUBLIC_PROBLEMS.filter(p => inst.relevantProblemIds.includes(p.id));
          const leaders = PUBLIC_ACTORS.filter(a => inst.leadershipActorIds.includes(a.id));

          return (
            <div
              key={inst.id}
              className="bg-white border border-slate-200 rounded-xl p-6 shadow-xs hover:shadow-md transition-all flex flex-col justify-between space-y-4 group"
            >
              <div className="space-y-3">
                <div className="flex items-start justify-between gap-2">
                  <span className="bg-slate-100 font-mono text-xs font-bold text-slate-800 px-2 py-0.5 rounded border border-slate-200">
                    {inst.abbreviation}
                  </span>
                  <span className="text-[11px] text-slate-500 font-medium">{inst.institutionType}</span>
                </div>

                <div className="pt-1">
                  <DataStatusBadge status={inst.dataStatus} />
                </div>

                <h2 
                  onClick={() => onSelectInstitution(inst.id)}
                  className="text-lg font-serif font-bold text-slate-900 group-hover:text-blue-700 cursor-pointer transition-colors"
                >
                  {inst.name}
                </h2>

                <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                  {inst.mission}
                </p>

                {/* Authority Badges */}
                <div className="space-y-1 pt-1">
                  <div className="text-[10px] uppercase font-mono font-bold text-slate-400">
                    Statutory Authority Domains
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {inst.authorities.map(a => (
                      <AuthorityBadge key={a.id} type={a.authorityType} size="sm" />
                    ))}
                  </div>
                </div>

                {/* Legal basis snippet */}
                <div className="bg-slate-50 p-2.5 rounded border border-slate-200 text-[11px] font-mono text-slate-600 line-clamp-2">
                  <BookOpen className="w-3 h-3 text-slate-400 inline mr-1" />
                  {inst.legalBasis}
                </div>
              </div>

              {/* Footer */}
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-slate-500 text-[11px]">
                  {connectedProblems.length} Connected Problems
                </span>

                <button
                  type="button"
                  onClick={() => onSelectInstitution(inst.id)}
                  className="font-bold text-blue-700 hover:text-blue-900 inline-flex items-center gap-1 group/btn"
                >
                  <span>Charter Record</span>
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
