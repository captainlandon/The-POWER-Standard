import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { DemoBanner } from './components/Badge';
import { SearchBar } from './components/SearchBar';
import { EvidenceDrawer } from './components/EvidenceDrawer';
import { CorrectionModal } from './components/CorrectionModal';
import { DocumentUploadModal } from './components/DocumentUploadModal';

import { HomeView } from './views/HomeView';
import { ProblemsView } from './views/ProblemsView';
import { ProblemDetailView } from './views/ProblemDetailView';
import { InstitutionsView } from './views/InstitutionsView';
import { InstitutionDetailView } from './views/InstitutionDetailView';
import { PeopleView } from './views/PeopleView';
import { ActorDetailView } from './views/ActorDetailView';
import { CommitmentsView } from './views/CommitmentsView';
import { CommitmentDetailView } from './views/CommitmentDetailView';
import { EvidenceView } from './views/EvidenceView';
import { CompareView } from './views/CompareView';
import { MethodologyView } from './views/MethodologyView';
import { AtlasPreviewView } from './views/AtlasPreviewView';
import { DashboardPreviewView } from './views/DashboardPreviewView';
import { PlanBuilderView } from './views/PlanBuilderView';
import { MandateLedgerView } from './views/MandateLedgerView';
import { FlourishingOutcomesView } from './views/FlourishingOutcomesView';
import { EthicsSignalsView } from './views/EthicsSignalsView';
import { CivicWireAndPartiesView } from './views/CivicWireAndPartiesView';
import { ResearchApiView } from './views/ResearchApiView';
import { PowerLearnView } from './views/PowerLearnView';

import { EVIDENCE_STORE, INITIAL_CORRECTIONS } from './data/mockData';
import { EvidenceItem, CorrectionSubmission, FeedbackSubmission } from './types/power';
import { ShieldCheck, Scale, BookOpen, ExternalLink, ArrowRight } from 'lucide-react';

export default function App() {
  const [currentView, setCurrentView] = useState<string>('home');
  const [selectedProblemId, setSelectedProblemId] = useState<string>('housing-affordability');
  const [selectedInstitutionId, setSelectedInstitutionId] = useState<string>('dc-council');
  const [selectedActorId, setSelectedActorId] = useState<string>('muriel-bowser');
  const [selectedCommitmentId, setSelectedCommitmentId] = useState<string>('comm-housing-36k');

  // Global modals & drawers
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isEvidenceDrawerOpen, setIsEvidenceDrawerOpen] = useState(false);
  const [activeEvidence, setActiveEvidence] = useState<EvidenceItem | null>(null);

  const [isCorrectionModalOpen, setIsCorrectionModalOpen] = useState(false);
  const [correctionTarget, setCorrectionTarget] = useState<{ title: string; id: string; type?: CorrectionSubmission['recordType'] }>({
    title: '',
    id: '',
    type: 'Commitment'
  });

  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  const [uploadTarget, setUploadTarget] = useState<{ recordId: string; stageName: string }>({
    recordId: 'general',
    stageName: 'General Public Record'
  });

  // Dynamic user submissions
  const [correctionsList, setCorrectionsList] = useState<CorrectionSubmission[]>(INITIAL_CORRECTIONS);
  const [feedbackList, setFeedbackList] = useState<FeedbackSubmission[]>([]);

  // Keyboard shortcut: Cmd/Ctrl + K for search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Scroll to top on view change
  const handleNavigate = (view: string, id?: string) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (id) {
      if (view === 'problem-detail') setSelectedProblemId(id);
      if (view === 'institution-detail') setSelectedInstitutionId(id);
      if (view === 'actor-detail') setSelectedActorId(id);
      if (view === 'commitment-detail') setSelectedCommitmentId(id);
    }
    setCurrentView(view);
  };

  const handleOpenEvidence = (evidenceId: string) => {
    const found = EVIDENCE_STORE.find(e => e.id === evidenceId) || EVIDENCE_STORE[0];
    setActiveEvidence(found);
    setIsEvidenceDrawerOpen(true);
  };

  const handleOpenCorrection = (recordTitle = '', recordId = '', recordType: CorrectionSubmission['recordType'] = 'Commitment') => {
    setCorrectionTarget({ title: recordTitle, id: recordId, type: recordType });
    setIsCorrectionModalOpen(true);
  };

  const handleOpenUpload = (recordId: string, stageName: string) => {
    setUploadTarget({ recordId, stageName });
    setIsUploadModalOpen(true);
  };

  const handleCorrectionSubmit = (newCorr: CorrectionSubmission) => {
    setCorrectionsList(prev => [newCorr, ...prev]);
  };

  const handleFeedbackSubmit = (newFeedback: FeedbackSubmission) => {
    setFeedbackList(prev => [newFeedback, ...prev]);
  };

  return (
    <div className="min-h-screen bg-[#F7F4ED] text-[#17202A] font-sans flex flex-col selection:bg-blue-100 selection:text-[#0A1D3B]">
      {/* Top Banner */}
      <DemoBanner />

      {/* Main Header / Navbar */}
      <Navbar
        currentView={currentView}
        onNavigate={handleNavigate}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenCorrection={() => handleOpenCorrection()}
        pendingCorrectionsCount={correctionsList.filter(c => c.status === 'Pending review').length}
      />

      {/* View Content */}
      <main className="flex-1">
        {currentView === 'home' && (
          <HomeView
            onNavigate={handleNavigate}
            onOpenEvidence={handleOpenEvidence}
          />
        )}

        {currentView === 'problems' && (
          <ProblemsView
            onSelectProblem={(id) => handleNavigate('problem-detail', id)}
          />
        )}

        {currentView === 'problem-detail' && (
          <ProblemDetailView
            problemId={selectedProblemId}
            onBack={() => handleNavigate('problems')}
            onNavigate={handleNavigate}
            onOpenEvidence={handleOpenEvidence}
            onOpenCorrection={(title, id) => handleOpenCorrection(title, id, 'Problem')}
            onOpenUpload={handleOpenUpload}
          />
        )}

        {currentView === 'institutions' && (
          <InstitutionsView
            onSelectInstitution={(id) => handleNavigate('institution-detail', id)}
          />
        )}

        {currentView === 'institution-detail' && (
          <InstitutionDetailView
            institutionId={selectedInstitutionId}
            onBack={() => handleNavigate('institutions')}
            onNavigate={handleNavigate}
            onOpenEvidence={handleOpenEvidence}
            onOpenCorrection={(title, id) => handleOpenCorrection(title, id, 'Institution')}
            onOpenUpload={handleOpenUpload}
          />
        )}

        {currentView === 'people' && (
          <PeopleView
            onSelectActor={(id) => handleNavigate('actor-detail', id)}
          />
        )}

        {currentView === 'actor-detail' && (
          <ActorDetailView
            actorId={selectedActorId}
            onBack={() => handleNavigate('people')}
            onNavigate={handleNavigate}
            onOpenEvidence={handleOpenEvidence}
            onOpenCorrection={(title, id) => handleOpenCorrection(title, id, 'Actor')}
            onOpenUpload={handleOpenUpload}
          />
        )}

        {currentView === 'commitments' && (
          <CommitmentsView
            onSelectCommitment={(id) => handleNavigate('commitment-detail', id)}
          />
        )}

        {currentView === 'commitment-detail' && (
          <CommitmentDetailView
            commitmentId={selectedCommitmentId}
            onBack={() => handleNavigate('commitments')}
            onNavigate={handleNavigate}
            onOpenEvidence={handleOpenEvidence}
            onOpenCorrection={(title, id) => handleOpenCorrection(title, id, 'Commitment')}
            onOpenUpload={handleOpenUpload}
          />
        )}

        {currentView === 'evidence' && (
          <EvidenceView
            onOpenEvidence={handleOpenEvidence}
            onOpenCorrection={(title, id) => handleOpenCorrection(title, id, 'Evidence')}
            onOpenUpload={handleOpenUpload}
          />
        )}

        {currentView === 'compare' && (
          <CompareView
            onNavigate={handleNavigate}
            onOpenEvidence={handleOpenEvidence}
          />
        )}

        {currentView === 'methodology' && (
          <MethodologyView
            onOpenCorrection={() => handleOpenCorrection()}
            correctionsList={correctionsList}
          />
        )}

        {currentView === 'atlas-preview' && (
          <AtlasPreviewView
            onNavigate={handleNavigate}
          />
        )}

        {currentView === 'dashboard-preview' && (
          <DashboardPreviewView
            onNavigate={handleNavigate}
          />
        )}

        {currentView === 'plan-builder' && (
          <PlanBuilderView
            onNavigate={handleNavigate}
          />
        )}

        {currentView === 'mandate-ledger' && (
          <MandateLedgerView
            onNavigate={handleNavigate}
            onOpenEvidence={handleOpenEvidence}
          />
        )}

        {currentView === 'flourishing' && (
          <FlourishingOutcomesView
            onNavigate={handleNavigate}
          />
        )}

        {currentView === 'ethics' && (
          <EthicsSignalsView
            onNavigate={handleNavigate}
            onOpenCorrection={(title, id) => handleOpenCorrection(title, id, 'Evidence')}
          />
        )}

        {currentView === 'civic-wire' && (
          <CivicWireAndPartiesView
            onNavigate={handleNavigate}
            onOpenEvidence={handleOpenEvidence}
          />
        )}

        {currentView === 'research-api' && (
          <ResearchApiView />
        )}

        {currentView === 'power-learn' && (
          <PowerLearnView
            onNavigate={handleNavigate}
          />
        )}
      </main>

      {/* Global American Civic Footer */}
      <footer className="bg-[#0A1D3B] text-stone-300 border-t-2 border-[#B38A3E]/40 pt-14 pb-12 text-xs relative overflow-hidden">
        {/* Subtle American civic top border line */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#B38A3E]/50 to-transparent" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Col 1: American Democratic Heritage */}
            <div className="lg:col-span-2 space-y-4">
              <div className="flex items-center gap-3">
                <div className="relative w-10 h-11 rounded-t-sm rounded-b-lg bg-[#FAF7F0] text-[#0A1D3B] flex flex-col items-center justify-center font-serif font-black shadow-md border border-[#B38A3E]/50">
                  <span className="text-[7px] text-[#B38A3E] font-sans font-bold tracking-tighter leading-none mt-0.5">★ ★ ★</span>
                  <span className="text-lg tracking-wider text-[#0A1D3B] leading-none mt-0.5">P</span>
                </div>
                <div>
                  <div className="font-serif font-black text-xl text-[#FAF7F0] tracking-wider flex items-center gap-2">
                    <span>POWER</span>
                    <span className="text-[10px] font-mono text-[#B38A3E] uppercase font-bold tracking-widest border border-[#B38A3E]/40 px-1.5 py-0.2 rounded">
                      Standard
                    </span>
                  </div>
                  <div className="text-[10px] text-stone-400 font-mono tracking-wider uppercase">
                    American Civic Accountability Archive
                  </div>
                </div>
              </div>
              <p className="text-stone-300 leading-relaxed font-sans max-w-sm text-xs">
                Public Office Work Evidence and Results. An open civic infrastructure connecting public problems, statutory authority, campaign plans, budget appropriations, implementation milestones, and verified outcomes.
              </p>
              <div className="text-[11px] font-serif italic text-stone-300/90 border-l-2 border-[#B38A3E] pl-3 leading-relaxed space-y-1">
                <p>
                  “Knowledge will forever govern ignorance: And a people who mean to be their own Governors, must arm themselves with the power which knowledge gives.”
                </p>
                <span className="block font-mono text-[10px] text-[#B38A3E] not-italic">
                  — James Madison, Letter to W.T. Barry (August 4, 1822)
                </span>
              </div>
            </div>

            {/* Col 2: The Democratic Covenant */}
            <div className="space-y-3">
              <h4 className="font-mono font-bold uppercase text-[#FAF7F0] text-[11px] tracking-wider flex items-center gap-1">
                <span className="text-[#B38A3E]">★</span>
                <span>Democratic Covenant</span>
              </h4>
              <ul className="space-y-1.5 text-stone-300">
                <li><button type="button" onClick={() => handleNavigate('problems')} className="hover:text-white transition-colors">1. The Public Problem</button></li>
                <li><button type="button" onClick={() => handleNavigate('institutions')} className="hover:text-white transition-colors">2. Constitutional Authority</button></li>
                <li><button type="button" onClick={() => handleNavigate('commitments')} className="hover:text-white transition-colors">3. Policy Commitment</button></li>
                <li><button type="button" onClick={() => handleNavigate('plan-builder')} className="hover:text-amber-300 text-amber-400/90 font-semibold transition-colors">4. Candidate Plan Standard</button></li>
                <li><button type="button" onClick={() => handleNavigate('mandate-ledger')} className="hover:text-blue-300 text-blue-400 font-semibold transition-colors">5. The Mandate Ledger</button></li>
                <li><button type="button" onClick={() => handleNavigate('flourishing')} className="hover:text-emerald-300 text-emerald-400 font-semibold transition-colors">6. Measured Outcomes</button></li>
                <li><button type="button" onClick={() => handleNavigate('evidence')} className="hover:text-white transition-colors">7. Primary Evidence</button></li>
              </ul>
            </div>

            {/* Col 3: Civic Intelligence Modules */}
            <div className="space-y-3">
              <h4 className="font-mono font-bold uppercase text-[#FAF7F0] text-[11px] tracking-wider flex items-center gap-1">
                <span className="text-[#B38A3E]">★</span>
                <span>Civic Architecture</span>
              </h4>
              <ul className="space-y-1.5 text-stone-300 text-[11px]">
                <li><button type="button" onClick={() => handleNavigate('ethics')} className="hover:text-white transition-colors">Ethics & Money Signals</button></li>
                <li><button type="button" onClick={() => handleNavigate('civic-wire')} className="hover:text-white transition-colors">Civic Wire Gazette</button></li>
                <li><button type="button" onClick={() => handleNavigate('atlas-preview')} className="hover:text-white transition-colors">Ward Geographic Atlas</button></li>
                <li><button type="button" onClick={() => handleNavigate('dashboard-preview')} className="hover:text-white transition-colors">My Civic Dashboard</button></li>
                <li><button type="button" onClick={() => handleNavigate('research-api')} className="hover:text-white transition-colors">Open Research API (v2.0)</button></li>
                <li><button type="button" onClick={() => handleNavigate('methodology')} className="hover:text-white transition-colors">Civic Charter & Standard</button></li>
              </ul>
            </div>

            {/* Col 4: Sovereign Citizen Audits */}
            <div className="space-y-3">
              <h4 className="font-mono font-bold uppercase text-[#FAF7F0] text-[11px] tracking-wider flex items-center gap-1">
                <span className="text-[#B38A3E]">★</span>
                <span>Citizen Due Process</span>
              </h4>
              <p className="text-[11px] text-stone-300 leading-relaxed">
                In a constitutional democracy, every citizen possesses the right to challenge the public record with primary evidence.
              </p>
              <button
                type="button"
                onClick={() => handleOpenCorrection()}
                className="w-full py-2.5 px-3 bg-stone-900 hover:bg-stone-800 text-amber-300 border border-[#B38A3E]/50 rounded text-xs font-semibold transition-colors flex items-center justify-center gap-1.5 shadow-xs"
              >
                <Scale className="w-3.5 h-3.5 text-[#B38A3E]" />
                <span>Challenge Public Record</span>
              </button>
            </div>
          </div>

          {/* Bottom American Democratic Bar */}
          <div className="pt-8 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-stone-400 font-mono">
            <div>
              E PLURIBUS UNUM • JURISDICTION: WASHINGTON, DC (HOME RULE) • STRICT NONPARTISAN STANDARD
            </div>
            <div className="flex items-center gap-4">
              <button type="button" onClick={() => handleNavigate('methodology')} className="hover:text-white transition-colors">Methodology</button>
              <span>•</span>
              <button type="button" onClick={() => handleNavigate('compare')} className="hover:text-white transition-colors">Compare Records</button>
              <span>•</span>
              <button type="button" onClick={() => handleNavigate('evidence')} className="hover:text-white transition-colors">Evidence Archive</button>
            </div>
          </div>
        </div>
      </footer>

      {/* Global Interactive Drawers and Modals */}
      <EvidenceDrawer
        isOpen={isEvidenceDrawerOpen}
        evidence={activeEvidence}
        onClose={() => setIsEvidenceDrawerOpen(false)}
        onSuggestCorrection={(ev) => {
          setIsEvidenceDrawerOpen(false);
          handleOpenCorrection(ev.title, ev.id, 'Evidence');
        }}
      />

      <SearchBar
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onNavigate={handleNavigate}
        onOpenEvidence={handleOpenEvidence}
      />

      <CorrectionModal
        isOpen={isCorrectionModalOpen}
        onClose={() => setIsCorrectionModalOpen(false)}
        defaultRecordTitle={correctionTarget.title}
        defaultRecordId={correctionTarget.id}
        defaultRecordType={correctionTarget.type}
        onSubmitSuccess={handleCorrectionSubmit}
      />

      <DocumentUploadModal
        isOpen={isUploadModalOpen}
        onClose={() => setIsUploadModalOpen(false)}
        recordId={uploadTarget.recordId}
        stageName={uploadTarget.stageName}
        onSubmitSuccess={handleFeedbackSubmit}
      />
    </div>
  );
}
