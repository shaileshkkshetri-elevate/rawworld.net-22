import React, { useState } from 'react';
import { Page } from '../types';
import { Menu, X, TreePine, Calculator, Newspaper, Sparkles, Award, Users, Info, Globe2, ShieldCheck } from 'lucide-react';

interface HeaderProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
  handleImgError: (e: React.SyntheticEvent<HTMLImageElement, Event>) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate, handleImgError }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { page: Page; label: string; icon: React.ReactNode; badge?: string }[] = [
    { page: 'home', label: 'Home', icon: <Sparkles className="w-3.5 h-3.5 text-[#d4a234]" /> },
    { page: 'vote', label: 'One Tree One Vote', icon: <TreePine className="w-3.5 h-3.5 text-[#d4a234]" />, badge: '289k' },
    { page: 'carbon', label: 'Carbon Engine', icon: <Calculator className="w-3.5 h-3.5 text-[#d4a234]" /> },
    { page: 'impact', label: 'Sacred Soil', icon: <Globe2 className="w-3.5 h-3.5 text-[#d4a234]" /> },
    { page: 'contestants', label: 'Contestants', icon: <Award className="w-3.5 h-3.5 text-[#d4a234]" />, badge: '3 Winners' },
    { page: 'news', label: 'Media & News', icon: <Newspaper className="w-3.5 h-3.5 text-[#d4a234]" />, badge: '26' },
    { page: 'team', label: 'Team', icon: <Users className="w-3.5 h-3.5 text-[#d4a234]" /> },
    { page: 'info', label: 'Show Info', icon: <Info className="w-3.5 h-3.5 text-[#d4a234]" /> },
  ];

  const handleNavClick = (page: Page) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-[#f8f7f4]/95 backdrop-blur-md border-b border-black/[0.08]">
      
      {/* Top Editorial Authority Stripe */}
      <div className="bg-[#141414] text-[#a39f97] text-[10px] font-mono tracking-widest py-1.5 px-4 sm:px-6 lg:px-8 border-b border-white/10 hidden sm:block">
        <div className="max-w-[1440px] mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-[#d4a234] font-bold tracking-wider">RAWWORLD</span>
            <span className="text-white/20">|</span>
            <span>FLAGSHIP PROJECT: <strong className="text-white font-medium">RAW — REVOLUTIONARY AGRICULTURE WAR</strong></span>
            <span className="text-white/20">|</span>
            <span className="hidden md:inline">GENRE: AGRITAINMENT</span>
          </div>

          <div className="flex items-center gap-4 text-[10px]">
            <span className="hidden lg:inline text-white/50">PRODUCED BY E SQUARE PVT. LTD.</span>
            <span className="hidden lg:inline text-white/20">·</span>
            <span>GOVT. COPYRIGHT CERT. NO. 1531</span>
            <span className="text-white/20">·</span>
            <span className="text-[#d4a234] font-bold">HIMALAYA TV HD</span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Lockup: RAWWORLD & Project RAW */}
        <button 
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-3.5 group text-left cursor-pointer"
        >
          <div className="relative">
            <img 
              src="/images/raw-logo.png" 
              alt="RAW – Revolutionary Agriculture War" 
              onError={handleImgError}
              className="h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </div>

          <div className="border-l border-black/15 pl-3.5">
            <div className="flex items-center gap-2">
              <span className="font-serif font-bold text-base sm:text-lg tracking-tight text-[#1a1a1a] block leading-none">
                RAWWORLD
              </span>
              <span className="text-[9px] font-mono uppercase tracking-wider bg-[#d4a234]/15 text-[#d4a234] font-bold px-1.5 py-0.5 rounded-xs">
                HQ
              </span>
            </div>
            <span className="font-mono text-[9px] uppercase tracking-widest text-[#76726b] block mt-0.5 font-medium">
              Project: <span className="text-[#1a1a1a] font-semibold">RAW</span> · Revolutionary Agriculture War
            </span>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden xl:flex items-center gap-6 font-mono text-[11px] uppercase tracking-[0.14em]">
          {navItems.map((item) => {
            const isActive = currentPage === item.page;
            return (
              <button
                key={item.page}
                onClick={() => handleNavClick(item.page)}
                className={`py-1.5 transition-all flex items-center gap-1.5 cursor-pointer relative ${
                  isActive 
                    ? 'text-[#d4a234] font-bold' 
                    : 'text-[#1a1a1a] hover:text-[#d4a234]'
                }`}
              >
                <span>{item.label}</span>
                {item.badge && (
                  <span className={`text-[9px] px-1.5 py-0.2 rounded-xs font-mono font-bold ${
                    isActive ? 'bg-[#d4a234] text-white' : 'bg-black/5 text-[#76726b]'
                  }`}>
                    {item.badge}
                  </span>
                )}
                {isActive && (
                  <span className="absolute -bottom-2 left-0 right-0 h-0.5 bg-[#d4a234] rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Right CTA */}
        <div className="hidden sm:flex items-center gap-4">
          <button 
            onClick={() => handleNavClick('info')}
            className="text-[11px] font-mono uppercase tracking-[0.16em] font-bold text-white bg-[#1a1a1a] hover:bg-[#d4a234] transition-colors px-4 py-2 rounded-xs cursor-pointer shadow-xs"
          >
            Syndicate / Inquire
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="xl:hidden p-2 text-[#1a1a1a] hover:text-[#d4a234] focus:outline-none cursor-pointer"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden border-b border-black/[0.08] bg-[#f8f7f4] px-6 py-6 space-y-2 font-mono text-xs uppercase tracking-wider shadow-lg max-h-[85vh] overflow-y-auto">
          <div className="pb-3 mb-2 border-b border-black/10">
            <span className="text-[10px] text-[#76726b] block">THE RAWWORLD ECOSYSTEM</span>
            <span className="text-xs font-serif font-bold text-[#1a1a1a]">Project: RAW (Revolutionary Agriculture War)</span>
          </div>

          {navItems.map((item) => {
            const isActive = currentPage === item.page;
            return (
              <button
                key={item.page}
                onClick={() => handleNavClick(item.page)}
                className={`w-full text-left py-2.5 px-3 rounded-xs flex items-center justify-between transition-colors cursor-pointer ${
                  isActive 
                    ? 'bg-[#d4a234]/15 text-[#d4a234] font-bold' 
                    : 'text-[#1a1a1a] hover:bg-black/5'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  {item.icon}
                  <span>{item.label}</span>
                </div>
                {item.badge && (
                  <span className="text-[10px] bg-black/10 text-[#1a1a1a] px-2 py-0.5 rounded-xs font-bold">
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
          <div className="pt-4 border-t border-black/10">
            <button 
              onClick={() => handleNavClick('info')}
              className="w-full text-center block py-3 btn-gold font-bold cursor-pointer"
            >
              Syndicate & Inquire
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
