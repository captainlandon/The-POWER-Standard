import React, { useState } from 'react';
import { 
  X, 
  ArrowRight, 
  Scale, 
  DollarSign, 
  Building2, 
  FileText, 
  CheckCircle2, 
  AlertTriangle, 
  Layers, 
  Eye, 
  BookOpen, 
  Sparkles,
  Info,
  ShieldCheck
} from 'lucide-react';

interface HowThisGetsDoneModalProps {
  isOpen: boolean;
  onClose: () => void;
  planTitle?: string;
  planContext?: string;
  problemTitle?: string;
  defaultBranch?: 'municipal' | 'federal' | 'state';
}

export const HowThisGetsDoneModal: React.FC<HowThisGetsDoneModalProps> = ({
  isOpen,
  onClose,
  planTitle = 'Deliver 36,000 Housing Units with 12,000 Affordable',
  planContext = 'D.C. Housing Production Trust Fund (HPTF) & Inclusionary Zoning Expansion',
  problemTitle = 'Housing Affordability & Severe Rent Burden in Washington, DC',
  defaultBranch = 'municipal'
}) => {
  const [mode, setMode] = useState<'simple' | 'deep'>('simple');
  const [selectedNode, setSelectedNode] = useState<number>(0);

  if (!isOpen) return null;

  const nodes = [
    {
      id: 'problem',
      stepNumber: 1,
      title: 'Public Problem & Civic Grievance',
      simpleTitle: 'The Problem Exists',
      actor: 'The Sovereign Citizens & Residents',
      badge: 'Public Need',
      summary: '46.8% of renters are cost-burdened; census data reveals acute shortages for households below 30% AMI.',
      simpleText: 'People in the community struggle to afford rent, and government data confirms this is a widespread condition.',
      discretion: 'Citizens and advocacy organizations decide what issues to prioritize and bring to elected officials.',
      stoppagePoint: 'Problem is ignored or remains unmeasured without credible baseline data.',
      crossBranch: 'None; grassroots initiation.',
      citizenAction: 'Gather petition signatures, testify at community forums, publish open data.'
    },
    {
      id: 'authority',
      stepNumber: 2,
      title: 'Statutory Authority Check',
      simpleTitle: 'Who Has Legal Power?',
      actor: 'D.C. Council & Mayor (Home Rule Charter)',
      badge: 'Legal Mandate',
      summary: 'D.C. Code § 42-2802 establishes the Housing Production Trust Fund under the Mayor, subject to Council appropriations.',
      simpleText: 'Before making promises, officials must check the law to verify that city government is legally allowed to build and fund housing.',
      discretion: 'Lawmakers can introduce statutory expansions; Mayor can create task forces.',
      stoppagePoint: 'Lacking statutory power (e.g. if federal law preempts local rent or zoning authority).',
      crossBranch: 'Home Rule Act limits: local government cannot alter federal judicial jurisdiction.',
      citizenAction: 'Inspect municipal charter and legislative code before blaming an agency without power.'
    },
    {
      id: 'legislative',
      stepNumber: 3,
      title: 'Legislative Enactment (Two Readings)',
      simpleTitle: 'City Council Debates & Votes',
      actor: 'D.C. Council Committee on Housing',
      badge: 'Legislative Action',
      summary: 'Bill introduced by Councilmembers; public hearing held; committee markup; two consecutive full Council floor votes 14 days apart.',
      simpleText: 'Lawmakers hold a public hearing where citizens speak, make amendments, and vote twice to pass the bill.',
      discretion: 'Committee Chair controls whether the bill receives a hearing; majority vote required to pass.',
      stoppagePoint: 'Committee Chair pigeonholes bill; vote fails on second reading; quorum lost.',
      crossBranch: 'Chief Financial Officer (CFO) must certify that funds are sufficient before passage.',
      citizenAction: 'Register to testify at public hearing; call Ward Councilmember before roll call.'
    },
    {
      id: 'budget',
      stepNumber: 4,
      title: 'Public Treasury Appropriation',
      simpleTitle: 'Money Is Allocated in the Budget',
      actor: 'Local Budget Act & OCFO Certification',
      badge: 'Treasury Allocation',
      summary: 'Enacting the bill is not enough. The Council must appropriate specific dollars ($238M) in the annual Local Budget Act.',
      simpleText: 'Passing a law does not spend money. Lawmakers must vote on a separate budget bill to allocate real tax dollars.',
      discretion: 'Council determines budget trade-offs between housing, transit, schools, and public safety.',
      stoppagePoint: 'Bill is enacted but receives $0 funding ("unfunded authorization"); dollars sit in unallocated reserves.',
      crossBranch: 'Requires executive revenue certification by the independent Chief Financial Officer.',
      citizenAction: 'Attend annual budget oversight hearings in April/May; advocate for line-item funding.'
    },
    {
      id: 'agency',
      stepNumber: 5,
      title: 'Agency Notice & Comment Rulemaking',
      simpleTitle: 'Agency Writes Detailed Rules',
      actor: 'Department of Housing & Community Development (DHCD)',
      badge: 'Administrative Rule',
      summary: 'DHCD drafts regulations defining affordability thresholds, published in D.C. Register for 30-day public comment.',
      simpleText: 'City housing officials write the exact rules for which developers qualify and how deep affordability is verified.',
      discretion: 'Agency Director exercises administrative discretion within statutory guardrails.',
      stoppagePoint: 'Agency delays rulemaking; regulations challenged under Administrative Procedure Act.',
      crossBranch: 'Council can introduce resolutions of disapproval within statutory review windows.',
      citizenAction: 'Submit formal public comments in the D.C. Register portal during the 30-day notice window.'
    },
    {
      id: 'procurement',
      stepNumber: 6,
      title: 'Procurement RFP & Contract Execution',
      simpleTitle: 'Contracts Awarded & Work Begins',
      actor: 'Office of Contracting and Procurement & Developers',
      badge: 'Execution',
      summary: 'DHCD issues competitive Request for Proposals (RFP); independent evaluation panel scores bids; loan agreements executed.',
      simpleText: 'The city holds a public competition for construction teams, reviews bids, awards funding, and signs contracts.',
      discretion: 'Procurement evaluation panel scores proposals against equity and cost criteria.',
      stoppagePoint: 'Bid protests filed by losing vendors; developer financing gaps; zoning delays.',
      crossBranch: 'Contracts over $1M require approval from the D.C. Council under Home Rule.',
      citizenAction: 'Inspect public contract database (contracts.dc.gov); attend Zoning Commission hearings.'
    },
    {
      id: 'outcome',
      stepNumber: 7,
      title: 'Longitudinal Measurement & Audit',
      simpleTitle: 'Results Measured & Audited',
      actor: 'Office of the D.C. Auditor (ODCA) & Census ACS',
      badge: 'Empirical Verification',
      summary: 'Units completed are tracked against baseline. The District Auditor conducts compliance audits to ensure funds were not misused.',
      simpleText: 'Independent auditors count the actual homes built and check census data to see if rent burden decreased.',
      discretion: 'Auditor operates independently of Mayor and Council to provide objective truth.',
      stoppagePoint: 'No audit conducted; agencies fail to publish disaggregated ward-level occupancy data.',
      crossBranch: 'Auditor reports findings to both Mayor and Council for corrective legislation.',
      citizenAction: 'Review published audit reports; file FOIA requests for occupancy certification records.'
    }
  ];

  const activeNode = nodes[selectedNode];

  return (
    <div className="fixed inset-0 z-50 bg-[#0A1D3B]/70 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-150">
      <div className="bg-white rounded-2xl border-2 border-[#0A1D3B]/20 shadow-2xl max-w-4xl w-full max-h-[92vh] flex flex-col overflow-hidden">
        {/* Modal Header */}
        <div className="bg-[#0A1D3B] text-white p-5 border-b-2 border-[#B38A3E]/40 flex items-center justify-between flex-wrap gap-3">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#B38A3E] uppercase tracking-wider">
              <span>★ ★ ★</span>
              <span>The Democratic Process Simulator</span>
            </div>
            <h2 className="text-xl font-serif font-black text-[#FAF7F0]">
              How This Actually Gets Done
            </h2>
            <p className="text-xs text-stone-300 max-w-xl truncate font-sans">
              Plan: <span className="text-white font-medium">{planTitle}</span>
            </p>
          </div>

          <div className="flex items-center gap-3">
            {/* Mode Toggle: Simple vs Deep */}
            <div className="bg-slate-900 border border-stone-700 rounded-lg p-1 flex items-center text-xs font-mono">
              <button
                type="button"
                onClick={() => setMode('simple')}
                className={`px-3 py-1 rounded transition-colors ${
                  mode === 'simple'
                    ? 'bg-[#B38A3E] text-slate-950 font-bold'
                    : 'text-stone-300 hover:text-white'
                }`}
              >
                Simple Mode
              </button>
              <button
                type="button"
                onClick={() => setMode('deep')}
                className={`px-3 py-1 rounded transition-colors ${
                  mode === 'deep'
                    ? 'bg-[#0A1D3B] text-white font-bold border border-[#B38A3E]/40'
                    : 'text-stone-300 hover:text-white'
                }`}
              >
                Deep Institutional
              </button>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="p-1.5 text-stone-300 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
              aria-label="Close process modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Interactive Step Timeline Bar */}
        <div className="bg-[#FAF7F0] p-4 border-b border-stone-200 overflow-x-auto">
          <div className="flex items-center justify-between min-w-[650px] gap-2">
            {nodes.map((n, idx) => {
              const isSelected = selectedNode === idx;
              return (
                <button
                  key={n.id}
                  type="button"
                  onClick={() => setSelectedNode(idx)}
                  className={`flex-1 p-2.5 rounded-lg border text-left transition-all ${
                    isSelected
                      ? 'bg-[#0A1D3B] text-white border-[#0A1D3B] shadow-sm'
                      : 'bg-white border-stone-200 text-[#17202A] hover:bg-stone-50'
                  }`}
                >
                  <div className="flex items-center justify-between text-[10px] font-mono mb-1">
                    <span className={isSelected ? 'text-[#B38A3E] font-bold' : 'text-[#596273]'}>
                      0{n.stepNumber}
                    </span>
                    <span className={`px-1.5 py-0.2 rounded text-[9px] ${
                      isSelected ? 'bg-slate-800 text-stone-200' : 'bg-stone-100 text-[#596273]'
                    }`}>
                      {n.badge}
                    </span>
                  </div>
                  <div className="font-serif font-bold text-xs truncate">
                    {mode === 'simple' ? n.simpleTitle : n.title}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Modal Main Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 bg-white">
          {/* Active Node Detail Card */}
          <div className="bg-[#FAF7F0] border-2 border-stone-200 rounded-xl p-5 space-y-4">
            <div className="flex items-start justify-between flex-wrap gap-2">
              <div>
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#0A1D3B] bg-white px-2.5 py-0.5 rounded border border-stone-300 inline-block mb-1">
                  Stage {activeNode.stepNumber} of 7: {activeNode.badge}
                </span>
                <h3 className="text-xl font-serif font-black text-[#0A1D3B]">
                  {mode === 'simple' ? activeNode.simpleTitle : activeNode.title}
                </h3>
                <div className="text-xs font-mono text-[#596273] mt-0.5">
                  Primary Responsible Body: <strong className="text-[#0A1D3B]">{activeNode.actor}</strong>
                </div>
              </div>

              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  disabled={selectedNode === 0}
                  onClick={() => setSelectedNode(prev => Math.max(0, prev - 1))}
                  className="px-2.5 py-1 text-xs border border-stone-300 rounded bg-white text-stone-700 disabled:opacity-40 hover:bg-stone-100"
                >
                  Previous
                </button>
                <button
                  type="button"
                  disabled={selectedNode === nodes.length - 1}
                  onClick={() => setSelectedNode(prev => Math.min(nodes.length - 1, prev + 1))}
                  className="px-2.5 py-1 text-xs border border-stone-300 rounded bg-[#0A1D3B] text-white disabled:opacity-40 hover:bg-[#1B4D89] font-bold"
                >
                  Next Step
                </button>
              </div>
            </div>

            <p className="text-sm text-[#17202A] leading-relaxed">
              {mode === 'simple' ? activeNode.simpleText : activeNode.summary}
            </p>

            {/* Deep Technical Breakdown Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs pt-2">
              {/* Where Action Can Stop */}
              <div className="bg-white p-3 rounded-lg border border-rose-200 space-y-1">
                <div className="flex items-center gap-1 text-[#BA252A] font-mono font-bold uppercase text-[10px]">
                  <AlertTriangle className="w-3.5 h-3.5" />
                  <span>Where Action Can Stop (Veto Point)</span>
                </div>
                <p className="text-[#17202A] leading-snug">{activeNode.stoppagePoint}</p>
              </div>

              {/* Who Holds Discretion */}
              <div className="bg-white p-3 rounded-lg border border-stone-200 space-y-1">
                <div className="flex items-center gap-1 text-[#0A1D3B] font-mono font-bold uppercase text-[10px]">
                  <Scale className="w-3.5 h-3.5 text-[#B38A3E]" />
                  <span>Who Holds Discretion?</span>
                </div>
                <p className="text-[#596273] leading-snug">{activeNode.discretion}</p>
              </div>

              {/* Cross-Branch Requirement */}
              <div className="bg-white p-3 rounded-lg border border-stone-200 space-y-1">
                <div className="flex items-center gap-1 text-[#0A1D3B] font-mono font-bold uppercase text-[10px]">
                  <Building2 className="w-3.5 h-3.5 text-[#2457A7]" />
                  <span>Inter-Branch Check & Balance</span>
                </div>
                <p className="text-[#596273] leading-snug">{activeNode.crossBranch}</p>
              </div>

              {/* Where the Citizen Can Act */}
              <div className="bg-white p-3 rounded-lg border border-emerald-200 space-y-1">
                <div className="flex items-center gap-1 text-emerald-800 font-mono font-bold uppercase text-[10px]">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Formal Citizen Participation Gate</span>
                </div>
                <p className="text-[#17202A] leading-snug">{activeNode.citizenAction}</p>
              </div>
            </div>
          </div>

          {/* Sourced Democratic Lesson Callout */}
          <div className="bg-[#FAF7F0] border-l-4 border-[#B38A3E] p-4 text-xs text-[#17202A] space-y-1">
            <strong className="text-[#0A1D3B] font-mono uppercase text-[11px] block">
              The Democratic Principle:
            </strong>
            <p className="text-[#596273] leading-relaxed">
              In a constitutional system, an executive or legislative announcement is not self-executing. Every policy must cross these institutional checkpoints. Knowing where an initiative is blocked enables citizens to direct advocacy to the exact office that holds statutory discretion.
            </p>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="bg-stone-50 px-6 py-3 border-t border-stone-200 flex items-center justify-between text-xs text-[#596273]">
          <span className="font-mono text-[11px]">
            The POWER Standard · Dynamic Governance Simulator
          </span>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-1.5 bg-[#0A1D3B] text-white font-bold rounded hover:bg-[#1B4D89] transition-colors"
          >
            Close Diagram
          </button>
        </div>
      </div>
    </div>
  );
};
