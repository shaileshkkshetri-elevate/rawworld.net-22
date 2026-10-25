import React, { useState, useMemo } from 'react';
import { Page } from '../types';
import { 
  computePlantationMetrics, 
  generateSequestrationTimeline,
  C_TO_CO2_FACTOR 
} from '../data/carbonModel';
import { 
  Calculator, 
  TreePine, 
  Scale, 
  TrendingUp, 
  Globe2, 
  Layers, 
  Droplets, 
  Apple, 
  BookOpen, 
  HelpCircle,
  ShieldCheck,
  Sprout,
  CheckCircle2
} from 'lucide-react';

interface CarbonEnginePageProps {
  onNavigate: (page: Page) => void;
}

export const CarbonEnginePage: React.FC<CarbonEnginePageProps> = ({ onNavigate }) => {
  // One Tree One Vote State
  const [survivalRate, setSurvivalRate] = useState<number>(0.70); // 70% community survival baseline (honest)
  const [selectedYearIndex, setSelectedYearIndex] = useState(2); // Year 10
  const [activeTab, setActiveTab] = useState<'timeline' | 'simulator' | 'science'>('timeline');

  const currentTimeline = useMemo(() => generateSequestrationTimeline(289973, survivalRate), [survivalRate]);
  const activeTimeline = currentTimeline[selectedYearIndex] || currentTimeline[2];

  // Custom Simulator State
  const [customTreeCount, setCustomTreeCount] = useState<number>(289973);
  const [customInputStr, setCustomInputStr] = useState<string>('289,973');
  const [customHorizonYears, setCustomHorizonYears] = useState<number>(30);
  const [customSurvivalRate, setCustomSurvivalRate] = useState<number>(0.70);

  const handleTreeInputChange = (val: string) => {
    const cleanDigits = val.replace(/[^0-9]/g, '');
    if (!cleanDigits) {
      setCustomInputStr('');
      setCustomTreeCount(0);
      return;
    }
    const parsed = parseInt(cleanDigits, 10);
    const capped = Math.min(parsed, 100_000_000);
    setCustomTreeCount(capped);
    setCustomInputStr(capped.toLocaleString());
  };

  const handleSelectPreset = (presetValue: number) => {
    setCustomTreeCount(presetValue);
    setCustomInputStr(presetValue.toLocaleString());
  };

  const simMetrics = useMemo(
    () => computePlantationMetrics(customTreeCount, customHorizonYears, customSurvivalRate),
    [customTreeCount, customHorizonYears, customSurvivalRate]
  );

  return (
    <div className="py-16 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      
      {/* Page Header */}
      <div className="pb-12 border-b border-black/[0.08]">
        <div className="flex items-center gap-2 mb-3">
          <span className="p-1.5 bg-[#d4a234]/15 rounded-xs text-[#d4a234]">
            <Calculator className="w-4 h-4" />
          </span>
          <span className="editorial-label text-[#d4a234]">Carbon & Climate Engine</span>
        </div>
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-semibold text-[#1a1a1a] leading-[0.95] tracking-tight">
          Agroforestry <br />
          Carbon Engine.
        </h1>
        <p className="text-lg text-[#4a4844] mt-6 max-w-3xl font-normal leading-relaxed">
          Peer-reviewed agroforestry modeling built upon <strong>IPCC AFOLU 2019</strong> and <strong>ICRAF / ICIMOD</strong> field standards. Featuring honest survival baselines, stoichiometric soil carbon accounting, and hillside erosion mitigation.
        </p>

        {/* Tab Switcher */}
        <div className="flex flex-wrap items-center gap-2 mt-8 font-mono text-xs uppercase tracking-wider">
          <button
            onClick={() => setActiveTab('timeline')}
            className={`px-4 py-2.5 rounded-xs transition-colors cursor-pointer font-bold ${
              activeTab === 'timeline'
                ? 'bg-[#1a1a1a] text-white shadow-sm'
                : 'bg-white border border-black/10 text-[#76726b] hover:text-[#1a1a1a]'
            }`}
          >
            The 289,973-Tree Timeline
          </button>
          <button
            onClick={() => setActiveTab('simulator')}
            className={`px-4 py-2.5 rounded-xs transition-colors cursor-pointer font-bold ${
              activeTab === 'simulator'
                ? 'bg-[#1a1a1a] text-white shadow-sm'
                : 'bg-white border border-black/10 text-[#76726b] hover:text-[#1a1a1a]'
            }`}
          >
            Any-Number Tree Simulator
          </button>
          <button
            onClick={() => setActiveTab('science')}
            className={`px-4 py-2.5 rounded-xs transition-colors cursor-pointer font-bold ${
              activeTab === 'science'
                ? 'bg-[#1a1a1a] text-white shadow-sm'
                : 'bg-white border border-black/10 text-[#76726b] hover:text-[#1a1a1a]'
            }`}
          >
            Scientific Equations & Citations
          </button>
        </div>
      </div>

      {/* TAB 1: 289,973 TREE MULTI-YEAR TIMELINE */}
      {activeTab === 'timeline' && (
        <div className="space-y-12">
          
          {/* Survival Rate Controller Card */}
          <div className="p-6 sm:p-8 bg-white border border-black/[0.08] rounded-xs space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="editorial-label text-[#d4a234] mb-1">Peer-Reviewed Sensitivity Parameter</span>
                <h3 className="font-serif font-bold text-xl text-[#1a1a1a]">
                  Community Survival Rate: {(survivalRate * 100).toFixed(0)}%
                </h3>
                <p className="text-xs text-[#76726b] font-mono mt-1">
                  Surviving Trees: {Math.round(289973 * survivalRate).toLocaleString()} of 289,973 planted
                </p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setSurvivalRate(0.50)}
                  className={`px-3 py-1 text-xs font-mono rounded-xs cursor-pointer ${
                    survivalRate === 0.50 ? 'bg-[#d4a234] text-white font-bold' : 'bg-[#f8f7f4] text-[#1a1a1a]'
                  }`}
                >
                  Conservative (50%)
                </button>
                <button
                  onClick={() => setSurvivalRate(0.70)}
                  className={`px-3 py-1 text-xs font-mono rounded-xs cursor-pointer ${
                    survivalRate === 0.70 ? 'bg-[#d4a234] text-white font-bold' : 'bg-[#f8f7f4] text-[#1a1a1a]'
                  }`}
                >
                  Realistic Baseline (70%)
                </button>
                <button
                  onClick={() => setSurvivalRate(0.85)}
                  className={`px-3 py-1 text-xs font-mono rounded-xs cursor-pointer ${
                    survivalRate === 0.85 ? 'bg-[#d4a234] text-white font-bold' : 'bg-[#f8f7f4] text-[#1a1a1a]'
                  }`}
                >
                  High Care (85%)
                </button>
              </div>
            </div>

            <input 
              type="range"
              min="0.30"
              max="1.00"
              step="0.05"
              value={survivalRate}
              onChange={(e) => setSurvivalRate(parseFloat(e.target.value))}
              className="w-full accent-[#d4a234] cursor-pointer"
            />
          </div>

          {/* Timeline Cards Row */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {currentTimeline.map((item, idx) => (
              <button
                key={item.year}
                onClick={() => setSelectedYearIndex(idx)}
                className={`p-4 text-left border rounded-xs transition-all cursor-pointer ${
                  selectedYearIndex === idx
                    ? 'border-[#d4a234] bg-white shadow-md ring-1 ring-[#d4a234]'
                    : 'border-black/[0.08] bg-[#f8f7f4] hover:bg-white'
                }`}
              >
                <span className="font-mono text-xs uppercase tracking-wider text-[#d4a234] font-bold block">
                  {item.label}
                </span>
                <span className="font-serif font-bold text-2xl text-[#1a1a1a] block mt-1">
                  {Math.round(item.cumulativeTotalCO2eTons).toLocaleString()} t
                </span>
                <span className="font-mono text-[10px] text-[#76726b] block">Total CO₂e Drawn</span>
              </button>
            ))}
          </div>

          {/* Active Timeline Deep Dive Display */}
          <div className="p-8 sm:p-12 bg-white border border-black/[0.08] rounded-xs space-y-8">
            <div className="border-b border-black/[0.06] pb-6">
              <span className="editorial-label text-[#d4a234] mb-2">{activeTimeline.label} Projection Milestone</span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1a1a1a]">
                {activeTimeline.stageName}
              </h2>
              <p className="text-sm text-[#4a4844] mt-2 leading-relaxed max-w-3xl">
                {activeTimeline.description}
              </p>
              <div className="mt-3 font-mono text-[11px] text-[#76726b] flex items-center gap-2">
                <BookOpen className="w-3.5 h-3.5 text-[#d4a234]" />
                <span>Reference: {activeTimeline.publishedSource}</span>
              </div>
            </div>

            {/* Detailed Metric Tiles */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              
              <div className="p-5 bg-[#f8f7f4] border border-black/10 rounded-xs space-y-1">
                <span className="font-mono text-[10px] uppercase tracking-wider text-[#76726b]">
                  Cumulative Tree Biomass CO₂
                </span>
                <span className="font-serif font-bold text-3xl text-[#1a1a1a] block">
                  {Math.round(activeTimeline.cumulativeCO2Tons).toLocaleString()} t
                </span>
                <span className="text-[11px] text-[#4a4844] block">
                  Above & belowground wood biomass
                </span>
              </div>

              <div className="p-5 bg-[#f8f7f4] border border-black/10 rounded-xs space-y-1">
                <span className="font-mono text-[10px] uppercase tracking-wider text-[#76726b]">
                  Soil Organic Carbon (C)
                </span>
                <span className="font-serif font-bold text-3xl text-[#1a1a1a] block">
                  {Math.round(activeTimeline.cumulativeSoilCarbonTons).toLocaleString()} t C
                </span>
                <span className="text-[11px] text-[#4a4844] block">
                  = {Math.round(activeTimeline.cumulativeSoilCO2eTons).toLocaleString()} t CO₂e (× 3.667)
                </span>
              </div>

              <div className="p-5 bg-[#f8f7f4] border border-black/10 rounded-xs space-y-1">
                <span className="font-mono text-[10px] uppercase tracking-wider text-[#76726b]">
                  Combined Net CO₂e Offset
                </span>
                <span className="font-serif font-bold text-3xl text-[#d4a234] block">
                  {Math.round(activeTimeline.cumulativeTotalCO2eTons).toLocaleString()} t CO₂e
                </span>
                <span className="text-[11px] text-[#4a4844] block">
                  Biomass + Soil Carbon combined
                </span>
              </div>

              <div className="p-5 bg-[#f8f7f4] border border-black/10 rounded-xs space-y-1">
                <span className="font-mono text-[10px] uppercase tracking-wider text-[#76726b]">
                  Hillside Topsoil Retained
                </span>
                <span className="font-serif font-bold text-3xl text-[#1a1a1a] block">
                  {Math.round(activeTimeline.erosionSavedTons).toLocaleString()} t
                </span>
                <span className="text-[11px] text-[#4a4844] block">
                  40 t / ha / yr erosion saved
                </span>
              </div>

            </div>

            {/* Nutrition & Food Output */}
            <div className="p-6 bg-[#fdfbf7] border border-[#d4a234]/30 rounded-xs flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-1">
                <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[#d4a234] font-bold">
                  <Apple className="w-4 h-4" />
                  <span>Productive Agrarian Dividend</span>
                </div>
                <h4 className="font-serif font-bold text-xl text-[#1a1a1a]">
                  Cumulative Fruit & Nut Harvest: {Math.round(activeTimeline.metrics.cumulativeFoodTons).toLocaleString()} Metric Tons
                </h4>
                <p className="text-xs text-[#76726b] max-w-xl">
                  Over 60% of the planted trees yield edible produce starting at year 4–5 (citrus, walnut, apple, and forage legumes), providing food security.
                </p>
              </div>
              <div className="text-center font-mono shrink-0">
                <span className="text-3xl font-serif font-bold text-[#d4a234]">
                  {Math.round(activeTimeline.metrics.annualFoodTons).toLocaleString()} t/yr
                </span>
                <span className="block text-[10px] uppercase tracking-wider text-[#76726b]">Annual Mature Yield</span>
              </div>
            </div>

          </div>

        </div>
      )}

      {/* TAB 2: ANY-NUMBER SIMULATOR */}
      {activeTab === 'simulator' && (
        <div className="space-y-12">
          
          <div className="p-8 sm:p-12 bg-white border border-black/[0.08] rounded-xs space-y-8">
            <div>
              <span className="editorial-label text-[#d4a234] mb-2">Dynamic Sequestration Calculator</span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1a1a1a]">
                Simulate Any Plantation Scale
              </h2>
              <p className="text-sm text-[#4a4844] mt-2 max-w-2xl leading-relaxed">
                Adjust tree counts, horizon years, and seedling survival rates to see IPCC-consistent sequestered carbon, land area equivalents, and topsoil preservation.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pt-4">
              
              {/* Tree Count Input */}
              <div className="space-y-3">
                <label className="editorial-label">Total Trees Planted</label>
                <input 
                  type="text"
                  value={customInputStr}
                  onChange={(e) => handleTreeInputChange(e.target.value)}
                  className="w-full text-2xl font-serif font-bold p-3 bg-[#f8f7f4] border border-black/15 focus:border-[#d4a234] rounded-xs text-[#1a1a1a] focus:outline-none"
                />
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {[5000, 50000, 289973, 1000000].map((val) => (
                    <button
                      key={val}
                      onClick={() => handleSelectPreset(val)}
                      className={`px-2.5 py-1 text-[11px] font-mono rounded-xs cursor-pointer border ${
                        customTreeCount === val
                          ? 'border-[#d4a234] bg-[#d4a234] text-white font-bold'
                          : 'border-black/10 bg-[#f8f7f4] text-[#1a1a1a] hover:bg-white'
                      }`}
                    >
                      {val.toLocaleString()}
                    </button>
                  ))}
                </div>
              </div>

              {/* Time Horizon Slider */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <label className="editorial-label">Time Horizon</label>
                  <span className="font-mono text-xs font-bold text-[#d4a234]">{customHorizonYears} Years</span>
                </div>
                <input 
                  type="range"
                  min="1"
                  max="30"
                  value={customHorizonYears}
                  onChange={(e) => setCustomHorizonYears(parseInt(e.target.value, 10))}
                  className="w-full accent-[#d4a234] cursor-pointer mt-4"
                />
                <span className="font-mono text-[10px] text-[#76726b] block">
                  Annual Sequestration Rate at Year {customHorizonYears}: {simMetrics.annualRatePerTreeKg} kg CO₂ / tree / yr
                </span>
              </div>

              {/* Survival Rate Slider */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <label className="editorial-label">Survival Assumption</label>
                  <span className="font-mono text-xs font-bold text-[#d4a234]">{(customSurvivalRate * 100).toFixed(0)}%</span>
                </div>
                <input 
                  type="range"
                  min="0.30"
                  max="1.00"
                  step="0.05"
                  value={customSurvivalRate}
                  onChange={(e) => setCustomSurvivalRate(parseFloat(e.target.value))}
                  className="w-full accent-[#d4a234] cursor-pointer mt-4"
                />
                <span className="font-mono text-[10px] text-[#76726b] block">
                  Surviving Stand: {simMetrics.survivingTrees.toLocaleString()} trees
                </span>
              </div>

            </div>

            {/* Calculated Output Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-black/[0.06]">
              
              <div className="editorial-card p-5">
                <span className="editorial-label mb-1">Total CO₂e Drawdown</span>
                <span className="font-serif font-bold text-3xl text-[#d4a234] block">
                  {Math.round(simMetrics.cumulativeTotalCO2eTons).toLocaleString()} t
                </span>
                <span className="text-[10px] font-mono text-[#76726b] block mt-1">
                  Trees: {Math.round(simMetrics.cumulativeTreeCO2Tons).toLocaleString()} t · Soil: {Math.round(simMetrics.cumulativeSoilCO2eTons).toLocaleString()} t
                </span>
              </div>

              <div className="editorial-card p-5">
                <span className="editorial-label mb-1">Equivalent Hectares</span>
                <span className="font-serif font-bold text-3xl text-[#1a1a1a] block">
                  {Math.round(simMetrics.equivalentHectares).toLocaleString()} ha
                </span>
                <span className="text-[10px] font-mono text-[#76726b] block mt-1">
                  ~{Math.round(simMetrics.acresRestored).toLocaleString()} acres @ 500 trees/ha
                </span>
              </div>

              <div className="editorial-card p-5">
                <span className="editorial-label mb-1">Topsoil Erosion Saved</span>
                <span className="font-serif font-bold text-3xl text-[#1a1a1a] block">
                  {Math.round(simMetrics.cumulativeErosionSavedTons).toLocaleString()} t
                </span>
                <span className="text-[10px] font-mono text-[#76726b] block mt-1">
                  {Math.round(simMetrics.annualErosionSavedTons).toLocaleString()} tons / year
                </span>
              </div>

              <div className="editorial-card p-5">
                <span className="editorial-label mb-1">Fruit & Nut Harvest</span>
                <span className="font-serif font-bold text-3xl text-[#1a1a1a] block">
                  {Math.round(simMetrics.cumulativeFoodTons).toLocaleString()} t
                </span>
                <span className="text-[10px] font-mono text-[#76726b] block mt-1">
                  Edible perennial mountain yield
                </span>
              </div>

            </div>

          </div>

        </div>
      )}

      {/* TAB 3: SCIENTIFIC EQUATIONS & CITATIONS */}
      {activeTab === 'science' && (
        <div className="space-y-8">
          <div className="p-8 sm:p-12 bg-white border border-black/[0.08] rounded-xs space-y-6">
            <h3 className="text-2xl font-serif font-bold text-[#1a1a1a]">
              The Mathematical Architecture
            </h3>
            
            <div className="space-y-4 text-sm text-[#4a4844] leading-relaxed">
              <div className="p-4 bg-[#f8f7f4] border border-black/10 rounded-xs font-mono text-xs space-y-2">
                <div className="font-bold text-[#1a1a1a]">1. Cumulative Biomass Sequestration Formula:</div>
                <div className="text-[#d4a234]">CO₂_Tree_Total = N_surviving × ∑(AnnualRate(t)) / 1000</div>
                <div className="text-[#76726b]">Where N_surviving = N_planted × SurvivalRate (default 0.70). AnnualRate curves from 4.5 kg at Year 1 to 35 kg at peak maturity.</div>
              </div>

              <div className="p-4 bg-[#f8f7f4] border border-black/10 rounded-xs font-mono text-xs space-y-2">
                <div className="font-bold text-[#1a1a1a]">2. Soil Organic Carbon (SOC) Stoichiometric Conversion:</div>
                <div className="text-[#d4a234]">CO₂e_Soil = EffectiveCanopyHectares × 0.85 t C/ha/yr × Years × 3.667</div>
                <div className="text-[#76726b]">Stoichiometric factor: 44 (molecular weight of CO₂) / 12 (molecular weight of Carbon) = 3.667. One ton of elemental carbon stored in soil equals 3.667 tons of CO₂ drawn from the atmosphere.</div>
              </div>

              <div className="p-4 bg-[#f8f7f4] border border-black/10 rounded-xs font-mono text-xs space-y-2">
                <div className="font-bold text-[#1a1a1a]">3. Hillside Topsoil Retention Formula:</div>
                <div className="text-[#d4a234]">Erosion_Saved = EffectiveCanopyHectares × 40 t/ha/yr × Years</div>
                <div className="text-[#76726b]">Based on ICIMOD watershed trials measuring mountain terrace sediment runoff reduction through deep agroforestry root binding.</div>
              </div>
            </div>

            <h4 className="font-serif font-bold text-xl text-[#1a1a1a] pt-4">
              Peer-Reviewed References
            </h4>
            <ul className="space-y-2 text-xs font-mono text-[#76726b] list-disc list-inside">
              <li><strong>IPCC (2019)</strong>: 2019 Refinement to the 2006 IPCC Guidelines for National Greenhouse Gas Inventories, Volume 4: Agriculture, Forestry and Other Land Use (AFOLU), Chapter 5.</li>
              <li><strong>ICRAF / CIFOR (2020)</strong>: Carbon Accounting Guidelines for Agroforestry and Multi-Strata Perennial Systems in South Asia.</li>
              <li><strong>ICIMOD (2021)</strong>: Watershed Soil Conservation and Terrace Agroforestry Studies in the Mid-Hills of Nepal.</li>
            </ul>
          </div>
        </div>
      )}

      {/* HONEST CLIMATE REALISM DISCLAIMER */}
      <div className="p-8 sm:p-10 bg-[#fdfbf7] border-l-4 border-[#d4a234] border border-black/[0.08] rounded-xs space-y-4">
        <div className="flex items-center gap-2">
          <Scale className="w-5 h-5 text-[#d4a234]" />
          <h4 className="font-serif font-bold text-xl text-[#1a1a1a]">
            Can One Tree One Vote Solve The Climate Crisis Alone?
          </h4>
        </div>
        <p className="text-sm text-[#4a4844] leading-relaxed">
          <strong>No.</strong> Honesty is essential to climate credibility. Global fossil fuel emissions are approximately <strong>40,000,000,000 metric tons of CO₂ per year</strong>. 289,973 trees sequester roughly 7,000 tons annually at mature canopy—an invaluable local contribution to hillside stability, soil microbial health, and community fruit yield, but trees alone cannot replace decarbonizing heavy industry and power grids.
        </p>
        <p className="text-sm text-[#4a4844] leading-relaxed">
          What RAW proves is that <strong>civic culture can directly fund regeneration</strong> rather than disposable advertising waste.
        </p>
      </div>

    </div>
  );
};
