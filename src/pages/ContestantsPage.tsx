import React from 'react';
import { Page } from '../types';
import { CHAMPIONS, FINALISTS } from '../data/contestants';
import { Award, Trophy, Sparkles, CheckCircle2, Sprout, ArrowRight } from 'lucide-react';

interface ContestantsPageProps {
  onNavigate: (page: Page) => void;
  handleImgError: (e: React.SyntheticEvent<HTMLImageElement, Event>) => void;
}

export const ContestantsPage: React.FC<ContestantsPageProps> = ({ onNavigate, handleImgError }) => {
  return (
    <div className="py-16 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
      
      {/* Page Header */}
      <div className="pb-12 border-b border-black/[0.08]">
        <div className="flex items-center gap-2 mb-3">
          <span className="p-1.5 bg-[#d4a234]/15 rounded-xs text-[#d4a234]">
            <Award className="w-4 h-4" />
          </span>
          <span className="editorial-label text-[#d4a234]">Season Laureates · The Contestants</span>
        </div>
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-semibold text-[#1a1a1a] leading-[0.95] tracking-tight">
          Contestant <br />
          Profiles & Laureates.
        </h1>
        <p className="text-lg text-[#4a4844] mt-6 max-w-3xl font-normal leading-relaxed">
          From 1,642 nationwide applicants (1,398 farmers and 244 graduates) across 77 districts to 16 provincial finalists. Discover the profiles of the Season One Champions whose grit, science, and environmental mobilization proved that food creators are Nepal’s greatest heroes.
        </p>
      </div>

      {/* The Three Season One Champions Dossiers */}
      <div className="space-y-16">
        {CHAMPIONS.map((champ, idx) => (
          <div 
            key={champ.id}
            className="editorial-card p-8 sm:p-12 space-y-8 relative overflow-hidden"
          >
            {/* Top Badge */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-black/[0.08] pb-6">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-[#d4a234] text-white rounded-xs">
                  <Trophy className="w-5 h-5" />
                </div>
                <div>
                  <span className="editorial-label text-[#d4a234]">{champ.role}</span>
                  <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1a1a1a]">
                    {champ.name}
                  </h2>
                </div>
              </div>
              <div className="font-mono text-xs text-[#76726b] bg-[#f8f7f4] px-4 py-2 rounded-xs border border-black/10">
                <span>{champ.hometown}</span> · <span className="font-semibold text-[#1a1a1a]">{champ.province}</span>
              </div>
            </div>

            {/* Split Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              
              {/* Image & Tagline */}
              <div className="lg:col-span-5 space-y-4">
                <div className="aspect-[4/5] bg-[#e0deda] overflow-hidden rounded-xs border border-black/10 relative group">
                  <img 
                    src={champ.image} 
                    alt={champ.name} 
                    onError={handleImgError}
                    className="w-full h-full object-cover object-top lookbook-photo group-hover:scale-103 transition-transform duration-500"
                  />
                  <div className="absolute bottom-3 left-3 bg-[#1a1a1a]/90 text-white px-3 py-1 text-[10px] font-mono uppercase tracking-wider font-bold">
                    Official Champion Portrait
                  </div>
                </div>
                <p className="font-serif italic text-base text-[#1a1a1a] leading-snug">
                  "{champ.quote}"
                </p>
              </div>

              {/* Biography and Key Innovations */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-[#76726b] mb-2 font-bold">
                    Profile & Agrarian Journey
                  </h3>
                  <p className="text-sm text-[#4a4844] leading-relaxed">
                    {champ.biography}
                  </p>
                </div>

                <div className="space-y-4 pt-2">
                  <div className="p-4 bg-[#f8f7f4] border border-black/10 rounded-xs space-y-1">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-[#d4a234] font-bold block">
                      Key Technical Innovation
                    </span>
                    <p className="font-serif font-bold text-lg text-[#1a1a1a]">
                      {champ.keyInnovation}
                    </p>
                  </div>

                  <div className="p-4 bg-[#f8f7f4] border border-black/10 rounded-xs space-y-1">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-[#d4a234] font-bold block">
                      Arena Decisive Trial Achievement
                    </span>
                    <p className="text-xs text-[#4a4844] leading-relaxed">
                      {champ.fieldAchievement}
                    </p>
                  </div>

                  <div className="p-4 bg-[#fdfbf7] border border-[#d4a234]/40 rounded-xs space-y-1">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-[#d4a234] font-bold block">
                      Award & Enterprise Capital
                    </span>
                    <p className="font-serif font-bold text-base text-[#1a1a1a]">
                      {champ.prizeAwarded}
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>

      {/* The Duo Dynamic Mechanics */}
      <div className="p-8 sm:p-12 bg-white border border-black/[0.08] rounded-xs space-y-6">
        <div>
          <span className="editorial-label text-[#d4a234] mb-2">Format Architecture</span>
          <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#1a1a1a]">
            How The Duo Engine Works
          </h3>
          <p className="text-sm text-[#4a4844] mt-2 max-w-2xl leading-relaxed">
            RAW eliminates the false divide between rural tradition and modern science. Each team consists of two distinct archetypes who must cooperate under pressure:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
          <div className="p-6 bg-[#f8f7f4] border border-black/10 rounded-xs space-y-3">
            <span className="font-mono text-xs uppercase tracking-wider text-[#d4a234] font-bold">Archetype 1</span>
            <h4 className="font-serif font-bold text-xl text-[#1a1a1a]">The Mountain Cultivator</h4>
            <p className="text-xs text-[#4a4844] leading-relaxed">
              Decades of muscle memory, instinctive weather prediction, manual obstacle navigation, draft animal handling, and terraced stonework. They know the weight of wet soil and the resilience of native crops.
            </p>
          </div>

          <div className="p-6 bg-[#f8f7f4] border border-black/10 rounded-xs space-y-3">
            <span className="font-mono text-xs uppercase tracking-wider text-[#d4a234] font-bold">Archetype 2</span>
            <h4 className="font-serif font-bold text-xl text-[#1a1a1a]">The Agricultural Science Graduate</h4>
            <p className="text-xs text-[#4a4844] leading-relaxed">
              University graduates trained in soil titration, microbiology, precision drip hydraulics, market logistics, and mycorrhizal bio-fertilizers. They bring chemical assays and quantitative rigor to the team.
            </p>
          </div>
        </div>
      </div>

      {/* Season One Finalist Duos Table */}
      <div className="p-8 sm:p-12 bg-white border border-black/[0.08] rounded-xs space-y-6">
        <div>
          <span className="editorial-label text-[#d4a234] mb-2">Grand Finale Roster</span>
          <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#1a1a1a]">
            The Four Finalist Teams
          </h3>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left font-mono text-xs">
            <thead>
              <tr className="border-b border-black/10 text-[#76726b] uppercase text-[10px] tracking-wider">
                <th className="pb-3">Duo</th>
                <th className="pb-3">Farmer Partner</th>
                <th className="pb-3">Graduate Partner</th>
                <th className="pb-3">Specialization</th>
                <th className="pb-3">Season Result</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-black/[0.06]">
              {FINALISTS.map((f) => (
                <tr key={f.duoNumber} className="hover:bg-[#f8f7f4]">
                  <td className="py-4 font-bold text-[#d4a234]">#{f.duoNumber}</td>
                  <td className="py-4 font-serif font-bold text-[#1a1a1a] text-sm">{f.farmer}</td>
                  <td className="py-4 font-serif font-bold text-[#1a1a1a] text-sm">{f.graduate}</td>
                  <td className="py-4 text-[#4a4844]">{f.specialization}</td>
                  <td className="py-4">
                    <span className="px-2.5 py-1 bg-[#1a1a1a] text-white rounded-xs font-bold text-[10px] uppercase">
                      {f.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
};
