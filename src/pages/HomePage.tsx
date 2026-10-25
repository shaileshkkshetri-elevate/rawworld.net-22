import React from 'react';
import { Page, GalleryItem } from '../types';
import { CURATED_GALLERY } from '../data/gallery';
import { 
  TreePine, 
  Calculator, 
  Newspaper, 
  Award, 
  Users, 
  Globe2, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  Compass, 
  ShieldCheck, 
  Pencil, 
  Check, 
  ChevronRight,
  Info,
  Tv,
  Film,
  Building2,
  FileCheck2,
  Play
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: Page) => void;
  handleImgError: (e: React.SyntheticEvent<HTMLImageElement, Event>) => void;
  openLightbox: (index: number, list: GalleryItem[]) => void;
  heroKickerPart1: string;
  setHeroKickerPart1: (val: string) => void;
  isEditingKickerPart1: boolean;
  setIsEditingKickerPart1: (val: boolean) => void;
  tempKickerPart1: string;
  setTempKickerPart1: (val: string) => void;
  previewEditActive: boolean;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  handleImgError,
  openLightbox,
  heroKickerPart1,
  setHeroKickerPart1,
  isEditingKickerPart1,
  setIsEditingKickerPart1,
  tempKickerPart1,
  setTempKickerPart1,
  previewEditActive
}) => {
  return (
    <div className="space-y-0">
      
      {/* CAPTIVATING EDITORIAL HERO (UPPER SIDE) */}
      <section id="top" className="pt-6 sm:pt-10 pb-20 border-b border-black/[0.08] max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Brand Hierarchy Top Rail */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-black/[0.08]">
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#d4a234] animate-pulse"></span>
            
            <span className="font-mono text-[10px] tracking-wider uppercase font-bold text-[#1a1a1a] bg-black/5 px-2 py-0.5 rounded-xs">
              RAWWORLD PRESENTS
            </span>

            <span className="text-black/20 font-mono">/</span>

            {/* INLINE EDITABLE KICKER */}
            {isEditingKickerPart1 ? (
              <span className="inline-flex items-center gap-2">
                <input
                  type="text"
                  value={tempKickerPart1}
                  onChange={(e) => setTempKickerPart1(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      setHeroKickerPart1(tempKickerPart1);
                      try { localStorage.setItem('raw_hero_kicker_part1', tempKickerPart1); } catch {}
                      setIsEditingKickerPart1(false);
                    } else if (e.key === 'Escape') {
                      setTempKickerPart1(heroKickerPart1);
                      setIsEditingKickerPart1(false);
                    }
                  }}
                  autoFocus
                  className="bg-white border-2 border-[#d4a234] px-2 py-0.5 rounded-xs text-[11px] font-mono uppercase tracking-[0.2em] text-[#1a1a1a] shadow-md focus:outline-none"
                />
                <button
                  onClick={() => {
                    setHeroKickerPart1(tempKickerPart1);
                    try { localStorage.setItem('raw_hero_kicker_part1', tempKickerPart1); } catch {}
                    setIsEditingKickerPart1(false);
                  }}
                  className="p-1 rounded-xs bg-[#d4a234] text-white hover:bg-[#1a1a1a] transition-colors cursor-pointer"
                  title="Save text"
                >
                  <Check className="w-3 h-3" />
                </button>
              </span>
            ) : (
              <span
                onClick={() => {
                  if (previewEditActive) {
                    setTempKickerPart1(heroKickerPart1);
                    setIsEditingKickerPart1(true);
                  }
                }}
                title={previewEditActive ? "Click to edit text directly" : undefined}
                className={`editorial-label text-[#1a1a1a] font-semibold tracking-[0.2em] transition-all ${
                  previewEditActive
                    ? 'cursor-pointer hover:text-[#d4a234] hover:underline decoration-[#d4a234] decoration-dashed underline-offset-4'
                    : ''
                }`}
              >
                {heroKickerPart1}
                {previewEditActive && (
                  <Pencil className="inline-block w-2.5 h-2.5 ml-1.5 opacity-40 text-[#d4a234]" />
                )}
              </span>
            )}

            <span className="text-black/20 font-mono">/</span>
            <span className="editorial-label text-[#76726b]">Season One Chronicle</span>
          </div>

          <div className="flex items-center gap-4 font-mono text-[11px] text-[#76726b]">
            <span className="hidden md:inline">Country of Origin: Nepal</span>
            <span className="hidden md:inline">·</span>
            <span className="hidden sm:inline">Govt. Copyright Cert. No. 1531</span>
            <span className="hidden sm:inline">·</span>
            <span className="text-[#d4a234] font-bold">Himalaya TV HD</span>
          </div>
        </div>

        {/* Hero Masthead & Sub-Manifesto */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 bg-[#d4a234] text-white font-mono text-[10px] font-bold uppercase tracking-widest rounded-xs shadow-xs">
              World's First Agriculture Game Reality Show
            </span>
            <span className="font-mono text-[10px] uppercase tracking-wider text-[#76726b] hidden sm:inline">
              Establishing The "Agritainment" Genre
            </span>
          </div>

          <h1 className="text-[13vw] sm:text-[10vw] lg:text-[7.8rem] font-serif font-semibold tracking-[-0.04em] leading-[0.85] text-[#1a1a1a]">
            RAW: REVOLUTIONARY <br />
            <span className="text-[#d4a234] italic font-normal">AGRICULTURE</span> WAR.
          </h1>

          <p className="font-serif italic text-lg sm:text-2xl text-[#4a4844] max-w-4xl pt-2 leading-snug">
            "Restoring dignity to farmers and power to the soil can mend a broken food system and a warming world."
          </p>
        </div>

        {/* Captivating Layered Hero Visual Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mt-12 items-start">
          
          {/* Main Visual Composition (Left 7 Cols) */}
          <div className="lg:col-span-7 relative">
            
            {/* Primary Hero Aerial Canvas */}
            <div className="aspect-[16/10] bg-[#e0deda] overflow-hidden rounded-xs border border-black/[0.08] shadow-lg relative group">
              <img 
                src="/images/set-aerial.jpg" 
                alt="RAW – Circular Straw Amphitheater in Gandaki Foothills" 
                onError={handleImgError}
                className="w-full h-full object-cover lookbook-photo transition-transform duration-700 group-hover:scale-103"
              />
              
              {/* Gradient Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />

              {/* Set Location Badge */}
              <div className="absolute top-4 left-4 bg-[#1a1a1a]/85 backdrop-blur-sm text-white px-3 py-1 text-[10px] font-mono uppercase tracking-widest border border-white/10 rounded-xs">
                Official Arena Set · Circular Straw Amphitheater · Gandaki Foothills
              </div>

              {/* Bottom Inscription */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white/90 text-xs font-mono">
                <span className="tracking-wider">RAW Season 1 Arena · 24 Opening Contestants</span>
                <span className="text-[#d4a234] font-bold">21 Primetime Episodes</span>
              </div>
            </div>

            {/* Overlaid Picture-in-Picture Floating Vignette (Maha-Host Rajesh Hamal) */}
            <div className="mt-4 sm:mt-0 sm:absolute sm:-bottom-8 sm:-right-6 sm:w-72 bg-white/95 backdrop-blur-md border border-[#d4a234]/40 p-3.5 rounded-xs shadow-2xl space-y-2.5">
              <div className="aspect-[16/10] bg-[#e0deda] overflow-hidden rounded-xs border border-black/10 relative">
                <img 
                  src="/images/rajesh-hamal-arena.jpg" 
                  alt="Maha-Host Rajesh Hamal Briefing Contestants on Set" 
                  onError={handleImgError}
                  className="w-full h-full object-cover object-top lookbook-photo"
                />
                <div className="absolute top-2 left-2 bg-[#1a1a1a] text-[#d4a234] text-[9px] font-mono uppercase tracking-wider font-bold px-2 py-0.5 rounded-xs">
                  Maha-Host
                </div>
              </div>

              <div>
                <span className="editorial-label text-[#d4a234] text-[9px] mb-0.5">Cultural Anchor</span>
                <h4 className="font-serif font-bold text-sm text-[#1a1a1a]">Rajesh Hamal on Set</h4>
                <p className="text-[11px] text-[#4a4844] leading-snug mt-1">
                  Nepal’s superstar anchored all 21 episodes, elevating cultivators into national primetime icons.
                </p>
              </div>
            </div>

            {/* Production Milestone Seal */}
            <div className="hidden md:flex absolute -top-5 -right-5 bg-[#1a1a1a] text-white p-3.5 rounded-xs border border-[#d4a234] shadow-xl flex-col items-center justify-center text-center font-mono">
              <span className="text-[#d4a234] font-bold text-lg leading-none">730</span>
              <span className="text-[9px] uppercase tracking-widest text-[#a39f97]">Days Filmed</span>
              <span className="text-[8px] text-[#d4a234] mt-0.5">2 Full Years</span>
            </div>

          </div>

          {/* Right Column: Two Crises, One Arena Manifesto (5 Cols) */}
          <div className="lg:col-span-5 space-y-6 lg:pl-4">
            
            <div className="border-t-2 border-[#d4a234] pt-5">
              <span className="editorial-label mb-1 text-[#d4a234]">Two Crises, One Arena</span>
              <h2 className="text-2xl sm:text-3xl font-serif font-semibold text-[#1a1a1a] leading-tight">
                Where food creators become the frontline heroes of human survival.
              </h2>
            </div>
            
            <p 
              style={{ fontFamily: 'system-ui' }} 
              className="text-[#4a4844] leading-relaxed text-sm"
            >
              Humanity stands at a crossroads defined by a surging population, vanishing farmland, and rising temperatures. What was missing was a strategic tool that rewires collective consciousness from root-level mindsets to national policy.
            </p>

            <div className="p-4 bg-white border border-black/[0.08] rounded-xs space-y-2">
              <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#1a1a1a]">
                <ShieldCheck className="w-4 h-4 text-[#d4a234]" />
                <span>Format Engineered For Global Travel</span>
              </div>
              <p className="text-xs text-[#76726b] leading-relaxed">
                RAW features two distinct contestant categories—professional farmers and university agriculture graduates—competing separately then collaborating as duos on real working farms.
              </p>
            </div>

            {/* Quick Action Button Cluster */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button 
                onClick={() => onNavigate('info')}
                className="btn-gold cursor-pointer text-xs shadow-md"
              >
                Inspect Arena & Rules →
              </button>
              <button 
                onClick={() => onNavigate('vote')}
                className="ghost-btn cursor-pointer text-xs"
              >
                The 289k Tree Story
              </button>
              <button 
                onClick={() => onNavigate('contestants')}
                className="text-xs font-mono uppercase tracking-wider text-[#1a1a1a] hover:text-[#d4a234] underline decoration-black/20 hover:decoration-[#d4a234] py-1 cursor-pointer font-bold"
              >
                Meet 3 Winners
              </button>
            </div>

          </div>

        </div>

        {/* Executive Production Credential Rail (Directly from Document Title Page) */}
        <div className="mt-16 pt-8 border-t border-black/[0.08]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 font-mono text-xs">
            
            <div className="p-4 bg-white border border-black/[0.06] rounded-xs space-y-1">
              <span className="editorial-label text-[#d4a234]">Creator & Director</span>
              <p className="font-serif font-bold text-base text-[#1a1a1a]">Shailesh Kandel Kshetri</p>
              <p className="text-[10px] text-[#76726b]">Creator of The Poet Idol · 7 Years Format R&D</p>
            </div>

            <div className="p-4 bg-white border border-black/[0.06] rounded-xs space-y-1">
              <span className="editorial-label text-[#d4a234]">Production House</span>
              <p className="font-serif font-bold text-base text-[#1a1a1a]">E Square Private Limited</p>
              <p className="text-[10px] text-[#76726b]">Copyright Cert. No. 1531 · Origin: Nepal</p>
            </div>

            <div className="p-4 bg-white border border-black/[0.06] rounded-xs space-y-1">
              <span className="editorial-label text-[#d4a234]">Maha-Host</span>
              <p className="font-serif font-bold text-base text-[#1a1a1a]">Rajesh Hamal</p>
              <p className="text-[10px] text-[#76726b]">Nepal's Cultural Icon · Anchored All 21 Episodes</p>
            </div>

            <div className="p-4 bg-white border border-black/[0.06] rounded-xs space-y-1">
              <span className="editorial-label text-[#d4a234]">Chief Technical Judge</span>
              <p className="font-serif font-bold text-base text-[#1a1a1a]">Dr. Yogendra Kumar Karki</p>
              <p className="text-[10px] text-[#76726b]">Former Secretary, Ministry of Agriculture (MoALD)</p>
            </div>

          </div>
        </div>

      </section>

      {/* VERIFIED KEY STATISTICS APPENDIX (From Page 23 of the PDF) */}
      <section className="py-16 border-b border-black/[0.08] bg-[#f2ede4]/45">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <span className="editorial-label mb-2 text-[#d4a234]">Official Document Appendix · Key Statistics</span>
              <h3 className="text-3xl sm:text-4xl font-serif font-bold text-[#1a1a1a]">
                Season One, at a glance
              </h3>
            </div>
            <p className="font-mono text-xs text-[#76726b] max-w-sm">
              Official audit records verified by E Square Private Limited, FECOFUN, and broadcast telecast logs.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            
            <div className="editorial-card p-5 text-center">
              <span className="font-serif text-4xl sm:text-5xl font-bold text-[#d4a234] block">1,642</span>
              <span className="font-mono text-[10px] uppercase tracking-wider text-[#76726b] block mt-1">
                Applicants (1,398 farmers · 244 graduates)
              </span>
            </div>

            <div className="editorial-card p-5 text-center">
              <span className="font-serif text-4xl sm:text-5xl font-bold text-[#1a1a1a] block">77+</span>
              <span className="font-mono text-[10px] uppercase tracking-wider text-[#76726b] block mt-1">
                Districts Represented
              </span>
            </div>

            <div className="editorial-card p-5 text-center">
              <span className="font-serif text-4xl sm:text-5xl font-bold text-[#1a1a1a] block">730</span>
              <span className="font-mono text-[10px] uppercase tracking-wider text-[#76726b] block mt-1">
                Days Continuous Production
              </span>
            </div>

            <div className="editorial-card p-5 text-center">
              <span className="font-serif text-4xl sm:text-5xl font-bold text-[#d4a234] block">21</span>
              <span className="font-mono text-[10px] uppercase tracking-wider text-[#76726b] block mt-1">
                Episodes across Season One
              </span>
            </div>

            <div className="editorial-card p-5 text-center">
              <span className="font-serif text-4xl sm:text-5xl font-bold text-[#d4a234] block">289,973</span>
              <span className="font-mono text-[10px] uppercase tracking-wider text-[#76726b] block mt-1">
                Verified Plantation Votes
              </span>
            </div>

            <div className="editorial-card p-5 text-center">
              <span className="font-serif text-4xl sm:text-5xl font-bold text-[#1a1a1a] block">103+</span>
              <span className="font-mono text-[10px] uppercase tracking-wider text-[#76726b] block mt-1">
                Schools (15k+ Students)
              </span>
            </div>

          </div>

        </div>
      </section>

      {/* MISSION, VISION & PHILOSOPHY MANIFESTO */}
      <section className="py-24 border-b border-black/[0.08] max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mb-16">
          <span className="editorial-label mb-3">Manifesto & Philosophy</span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-semibold text-[#1a1a1a] leading-[1.05] tracking-tight">
            Agriculture is not poverty.<br />
            It is civilization’s most sophisticated technology.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="editorial-card p-8 space-y-4">
            <div className="w-10 h-10 rounded-full bg-[#d4a234]/15 flex items-center justify-center text-[#d4a234] font-serif font-bold text-lg">
              01
            </div>
            <h3 className="text-2xl font-serif font-bold text-[#1a1a1a]">The Mission</h3>
            <p className="text-sm text-[#4a4844] leading-relaxed">
              To reverse the cultural flight of rural youth away from the soil by elevating cultivators into celebrated national icons, proving that sustainable, regenerative agriculture offers dignity, high enterprise returns, and food independence.
            </p>
          </div>

          <div className="editorial-card p-8 space-y-4">
            <div className="w-10 h-10 rounded-full bg-[#d4a234]/15 flex items-center justify-center text-[#d4a234] font-serif font-bold text-lg">
              02
            </div>
            <h3 className="text-2xl font-serif font-bold text-[#1a1a1a]">The Vision</h3>
            <p className="text-sm text-[#4a4844] leading-relaxed">
              A sovereign agrarian Nepal where scientific innovation and indigenous mountain wisdom synthesize into climate-resilient orchards, zero-chemical biological protection, and high-value mountain produce exported to global markets.
            </p>
          </div>

          <div className="editorial-card p-8 space-y-4">
            <div className="w-10 h-10 rounded-full bg-[#d4a234]/15 flex items-center justify-center text-[#d4a234] font-serif font-bold text-lg">
              03
            </div>
            <h3 className="text-2xl font-serif font-bold text-[#1a1a1a]">The Duo Dynamic</h3>
            <p className="text-sm text-[#4a4844] leading-relaxed">
              Neither academic textbooks nor unassisted manual toil can solve modern climate turbulence alone. By pairing one seasoned farmer with one university graduate scientist, RAW creates an unstoppable team dynamic.
            </p>
          </div>

        </div>

      </section>

      {/* DEDICATED SECTIONS EXPLORER / PORTAL GRID */}
      <section className="py-24 border-b border-black/[0.08] max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-black/[0.08]">
          <div className="max-w-2xl">
            <span className="editorial-label mb-3">Explore Dedicated Pages</span>
            <h2 className="text-4xl sm:text-6xl font-serif font-semibold text-[#1a1a1a] leading-tight">
              The complete RAW world.
            </h2>
          </div>
          <p className="text-base text-[#4a4844] max-w-md font-normal leading-relaxed">
            Every dimension of the franchise—from scientific agroforestry algorithms to 26 news articles and contestant dossiers—has its own dedicated space.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          
          {/* Portal 1: One Tree One Vote */}
          <div 
            onClick={() => onNavigate('vote')}
            className="editorial-card p-8 flex flex-col justify-between group hover:border-[#d4a234] transition-all cursor-pointer relative overflow-hidden"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-[#d4a234]/10 rounded-xs text-[#d4a234]">
                  <TreePine className="w-6 h-6" />
                </div>
                <span className="font-mono text-[10px] uppercase tracking-wider text-[#76726b] font-bold">Dedicated Page</span>
              </div>
              <h3 className="text-2xl font-serif font-bold text-[#1a1a1a] group-hover:text-[#d4a234] transition-colors">
                One Tree One Vote
              </h3>
              <p className="text-sm text-[#4a4844] mt-3 leading-relaxed">
                The historic civic mobilization where viewer votes directly planted 289,973 verified perennial fruit and nut trees across Nepal’s community forests.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-black/[0.06] flex items-center justify-between text-xs font-mono font-bold uppercase tracking-wider text-[#d4a234]">
              <span>Inspect Campaign →</span>
              <span className="text-[10px] text-[#76726b]">289,973 Trees</span>
            </div>
          </div>

          {/* Portal 2: Carbon Sequestration Engine */}
          <div 
            onClick={() => onNavigate('carbon')}
            className="editorial-card p-8 flex flex-col justify-between group hover:border-[#d4a234] transition-all cursor-pointer relative overflow-hidden"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-[#d4a234]/10 rounded-xs text-[#d4a234]">
                  <Calculator className="w-6 h-6" />
                </div>
                <span className="font-mono text-[10px] uppercase tracking-wider text-[#76726b] font-bold">Interactive Tool</span>
              </div>
              <h3 className="text-2xl font-serif font-bold text-[#1a1a1a] group-hover:text-[#d4a234] transition-colors">
                Carbon & Climate Engine
              </h3>
              <p className="text-sm text-[#4a4844] mt-3 leading-relaxed">
                Peer-reviewed agroforestry modeling (IPCC AFOLU, ICRAF). Multi-year sequestration curves, Any-Number simulator, soil carbon conversions, and topsoil erosion savings.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-black/[0.06] flex items-center justify-between text-xs font-mono font-bold uppercase tracking-wider text-[#d4a234]">
              <span>Launch Simulator →</span>
              <span className="text-[10px] text-[#76726b]">IPCC / ICRAF Model</span>
            </div>
          </div>

          {/* Portal 3: Media & News Archive */}
          <div 
            onClick={() => onNavigate('news')}
            className="editorial-card p-8 flex flex-col justify-between group hover:border-[#d4a234] transition-all cursor-pointer relative overflow-hidden"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-[#d4a234]/10 rounded-xs text-[#d4a234]">
                  <Newspaper className="w-6 h-6" />
                </div>
                <span className="font-mono text-[10px] uppercase tracking-wider text-[#76726b] font-bold">Public Record</span>
              </div>
              <h3 className="text-2xl font-serif font-bold text-[#1a1a1a] group-hover:text-[#d4a234] transition-colors">
                Media & News Dispatches
              </h3>
              <p className="text-sm text-[#4a4844] mt-3 leading-relaxed">
                26 verified national broadsheet and digital articles spanning 2023 to 2026. Includes date sorting, era filters, language switch, and live keyword search.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-black/[0.06] flex items-center justify-between text-xs font-mono font-bold uppercase tracking-wider text-[#d4a234]">
              <span>Browse 26 Articles →</span>
              <span className="text-[10px] text-[#76726b]">2023 – 2026</span>
            </div>
          </div>

          {/* Portal 4: Contestant Profiles & Laureates */}
          <div 
            onClick={() => onNavigate('contestants')}
            className="editorial-card p-8 flex flex-col justify-between group hover:border-[#d4a234] transition-all cursor-pointer relative overflow-hidden"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-[#d4a234]/10 rounded-xs text-[#d4a234]">
                  <Award className="w-6 h-6" />
                </div>
                <span className="font-mono text-[10px] uppercase tracking-wider text-[#76726b] font-bold">Season Laureates</span>
              </div>
              <h3 className="text-2xl font-serif font-bold text-[#1a1a1a] group-hover:text-[#d4a234] transition-colors">
                Contestants & Champions
              </h3>
              <p className="text-sm text-[#4a4844] mt-3 leading-relaxed">
                Profiles of Farmer Champion Laxman K.C., Graduate Champion Samriddha Bhantana, Climate Winner Suman Bimali, and the 16 provincial finalists.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-black/[0.06] flex items-center justify-between text-xs font-mono font-bold uppercase tracking-wider text-[#d4a234]">
              <span>Read Profiles →</span>
              <span className="text-[10px] text-[#76726b]">3 Champions</span>
            </div>
          </div>

          {/* Portal 5: Impact & Sacred Soil */}
          <div 
            onClick={() => onNavigate('impact')}
            className="editorial-card p-8 flex flex-col justify-between group hover:border-[#d4a234] transition-all cursor-pointer relative overflow-hidden"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-[#d4a234]/10 rounded-xs text-[#d4a234]">
                  <Globe2 className="w-6 h-6" />
                </div>
                <span className="font-mono text-[10px] uppercase tracking-wider text-[#76726b] font-bold">Agronomic Impact</span>
              </div>
              <h3 className="text-2xl font-serif font-bold text-[#1a1a1a] group-hover:text-[#d4a234] transition-colors">
                Sacred Soil & Impact
              </h3>
              <p className="text-sm text-[#4a4844] mt-3 leading-relaxed">
                The 77-District Sacred Soil Blend ritual and provincial agro-ecological zones: elevation, soil morphology, climate challenges, and mountain resilience.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-black/[0.06] flex items-center justify-between text-xs font-mono font-bold uppercase tracking-wider text-[#d4a234]">
              <span>Explore 77 Districts →</span>
              <span className="text-[10px] text-[#76726b]">7 Provinces</span>
            </div>
          </div>

          {/* Portal 6: Team & Leadership */}
          <div 
            onClick={() => onNavigate('team')}
            className="editorial-card p-8 flex flex-col justify-between group hover:border-[#d4a234] transition-all cursor-pointer relative overflow-hidden"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-[#d4a234]/10 rounded-xs text-[#d4a234]">
                  <Users className="w-6 h-6" />
                </div>
                <span className="font-mono text-[10px] uppercase tracking-wider text-[#76726b] font-bold">Executive Council</span>
              </div>
              <h3 className="text-2xl font-serif font-bold text-[#1a1a1a] group-hover:text-[#d4a234] transition-colors">
                Team & Leadership
              </h3>
              <p className="text-sm text-[#4a4844] mt-3 leading-relaxed">
                Meet Creator Shailesh Kandel Kshetri, Maha-Host Rajesh Hamal, Chief Technical Judge Dr. Yogendra Kumar Karki, Bimala KC, and E Square.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-black/[0.06] flex items-center justify-between text-xs font-mono font-bold uppercase tracking-wider text-[#d4a234]">
              <span>Meet The Architects →</span>
              <span className="text-[10px] text-[#76726b]">Creator & Judges</span>
            </div>
          </div>

        </div>

      </section>

      {/* CURATED DOCUMENTARY ARCHIVE TEASER */}
      <section className="py-24 border-b border-black/[0.08] max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-black/[0.08]">
          <div>
            <span className="editorial-label mb-3">Documentary Photography</span>
            <h2 className="text-4xl sm:text-5xl font-serif font-semibold text-[#1a1a1a]">
              The visual record.
            </h2>
          </div>
          <p className="text-sm font-mono text-[#76726b]">
            Direct photographic capture from the 21 episodes in the straw amphitheater.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mt-12">
          {CURATED_GALLERY.slice(0, 8).map((item, index) => (
            <div 
              key={item.id}
              onClick={() => openLightbox(index, CURATED_GALLERY)}
              className="editorial-card group relative cursor-pointer overflow-hidden"
            >
              <div className="aspect-[4/3] overflow-hidden bg-[#e0deda]">
                <img 
                  src={item.src} 
                  alt={item.title} 
                  onError={handleImgError}
                  className="w-full h-full object-cover lookbook-photo group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-4 border-t border-black/[0.08]">
                <h4 className="text-xs font-serif font-bold text-[#1a1a1a] truncate group-hover:text-[#d4a234] transition-colors">
                  {item.title}
                </h4>
                <p className="editorial-label mt-1 truncate">{item.location}</p>
              </div>
            </div>
          ))}
        </div>

      </section>

      {/* CALL TO ACTION BANNER */}
      <section className="py-20 bg-[#1a1a1a] text-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="space-y-3 max-w-2xl text-center lg:text-left">
            <span className="editorial-label text-[#d4a234]">Syndication & Global Replication</span>
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white leading-tight">
              Bring RAW to your territory or partner for Season Two.
            </h3>
            <p className="text-sm text-white/70 font-mono leading-relaxed">
              Format licensing, international franchise expansion (Bihar season underway), educational outreach, and broadcast distribution.
            </p>
          </div>
          <button 
            onClick={() => onNavigate('info')}
            className="btn-gold cursor-pointer shrink-0"
          >
            Initiate Syndicate Inquiry →
          </button>
        </div>
      </section>

    </div>
  );
};
