import React, { useState } from 'react';
import { PUBLIC_PROBLEMS, INSTITUTIONS, COMMITMENTS } from '../data/mockData';
import { DataStatusBadge, SimulatedRecordNotice } from '../components/Badge';
import { ArrowRight, Search, Filter, TrendingUp, TrendingDown, Minus, Building2, FileText, CheckCircle2 } from 'lucide-react';

interface ProblemsViewProps {
  onSelectProblem: (id: string) => void;
}

export const ProblemsView: React.FC<ProblemsViewProps> = ({ onSelectProblem }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedJurisdiction, setSelectedJurisdiction] = useState<string>('All');

  const filtered = PUBLIC_PROBLEMS.filter(p => {
    const matchesSearch = p.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          p.shortDescription.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesJurisdiction = selectedJurisdiction === 'All' || p.jurisdictionLevel === selectedJurisdiction;
    return matchesSearch && matchesJurisdiction;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Header */}
      <div>
        <div className="text-xs font-mono font-bold uppercase tracking-wider text-indigo-700 mb-1">
          Civic Problems Explorer
        </div>
        <h1 className="text-3xl sm:text-4xl font-serif font-black text-slate-900">
          Public Problems in the Civic Record
        </h1>
        <p className="text-sm text-slate-600 max-w-3xl mt-2 leading-relaxed">
          Every record in POWER starts with a documented public condition. Select a problem to inspect who has authority, what public actors committed to, and what outcome evidence exists.
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
            placeholder="Filter problems..."
            className="w-full pl-9 pr-3 py-1.5 text-xs bg-slate-50 border border-slate-300 rounded-lg focus:outline-hidden focus:ring-1 focus:ring-slate-900"
          />
        </div>

        <div className="flex items-center gap-2 w-full sm:w-auto">
          <Filter className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-xs font-semibold text-slate-600">Jurisdiction:</span>
          <select
            value={selectedJurisdiction}
            onChange={(e) => setSelectedJurisdiction(e.target.value)}
            className="text-xs bg-slate-50 border border-slate-300 rounded px-2.5 py-1.5 text-slate-800 focus:outline-hidden"
          >
            <option value="All">All Jurisdictions</option>
            <option value="District">District of Columbia</option>
            <option value="Regional">Regional (NCR)</option>
          </select>
        </div>
      </div>

      {/* Problems Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filtered.map((problem) => {
          const indicators = problem.indicators;
          const institutionsCount = problem.institutionIds.length;
          const commitmentsCount = problem.commitmentIds.length;
          const evidenceCount = problem.evidenceIds.length;

          return (
            <div
              key={problem.id}
              className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs hover:shadow-md transition-all flex flex-col justify-between space-y-5"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs text-slate-500 font-mono">
                  <span className="bg-slate-100 text-slate-700 px-2 py-0.5 rounded border border-slate-200">
                    {problem.geography}
                  </span>
                  <span>Updated {problem.lastUpdated}</span>
                </div>

                <div>
                  <div className="mb-2">
                    <DataStatusBadge status={problem.dataStatus} />
                  </div>
                  <h2 
                    onClick={() => onSelectProblem(problem.id)}
                    className="text-xl font-serif font-bold text-slate-900 hover:text-blue-700 cursor-pointer transition-colors"
                  >
                    {problem.title}
                  </h2>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                    {problem.shortDescription}
                  </p>
                </div>

                {/* Key Indicators Display */}
                <div className="space-y-2">
                  <div className="text-[11px] font-mono uppercase font-bold text-slate-500">
                    Key Performance Indicators
                  </div>
                  {indicators.slice(0, 2).map((ind, i) => (
                    <div key={i} className="bg-slate-50 p-2.5 rounded-lg border border-slate-200 text-xs flex items-center justify-between">
                      <div className="truncate pr-2">
                        <div className="font-medium text-slate-800 truncate">{ind.name}</div>
                        <div className="text-[10px] text-slate-400 font-mono">Baseline: {ind.baseline.value} ({ind.baseline.year})</div>
                      </div>
                      <div className="text-right shrink-0">
                        <div className="font-bold text-slate-900 font-mono flex items-center justify-end gap-1">
                          <span>{ind.current.value}</span>
                          {ind.trendDirection === 'increasing' && <TrendingUp className="w-3 h-3 text-blue-600" />}
                          {ind.trendDirection === 'decreasing' && <TrendingDown className="w-3 h-3 text-emerald-600" />}
                          {ind.trendDirection === 'stable' && <Minus className="w-3 h-3 text-slate-400" />}
                        </div>
                        <span className="text-[10px] text-slate-400 font-mono">{ind.current.year}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action and stats footer */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                <div className="flex items-center gap-3 text-slate-500 text-[11px]">
                  <span><strong>{institutionsCount}</strong> Authorities</span>
                  <span>•</span>
                  <span><strong>{commitmentsCount}</strong> Commitments</span>
                  <span>•</span>
                  <span><strong>{evidenceCount}</strong> Sources</span>
                </div>

                <button
                  type="button"
                  onClick={() => onSelectProblem(problem.id)}
                  className="font-bold text-blue-700 hover:text-blue-900 inline-flex items-center gap-1 group"
                >
                  <span>Inspect Chain</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
