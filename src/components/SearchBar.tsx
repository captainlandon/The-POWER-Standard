import React, { useState, useEffect, useRef } from 'react';
import { 
  PUBLIC_PROBLEMS, 
  INSTITUTIONS, 
  PUBLIC_ACTORS, 
  COMMITMENTS, 
  EVIDENCE_STORE 
} from '../data/mockData';
import { Search, X, AlertCircle, Building2, User, FileText, ShieldCheck, ArrowRight } from 'lucide-react';

interface SearchBarProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (view: string, id?: string) => void;
  onOpenEvidence: (id: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  isOpen,
  onClose,
  onNavigate,
  onOpenEvidence
}) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const q = query.toLowerCase().trim();

  // Search through all entities
  const matchedProblems = q ? PUBLIC_PROBLEMS.filter(p => 
    p.title.toLowerCase().includes(q) || 
    p.shortDescription.toLowerCase().includes(q) ||
    p.geography.toLowerCase().includes(q)
  ) : [];

  const matchedInstitutions = q ? INSTITUTIONS.filter(i => 
    i.name.toLowerCase().includes(q) || 
    i.abbreviation.toLowerCase().includes(q) || 
    i.mission.toLowerCase().includes(q)
  ) : [];

  const matchedActors = q ? PUBLIC_ACTORS.filter(a => 
    a.name.toLowerCase().includes(q) || 
    a.office.toLowerCase().includes(q)
  ) : [];

  const matchedCommitments = q ? COMMITMENTS.filter(c => 
    c.title.toLowerCase().includes(q) || 
    c.originalWordingOrParaphrase.toLowerCase().includes(q) ||
    c.status.toLowerCase().includes(q)
  ) : [];

  const matchedEvidence = q ? EVIDENCE_STORE.filter(e => 
    e.title.toLowerCase().includes(q) || 
    e.publisher.toLowerCase().includes(q) || 
    e.excerpt.toLowerCase().includes(q)
  ) : [];

  const totalResults = matchedProblems.length + matchedInstitutions.length + matchedActors.length + matchedCommitments.length + matchedEvidence.length;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-start justify-center pt-16 px-4">
      <div 
        className="w-full max-w-2xl bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in zoom-in-95 duration-150"
        role="dialog"
        aria-modal="true"
      >
        {/* Search Input Bar */}
        <div className="relative border-b border-slate-200 bg-slate-50 flex items-center px-4">
          <Search className="w-5 h-5 text-slate-400 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Escape') onClose();
            }}
            placeholder="Search problems, institutions, officials, commitments, or evidence... (e.g. 'housing', 'Mayor', 'budget')"
            className="w-full py-4 px-3 bg-transparent text-sm text-slate-900 placeholder:text-slate-400 focus:outline-hidden font-medium"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery('')}
              className="p-1 text-slate-400 hover:text-slate-600 rounded"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <kbd className="hidden sm:inline-block text-[10px] font-mono text-slate-400 bg-slate-200 px-2 py-0.5 rounded border border-slate-300 ml-2">
            ESC
          </kbd>
        </div>

        {/* Results Body */}
        <div className="max-h-[60vh] overflow-y-auto p-4 text-xs divide-y divide-slate-100">
          {!query && (
            <div className="p-6 text-center text-slate-500 space-y-4">
              <div>
                <p className="font-bold text-slate-900 mb-1 font-serif text-base">Universal Civic Record Search</p>
                <p className="text-slate-500 text-xs max-w-md mx-auto">
                  Locate public problems, statutory authorities, structured plans, government appropriations, and verifiable evidence sources.
                </p>
              </div>

              {/* Ecosystem Quick Jumps */}
              <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 text-left space-y-2">
                <span className="text-[10px] font-mono uppercase font-bold text-slate-400 block text-center">
                  Quick Jump to Ecosystem Modules (v2.0)
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5 text-xs">
                  <button
                    type="button"
                    onClick={() => { onNavigate('plan-builder'); onClose(); }}
                    className="p-2 rounded bg-white hover:bg-slate-100 border border-slate-200 text-slate-800 font-semibold text-left flex items-center justify-between"
                  >
                    <span>Plan Builder</span>
                    <ArrowRight className="w-3 h-3 text-slate-400" />
                  </button>
                  <button
                    type="button"
                    onClick={() => { onNavigate('mandate-ledger'); onClose(); }}
                    className="p-2 rounded bg-white hover:bg-slate-100 border border-slate-200 text-slate-800 font-semibold text-left flex items-center justify-between"
                  >
                    <span>Mandate Ledger</span>
                    <ArrowRight className="w-3 h-3 text-slate-400" />
                  </button>
                  <button
                    type="button"
                    onClick={() => { onNavigate('flourishing'); onClose(); }}
                    className="p-2 rounded bg-white hover:bg-slate-100 border border-slate-200 text-slate-800 font-semibold text-left flex items-center justify-between"
                  >
                    <span>Flourishing</span>
                    <ArrowRight className="w-3 h-3 text-slate-400" />
                  </button>
                  <button
                    type="button"
                    onClick={() => { onNavigate('ethics'); onClose(); }}
                    className="p-2 rounded bg-white hover:bg-slate-100 border border-slate-200 text-slate-800 font-semibold text-left flex items-center justify-between"
                  >
                    <span>Ethics Signals</span>
                    <ArrowRight className="w-3 h-3 text-slate-400" />
                  </button>
                  <button
                    type="button"
                    onClick={() => { onNavigate('civic-wire'); onClose(); }}
                    className="p-2 rounded bg-white hover:bg-slate-100 border border-slate-200 text-slate-800 font-semibold text-left flex items-center justify-between"
                  >
                    <span>Civic Wire</span>
                    <ArrowRight className="w-3 h-3 text-slate-400" />
                  </button>
                  <button
                    type="button"
                    onClick={() => { onNavigate('research-api'); onClose(); }}
                    className="p-2 rounded bg-white hover:bg-slate-100 border border-slate-200 text-slate-800 font-semibold text-left flex items-center justify-between"
                  >
                    <span>Research API</span>
                    <ArrowRight className="w-3 h-3 text-slate-400" />
                  </button>
                </div>
              </div>

              <div className="flex flex-wrap justify-center gap-1.5 pt-1">
                {['Housing', 'Mayor', 'DC Council', 'WMATA', 'Public Safety', 'Vouchers', 'Early Literacy'].map((tag) => (
                  <button
                    key={tag}
                    type="button"
                    onClick={() => setQuery(tag)}
                    className="px-2.5 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-full text-xs transition-colors"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          )}

          {query && totalResults === 0 && (
            <div className="p-8 text-center text-slate-500">
              <p className="font-semibold text-slate-700">No records matching "{query}"</p>
              <p className="mt-1 text-slate-400 text-xs">
                Try searching by broader civic topics: housing, transit, education, budget, police, or institution names.
              </p>
            </div>
          )}

          {/* Problems */}
          {matchedProblems.length > 0 && (
            <div className="py-2.5">
              <div className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <AlertCircle className="w-3.5 h-3.5 text-indigo-600" />
                <span>Public Problems ({matchedProblems.length})</span>
              </div>
              <div className="space-y-1">
                {matchedProblems.map(p => (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => {
                      onNavigate('problem-detail', p.id);
                      onClose();
                    }}
                    className="w-full text-left p-2 hover:bg-slate-50 rounded flex items-center justify-between group transition-colors"
                  >
                    <div>
                      <div className="font-bold text-slate-900 group-hover:text-blue-600">{p.title}</div>
                      <div className="text-slate-500 line-clamp-1">{p.shortDescription}</div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-blue-600 shrink-0 ml-2" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Institutions */}
          {matchedInstitutions.length > 0 && (
            <div className="py-2.5">
              <div className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Building2 className="w-3.5 h-3.5 text-blue-600" />
                <span>Institutions ({matchedInstitutions.length})</span>
              </div>
              <div className="space-y-1">
                {matchedInstitutions.map(i => (
                  <button
                    key={i.id}
                    type="button"
                    onClick={() => {
                      onNavigate('institution-detail', i.id);
                      onClose();
                    }}
                    className="w-full text-left p-2 hover:bg-slate-50 rounded flex items-center justify-between group transition-colors"
                  >
                    <div>
                      <div className="font-bold text-slate-900 group-hover:text-blue-600">
                        {i.name} ({i.abbreviation})
                      </div>
                      <div className="text-slate-500 line-clamp-1">{i.institutionType} • {i.formalAuthoritySummary}</div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-blue-600 shrink-0 ml-2" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Public Actors */}
          {matchedActors.length > 0 && (
            <div className="py-2.5">
              <div className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-emerald-600" />
                <span>Public Actors ({matchedActors.length})</span>
              </div>
              <div className="space-y-1">
                {matchedActors.map(a => (
                  <button
                    key={a.id}
                    type="button"
                    onClick={() => {
                      onNavigate('actor-detail', a.id);
                      onClose();
                    }}
                    className="w-full text-left p-2 hover:bg-slate-50 rounded flex items-center justify-between group transition-colors"
                  >
                    <div>
                      <div className="font-bold text-slate-900 group-hover:text-blue-600">{a.name}</div>
                      <div className="text-slate-500">{a.office} • {a.termDates}</div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-blue-600 shrink-0 ml-2" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Commitments */}
          {matchedCommitments.length > 0 && (
            <div className="py-2.5">
              <div className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <FileText className="w-3.5 h-3.5 text-amber-600" />
                <span>Documented Commitments ({matchedCommitments.length})</span>
              </div>
              <div className="space-y-1">
                {matchedCommitments.map(c => (
                  <button
                    key={c.id}
                    type="button"
                    onClick={() => {
                      onNavigate('commitment-detail', c.id);
                      onClose();
                    }}
                    className="w-full text-left p-2 hover:bg-slate-50 rounded flex items-center justify-between group transition-colors"
                  >
                    <div>
                      <div className="font-bold text-slate-900 group-hover:text-blue-600">{c.title}</div>
                      <div className="text-slate-500 line-clamp-1">{c.sourceStatement} • Status: {c.status}</div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-blue-600 shrink-0 ml-2" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Evidence */}
          {matchedEvidence.length > 0 && (
            <div className="py-2.5">
              <div className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-purple-600" />
                <span>Evidence Records ({matchedEvidence.length})</span>
              </div>
              <div className="space-y-1">
                {matchedEvidence.map(e => (
                  <button
                    key={e.id}
                    type="button"
                    onClick={() => {
                      onOpenEvidence(e.id);
                      onClose();
                    }}
                    className="w-full text-left p-2 hover:bg-slate-50 rounded flex items-center justify-between group transition-colors"
                  >
                    <div>
                      <div className="font-bold text-slate-900 group-hover:text-blue-600">{e.title}</div>
                      <div className="text-slate-500 line-clamp-1">{e.publisher} • {e.publicationDate}</div>
                    </div>
                    <span className="text-[10px] text-purple-700 bg-purple-50 px-2 py-0.5 rounded border border-purple-200 shrink-0 ml-2">
                      Inspect Citation
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="bg-slate-50 p-3 border-t border-slate-200 text-[11px] text-slate-500 flex items-center justify-between">
          <span>Nonpartisan public records database</span>
          <span className="font-mono text-slate-400">Total matched: {totalResults} items</span>
        </div>
      </div>
    </div>
  );
};
