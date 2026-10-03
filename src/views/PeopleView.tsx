import React, { useState } from 'react';
import { PUBLIC_ACTORS, INSTITUTIONS, COMMITMENTS } from '../data/mockData';
import { DataStatusBadge, SimulatedRecordNotice } from '../components/Badge';
import { User, Search, ArrowRight, ShieldCheck, FileText, CheckCircle2, Clock } from 'lucide-react';

interface PeopleViewProps {
  onSelectActor: (id: string) => void;
}

export const PeopleView: React.FC<PeopleViewProps> = ({ onSelectActor }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filtered = PUBLIC_ACTORS.filter(a => 
    a.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    a.office.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Header */}
      <div>
        <div className="text-xs font-mono font-bold uppercase tracking-wider text-indigo-700 mb-1">
          Public Officials & Actors Directory
        </div>
        <h1 className="text-3xl sm:text-4xl font-serif font-black text-slate-900">
          Responsible Public Actors
        </h1>
        <p className="text-sm text-slate-600 max-w-3xl mt-2 leading-relaxed">
          Inspect public officials strictly by their formal statutory authorities and documented public records. POWER does not assign ideological ratings, election predictions, or political scores.
        </p>
      </div>

      {/* Nonpartisan Notice */}
      <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-xs text-slate-700 flex items-start gap-3">
        <ShieldCheck className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
        <div>
          <strong className="text-slate-900 font-bold block mb-0.5">Database Descriptors Standard:</strong>
          POWER tracks objective record quantities (such as verified statements, detailed action plans, and outcome publications). These are catalog counts, not performance evaluations or endorsements.
        </div>
      </div>

      {/* Simulated Demonstration Record Notice (Requirement 2) */}
      <SimulatedRecordNotice />

      {/* Search Input */}
      <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
        <div className="relative max-w-md">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search public actors by name or office..."
            className="w-full pl-9 pr-3 py-1.5 text-xs bg-slate-50 border border-slate-300 rounded-lg focus:outline-hidden focus:ring-1 focus:ring-slate-900"
          />
        </div>
      </div>

      {/* Actors Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((actor) => {
          const institution = INSTITUTIONS.find(i => i.id === actor.institutionId);

          return (
            <div
              key={actor.id}
              className="bg-white border border-slate-200 rounded-xl p-6 shadow-xs hover:shadow-md transition-all flex flex-col justify-between space-y-5 group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs text-slate-500 font-mono">
                  <span className="bg-slate-100 text-slate-700 px-2 py-0.5 rounded border border-slate-200">
                    {actor.jurisdiction}
                  </span>
                  <span>{actor.termStatus}</span>
                </div>

                <div className="pt-1">
                  <DataStatusBadge status={actor.dataStatus} />
                </div>

                <div>
                  <h2 
                    onClick={() => onSelectActor(actor.id)}
                    className="text-xl font-serif font-bold text-slate-900 group-hover:text-blue-700 cursor-pointer transition-colors"
                  >
                    {actor.name}
                  </h2>
                  <div className="text-xs font-semibold text-slate-700 mt-0.5">{actor.office}</div>
                  <div className="text-xs text-slate-500">{institution?.name}</div>
                  <div className="text-[11px] font-mono text-slate-400 mt-1">{actor.termDates}</div>
                </div>

                {/* Database Descriptors Matrix */}
                <div className="bg-slate-50 p-3 rounded-lg border border-slate-200 space-y-2 text-xs">
                  <div className="text-[10px] font-mono uppercase font-bold text-slate-400">
                    Database Record Descriptors
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-[11px]">
                    <div>
                      <span className="text-slate-500">Documented commitments:</span>
                      <strong className="text-slate-900 font-mono block">{actor.documentedCommitmentsCount}</strong>
                    </div>
                    <div>
                      <span className="text-slate-500">Specific action plans:</span>
                      <strong className="text-slate-900 font-mono block">{actor.specificPlansCount}</strong>
                    </div>
                    <div>
                      <span className="text-slate-500">Implementation records:</span>
                      <strong className="text-slate-900 font-mono block">{actor.implementationRecordsCount}</strong>
                    </div>
                    <div>
                      <span className="text-slate-500">Outcome data available:</span>
                      <strong className="text-slate-900 font-mono block">{actor.outcomeDataAvailableCount}</strong>
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-slate-400 text-[11px] font-mono">
                  {actor.authorities.length} Legal Authorities
                </span>

                <button
                  type="button"
                  onClick={() => onSelectActor(actor.id)}
                  className="font-bold text-blue-700 hover:text-blue-900 inline-flex items-center gap-1 group/btn"
                >
                  <span>Public Record</span>
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
