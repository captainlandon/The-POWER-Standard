import React from 'react';
import { INITIAL_CORRECTIONS } from '../data/mockData';
import { CorrectionSubmission } from '../types/power';
import { 
  BookOpen, 
  ShieldCheck, 
  Scale, 
  AlertTriangle, 
  HelpCircle, 
  FileText, 
  CheckCircle2, 
  Edit3, 
  ArrowRight,
  History,
  XCircle,
  Clock,
  Layers,
  Sparkles
} from 'lucide-react';

interface MethodologyViewProps {
  onOpenCorrection: () => void;
  correctionsList: CorrectionSubmission[];
}

export const MethodologyView: React.FC<MethodologyViewProps> = ({
  onOpenCorrection,
  correctionsList
}) => {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      {/* Header */}
      <div className="space-y-4 border-b border-stone-200 pb-6">
        <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#0A1D3B] flex items-center gap-1.5">
          <span className="text-[#B38A3E]">★ ★ ★</span>
          <span>Civic Charter & Epistemic Standards · The American Democratic Tradition</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black text-[#0A1D3B] tracking-tight">
          The POWER Methodology
        </h1>

        {/* James Madison Complete Foundational Inscription */}
        <div className="bg-[#FAF7F0] border-l-4 border-[#0A1D3B] p-5 rounded-r-xl space-y-2 border-y border-r border-stone-200">
          <p className="font-serif italic text-base sm:text-lg text-[#0A1D3B] leading-relaxed">
            “Knowledge will forever govern ignorance: And a people who mean to be their own Governors, must arm themselves with the power which knowledge gives.”
          </p>
          <div className="flex items-center justify-between flex-wrap gap-2 text-xs font-mono text-[#596273] pt-1">
            <span className="font-bold text-[#0A1D3B]">— James Madison, Letter to W.T. Barry (August 4, 1822)</span>
            <span className="text-[11px] text-[#B38A3E] font-semibold">Foundational Principle of The POWER Standard</span>
          </div>
          <p className="text-[12px] text-[#596273] leading-relaxed pt-1 font-sans border-t border-stone-200/80 mt-2">
            In his 1822 letter, Madison observed that a popular government without popular information is but a prologue to farce or tragedy. To remain free and self-governing, a democracy requires transparent, verifiable public information accessible to every citizen.
          </p>
        </div>

        <p className="text-base text-slate-700 max-w-3xl leading-relaxed">
          The POWER Standard — <strong>Public Office Work Evidence and Results</strong> (v2.0) — is built on a single organizing maxim:
          <strong className="block text-slate-950 font-serif italic text-lg mt-2">
            “Do not tell the public whom to trust. Make the public record easier to inspect.”
          </strong>
        </p>
        <div className="p-3 bg-stone-100 rounded-lg border border-stone-200 text-xs text-slate-700 font-mono">
          <strong>Authoritative Expansion Note (Business Plan v2.0):</strong> The controlling expansion is <em>Public Office Work Evidence and Results</em>. Earlier working expansions (such as <em>Platform for Objective Workable Evidence-based Responsibility</em>) are officially treated as retired working language.
        </div>
      </div>

      {/* Prototype Honesty Notice (Requirement 13) */}
      <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-7 border border-slate-800 space-y-4">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-5 h-5 text-amber-400" />
          <h2 className="text-base font-serif font-bold text-white">
            Prototype Honesty & System Architecture Status
          </h2>
        </div>
        <p className="text-xs text-slate-300 leading-relaxed">
          To maintain transparency with researchers and civic observers, POWER clearly defines what is operational in this prototype versus simulated or planned for future production phases:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-1 text-xs">
          <div className="bg-slate-800/90 p-4 rounded-xl border border-slate-700 space-y-2">
            <span className="font-mono text-[10px] uppercase font-bold text-emerald-400 block">
              1. Functional Now
            </span>
            <div className="font-bold text-white text-sm">Interactive Client Schema</div>
            <p className="text-slate-300 text-[11px] leading-relaxed">
              Structured multi-stage accountability chain, authority maps, side-by-side comparison, evidentiary scope analysis, and local dispute logging.
            </p>
          </div>

          <div className="bg-slate-800/90 p-4 rounded-xl border border-slate-700 space-y-2">
            <span className="font-mono text-[10px] uppercase font-bold text-amber-400 block">
              2. Simulated in Prototype
            </span>
            <div className="font-bold text-white text-sm">Demonstration Dataset</div>
            <p className="text-slate-300 text-[11px] leading-relaxed">
              Washington, DC records formatted according to the POWER schema to demonstrate data linkages. Records are labeled as Simulated Demonstration Records unless explicitly marked Verified Real-World Record.
            </p>
          </div>

          <div className="bg-slate-800/90 p-4 rounded-xl border border-slate-700 space-y-2">
            <span className="font-mono text-[10px] uppercase font-bold text-indigo-400 block">
              3. Future Architecture
            </span>
            <div className="font-bold text-white text-sm">Production Integrations</div>
            <p className="text-slate-300 text-[11px] leading-relaxed">
              Automated ingestion pipelines, verified public agency API feeds, persistent multi-tenant correction databases, and spatial GIS Problem Atlas layers.
            </p>
          </div>
        </div>
      </div>

      {/* The Madisonian Framework for Modern Civic Literacy & Self-Governance */}
      <section className="bg-[#FAF7F0] border border-[#0A1D3B]/20 rounded-2xl p-6 sm:p-8 space-y-6 relative overflow-hidden">
        <div className="space-y-2">
          <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#0A1D3B] flex items-center gap-1.5">
            <span className="text-[#B38A3E]">★ ★ ★</span>
            <span>Civic Education & Madisonian Principles</span>
          </div>
          <h2 className="text-2xl font-serif font-black text-[#0A1D3B]">
            The Madisonian Standard: Why Knowledge Must Govern Ignorance
          </h2>
          <p className="text-xs sm:text-sm text-[#596273] max-w-3xl leading-relaxed">
            In modern civic education and public advocacy, James Madison’s 1822 declaration to W.T. Barry serves as the bedrock argument for four interconnected pillars of democratic self-governance:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-xs">
          {/* Pillar 1 */}
          <div className="bg-white p-5 rounded-xl border border-stone-200 shadow-xs space-y-2">
            <div className="flex items-center gap-2 text-[#0A1D3B] font-mono font-bold text-xs uppercase tracking-wide">
              <span className="w-5 h-5 rounded-full bg-[#0A1D3B] text-white flex items-center justify-center text-[10px]">1</span>
              <span>Government Transparency & FOIA</span>
            </div>
            <h3 className="font-serif font-bold text-sm text-[#0A1D3B]">Placing Governors & Governed on Equal Footing</h3>
            <p className="text-[#596273] leading-relaxed">
              Democracy cannot function if public power is shielded from scrutiny. As celebrated annually during Sunshine Week, Madison’s principle requires that the citizenry possess the statutory right to inspect official records, meeting minutes, general ledgers, and executive orders.
            </p>
          </div>

          {/* Pillar 2 */}
          <div className="bg-white p-5 rounded-xl border border-stone-200 shadow-xs space-y-2">
            <div className="flex items-center gap-2 text-[#0A1D3B] font-mono font-bold text-xs uppercase tracking-wide">
              <span className="w-5 h-5 rounded-full bg-[#0A1D3B] text-white flex items-center justify-center text-[10px]">2</span>
              <span>Information & Media Literacy</span>
            </div>
            <h3 className="font-serif font-bold text-sm text-[#0A1D3B]">Transforming Raw Claims into Verified Evidence</h3>
            <p className="text-[#596273] leading-relaxed">
              Without the tools to distinguish political spin from verified empirical fact, public discourse degenerates into what Madison called “a prologue to a farce or a tragedy.” POWER provides the epistemic scaffolding to deconstruct claims, check sources, and detect confounding variables.
            </p>
          </div>

          {/* Pillar 3 */}
          <div className="bg-white p-5 rounded-xl border border-stone-200 shadow-xs space-y-2">
            <div className="flex items-center gap-2 text-[#0A1D3B] font-mono font-bold text-xs uppercase tracking-wide">
              <span className="w-5 h-5 rounded-full bg-[#0A1D3B] text-white flex items-center justify-center text-[10px]">3</span>
              <span>Civic Infrastructure & Education</span>
            </div>
            <h3 className="font-serif font-bold text-sm text-[#0A1D3B]">Security Against Encroachments on Liberty</h3>
            <p className="text-[#596273] leading-relaxed">
              Originating in Madison’s praise of Kentucky’s public school funding, open civic educational infrastructure is the “best security against crafty & dangerous encroachments on the public liberty.” Free public data and open standards protect the republic from institutional opacity.
            </p>
          </div>

          {/* Pillar 4 */}
          <div className="bg-white p-5 rounded-xl border border-stone-200 shadow-xs space-y-2">
            <div className="flex items-center gap-2 text-[#0A1D3B] font-mono font-bold text-xs uppercase tracking-wide">
              <span className="w-5 h-5 rounded-full bg-[#0A1D3B] text-white flex items-center justify-center text-[10px]">4</span>
              <span>Lifelong Democratic Citizenship</span>
            </div>
            <h3 className="font-serif font-bold text-sm text-[#0A1D3B]">Continuous Oversight Beyond the Ballot Box</h3>
            <p className="text-[#596273] leading-relaxed">
              Voting is only the beginning of democratic duty. The enduring responsibility of the citizen is continuous oversight: tracking whether winning campaign pledges are codified into law, funded in annual appropriations, executed by agencies, and proven by outcome data.
            </p>
          </div>
        </div>
      </section>

      {/* Two Pillars: What POWER Measures vs What POWER Does NOT Determine */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* What POWER Measures */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs space-y-4">
          <div className="flex items-center gap-2 text-indigo-900 font-bold text-sm uppercase tracking-wider font-mono">
            <CheckCircle2 className="w-5 h-5 text-indigo-600" />
            <span>What POWER Measures</span>
          </div>

          <p className="text-xs text-slate-600 leading-relaxed">
            POWER reorganizes public records around verifiable, audit-ready dimensions:
          </p>

          <ul className="space-y-2.5 text-xs text-slate-800">
            <li className="flex items-start gap-2">
              <strong className="text-slate-900 font-mono shrink-0">1. Formal Authority:</strong>
              <span>What powers an office or agency legally possesses under municipal charter and state law.</span>
            </li>
            <li className="flex items-start gap-2">
              <strong className="text-slate-900 font-mono shrink-0">2. Commitments:</strong>
              <span>Exact verbatim public statements, targets, and proposals made by public actors.</span>
            </li>
            <li className="flex items-start gap-2">
              <strong className="text-slate-900 font-mono shrink-0">3. Action Plans:</strong>
              <span>Whether declarations contain concrete mechanisms, responsible entities, and timelines.</span>
            </li>
            <li className="flex items-start gap-2">
              <strong className="text-slate-900 font-mono shrink-0">4. Resources:</strong>
              <span>Distinctly tracking proposed, authorized, appropriated, and spent dollars.</span>
            </li>
            <li className="flex items-start gap-2">
              <strong className="text-slate-900 font-mono shrink-0">5. Implementation:</strong>
              <span>Documented actions such as enacted bills, regulations, contracts, and audits.</span>
            </li>
            <li className="flex items-start gap-2">
              <strong className="text-slate-900 font-mono shrink-0">6. Outcomes:</strong>
              <span>Measurable indicators reported with explicit methodological caveats and causal non-attribution.</span>
            </li>
            <li className="flex items-start gap-2">
              <strong className="text-slate-900 font-mono shrink-0">7. Provenance:</strong>
              <span>Every claim traced directly to primary public source records.</span>
            </li>
          </ul>
        </div>

        {/* What POWER Does NOT Determine */}
        <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 shadow-xs space-y-4">
          <div className="flex items-center gap-2 text-amber-400 font-bold text-sm uppercase tracking-wider font-mono">
            <AlertTriangle className="w-5 h-5" />
            <span>What POWER Does NOT Determine</span>
          </div>

          <p className="text-xs text-slate-300 leading-relaxed">
            To preserve democratic independence and public credibility, POWER strictly refuses to:
          </p>

          <ul className="space-y-2.5 text-xs text-slate-200">
            <li className="flex items-start gap-2">
              <strong className="text-rose-400 shrink-0 font-mono">✗ Endorse Candidates:</strong>
              <span>POWER never endorses, opposes, or recommends candidates or political parties.</span>
            </li>
            <li className="flex items-start gap-2">
              <strong className="text-rose-400 shrink-0 font-mono">✗ Assign Ideological Scores:</strong>
              <span>No politician report cards, no progressive/conservative ranking scales, no letter grades.</span>
            </li>
            <li className="flex items-start gap-2">
              <strong className="text-rose-400 shrink-0 font-mono">✗ Predict Elections:</strong>
              <span>No polling analysis, horserace predictions, or electoral forecasting models.</span>
            </li>
            <li className="flex items-start gap-2">
              <strong className="text-rose-400 shrink-0 font-mono">✗ Infer Subjective Intent:</strong>
              <span>No claims regarding politician motives or sincerity without explicit documented evidence.</span>
            </li>
            <li className="flex items-start gap-2">
              <strong className="text-rose-400 shrink-0 font-mono">✗ Conflate Correlation with Causation:</strong>
              <span>An indicator improving after a bill passes does NOT mathematically prove the bill caused it.</span>
            </li>
          </ul>
        </div>
      </div>

      {/* CORE METHODOLOGICAL DISTINCTIONS (Requirement 9) */}
      <section className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs space-y-6">
        <div>
          <div className="text-xs font-mono font-bold uppercase tracking-wider text-indigo-700 mb-1">
            Epistemic Boundaries
          </div>
          <h2 className="text-2xl font-serif font-bold text-slate-900">
            Core Methodological Distinctions
          </h2>
          <p className="text-xs text-slate-600 mt-1 max-w-3xl leading-relaxed">
            Public accountability is frequently undermined by conflating distinct legal, operational, and statistical concepts. POWER strictly enforces the following distinctions:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl space-y-1.5">
            <strong className="text-slate-900 font-serif text-sm block">1. Source Authenticity vs Evidentiary Relevance</strong>
            <p className="text-slate-600 leading-relaxed">
              An official source may conclusively prove that an institution or public official made a statement, but it does NOT establish that the content of the statement was accurate or that the promised outcome materialized.
            </p>
          </div>

          <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl space-y-1.5">
            <strong className="text-slate-900 font-serif text-sm block">2. Statement ≠ Implementation</strong>
            <p className="text-slate-600 leading-relaxed">
              A speech, policy proposal, press release, or campaign commitment is a public declaration of intent. It does not constitute operational deployment, staff hiring, or program execution.
            </p>
          </div>

          <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl space-y-1.5">
            <strong className="text-slate-900 font-serif text-sm block">3. Appropriation ≠ Expenditure</strong>
            <p className="text-slate-600 leading-relaxed">
              A legislative body voting to authorize or appropriate funds does not mean those dollars were disbursed. Dollars frequently sit in escrow, encounter procurement delays, or remain unspent at fiscal year close.
            </p>
          </div>

          <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl space-y-1.5">
            <strong className="text-slate-900 font-serif text-sm block">4. Expenditure ≠ Effectiveness</strong>
            <p className="text-slate-600 leading-relaxed">
              Spending 100% of an allocated municipal budget does not prove that the underlying civic problem was resolved or that the funds were utilized effectively.
            </p>
          </div>

          <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl space-y-1.5">
            <strong className="text-slate-900 font-serif text-sm block">5. Implementation ≠ Outcome</strong>
            <p className="text-slate-600 leading-relaxed">
              Carrying out an administrative action (e.g. enacting a statute, painting bus lanes, launching a unit) is an output milestone. It is not identical to a measurable shift in the target public outcome indicator.
            </p>
          </div>

          <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl space-y-1.5">
            <strong className="text-slate-900 font-serif text-sm block">6. Outcome ≠ Causation</strong>
            <p className="text-slate-600 leading-relaxed">
              An indicator moving in a favorable direction following a policy intervention does NOT mathematically prove causation. Macroeconomic shifts, regional trends, demographic patterns, and concurrent interventions must be accounted for.
            </p>
          </div>

          <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl space-y-1.5 md:col-span-2">
            <strong className="text-slate-900 font-serif text-sm block">7. Missing Evidence ≠ Evidence of Failure</strong>
            <p className="text-slate-600 leading-relaxed">
              The absence of public data does not prove an action failed; it simply proves that the record is incomplete. POWER reports gaps as <strong>Unknown</strong> or <strong>Unclear</strong> rather than fabricating negative conclusions.
            </p>
          </div>
        </div>
      </section>

      {/* EXACT THREE SOURCE CLASSES (Requirement 4) */}
      <section className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs space-y-6">
        <div>
          <div className="text-xs font-mono font-bold uppercase tracking-wider text-indigo-700 mb-1">
            Evidentiary Taxonomy
          </div>
          <h2 className="text-2xl font-serif font-bold text-slate-900">
            The Three Source Classes
          </h2>
          <p className="text-xs text-slate-600 mt-1">
            POWER categorizes all cited evidence into exactly three source classes. Insufficient evidence and unknown states are treated strictly as epistemic states, not source tiers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs">
          <div className="border border-slate-200 rounded-xl p-5 bg-slate-50 space-y-2.5">
            <span className="font-mono font-bold text-blue-900 bg-blue-100 border border-blue-300 px-2.5 py-0.5 rounded text-[10px] uppercase">
              1. Primary Source
            </span>
            <h3 className="font-bold text-slate-900 text-sm">First-Party Public Record</h3>
            <p className="text-slate-600 leading-relaxed">
              Original government records, legislation, enacted budgets, official datasets, administrative hearing transcripts, Mayor’s orders, and statutory agency audits.
            </p>
            <div className="pt-2 text-[10px] font-mono text-slate-400 border-t border-slate-200">
              Direct legal and operational provenance
            </div>
          </div>

          <div className="border border-slate-200 rounded-xl p-5 bg-slate-50 space-y-2.5">
            <span className="font-mono font-bold text-emerald-900 bg-emerald-100 border border-emerald-300 px-2.5 py-0.5 rounded text-[10px] uppercase">
              2. Secondary Source
            </span>
            <h3 className="font-bold text-slate-900 text-sm">Independent Public Reporting</h3>
            <p className="text-slate-600 leading-relaxed">
              Reputable investigative journalism, academic research, recognized civic watchdog reports, nonprofit analyses, and independent policy evaluations.
            </p>
            <div className="pt-2 text-[10px] font-mono text-slate-400 border-t border-slate-200">
              Independent interpretation and corroboration
            </div>
          </div>

          <div className="border border-slate-200 rounded-xl p-5 bg-slate-50 space-y-2.5">
            <span className="font-mono font-bold text-purple-900 bg-purple-100 border border-purple-300 px-2.5 py-0.5 rounded text-[10px] uppercase">
              3. Derived Analysis
            </span>
            <h3 className="font-bold text-slate-900 text-sm">Synthesized Calculations</h3>
            <p className="text-slate-600 leading-relaxed">
              Calculations, normalizations, percentage variances, and timeline classifications synthesized by POWER directly from identified primary sources.
            </p>
            <div className="pt-2 text-[10px] font-mono text-slate-400 border-t border-slate-200">
              Explicitly labeled as derived calculation
            </div>
          </div>
        </div>
      </section>

      {/* EPISTEMIC STATES MATRIX (Requirement 6) */}
      <section className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 space-y-5">
        <div>
          <div className="text-xs font-mono font-bold uppercase tracking-wider text-amber-400 mb-1">
            Epistemic Discipline
          </div>
          <h2 className="text-2xl font-serif font-bold text-white">
            The Six Epistemic States
          </h2>
          <p className="text-xs text-slate-300 mt-1 max-w-2xl">
            A government source is not automatically conclusive evidence for every proposition. POWER evaluates claims against six rigorous epistemic states:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 text-xs">
          <div className="bg-slate-800 p-4 rounded-xl border border-slate-700 space-y-1.5">
            <div className="font-mono font-bold text-emerald-400 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              Verified
            </div>
            <p className="text-slate-300 text-[11px] leading-relaxed">
              Directly supported for the specific claim by authoritative evidence. (Not assigned merely because a source is governmental).
            </p>
          </div>

          <div className="bg-slate-800 p-4 rounded-xl border border-slate-700 space-y-1.5">
            <div className="font-mono font-bold text-blue-400 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-blue-400" />
              Supported
            </div>
            <p className="text-slate-300 text-[11px] leading-relaxed">
              Well-supported but dependent on multiple or non-conclusive sources.
            </p>
          </div>

          <div className="bg-slate-800 p-4 rounded-xl border border-slate-700 space-y-1.5">
            <div className="font-mono font-bold text-purple-400 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-purple-400" />
              Derived
            </div>
            <p className="text-slate-300 text-[11px] leading-relaxed">
              Calculated or synthesized from identified evidence.
            </p>
          </div>

          <div className="bg-slate-800 p-4 rounded-xl border border-slate-700 space-y-1.5">
            <div className="font-mono font-bold text-amber-400 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              Disputed
            </div>
            <p className="text-slate-300 text-[11px] leading-relaxed">
              Credible evidence or interpretations materially conflict.
            </p>
          </div>

          <div className="bg-slate-800 p-4 rounded-xl border border-slate-700 space-y-1.5">
            <div className="font-mono font-bold text-yellow-400 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-yellow-400" />
              Unclear
            </div>
            <p className="text-slate-300 text-[11px] leading-relaxed">
              Evidence exists but does not permit a confident conclusion.
            </p>
          </div>

          <div className="bg-slate-800 p-4 rounded-xl border border-slate-700 space-y-1.5">
            <div className="font-mono font-bold text-rose-400 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-rose-400" />
              Unknown
            </div>
            <p className="text-slate-300 text-[11px] leading-relaxed">
              Adequate evidence has not been located.
            </p>
          </div>
        </div>
      </section>

      {/* Neutrality Charter */}
      <section className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-3">
        <div className="flex items-center gap-2">
          <Scale className="w-5 h-5 text-indigo-700" />
          <h2 className="text-xl font-serif font-bold text-slate-900">
            Neutrality & Symmetric Treatment Standard
          </h2>
        </div>
        <p className="text-xs text-slate-700 leading-relaxed">
          The exact same data schema and evidentiary hurdles apply to all public actors without exception—regardless of their political affiliation, ideological platform, electoral popularity, or seniority. Public actors are evaluated strictly as office-holding nodes within the civic accountability chain, never as political candidates or personalities.
        </p>
      </section>

      {/* Auditability & Public Dispute System */}
      <section className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs space-y-6">
        <div className="flex items-start justify-between flex-wrap gap-4">
          <div>
            <h2 className="text-2xl font-serif font-bold text-slate-900">
              Auditability & Corrections Log
            </h2>
            <p className="text-xs text-slate-600 mt-1 max-w-2xl">
              POWER is designed to be challenged by journalists, researchers, agency officials, and citizens. Below is the active prototype audit log.
            </p>
          </div>

          <button
            type="button"
            onClick={onOpenCorrection}
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-amber-900 bg-amber-50 hover:bg-amber-100 border border-amber-300 rounded-lg transition-colors"
          >
            <Edit3 className="w-4 h-4 text-amber-600" />
            <span>Suggest a Correction / Challenge Record</span>
          </button>
        </div>

        {/* Corrections Table */}
        <div className="border border-slate-200 rounded-xl overflow-hidden text-xs">
          <div className="bg-slate-50 p-3 border-b border-slate-200 font-mono font-bold text-slate-600 flex items-center justify-between">
            <span>Prototype Audit Submissions ({correctionsList.length})</span>
            <span className="text-[10px] text-slate-400">Double-Verification Standard</span>
          </div>

          <div className="divide-y divide-slate-100">
            {correctionsList.map((corr) => (
              <div key={corr.id} className="p-4 space-y-2 hover:bg-slate-50 transition-colors">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-slate-400 font-bold">{corr.id}</span>
                    <span className="font-semibold text-slate-900">{corr.recordTitle}</span>
                    <span className="text-slate-400">({corr.recordType})</span>
                  </div>
                  <span className={`px-2 py-0.5 rounded font-mono text-[10px] font-bold ${
                    corr.status === 'Resolved' 
                      ? 'bg-emerald-100 text-emerald-900 border border-emerald-300' 
                      : 'bg-amber-100 text-amber-900 border border-amber-300'
                  }`}>
                    {corr.status}
                  </span>
                </div>

                <div className="text-slate-700 leading-relaxed">
                  <strong className="text-slate-900">Issue: {corr.issueType}</strong> — {corr.explanation}
                </div>

                <div className="flex items-center justify-between text-[11px] text-slate-400 font-mono pt-1">
                  <span>Source Cited: {corr.supportingSourceUrlOrDoc}</span>
                  <span>{corr.timestamp}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
