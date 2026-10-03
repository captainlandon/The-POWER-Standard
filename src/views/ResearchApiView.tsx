import React, { useState } from 'react';
import { SimulatedRecordNotice } from '../components/Badge';
import { 
  Code, 
  Terminal, 
  Download, 
  Copy, 
  Check, 
  FileText, 
  ExternalLink, 
  Layers, 
  BookOpen, 
  ShieldCheck,
  Cpu
} from 'lucide-react';

export const ResearchApiView: React.FC = () => {
  const [selectedEndpoint, setSelectedEndpoint] = useState<'plans' | 'problems' | 'authorities' | 'flourishing'>('plans');
  const [copiedCurl, setCopiedCurl] = useState(false);
  const [copiedCitation, setCopiedCitation] = useState(false);
  const [liveResponse, setLiveResponse] = useState<any | null>(null);
  const [isLoadingLive, setIsLoadingLive] = useState(false);
  const [liveLatency, setLiveLatency] = useState<number | null>(null);

  const endpoints = {
    plans: {
      url: '/api/v2/plans',
      method: 'GET',
      desc: 'Retrieves all structured POWER plans with versioned field families, authority linkages, and resource appropriations.',
      sampleResponse: {
        standardVersion: '2.0.0',
        jurisdiction: 'District of Columbia',
        dataStatus: 'Simulated Demonstration Record',
        totalRecords: 4,
        items: [
          {
            id: 'comm-housing-36k',
            title: 'Produce 36,000 New Housing Units by 2025',
            office: 'Executive Office of the Mayor',
            authorityType: 'Executive',
            legalBasis: "Mayor's Order 2019-036",
            budgetAppropriated: 100000000,
            currency: 'USD',
          }
        ]
      }
    },
    problems: {
      url: '/api/v2/problems/housing-affordability',
      method: 'GET',
      desc: 'Returns problem indicators, time-series baselines, affected population disaggregation, and linked authorities.',
      sampleResponse: {
        id: 'housing-affordability',
        title: 'Severe Housing Cost Burden & Affordable Supply Deficit',
        jurisdiction: 'District of Columbia',
        baselineProblemStatement: 'Over 21% of DC households spend greater than 50% of income on rent, concentrated heavily in Wards 7 and 8.',
        flourishingDomain: 'Material security',
      }
    },
    authorities: {
      url: '/api/health',
      method: 'GET',
      desc: 'Checks POWER Standard REST service health, Gemini API key telemetry, and server status.',
      sampleResponse: {
        status: 'ok',
        service: 'The POWER Standard API v2.0',
        geminiConfigured: true,
      }
    },
    flourishing: {
      url: '/api/v2/flourishing/domains',
      method: 'GET',
      desc: 'Returns the 8 Flourishing Domains with disaggregated ward distributions and required interpretation caveats.',
      sampleResponse: {
        standardVersion: '2.0',
        description: 'The 8 Non-Composite Flourishing Outcome Domains (Business Plan v2.0 - Page 13)',
        epistemicPrinciple: 'Never collapse into a single aggregate municipal ranking.',
      }
    }
  };

  const activeEp = endpoints[selectedEndpoint];

  const handleExecuteLive = async () => {
    setIsLoadingLive(true);
    const start = performance.now();
    try {
      const res = await fetch(activeEp.url);
      const data = await res.json();
      setLiveLatency(Math.round(performance.now() - start));
      setLiveResponse(data);
    } catch (e) {
      setLiveResponse({ error: (e as Error).message });
    } finally {
      setIsLoadingLive(false);
    }
  };

  const handleCopyCurl = () => {
    navigator.clipboard.writeText(`curl -X GET "https://api.thepowerstandard.org${activeEp.url}" \\\n  -H "Accept: application/json"`);
    setCopiedCurl(true);
    setTimeout(() => setCopiedCurl(false), 2000);
  };

  const citationText = `The POWER Standard (2026). Public Office Work Evidence and Results: Washington, DC Civic Accountability Record [Data file and standard specification v2.0]. Retrieved from https://thepowerstandard.org/api/v2`;

  const handleCopyCitation = () => {
    navigator.clipboard.writeText(citationText);
    setCopiedCitation(true);
    setTimeout(() => setCopiedCitation(false), 2000);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Header */}
      <div>
        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-[11px] font-mono font-bold bg-indigo-50 text-indigo-800 border border-indigo-200 mb-2">
          <Code className="w-3.5 h-3.5" />
          Layer 9 • Public Knowledge, Research & REST API
        </div>
        <h1 className="text-3xl sm:text-4xl font-serif font-black text-slate-900">
          Data, Research & Developer API
        </h1>
        <p className="text-sm text-slate-600 max-w-3xl mt-1 leading-relaxed">
          The POWER Standard publishes machine-readable JSON schemas and open research APIs for universities, newsrooms, civic hackers, and independent watchdog organizations.
        </p>
      </div>

      {/* Simulated Demonstration Record Notice */}
      <SimulatedRecordNotice />

      {/* API Explorer */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs space-y-6">
        <div className="flex items-center justify-between flex-wrap gap-4 border-b border-slate-100 pb-4">
          <div>
            <h2 className="text-xl font-serif font-bold text-slate-900">
              Interactive Schema & API Explorer
            </h2>
            <p className="text-xs text-slate-600 mt-0.5">
              Inspect live payload structures conforming to The POWER Standard Schema v2.0.
            </p>
          </div>

          <div className="flex items-center gap-2">
            {(['plans', 'problems', 'authorities', 'flourishing'] as const).map(key => (
              <button
                key={key}
                type="button"
                onClick={() => setSelectedEndpoint(key)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all ${
                  selectedEndpoint === key
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                /{key}
              </button>
            ))}
          </div>
        </div>

        {/* Endpoint Bar */}
        <div className="flex items-center justify-between bg-slate-900 text-white p-3.5 rounded-xl font-mono text-xs overflow-x-auto gap-4">
          <div className="flex items-center gap-3">
            <span className="bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 px-2 py-0.5 rounded font-bold">
              {activeEp.method}
            </span>
            <span className="text-slate-300">{activeEp.url}</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleExecuteLive}
              disabled={isLoadingLive}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-indigo-600 hover:bg-indigo-500 text-white font-bold transition-colors shrink-0 text-[11px] shadow-xs disabled:opacity-50"
            >
              <span>{isLoadingLive ? 'Querying...' : 'Execute Live API Call'}</span>
            </button>

            <button
              type="button"
              onClick={handleCopyCurl}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors shrink-0 text-[11px]"
            >
              {copiedCurl ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedCurl ? 'cURL Copied' : 'Copy cURL'}</span>
            </button>
          </div>
        </div>

        <p className="text-xs text-slate-600">
          {activeEp.desc}
        </p>

        {/* Live execution indicator */}
        {liveLatency !== null && (
          <div className="flex items-center gap-2 text-xs font-mono text-emerald-700 bg-emerald-50 border border-emerald-200 p-2.5 rounded-lg">
            <Check className="w-4 h-4 text-emerald-600" />
            <span>HTTP 200 OK • Round-trip Latency: {liveLatency}ms • Served from Live Express / API Backend</span>
          </div>
        )}

        {/* JSON Output View */}
        <div className="space-y-1.5">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-mono uppercase font-bold text-slate-400 block">
              {liveResponse ? 'Live Server Response Payload (application/json)' : 'Schema Blueprint Sample (application/json)'}
            </span>
            {liveResponse && (
              <button
                type="button"
                onClick={() => setLiveResponse(null)}
                className="text-[10px] font-mono text-slate-500 hover:text-slate-800 underline"
              >
                Reset to Blueprint Sample
              </button>
            )}
          </div>
          <pre className="p-4 bg-slate-950 text-slate-200 rounded-xl text-[11px] font-mono overflow-x-auto border border-slate-800 max-h-80 leading-snug">
            {JSON.stringify(liveResponse || activeEp.sampleResponse, null, 2)}
          </pre>
        </div>
      </div>

      {/* Academic Citation Tool */}
      <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-7 space-y-4">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-indigo-700" />
            <h3 className="font-serif font-bold text-base text-slate-900">
              Academic & Journalism Citation Generator
            </h3>
          </div>
          <button
            type="button"
            onClick={handleCopyCitation}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold bg-white border border-slate-300 rounded-lg hover:bg-slate-100 text-slate-800 transition-colors"
          >
            {copiedCitation ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-slate-500" />}
            <span>{copiedCitation ? 'Citation Copied' : 'Copy APA Citation'}</span>
          </button>
        </div>

        <div className="p-3.5 bg-white border border-slate-200 rounded-xl font-mono text-xs text-slate-800 leading-relaxed">
          {citationText}
        </div>
      </div>
    </div>
  );
};
