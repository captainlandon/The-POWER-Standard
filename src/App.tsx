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
    <div className="min-h-screen bg-slate-100/70 text-slate-900 font-sans flex flex-col selection:bg-indigo-100 selection:text-indigo-900">
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
      </main>

      {/* Global Civic Footer */}
      <footer className="bg-slate-900 text-slate-300 border-t border-slate-800 pt-14 pb-12 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Col 1: Identity & Maxim */}
            <div className="lg:col-span-2 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded bg-white text-slate-950 flex items-center justify-center font-serif font-black text-lg">
                  P
                </div>
                <div>
                  <div className="font-serif font-black text-xl text-white tracking-wider">
                    POWER
                  </div>
                  <div className="text-[10px] text-slate-400 font-mono">
                    The POWER Standard
                  </div>
                </div>
              </div>
              <p className="text-slate-400 leading-relaxed font-sans max-w-sm">
                Public Office Work Evidence and Results. A national civic accountability infrastructure connecting public problems, authority, plans, implementation, outcomes, and evidence.
              </p>
              <div className="text-[11px] font-serif italic text-slate-400 border-l-2 border-slate-700 pl-3">
                “Do not tell the public whom to trust. Make the public record easier to inspect.”
              </div>
            </div>

            {/* Col 2: The Core Chain */}
            <div className="space-y-3">
              <h4 className="font-mono font-bold uppercase text-slate-200 text-[11px] tracking-wider">
                Accountability Chain
              </h4>
              <ul className="space-y-1.5 text-slate-400">
                <li><button type="button" onClick={() => handleNavigate('problems')} className="hover:text-white">1. Public Problem</button></li>
                <li><button type="button" onClick={() => handleNavigate('institutions')} className="hover:text-white">2. Authority & Charter</button></li>
                <li><button type="button" onClick={() => handleNavigate('commitments')} className="hover:text-white">3. Public Commitment</button></li>
                <li><button type="button" onClick={() => handleNavigate('plan-builder')} className="hover:text-white text-indigo-400 font-semibold">4. Plan Builder</button></li>
                <li><button type="button" onClick={() => handleNavigate('mandate-ledger')} className="hover:text-white text-indigo-400 font-semibold">5. Mandate Ledger</button></li>
                <li><button type="button" onClick={() => handleNavigate('flourishing')} className="hover:text-white text-rose-400 font-semibold">6. Flourishing Outcomes</button></li>
                <li><button type="button" onClick={() => handleNavigate('evidence')} className="hover:text-white">7. Primary Evidence</button></li>
              </ul>
            </div>

            {/* Col 3: Ecosystem Modules */}
            <div className="space-y-3">
              <h4 className="font-mono font-bold uppercase text-slate-200 text-[11px] tracking-wider">
                Ecosystem Modules
              </h4>
              <ul className="space-y-1.5 text-slate-400 text-[11px]">
                <li><button type="button" onClick={() => handleNavigate('ethics')} className="hover:text-white">Ethics & Money Signals</button></li>
                <li><button type="button" onClick={() => handleNavigate('civic-wire')} className="hover:text-white">Civic Wire & Action</button></li>
                <li><button type="button" onClick={() => handleNavigate('atlas-preview')} className="hover:text-white">Ward Problem Atlas</button></li>
                <li><button type="button" onClick={() => handleNavigate('dashboard-preview')} className="hover:text-white">My Civic Dashboard</button></li>
                <li><button type="button" onClick={() => handleNavigate('research-api')} className="hover:text-white">Research & API Schema</button></li>
                <li><button type="button" onClick={() => handleNavigate('methodology')} className="hover:text-white">Methodology & Charter</button></li>
              </ul>
            </div>

            {/* Col 4: Platform & Audits */}
            <div className="space-y-3">
              <h4 className="font-mono font-bold uppercase text-slate-200 text-[11px] tracking-wider">
                Public Record Audit
              </h4>
              <p className="text-[11px] text-slate-400 leading-relaxed">
                Found an error, missing statute, or misclassified authority? Submit a challenge with primary sources.
              </p>
              <button
                type="button"
                onClick={() => handleOpenCorrection()}
                className="w-full py-2 px-3 bg-slate-800 hover:bg-slate-700 text-amber-300 border border-slate-700 rounded text-xs font-semibold transition-colors flex items-center justify-center gap-1.5"
              >
                <Scale className="w-3.5 h-3.5" />
                <span>Suggest Correction</span>
              </button>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500 font-mono">
            <div>
              Demonstration Jurisdiction: Washington, DC • Open-Source Civic Schema
            </div>
            <div className="flex items-center gap-4">
              <button type="button" onClick={() => handleNavigate('methodology')} className="hover:text-slate-300">Methodology</button>
              <span>•</span>
              <button type="button" onClick={() => handleNavigate('compare')} className="hover:text-slate-300">Compare Records</button>
              <span>•</span>
              <button type="button" onClick={() => handleNavigate('evidence')} className="hover:text-slate-300">Evidence Archive</button>
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
