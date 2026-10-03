import React from 'react';

// ============================================================================
// TURN-OF-THE-CENTURY AMERICAN POLITICAL DECORATIONS & ORNATE BANNERS
// Inspired by 1890s-1910s American political broadsides, engraving plates,
// Harper's Weekly woodcuts, and Library of Congress governmental gazettes.
// ============================================================================

interface OrnateRibbonBannerProps {
  text: string;
  subtext?: string;
  variant?: 'navy' | 'gold' | 'crimson';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const OrnateRibbonBanner: React.FC<OrnateRibbonBannerProps> = ({
  text,
  subtext,
  variant = 'navy',
  size = 'md',
  className = ''
}) => {
  const isLg = size === 'lg';
  const isSm = size === 'sm';

  const colorStyles = {
    navy: {
      ribbonBg: 'bg-[#0A1D3B]',
      ribbonBorder: 'border-[#B38A3E]',
      tailBg: 'bg-[#061224]',
      foldBorder: 'border-t-[#061224]',
      textColor: 'text-[#FAF7F0]',
      starColor: 'text-[#B38A3E]'
    },
    gold: {
      ribbonBg: 'bg-[#B38A3E]',
      ribbonBorder: 'border-[#0A1D3B]',
      tailBg: 'bg-[#8A6726]',
      foldBorder: 'border-t-[#8A6726]',
      textColor: 'text-[#0A1D3B]',
      starColor: 'text-[#0A1D3B]'
    },
    crimson: {
      ribbonBg: 'bg-[#7A1519]',
      ribbonBorder: 'border-[#B38A3E]',
      tailBg: 'bg-[#4E0A0D]',
      foldBorder: 'border-t-[#4E0A0D]',
      textColor: 'text-[#FAF7F0]',
      starColor: 'text-[#B38A3E]'
    }
  }[variant];

  return (
    <div className={`relative inline-flex flex-col items-center justify-center my-3 select-none ${className}`}>
      {/* Swallowtail Left Tail */}
      <div className="absolute left-[-22px] top-2 z-0 hidden sm:block">
        <div 
          className={`w-7 h-10 ${colorStyles.tailBg} border-y-2 border-l-2 ${colorStyles.ribbonBorder} shadow-sm`}
          style={{ clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%, 35% 50%)' }}
        />
        <div className={`w-0 h-0 border-x-4 border-x-transparent border-t-6 ${colorStyles.foldBorder} absolute right-0 top-10`} />
      </div>

      {/* Swallowtail Right Tail */}
      <div className="absolute right-[-22px] top-2 z-0 hidden sm:block">
        <div 
          className={`w-7 h-10 ${colorStyles.tailBg} border-y-2 border-r-2 ${colorStyles.ribbonBorder} shadow-sm`}
          style={{ clipPath: 'polygon(0% 0%, 100% 0%, 65% 50%, 100% 100%, 0% 100%)' }}
        />
        <div className={`w-0 h-0 border-x-4 border-x-transparent border-t-6 ${colorStyles.foldBorder} absolute left-0 top-10`} />
      </div>

      {/* Main Center Ribbon Body */}
      <div className={`relative z-10 ${colorStyles.ribbonBg} border-2 ${colorStyles.ribbonBorder} px-6 py-2 rounded-xs shadow-md flex flex-col items-center justify-center text-center`}>
        {/* Decorative Engraved Hairlines inside ribbon */}
        <div className="absolute inset-x-2 top-[2px] h-[1px] bg-[#B38A3E]/40" />
        <div className="absolute inset-x-2 bottom-[2px] h-[1px] bg-[#B38A3E]/40" />

        <div className="flex items-center gap-2">
          <span className={`text-[10px] ${colorStyles.starColor} tracking-widest font-sans font-bold`}>★ ★</span>
          <span className={`font-serif font-black uppercase tracking-widest ${colorStyles.textColor} ${
            isLg ? 'text-lg sm:text-2xl' : isSm ? 'text-xs' : 'text-sm sm:text-base'
          }`}>
            {text}
          </span>
          <span className={`text-[10px] ${colorStyles.starColor} tracking-widest font-sans font-bold`}>★ ★</span>
        </div>

        {subtext && (
          <span className={`text-[10px] font-mono tracking-widest uppercase mt-0.5 opacity-90 ${colorStyles.textColor}`}>
            {subtext}
          </span>
        )}
      </div>
    </div>
  );
};

// Corner Filigree Scrollwork for Turn-of-the-Century Cards
export const OrnateCornerFlourish: React.FC<{ position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'; className?: string }> = ({
  position,
  className = ''
}) => {
  const transform = {
    'top-left': '',
    'top-right': 'scale-x-[-1]',
    'bottom-left': 'scale-y-[-1]',
    'bottom-right': 'scale-[-1]'
  }[position];

  return (
    <svg 
      className={`w-7 h-7 text-[#B38A3E]/60 pointer-events-none select-none ${transform} ${className}`} 
      viewBox="0 0 40 40" 
      fill="currentColor"
    >
      <path d="M2 2h14c-1.5 1-3 2.5-3.5 4.5-.5 2 0 4 1 5.5s2.5 2.5 4.5 3c2 .5 4 0 5.5-1 1-1 2.5-2 4.5-2h14v2H26c-1.5 0-3 1-4 2s-1.5 2.5-1.5 4.5c0 2 1 3.5 2.5 4.5s3.5 1.5 5 1.5h12v2H28c-2 0-4-1-5.5-2s-2.5-2.5-3-4.5c-.5-2 0-4 1-5.5s2.5-2.5 4.5-3c2-.5 4 0 5.5 1 1 1 2.5 2 4.5 2V2H2z" />
      <circle cx="5" cy="5" r="1.5" />
      <circle cx="10" cy="10" r="1" />
    </svg>
  );
};

// Turn-of-the-Century Engraved Section Divider with Star Medallion
export const TurnOfCenturyDivider: React.FC<{ label?: string; className?: string }> = ({
  label,
  className = ''
}) => {
  return (
    <div className={`flex items-center justify-center gap-3 my-8 select-none ${className}`}>
      {/* Left ornamental tapered line with diamond */}
      <div className="flex-1 flex items-center">
        <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent to-[#B38A3E]" />
        <div className="w-1.5 h-1.5 bg-[#0A1D3B] border border-[#B38A3E] rotate-45 shrink-0" />
        <div className="w-6 h-[2px] bg-[#B38A3E]" />
      </div>

      {/* Center Medallion or Label */}
      <div className="flex items-center gap-2 px-3 py-1 bg-[#FAF7F0] border border-[#B38A3E]/50 rounded-xs text-[#0A1D3B] font-mono text-[10px] uppercase font-bold tracking-widest shadow-2xs">
        <span className="text-[#B38A3E] text-xs">★</span>
        {label ? (
          <span>{label}</span>
        ) : (
          <span>E PLURIBUS UNUM</span>
        )}
        <span className="text-[#B38A3E] text-xs">★</span>
      </div>

      {/* Right ornamental tapered line with diamond */}
      <div className="flex-1 flex items-center">
        <div className="w-6 h-[2px] bg-[#B38A3E]" />
        <div className="w-1.5 h-1.5 bg-[#0A1D3B] border border-[#B38A3E] rotate-45 shrink-0" />
        <div className="flex-1 h-[1px] bg-gradient-to-l from-transparent to-[#B38A3E]" />
      </div>
    </div>
  );
};

// Authentic Turn-of-the-Century Broadside Masthead Header
export const BroadsideMasthead: React.FC<{
  title: string;
  subhead: string;
  eyebrow?: string;
  volNumber?: string;
  dateStr?: string;
  className?: string;
}> = ({
  title,
  subhead,
  eyebrow = 'THE CONSTITUTIONAL CITIZEN’S INDEPENDENT GAZETTE',
  volNumber = 'VOL. CXXXIV · NO. 4',
  dateStr = 'WASHINGTON, DISTRICT OF COLUMBIA',
  className = ''
}) => {
  return (
    <header className={`bg-[#FAF7F0] border-4 border-[#0A1D3B] p-5 sm:p-7 relative shadow-md text-center space-y-3 ${className}`}>
      {/* 4 Corner Flourishes */}
      <OrnateCornerFlourish position="top-left" className="absolute top-2 left-2" />
      <OrnateCornerFlourish position="top-right" className="absolute top-2 right-2" />
      <OrnateCornerFlourish position="bottom-left" className="absolute bottom-2 left-2" />
      <OrnateCornerFlourish position="bottom-right" className="absolute bottom-2 right-2" />

      {/* Top Ledger Rule */}
      <div className="border-b-2 border-[#0A1D3B] pb-2 flex items-center justify-between text-[10px] sm:text-[11px] font-mono font-bold text-[#0A1D3B] px-4 flex-wrap gap-2">
        <span>{volNumber}</span>
        <span className="text-[#B38A3E] tracking-widest hidden sm:inline">★ ★ ★ ★ ★</span>
        <span className="uppercase tracking-widest">{eyebrow}</span>
        <span className="text-[#B38A3E] tracking-widest hidden sm:inline">★ ★ ★ ★ ★</span>
        <span>{dateStr}</span>
      </div>

      {/* Main Arch-like Headline */}
      <div className="py-2 space-y-1">
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-black text-[#0A1D3B] tracking-tight uppercase leading-tight drop-shadow-xs">
          {title}
        </h1>
        <div className="text-xs sm:text-sm font-serif italic text-[#17202A] max-w-3xl mx-auto leading-relaxed pt-1">
          {subhead}
        </div>
      </div>

      {/* Bottom Double Hairline Rule */}
      <div className="border-t-2 border-[#0A1D3B] pt-1.5 flex items-center justify-center gap-4 text-[10px] font-mono uppercase tracking-widest text-[#596273]">
        <span>Strict Nonpartisanship</span>
        <span>•</span>
        <span>Primary Public Evidence</span>
        <span>•</span>
        <span>Separation of Powers</span>
        <span>•</span>
        <span>Equal Footing for Every Citizen</span>
      </div>
    </header>
  );
};
