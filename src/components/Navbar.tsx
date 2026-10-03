import React, { useState } from 'react';
import { 
  Search, 
  Menu, 
  X, 
  Scale, 
  ShieldCheck, 
  Layers, 
  MapPin, 
  User, 
  Building2, 
  FileText, 
  AlertCircle,
  HelpCircle,
  BarChart2,
  BookmarkPlus,
  Compass,
  Radio,
  HeartHandshake,
  ShieldAlert,
  Code
} from 'lucide-react';

interface NavbarProps {
  currentView: string;
  onNavigate: (view: string, id?: string) => void;
  onOpenSearch: () => void;
  onOpenCorrection: () => void;
  pendingCorrectionsCount: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentView,
  onNavigate,
  onOpenSearch,
  onOpenCorrection,
  pendingCorrectionsCount,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const primaryNavItems = [
    { id: 'home', label: 'Home' },
    { id: 'problems', label: 'Problem Atlas' },
    { id: 'institutions', label: 'Power Map' },
    { id: 'people', label: 'People' },
    { id: 'commitments', label: 'Plans' },
    { id: 'plan-builder', label: 'Plan Builder', isHighlight: true },
    { id: 'mandate-ledger', label: 'Mandate Ledger' },
    { id: 'compare', label: 'Compare' },
    { id: 'flourishing', label: 'Flourishing' },
    { id: 'ethics', label: 'Ethics Signals' },
    { id: 'evidence', label: 'Evidence' },
    { id: 'methodology', label: 'Methodology' },
  ];

  const handleNavClick = (viewId: string) => {
    onNavigate(viewId);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-slate-200 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo & Brand */}
          <button
            type="button"
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 text-left group focus:outline-hidden shrink-0"
          >
            <div className="w-10 h-10 rounded-lg bg-slate-900 text-white flex items-center justify-center font-serif font-black text-xl tracking-wider shadow-sm group-hover:bg-indigo-950 transition-colors">
              P
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-serif font-black tracking-wider text-xl text-slate-900 group-hover:text-indigo-900 transition-colors">
                  POWER
                </span>
                <span className="text-[10px] font-mono uppercase bg-slate-100 text-slate-700 px-1.5 py-0.5 rounded font-bold border border-slate-200">
                  Standard v2.0
                </span>
              </div>
              <div className="text-[10px] text-slate-500 font-sans tracking-tight hidden sm:block">
                Public Office Work Evidence and Results
              </div>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center space-x-1 text-xs font-medium text-slate-700">
            {primaryNavItems.map((item) => {
              const isActive = currentView === item.id || (currentView.startsWith(item.id.slice(0, 7)));
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleNavClick(item.id)}
                  className={`px-2.5 py-1.5 rounded-md transition-colors ${
                    item.isHighlight && !isActive
                      ? 'bg-indigo-50 text-indigo-900 font-bold border border-indigo-200 hover:bg-indigo-100'
                      : isActive
                      ? 'bg-slate-900 text-white font-bold'
                      : 'hover:bg-slate-100 hover:text-slate-900'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Mid-screen condensed nav */}
          <nav className="hidden lg:flex xl:hidden items-center space-x-1 text-xs font-medium text-slate-700">
            {[
              { id: 'home', label: 'Home' },
              { id: 'problems', label: 'Problems' },
              { id: 'institutions', label: 'Power Map' },
              { id: 'commitments', label: 'Plans' },
              { id: 'plan-builder', label: 'Plan Builder', isHighlight: true },
              { id: 'mandate-ledger', label: 'Ledger' },
              { id: 'flourishing', label: 'Flourishing' },
              { id: 'compare', label: 'Compare' },
              { id: 'methodology', label: 'Method' },
            ].map((item) => {
              const isActive = currentView === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleNavClick(item.id)}
                  className={`px-2 py-1.5 rounded-md transition-colors ${
                    isActive
                      ? 'bg-slate-900 text-white font-bold'
                      : 'hover:bg-slate-100 hover:text-slate-900'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Right Header Utilities: Search & Dispute Button */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onOpenSearch}
              className="flex items-center gap-2 px-3 py-1.5 text-xs text-slate-500 bg-slate-100 hover:bg-slate-200 hover:text-slate-800 rounded-lg border border-slate-200 transition-colors focus:outline-hidden"
              title="Search public record"
            >
              <Search className="w-4 h-4 text-slate-400" />
              <span className="hidden md:inline">Universal Search</span>
              <kbd className="hidden md:inline text-[9px] font-mono bg-white text-slate-500 px-1.5 py-0.5 rounded border border-slate-300">
                ⌘K
              </kbd>
            </button>

            <button
              type="button"
              onClick={onOpenCorrection}
              className="relative inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-800 bg-amber-50 hover:bg-amber-100 border border-amber-300 rounded-lg transition-colors focus:outline-hidden"
              title="Suggest a correction or challenge a record"
            >
              <Scale className="w-3.5 h-3.5 text-amber-700" />
              <span className="hidden sm:inline">Challenge Record</span>
              {pendingCorrectionsCount > 0 && (
                <span className="ml-1 px-1.5 py-0.2 text-[10px] font-mono bg-amber-600 text-white rounded-full">
                  {pendingCorrectionsCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Trigger */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Complete Ecosystem Sub-nav Banner (Business Plan v2.0 Architecture) */}
      <div className="bg-slate-50 border-t border-slate-200 py-1.5 px-4 text-[11px] text-slate-600">
        <div className="max-w-7xl mx-auto flex items-center justify-between overflow-x-auto whitespace-nowrap gap-4">
          <div className="flex items-center gap-3">
            <span className="font-semibold text-slate-800">Ecosystem Hub:</span>
            
            <button
              type="button"
              onClick={() => handleNavClick('plan-builder')}
              className={`hover:text-indigo-700 inline-flex items-center gap-1 font-medium ${currentView === 'plan-builder' ? 'font-bold text-indigo-700' : ''}`}
            >
              <Compass className="w-3.5 h-3.5 text-indigo-600" />
              Plan Builder
            </button>

            <span className="text-slate-300">•</span>

            <button
              type="button"
              onClick={() => handleNavClick('mandate-ledger')}
              className={`hover:text-indigo-700 inline-flex items-center gap-1 font-medium ${currentView === 'mandate-ledger' ? 'font-bold text-indigo-700' : ''}`}
            >
              <Layers className="w-3.5 h-3.5 text-slate-500" />
              Mandate Ledger
            </button>

            <span className="text-slate-300">•</span>

            <button
              type="button"
              onClick={() => handleNavClick('flourishing')}
              className={`hover:text-indigo-700 inline-flex items-center gap-1 font-medium ${currentView === 'flourishing' ? 'font-bold text-indigo-700' : ''}`}
            >
              <HeartHandshake className="w-3.5 h-3.5 text-rose-500" />
              Flourishing Outcomes
            </button>

            <span className="text-slate-300">•</span>

            <button
              type="button"
              onClick={() => handleNavClick('ethics')}
              className={`hover:text-indigo-700 inline-flex items-center gap-1 font-medium ${currentView === 'ethics' ? 'font-bold text-indigo-700' : ''}`}
            >
              <ShieldAlert className="w-3.5 h-3.5 text-amber-600" />
              Ethics & Money Signals
            </button>

            <span className="text-slate-300">•</span>

            <button
              type="button"
              onClick={() => handleNavClick('civic-wire')}
              className={`hover:text-indigo-700 inline-flex items-center gap-1 font-medium ${currentView === 'civic-wire' ? 'font-bold text-indigo-700' : ''}`}
            >
              <Radio className="w-3.5 h-3.5 text-blue-500" />
              Civic Wire & Action
            </button>

            <span className="text-slate-300">•</span>

            <button
              type="button"
              onClick={() => handleNavClick('atlas-preview')}
              className={`hover:text-indigo-700 inline-flex items-center gap-1 font-medium ${currentView === 'atlas-preview' ? 'font-bold text-indigo-700' : ''}`}
            >
              <MapPin className="w-3.5 h-3.5 text-slate-500" />
              Ward Problem Atlas
            </button>

            <span className="text-slate-300">•</span>

            <button
              type="button"
              onClick={() => handleNavClick('dashboard-preview')}
              className={`hover:text-indigo-700 inline-flex items-center gap-1 font-medium ${currentView === 'dashboard-preview' ? 'font-bold text-indigo-700' : ''}`}
            >
              <BookmarkPlus className="w-3.5 h-3.5 text-slate-500" />
              My Civic Dashboard
            </button>

            <span className="text-slate-300">•</span>

            <button
              type="button"
              onClick={() => handleNavClick('research-api')}
              className={`hover:text-indigo-700 inline-flex items-center gap-1 font-medium ${currentView === 'research-api' ? 'font-bold text-indigo-700' : ''}`}
            >
              <Code className="w-3.5 h-3.5 text-slate-500" />
              Research API
            </button>
          </div>

          <div className="text-slate-400 text-[10px] hidden lg:block font-mono">
            Public Office Work Evidence & Results
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white p-4 space-y-1 shadow-lg max-h-[80vh] overflow-y-auto">
          <div className="font-mono text-[10px] uppercase font-bold text-slate-400 px-3 py-1">
            Primary Navigation
          </div>
          {primaryNavItems.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => handleNavClick(item.id)}
              className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium ${
                currentView === item.id
                  ? 'bg-slate-900 text-white'
                  : 'text-slate-700 hover:bg-slate-100'
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="pt-3 border-t border-slate-200 space-y-1 text-xs text-slate-600">
            <div className="font-mono text-[10px] uppercase font-bold text-slate-400 px-3 py-1">
              Ecosystem Modules
            </div>
            <button
              type="button"
              onClick={() => handleNavClick('plan-builder')}
              className="w-full text-left px-3 py-2 rounded hover:bg-slate-100 flex items-center gap-2"
            >
              <Compass className="w-4 h-4 text-indigo-600" />
              <span>Interactive Plan Builder</span>
            </button>
            <button
              type="button"
              onClick={() => handleNavClick('mandate-ledger')}
              className="w-full text-left px-3 py-2 rounded hover:bg-slate-100 flex items-center gap-2"
            >
              <Layers className="w-4 h-4 text-slate-500" />
              <span>Mandate Ledger</span>
            </button>
            <button
              type="button"
              onClick={() => handleNavClick('flourishing')}
              className="w-full text-left px-3 py-2 rounded hover:bg-slate-100 flex items-center gap-2"
            >
              <HeartHandshake className="w-4 h-4 text-rose-500" />
              <span>Flourishing Outcomes Layer</span>
            </button>
            <button
              type="button"
              onClick={() => handleNavClick('ethics')}
              className="w-full text-left px-3 py-2 rounded hover:bg-slate-100 flex items-center gap-2"
            >
              <ShieldAlert className="w-4 h-4 text-amber-600" />
              <span>Ethics Signals & Money Influence</span>
            </button>
            <button
              type="button"
              onClick={() => handleNavClick('civic-wire')}
              className="w-full text-left px-3 py-2 rounded hover:bg-slate-100 flex items-center gap-2"
            >
              <Radio className="w-4 h-4 text-blue-500" />
              <span>Civic Wire & Action Center</span>
            </button>
            <button
              type="button"
              onClick={() => handleNavClick('atlas-preview')}
              className="w-full text-left px-3 py-2 rounded hover:bg-slate-100 flex items-center gap-2"
            >
              <MapPin className="w-4 h-4 text-slate-500" />
              <span>Ward Problem Atlas</span>
            </button>
            <button
              type="button"
              onClick={() => handleNavClick('dashboard-preview')}
              className="w-full text-left px-3 py-2 rounded hover:bg-slate-100 flex items-center gap-2"
            >
              <BookmarkPlus className="w-4 h-4 text-slate-500" />
              <span>My Civic Dashboard</span>
            </button>
            <button
              type="button"
              onClick={() => handleNavClick('research-api')}
              className="w-full text-left px-3 py-2 rounded hover:bg-slate-100 flex items-center gap-2"
            >
              <Code className="w-4 h-4 text-slate-500" />
              <span>Research API & Schemas</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
