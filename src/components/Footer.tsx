import React from 'react';
import { Page } from '../types';
import { ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: Page) => void;
  handleImgError: (e: React.SyntheticEvent<HTMLImageElement, Event>) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, handleImgError }) => {
  const handleNavClick = (page: Page) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-black/[0.08] bg-[#f8f7f4] text-[#4a4844] pt-16 pb-12 text-xs">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-black/[0.08]">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <button 
              onClick={() => handleNavClick('home')}
              className="inline-block group text-left cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <img 
                  src="/images/raw-logo.png" 
                  alt="RAW" 
                  onError={handleImgError}
                  className="h-11 w-auto object-contain transition-transform group-hover:scale-105"
                />
                <div className="border-l border-black/15 pl-3">
                  <span className="font-serif font-bold text-base text-[#1a1a1a] block leading-none">
                    RAWWORLD
                  </span>
                  <span className="font-mono text-[9px] uppercase tracking-wider text-[#76726b] block mt-0.5">
                    Flagship Project: RAW
                  </span>
                </div>
              </div>
            </button>
            <p className="text-sm text-[#4a4844] max-w-sm leading-relaxed">
              <strong>RAW (Revolutionary Agriculture War)</strong> is the world’s first agriculture game reality show, establishing the "Agritainment" genre.
            </p>
            <div className="font-mono text-[11px] text-[#76726b] space-y-1">
              <div>Created & Directed by <strong>Shailesh Kandel Kshetri</strong></div>
              <div>Produced by <strong>E Square Private Limited</strong> (Cert. No. 1531)</div>
              <div>Broadcasting on <strong>Himalaya Television HD</strong></div>
              <div>Official Inquiries: <a href="mailto:hello@rawworld.net" className="text-[#d4a234] underline">hello@rawworld.net</a></div>
            </div>
          </div>

          {/* Navigation Column 1: The Arena */}
          <div>
            <h5 className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#1a1a1a] font-bold mb-4">
              The Franchise
            </h5>
            <ul className="space-y-2.5 font-mono text-xs">
              <li>
                <button onClick={() => handleNavClick('home')} className="hover:text-[#d4a234] transition-colors cursor-pointer">
                  Overview & Mission
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('info')} className="hover:text-[#d4a234] transition-colors cursor-pointer">
                  Show Info & Arena Rules
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('contestants')} className="hover:text-[#d4a234] transition-colors cursor-pointer">
                  Contestant Profiles & Laureates
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('team')} className="hover:text-[#d4a234] transition-colors cursor-pointer">
                  Leadership & Technical Jury
                </button>
              </li>
            </ul>
          </div>

          {/* Navigation Column 2: Climate & Science */}
          <div>
            <h5 className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#1a1a1a] font-bold mb-4">
              Climate Action
            </h5>
            <ul className="space-y-2.5 font-mono text-xs">
              <li>
                <button onClick={() => handleNavClick('vote')} className="text-[#d4a234] font-bold hover:text-[#1a1a1a] transition-colors cursor-pointer">
                  One Tree One Vote (289k)
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('carbon')} className="hover:text-[#d4a234] transition-colors cursor-pointer">
                  Carbon Sequestration Engine
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('impact')} className="hover:text-[#d4a234] transition-colors cursor-pointer">
                  77-District Sacred Soil Map
                </button>
              </li>
            </ul>
          </div>

          {/* Navigation Column 3: Public Record & Syndication */}
          <div>
            <h5 className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#1a1a1a] font-bold mb-4">
              Public Record
            </h5>
            <ul className="space-y-2.5 font-mono text-xs">
              <li>
                <button onClick={() => handleNavClick('news')} className="hover:text-[#d4a234] transition-colors cursor-pointer flex items-center gap-1">
                  <span>Press Archive (26)</span>
                  <ArrowUpRight className="w-3 h-3 text-[#d4a234]" />
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('info')} className="hover:text-[#d4a234] transition-colors cursor-pointer">
                  Syndication Rights
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('info')} className="hover:text-[#d4a234] transition-colors cursor-pointer">
                  ESG & Climate Partnerships
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px] text-[#76726b]">
          <p>© {new Date().getFullYear()} RAW · REVOLUTIONARY AGRICULTURE WAR. ALL RIGHTS RESERVED.</p>
          <div className="flex items-center gap-6">
            <span>Broadcast: Himalaya TV HD</span>
            <span>·</span>
            <span>Kathmandu, Nepal</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
