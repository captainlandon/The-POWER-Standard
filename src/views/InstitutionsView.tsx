import React, { useState } from 'react';
import { INSTITUTIONS, PUBLIC_PROBLEMS, PUBLIC_ACTORS } from '../data/mockData';
import { AuthorityBadge, DataStatusBadge, SimulatedRecordNotice } from '../components/Badge';
import { 
  Building2, 
  Search, 
  Filter, 
  ArrowRight, 
  BookOpen, 
  Scale, 
  ShieldAlert,
  Sparkles,
  Loader2,
  AlertTriangle,
  Layers,
  HelpCircle,
  CheckCircle2
} from 'lucide-react';

interface InstitutionsViewProps {
  onSelectInstitution: (id: string) => void;
}

export const InstitutionsView: React.FC<InstitutionsViewProps> = ({ onSelectInstitution }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState<string>('All');

  // AI Statutory Authority Discovery State
  const [issueQuery, setIssueQuery] = useState('Who has the legal authority to repair road infrastructure on Constitution Avenue NW and curb traffic deaths?');
  const [isDiscovering, setIsDiscovering] = useState(false);
  const [mappingResult, setMappingResult] = useState<any | null>(null);
  const [mappingError, setMappingError] = useState<string | null>(null);

  const handleDiscoverAuthority = async (customQuery?: string) => {
    const q = customQuery || issueQuery;
    if (!q.trim()) return;

    setIsDiscovering(true);
    setMappingError(null);
    try {
      const res = await fetch('/api/ai/discover-authority', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          issueDescription: q,
          jurisdiction: 'District of Columbia',
        }),
      });
      const data = await res.json();
      if (data.authorityMapping) {
        setMappingResult(data.authorityMapping);
      } else {
        setMappingError('Authority mapping could not be completed. Please try again.');
      }
    } catch (e) {
      setMappingError((e as Error).message);
    } finally {
      setIsDiscovering(false);
    }
  };

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
      <div className="border-b border-stone-200 pb-4">
        <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#0A1D3B] mb-1 flex items-center gap-1.5">
          <span className="text-[#B38A3E]">★ ★ ★</span>
          <span>Constitutional Separation of Powers · Institutional Directory</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-serif font-black text-[#0A1D3B]">
          Public Authorities & Statutory Charters
        </h1>
        <p className="text-sm text-[#596273] max-w-3xl mt-2 leading-relaxed">
          In a constitutional republic, power is distributed across legislative, executive, administrative, and regulatory bodies. Inspect each authority by its statutory charter, budget control, legal limits, and inter-agency checks and balances.
        </p>
      </div>

      {/* Simulated Demonstration Record Notice (Requirement 2) */}
      <SimulatedRecordNotice />

      {/* AI Statutory Authority & Veto Point Locator (The POWER Standard v2.0) */}
      <div className="bg-slate-900 text-white rounded-2xl p-6 border border-slate-800 shadow-md space-y-5">
        <div className="flex items-start justify-between flex-wrap gap-4">
          <div className="space-y-1 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-amber-400 text-slate-950 uppercase">
                AI Authority & Veto Point Locator
              </span>
              <span className="text-xs text-slate-400 font-mono">
                Charter & Home Rule Specialist
              </span>
            </div>
            <h2 className="text-lg font-serif font-bold text-white">
              Map Legal Authority, Home Rule Boundaries & Civic Leverage Points
            </h2>
            <p className="text-xs text-slate-300 leading-relaxed">
              Civic participants often petition the wrong institution. Enter any public friction or reform goal to identify which constitutional office holds primary jurisdiction, where federal/intergovernmental veto points lie, and where citizen testimony actually has leverage.
            </p>
          </div>

          <div className="flex items-center gap-1.5 flex-wrap text-xs">
            <span className="text-slate-400 font-mono text-[11px]">Quick Scenarios:</span>
            <button
              type="button"
              onClick={() => {
                const q = 'Who has legal authority over adult criminal felony prosecution in the District of Columbia?';
                setIssueQuery(q);
                handleDiscoverAuthority(q);
              }}
              className="px-2.5 py-1 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white rounded border border-slate-700 text-[11px] transition-colors"
            >
              Felony Prosecution
            </button>
            <button
              type="button"
              onClick={() => {
                const q = 'Who approves dedicated bus rapid transit lanes that cross federal parkways and commercial corridors?';
                setIssueQuery(q);
                handleDiscoverAuthority(q);
              }}
              className="px-2.5 py-1 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white rounded border border-slate-700 text-[11px] transition-colors"
            >
              Transit Bus Lanes
            </button>
            <button
              type="button"
              onClick={() => {
                const q = 'Who controls municipal rent stabilization caps and historic preservation variances?';
                setIssueQuery(q);
                handleDiscoverAuthority(q);
              }}
              className="px-2.5 py-1 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white rounded border border-slate-700 text-[11px] transition-colors"
            >
              Rent Caps & Zoning
            </button>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-3">
          <input
            type="text"
            value={issueQuery}
            onChange={(e) => setIssueQuery(e.target.value)}
            placeholder="Describe any civic problem or desired policy reform..."
            className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-hidden focus:ring-1 focus:ring-amber-400 font-sans"
          />
          <button
            type="button"
            onClick={() => handleDiscoverAuthority()}
            disabled={isDiscovering}
            className="w-full sm:w-auto px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl text-xs flex items-center justify-center gap-2 shrink-0 transition-all shadow-sm disabled:opacity-50"
          >
            {isDiscovering ? <Loader2 className="w-4 h-4 animate-spin" /> : <Sparkles className="w-4 h-4 text-amber-300" />}
            <span>{isDiscovering ? 'Mapping Power...' : 'Discover Legal Authority'}</span>
          </button>
        </div>

        {mappingError && (
          <div className="p-3 bg-rose-950/80 border border-rose-800 text-rose-200 text-xs rounded-xl flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 text-rose-400 shrink-0" />
            <span>{mappingError}</span>
          </div>
        )}

        {/* Authority Mapping Results Display */}
        {mappingResult && (
          <div className="bg-slate-950/80 border border-slate-800 rounded-xl p-5 space-y-4 animate-in fade-in duration-200 text-xs text-slate-300">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Primary Authority */}
              <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 space-y-2">
                <div className="font-mono font-bold text-[11px] uppercase text-amber-400 flex items-center gap-1.5">
                  <Scale className="w-3.5 h-3.5" />
                  Primary Legal Authority
                </div>
                <div className="text-sm font-bold text-white">
                  {mappingResult.primaryLegalAuthority?.institution}
                </div>
                <div className="text-slate-400 font-mono text-[11px]">
                  Office: {mappingResult.primaryLegalAuthority?.officeTitle}
                </div>
                <p className="text-slate-300 text-xs leading-relaxed">
                  {mappingResult.primaryLegalAuthority?.statutoryPower}
                </p>
                <div className="bg-slate-800/80 p-2 rounded text-[11px] font-mono text-slate-400">
                  Basis: {mappingResult.primaryLegalAuthority?.legalBasis}
                </div>
              </div>

              {/* Home Rule & Federal Limits */}
              <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 space-y-2">
                <div className="font-mono font-bold text-[11px] uppercase text-blue-400 flex items-center gap-1.5">
                  <ShieldAlert className="w-3.5 h-3.5" />
                  Home Rule & Federal Jurisdictional Limits
                </div>
                <p className="text-slate-300 text-xs leading-relaxed">
                  {mappingResult.homeRuleOrFederalLimits}
                </p>
                <div className="pt-2">
                  <span className="font-mono font-bold text-[10px] uppercase text-slate-400">
                    Dependent / Shared Entities:
                  </span>
                  <ul className="mt-1 space-y-1">
                    {(mappingResult.sharedOrDependentEntities || []).map((ent: string, i: number) => (
                      <li key={i} className="flex items-start gap-1.5 text-[11px] text-slate-300">
                        <span className="text-blue-400">•</span>
                        <span>{ent}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Veto Points & Actionable Civic Leverage */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
              <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 space-y-2">
                <div className="font-mono font-bold text-[11px] uppercase text-rose-400 flex items-center gap-1.5">
                  <AlertTriangle className="w-3.5 h-3.5" />
                  Institutional Veto Points
                </div>
                <ul className="space-y-1.5">
                  {(mappingResult.institutionalVetoPoints || []).map((v: string, i: number) => (
                    <li key={i} className="flex items-start gap-1.5 text-[11px] text-slate-300">
                      <span className="text-rose-400">•</span>
                      <span>{v}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-emerald-950/40 border border-emerald-800/80 rounded-xl p-4 space-y-2">
                <div className="font-mono font-bold text-[11px] uppercase text-emerald-400 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  Actionable Civic Leverage Point
                </div>
                <p className="text-emerald-100 text-xs leading-relaxed">
                  {mappingResult.actionableCivicLeveragePoint}
                </p>
                <div className="pt-1 text-[11px] text-emerald-300/80 font-mono">
                  {mappingResult.powerStandardRecommendation}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

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
