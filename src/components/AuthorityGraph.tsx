import React, { useState } from 'react';
import { 
  PublicProblem, 
  Institution, 
  PublicActor, 
  AuthorityType, 
  InstitutionRelationship,
  InstitutionRelationshipType
} from '../types/power';
import { INSTITUTION_RELATIONSHIPS } from '../data/mockData';
import { AuthorityBadge, DataStatusBadge, EpistemicBadge } from './Badge';
import { 
  Building2, 
  UserCheck, 
  CheckCircle, 
  XCircle, 
  ArrowRight, 
  ShieldAlert, 
  BookOpen, 
  Layers,
  ChevronRight,
  Filter,
  GitBranch,
  Link2
} from 'lucide-react';

interface AuthorityGraphProps {
  problem: PublicProblem;
  institutions: Institution[];
  actors: PublicActor[];
  onOpenEvidence: (evidenceId: string) => void;
  onSelectActor?: (actorId: string) => void;
  onSelectInstitution?: (institutionId: string) => void;
}

export const AuthorityGraph: React.FC<AuthorityGraphProps> = ({
  problem,
  institutions,
  actors,
  onOpenEvidence,
  onSelectActor,
  onSelectInstitution
}) => {
  const [selectedEntityId, setSelectedEntityId] = useState<string>(institutions[0]?.id || '');
  const [selectedFilter, setSelectedFilter] = useState<AuthorityType | 'All'>('All');
  const [activeTab, setActiveTab] = useState<'hierarchy' | 'relationships'>('hierarchy');

  // Find currently selected institution or actor
  const selectedInstitution = institutions.find(i => i.id === selectedEntityId);
  const selectedActor = actors.find(a => a.id === selectedEntityId);

  const activeEntityName = selectedInstitution?.name || selectedActor?.name || 'Select an entity';
  const activeEntityRole = selectedInstitution?.institutionType || selectedActor?.office || '';
  const activeLegalBasis = selectedInstitution?.legalBasis || selectedActor?.authorities[0]?.legalBasis || 'District of Columbia Official Code';
  const activeAuthorities = selectedInstitution?.authorities || selectedActor?.authorities || [];

  // Filter relevant typed institutional relationships
  const instIds = institutions.map(i => i.id);
  const relevantRelationships = INSTITUTION_RELATIONSHIPS.filter(
    rel => instIds.includes(rel.sourceInstitutionId) || instIds.includes(rel.targetInstitutionId)
  );

  const relationshipStyles: Record<InstitutionRelationshipType, { bg: string; text: string; border: string }> = {
    Oversees: { bg: 'bg-violet-100', text: 'text-violet-900', border: 'border-violet-300' },
    Funds: { bg: 'bg-emerald-100', text: 'text-emerald-900', border: 'border-emerald-300' },
    Appoints: { bg: 'bg-blue-100', text: 'text-blue-900', border: 'border-blue-300' },
    Confirms: { bg: 'bg-indigo-100', text: 'text-indigo-900', border: 'border-indigo-300' },
    Regulates: { bg: 'bg-amber-100', text: 'text-amber-900', border: 'border-amber-300' },
    Administers: { bg: 'bg-sky-100', text: 'text-sky-900', border: 'border-sky-300' },
    Audits: { bg: 'bg-rose-100', text: 'text-rose-900', border: 'border-rose-300' },
    'Contracts With': { bg: 'bg-teal-100', text: 'text-teal-900', border: 'border-teal-300' },
    'Depends On': { bg: 'bg-orange-100', text: 'text-orange-900', border: 'border-orange-300' },
    'Constrained By': { bg: 'bg-stone-100', text: 'text-stone-900', border: 'border-stone-300' },
    'Coordinates With': { bg: 'bg-cyan-100', text: 'text-cyan-900', border: 'border-cyan-300' },
  };

  return (
    <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-xs">
      {/* Top Banner explaining the safeguard */}
      <div className="bg-slate-900 text-slate-100 p-4 border-b border-slate-800">
        <div className="flex items-start justify-between gap-4 flex-wrap">
          <div className="space-y-1">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="flex items-center gap-1 text-xs font-mono uppercase tracking-wider text-amber-400 font-bold">
                <ShieldAlert className="w-3.5 h-3.5" />
                Safeguard Against Simplistic Attribution
              </span>
              <DataStatusBadge status={problem.dataStatus} inline />
            </div>
            <h3 className="text-lg font-serif font-bold text-white">
              Institutional Authority & Checks Map: {problem.title}
            </h3>
            <p className="text-xs text-slate-300 max-w-2xl leading-relaxed">
              Before holding public actors accountable, POWER distinguishes what an office <strong className="text-emerald-300">legally controls</strong> from what it <strong className="text-rose-300">does NOT control</strong>. Click any node to inspect jurisdictional boundaries, statutory limits, and formal inter-agency relationships.
            </p>
          </div>

          {/* Sub-view toggle & Filter */}
          <div className="flex items-center gap-2 flex-wrap">
            <div className="bg-slate-800 p-0.5 rounded-lg border border-slate-700 flex text-xs">
              <button
                type="button"
                onClick={() => setActiveTab('hierarchy')}
                className={`px-3 py-1 rounded font-medium transition-colors ${
                  activeTab === 'hierarchy' ? 'bg-indigo-600 text-white' : 'text-slate-300 hover:text-white'
                }`}
              >
                Nodes & Powers
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('relationships')}
                className={`px-3 py-1 rounded font-medium transition-colors flex items-center gap-1 ${
                  activeTab === 'relationships' ? 'bg-indigo-600 text-white' : 'text-slate-300 hover:text-white'
                }`}
              >
                <GitBranch className="w-3 h-3" />
                Typed Checks ({relevantRelationships.length})
              </button>
            </div>

            {activeTab === 'hierarchy' && (
              <div className="flex items-center gap-1.5 self-center">
                <Filter className="w-3.5 h-3.5 text-slate-400" />
                <select
                  value={selectedFilter}
                  onChange={(e) => setSelectedFilter(e.target.value as any)}
                  className="bg-slate-800 text-slate-200 text-xs border border-slate-700 rounded px-2.5 py-1 focus:outline-hidden"
                >
                  <option value="All">All Authority Types</option>
                  <option value="Legislative">Legislative</option>
                  <option value="Executive">Executive</option>
                  <option value="Budgetary">Budgetary</option>
                  <option value="Regulatory">Regulatory</option>
                  <option value="Administrative">Administrative</option>
                  <option value="Enforcement">Enforcement</option>
                  <option value="Oversight">Oversight</option>
                </select>
              </div>
            )}
          </div>
        </div>
      </div>

      {activeTab === 'relationships' ? (
        /* Typed Institution Relationships View (Requirement 7) */
        <div className="p-6 space-y-4 bg-slate-50/50">
          <div className="flex items-center justify-between flex-wrap gap-2 text-xs">
            <span className="font-mono text-slate-600 font-bold uppercase tracking-wider">
              Formal Inter-Agency & Inter-Branch Relationships
            </span>
            <span className="text-slate-500 font-mono text-[11px]">
              Governed by D.C. Home Rule Act & D.C. Official Code
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {relevantRelationships.map((rel) => {
              const source = institutions.find(i => i.id === rel.sourceInstitutionId) || { name: rel.sourceInstitutionId, abbreviation: rel.sourceInstitutionId };
              const target = institutions.find(i => i.id === rel.targetInstitutionId) || { name: rel.targetInstitutionId, abbreviation: rel.targetInstitutionId };
              const relStyle = relationshipStyles[rel.relationshipType] || relationshipStyles['Depends On'];

              return (
                <div key={rel.id} className="bg-white border border-slate-200 rounded-xl p-4 shadow-xs space-y-3">
                  <div className="flex items-center justify-between flex-wrap gap-1">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-slate-900">
                      <span className="font-mono bg-slate-100 text-slate-800 px-2 py-0.5 rounded border border-slate-200">
                        {source.abbreviation}
                      </span>
                      <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                      <span className={`px-2 py-0.5 rounded font-mono text-[11px] font-bold border ${relStyle.bg} ${relStyle.text} ${relStyle.border}`}>
                        {rel.relationshipType}
                      </span>
                      <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                      <span className="font-mono bg-slate-100 text-slate-800 px-2 py-0.5 rounded border border-slate-200">
                        {target.abbreviation}
                      </span>
                    </div>

                    <EpistemicBadge status={rel.epistemicStatus} />
                  </div>

                  <p className="text-xs text-slate-700 leading-relaxed">
                    {rel.description}
                  </p>

                  <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                    <span className="truncate max-w-[280px]">Basis: {rel.legalBasis}</span>
                    <button
                      type="button"
                      onClick={() => onOpenEvidence(rel.evidenceId)}
                      className="text-blue-700 hover:underline shrink-0"
                    >
                      Legal Source →
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        /* Hierarchical Nodes Grid */
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[480px]">
          {/* Left Column: Hierarchy & Network Nodes */}
          <div className="lg:col-span-7 p-6 border-b lg:border-b-0 lg:border-r border-slate-200 bg-slate-50/50 space-y-6 overflow-y-auto">
            {/* Central Root: Problem */}
            <div className="bg-white border-2 border-indigo-200 rounded-xl p-4 shadow-xs">
              <div className="flex items-center justify-between text-xs font-mono text-indigo-700 font-bold uppercase mb-1">
                <span>Public Problem Focus</span>
                <span className="bg-indigo-50 px-2 py-0.5 rounded border border-indigo-200">Jurisdiction: {problem.geography}</span>
              </div>
              <h4 className="text-base font-serif font-bold text-slate-900">{problem.title}</h4>
              <p className="text-xs text-slate-600 mt-1 line-clamp-2">{problem.shortDescription}</p>
            </div>

            {/* Connected Institutions Level */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase tracking-wider font-mono">
                <Building2 className="w-3.5 h-3.5" />
                <span>Responsible Civic Institutions ({institutions.length})</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {institutions.map((inst) => {
                  const isSelected = selectedEntityId === inst.id;
                  const matchesFilter = selectedFilter === 'All' || inst.authorities.some(a => a.authorityType === selectedFilter);

                  if (!matchesFilter) return null;

                  return (
                    <button
                      key={inst.id}
                      type="button"
                      onClick={() => setSelectedEntityId(inst.id)}
                      className={`text-left p-3.5 rounded-lg border transition-all relative ${
                        isSelected
                          ? 'bg-blue-50/80 border-blue-500 shadow-md ring-2 ring-blue-500/20'
                          : 'bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50 shadow-xs'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-1 mb-1">
                        <span className="text-xs font-mono font-bold text-slate-700 bg-slate-100 px-1.5 py-0.5 rounded border border-slate-200">
                          {inst.abbreviation}
                        </span>
                        <span className="text-[10px] text-slate-500 font-medium">{inst.institutionType}</span>
                      </div>
                      <div className="font-semibold text-slate-900 text-sm leading-snug line-clamp-1">
                        {inst.name}
                      </div>
                      <div className="flex flex-wrap gap-1 mt-2">
                        {inst.authorities.map(a => (
                          <AuthorityBadge key={a.id} type={a.authorityType} size="sm" />
                        ))}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Connected Public Officials Level */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase tracking-wider font-mono">
                <UserCheck className="w-3.5 h-3.5" />
                <span>Public Actors in Relevant Offices ({actors.length})</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {actors.map((actor) => {
                  const isSelected = selectedEntityId === actor.id;
                  const parentInst = institutions.find(i => i.id === actor.institutionId);

                  return (
                    <button
                      key={actor.id}
                      type="button"
                      onClick={() => setSelectedEntityId(actor.id)}
                      className={`text-left p-3 rounded-lg border transition-all ${
                        isSelected
                          ? 'bg-indigo-50/80 border-indigo-500 shadow-md ring-2 ring-indigo-500/20'
                          : 'bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50 shadow-xs'
                      }`}
                    >
                      <div className="font-bold text-slate-900 text-xs sm:text-sm">{actor.name}</div>
                      <div className="text-xs text-slate-600 line-clamp-1">{actor.office}</div>
                      <div className="text-[10px] text-slate-400 mt-1 flex items-center justify-between">
                        <span>{parentInst?.abbreviation || 'District'}</span>
                        <span className="font-mono text-slate-500">{actor.documentedCommitmentsCount} commitments</span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Deep Inspection Panel (Controls vs Does NOT Control) */}
          <div className="lg:col-span-5 p-6 bg-white flex flex-col justify-between space-y-6">
            <div className="space-y-5">
              {/* Header info */}
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-500 font-bold">
                    Statutory Power Inspection
                  </span>
                  <span className="text-xs bg-slate-100 text-slate-700 px-2 py-0.5 rounded font-mono">
                    {selectedInstitution ? 'Institution Profile' : 'Public Actor Profile'}
                  </span>
                </div>
                <h4 className="text-xl font-serif font-bold text-slate-900 leading-snug">
                  {activeEntityName}
                </h4>
                <p className="text-xs text-slate-600 mt-0.5">{activeEntityRole}</p>
                <div className="mt-2 text-xs font-mono text-slate-500 bg-slate-50 p-2 rounded border border-slate-200 flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
                  <span className="truncate">Legal Basis: {activeLegalBasis}</span>
                </div>
              </div>

              {/* What this entity CAN CONTROL */}
              <div className="bg-emerald-50/60 border border-emerald-200 rounded-lg p-3.5">
                <div className="flex items-center gap-1.5 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-2 font-mono">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>What it Has Legal Authority to Control</span>
                </div>
                <ul className="space-y-1.5 text-xs text-slate-800">
                  {activeAuthorities.flatMap(a => a.whatItControls).slice(0, 4).map((item, idx) => (
                    <li key={idx} className="flex items-start gap-1.5">
                      <span className="text-emerald-500 font-bold">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* What this entity CANNOT CONTROL (The Key Blame Safeguard) */}
              <div className="bg-rose-50/60 border border-rose-200 rounded-lg p-3.5">
                <div className="flex items-center gap-1.5 text-rose-800 text-xs font-bold uppercase tracking-wider mb-2 font-mono">
                  <XCircle className="w-4 h-4 text-rose-600 shrink-0" />
                  <span>What it Does NOT Control (Jurisdictional Limits)</span>
                </div>
                <ul className="space-y-1.5 text-xs text-slate-800">
                  {activeAuthorities.flatMap(a => a.whatItDoesNotControl).slice(0, 4).map((item, idx) => (
                    <li key={idx} className="flex items-start gap-1.5">
                      <span className="text-rose-500 font-bold">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* External Dependencies */}
              <div className="bg-slate-50 border border-slate-200 rounded-lg p-3 text-xs">
                <span className="font-semibold text-slate-700 block mb-1">Statutory Dependencies & Checks:</span>
                <p className="text-slate-600">
                  {activeAuthorities[0]?.dependencies.join('; ') || 'Requires annual Council budget appropriation and Chief Financial Officer revenue certification.'}
                </p>
              </div>
            </div>

            {/* Navigation Action Buttons */}
            <div className="pt-4 border-t border-slate-200 flex items-center justify-between gap-3">
              {selectedInstitution && onSelectInstitution && (
                <button
                  type="button"
                  onClick={() => onSelectInstitution(selectedInstitution.id)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-700 hover:text-blue-900"
                >
                  <span>View Full Institution Charter</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              )}
              {selectedActor && onSelectActor && (
                <button
                  type="button"
                  onClick={() => onSelectActor(selectedActor.id)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-700 hover:text-blue-900"
                >
                  <span>View Actor Profile & Record</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              )}
              {activeAuthorities[0]?.sourceEvidenceId && (
                <button
                  type="button"
                  onClick={() => onOpenEvidence(activeAuthorities[0].sourceEvidenceId)}
                  className="text-xs bg-slate-100 hover:bg-slate-200 text-slate-700 px-3 py-1.5 rounded font-medium border border-slate-300 ml-auto"
                >
                  Inspect Legal Source
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
