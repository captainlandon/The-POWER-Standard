import React, { useState } from 'react';
import { 
  GOVERNANCE_PROCESSES, 
  CIVIC_CONTEXT_PROFILES, 
  CIVIC_ACTION_PATHWAYS, 
  GovernmentLevel, 
  ProcessStage, 
  CivicOffice 
} from '../data/civicContextData';
import { SimulatedRecordNotice } from '../components/Badge';
import { HowThisGetsDoneModal } from '../components/HowThisGetsDoneModal';
import { 
  Compass, 
  MapPin, 
  Scale, 
  Building2, 
  Layers, 
  CheckCircle2, 
  AlertTriangle, 
  ShieldCheck, 
  FileText, 
  ArrowRight, 
  Search, 
  BookOpen, 
  ExternalLink, 
  ChevronRight,
  UserCheck,
  HelpCircle,
  Sparkles,
  Gavel,
  Landmark,
  Megaphone,
  Vote,
  FileCheck,
  DollarSign
} from 'lucide-react';

interface PowerLearnViewProps {
  onNavigate: (view: string, id?: string) => void;
  defaultTab?: 'how-it-works' | 'my-civic-context' | 'what-can-i-do' | 'simulator';
}

export const PowerLearnView: React.FC<PowerLearnViewProps> = ({ 
  onNavigate,
  defaultTab = 'how-it-works' 
}) => {
  const [activeTab, setActiveTab] = useState<'how-it-works' | 'my-civic-context' | 'what-can-i-do' | 'simulator'>(defaultTab);

  // Tab 1: How Democracy Works State
  const [govLevel, setGovLevel] = useState<GovernmentLevel>('local');
  const [civicsMode, setCivicsMode] = useState<'simple' | 'deep'>('simple');
  const [activeProcessStage, setActiveProcessStage] = useState<number>(0);

  // Tab 2: My Civic Context State
  const [selectedJurisdictionId, setSelectedJurisdictionId] = useState<string>('dc-ward1');
  const [customZipInput, setCustomZipInput] = useState<string>('20009');
  const [selectedOfficeId, setSelectedOfficeId] = useState<string>('off-anc');

  // Tab 3: What Can I Do State
  const [selectedActionPathwayId, setSelectedActionPathwayId] = useState<string>(CIVIC_ACTION_PATHWAYS[0].id);

  // Modal State for "How This Gets Done"
  const [isSimulatorModalOpen, setIsSimulatorModalOpen] = useState(false);
  const [simulatorPlanTitle, setSimulatorPlanTitle] = useState('Deliver 36,000 Housing Units with 12,000 Affordable');

  const currentProcess = GOVERNANCE_PROCESSES[govLevel];
  const activeStage = currentProcess.stages[activeProcessStage] || currentProcess.stages[0];

  const currentProfile = CIVIC_CONTEXT_PROFILES[selectedJurisdictionId] || CIVIC_CONTEXT_PROFILES['dc-ward1'];
  const activeOffice = currentProfile.offices.find(o => o.id === selectedOfficeId) || currentProfile.offices[0];

  const activePathway = CIVIC_ACTION_PATHWAYS.find(p => p.id === selectedActionPathwayId) || CIVIC_ACTION_PATHWAYS[0];

  const handleZipLookup = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanZip = customZipInput.trim();
    if (cleanZip.startsWith('20019') || cleanZip.startsWith('20020')) {
      setSelectedJurisdictionId('dc-ward7');
      setSelectedOfficeId('off-ward7-council');
    } else if (cleanZip.startsWith('200')) {
      setSelectedJurisdictionId('dc-ward1');
      setSelectedOfficeId('off-anc');
    } else {
      setSelectedJurisdictionId('general-us-state');
      setSelectedOfficeId('off-us-senator');
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      {/* Editorial American Civic Header */}
      <div className="border-b-2 border-stone-200 pb-6 space-y-3">
        <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#0A1D3B]">
          <span className="text-[#B38A3E]">★ ★ ★</span>
          <span>The Democratic Navigation Layer · POWER Learn</span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black text-[#0A1D3B] tracking-tight">
          Civic Context & Democratic Navigation
        </h1>

        <div className="p-4 bg-[#FAF7F0] border-l-4 border-[#0A1D3B] rounded-r-xl space-y-1 border-y border-r border-stone-200">
          <p className="font-serif italic text-base text-[#0A1D3B] leading-relaxed">
            “Who am I in this system, who has power over what, how does public action actually happen, and what lawful democratic tools are available to me?”
          </p>
          <div className="text-xs text-[#596273] font-sans">
            POWER connects public problems with legal authority. This layer explains the <strong>constitutional system around that chain</strong> so every citizen can navigate power effectively.
          </div>
        </div>
      </div>

      {/* Primary Module Navigation Tabs */}
      <div className="flex items-center gap-2 border-b border-stone-200 overflow-x-auto pb-1 text-xs font-mono font-bold">
        {[
          { id: 'how-it-works', label: '1. How Democracy Works', icon: Landmark, desc: 'Federal, State & Municipal Process Flow' },
          { id: 'my-civic-context', label: '2. My Civic Context', icon: MapPin, desc: 'Your Place in the Democratic Ladder' },
          { id: 'what-can-i-do', label: '3. What Can I Do?', icon: Megaphone, desc: 'Objective-Based Citizen Action Guide' },
          { id: 'simulator', label: '4. How This Gets Done', icon: Layers, desc: 'Dynamic Decision Flowchart Simulator' },
        ].map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-4 py-3 rounded-t-xl transition-all flex items-center gap-2 border-t-2 shrink-0 ${
                isActive
                  ? 'bg-white border-[#0A1D3B] text-[#0A1D3B] shadow-xs border-x border-stone-200'
                  : 'bg-[#FAF7F0] border-transparent text-[#596273] hover:text-[#0A1D3B] hover:bg-stone-100'
              }`}
            >
              <Icon className={`w-4 h-4 ${isActive ? 'text-[#B38A3E]' : 'text-[#596273]'}`} />
              <div className="text-left">
                <div className="leading-tight">{tab.label}</div>
                <div className="text-[10px] font-sans font-normal text-[#596273] hidden sm:block">{tab.desc}</div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Simulated Demonstration Record Notice */}
      <SimulatedRecordNotice />

      {/* =====================================================================
          TAB 1: HOW DEMOCRACY WORKS
          ===================================================================== */}
      {activeTab === 'how-it-works' && (
        <div className="space-y-8 animate-in fade-in duration-150">
          {/* Controls Bar: Jurisdiction Level + Mode Toggle */}
          <div className="bg-white border border-stone-200 rounded-xl p-5 shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="text-[11px] font-mono font-bold text-[#0A1D3B] uppercase tracking-wider block">
                Select Level of Government
              </span>
              <div className="flex items-center gap-2 flex-wrap">
                {[
                  { id: 'local', label: 'Municipal / Home Rule (City)' },
                  { id: 'state', label: 'State Government (50 States)' },
                  { id: 'federal', label: 'Federal Government (U.S.)' },
                ].map((lvl) => (
                  <button
                    key={lvl.id}
                    type="button"
                    onClick={() => {
                      setGovLevel(lvl.id as GovernmentLevel);
                      setActiveProcessStage(0);
                    }}
                    className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-bold transition-all border ${
                      govLevel === lvl.id
                        ? 'bg-[#0A1D3B] text-white border-[#0A1D3B] shadow-xs'
                        : 'bg-[#FAF7F0] text-[#17202A] border-stone-300 hover:bg-stone-100'
                    }`}
                  >
                    {lvl.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Simple Mode vs Deep Mode Toggle */}
            <div className="bg-[#FAF7F0] border border-stone-300 rounded-lg p-1.5 flex items-center gap-1 text-xs font-mono">
              <span className="text-[#596273] px-2 text-[11px] font-semibold">Pedagogical Depth:</span>
              <button
                type="button"
                onClick={() => setCivicsMode('simple')}
                className={`px-3 py-1 rounded transition-colors ${
                  civicsMode === 'simple'
                    ? 'bg-[#B38A3E] text-slate-950 font-bold'
                    : 'text-[#596273] hover:text-[#0A1D3B]'
                }`}
              >
                Simple Mode (Schoolhouse Rock Clarity)
              </button>
              <button
                type="button"
                onClick={() => setCivicsMode('deep')}
                className={`px-3 py-1 rounded transition-colors ${
                  civicsMode === 'deep'
                    ? 'bg-[#0A1D3B] text-white font-bold'
                    : 'text-[#596273] hover:text-[#0A1D3B]'
                }`}
              >
                Deep Mode (POWER Legal & Fiscal)
              </button>
            </div>
          </div>

          {/* Level Header Banner */}
          <div className="bg-[#0A1D3B] text-white rounded-2xl p-6 sm:p-8 space-y-3 border-2 border-[#B38A3E]/30 relative overflow-hidden">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#B38A3E] uppercase tracking-wider">
              <span>★ ★ ★</span>
              <span>{currentProcess.constitutionalBasis}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-black text-[#FAF7F0]">
              {currentProcess.title}
            </h2>
            <p className="text-sm text-stone-200 max-w-3xl leading-relaxed font-sans">
              {currentProcess.description}
            </p>
          </div>

          {/* Process Timeline Bar */}
          <div className="bg-white border border-stone-200 rounded-xl p-4 shadow-xs overflow-x-auto">
            <div className="flex items-center justify-between min-w-[700px] gap-2">
              {currentProcess.stages.map((st, idx) => {
                const isActive = activeProcessStage === idx;
                return (
                  <button
                    key={st.id}
                    type="button"
                    onClick={() => setActiveProcessStage(idx)}
                    className={`flex-1 p-3 rounded-lg border text-left transition-all relative ${
                      isActive
                        ? 'bg-[#0A1D3B] text-white border-[#0A1D3B] shadow-sm ring-2 ring-[#B38A3E]/40'
                        : 'bg-[#FAF7F0] border-stone-200 text-[#17202A] hover:bg-stone-50'
                    }`}
                  >
                    <div className="flex items-center justify-between text-[10px] font-mono mb-1">
                      <span className={isActive ? 'text-[#B38A3E] font-bold' : 'text-[#596273]'}>
                        0{st.number}
                      </span>
                      <span className={`px-1.5 py-0.2 rounded text-[9px] ${
                        isActive ? 'bg-slate-800 text-stone-200' : 'bg-stone-100 text-[#596273]'
                      }`}>
                        {st.branch}
                      </span>
                    </div>
                    <div className="font-serif font-bold text-xs truncate">
                      {civicsMode === 'simple' ? st.simpleName : st.name}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Stage Deep Inspection Card */}
          <div className="bg-white border-2 border-stone-200 rounded-2xl p-6 sm:p-8 space-y-6 shadow-sm">
            <div className="flex items-start justify-between flex-wrap gap-4 border-b border-stone-200 pb-4">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#0A1D3B] bg-[#FAF7F0] px-3 py-1 rounded border border-stone-300 inline-block mb-1.5">
                  Stage {activeStage.number} of {currentProcess.stages.length} • {activeStage.branch}
                </span>
                <h3 className="text-2xl font-serif font-black text-[#0A1D3B]">
                  {civicsMode === 'simple' ? activeStage.simpleName : activeStage.name}
                </h3>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  disabled={activeProcessStage === 0}
                  onClick={() => setActiveProcessStage(prev => Math.max(0, prev - 1))}
                  className="px-3 py-1.5 text-xs border border-stone-300 rounded bg-white text-stone-700 disabled:opacity-40 hover:bg-stone-50"
                >
                  Previous Stage
                </button>
                <button
                  type="button"
                  disabled={activeProcessStage === currentProcess.stages.length - 1}
                  onClick={() => setActiveProcessStage(prev => Math.min(currentProcess.stages.length - 1, prev + 1))}
                  className="px-3 py-1.5 text-xs border border-stone-300 rounded bg-[#0A1D3B] text-white disabled:opacity-40 hover:bg-[#1B4D89] font-bold"
                >
                  Next Stage
                </button>
              </div>
            </div>

            {/* Explanation paragraph */}
            <p className="text-sm sm:text-base text-[#17202A] leading-relaxed font-sans">
              {civicsMode === 'simple' ? activeStage.simpleExplanation : activeStage.summary}
            </p>

            {/* Deep Procedural Breakdown Matrix */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-2 text-xs">
              {/* Veto / Stoppage Points */}
              <div className="bg-rose-50/70 border border-rose-200 p-4 rounded-xl space-y-1.5">
                <div className="flex items-center gap-1.5 text-[#BA252A] font-mono font-bold uppercase text-[11px]">
                  <AlertTriangle className="w-4 h-4 shrink-0" />
                  <span>Where Action Can Stop</span>
                </div>
                <ul className="space-y-1 text-[#17202A] leading-snug">
                  {activeStage.vetoPoints.map((v, i) => (
                    <li key={i}>• {v}</li>
                  ))}
                </ul>
              </div>

              {/* Who Holds Discretion */}
              <div className="bg-[#FAF7F0] border border-stone-200 p-4 rounded-xl space-y-1.5">
                <div className="flex items-center gap-1.5 text-[#0A1D3B] font-mono font-bold uppercase text-[11px]">
                  <Scale className="w-4 h-4 text-[#B38A3E] shrink-0" />
                  <span>Who Holds Discretion?</span>
                </div>
                <p className="text-[#596273] leading-snug">{activeStage.discretionHolders}</p>
              </div>

              {/* Inter-Branch Requirement */}
              <div className="bg-[#FAF7F0] border border-stone-200 p-4 rounded-xl space-y-1.5">
                <div className="flex items-center gap-1.5 text-[#0A1D3B] font-mono font-bold uppercase text-[11px]">
                  <Building2 className="w-4 h-4 text-[#2457A7] shrink-0" />
                  <span>Inter-Branch Check & Balance</span>
                </div>
                <p className="text-[#596273] leading-snug">{activeStage.crossBranchRequirement}</p>
              </div>

              {/* Budget Relevance */}
              <div className="bg-amber-50/70 border border-amber-200 p-4 rounded-xl space-y-1.5">
                <div className="flex items-center gap-1.5 text-amber-900 font-mono font-bold uppercase text-[11px]">
                  <DollarSign className="w-4 h-4 text-amber-700 shrink-0" />
                  <span>Where Budgets Matter</span>
                </div>
                <p className="text-amber-950 leading-snug">{activeStage.budgetRelevance}</p>
              </div>

              {/* Executive / Agency Role */}
              <div className="bg-blue-50/70 border border-blue-200 p-4 rounded-xl space-y-1.5">
                <div className="flex items-center gap-1.5 text-[#0A1D3B] font-mono font-bold uppercase text-[11px]">
                  <FileText className="w-4 h-4 text-[#2457A7] shrink-0" />
                  <span>Agency & Regulatory Role</span>
                </div>
                <p className="text-slate-800 leading-snug">{activeStage.agencyRole}</p>
              </div>

              {/* Citizen Participation Gateway */}
              <div className="bg-emerald-50/70 border border-emerald-200 p-4 rounded-xl space-y-1.5">
                <div className="flex items-center gap-1.5 text-emerald-900 font-mono font-bold uppercase text-[11px]">
                  <ShieldCheck className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span>Citizen Action Opportunity</span>
                </div>
                <ul className="space-y-1 text-emerald-950 leading-snug">
                  {activeStage.citizenParticipationGates.map((g, i) => (
                    <li key={i}>• {g}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* =====================================================================
          TAB 2: MY CIVIC CONTEXT (MY PLACE IN DEMOCRACY)
          ===================================================================== */}
      {activeTab === 'my-civic-context' && (
        <div className="space-y-8 animate-in fade-in duration-150">
          {/* ZIP / Address Finder Form */}
          <div className="bg-white border border-stone-200 rounded-2xl p-6 shadow-xs space-y-4">
            <div className="max-w-3xl space-y-1">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#0A1D3B]">
                Personalized Civic Mapping Engine
              </span>
              <h2 className="text-2xl font-serif font-black text-[#0A1D3B]">
                Understand Your Place in the Democratic Ladder
              </h2>
              <p className="text-xs text-[#596273] leading-relaxed">
                Enter your ZIP code or select a jurisdiction below to reveal your representation hierarchy: from your neighborhood block commissioner to the federal judiciary.
              </p>
            </div>

            <form onSubmit={handleZipLookup} className="flex items-center gap-3 flex-wrap">
              <div className="relative w-48">
                <MapPin className="w-4 h-4 text-stone-400 absolute left-3 top-2.5" />
                <input
                  type="text"
                  value={customZipInput}
                  onChange={(e) => setCustomZipInput(e.target.value)}
                  placeholder="Enter ZIP code..."
                  className="w-full pl-9 pr-3 py-2 text-xs font-mono bg-[#FAF7F0] border border-stone-300 rounded-lg focus:outline-hidden focus:ring-1 focus:ring-[#0A1D3B]"
                />
              </div>

              <button
                type="submit"
                className="px-4 py-2 bg-[#0A1D3B] text-white font-mono text-xs font-bold rounded-lg hover:bg-[#1B4D89] transition-colors"
              >
                Map My Offices
              </button>

              <span className="text-xs text-[#596273] font-mono hidden sm:inline">Or select jurisdiction preset:</span>

              <div className="flex items-center gap-1.5 flex-wrap">
                {[
                  { id: 'dc-ward1', label: 'D.C. Ward 1 (20009)' },
                  { id: 'dc-ward7', label: 'D.C. Ward 7 (20019)' },
                  { id: 'general-us-state', label: 'Standard US State' },
                ].map((p) => (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => {
                      setSelectedJurisdictionId(p.id);
                      if (p.id === 'dc-ward1') {
                        setCustomZipInput('20009');
                        setSelectedOfficeId('off-anc');
                      } else if (p.id === 'dc-ward7') {
                        setCustomZipInput('20019');
                        setSelectedOfficeId('off-ward7-council');
                      } else {
                        setCustomZipInput('22030');
                        setSelectedOfficeId('off-us-senator');
                      }
                    }}
                    className={`px-3 py-1.5 rounded text-xs font-mono ${
                      selectedJurisdictionId === p.id
                        ? 'bg-[#B38A3E] text-slate-950 font-bold'
                        : 'bg-stone-100 text-[#596273] hover:bg-stone-200'
                    }`}
                  >
                    {p.label}
                  </button>
                ))}
              </div>
            </form>
          </div>

          {/* Active Jurisdiction Overview */}
          <div className="bg-[#FAF7F0] border-2 border-stone-200 rounded-2xl p-6 sm:p-8 space-y-6">
            <div className="flex items-start justify-between flex-wrap gap-4 border-b border-stone-200 pb-4">
              <div>
                <span className="text-[11px] font-mono font-bold text-[#0A1D3B] uppercase tracking-wider block">
                  Active Civic Profile
                </span>
                <h3 className="text-2xl font-serif font-black text-[#0A1D3B]">
                  {currentProfile.name}
                </h3>
                <div className="flex items-center gap-3 text-xs font-mono text-[#596273] mt-1 flex-wrap">
                  <span>Type: <strong className="text-[#0A1D3B]">{currentProfile.type}</strong></span>
                  <span>•</span>
                  <span>Federal: <strong className="text-[#0A1D3B]">{currentProfile.federalRepresentation}</strong></span>
                </div>
              </div>
            </div>

            {/* Hierarchical Democratic Ladder (Left) + Office Inspector (Right) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Left Column: Office Buttons in Hierarchical Order */}
              <div className="lg:col-span-5 space-y-2">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#596273] block mb-2">
                  The Democratic Representation Ladder
                </span>

                {currentProfile.offices.map((office, idx) => {
                  const isSelected = selectedOfficeId === office.id;
                  return (
                    <button
                      key={office.id}
                      type="button"
                      onClick={() => setSelectedOfficeId(office.id)}
                      className={`w-full p-3.5 rounded-xl border text-left transition-all flex items-start gap-3 ${
                        isSelected
                          ? 'bg-[#0A1D3B] text-white border-[#0A1D3B] shadow-sm ring-2 ring-[#B38A3E]/30'
                          : 'bg-white border-stone-200 hover:bg-stone-50 text-[#17202A]'
                      }`}
                    >
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-mono font-bold shrink-0 mt-0.5 ${
                        isSelected ? 'bg-[#B38A3E] text-slate-950' : 'bg-stone-100 text-[#596273]'
                      }`}>
                        {idx + 1}
                      </div>

                      <div className="space-y-0.5 flex-1 min-w-0">
                        <div className="flex items-center justify-between text-[10px] font-mono">
                          <span className={isSelected ? 'text-[#B38A3E]' : 'text-[#596273]'}>
                            {office.level} • {office.branch}
                          </span>
                          <span className={`px-1.5 py-0.2 rounded font-semibold ${
                            office.isElectedByCitizen
                              ? isSelected ? 'bg-emerald-900 text-emerald-200' : 'bg-emerald-50 text-emerald-800'
                              : isSelected ? 'bg-slate-800 text-stone-300' : 'bg-stone-100 text-[#596273]'
                          }`}>
                            {office.isElectedByCitizen ? 'Elected' : 'Appointed'}
                          </span>
                        </div>
                        <h4 className="font-serif font-bold text-sm truncate">
                          {office.title}
                        </h4>
                        {office.currentHolder && (
                          <div className={`text-[11px] truncate ${isSelected ? 'text-stone-300' : 'text-[#596273]'}`}>
                            Current: {office.currentHolder}
                          </div>
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Right Column: Deep Office Inspector Card */}
              <div className="lg:col-span-7 bg-white border border-stone-200 rounded-xl p-6 space-y-6 shadow-xs">
                <div className="border-b border-stone-200 pb-4 space-y-1">
                  <div className="flex items-center gap-2 text-xs font-mono">
                    <span className="px-2 py-0.5 rounded bg-blue-50 text-[#0A1D3B] font-bold border border-blue-200">
                      {activeOffice.level} Level
                    </span>
                    <span className="text-[#596273]">Branch: {activeOffice.branch}</span>
                    <span className="text-[#596273]">•</span>
                    <span className="font-semibold text-emerald-800">
                      {activeOffice.isElectedByCitizen ? '✓ Direct Citizen Vote' : 'Appointed / Confirmed'}
                    </span>
                  </div>

                  <h3 className="text-2xl font-serif font-black text-[#0A1D3B]">
                    {activeOffice.title}
                  </h3>
                  {activeOffice.currentHolder && (
                    <div className="text-xs font-mono text-[#596273]">
                      Incumbent / Officeholder: <strong className="text-[#0A1D3B]">{activeOffice.currentHolder}</strong>
                    </div>
                  )}
                </div>

                {/* Core Question 1: What It Actually Does vs What It Does Not Control */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                  <div className="bg-[#FAF7F0] border border-stone-200 p-4 rounded-xl space-y-1.5">
                    <strong className="text-[#0A1D3B] font-mono uppercase text-[11px] block flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      <span>What This Office Actually Does</span>
                    </strong>
                    <p className="text-[#17202A] leading-relaxed">{activeOffice.whatItDoes}</p>
                  </div>

                  <div className="bg-rose-50/70 border border-rose-200 p-4 rounded-xl space-y-1.5">
                    <strong className="text-[#BA252A] font-mono uppercase text-[11px] block flex items-center gap-1">
                      <AlertTriangle className="w-3.5 h-3.5 text-[#BA252A]" />
                      <span>What It Does NOT Control</span>
                    </strong>
                    <p className="text-[#17202A] leading-relaxed">{activeOffice.whatItDoesNotControl}</p>
                  </div>
                </div>

                {/* Core Question 2: Selection & Removal Mechanisms */}
                <div className="bg-stone-50 border border-stone-200 p-4 rounded-xl space-y-2 text-xs">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div>
                      <span className="text-[10px] font-mono uppercase text-[#596273] block font-bold">
                        How They Get Into Office:
                      </span>
                      <p className="text-[#17202A] font-medium mt-0.5">{activeOffice.appointingOrConfirmingAuthority}</p>
                    </div>
                    <div>
                      <span className="text-[10px] font-mono uppercase text-[#596273] block font-bold">
                        Who Can Remove or Constrain Them:
                      </span>
                      <p className="text-[#17202A] font-medium mt-0.5">{activeOffice.removalOrConstraintAuthority}</p>
                    </div>
                  </div>
                </div>

                {/* Core Question 3: When Would You Contact This Office? */}
                <div className="space-y-2 text-xs">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#0A1D3B] block">
                    When Should a Citizen Contact This Office?
                  </span>
                  <ul className="space-y-1.5 text-[#17202A]">
                    {activeOffice.whenToContact.map((w, i) => (
                      <li key={i} className="flex items-start gap-2 bg-[#FAF7F0] p-2.5 rounded-lg border border-stone-200">
                        <ArrowRight className="w-3.5 h-3.5 text-[#2457A7] shrink-0 mt-0.5" />
                        <span>{w}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Pedagogical Callout: Authority Before Accountability */}
                <div className="p-3.5 bg-blue-50/70 border border-blue-200 rounded-lg text-xs text-[#0A1D3B] space-y-1">
                  <div className="font-mono font-bold uppercase text-[11px] flex items-center gap-1.5">
                    <Scale className="w-3.5 h-3.5 text-[#B38A3E]" />
                    <span>The Principle of Authority Before Accountability</span>
                  </div>
                  <p className="text-[#596273] leading-relaxed">
                    Before blaming or crediting an official for a community condition, verify whether their office possessed statutory jurisdiction under law. Blaming an office that cannot legally act distracts scrutiny from the institution that actually holds the power.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* =====================================================================
          TAB 3: WHAT CAN I DO? (CITIZEN ACTION CONTEXTUALIZER)
          ===================================================================== */}
      {activeTab === 'what-can-i-do' && (
        <div className="space-y-8 animate-in fade-in duration-150">
          {/* Goal Selector */}
          <div className="bg-white border border-stone-200 rounded-2xl p-6 sm:p-8 shadow-xs space-y-4">
            <div className="max-w-3xl space-y-1">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#0A1D3B]">
                Objective-Driven Citizen Navigation
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-black text-[#0A1D3B]">
                What Are You Trying to Change or Inspect?
              </h2>
              <p className="text-xs text-[#596273] leading-relaxed">
                Rather than asking people to wander through bureaucracy, start with your goal. POWER maps the exact lawful democratic mechanisms available to you across five distinct spheres.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 pt-2 text-xs font-sans">
              {CIVIC_ACTION_PATHWAYS.map((p) => {
                const isSelected = selectedActionPathwayId === p.id;
                return (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => setSelectedActionPathwayId(p.id)}
                    className={`p-4 rounded-xl border text-left transition-all flex flex-col justify-between ${
                      isSelected
                        ? 'bg-[#0A1D3B] text-white border-[#0A1D3B] shadow-sm ring-2 ring-[#B38A3E]/30'
                        : 'bg-[#FAF7F0] border-stone-200 text-[#17202A] hover:bg-stone-50'
                    }`}
                  >
                    <div>
                      <span className={`text-[10px] font-mono uppercase block mb-1 font-bold ${
                        isSelected ? 'text-[#B38A3E]' : 'text-[#596273]'
                      }`}>
                        {p.category}
                      </span>
                      <h4 className="font-serif font-bold text-sm leading-snug">
                        {p.goal}
                      </h4>
                    </div>
                    <div className={`mt-3 text-[11px] font-mono flex items-center gap-1 ${
                      isSelected ? 'text-stone-300' : 'text-[#2457A7]'
                    }`}>
                      <span>Inspect 5 Mechanisms</span>
                      <ArrowRight className="w-3 h-3" />
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Pathway Deep Guide */}
          <div className="bg-[#FAF7F0] border-2 border-stone-200 rounded-2xl p-6 sm:p-8 space-y-6">
            <div className="border-b border-stone-200 pb-4 space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#0A1D3B]">
                <span className="text-[#B38A3E]">★ ★ ★</span>
                <span>Category: {activePathway.category}</span>
              </div>
              <h3 className="text-2xl font-serif font-black text-[#0A1D3B]">
                Civic Action Roadmap: {activePathway.goal}
              </h3>
              <div className="bg-white p-3.5 rounded-lg border border-stone-200 text-xs text-[#0A1D3B] font-mono flex items-start gap-2">
                <HelpCircle className="w-4 h-4 text-[#B38A3E] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#0A1D3B] uppercase">First Question to Clarify:</strong> {activePathway.keyQuestion}
                </div>
              </div>
            </div>

            {/* 5 Distinct Democratic Action Spheres */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 text-xs">
              {/* Sphere 1: Information & Records */}
              <div className="bg-white p-5 rounded-xl border border-stone-200 shadow-xs space-y-3">
                <div className="flex items-center gap-2 text-[#0A1D3B] font-mono font-bold text-xs uppercase tracking-wide">
                  <Search className="w-4 h-4 text-[#2457A7]" />
                  <span>1. Information & Public Records</span>
                </div>
                <div className="space-y-3">
                  {activePathway.informationTools.map((t, i) => (
                    <div key={i} className="p-3 bg-[#FAF7F0] rounded-lg border border-stone-200 space-y-1">
                      <div className="font-serif font-bold text-xs text-[#0A1D3B]">{t.title}</div>
                      <p className="text-[#596273] leading-relaxed">{t.action}</p>
                      <div className="text-[10px] font-mono text-[#0A1D3B] pt-0.5">Source: {t.citation}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sphere 2: Individual Participation */}
              <div className="bg-white p-5 rounded-xl border border-stone-200 shadow-xs space-y-3">
                <div className="flex items-center gap-2 text-[#0A1D3B] font-mono font-bold text-xs uppercase tracking-wide">
                  <Vote className="w-4 h-4 text-[#B38A3E]" />
                  <span>2. Individual Participation</span>
                </div>
                <div className="space-y-3">
                  {activePathway.individualActions.map((a, i) => (
                    <div key={i} className="p-3 bg-[#FAF7F0] rounded-lg border border-stone-200 space-y-1">
                      <div className="font-serif font-bold text-xs text-[#0A1D3B]">{a.title}</div>
                      <p className="text-[#596273] leading-relaxed">{a.action}</p>
                      <div className="text-[10px] font-mono text-emerald-800 pt-0.5">Formal Right: {a.participationGate}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sphere 3: Collective Participation */}
              <div className="bg-white p-5 rounded-xl border border-stone-200 shadow-xs space-y-3">
                <div className="flex items-center gap-2 text-[#0A1D3B] font-mono font-bold text-xs uppercase tracking-wide">
                  <Building2 className="w-4 h-4 text-indigo-600" />
                  <span>3. Collective Action & Coalition</span>
                </div>
                <div className="space-y-3">
                  {activePathway.collectiveActions.map((c, i) => (
                    <div key={i} className="p-3 bg-[#FAF7F0] rounded-lg border border-stone-200 space-y-1">
                      <div className="font-serif font-bold text-xs text-[#0A1D3B]">{c.title}</div>
                      <p className="text-[#596273] leading-relaxed">{c.action}</p>
                      <div className="text-[10px] font-mono text-[#0A1D3B] pt-0.5">Framework: {c.coalitionType}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sphere 4: Institutional Mechanisms */}
              <div className="bg-white p-5 rounded-xl border border-stone-200 shadow-xs space-y-3">
                <div className="flex items-center gap-2 text-[#0A1D3B] font-mono font-bold text-xs uppercase tracking-wide">
                  <Gavel className="w-4 h-4 text-[#BA252A]" />
                  <span>4. Institutional & Oversight Channels</span>
                </div>
                <div className="space-y-3">
                  {activePathway.institutionalMechanisms.map((m, i) => (
                    <div key={i} className="p-3 bg-[#FAF7F0] rounded-lg border border-stone-200 space-y-1">
                      <div className="font-serif font-bold text-xs text-[#0A1D3B]">{m.title}</div>
                      <p className="text-[#596273] leading-relaxed">{m.action}</p>
                      <div className="text-[10px] font-mono text-amber-900 pt-0.5">Auditing Body: {m.formalChannel}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sphere 5: Lawful Assembly & Demonstration */}
              <div className="bg-white p-5 rounded-xl border border-stone-200 shadow-xs space-y-3 md:col-span-2">
                <div className="flex items-center gap-2 text-[#0A1D3B] font-mono font-bold text-xs uppercase tracking-wide">
                  <Megaphone className="w-4 h-4 text-amber-600" />
                  <span>5. Lawful Assembly, Petition & First Amendment Rights</span>
                </div>
                <div className="p-4 bg-[#FAF7F0] rounded-lg border border-stone-200 space-y-2">
                  <h4 className="font-serif font-bold text-sm text-[#0A1D3B]">
                    {activePathway.lawfulAssemblyRights.title}
                  </h4>
                  <p className="text-[#17202A] leading-relaxed">
                    {activePathway.lawfulAssemblyRights.guidance}
                  </p>
                  <div className="p-2.5 bg-amber-50 border border-amber-300 rounded text-amber-950 font-mono text-[11px]">
                    <strong>Permit Rules & Legal Constraints:</strong> {activePathway.lawfulAssemblyRights.permitRequirement}
                  </div>
                </div>
              </div>
            </div>

            {/* Nonpartisan Agency Preservation Notice */}
            <div className="bg-white p-4 rounded-xl border border-stone-200 text-xs text-[#596273] space-y-1">
              <strong className="text-[#0A1D3B] font-mono uppercase text-[11px] block">
                The Nonpartisan Civic Guarantee:
              </strong>
              <p className="leading-relaxed">
                POWER never tells the citizen which political cause to champion or whom to vote for. This tool maps the objective, lawful democratic instruments available under the Constitution for the objective you have chosen.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* =====================================================================
          TAB 4: HOW THIS GETS DONE SIMULATOR
          ===================================================================== */}
      {activeTab === 'simulator' && (
        <div className="space-y-8 animate-in fade-in duration-150">
          <div className="bg-white border border-stone-200 rounded-2xl p-6 sm:p-8 shadow-xs space-y-4">
            <div className="max-w-3xl space-y-1">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#0A1D3B]">
                Interactive Policy Flowchart Generator
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-black text-[#0A1D3B]">
                Show Me How This Could Actually Happen
              </h2>
              <p className="text-xs text-[#596273] leading-relaxed">
                Select an active municipal plan below to simulate its real-world trajectory across statutory authority, budget appropriation, notice-and-comment rulemaking, and independent audit.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
              {[
                { title: 'Deliver 36,000 Housing Units (12,000 Affordable)', type: 'Housing Trust Fund' },
                { title: 'Vision Zero Bus Lanes & Automated Enforcement', type: 'Transit & DDOT' },
                { title: 'Secure DC Omnibus Public Safety Legislation', type: 'Criminal Code Reform' },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl border border-stone-200 bg-[#FAF7F0] space-y-3 flex flex-col justify-between"
                >
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono uppercase text-[#0A1D3B] font-bold">
                      {item.type}
                    </span>
                    <h4 className="font-serif font-bold text-sm text-[#0A1D3B]">
                      {item.title}
                    </h4>
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      setSimulatorPlanTitle(item.title);
                      setIsSimulatorModalOpen(true);
                    }}
                    className="w-full py-2 bg-[#0A1D3B] text-white rounded font-mono text-xs font-bold hover:bg-[#1B4D89] transition-colors flex items-center justify-center gap-1.5 shadow-xs"
                  >
                    <span>Launch Process Simulator</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Dynamic Modal Simulator Component */}
      <HowThisGetsDoneModal
        isOpen={isSimulatorModalOpen}
        onClose={() => setIsSimulatorModalOpen(false)}
        planTitle={simulatorPlanTitle}
      />
    </div>
  );
};
