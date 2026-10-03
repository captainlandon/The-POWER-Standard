import React, { useState } from 'react';
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
  OrnateRibbonBanner, 
  TurnOfCenturyDivider, 
  OrnateCornerFlourish, 
  BroadsideMasthead 
} from '../components/OrnateDecorations';
import turnCenturyBanner from '../assets/images/turn_century_banner_1791053226909.jpg';
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
  Code,
  Landmark,
  FileCheck,
  Vote,
  Sparkles,
  Gavel
} from 'lucide-react';

interface HomeViewProps {
  onNavigate: (view: string, id?: string) => void;
  onOpenEvidence: (id: string) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ onNavigate, onOpenEvidence }) => {
  // Dual-tier architecture:
  // "The Exposition" (The Website that explains the standard) vs.
  // "The Operating Instrument" (The App that operationalizes the standard)
  const [displayMode, setDisplayMode] = useState<'exposition' | 'instrument'>('exposition');

  return (
    <div className="space-y-12 pb-16 bg-[#FAF7F0] min-h-screen">
      {/* Top Turn-of-the-Century Architecture Switcher */}
      <div className="bg-[#0A1D3B] text-white py-3 px-4 border-b-2 border-[#B38A3E]/40 relative z-20">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono">
          <div className="flex items-center gap-2">
            <span className="text-[#B38A3E] font-bold">★ ★ ★</span>
            <span className="font-serif uppercase tracking-widest text-[#FAF7F0] font-bold">
              The POWER Architecture: Two Connected Dimensions
            </span>
          </div>

          {/* Mode Switcher Buttons */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-900 border border-stone-700 rounded-lg">
            <button
              type="button"
              onClick={() => setDisplayMode('exposition')}
              className={`px-3.5 py-1.5 rounded transition-all flex items-center gap-1.5 ${
                displayMode === 'exposition'
                  ? 'bg-[#B38A3E] text-slate-950 font-bold shadow-xs'
                  : 'text-stone-300 hover:text-white'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>1. The Exposition (The Standard Explained)</span>
            </button>

            <button
              type="button"
              onClick={() => setDisplayMode('instrument')}
              className={`px-3.5 py-1.5 rounded transition-all flex items-center gap-1.5 ${
                displayMode === 'instrument'
                  ? 'bg-[#FAF7F0] text-[#0A1D3B] font-bold shadow-xs'
                  : 'text-stone-300 hover:text-white'
              }`}
            >
              <Scale className="w-3.5 h-3.5 text-[#B38A3E]" />
              <span>2. The Operating Instrument (The Workbench)</span>
            </button>
          </div>
        </div>
      </div>

      {/* =====================================================================
          DIMENSION 1: THE EXPOSITION (THE WEBSITE THAT EXPLAINS THE STANDARD)
          ===================================================================== */}
      {displayMode === 'exposition' && (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 animate-in fade-in duration-150">
          {/* Turn-of-the-Century Broadside Masthead */}
          <BroadsideMasthead
            eyebrow="A PUBLIC CHARTER FOR THE SOVEREIGN CITIZENS OF THE AMERICAN REPUBLIC"
            title="The POWER Standard"
            subhead="A Constitutional Exposition on Public Office, Work, Evidence, and Results: Dedicated to the Principle that Popular Government Without Popular Information is but a Prologue to Farce or Tragedy."
            volNumber="FOUNDATIONAL COVENANT · ANNO DOMINI MMXXVI"
            dateStr="NATIONAL CIVIC REPOSITORY"
          />

          {/* Center Ornate Ribbon Banner */}
          <div className="text-center">
            <OrnateRibbonBanner
              text="Public Office Work Evidence and Results"
              subtext="The Nonpartisan Accountability Architecture of American Democracy"
              variant="navy"
              size="lg"
            />
          </div>

          {/* Historical Engraving Hero Banner */}
          <div className="relative rounded-2xl overflow-hidden border-4 border-[#0A1D3B] shadow-2xl bg-stone-900">
            <OrnateCornerFlourish position="top-left" className="absolute top-3 left-3 z-10 w-10 h-10 text-[#B38A3E]" />
            <OrnateCornerFlourish position="top-right" className="absolute top-3 right-3 z-10 w-10 h-10 text-[#B38A3E]" />
            <OrnateCornerFlourish position="bottom-left" className="absolute bottom-3 left-3 z-10 w-10 h-10 text-[#B38A3E]" />
            <OrnateCornerFlourish position="bottom-right" className="absolute bottom-3 right-3 z-10 w-10 h-10 text-[#B38A3E]" />

            <img
              src={turnCenturyBanner}
              alt="Ornate turn-of-the-century American political engraving with eagle and ribbons"
              className="w-full h-72 sm:h-96 object-cover opacity-90 filter contrast-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#0A1D3B] via-[#0A1D3B]/40 to-transparent flex flex-col justify-end p-6 sm:p-10 text-white">
              <div className="max-w-3xl space-y-2">
                <span className="text-[11px] font-mono uppercase tracking-widest text-[#B38A3E] font-bold">
                  ★ The American Civic Covenant ★
                </span>
                <h2 className="text-2xl sm:text-4xl font-serif font-black tracking-tight text-[#FAF7F0]">
                  "Do Not Tell the Public Whom to Trust. Make the Public Record Easier to Inspect."
                </h2>
                <p className="text-xs sm:text-sm text-stone-200 font-sans leading-relaxed">
                  In our republic, sovereignty resides not in offices or parties, but in the citizens. When political campaigns promise outcomes without showing legal authority, budget ledgers, and audited proof, democracy collapses into spectator sport.
                </p>
              </div>
            </div>
          </div>

          <TurnOfCenturyDivider label="THE FIVE ARTICLES OF THE POWER STANDARD" />

          {/* The 5 Constitutional Theses of the Standard */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Article I */}
            <div className="bg-white border-2 border-stone-200 rounded-xl p-6 space-y-3 relative shadow-xs">
              <div className="flex items-center justify-between border-b border-stone-200 pb-2">
                <span className="text-xs font-mono font-bold text-[#0A1D3B] uppercase tracking-wider">
                  Article I
                </span>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-blue-50 text-[#0A1D3B] font-bold">
                  Jurisdiction
                </span>
              </div>
              <h3 className="font-serif font-bold text-lg text-[#0A1D3B]">
                Authority Before Accountability
              </h3>
              <p className="text-xs text-[#596273] leading-relaxed font-sans">
                No public actor may be praised or blamed for a condition over which their office possessed no statutory authority under municipal charter or the Constitution. We map legal boundaries before evaluating performance.
              </p>
            </div>

            {/* Article II */}
            <div className="bg-white border-2 border-stone-200 rounded-xl p-6 space-y-3 relative shadow-xs">
              <div className="flex items-center justify-between border-b border-stone-200 pb-2">
                <span className="text-xs font-mono font-bold text-[#0A1D3B] uppercase tracking-wider">
                  Article II
                </span>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-amber-50 text-amber-900 font-bold">
                  Codification
                </span>
              </div>
              <h3 className="font-serif font-bold text-lg text-[#0A1D3B]">
                Pledges Bound to Written Plans
              </h3>
              <p className="text-xs text-[#596273] leading-relaxed font-sans">
                A political aspiration voiced in a speech is not an executed policy. The POWER Standard requires promises to be structured into testable candidate plans containing identified legal powers, revenue offsets, and decision gates.
              </p>
            </div>

            {/* Article III */}
            <div className="bg-white border-2 border-stone-200 rounded-xl p-6 space-y-3 relative shadow-xs">
              <div className="flex items-center justify-between border-b border-stone-200 pb-2">
                <span className="text-xs font-mono font-bold text-[#0A1D3B] uppercase tracking-wider">
                  Article III
                </span>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-50 text-emerald-900 font-bold">
                  Treasury
                </span>
              </div>
              <h3 className="font-serif font-bold text-lg text-[#0A1D3B]">
                The Strict Treasury Boundary
              </h3>
              <p className="text-xs text-[#596273] leading-relaxed font-sans">
                An authorization is not an appropriation; an appropriation is not a disbursed dollar; and spending 100% of an allocated municipal budget does not prove that community suffering was alleviated. We trace real cash flows.
              </p>
            </div>

            {/* Article IV */}
            <div className="bg-white border-2 border-stone-200 rounded-xl p-6 space-y-3 relative shadow-xs">
              <div className="flex items-center justify-between border-b border-stone-200 pb-2">
                <span className="text-xs font-mono font-bold text-[#0A1D3B] uppercase tracking-wider">
                  Article IV
                </span>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-purple-50 text-purple-900 font-bold">
                  Provenance
                </span>
              </div>
              <h3 className="font-serif font-bold text-lg text-[#0A1D3B]">
                Primary Public Provenance
              </h3>
              <p className="text-xs text-[#596273] leading-relaxed font-sans">
                Every material factual claim must cite an official government gazette, statutory code, enacted legislative budget, or verified census microdata. Claims are classified across 6 strict epistemic states, never blurred into assertions.
              </p>
            </div>

            {/* Article V */}
            <div className="bg-white border-2 border-stone-200 rounded-xl p-6 space-y-3 relative shadow-xs">
              <div className="flex items-center justify-between border-b border-stone-200 pb-2">
                <span className="text-xs font-mono font-bold text-[#0A1D3B] uppercase tracking-wider">
                  Article V
                </span>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-rose-50 text-rose-900 font-bold">
                  Sovereignty
                </span>
              </div>
              <h3 className="font-serif font-bold text-lg text-[#0A1D3B]">
                Citizen Due Process & Equal Footing
              </h3>
              <p className="text-xs text-[#596273] leading-relaxed font-sans">
                The citizen and the state stand on equal footing under law. Any citizen possesses the right to challenge records, submit counter-evidence, and inspect the continuous post-election ledger without partisan gatekeeping.
              </p>
            </div>

            {/* Article VI */}
            <div className="bg-white border-2 border-stone-200 rounded-xl p-6 space-y-3 relative shadow-xs">
              <div className="flex items-center justify-between border-b border-stone-200 pb-2">
                <span className="text-xs font-mono font-bold text-[#0A1D3B] uppercase tracking-wider">
                  Article VI
                </span>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-stone-100 text-stone-900 font-bold">
                  Integrity
                </span>
              </div>
              <h3 className="font-serif font-bold text-lg text-[#0A1D3B]">
                Strict Nonpartisanship
              </h3>
              <p className="text-xs text-[#596273] leading-relaxed font-sans">
                Zero candidate endorsements, zero editorial scorecards, zero progressive/conservative ranking scales. The voter is the sovereign judge. POWER provides the inspectable evidence.
              </p>
            </div>
          </div>

          {/* The Madisonian Letter to W.T. Barry Inscription */}
          <div className="bg-white border-4 border-[#0A1D3B] p-6 sm:p-8 rounded-2xl relative shadow-md space-y-4">
            <OrnateCornerFlourish position="top-left" className="absolute top-2 left-2" />
            <OrnateCornerFlourish position="bottom-right" className="absolute bottom-2 right-2" />

            <div className="text-center space-y-1">
              <span className="text-xs font-mono font-bold text-[#B38A3E] uppercase tracking-widest">
                ★ THE PHILOSOPHICAL BEDROCK OF THE STANDARD ★
              </span>
              <h3 className="text-xl sm:text-2xl font-serif font-black text-[#0A1D3B]">
                The Madisonian Proclamation (August 4, 1822)
              </h3>
            </div>

            <blockquote className="font-serif italic text-base sm:text-xl text-[#0A1D3B] text-center max-w-3xl mx-auto leading-relaxed border-y border-[#B38A3E]/40 py-4">
              “Knowledge will forever govern ignorance: And a people who mean to be their own Governors, must arm themselves with the power which knowledge gives.”
            </blockquote>

            <p className="text-xs text-[#596273] text-center max-w-2xl mx-auto font-sans leading-relaxed">
              Writing to W.T. Barry regarding the funding of public civic education, James Madison warned that popular government without popular information is but a prologue to farce or tragedy. The POWER Standard is the digital realization of this American promise.
            </p>
          </div>

          <TurnOfCenturyDivider label="FROM EXPOSITION TO OPERATION" />

          {/* The Grand Gateway to the Operating Apparatus */}
          <div className="bg-[#0A1D3B] text-white rounded-2xl p-8 sm:p-12 text-center space-y-6 border-4 border-[#B38A3E] shadow-2xl relative overflow-hidden">
            <div className="max-w-3xl mx-auto space-y-3">
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-[#B38A3E]">
                <span>★ ★ ★</span>
                <span>The Website Explains the Standard. The App Operationalizes It.</span>
                <span>★ ★ ★</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-serif font-black text-[#FAF7F0] leading-tight">
                Step Into the Operating Apparatus
              </h2>

              <p className="text-sm sm:text-base text-stone-200 leading-relaxed font-sans">
                You have read the charter. You understand why this standard must exist. Now, open the working instrument: inspect live municipal dockets, audit statutory authority, trace post-election mandates, and draft standard-compliant civic plans.
              </p>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                type="button"
                onClick={() => setDisplayMode('instrument')}
                className="px-8 py-4 bg-[#B38A3E] hover:bg-amber-400 text-slate-950 font-serif font-black text-sm uppercase tracking-wider rounded-lg shadow-xl hover:shadow-2xl transition-all flex items-center gap-3 border-2 border-white"
              >
                <span>Launch the Operating Instrument</span>
                <ArrowRight className="w-5 h-5 text-slate-950" />
              </button>

              <button
                type="button"
                onClick={() => onNavigate('power-learn')}
                className="px-6 py-4 bg-slate-900 hover:bg-slate-800 text-stone-200 font-mono text-xs font-bold uppercase tracking-wider rounded-lg transition-colors border border-stone-700 flex items-center gap-2"
              >
                <Compass className="w-4 h-4 text-[#B38A3E]" />
                <span>Explore Civic Context Guide</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* =====================================================================
          DIMENSION 2: THE OPERATING INSTRUMENT (THE WORKBENCH & ACTIVE LEDGER)
          ===================================================================== */}
      {displayMode === 'instrument' && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 animate-in fade-in duration-150">
          {/* Broadside Masthead for Operating Instrument */}
          <BroadsideMasthead
            eyebrow="OPERATIONAL CIVIC WORKBENCH · REAL-TIME MUNICIPAL & CONSTITUTIONAL LEDGER"
            title="The POWER Apparatus"
            subhead="The Working Instrument for Sovereign Citizens, Legislative Counsel, Public Auditors, and Investigative Press."
            volNumber="INSTRUMENT STATUS: ACTIVE & INSPECTABLE"
            dateStr="DEMONSTRATION JURISDICTION: WASHINGTON, DC"
          />

          {/* Return to Exposition Link */}
          <div className="flex items-center justify-between bg-white p-3.5 rounded-xl border border-stone-200 text-xs font-mono">
            <span className="text-[#596273]">
              Currently operating the active civic workbench.
            </span>
            <button
              type="button"
              onClick={() => setDisplayMode('exposition')}
              className="text-[#2457A7] hover:text-[#0A1D3B] font-bold inline-flex items-center gap-1"
            >
              <span>← Return to The Exposition (Charter)</span>
            </button>
          </div>

          {/* Ornate Swallowtail Banner for Instrument */}
          <div className="text-center">
            <OrnateRibbonBanner
              text="Operational Civic Workbench"
              subtext="Connecting Public Problems, Charters, Budgets, Actions, and Proof"
              variant="navy"
              size="md"
            />
          </div>

          {/* Quick Instrument Stations Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-mono">
            {[
              { id: 'problems', label: '1. Problem Dockets', icon: HelpCircle, color: 'text-rose-700' },
              { id: 'institutions', label: '2. Power Map & Vetoes', icon: Scale, color: 'text-blue-700' },
              { id: 'commitments', label: '3. Public Commitments', icon: FileText, color: 'text-indigo-700' },
              { id: 'plan-builder', label: '4. Candidate Plan Builder', icon: Compass, color: 'text-amber-700' },
              { id: 'mandate-ledger', label: '5. Mandate Ledger', icon: Layers, color: 'text-blue-800' },
              { id: 'flourishing', label: '6. Measured Outcomes', icon: HeartHandshake, color: 'text-emerald-700' },
              { id: 'evidence', label: '7. Evidence Archive', icon: FileCheck, color: 'text-purple-700' },
              { id: 'power-learn', label: '8. Democratic Navigation', icon: Landmark, color: 'text-[#0A1D3B]' },
            ].map((station) => {
              const Icon = station.icon;
              return (
                <button
                  key={station.id}
                  type="button"
                  onClick={() => onNavigate(station.id)}
                  className="bg-white hover:bg-stone-50 border border-stone-300 p-3 rounded-lg text-left transition-all hover:border-[#0A1D3B] shadow-2xs flex items-center gap-2 group"
                >
                  <Icon className={`w-4 h-4 ${station.color} shrink-0`} />
                  <span className="font-bold text-[#0A1D3B] group-hover:text-[#2457A7] truncate">
                    {station.label}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Interactive Accountability Chain */}
          <section className="bg-white p-6 rounded-2xl border-2 border-stone-200 shadow-xs space-y-4">
            <div className="flex items-center justify-between border-b border-stone-200 pb-2">
              <span className="text-xs font-mono font-bold text-[#0A1D3B] uppercase tracking-wider">
                The 7-Stage Chain of Self-Governance
              </span>
              <span className="text-[11px] font-mono text-[#596273]">
                Click Any Node to Open Specific Instrument
              </span>
            </div>
            <AccountabilityChain />
          </section>

          <TurnOfCenturyDivider label="SECTION 1: THE PUBLIC PROBLEMS DOCKET" />

          {/* Section 1: Problems */}
          <section className="space-y-6">
            <div className="flex items-end justify-between flex-wrap gap-4 border-b border-stone-200 pb-3">
              <div>
                <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#0A1D3B] mb-1 flex items-center gap-1.5">
                  <span className="text-[#B38A3E]">★</span>
                  <span>Civic Problems Explorer · Baseline Conditions</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-serif font-black text-[#0A1D3B]">
                  Active Public Problems in the Civic Record
                </h2>
                <p className="text-sm text-[#596273] max-w-2xl mt-1">
                  Empirical conditions documented by official audits, municipal data, and census records. Every record in POWER begins with a verified public problem rather than political rhetoric.
                </p>
              </div>
              <button
                type="button"
                onClick={() => onNavigate('problems')}
                className="text-xs font-bold text-[#2457A7] hover:text-[#0A1D3B] inline-flex items-center gap-1 font-mono"
              >
                <span>View all civic problem dockets</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {PUBLIC_PROBLEMS.slice(0, 4).map((problem) => (
                <div
                  key={problem.id}
                  className="bg-white border border-stone-200 rounded-xl p-5 shadow-xs hover:shadow-md transition-all flex flex-col justify-between space-y-4 hover:border-[#0A1D3B]/40"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs text-[#596273] font-mono">
                      <DataStatusBadge status={problem.dataStatus} />
                      <span className="bg-[#FAF7F0] px-2 py-0.5 rounded border border-stone-200 text-[#0A1D3B] font-semibold">{problem.geography}</span>
                    </div>

                    <h3 
                      onClick={() => onNavigate('problem-detail', problem.id)}
                      className="text-lg font-serif font-bold text-[#0A1D3B] hover:text-[#2457A7] cursor-pointer transition-colors leading-snug"
                    >
                      {problem.title}
                    </h3>

                    <p className="text-xs text-[#596273] line-clamp-2 leading-relaxed">
                      {problem.shortDescription}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-stone-100 flex items-center justify-between text-xs">
                    <span className="text-xs font-mono text-[#596273]">
                      {problem.commitmentIds.length} Documented Commitments
                    </span>

                    <button
                      type="button"
                      onClick={() => onNavigate('problem-detail', problem.id)}
                      className="font-bold text-[#2457A7] hover:text-[#0A1D3B] inline-flex items-center gap-1 font-mono text-xs"
                    >
                      <span>Inspect Problem Docket</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <TurnOfCenturyDivider label="SECTION 2: CONSTITUTIONAL SEPARATION OF POWERS" />

          {/* Section 2: Institutions */}
          <section className="space-y-6">
            <div className="flex items-end justify-between flex-wrap gap-4 border-b border-stone-200 pb-3">
              <div>
                <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#0A1D3B] mb-1 flex items-center gap-1.5">
                  <span className="text-[#B38A3E]">★</span>
                  <span>Constitutional Charters · Institutional Directory</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-serif font-black text-[#0A1D3B]">
                  Responsible Public Institutions
                </h2>
                <p className="text-sm text-[#596273] max-w-2xl mt-1">
                  Inspect public bodies by statutory charter, budget control, and explicitly documented jurisdictional boundaries under separation of powers.
                </p>
              </div>
              <button
                type="button"
                onClick={() => onNavigate('institutions')}
                className="text-xs font-bold text-[#2457A7] hover:text-[#0A1D3B] inline-flex items-center gap-1 font-mono"
              >
                <span>View all responsible institutions</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {INSTITUTIONS.slice(0, 3).map((inst) => (
                <div
                  key={inst.id}
                  className="bg-white border border-stone-200 rounded-xl p-5 shadow-xs hover:shadow-md transition-all flex flex-col justify-between space-y-4 hover:border-[#0A1D3B]/40"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs text-[#596273] font-mono">
                      <span className="bg-[#0A1D3B] text-white px-2 py-0.5 rounded font-bold">{inst.abbreviation}</span>
                      <span>{inst.institutionType}</span>
                    </div>

                    <h3
                      onClick={() => onNavigate('institution-detail', inst.id)}
                      className="text-base font-serif font-bold text-[#0A1D3B] hover:text-[#2457A7] cursor-pointer transition-colors"
                    >
                      {inst.name}
                    </h3>

                    <p className="text-xs text-[#596273] line-clamp-3 leading-relaxed">
                      {inst.mission}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-stone-100 flex items-center justify-between text-xs">
                    <span className="text-[11px] text-[#596273] font-mono">
                      Jurisdiction: {inst.jurisdiction}
                    </span>

                    <button
                      type="button"
                      onClick={() => onNavigate('institution-detail', inst.id)}
                      className="font-bold text-[#2457A7] hover:text-[#0A1D3B] inline-flex items-center gap-1 font-mono text-xs"
                    >
                      <span>Authority Dossier</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <TurnOfCenturyDivider label="SECTION 3: PUBLIC COMMITMENTS & MANDATE LEDGER" />

          {/* Section 3: Commitments */}
          <section className="space-y-6">
            <div className="flex items-end justify-between flex-wrap gap-4 border-b border-stone-200 pb-3">
              <div>
                <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#0A1D3B] mb-1 flex items-center gap-1.5">
                  <span className="text-[#B38A3E]">★</span>
                  <span>Documented Policy Pledges & Legislative Mandates</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-serif font-black text-[#0A1D3B]">
                  Documented Public Commitments
                </h2>
                <p className="text-sm text-[#596273] max-w-2xl mt-1">
                  Statements, targets, and statutory goals recorded verbatim without partisan commentary. Cross-examined against actual legal authority and budgetary mechanisms.
                </p>
              </div>
              <button
                type="button"
                onClick={() => onNavigate('commitments')}
                className="text-xs font-bold text-[#2457A7] hover:text-[#0A1D3B] inline-flex items-center gap-1 font-mono"
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
                    className="bg-white border border-stone-200 rounded-xl p-5 shadow-xs hover:shadow-md transition-all flex flex-col justify-between space-y-4 hover:border-[#0A1D3B]/40"
                  >
                    <div className="space-y-2.5">
                      <div className="flex items-center justify-between flex-wrap gap-2">
                        <div className="flex items-center gap-2 flex-wrap">
                          <DataStatusBadge status={commitment.dataStatus} />
                          <StatusBadge status={commitment.status} />
                          <SpecificityBadge level={commitment.specificityLevel} />
                        </div>
                        <span className="text-xs text-[#596273] font-mono">{commitment.date}</span>
                      </div>

                      <h3 
                        onClick={() => onNavigate('commitment-detail', commitment.id)}
                        className="text-base font-serif font-bold text-[#0A1D3B] hover:text-[#2457A7] cursor-pointer transition-colors leading-snug"
                      >
                        {commitment.title}
                      </h3>

                      <p className="text-xs text-[#17202A] italic bg-[#FAF7F0] p-3 rounded border border-stone-200 font-serif leading-relaxed">
                        "{commitment.originalWordingOrParaphrase}"
                      </p>

                      <div className="grid grid-cols-2 gap-2 text-xs text-[#596273] pt-1">
                        <div>
                          <span className="text-[#596273] block text-[10px] uppercase font-mono font-semibold">Public Official</span>
                          <strong className="text-[#0A1D3B]">{actor?.name}</strong> ({actor?.office})
                        </div>
                        <div>
                          <span className="text-[#596273] block text-[10px] uppercase font-mono font-semibold">Civic Problem Docket</span>
                          <span className="text-[#0A1D3B] font-medium">{problem?.title}</span>
                        </div>
                      </div>
                    </div>

                    <div className="pt-3 border-t border-stone-100 flex items-center justify-between text-xs">
                      <button
                        type="button"
                        onClick={() => onOpenEvidence(commitment.sourceEvidenceId)}
                        className="text-[#596273] hover:text-[#0A1D3B] inline-flex items-center gap-1 font-mono text-[11px]"
                      >
                        <FileText className="w-3.5 h-3.5 text-[#2457A7]" />
                        <span>Inspect Primary Citation</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => onNavigate('commitment-detail', commitment.id)}
                        className="font-bold text-[#2457A7] hover:text-[#0A1D3B] inline-flex items-center gap-1 font-mono text-xs"
                      >
                        <span>Full Public Dossier</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          <TurnOfCenturyDivider label="SECTION 4: TRANSPARENT PUBLIC PROVENANCE" />

          {/* Section 4: Evidence & Epistemics */}
          <section className="bg-white border-2 border-stone-200 rounded-2xl p-6 sm:p-8 space-y-6 shadow-xs">
            <div className="max-w-3xl space-y-1">
              <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#0A1D3B] mb-1 flex items-center gap-1.5">
                <span className="text-[#B38A3E]">★</span>
                <span>Provenance Hierarchy · Freedom of Information</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif font-black text-[#0A1D3B]">
                Evidence First: Transparent Public Provenance
              </h2>
              <p className="text-sm text-[#596273] leading-relaxed">
                POWER strictly separates primary statutes and enacted budgets from secondary news reports and synthesized calculations. Every material factual claim links directly to official government archives.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
              <div className="bg-[#FAF7F0] border border-stone-200 p-5 rounded-xl space-y-2">
                <span className="px-2.5 py-1 text-xs font-bold font-mono bg-blue-50 text-[#0A1D3B] border border-blue-200 rounded">
                  Primary Sources
                </span>
                <h4 className="font-serif font-bold text-[#0A1D3B] text-base">Direct Government Records</h4>
                <p className="text-xs text-[#596273] leading-relaxed">
                  Official statutes, D.C. Official Code, enacted local budget acts, Mayor’s Orders, Office of the D.C. Auditor (ODCA) reports, and raw U.S. Census Bureau microdata.
                </p>
              </div>

              <div className="bg-[#FAF7F0] border border-stone-200 p-5 rounded-xl space-y-2">
                <span className="px-2.5 py-1 text-xs font-bold font-mono bg-emerald-50 text-emerald-950 border border-emerald-300 rounded">
                  Secondary Sources
                </span>
                <h4 className="font-serif font-bold text-[#0A1D3B] text-base">Investigative Journalism</h4>
                <p className="text-xs text-[#596273] leading-relaxed">
                  Credible investigative journalism of record, peer-reviewed public policy evaluations, university research, and nonpartisan watchdog audits.
                </p>
              </div>

              <div className="bg-[#FAF7F0] border border-stone-200 p-5 rounded-xl space-y-2">
                <span className="px-2.5 py-1 text-xs font-bold font-mono bg-purple-50 text-purple-950 border border-purple-200 rounded">
                  Derived Analysis
                </span>
                <h4 className="font-serif font-bold text-[#0A1D3B] text-base">POWER Syntheses</h4>
                <p className="text-xs text-[#596273] leading-relaxed">
                  Mathematical calculations, timeline alignments, and causal logic evaluations computed by POWER directly from cited public records.
                </p>
              </div>
            </div>
          </section>
        </div>
      )}
    </div>
  );
};
