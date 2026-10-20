import React, { useMemo, useState } from 'react';
import { ArrowLeft, ArrowRight, BookOpen, Clock3, ExternalLink, FileSearch, ShieldAlert } from 'lucide-react';
import { retrospectivePilot } from '../data/retrospectivePilot';
import { applyRetrospectiveReleasePolicy } from '../data/retrospectiveReleasePolicy';
import type { HistoricalDate } from '../types/retrospective';

const dataset = applyRetrospectiveReleasePolicy(retrospectivePilot);
const dateLabel = (date: HistoricalDate): string =>
  date.value ? date.value + (date.endValue ? ' to ' + date.endValue : '') : 'Date not established';

export const RetrospectiveView: React.FC<{ onNavigate: (view: string) => void }> = ({ onNavigate }) => {
  const [query, setQuery] = useState('');
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [panel, setPanel] = useState<'timeline' | 'evidence' | 'limitations'>('timeline');
  const filtered = useMemo(() => dataset.cases.filter(item =>
    [item.title, item.description, ...item.issueTags, ...item.jurisdictions]
      .join(' ').toLowerCase().includes(query.toLowerCase().trim())
  ), [query]);
  const selected = dataset.cases.find(item => item.id === selectedId);
  const events = selected ? dataset.events.filter(item => item.caseId === selected.id)
    .sort((a, b) => (a.date.value ?? '').localeCompare(b.date.value ?? '')) : [];
  const claims = selected ? dataset.claims.filter(item => item.caseId === selected.id) : [];
  const sourceIds = new Set(claims.flatMap(item => item.sourceLinks.map(link => link.sourceId)));
  const sources = dataset.sources.filter(source => sourceIds.has(source.id));

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10 text-[#17202A]">
      <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
        <button type="button" onClick={() => selected ? setSelectedId(null) : onNavigate('home')}
          className="inline-flex items-center gap-2 text-sm text-[#2457A7] hover:underline">
          <ArrowLeft size={16}/> {selected ? 'All historical cases' : 'POWER home'}
        </button>
        <span className="text-xs font-bold uppercase tracking-wider border border-amber-300 bg-amber-50 text-amber-900 px-3 py-1 rounded">
          Research preview · Not a verified historical audit
        </span>
      </div>
      <p className="font-mono uppercase text-xs tracking-widest text-[#8A672E] mb-2">The POWER Standard / Historical Accountability</p>
      <h1 className="font-serif text-3xl md:text-5xl font-bold text-[#0A1D3B] mb-3">POWER Retrospective</h1>
      <p className="max-w-3xl text-sm md:text-base text-slate-700 mb-8">
        Explore historical policy decisions, their evidence, and their documented implementation and outcomes.
        A case is not verified merely because it exists in the archive.
      </p>
      {!selected ? (
        <>
          <label htmlFor="historical-search" className="block text-sm font-semibold mb-2">Search historical cases</label>
          <input id="historical-search" type="search" value={query} onChange={event => setQuery(event.target.value)}
            placeholder="Search by policy, period, issue, or jurisdiction"
            className="w-full max-w-xl border border-slate-300 rounded-lg px-4 py-3 bg-white mb-6 focus:outline-2 focus:outline-[#2457A7]" />
          <p aria-live="polite" className="text-sm text-slate-500 mb-4">{filtered.length} research {filtered.length === 1 ? 'case' : 'cases'} available</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filtered.map(item => (
              <article key={item.id} className="border border-slate-200 bg-white p-6 rounded-xl shadow-sm">
                <div className="flex items-center gap-2 text-xs mb-3"><Clock3 size={14}/> {dateLabel(item.period)}
                  <span className="ml-auto text-amber-800 bg-amber-50 px-2 py-1 rounded">Draft / demo</span>
                </div>
                <h2 className="font-serif text-2xl font-bold mb-2">{item.title}</h2>
                <p className="text-sm text-slate-700 mb-4">{item.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">{item.issueTags.map(tag =>
                  <span key={tag} className="bg-slate-100 px-2 py-1 rounded text-xs">{tag}</span>)}</div>
                <button type="button" onClick={() => { setSelectedId(item.id); setPanel('timeline'); }}
                  className="inline-flex items-center gap-2 text-[#2457A7] text-sm font-semibold hover:underline">
                  Open research case <ArrowRight size={16}/>
                </button>
              </article>
            ))}
          </div>
          {filtered.length === 0 && <p className="text-sm text-slate-600">No cases match this search. The historical corpus is still being built.</p>}
        </>
      ) : (
        <div>
          <h2 className="font-serif text-2xl font-bold mb-2">{selected.title}</h2>
          <p className="text-slate-700 mb-4">{selected.description}</p>
          <div className="rounded-lg border-l-4 border-amber-500 bg-amber-50 px-4 py-3 mb-6 text-sm text-amber-950" role="note">
            <ShieldAlert className="inline mr-2" size={17}/>
            This case is a research placeholder. No historical claims or policy effects have been independently certified.
          </div>
          <div role="tablist" aria-label="Historical record sections" className="flex flex-wrap gap-2 mb-5">
            {(['timeline','evidence','limitations'] as const).map(tab =>
              <button key={tab} type="button" role="tab" aria-selected={panel === tab}
                onClick={() => setPanel(tab)}
                className={`rounded-lg px-4 py-2 text-sm font-semibold border ${panel === tab ? 'bg-[#0A1D3B] text-white' : 'bg-white text-slate-700'}`}>
                {tab === 'timeline' ? 'Timeline' : tab === 'evidence' ? 'Evidence' : 'Limitations'}
              </button>)}
          </div>
          {panel === 'timeline' && <div role="tabpanel" className="space-y-4">
            <h3 className="font-serif text-xl font-bold">Historical chronology</h3>
            {events.length ? events.map(event => <article key={event.id} className="border-l-2 border-[#2457A7] pl-5 py-2">
              <p className="text-xs text-slate-600">{dateLabel(event.date)} · {event.eventType}</p>
              <h4 className="font-semibold">{event.title}</h4><p className="text-sm">{event.summary}</p>
            </article>) : <p className="rounded-lg bg-slate-100 p-5 text-sm">No verified timeline events are currently published for this case.</p>}
          </div>}
          {panel === 'evidence' && <div role="tabpanel" className="space-y-4">
            <h3 className="font-serif text-xl font-bold flex items-center gap-2"><FileSearch/> Historical evidence</h3>
            {sources.length ? sources.map(source => <article key={source.id} className="bg-white rounded-lg border p-4">
              <h4 className="font-semibold">{source.title}</h4>
              <p className="text-xs text-slate-500">{source.issuingBody} · Review: {source.verificationState}</p>
              <a href={source.canonicalUrl} rel="noopener noreferrer" target="_blank" className="inline-flex items-center gap-1 text-[#2457A7] text-sm mt-2">Inspect source <ExternalLink size={14}/></a>
            </article>) : <p className="bg-slate-100 rounded-lg p-5 text-sm">No reviewed source-linked claims have been added yet. Research sources will appear here after intake and review.</p>}
            <button type="button" onClick={() => onNavigate('methodology')} className="text-sm text-[#2457A7] hover:underline flex items-center gap-2"><BookOpen size={16}/> Read POWER evidence methodology</button>
          </div>}
          {panel === 'limitations' && <div role="tabpanel" className="space-y-3">
            <h3 className="font-serif text-xl font-bold">Known limitations</h3>
            <ul className="list-disc pl-6 text-sm space-y-2">{selected.limitations.map(item => <li key={item}>{item}</li>)}</ul>
            <p className="text-sm text-slate-600">Publication status: {selected.dataStatus}. Review status: {selected.reviewState}.</p>
          </div>}
        </div>
      )}
    </section>
  );
};
