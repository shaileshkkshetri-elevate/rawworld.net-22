import React, { useState } from 'react';
import { Page } from '../types';
import { NEPAL_AGRO_REGIONS } from '../data/regions';
import { Globe2, Mountain, Layers, Droplets, CheckCircle2, ArrowRight } from 'lucide-react';

interface ImpactPageProps {
  onNavigate: (page: Page) => void;
  handleImgError: (e: React.SyntheticEvent<HTMLImageElement, Event>) => void;
}

export const ImpactPage: React.FC<ImpactPageProps> = ({ onNavigate, handleImgError }) => {
  const [selectedRegionId, setSelectedRegionId] = useState('gandaki');
  const activeRegion = NEPAL_AGRO_REGIONS.find((r) => r.id === selectedRegionId) || NEPAL_AGRO_REGIONS[0];

  return (
    <div className="py-16 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      
      {/* Page Header */}
      <div className="pb-12 border-b border-black/[0.08]">
        <div className="flex items-center gap-2 mb-3">
          <span className="p-1.5 bg-[#d4a234]/15 rounded-xs text-[#d4a234]">
            <Globe2 className="w-4 h-4" />
          </span>
          <span className="editorial-label text-[#d4a234]">Territorial Impact · Sacred Soil</span>
        </div>
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-semibold text-[#1a1a1a] leading-[0.95] tracking-tight">
          Sacred Soil & <br />
          77-District Impact.
        </h1>
        <p className="text-lg text-[#4a4844] mt-6 max-w-3xl font-normal leading-relaxed">
          From the southern sub-tropical Terai riverbeds at 60 meters to the high alpine trans-Himalayan valleys above 8,000 meters. Soil samples carried by contestants from every single district were merged into a consecrated central chalice at the opening ceremony.
        </p>
      </div>

      {/* The 77-District Soil Blending Ritual */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7 space-y-5">
          <span className="editorial-label text-[#d4a234]">The Consecration Ceremony</span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1a1a1a] leading-tight">
            One nation united through its mother soil.
          </h2>
          <p className="text-sm text-[#4a4844] leading-relaxed">
            Before a single challenge commenced in the arena, each pair of contestants arrived bearing an earthen vessel of topsoil from their ancestral village—red clay from Nuwakot, glacial silt from Jumla, alluvial loam from Dhanusha, and organic humus from Ilam.
          </p>
          <p className="text-sm text-[#4a4844] leading-relaxed">
            Presided over by Maha-Host Rajesh Hamal and elders, these 77 samples were blended live on primetime television. This sacred soil remained at the center of the arena for all 21 episodes, and was finally used to anoint the forehead of the crowned winners.
          </p>
        </div>
        <div className="lg:col-span-5">
          <div className="editorial-card overflow-hidden">
            <div className="aspect-[4/3] bg-[#e0deda] overflow-hidden">
              <img 
                src="/images/gallery/photo-07.jpg" 
                alt="77-District Sacred Soil Blending Ritual" 
                onError={handleImgError}
                className="w-full h-full object-cover lookbook-photo"
              />
            </div>
            <div className="p-4">
              <span className="editorial-label text-[#d4a234]">Episode 1 Ceremony</span>
              <p className="font-serif font-bold text-sm text-[#1a1a1a] mt-1">
                Blending sacred soils from all 77 districts into the central arena chalice.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive 7-Province Agro-Ecological Explorer */}
      <div className="space-y-6 pt-6">
        <div>
          <span className="editorial-label mb-2 text-[#d4a234]">Interactive Provincial Directory</span>
          <h3 className="text-3xl font-serif font-bold text-[#1a1a1a]">
            Explore Nepal’s Seven Agro-Climatic Zones
          </h3>
          <p className="text-xs font-mono text-[#76726b] mt-1">
            Select a province to view its soil profile, crop staples, and RAW arena trial highlights:
          </p>
        </div>

        {/* Province Tabs */}
        <div className="flex flex-wrap items-center gap-2 font-mono text-xs uppercase tracking-wider">
          {NEPAL_AGRO_REGIONS.map((region) => (
            <button
              key={region.id}
              onClick={() => setSelectedRegionId(region.id)}
              className={`px-4 py-2.5 rounded-xs transition-all cursor-pointer font-bold ${
                selectedRegionId === region.id
                  ? 'bg-[#1a1a1a] text-white shadow-sm ring-1 ring-[#d4a234]'
                  : 'bg-white border border-black/10 text-[#4a4844] hover:border-[#1a1a1a]'
              }`}
            >
              {region.name}
            </button>
          ))}
        </div>

        {/* Province Detail Display Card */}
        <div className="p-8 sm:p-12 bg-white border border-black/[0.08] rounded-xs space-y-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-black/[0.06] pb-6">
            <div>
              <span className="editorial-label text-[#d4a234] mb-1">{activeRegion.zone}</span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1a1a1a]">
                {activeRegion.name}
              </h2>
            </div>
            <div className="font-mono text-xs text-[#76726b] bg-[#f8f7f4] px-4 py-2 rounded-xs border border-black/10">
              Season 1 Participation: <span className="font-bold text-[#1a1a1a]">{activeRegion.season1Contestants}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-5 bg-[#f8f7f4] border border-black/10 rounded-xs space-y-1">
              <div className="flex items-center gap-2 font-mono text-xs text-[#d4a234] font-bold">
                <Mountain className="w-4 h-4" />
                <span>Elevation Gradient</span>
              </div>
              <p className="font-serif font-bold text-2xl text-[#1a1a1a]">{activeRegion.elevation}</p>
              <p className="text-xs text-[#76726b]">Microclimates spanning subtropical plains to alpine peaks</p>
            </div>

            <div className="p-5 bg-[#f8f7f4] border border-black/10 rounded-xs space-y-1">
              <div className="flex items-center gap-2 font-mono text-xs text-[#d4a234] font-bold">
                <Layers className="w-4 h-4" />
                <span>Dominant Soil Profile</span>
              </div>
              <p className="font-serif font-bold text-lg text-[#1a1a1a]">{activeRegion.soil}</p>
              <p className="text-xs text-[#76726b]">Geological bedrock and organic horizons</p>
            </div>

            <div className="p-5 bg-[#f8f7f4] border border-black/10 rounded-xs space-y-1">
              <div className="flex items-center gap-2 font-mono text-xs text-[#d4a234] font-bold">
                <Droplets className="w-4 h-4" />
                <span>Indigenous Food Staples</span>
              </div>
              <p className="font-serif font-bold text-lg text-[#1a1a1a]">{activeRegion.staples}</p>
              <p className="text-xs text-[#76726b]">Centuries-old heritage crop lineages</p>
            </div>
          </div>

          <div className="p-6 bg-[#fdfbf7] border border-[#d4a234]/30 rounded-xs space-y-2">
            <span className="editorial-label text-[#d4a234]">RAW Arena Challenge Highlight</span>
            <p className="font-serif text-xl font-bold text-[#1a1a1a]">
              {activeRegion.rawHighlight}
            </p>
            <p className="text-xs text-[#76726b]">
              Addressing local climate challenge: {activeRegion.climateChallenge}
            </p>
          </div>
        </div>

      </div>

    </div>
  );
};
