import React, { useState, useRef, useEffect } from 'react';
import { 
  Search, 
  Menu, 
  X, 
  Scale, 
  ChevronDown,
  Layers, 
  MapPin, 
  FileText, 
  Compass,
  Radio,
  HeartHandshake,
  ShieldAlert,
  Code,
  BookOpen,
  BookmarkPlus,
  Building2,
  Landmark
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
  const [exploreDropdownOpen, setExploreDropdownOpen] = useState(false);
  const exploreRef = useRef<HTMLDivElement>(null);

  // Close explore dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (exploreRef.current && !exploreRef.current.contains(e.target as Node)) {
        setExploreDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Primary Navigation Structure (Democratic Navigation Layer Added)
  const primaryNavItems = [
    { id: 'power-learn', label: 'Civic Context' },
    { id: 'problems', label: 'Problems' },
    { id: 'institutions', label: 'Power Map' },
    { id: 'commitments', label: 'Plans' },
    { id: 'mandate-ledger', label: 'Mandate Ledger' },
    { id: 'evidence', label: 'Evidence' },
    { id: 'civic-wire', label: 'Civic Wire' },
    { id: 'research-api', label: 'Research' },
  ];

  // Secondary Modules organized cleanly under "Explore" (Section 7)
  const secondaryModules = [
    { id: 'power-learn', label: 'POWER Learn Hub', desc: 'How Democracy Works, My Civic Context & Action guide', icon: Landmark },
    { id: 'plan-builder', label: 'Plan Builder', desc: 'Guided document standard for candidates & officials', icon: Compass },
    { id: 'compare', label: 'Compare Records', desc: 'Nonpartisan side-by-side policy tradeoff stress-test', icon: Scale },
    { id: 'flourishing', label: 'Flourishing Outcomes', desc: '8-domain disaggregated wellbeing indicators', icon: HeartHandshake },
    { id: 'ethics', label: 'Ethics & Money Signals', desc: 'Due-process campaign finance & procurement triage', icon: ShieldAlert },
    { id: 'people', label: 'Public Actors Directory', desc: 'Elected officials & institutional leadership records', icon: Building2 },
    { id: 'atlas-preview', label: 'Ward Problem Atlas', desc: 'Disaggregated neighborhood geographic indicators', icon: MapPin },
    { id: 'dashboard-preview', label: 'My Civic Dashboard', desc: 'Tracked public plans, audits, and saved issues', icon: BookmarkPlus },
  ];

  const handleNavClick = (viewId: string) => {
    onNavigate(viewId);
    setMobileMenuOpen(false);
    setExploreDropdownOpen(false);
  };

  const isExploreActive = secondaryModules.some(m => m.id === currentView);

  return (
    <header className="sticky top-0 z-40 bg-[#FAF7F0] border-b border-[#0A1D3B]/15 shadow-xs">
      {/* Classical American civic double hairline top accent */}
      <div className="h-[2px] bg-[#0A1D3B]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-17">
          {/* Logo & Brand Treatment (American Civic Institutional Mark) */}
          <div className="flex items-center gap-6">
            <button
              type="button"
              onClick={() => handleNavClick('home')}
              className="flex items-center gap-3 text-left group focus:outline-hidden shrink-0"
              aria-label="The POWER Standard Home"
            >
              {/* Sovereign American Civic Shield / Seal */}
              <div className="relative w-9 h-10 rounded-t-sm rounded-b-lg bg-[#0A1D3B] text-white flex flex-col items-center justify-center font-serif font-black shadow-xs group-hover:bg-[#1B4D89] transition-all border border-[#B38A3E]/40">
                <span className="text-[7px] text-[#B38A3E] font-sans font-bold tracking-tighter leading-none mt-0.5">★ ★ ★</span>
                <span className="text-base tracking-wider text-[#FAF7F0] leading-none mt-0.5">P</span>
              </div>
              <div>
                <div className="flex items-baseline gap-1.5">
                  <span className="font-serif font-black tracking-wider text-xl text-[#0A1D3B] leading-none group-hover:text-[#1B4D89] transition-colors">
                    POWER
                  </span>
                  <span className="text-[10px] font-mono uppercase text-[#B38A3E] font-bold tracking-widest">
                    Standard
                  </span>
                </div>
                <div className="text-[10px] text-[#596273] font-sans tracking-tight hidden sm:block mt-0.5">
                  Public Office Work Evidence & Results · <span className="text-[#0A1D3B] font-medium">American Civic Archive</span>
                </div>
              </div>
            </button>

            {/* Desktop Navigation Links (Section 7) */}
            <nav className="hidden lg:flex items-center space-x-1 text-xs font-sans font-medium text-[#17202A]">
              {primaryNavItems.map((item) => {
                const isActive = currentView === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => handleNavClick(item.id)}
                    className={`px-3 py-1.5 rounded transition-colors relative ${
                      isActive
                        ? 'text-[#0A1D3B] font-bold after:absolute after:bottom-0 after:left-3 after:right-3 after:h-0.5 after:bg-[#0A1D3B]'
                        : 'text-[#596273] hover:text-[#0A1D3B] hover:bg-stone-50'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}

              {/* Explore / More Dropdown (Section 7) */}
              <div className="relative" ref={exploreRef}>
                <button
                  type="button"
                  onClick={() => setExploreDropdownOpen(prev => !prev)}
                  className={`inline-flex items-center gap-1 px-3 py-1.5 rounded transition-colors ${
                    isExploreActive
                      ? 'text-[#0A1D3B] font-bold bg-stone-100/80'
                      : 'text-[#596273] hover:text-[#0A1D3B] hover:bg-stone-50'
                  }`}
                  aria-expanded={exploreDropdownOpen}
                  aria-haspopup="true"
                >
                  <span>Explore</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform ${exploreDropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                {exploreDropdownOpen && (
                  <div className="absolute top-full left-0 mt-1 w-80 bg-white border border-[#0A1D3B]/12 rounded-xl shadow-xl py-2 z-50 animate-in fade-in duration-100">
                    <div className="px-3.5 py-1.5 text-[10px] font-mono font-bold uppercase tracking-wider text-[#596273] border-b border-stone-100">
                      Civic Architecture Modules
                    </div>
                    {secondaryModules.map((m) => {
                      const Icon = m.icon;
                      const isItemActive = currentView === m.id;
                      return (
                        <button
                          key={m.id}
                          type="button"
                          onClick={() => handleNavClick(m.id)}
                          className={`w-full px-3.5 py-2 text-left flex items-start gap-2.5 transition-colors ${
                            isItemActive ? 'bg-stone-100/90 text-[#0A1D3B]' : 'hover:bg-stone-50 text-slate-800'
                          }`}
                        >
                          <Icon className="w-4 h-4 text-[#2457A7] shrink-0 mt-0.5" />
                          <div>
                            <div className="font-semibold text-xs text-[#0A1D3B]">{m.label}</div>
                            <div className="text-[11px] text-[#596273] leading-snug">{m.desc}</div>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            </nav>
          </div>

          {/* Right Header Utilities: Search, Methodology, Challenge Record */}
          <div className="flex items-center gap-2.5">
            {/* Universal Search (⌘K) */}
            <button
              type="button"
              onClick={onOpenSearch}
              className="flex items-center gap-2 px-3 py-1.5 text-xs text-[#596273] bg-stone-100/80 hover:bg-stone-200/70 hover:text-[#0A1D3B] rounded border border-stone-200/90 transition-colors focus:outline-hidden focus:ring-1 focus:ring-[#0A1D3B]"
              title="Search public record (⌘K)"
            >
              <Search className="w-3.5 h-3.5 text-[#596273]" />
              <span className="hidden sm:inline font-sans text-xs">Search Archive</span>
              <kbd className="hidden md:inline text-[10px] font-mono bg-white text-[#596273] px-1.5 py-0.5 rounded border border-stone-300">
                ⌘K
              </kbd>
            </button>

            {/* Methodology Link */}
            <button
              type="button"
              onClick={() => handleNavClick('methodology')}
              className={`hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-sans font-medium rounded transition-colors ${
                currentView === 'methodology' 
                  ? 'text-[#0A1D3B] font-bold bg-stone-100' 
                  : 'text-[#596273] hover:text-[#0A1D3B]'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5 text-[#596273]" />
              <span>Methodology</span>
            </button>

            {/* Challenge Record / Public Dispute Button */}
            <button
              type="button"
              onClick={onOpenCorrection}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-sans font-semibold text-[#0A1D3B] bg-white hover:bg-stone-50 border border-[#0A1D3B]/20 rounded transition-colors shadow-2xs focus:outline-hidden focus:ring-1 focus:ring-[#0A1D3B]"
              title="Submit counterevidence or challenge a public claim"
            >
              <Scale className="w-3.5 h-3.5 text-[#B38A3E]" />
              <span className="hidden md:inline">Challenge Record</span>
              {pendingCorrectionsCount > 0 && (
                <span className="px-1.5 py-0.2 text-[10px] font-mono font-bold bg-[#B38A3E] text-white rounded">
                  {pendingCorrectionsCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Trigger */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#596273] hover:text-[#0A1D3B] hover:bg-stone-100 rounded"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5 text-[#0A1D3B]" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#0A1D3B]/10 bg-white p-4 space-y-4 animate-in slide-in-from-top-2 duration-150 shadow-lg">
          <div className="space-y-1">
            <div className="text-[10px] font-mono uppercase text-[#596273] font-bold px-2 mb-1">
              Public Record
            </div>
            {primaryNavItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => handleNavClick(item.id)}
                className={`w-full text-left px-3 py-2 rounded text-xs font-medium ${
                  currentView === item.id
                    ? 'bg-[#0A1D3B] text-white font-bold'
                    : 'text-[#17202A] hover:bg-stone-100'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="border-t border-stone-200 pt-3 space-y-1">
            <div className="text-[10px] font-mono uppercase text-[#596273] font-bold px-2 mb-1">
              Architecture & Tools
            </div>
            {secondaryModules.map((m) => (
              <button
                key={m.id}
                type="button"
                onClick={() => handleNavClick(m.id)}
                className={`w-full text-left px-3 py-2 rounded text-xs font-medium ${
                  currentView === m.id
                    ? 'bg-[#0A1D3B] text-white font-bold'
                    : 'text-[#596273] hover:bg-stone-100'
                }`}
              >
                {m.label}
              </button>
            ))}
          </div>

          <div className="border-t border-stone-200 pt-3 flex items-center justify-between">
            <button
              type="button"
              onClick={() => handleNavClick('methodology')}
              className="text-xs text-[#596273] hover:text-[#0A1D3B] font-medium"
            >
              Methodology & Ethics Charter
            </button>
            <button
              type="button"
              onClick={() => {
                onOpenCorrection();
                setMobileMenuOpen(false);
              }}
              className="text-xs text-[#0A1D3B] font-bold underline"
            >
              Challenge Record
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
