import React, { useState } from 'react';
import { FLOURISHING_DOMAINS } from '../data/ecosystemData';
import { FlourishingDomain, FlourishingDomainName } from '../types/power';
import { SimulatedRecordNotice } from '../components/Badge';
import { 
  HeartHandshake, 
  ShieldCheck, 
  AlertTriangle, 
  BarChart3, 
  Layers, 
  Compass, 
  Info, 
  ArrowRight,
  TrendingUp,
  MapPin,
  Clock,
  Sparkles,
  Scale
} from 'lucide-react';

interface FlourishingOutcomesViewProps {
  onNavigate: (view: string, id?: string) => void;
}

export const FlourishingOutcomesView: React.FC<FlourishingOutcomesViewProps> = ({ onNavigate }) => {
  const [selectedDomain, setSelectedDomain] = useState<FlourishingDomainName>('Material security');

  const activeDomain = FLOURISHING_DOMAINS.find(d => d.domain === selectedDomain) || FLOURISHING_DOMAINS[0];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Header */}
      <div className="flex items-start justify-between flex-wrap gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-[11px] font-mono font-bold bg-indigo-50 text-indigo-800 border border-indigo-200 mb-2">
            <HeartHandshake className="w-3.5 h-3.5 text-indigo-700" />
            Layer 6 • Flourishing Outcomes Architecture
          </div>
          <h1 className="text-3xl sm:text-4xl font-serif font-black text-slate-900">
            Flourishing Outcomes Layer
          </h1>
          <p className="text-sm text-slate-600 max-w-3xl mt-1 leading-relaxed">
            POWER evaluates not only whether a public office executed an administrative action, but whether human conditions and public capabilities improved. Flourishing is treated as an empirical decision lens and evidence layer—never as a single composite score or partisan report card.
          </p>
        </div>
      </div>

      {/* Simulated Demonstration Record Notice */}
      <SimulatedRecordNotice />

      {/* Design Rules Banner (Business Plan v2.0 - Page 13) */}
      <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-7 border border-slate-800 space-y-4">
        <div className="flex items-center gap-2">
          <Scale className="w-5 h-5 text-amber-400" />
          <h2 className="text-base font-serif font-bold text-white">
            Methodological Design Rules for Flourishing Outcomes
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-xs text-slate-300">
          <div className="bg-slate-800/80 p-3.5 rounded-xl border border-slate-700 space-y-1">
            <strong className="text-white block font-mono text-[11px]">1. No Composite Scores</strong>
            <p className="text-[11px] leading-relaxed text-slate-300">
              Publish multidimensional dashboards rather than single letter grades that collapse distinct trade-offs.
            </p>
          </div>
          <div className="bg-slate-800/80 p-3.5 rounded-xl border border-slate-700 space-y-1">
            <strong className="text-white block font-mono text-[11px]">2. Distributional Equity</strong>
            <p className="text-[11px] leading-relaxed text-slate-300">
              Disaggregate metrics across political wards and demographics to reveal who benefits or bears burdens.
            </p>
          </div>
          <div className="bg-slate-800/80 p-3.5 rounded-xl border border-slate-700 space-y-1">
            <strong className="text-white block font-mono text-[11px]">3. Causal Attributability</strong>
            <p className="text-[11px] leading-relaxed text-slate-300">
              Distinguish local government output from macro trends without fabricating unproven causal claims.
            </p>
          </div>
        </div>
      </div>

      {/* 8 Domains Selector Tabs */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500">
            The 8 Flourishing Domains
          </h2>
          <span className="text-xs font-mono text-slate-400">Select Domain to Inspect</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2">
          {FLOURISHING_DOMAINS.map(d => {
            const isSelected = d.domain === selectedDomain;
            return (
              <button
                key={d.domain}
                type="button"
                onClick={() => setSelectedDomain(d.domain)}
                className={`p-3 rounded-xl border text-left transition-all ${
                  isSelected
                    ? 'bg-slate-900 text-white border-slate-900 shadow-sm'
                    : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                }`}
              >
                <div className="text-xs font-bold leading-tight">{d.domain}</div>
                <div className="text-[10px] text-slate-400 mt-1 font-mono">{d.indicators.length} Indicators</div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Selected Domain Deep Dive Card */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs space-y-6">
        <div className="border-b border-slate-100 pb-4 space-y-2">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <span className="font-mono text-xs uppercase font-bold text-indigo-700 bg-indigo-50 px-2.5 py-0.5 rounded border border-indigo-200">
              {activeDomain.domain}
            </span>
            <span className="text-xs font-mono text-slate-400">Jurisdiction: Washington, DC</span>
          </div>

          <h3 className="text-2xl font-serif font-bold text-slate-900">
            {activeDomain.domain} Indicators & Evidence
          </h3>

          <p className="text-sm text-slate-700 leading-relaxed font-sans">
            {activeDomain.description}
          </p>

          <div className="p-3 bg-amber-50/80 border border-amber-300/80 rounded-lg text-xs text-amber-950 flex items-start gap-2">
            <Info className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
            <div>
              <strong className="block text-[11px] font-mono text-amber-900 uppercase">Required Interpretation Standard</strong>
              <span className="text-[11px] leading-snug">{activeDomain.requiredInterpretation}</span>
            </div>
          </div>
        </div>

        {/* Indicators Grid for the domain */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {activeDomain.indicators.map((ind, i) => (
            <div key={i} className="bg-slate-50 border border-slate-200 rounded-xl p-5 space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-start justify-between gap-2">
                  <h4 className="text-base font-serif font-bold text-slate-900 leading-snug">
                    {ind.name}
                  </h4>
                  <span className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold shrink-0 ${
                    ind.causalConfidence === 'Direct' 
                      ? 'bg-emerald-100 text-emerald-900 border border-emerald-300'
                      : ind.causalConfidence === 'Correlated'
                      ? 'bg-blue-100 text-blue-900 border border-blue-300'
                      : 'bg-slate-200 text-slate-800 border border-slate-300'
                  }`}>
                    Causal Confidence: {ind.causalConfidence}
                  </span>
                </div>

                {/* Values comparison */}
                <div className="grid grid-cols-2 gap-3 bg-white p-3 rounded-lg border border-slate-200 text-xs">
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase font-mono block">Baseline</span>
                    <strong className="text-sm font-mono text-slate-700">{ind.baselineValue}</strong>
                  </div>
                  <div>
                    <span className="text-[10px] text-indigo-600 uppercase font-mono block">Current Observation</span>
                    <strong className="text-sm font-mono text-slate-900">{ind.currentValue}</strong>
                  </div>
                </div>

                {/* Disaggregated Distribution Metric (Ward / Demographic Disparity) */}
                <div className="space-y-1">
                  <div className="text-[10px] uppercase font-mono font-bold text-slate-500 flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-slate-400" />
                    <span>Disaggregated Equity & Distributional Pattern</span>
                  </div>
                  <div className="p-2.5 bg-white border border-slate-200 rounded text-xs font-mono font-medium text-slate-800">
                    {ind.distributionMetric}
                  </div>
                </div>

                {/* Equity & Context Note */}
                <p className="text-xs text-slate-600 leading-relaxed">
                  {ind.equityNote}
                </p>
              </div>

              {/* Source & Lag Time Footer */}
              <div className="pt-3 border-t border-slate-200/80 text-[11px] text-slate-500 space-y-1">
                <div className="flex items-center justify-between font-mono">
                  <span className="truncate pr-2">Source: {ind.source}</span>
                  <span className="shrink-0 text-slate-400 flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {ind.lagTime}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
