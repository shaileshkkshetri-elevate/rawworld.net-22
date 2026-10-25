import React from 'react';
import { Page } from '../types';
import { 
  TreePine, 
  ShieldCheck, 
  Apple, 
  Calculator, 
  CheckCircle2, 
  Globe2, 
  Sprout, 
  Users, 
  ArrowRight,
  TrendingUp,
  Scale,
  Award,
  FileCheck2
} from 'lucide-react';

interface OneTreeOneVotePageProps {
  onNavigate: (page: Page) => void;
  handleImgError: (e: React.SyntheticEvent<HTMLImageElement, Event>) => void;
}

export const OneTreeOneVotePage: React.FC<OneTreeOneVotePageProps> = ({ onNavigate, handleImgError }) => {
  return (
    <div className="py-16 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
      
      {/* Page Header */}
      <div className="pb-12 border-b border-black/[0.08]">
        <div className="flex items-center gap-2 mb-3">
          <span className="p-1.5 bg-[#d4a234]/15 rounded-xs text-[#d4a234]">
            <TreePine className="w-4 h-4" />
          </span>
          <span className="editorial-label text-[#d4a234]">RAW BOT · World's First Plantation-Based Voting System</span>
        </div>
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-semibold text-[#1a1a1a] leading-[0.95] tracking-tight">
          One Tree, <br />
          One Vote.
        </h1>
        <p className="text-lg text-[#4a4844] mt-6 max-w-3xl font-normal leading-relaxed">
          RAW BOT replaces the ordinary machinery of reality-show voting with something that outlives the season: a verified perennial tree, planted in the ground. Over <strong>289,973 verified trees</strong> planted in a single month by <strong>15,000+ active citizens</strong>.
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-4 font-mono text-[11px] text-[#76726b]">
          <span className="inline-flex items-center gap-1.5 text-[#1a1a1a] font-semibold">
            <span className="w-2 h-2 rounded-full bg-[#d4a234]"></span>
            289,973 Verified Trees in 30 Days
          </span>
          <span>·</span>
          <span>15,000+ Mobilized Citizens</span>
          <span>·</span>
          <span>Inaugural Climate Award: Suman Bimali</span>
          <span>·</span>
          <span>International Vote: Romania</span>
        </div>
      </div>

      {/* Headline Stats Banner */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="editorial-card p-6 text-center">
          <span className="font-serif text-4xl sm:text-5xl font-bold text-[#d4a234] block">289,973</span>
          <span className="font-mono text-[11px] uppercase tracking-wider text-[#76726b] block mt-1">Verified Saplings Planted</span>
        </div>
        <div className="editorial-card p-6 text-center">
          <span className="font-serif text-4xl sm:text-5xl font-bold text-[#1a1a1a] block">&gt; 60%</span>
          <span className="font-mono text-[11px] uppercase tracking-wider text-[#76726b] block mt-1">Fruit & Nut Species</span>
        </div>
        <div className="editorial-card p-6 text-center">
          <span className="font-serif text-4xl sm:text-5xl font-bold text-[#1a1a1a] block">15,000+</span>
          <span className="font-mono text-[11px] uppercase tracking-wider text-[#76726b] block mt-1">Citizens Mobilized</span>
        </div>
        <div className="editorial-card p-6 text-center">
          <span className="font-serif text-4xl sm:text-5xl font-bold text-[#d4a234] block">580 ha</span>
          <span className="font-mono text-[11px] uppercase tracking-wider text-[#76726b] block mt-1">Agroforestry Equivalent</span>
        </div>
      </div>

      {/* The Story & Mechanism Split */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        <div className="lg:col-span-7 space-y-6">
          <span className="editorial-label text-[#d4a234]">The Innovation</span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1a1a1a] leading-tight">
            Democracy where every vote breathes oxygen.
          </h2>
          <p className="text-sm text-[#4a4844] leading-relaxed">
            Instead of SMS codes, app taps, or online polls, supporters cast their vote by planting a perennial tree in a contestant's name. Each tree had to have a minimum two-year lifespan and be planted in open ground—seasonal vegetables, herbs, and potted plants did not qualify, and contestants could not vote for themselves or count trees on their own land.
          </p>

          <div className="space-y-4 pt-2">
            <h4 className="font-mono text-xs uppercase tracking-wider font-bold text-[#1a1a1a]">
              How a Tree Becomes an Official Vote:
            </h4>

            <div className="p-4 bg-white border border-black/[0.08] rounded-xs space-y-1">
              <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#1a1a1a]">
                <FileCheck2 className="w-4 h-4 text-[#d4a234]" />
                <span>1. Individual Voting Protocol</span>
              </div>
              <p className="text-xs text-[#76726b] leading-relaxed">
                A supporter plants a single tree, documents it with photographic and GPS video evidence, and submits the record through a designated portal for verification by audit officers.
              </p>
            </div>

            <div className="p-4 bg-white border border-black/[0.08] rounded-xs space-y-1">
              <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#1a1a1a]">
                <ShieldCheck className="w-4 h-4 text-[#d4a234]" />
                <span>2. Group Voting Certification</span>
              </div>
              <p className="text-xs text-[#76726b] leading-relaxed">
                Community groups or schools planting multiple trees at once required formal certification signed by a local government agriculture officer before any tree was officially tallied.
              </p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 space-y-4">
          <div className="editorial-card overflow-hidden">
            <div className="aspect-[4/3] bg-[#e0deda] overflow-hidden">
              <img 
                src="/images/one-tree-one-vote.jpg" 
                alt="One Tree One Vote community planting" 
                onError={handleImgError}
                className="w-full h-full object-cover lookbook-photo"
              />
            </div>
            <div className="p-5">
              <span className="editorial-label text-[#d4a234] mb-1">RAW BOT Field Tally</span>
              <h4 className="font-serif font-bold text-lg text-[#1a1a1a]">
                Community Mobilization across 15,000+ Participants
              </h4>
              <p className="text-xs text-[#76726b] mt-1.5 leading-relaxed">
                Students, farmers, and municipal leaders planting verified perennial trees in community forests to vote for their favorite contestants.
              </p>
            </div>
          </div>

          <div className="p-5 bg-white border border-black/[0.08] rounded-xs flex items-center justify-between">
            <div>
              <span className="editorial-label text-[#d4a234]">Inaugural Climate Award</span>
              <h4 className="font-serif font-bold text-base text-[#1a1a1a]">Suman Bimali</h4>
              <p className="text-xs text-[#76726b]">First-ever winner of a plantation-based voting system in reality television</p>
            </div>
            <div className="p-2.5 bg-[#d4a234]/15 text-[#d4a234] rounded-full">
              <Award className="w-6 h-6" />
            </div>
          </div>
        </div>

      </div>

      {/* The Species Diversity Mix */}
      <div className="p-8 sm:p-12 bg-white border border-black/[0.08] rounded-xs space-y-8">
        <div>
          <span className="editorial-label mb-2 text-[#d4a234]">Biodiversity Breakdown</span>
          <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#1a1a1a]">
            More Than 60% Productive Fruit & Nut Species
          </h3>
          <p className="text-sm text-[#4a4844] mt-2 max-w-2xl leading-relaxed">
            Unlike commercial tree planting projects that plant fast-growing eucalyptus or pine that dry up local water tables, RAW selected climate-adapted native edible perennials:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-5 bg-[#f8f7f4] border border-black/10 rounded-xs space-y-2">
            <span className="font-mono text-xs text-[#d4a234] font-bold">25% OF TOTAL</span>
            <h4 className="font-serif font-bold text-xl text-[#1a1a1a]">Citrus & Mandarin</h4>
            <p className="text-xs text-[#4a4844] leading-relaxed">
              Adapted to mid-hill elevations (800m–1,400m). Yields sweet mountain mandarin oranges providing cash income for smallholder households.
            </p>
          </div>

          <div className="p-5 bg-[#f8f7f4] border border-black/10 rounded-xs space-y-2">
            <span className="font-mono text-xs text-[#d4a234] font-bold">20% OF TOTAL</span>
            <h4 className="font-serif font-bold text-xl text-[#1a1a1a]">English Walnut & Pecan</h4>
            <p className="text-xs text-[#4a4844] leading-relaxed">
              Deep taproots anchor steep landslide-prone slopes. Produces protein-dense nuts stored without refrigeration for year-round food security.
            </p>
          </div>

          <div className="p-5 bg-[#f8f7f4] border border-black/10 rounded-xs space-y-2">
            <span className="font-mono text-xs text-[#d4a234] font-bold">18% OF TOTAL</span>
            <h4 className="font-serif font-bold text-xl text-[#1a1a1a]">Mountain Apple & Kiwi</h4>
            <p className="text-xs text-[#4a4844] leading-relaxed">
              Thrives in cold high-altitude valleys (Mustang, Jumla, Ramechhap). Long lifespan with commercial export value.
            </p>
          </div>

          <div className="p-5 bg-[#f8f7f4] border border-black/10 rounded-xs space-y-2">
            <span className="font-mono text-xs text-[#d4a234] font-bold">37% OF TOTAL</span>
            <h4 className="font-serif font-bold text-xl text-[#1a1a1a]">Fodder & Soil Legumes</h4>
            <p className="text-xs text-[#4a4844] leading-relaxed">
              Nitrogen-fixing perennials (Badahar, Ipil-ipil, Rai Khanyu) providing livestock forage and natural leaf-litter green manure.
            </p>
          </div>
        </div>
      </div>

      {/* Honest Scientific Survival Disclaimer */}
      <div className="p-8 bg-[#fdfbf7] border-l-4 border-[#d4a234] border border-black/[0.08] rounded-xs space-y-4">
        <div className="flex items-center gap-2">
          <Scale className="w-5 h-5 text-[#d4a234]" />
          <h4 className="font-serif font-bold text-xl text-[#1a1a1a]">
            Honest Climate Accounting: The 70% Survival Baseline
          </h4>
        </div>
        <p className="text-sm text-[#4a4844] leading-relaxed">
          Beyond the vote count itself, the campaign is designed to encourage long-term protection and nurturing of every tree planted. RAW models all sequestration against a realistic <strong>70% community survival baseline</strong> (~202,981 mature trees), ensuring figures remain credible to scientists, journalists, and institutional ESG auditors.
        </p>
        <div className="pt-2">
          <button 
            onClick={() => onNavigate('carbon')}
            className="btn-gold cursor-pointer"
          >
            Launch The Full Carbon Engine →
          </button>
        </div>
      </div>

    </div>
  );
};
