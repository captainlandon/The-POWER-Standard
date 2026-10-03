import React from 'react';
import { 
  PUBLIC_PROBLEMS, 
  INSTITUTIONS, 
  PUBLIC_ACTORS, 
  COMMITMENTS, 
  EVIDENCE_STORE 
} from '../data/mockData';
import { AccountabilityChain } from '../components/AccountabilityChain';
import { StatusBadge, SpecificityBadge, EpistemicBadge, DataStatusBadge, SimulatedRecordNotice } from '../components/Badge';
import { 
  ArrowRight, 
  ShieldCheck, 
  Scale, 
  Building2, 
  FileText, 
  Layers, 
  TrendingUp, 
  TrendingDown, 
  Minus, 
  CheckCircle2, 
  AlertTriangle,
  HelpCircle,
  ExternalLink,
  BookOpen,
  Compass,
  HeartHandshake,
  ShieldAlert,
  Radio,
  Code
} from 'lucide-react';

interface HomeViewProps {
  onNavigate: (view: string, id?: string) => void;
  onOpenEvidence: (id: string) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ onNavigate, onOpenEvidence }) => {
  return (
    <div className="space-y-16 pb-16">
      {/* Hero Section */}
      <section className="bg-slate-900 text-white pt-14 pb-16 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700 text-slate-300 text-xs font-mono">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>Independent Civic Verification Infrastructure</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-black tracking-tight leading-tight max-w-4xl mx-auto">
            See the public record clearly.
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed font-sans">
            POWER connects public problems with authority, commitments, resources, implementation, outcomes, and evidence—so people can inspect what government can do, what public actors said they would do, and what happened next.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => onNavigate('problems')}
              className="px-6 py-3 rounded-lg bg-white text-slate-950 font-bold text-sm hover:bg-slate-100 shadow-lg hover:shadow-xl transition-all flex items-center gap-2 group"
            >
              <span>Explore the public record</span>
              <ArrowRight className="w-4 h-4 text-slate-900 group-hover:translate-x-0.5 transition-transform" />
            </button>

            <button
              type="button"
              onClick={() => onNavigate('methodology')}
              className="px-6 py-3 rounded-lg bg-slate-800 text-slate-200 font-semibold text-sm hover:bg-slate-700 border border-slate-700 transition-colors flex items-center gap-2"
            >
              <BookOpen className="w-4 h-4 text-slate-400" />
              <span>How POWER works</span>
            </button>
          </div>

          {/* Core Nonpartisan Philosophy Callout */}
          <div className="pt-6 max-w-2xl mx-auto text-xs text-slate-400 border-t border-slate-800/60 font-mono">
            Do not tell the public whom to trust. Make the public record easier to inspect.
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Interactive Accountability Chain */}
        <section>
          <AccountabilityChain />
        </section>

        {/* 9-Layer Civic Architecture Ecosystem Hub (Business Plan v2.0 - Page 5) */}
        <section className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 space-y-6">
          <div className="flex items-start justify-between flex-wrap gap-4">
            <div>
              <div className="text-xs font-mono font-bold uppercase tracking-wider text-amber-400 mb-1 flex items-center gap-1.5">
                <Compass className="w-4 h-4" />
                <span>The 9-Layer System Architecture</span>
              </div>
              <h2 className="text-2xl font-serif font-bold text-white">
                POWER Operating Ecosystem
              </h2>
              <p className="text-xs text-slate-300 max-w-2xl mt-1 leading-relaxed">
                From candidate pledges through post-election governance, discover the full suite of interconnected tools implementing The POWER Standard.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
            {/* Tool 1: Plan Builder */}
            <div 
              onClick={() => onNavigate('plan-builder')}
              className="bg-slate-800/90 hover:bg-slate-800 border border-slate-700 hover:border-indigo-400 p-4 rounded-xl cursor-pointer transition-all space-y-2 flex flex-col justify-between"
            >
              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-indigo-400 font-mono text-[11px] font-bold">
                  <span>Layer 3 • Public Plans</span>
                  <Compass className="w-4 h-4" />
                </div>
                <h3 className="font-serif font-bold text-white text-sm">Interactive Plan Builder</h3>
                <p className="text-slate-300 text-[11px] leading-relaxed">
                  Convert political promises into testable public plans with identified authorities, budget paths, and decision gates.
                </p>
              </div>
              <div className="text-indigo-400 font-semibold inline-flex items-center gap-1 pt-1 text-[11px]">
                <span>Launch Builder</span>
                <ArrowRight className="w-3 h-3" />
              </div>
            </div>

            {/* Tool 2: Mandate Ledger */}
            <div 
              onClick={() => onNavigate('mandate-ledger')}
              className="bg-slate-800/90 hover:bg-slate-800 border border-slate-700 hover:border-indigo-400 p-4 rounded-xl cursor-pointer transition-all space-y-2 flex flex-col justify-between"
            >
              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-blue-400 font-mono text-[11px] font-bold">
                  <span>Layer 5 • Implementation</span>
                  <Layers className="w-4 h-4" />
                </div>
                <h3 className="font-serif font-bold text-white text-sm">The Mandate Ledger</h3>
                <p className="text-slate-300 text-[11px] leading-relaxed">
                  Follow winning plans after an election: track council votes, budget appropriations vs. actual disbursements, and blockers.
                </p>
              </div>
              <div className="text-blue-400 font-semibold inline-flex items-center gap-1 pt-1 text-[11px]">
                <span>Inspect Mandates</span>
                <ArrowRight className="w-3 h-3" />
              </div>
            </div>

            {/* Tool 3: Flourishing Outcomes */}
            <div 
              onClick={() => onNavigate('flourishing')}
              className="bg-slate-800/90 hover:bg-slate-800 border border-slate-700 hover:border-indigo-400 p-4 rounded-xl cursor-pointer transition-all space-y-2 flex flex-col justify-between"
            >
              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-rose-400 font-mono text-[11px] font-bold">
                  <span>Layer 6 • Outcomes</span>
                  <HeartHandshake className="w-4 h-4" />
                </div>
                <h3 className="font-serif font-bold text-white text-sm">Flourishing Outcomes</h3>
                <p className="text-slate-300 text-[11px] leading-relaxed">
                  8 human capability domains evaluated without composite scores. Inspect neighborhood equity and demographic distribution.
                </p>
              </div>
              <div className="text-rose-400 font-semibold inline-flex items-center gap-1 pt-1 text-[11px]">
                <span>Explore 8 Domains</span>
                <ArrowRight className="w-3 h-3" />
              </div>
            </div>

            {/* Tool 4: Ethics Signals & Money */}
            <div 
              onClick={() => onNavigate('ethics')}
              className="bg-slate-800/90 hover:bg-slate-800 border border-slate-700 hover:border-indigo-400 p-4 rounded-xl cursor-pointer transition-all space-y-2 flex flex-col justify-between"
            >
              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-amber-400 font-mono text-[11px] font-bold">
                  <span>Layer 7 • Signals</span>
                  <ShieldAlert className="w-4 h-4" />
                </div>
                <h3 className="font-serif font-bold text-white text-sm">Ethics Signals & Money</h3>
                <p className="text-slate-300 text-[11px] leading-relaxed">
                  Objective evidence triage for procurement anomalies, revolving-door transitions, and campaign finance/lobbying linkages.
                </p>
              </div>
              <div className="text-amber-400 font-semibold inline-flex items-center gap-1 pt-1 text-[11px]">
                <span>Inspect Signals</span>
                <ArrowRight className="w-3 h-3" />
              </div>
            </div>
          </div>
        </section>

        {/* Simulated Demonstration Record Notice (Requirement 2) */}
        <SimulatedRecordNotice />

        {/* Section 1: Start with a problem */}
        <section className="space-y-6">
          <div className="flex items-end justify-between flex-wrap gap-4">
            <div>
              <div className="text-xs font-mono font-bold uppercase tracking-wider text-indigo-700 mb-1">
                Section 1 • Inquiry Point
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900">
                Start with a public problem
              </h2>
              <p className="text-sm text-slate-600 max-w-2xl mt-1">
                Rather than beginning with political personalities or campaign messaging, POWER organizes records around verified civic problems.
              </p>
            </div>
            <button
              type="button"
              onClick={() => onNavigate('problems')}
              className="text-xs font-bold text-indigo-700 hover:text-indigo-900 inline-flex items-center gap-1"
            >
              <span>View all problems</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PUBLIC_PROBLEMS.map((problem) => {
              const primaryIndicator = problem.indicators[0];
              const connectedInstCount = problem.institutionIds.length;
              const connectedCommCount = problem.commitmentIds.length;
              const connectedEvCount = problem.evidenceIds.length;

              return (
                <div
                  key={problem.id}
                  className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs text-slate-500 font-mono">
                      <span>{problem.geography}</span>
                      <span className="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded border border-slate-200">
                        Updated {problem.lastUpdated}
                      </span>
                    </div>

                    <div className="pt-0.5">
                      <DataStatusBadge status={problem.dataStatus} />
                    </div>

                    <h3 
                      onClick={() => onNavigate('problem-detail', problem.id)}
                      className="text-lg font-serif font-bold text-slate-900 group-hover:text-blue-700 cursor-pointer transition-colors"
                    >
                      {problem.title}
                    </h3>

                    <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                      {problem.shortDescription}
                    </p>

                    {/* Indicator Snapshot */}
                    {primaryIndicator && (
                      <div className="bg-slate-50 p-3 rounded-lg border border-slate-200 space-y-1">
                        <div className="text-[11px] font-semibold text-slate-600 line-clamp-1">
                          Indicator: {primaryIndicator.name}
                        </div>
                        <div className="flex items-baseline justify-between">
                          <div className="text-xs text-slate-500">
                            Baseline: <span className="font-mono text-slate-700">{primaryIndicator.baseline.value}</span> ({primaryIndicator.baseline.year})
                          </div>
                          <div className="text-sm font-bold text-slate-900 font-mono flex items-center gap-1">
                            <span>{primaryIndicator.current.value}</span>
                            {primaryIndicator.trendDirection === 'increasing' && <TrendingUp className="w-3.5 h-3.5 text-blue-600" />}
                            {primaryIndicator.trendDirection === 'decreasing' && <TrendingDown className="w-3.5 h-3.5 text-emerald-600" />}
                            {primaryIndicator.trendDirection === 'stable' && <Minus className="w-3.5 h-3.5 text-slate-400" />}
                          </div>
                        </div>
                        <div className="text-[10px] text-slate-400 font-mono truncate">
                          Source: {primaryIndicator.sourceName}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Footer metadata counts */}
                  <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                    <div className="flex items-center gap-3 text-[11px]">
                      <span title="Connected Institutions">
                        <strong className="text-slate-800 font-mono">{connectedInstCount}</strong> Institutions
                      </span>
                      <span>•</span>
                      <span title="Documented Commitments">
                        <strong className="text-slate-800 font-mono">{connectedCommCount}</strong> Commitments
                      </span>
                      <span>•</span>
                      <span title="Evidence Sources">
                        <strong className="text-slate-800 font-mono">{connectedEvCount}</strong> Sources
                      </span>
                    </div>

                    <button
                      type="button"
                      onClick={() => onNavigate('problem-detail', problem.id)}
                      className="p-1 text-slate-400 group-hover:text-blue-600 transition-colors"
                      aria-label={`View ${problem.title}`}
                    >
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Section 2: Who has authority? */}
        <section className="bg-slate-900 text-white rounded-2xl p-6 sm:p-10 space-y-8">
          <div className="max-w-3xl space-y-3">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
              <Scale className="w-4 h-4" />
              <span>Section 2 • Institutional Governance</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white">
              Who actually has authority over this?
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              Public frustration often arises when citizens demand solutions from institutions that have no legal power to deliver them. POWER maps formal authority relationships, legal charters, budget controls, and inter-agency dependencies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {INSTITUTIONS.slice(0, 4).map((inst) => (
              <div 
                key={inst.id}
                onClick={() => onNavigate('institution-detail', inst.id)}
                className="bg-slate-800/80 hover:bg-slate-800 border border-slate-700 rounded-xl p-4 cursor-pointer transition-all hover:border-slate-500 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-slate-400 font-mono mb-2">
                    <span className="bg-slate-700/60 px-2 py-0.5 rounded text-amber-300 font-bold">
                      {inst.abbreviation}
                    </span>
                    <span>{inst.institutionType}</span>
                  </div>
                  <div className="mb-2">
                    <DataStatusBadge status={inst.dataStatus} />
                  </div>
                  <h3 className="font-serif font-bold text-white text-base leading-snug">
                    {inst.name}
                  </h3>
                  <p className="text-xs text-slate-400 mt-2 line-clamp-3 leading-relaxed">
                    {inst.formalAuthoritySummary}
                  </p>
                </div>

                <div className="pt-3 mt-3 border-t border-slate-700 text-xs text-slate-300 flex items-center justify-between">
                  <span className="font-mono text-[11px] text-slate-400">{inst.authorities.length} Statutory Powers</span>
                  <span className="text-indigo-400 font-semibold flex items-center gap-1">
                    Charter <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between flex-wrap gap-4 pt-4 border-t border-slate-800 text-xs text-slate-400">
            <div>
              Special Case: In Washington, DC, local police are under the Mayor, but adult felony prosecutions are conducted by the federal U.S. Attorney.
            </div>
            <button
              type="button"
              onClick={() => onNavigate('institutions')}
              className="text-amber-400 hover:text-amber-300 font-semibold inline-flex items-center gap-1"
            >
              <span>Explore all institutions</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </section>

        {/* Section 3: Commitments */}
        <section className="space-y-6">
          <div className="flex items-end justify-between flex-wrap gap-4">
            <div>
              <div className="text-xs font-mono font-bold uppercase tracking-wider text-indigo-700 mb-1">
                Section 3 • Public Declarations
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900">
                Documented Public Commitments
              </h2>
              <p className="text-sm text-slate-600 max-w-2xl mt-1">
                Statements, targets, and promises recorded without ideological commentary or scorecards. POWER tracks what was stated against actual legal capacity.
              </p>
            </div>
            <button
              type="button"
              onClick={() => onNavigate('commitments')}
              className="text-xs font-bold text-indigo-700 hover:text-indigo-900 inline-flex items-center gap-1"
            >
              <span>View all commitments</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {COMMITMENTS.slice(0, 4).map((commitment) => {
              const actor = PUBLIC_ACTORS.find(a => a.id === commitment.actorId);
              const problem = PUBLIC_PROBLEMS.find(p => p.id === commitment.problemId);

              return (
                <div
                  key={commitment.id}
                  className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs hover:shadow-md transition-all flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between flex-wrap gap-2">
                      <div className="flex items-center gap-2 flex-wrap">
                        <DataStatusBadge status={commitment.dataStatus} />
                        <StatusBadge status={commitment.status} />
                        <SpecificityBadge level={commitment.specificityLevel} />
                      </div>
                      <span className="text-xs text-slate-400 font-mono">{commitment.date}</span>
                    </div>

                    <h3 
                      onClick={() => onNavigate('commitment-detail', commitment.id)}
                      className="text-base font-serif font-bold text-slate-900 hover:text-blue-700 cursor-pointer transition-colors leading-snug"
                    >
                      {commitment.title}
                    </h3>

                    <p className="text-xs text-slate-700 italic bg-slate-50 p-3 rounded border border-slate-200 font-serif leading-relaxed">
                      {commitment.originalWordingOrParaphrase}
                    </p>

                    <div className="grid grid-cols-2 gap-2 text-xs text-slate-600 pt-1">
                      <div>
                        <span className="text-slate-400 block text-[10px] uppercase font-mono">Public Actor</span>
                        <strong className="text-slate-800">{actor?.name}</strong> ({actor?.office})
                      </div>
                      <div>
                        <span className="text-slate-400 block text-[10px] uppercase font-mono">Civic Problem</span>
                        <span className="text-slate-800">{problem?.title}</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                    <button
                      type="button"
                      onClick={() => onOpenEvidence(commitment.sourceEvidenceId)}
                      className="text-slate-500 hover:text-slate-800 inline-flex items-center gap-1 font-mono text-[11px]"
                    >
                      <FileText className="w-3.5 h-3.5 text-indigo-600" />
                      <span>Inspect Source Statement</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => onNavigate('commitment-detail', commitment.id)}
                      className="font-semibold text-blue-700 hover:text-blue-900 inline-flex items-center gap-1"
                    >
                      <span>Full Record</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Section 4: From Commitment to Outcome */}
        <section className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-6">
          <div className="max-w-2xl">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-indigo-700 mb-1">
              Section 4 • Procedural Lifecycle
            </div>
            <h2 className="text-2xl font-serif font-bold text-slate-900">
              From Public Commitment to Measured Outcome
            </h2>
            <p className="text-xs text-slate-600 mt-1">
              Track how a public commitment moves across institutional checkpoints. Every stage requires different public documentation.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3">
            {[
              { step: '1. Statement', doc: 'Press release, speech, campaign platform, hearing transcript', status: 'Announced' },
              { step: '2. Plan', doc: 'Agency strategy, administrative framework, whitepaper', status: 'Actionable' },
              { step: '3. Budget', doc: 'Operating allocation, Capital Improvement Plan, grant', status: 'Appropriated' },
              { step: '4. Action', doc: 'Bill introduced, executive order, procurement RFP', status: 'Documented' },
              { step: '5. Implementation', doc: 'Contract execution, pilot launch, regulation enacted', status: 'In Progress' },
              { step: '6. Measured Outcome', doc: 'Statistical indicators, longitudinal metrics, audits', status: 'Evaluated' },
            ].map((st, i) => (
              <div key={i} className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs space-y-2">
                <div className="text-xs font-mono font-bold text-indigo-800">{st.step}</div>
                <div className="text-xs font-semibold text-slate-900">{st.status}</div>
                <p className="text-[11px] text-slate-500 leading-snug">{st.doc}</p>
              </div>
            ))}
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-xs text-slate-800 flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <strong className="text-amber-900">Epistemic Separation Standard:</strong>
              <p>
                A public statement is not implementation. Appropriating money is not spending money. An indicator improving after an intervention does not establish causal proof. POWER keeps these stages strictly independent.
              </p>
            </div>
          </div>
        </section>

        {/* Section 5: Evidence First */}
        <section className="space-y-6">
          <div className="max-w-3xl">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-indigo-700 mb-1">
              Section 5 • Provenance Hierarchy
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900">
              Evidence First: Transparent Provenance
            </h2>
            <p className="text-sm text-slate-600 mt-1 leading-relaxed">
              POWER separates what is known, what is inferred, and what remains unknown. Every material factual claim is traceable to primary records, statutory texts, or verified datasets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white border border-slate-200 p-5 rounded-xl shadow-xs space-y-3">
              <span className="px-2.5 py-1 text-xs font-bold font-mono bg-blue-100 text-blue-900 border border-blue-300 rounded">
                Primary Sources
              </span>
              <h3 className="font-serif font-bold text-slate-900 text-base">Direct Government Records</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Official statutes, D.C. Official Code, enacted local budget acts, Mayor’s Orders, agency audit reports (ODCA), and raw U.S. Census Bureau datasets.
              </p>
              <div className="pt-2 text-xs font-mono text-slate-400">
                Highest evidentiary weight
              </div>
            </div>

            <div className="bg-white border border-slate-200 p-5 rounded-xl shadow-xs space-y-3">
              <span className="px-2.5 py-1 text-xs font-bold font-mono bg-emerald-100 text-emerald-900 border border-emerald-300 rounded">
                Secondary Sources
              </span>
              <h3 className="font-serif font-bold text-slate-900 text-base">Public Interest & Journalism</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Reputable investigative journalism, academic peer-reviewed policy evaluations, think tank analyses, and watchdog organization reports.
              </p>
              <div className="pt-2 text-xs font-mono text-slate-400">
                Corroborative reporting weight
              </div>
            </div>

            <div className="bg-white border border-slate-200 p-5 rounded-xl shadow-xs space-y-3">
              <span className="px-2.5 py-1 text-xs font-bold font-mono bg-purple-100 text-purple-900 border border-purple-300 rounded">
                Derived Analysis
              </span>
              <h3 className="font-serif font-bold text-slate-900 text-base">POWER Syntheses</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Mathematical calculations, percentage variances, and timeline classifications synthesized by POWER directly from cited sources.
              </p>
              <div className="pt-2 text-xs font-mono text-slate-400">
                Clearly labeled as derived calculation
              </div>
            </div>
          </div>

          {/* Epistemic Badges Matrix */}
          <div className="bg-slate-900 text-white rounded-xl p-6 space-y-4">
            <h3 className="font-serif font-bold text-base text-white">
              The 6 Epistemic States Recognized in POWER
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {[
                { status: 'Verified', desc: 'Supported directly by authoritative primary public records' },
                { status: 'Supported', desc: 'Multiple credible public reporting sources corroborate' },
                { status: 'Derived', desc: 'Calculated or synthesized by POWER from identified data' },
                { status: 'Disputed', desc: 'Credible sources or audits materially disagree on findings' },
                { status: 'Unclear', desc: 'Evidence is incomplete or missing key reporting periods' },
                { status: 'Unknown', desc: 'No adequate public evidence or audit trail located' },
              ].map((item, idx) => (
                <div key={idx} className="bg-slate-800 p-3 rounded-lg border border-slate-700 space-y-1">
                  <div className="font-bold text-xs text-white">
                    <EpistemicBadge status={item.status as any} />
                  </div>
                  <p className="text-[11px] text-slate-400 leading-snug">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
