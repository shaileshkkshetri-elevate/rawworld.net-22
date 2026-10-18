import React, { useState, useEffect } from 'react';
import { 
  TreePine, 
  Trophy, 
  Sparkles, 
  CheckCircle2, 
  ChevronRight, 
  ChevronLeft, 
  X, 
  Send, 
  Award, 
  Leaf, 
  ShieldCheck, 
  Sprout, 
  ArrowUpRight, 
  Image as ImageIcon, 
  Maximize2, 
  Compass, 
  Menu,
  Check,
  BookOpen,
  Calendar,
  Layers,
  Droplets,
  Mountain,
  Calculator,
  Globe2,
  TrendingUp,
  Scale,
  Apple,
  HelpCircle
} from 'lucide-react';

interface GalleryItem {
  id: number;
  src: string;
  category: 'arena' | 'tasks' | 'ceremony' | 'archive';
  title: string;
  caption: string;
  location: string;
}

// 14 Curated Storyline Highlights from Season 1
const CURATED_GALLERY: GalleryItem[] = [
  {
    id: 1,
    src: '/images/gallery/gallery-01.jpg',
    category: 'arena',
    title: 'The Circular Arena at Dawn',
    caption: 'Constructed completely from natural timber crates and indigenous straw stacks atop the hills of Nepal.',
    location: 'Central Hill Arena, Parbat',
  },
  {
    id: 2,
    src: '/images/gallery/gallery-02.jpg',
    category: 'arena',
    title: 'Maha-Host Rajesh Hamal on Set',
    caption: 'Nepal’s premier superstar briefing the 16 finalists before their high-altitude field trial.',
    location: 'Main Arena Stage',
  },
  {
    id: 3,
    src: '/images/gallery/gallery-03.jpg',
    category: 'arena',
    title: 'Terrace Ridges of Parbat',
    caption: 'Cinematic wide of Rajesh Hamal traversing the terraced cornfields during location filming.',
    location: 'Parbat Highlands',
  },
  {
    id: 4,
    src: '/images/gallery/gallery-04.jpg',
    category: 'tasks',
    title: 'Apiary Gauntlet: Hive Management',
    caption: 'Contestants evaluated on live honeybee frame inspection, pest detection, and extraction under protective gear.',
    location: 'Apiary Task Site',
  },
  {
    id: 5,
    src: '/images/gallery/gallery-05.jpg',
    category: 'tasks',
    title: 'The Scarecrow Parable',
    caption: 'A test of indigenous agronomic storytelling, natural pest deterrents, and strategic field layout.',
    location: 'Main Arena',
  },
  {
    id: 6,
    src: '/images/gallery/gallery-06.jpg',
    category: 'arena',
    title: 'The Fire Council: Night Deliberations',
    caption: 'Evening elimination sessions illuminated by bonfire and monitored live by technical judges.',
    location: 'Campfire Arena Grounds',
  },
  {
    id: 7,
    src: '/images/gallery/gallery-07.jpg',
    category: 'tasks',
    title: 'Lake Basin Livestock Challenge',
    caption: 'Pastoral herd management challenge conducted adjacent to the Indrasarowar lake reservoir.',
    location: 'Kulekhani Basin',
  },
  {
    id: 8,
    src: '/images/gallery/gallery-08.jpg',
    category: 'tasks',
    title: 'Tapari Leaf Weaving Ritual',
    caption: 'Preserving ancestral heritage: contestants weave organic Sal leaf plates judged by village grandmothers.',
    location: 'Cultural Pavilion',
  },
  {
    id: 9,
    src: '/images/gallery/gallery-09.jpg',
    category: 'tasks',
    title: 'Mechanized Tillage Sprint',
    caption: 'Graduate scientist handling a diesel power tiller across difficult uncultivated clay soil.',
    location: 'Field Trial Lot B',
  },
  {
    id: 10,
    src: '/images/gallery/gallery-10.jpg',
    category: 'tasks',
    title: 'Farm Management: Soil Chem & Bio-Inputs',
    caption: 'Farmers and scientists formulating organic Jeevamrutha and measuring nutrient density.',
    location: 'Agronomy Laboratory',
  },
  {
    id: 11,
    src: '/images/gallery/gallery-11.jpg',
    category: 'tasks',
    title: 'Value Addition: Mushroom Cultivation',
    caption: 'Post-harvest processing, sterilization, spawn inoculation, and retail shelf packaging under time pressure.',
    location: 'Processing Unit',
  },
  {
    id: 12,
    src: '/images/gallery/gallery-12.jpg',
    category: 'ceremony',
    title: 'International Bilateral Round in Bihar',
    caption: 'Contestants escorted on the red carpet at an Indian agricultural university in Bihar.',
    location: 'Bihar, India',
  },
  {
    id: 13,
    src: '/images/gallery/gallery-13.jpg',
    category: 'ceremony',
    title: 'The Ministerial Vision Dialogue',
    caption: 'Finalists presenting the 77-District Prosperity Charter to the Minister of Agriculture.',
    location: 'Ministry Headquarters, Kathmandu',
  },
  {
    id: 14,
    src: '/images/gallery/gallery-14.jpg',
    category: 'ceremony',
    title: 'The Soil Tika Coronation',
    caption: 'Crowning the Season One champions using sanctified soil brought by contestants from all 77 districts.',
    location: 'Grand Finale Amphitheater',
  },
];

// All 47 Archive Photos extracted directly from the project documentary
const ALL_ARCHIVE_PHOTOS: GalleryItem[] = [
  { id: 101, src: '/images/all-photos/pdf-photo-000.jpg', category: 'archive', title: 'RAW Official Insignia', caption: 'Revolutionary Agriculture War trademark identity and branding.', location: 'Official Media' },
  { id: 102, src: '/images/all-photos/pdf-photo-002.jpg', category: 'archive', title: 'Creator Shailesh Kandel Kshetri', caption: 'Founder and executive producer of RAW in executive portrait.', location: 'Production Office' },
  { id: 103, src: '/images/all-photos/pdf-photo-004.jpg', category: 'archive', title: 'Agritainment Philosophy Pitch', caption: 'Concept visualization of bringing agriculture to primetime television.', location: 'Development Deck' },
  { id: 104, src: '/images/all-photos/pdf-photo-006.jpg', category: 'arena', title: 'Circular Arena Architecture', caption: 'Full aerial view of the straw-stack amphitheater set in the hills.', location: 'Central Hill Arena' },
  { id: 105, src: '/images/all-photos/pdf-photo-007.jpg', category: 'arena', title: 'Arena Broadcast Pavilion', caption: 'Judges review booth and technical monitors on site.', location: 'Set Periphery' },
  { id: 106, src: '/images/all-photos/pdf-photo-008.jpg', category: 'arena', title: 'Rajesh Hamal Addressing Finalists', caption: 'Superstar Maha-Host briefing contestants during elimination countdown.', location: 'Main Stage' },
  { id: 107, src: '/images/all-photos/pdf-photo-009.jpg', category: 'arena', title: 'Hillside Arena at Sunset', caption: 'Golden hour panorama overlooking the terraced arena and valley.', location: 'Parbat Highlands' },
  { id: 108, src: '/images/all-photos/pdf-photo-010.jpg', category: 'arena', title: 'Rajesh Hamal on High Hill', caption: 'Iconic wide portrait of Maha-Host Rajesh Hamal surveying the farmlands.', location: 'Hillcrest Viewpoint' },
  { id: 109, src: '/images/all-photos/pdf-photo-011.jpg', category: 'tasks', title: 'Harvest Preparation Sprint', caption: 'Contestants preparing traditional harvesting implements for speed trial.', location: 'Field Lot A' },
  { id: 110, src: '/images/all-photos/pdf-photo-012.jpg', category: 'arena', title: 'Traversing the Terraced Crops', caption: 'Cinematic tracking shot of host traversing hillside terraces.', location: 'Parbat Escarpment' },
  { id: 111, src: '/images/all-photos/pdf-photo-013.jpg', category: 'tasks', title: 'Paddy & Grain Processing Task', caption: 'Separating chaff from grain using traditional and manual winnowing.', location: 'Threshing Ground' },
  { id: 112, src: '/images/all-photos/pdf-photo-014.jpg', category: 'tasks', title: 'Live Apiary Hive Inspection', caption: 'Graduate scientist inspecting queen bee cells and honey production.', location: 'Hill Apiary' },
  { id: 113, src: '/images/all-photos/pdf-photo-015.jpg', category: 'tasks', title: 'Precision Irrigation Layout', caption: 'Designing gravity-fed drip irrigation with minimal water waste.', location: 'Field Lot C' },
  { id: 114, src: '/images/all-photos/pdf-photo-016.jpg', category: 'tasks', title: 'Indigenous Scarecrow Construction', caption: 'Crafting bio-deterrents and traditional bird scaring systems.', location: 'Main Arena Ground' },
  { id: 115, src: '/images/all-photos/pdf-photo-017.jpg', category: 'arena', title: 'Campfire Deliberation Chamber', caption: 'Judges and contestants deliberating under the stars around a woodfire.', location: 'Campfire Arena' },
  { id: 116, src: '/images/all-photos/pdf-photo-018.jpg', category: 'arena', title: 'Night Arena Floodlights', caption: 'Full night illumination of the timber arena during live taping.', location: 'Main Arena' },
  { id: 117, src: '/images/all-photos/pdf-photo-019.jpg', category: 'tasks', title: 'Indrasarowar Pastoral Challenge', caption: 'Cattle navigation and livestock health diagnosis near the reservoir.', location: 'Indrasarowar Basin' },
  { id: 118, src: '/images/all-photos/pdf-photo-020.jpg', category: 'tasks', title: 'Soil Compaction & Preparation', caption: 'Farmers testing moisture saturation and preparing seed beds.', location: 'Trial Sector 4' },
  { id: 119, src: '/images/all-photos/pdf-photo-021.jpg', category: 'ceremony', title: 'School Outreach: 103+ Schools', caption: 'Contestants engaging secondary students on the dignity of agriculture.', location: 'Community School' },
  { id: 120, src: '/images/all-photos/pdf-photo-022.jpg', category: 'tasks', title: 'Organic Bio-Pesticide Concoction', caption: 'Mixing neem extract, cow urine, and botanicals under lab standards.', location: 'Bio-Input Shed' },
  { id: 121, src: '/images/all-photos/pdf-photo-023.jpg', category: 'tasks', title: 'Ancestral Tapari Sal Leaf Weaving', caption: 'Intricate stitching of biodegradable leaf plates tested for durability.', location: 'Heritage Tent' },
  { id: 122, src: '/images/all-photos/pdf-photo-024.jpg', category: 'tasks', title: 'Seed Germination Diagnostic', caption: 'Contestants identifying seed varieties and purity ratios blindfolded.', location: 'Lab Desk' },
  { id: 123, src: '/images/all-photos/pdf-photo-025.jpg', category: 'tasks', title: 'Diesel Power Tiller Maneuvering', caption: 'Maneuvering high-horsepower machinery across rocky terraced slopes.', location: 'Hill Terrace B' },
  { id: 124, src: '/images/all-photos/pdf-photo-026.jpg', category: 'tasks', title: 'Post-Harvest Sorting & Grading', caption: 'Strict export-quality sorting of tomatoes and seasonal greens.', location: 'Sorting Bay' },
  { id: 125, src: '/images/all-photos/pdf-photo-027.jpg', category: 'tasks', title: 'The Professional Farmers on Set', caption: 'Cohort of experienced working farmers representing Nepal’s districts.', location: 'Studio Lineup' },
  { id: 126, src: '/images/all-photos/pdf-photo-028.jpg', category: 'tasks', title: 'The Agriculture Graduates on Set', caption: 'Bachelor’s-level agricultural scientists lined up for the challenge.', location: 'Studio Lineup' },
  { id: 127, src: '/images/all-photos/pdf-photo-029.jpg', category: 'ceremony', title: 'The Technical Judging Bench', caption: 'Dr. Yogendra Kumar Karki and subject experts tabulating scores.', location: 'Scoring Bench' },
  { id: 128, src: '/images/all-photos/pdf-photo-030.jpg', category: 'ceremony', title: 'Chief Judge Dr. Yogendra Karki', caption: 'Former Ministry Secretary providing technical evaluation of yields.', location: 'Judges Bench' },
  { id: 129, src: '/images/all-photos/pdf-photo-031.jpg', category: 'ceremony', title: 'Ministerial Vision Presentation', caption: 'Handing the 77-District Agricultural Prosperity Book to the Minister.', location: 'Ministry of Agriculture' },
  { id: 130, src: '/images/all-photos/pdf-photo-032.jpg', category: 'ceremony', title: 'Youth Climate Dialogue', caption: 'Panel discussion on regenerative farming and climate resilience.', location: 'Conference Hall' },
  { id: 131, src: '/images/all-photos/pdf-photo-033.jpg', category: 'tasks', title: 'Mushroom Spore Inoculation', caption: 'Oyster mushroom cultivation technique demonstrated live.', location: 'Sterile Chamber' },
  { id: 132, src: '/images/all-photos/pdf-photo-034.jpg', category: 'tasks', title: 'Traditional Grain Silo Storage', caption: 'Constructing pest-resistant indigenous grain storage bins.', location: 'Village Set' },
  { id: 133, src: '/images/all-photos/pdf-photo-035.jpg', category: 'ceremony', title: 'One Tree One Vote Sapling Drive', caption: 'Citizen voting through verified perennial tree planting campaign.', location: 'Community Forest' },
  { id: 134, src: '/images/all-photos/pdf-photo-036.jpg', category: 'ceremony', title: 'Community Planting Mobilization', caption: 'Volunteers and supporters planting fruit-bearing saplings across districts.', location: 'Hillside Grove' },
  { id: 135, src: '/images/all-photos/pdf-photo-037.jpg', category: 'ceremony', title: 'Tree Verification Field Audit', caption: 'Geotagging and photographic auditing of planted trees for voting tally.', location: 'District 42' },
  { id: 136, src: '/images/all-photos/pdf-photo-038.jpg', category: 'ceremony', title: 'Climate Award Deliberation', caption: 'Calculating carbon offset impact to select the Climate Award winner.', location: 'Audit Center' },
  { id: 137, src: '/images/all-photos/pdf-photo-039.jpg', category: 'ceremony', title: 'Bilateral Delegation to India', caption: 'RAW finalists crossing the border to represent Nepal’s agrarian innovators.', location: 'Nepal-India Border' },
  { id: 138, src: '/images/all-photos/pdf-photo-040.jpg', category: 'ceremony', title: 'Bihar Agricultural University Reception', caption: 'Faculty and international researchers welcoming RAW contestants in Bihar.', location: 'Bihar, India' },
  { id: 139, src: '/images/all-photos/pdf-photo-041.jpg', category: 'ceremony', title: 'International Innovation Symposium', caption: 'Presenting Nepalese mountain farm techniques to international delegates.', location: 'University Auditorium' },
  { id: 140, src: '/images/all-photos/pdf-photo-042.jpg', category: 'arena', title: 'Rajesh Hamal Grand Finale Speech', caption: 'Maha-Host opening the broadcast of the season coronation.', location: 'Finale Amphitheater' },
  { id: 141, src: '/images/all-photos/pdf-photo-043.jpg', category: 'ceremony', title: 'Farmer Champion Laxman K.C.', caption: 'Laxman K.C. hoisted in celebration as Season One Farmer Champion.', location: 'Victory Podium' },
  { id: 142, src: '/images/all-photos/pdf-photo-044.jpg', category: 'ceremony', title: 'Graduate Champion Samriddha', caption: 'Samriddha Bhantana celebrating victory in the graduate scientist tier.', location: 'Victory Podium' },
  { id: 143, src: '/images/all-photos/pdf-photo-045.jpg', category: 'ceremony', title: 'The Grand Finale Stage', caption: 'Pyrotechnics and trophy presentation in front of live spectators.', location: 'Grand Finale Set' },
  { id: 144, src: '/images/all-photos/pdf-photo-046.jpg', category: 'ceremony', title: 'The 77-District Soil Coronation', caption: 'Sacred soil from all 77 districts anointed on the winners as tika.', location: 'Center Stage' },
  { id: 145, src: '/images/all-photos/pdf-photo-047.jpg', category: 'ceremony', title: 'Champions & Judges Congratulation', caption: 'Ministry officials and judges awarding the grand enterprise grants.', location: 'Podium Area' },
  { id: 146, src: '/images/all-photos/pdf-photo-048.jpg', category: 'ceremony', title: 'All Season One Finalists Group', caption: 'All 16 finalists united on stage after 21 broadcast episodes.', location: 'Grand Finale Set' },
  { id: 147, src: '/images/all-photos/pdf-photo-049.jpg', category: 'archive', title: 'Official RAW Broadcast Credits', caption: 'Production insignia and international broadcast partners acknowledgement.', location: 'Media Deck' },
];

// Published Scientific Sequestration Timeline Data for the 289,973 Verified Trees
// Backed by IPCC (2006/2019 Refinement, Vol 4 AFOLU Ch 5), ICIMOD Nepal agroforestry studies, & FAO
interface TimelineStage {
  year: number;
  label: string;
  stageName: string;
  annualRatePerTreeKg: number;
  annualCO2Tons: number;
  cumulativeCO2Tons: number;
  cumulativeSoilCarbonTons: number;
  erosionSavedTons: number;
  description: string;
  publishedSource: string;
}

const SEQUESTRATION_TIMELINE: TimelineStage[] = [
  {
    year: 1,
    label: 'Year 1',
    stageName: 'Root Establishment & Early Sapling Phase',
    annualRatePerTreeKg: 6.5,
    annualCO2Tons: 1885,
    cumulativeCO2Tons: 1885,
    cumulativeSoilCarbonTons: 260,
    erosionSavedTons: 8500,
    description: 'Initial taproot penetration and mycorrhizal colonization in mountain soils. Trees invest energy in establishing root architecture and soil stabilization.',
    publishedSource: 'IPCC Guidelines for National Greenhouse Gas Inventories (2006), Vol. 4 (AFOLU), Ch. 5: Agroforestry Perennial Systems; FAO Forest Carbon Accounting.'
  },
  {
    year: 5,
    label: 'Year 5',
    stageName: 'Juvenile Canopy Expansion & Early Fruit Yield',
    annualRatePerTreeKg: 16.0,
    annualCO2Tons: 4640,
    cumulativeCO2Tons: 15220,
    cumulativeSoilCarbonTons: 1680,
    erosionSavedTons: 22000,
    description: 'Rapid leaf area index (LAI) expansion across fruit-bearing varieties (mandarin, apple, walnut). Leaf litterfall begins active organic mulch deposition.',
    publishedSource: 'ICIMOD Agroforestry Carbon & Soil Organic Matter Field Trials (Godavari, Nepal): 2.65 t C/ha/yr accrual rate; Penn State & CIRAD Agroforestry Synthesis (+34% SOC).'
  },
  {
    year: 10,
    label: 'Year 10',
    stageName: 'Young Mature Bearing Phase & Dense Rhizosphere',
    annualRatePerTreeKg: 22.0,
    annualCO2Tons: 6380,
    cumulativeCO2Tons: 52800,
    cumulativeSoilCarbonTons: 4450,
    erosionSavedTons: 34000,
    description: 'Peak fruit and biomass productivity. Dense root network interlocks mountain terrace slopes, with high root exudates feeding soil microbial carbon biomass.',
    publishedSource: 'CABI Digital Library / Nepal Agroforestry SOC Stocks (25.67 t/ha baseline); IPCC 2019 Refinement to National Inventories (Agroforestry Tree Biomass Growth Constants).'
  },
  {
    year: 20,
    label: 'Year 20',
    stageName: 'Mature Canopy & Climax Soil Carbon Equilibrium',
    annualRatePerTreeKg: 28.0,
    annualCO2Tons: 8120,
    cumulativeCO2Tons: 135400,
    cumulativeSoilCarbonTons: 11200,
    erosionSavedTons: 41000,
    description: 'Extensive humus layer formed (0–30 cm topsoil profile). Massive carbon reservoir sequestered in both above-ground trunk biomass and perennial deep-root carbon pools.',
    publishedSource: 'ResearchGate / Journal of Soil Science & Agroforestry (Temperate & Subtropical Alley-Cropping Biomass Accumulation: 40–80 Mg C/ha after 20–25 years).'
  },
  {
    year: 30,
    label: 'Year 30',
    stageName: 'Long-Term Ecological Climax Stock',
    annualRatePerTreeKg: 30.0,
    annualCO2Tons: 8700,
    cumulativeCO2Tons: 234000,
    cumulativeSoilCarbonTons: 18400,
    erosionSavedTons: 46000,
    description: 'Over 234,000 metric tons of verified permanent CO₂ drawdown achieved—equating to over 0.8 metric tons of CO₂ permanently sequestered per planted tree.',
    publishedSource: 'World Agroforestry Centre (ICRAF) & Community Carbon Trees Long-term Sequestration Standards (Average 1 ton CO₂/tree over 25–30 year perennial lifespan).'
  }
];

// Global plantation simulation presets & calculation models
interface GlobalPreset {
  label: string;
  value: number;
  badge: string;
  context: string;
}

const GLOBAL_PLANTATION_PRESETS: GlobalPreset[] = [
  { label: '289,973', value: 289973, badge: 'Season 1 Verified', context: 'Actual RAW verified tree ballot field result' },
  { label: '1 Million', value: 1000000, badge: 'District Watershed', context: 'Regenerating a full Himalayan district watershed' },
  { label: '10 Million', value: 10000000, badge: 'National Movement', context: 'Large-scale national agroforestry transformation' },
  { label: '100 Million', value: 100000000, badge: 'Himalayan Ridge', context: 'Regional trans-Himalayan ecological bio-shield' },
  { label: '1 Billion', value: 1000000000, badge: 'Continental Accord', context: 'Continental coalition of farmer reality shows' },
  { label: '8 Billion', value: 8000000000, badge: '1 Tree per Human', context: 'Every living person on Earth plants/votes 1 tree' },
  { label: '1 Trillion', value: 1000000000000, badge: 'Max Planetary Cap', context: 'Total global non-cropland restoration limit (Science 2019)' },
];

// Helper to format large quantities cleanly with metric units
function formatSmartUnit(val: number, unitSingular: string = 'Ton', unitPlural: string = 'Tons'): { formatted: string; unit: string } {
  if (val >= 1e12) {
    return { formatted: (val / 1e12).toFixed(2), unit: `Trillion ${unitPlural}` };
  }
  if (val >= 1e9) {
    return { formatted: (val / 1e9).toFixed(2), unit: `Billion ${unitPlural} (Gigatons/Gt)` };
  }
  if (val >= 1e6) {
    return { formatted: (val / 1e6).toFixed(2), unit: `Million ${unitPlural} (Megatons/Mt)` };
  }
  if (val >= 1e3) {
    return { formatted: Math.round(val).toLocaleString(), unit: unitPlural };
  }
  return { formatted: (Math.round(val * 10) / 10).toLocaleString(), unit: val === 1 ? unitSingular : unitPlural };
}

// Compute multi-year metrics for any tree count based on published peer-reviewed benchmarks
function computePlantationMetrics(trees: number, horizonYears: number = 30) {
  const safeTrees = Math.max(1, Number.isFinite(trees) ? trees : 1);
  
  // Standard agroforestry planting density: 500 trees / hectare (~200 trees / acre)
  const hectaresRestored = safeTrees / 500;
  const acresRestored = hectaresRestored * 2.47105;
  const sqKmRestored = hectaresRestored / 100;

  // Sequestration curves based on IPCC AFOLU Ch 5 & ICIMOD:
  // Growth curve milestones (kg CO2 per tree per year):
  // Yr 1: 6.5 kg | Yr 5: 16.0 kg | Yr 10: 22.0 kg | Yr 20: 28.0 kg | Yr 30: 30.0 kg
  // Cumulative drawdown per tree up to year:
  // Yr 1: 6.5 kg | Yr 5: 52.5 kg | Yr 10: 182.1 kg | Yr 20: 467.0 kg | Yr 30: 807.0 kg (~0.807 metric tons)
  let cumulativeCO2PerTreeKg = 0;
  let annualRatePerTreeKg = 0;

  if (horizonYears <= 1) {
    annualRatePerTreeKg = 6.5;
    cumulativeCO2PerTreeKg = 6.5;
  } else if (horizonYears <= 5) {
    annualRatePerTreeKg = 6.5 + ((16.0 - 6.5) * (horizonYears - 1)) / 4;
    cumulativeCO2PerTreeKg = 6.5 + ((52.5 - 6.5) * (horizonYears - 1)) / 4;
  } else if (horizonYears <= 10) {
    annualRatePerTreeKg = 16.0 + ((22.0 - 16.0) * (horizonYears - 5)) / 5;
    cumulativeCO2PerTreeKg = 52.5 + ((182.1 - 52.5) * (horizonYears - 5)) / 5;
  } else if (horizonYears <= 20) {
    annualRatePerTreeKg = 22.0 + ((28.0 - 22.0) * (horizonYears - 10)) / 10;
    cumulativeCO2PerTreeKg = 182.1 + ((467.0 - 182.1) * (horizonYears - 10)) / 10;
  } else {
    annualRatePerTreeKg = 28.0 + ((30.0 - 28.0) * Math.min(10, horizonYears - 20)) / 10;
    cumulativeCO2PerTreeKg = 467.0 + ((807.0 - 467.0) * Math.min(10, horizonYears - 20)) / 10;
  }

  const annualCO2Tons = (safeTrees * annualRatePerTreeKg) / 1000;
  const cumulativeCO2Tons = (safeTrees * cumulativeCO2PerTreeKg) / 1000;

  // Soil Organic Carbon (SOC) accrual in topsoil (0-30 cm): 0.8 metric tons C / ha / year (IPCC/CIRAD)
  const cumulativeSoilCarbonTons = hectaresRestored * 0.8 * horizonYears;

  // Annual topsoil saved from monsoon slope runoff: 40 metric tons / ha / year (ICIMOD)
  const annualErosionSavedTons = hectaresRestored * 40;
  const cumulativeErosionSavedTons = annualErosionSavedTons * horizonYears;

  // Food & Nutrition security:
  // >60% are perennial fruit/nut trees (mandarins, apples, walnuts, moringa, fodder legumes)
  // At maturity, yields 45 kg fruit/nuts/biomass per tree annually (Yr 5 onwards)
  const productiveTrees = safeTrees * 0.6;
  const bearingYears = Math.max(0, horizonYears - 4);
  const annualFoodKg = productiveTrees * (horizonYears >= 5 ? 45 : (horizonYears >= 3 ? 15 : 0));
  const annualFoodTons = annualFoodKg / 1000;
  const cumulativeFoodTons = (productiveTrees * 45 * bearingYears) / 1000;

  // Global Context:
  // Global annual fossil emissions: ~40.0 Gigatons (40 Billion metric tons) CO2/year
  // Planetary Degraded Land Capable of Restoration: 0.9–2.0 Billion Hectares (1.2 Trillion trees)
  const globalAnnualEmissionsTons = 40_000_000_000; // 40 Gt
  const annualEmissionsOffsetPercent = (annualCO2Tons / globalAnnualEmissionsTons) * 100;
  const globalDegradedLandHectares = 900_000_000; // 900M ha identified by Science (Bastin et al. 2019)
  const globalLandSharePercent = Math.min(100, (hectaresRestored / globalDegradedLandHectares) * 100);

  return {
    safeTrees,
    horizonYears,
    hectaresRestored,
    acresRestored,
    sqKmRestored,
    annualRatePerTreeKg,
    annualCO2Tons,
    cumulativeCO2Tons,
    cumulativeSoilCarbonTons,
    annualErosionSavedTons,
    cumulativeErosionSavedTons,
    annualFoodTons,
    cumulativeFoodTons,
    annualEmissionsOffsetPercent,
    globalLandSharePercent,
  };
}

// 7 Agricultural Provinces / Agro-Climatic Regions of Nepal
const NEPAL_AGRO_REGIONS = [
  {
    id: 'gandaki',
    name: 'Gandaki Province',
    zone: 'Parbat Highlands & Annapurna Terraces (Birthplace of RAW)',
    elevation: '100m – 8,167m',
    soil: 'Terraced Slate Loam & Mountain Brown Humus',
    staples: 'Millet, Highland Maize, Parbat Honey, Orange/Citrus, Buckwheat',
    season1Contestants: '289 Applicants · 3 Finalists',
    climateChallenge: 'Terrace soil runoff, pre-monsoon hail volatility, rural youth out-migration',
    rawHighlight: 'Site of the circular straw arena, power-tiller sprints, and Sal tapari weaving.'
  },
  {
    id: 'koshi',
    name: 'Koshi Province',
    zone: 'Eastern Highlands & Cardamom Valleys',
    elevation: '60m – 8,848m',
    soil: 'Organic Acidic Humus Loam & Mountain Brown',
    staples: 'Large Cardamom, Orthodox Black Tea, Ginger, Kiwi, Alpine Potato',
    season1Contestants: '187 Applicants · 3 Finalists',
    climateChallenge: 'Glacial outburst flood hazards, erratic pre-monsoon precipitation',
    rawHighlight: 'Demonstrated zero-emission organic cardamom curing and soil biochar fortification.'
  },
  {
    id: 'madhesh',
    name: 'Madhesh Province',
    zone: 'Southern Granary & Terai Alluvial Basin',
    elevation: '60m – 600m',
    soil: 'Deep Silt Loam & Fertile River Alluvium',
    staples: 'Basmati Paddy, Sugarcane, Mango, Pulses, Commercial Dairy',
    season1Contestants: '243 Applicants · 2 Finalists',
    climateChallenge: 'Groundwater depletion, intense summer heatwaves, cross-border inundation',
    rawHighlight: 'Precision laser land-leveling and gravity drip irrigation demonstrations.'
  },
  {
    id: 'bagmati',
    name: 'Bagmati Province',
    zone: 'Central Hills & Agro-Enterprise Corridor',
    elevation: '140m – 7,227m',
    soil: 'Red Clay Loam & River Sandy Loam',
    staples: 'Maize, Cold-Season Greens, Mushroom Spawn, Poultry, Cut Flowers',
    season1Contestants: '321 Applicants · 4 Finalists',
    climateChallenge: 'Urban encroachment on prime cropland, high chemical dependency',
    rawHighlight: 'High-density vertical polyhouse and mushroom mycelium spawn trials.'
  },
  {
    id: 'lumbini',
    name: 'Lumbini Province',
    zone: 'Mid-Western Fertile Plains & Chure Escarpment',
    elevation: '100m – 3,682m',
    soil: 'Alluvial Loam & Chure Sandy Gravel',
    staples: 'Wheat, Mustard Seed, Lentils, Bananas, Commercial Maize',
    season1Contestants: '264 Applicants · 2 Finalists',
    climateChallenge: 'Chure watershed degradation, unseasonal early-winter droughts',
    rawHighlight: 'Zero-till wheat seeding trials and organic mustard seed pest mitigation.'
  },
  {
    id: 'karnali',
    name: 'Karnali Province',
    zone: 'High Mountain Organic Plateau & Jumla Basin',
    elevation: '350m – 7,738m',
    soil: 'Glacial Alpine & High-Altitude Organic Clay',
    staples: 'Jumla Marsi Red Rice, Organic Mountain Apple, Beans, Walnut, Wild Herbs',
    season1Contestants: '168 Applicants · 1 Finalist',
    climateChallenge: 'Prolonged winter freezing, logistics bottlenecks, rainfall variance',
    rawHighlight: 'Ancestral Marsi red rice cold-hardiness and traditional seed preservation techniques.'
  },
  {
    id: 'sudurpashchim',
    name: 'Sudurpashchim Province',
    zone: 'Far-Western Border Basin & Sub-Alpine Ridges',
    elevation: '109m – 7,132m',
    soil: 'Sub-Tropical Alluvial & Hill Sandy Clay',
    staples: 'Paddy, Wheat, Wild Herbs, Citrus, Livestock Breeding',
    season1Contestants: '170 Applicants · 1 Finalist',
    climateChallenge: 'Heavy monsoon cloudbursts, severe shortage of post-harvest cold storage',
    rawHighlight: 'Community seed banking and natural riverbed solar-pump irrigation setups.'
  }
];

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeFormatTab, setActiveFormatTab] = useState<'farmers' | 'graduates' | 'pairing'>('farmers');
  const [galleryMode, setGalleryMode] = useState<'curated' | 'archive'>('curated');
  const [galleryFilter, setGalleryFilter] = useState<'all' | 'arena' | 'tasks' | 'ceremony'>('all');
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);
  const [lightboxList, setLightboxList] = useState<GalleryItem[]>(CURATED_GALLERY);
  
  // One Tree One Vote Selected Timeline Stage (default: Year 10)
  const [selectedYearIndex, setSelectedYearIndex] = useState(2); // Year 10
  const activeTimeline = SEQUESTRATION_TIMELINE[selectedYearIndex];

  // Custom Any-Number Tree Plantation Simulator State
  const [customTreeCount, setCustomTreeCount] = useState<number>(289973);
  const [customInputStr, setCustomInputStr] = useState<string>('289,973');
  const [customHorizonYears, setCustomHorizonYears] = useState<number>(30);
  const [simulatorTab, setSimulatorTab] = useState<'calculator' | 'global_climate' | 'food_crisis'>('calculator');

  // Handle custom tree input change safely
  const handleTreeInputChange = (val: string) => {
    // Strip non-digits
    const cleanDigits = val.replace(/[^0-9]/g, '');
    if (!cleanDigits) {
      setCustomInputStr('');
      setCustomTreeCount(0);
      return;
    }
    const parsed = parseInt(cleanDigits, 10);
    // Upper safety bound: 10 Trillion trees
    const capped = Math.min(parsed, 10_000_000_000_000);
    setCustomTreeCount(capped);
    setCustomInputStr(capped.toLocaleString());
  };

  const handleSelectPreset = (presetValue: number) => {
    setCustomTreeCount(presetValue);
    setCustomInputStr(presetValue.toLocaleString());
  };

  // Compute live metrics for the user's input
  const simMetrics = computePlantationMetrics(customTreeCount, customHorizonYears);

  // Interactive Region State
  const [selectedRegionId, setSelectedRegionId] = useState('gandaki');
  const activeRegion = NEPAL_AGRO_REGIONS.find((r) => r.id === selectedRegionId) || NEPAL_AGRO_REGIONS[0];

  // Contact Form state
  const [formName, setFormName] = useState('');
  const [formOrg, setFormOrg] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formCountry, setFormCountry] = useState('');
  const [formInterest, setFormInterest] = useState('General Inquiry');
  const [formMsg, setFormMsg] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Active items based on current gallery mode and filter
  const currentDataset = galleryMode === 'curated' ? CURATED_GALLERY : ALL_ARCHIVE_PHOTOS;
  const filteredGallery = galleryFilter === 'all' 
    ? currentDataset 
    : currentDataset.filter((item) => item.category === galleryFilter);

  // Handle keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeLightboxIndex !== null) {
        if (e.key === 'Escape') {
          setActiveLightboxIndex(null);
        } else if (e.key === 'ArrowRight') {
          setActiveLightboxIndex((prev) => (prev !== null ? (prev + 1) % lightboxList.length : 0));
        } else if (e.key === 'ArrowLeft') {
          setActiveLightboxIndex((prev) => (prev !== null ? (prev - 1 + lightboxList.length) % lightboxList.length : 0));
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeLightboxIndex, lightboxList]);

  const openLightbox = (index: number, list: GalleryItem[]) => {
    setLightboxList(list);
    setActiveLightboxIndex(index);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    const bodyText = `Name: ${formName}\nEmail: ${formEmail}\nOrganization: ${formOrg}\nCountry: ${formCountry}\nTopic: ${formInterest}\n\nMessage:\n${formMsg}`;
    const mailtoUrl = `mailto:hello@rawworld.net?subject=${encodeURIComponent('RAW Inquiry – ' + formInterest)}&body=${encodeURIComponent(bodyText)}`;
    
    setTimeout(() => {
      window.location.href = mailtoUrl;
    }, 600);
  };

  // Safe fallback for image loading
  const handleImgError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.currentTarget;
    const currentSrc = target.getAttribute('src') || '';
    if (!target.dataset.tried) {
      target.dataset.tried = '1';
      if (currentSrc.startsWith('/')) {
        target.src = currentSrc.substring(1);
      } else {
        target.src = '/' + currentSrc;
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#060504] text-[#f5ede0] selection:bg-[#d4a234] selection:text-black">
      
      {/* Top Editorial Announcement Bar */}
      <div className="bg-[#080604] border-b border-[#d4a234]/20 py-2.5 px-6 text-xs">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-[#dcd0bc] overflow-hidden whitespace-nowrap text-[11px] font-mono tracking-wide">
            <span className="font-cinzel font-bold text-[#f3d482] tracking-[0.2em] uppercase">
              RAW
            </span>
            <span className="text-[#a39780] hidden sm:inline" aria-hidden="true">/</span>
            <span className="hidden sm:inline text-[#dcd0bc]">World’s First Agriculture Game Reality Show</span>
            <span className="text-[#a39780] hidden md:inline" aria-hidden="true">/</span>
            <span className="hidden md:inline text-emerald-400 font-semibold">289,973 Verified Trees Planted</span>
          </div>
          <div className="flex items-center gap-2 text-xs shrink-0">
            <a 
              href="#vote"
              className="text-[#f3d482] hover:text-white transition-colors flex items-center gap-1.5 font-medium underline decoration-[#d4a234]/40 underline-offset-4"
            >
              <Leaf className="w-3.5 h-3.5 text-emerald-400" />
              <span>Carbon & Soil Sequestration Intelligence</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navigation */}
      <header className="sticky top-0 z-40 bg-[#070605]/92 backdrop-blur-lg border-b border-[#d4a234]/18">
        <div className="max-w-7xl mx-auto px-6 h-22 flex items-center justify-between">
          
          {/* Brand Wordmark & Logo */}
          <a href="#top" className="flex items-center gap-4 shrink-0 group">
            <img 
              src="/images/raw-logo.png" 
              alt="RAW – Revolutionary Agriculture War" 
              onError={handleImgError}
              className="h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
            <div className="hidden lg:flex flex-col border-l border-[#d4a234]/25 pl-3.5">
              <span className="text-[11px] font-cinzel font-bold tracking-[0.25em] uppercase text-[#f3d482]">Revolutionary</span>
              <span className="text-[9px] font-cinzel tracking-[0.22em] uppercase text-[#a39780]">Agriculture War</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-xs font-cinzel uppercase tracking-[0.14em]">
            <a href="#concept" className="text-[#dcd0bc] hover:text-[#f3d482] transition-colors py-1">
              The Format
            </a>
            <a href="#vote" className="text-[#dcd0bc] hover:text-[#f3d482] transition-colors py-1 flex items-center gap-1.5 font-semibold text-[#f3d482]">
              <span>One Tree One Vote</span>
              <Leaf className="w-3.5 h-3.5 text-emerald-400" />
            </a>
            <a href="#regions" className="text-[#dcd0bc] hover:text-[#f3d482] transition-colors py-1">
              Sacred Soil
            </a>
            <a href="#champions" className="text-[#dcd0bc] hover:text-[#f3d482] transition-colors py-1">
              Laureates
            </a>
            <a href="#gallery" className="text-[#dcd0bc] hover:text-[#f3d482] transition-colors py-1">
              Archive (47)
            </a>
            <a href="#team" className="text-[#dcd0bc] hover:text-[#f3d482] transition-colors py-1">
              Leadership
            </a>
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a 
              href="#vote" 
              className="px-4 py-2 text-xs font-cinzel uppercase tracking-[0.12em] text-[#dcd0bc] hover:text-white border border-[#d4a234]/30 rounded-xs hover:border-[#f3d482] transition-colors cursor-pointer"
            >
              Carbon Engine
            </a>
            <a 
              href="#inquire" 
              className="px-5 py-2.5 text-xs font-cinzel uppercase tracking-[0.14em] text-[#0d0903] gold-btn rounded-xs shadow-md transition-all cursor-pointer font-bold"
            >
              Contact / Inquire
            </a>
          </div>

          {/* Mobile hamburger */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#dcd0bc] hover:text-white focus:outline-none cursor-pointer"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile dropdown menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-b border-[#d4a234]/20 bg-[#0c0a07] px-6 py-6 space-y-4">
            <a 
              href="#concept" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base text-[#dcd0bc] hover:text-[#f3d482]"
            >
              The Show & Duo Engine
            </a>
            <a 
              href="#vote" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-semibold text-emerald-400"
            >
              One Tree, One Vote (Carbon & Soil Data)
            </a>
            <a 
              href="#regions" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base text-[#dcd0bc] hover:text-[#f3d482]"
            >
              77-District Sacred Soil Map
            </a>
            <a 
              href="#champions" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base text-[#dcd0bc] hover:text-[#f3d482]"
            >
              Season Laureates & Real Impact
            </a>
            <a 
              href="#gallery" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base text-[#dcd0bc] hover:text-[#f3d482]"
            >
              Documentary Photo Archive (47)
            </a>
            <a 
              href="#team" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base text-[#dcd0bc] hover:text-[#f3d482]"
            >
              Executive Leadership
            </a>
            <div className="pt-4 flex flex-col gap-3">
              <a 
                href="#vote" 
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-2.5 text-xs font-semibold uppercase tracking-wider border border-emerald-500/40 text-emerald-400 rounded-sm"
              >
                Inspect 289,973 Trees Sequestration
              </a>
              <a 
                href="#inquire" 
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-3 text-sm font-semibold text-[#120d04] gold-btn rounded-sm"
              >
                Inquire with RAW
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section – Luminous, Ultra-Cinematic & Photo-Forward */}
      <section id="top" className="relative min-h-[95svh] flex items-end pt-28 pb-20 overflow-hidden">
        
        {/* Crisp Cinematic Mountain Terrace Photo */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/hero-terraces.jpg" 
            alt="Terraced Himalayan Hills of RAW set in Parbat" 
            onError={handleImgError}
            className="w-full h-full object-cover object-center scale-100"
          />
          {/* Subtle balanced gradient allowing the photography to shine while ensuring text legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#060504] via-[#060504]/65 to-black/30 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#060504]/95 via-[#060504]/55 to-transparent pointer-events-none" />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-3xl">
            
            {/* Editorial kicker */}
            <div className="flex flex-wrap items-center gap-2.5 text-xs font-cinzel font-semibold tracking-[0.2em] uppercase text-[#f3d482] mb-5">
              <span>World’s First Agritainment Reality Show</span>
              <span className="text-[#a39780]" aria-hidden="true">·</span>
              <span>21 Primetime Episodes</span>
              <span className="text-[#a39780]" aria-hidden="true">·</span>
              <span>77 Districts Represented</span>
            </div>

            {/* Prominent RAW Logo */}
            <img 
              src="/images/raw-logo.png" 
              alt="RAW – Revolutionary Agriculture War" 
              onError={handleImgError}
              className="w-full max-w-[320px] sm:max-w-[420px] h-auto object-contain mb-8 filter drop-shadow-[0_12px_32px_rgba(0,0,0,0.9)]"
            />

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold font-serif text-[#f5ede0] leading-[1.04] tracking-tight mb-6">
              Farmers are the heroes. <br />
              <span className="gold-foil-text font-serif">Now the world is watching.</span>
            </h1>

            <p className="text-lg sm:text-xl text-[#f0e6d6] max-w-2xl font-normal leading-relaxed mb-10 drop-shadow-md">
              The world’s first agriculture game reality show. Filmed across two full production years in Nepal’s high-altitude mountain terraces, RAW elevates generational farmers alongside agricultural scientists in front of a national audience.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a 
                href="#vote" 
                className="px-8 py-4 text-xs font-cinzel uppercase tracking-[0.14em] text-[#0d0903] gold-btn rounded-xs shadow-[0_4px_24px_rgba(212,162,52,0.35)] flex items-center gap-2.5 cursor-pointer font-bold"
              >
                <Leaf className="w-4 h-4 text-[#0d0903]" /> One Tree One Vote Data (289,973 Trees)
              </a>

              <a 
                href="#concept" 
                className="px-7 py-4 text-xs font-cinzel uppercase tracking-[0.14em] text-[#f5ede0] ghost-btn rounded-xs flex items-center gap-2 cursor-pointer backdrop-blur-sm font-semibold"
              >
                The Show & Arena <ChevronRight className="w-4 h-4 text-[#f3d482]" />
              </a>

              <a 
                href="#gallery" 
                className="px-5 py-4 text-xs font-cinzel uppercase tracking-[0.12em] text-[#f3d482] hover:text-white flex items-center gap-2 cursor-pointer font-medium"
              >
                <ImageIcon className="w-4 h-4" /> 47 Production Photos
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Verified Production Proof Bar */}
      <section className="bg-[#090705] border-y border-[#d4a234]/25 py-10 relative z-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
            
            <div className="p-4 bg-[#050403] border border-[#d4a234]/20 rounded-xs">
              <div className="text-3xl sm:text-4xl font-extrabold font-serif text-[#f3d482] tabular-nums">1,642</div>
              <div className="text-[10px] uppercase font-cinzel tracking-[0.14em] text-[#a39780] mt-1 font-semibold">Contestant Applicants</div>
            </div>

            <div className="p-4 bg-[#050403] border border-[#d4a234]/20 rounded-xs">
              <div className="text-3xl sm:text-4xl font-extrabold font-serif text-[#f3d482] tabular-nums">77</div>
              <div className="text-[10px] uppercase font-cinzel tracking-[0.14em] text-[#a39780] mt-1 font-semibold">Districts Represented</div>
            </div>

            <div className="p-4 bg-[#050403] border border-[#d4a234]/20 rounded-xs">
              <div className="text-3xl sm:text-4xl font-extrabold font-serif text-[#f3d482] tabular-nums">21</div>
              <div className="text-[10px] uppercase font-cinzel tracking-[0.14em] text-[#a39780] mt-1 font-semibold">Broadcast Episodes</div>
            </div>

            <div className="p-4 bg-[#050403] border border-emerald-500/30 rounded-xs">
              <div className="text-3xl sm:text-4xl font-extrabold font-serif text-emerald-400 tabular-nums">289,973</div>
              <div className="text-[10px] uppercase font-cinzel tracking-[0.14em] text-[#a39780] mt-1 font-semibold">Trees Planted as Votes</div>
            </div>

            <div className="p-4 bg-[#050403] border border-[#d4a234]/20 rounded-xs">
              <div className="text-3xl sm:text-4xl font-extrabold font-serif text-[#f3d482] tabular-nums">103+</div>
              <div className="text-[10px] uppercase font-cinzel tracking-[0.14em] text-[#a39780] mt-1 font-semibold">Schools Mobilized</div>
            </div>

            <div className="p-4 bg-[#050403] border border-emerald-500/30 rounded-xs">
              <div className="text-3xl sm:text-4xl font-extrabold font-serif text-emerald-400 tabular-nums">100%</div>
              <div className="text-[10px] uppercase font-cinzel tracking-[0.14em] text-[#a39780] mt-1 font-semibold">Biodegradable Arena</div>
            </div>

          </div>
        </div>
      </section>

      {/* THE FORMAT & CONTESTANT DUO ENGINE */}
      <section id="concept" className="py-24 max-w-7xl mx-auto px-6">
        
        {/* Split: Two Crises. One Arena. */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#d4a234] mb-3">
              <span>Format Genesis</span>
              <span aria-hidden="true">·</span>
              <span>The Agritainment Genre</span>
            </div>
            
            <h2 className="text-3xl sm:text-5xl font-extrabold font-serif text-[#f5ede0] leading-tight">
              Two crises. <br className="hidden sm:inline" />
              One arena.
            </h2>

            <p className="text-lg text-[#dcd0bc] mt-6 leading-relaxed">
              Arable farmland is degrading worldwide, youth are leaving productive soil for risky overseas manual labor, and climatic anomalies are devastating crop stability. RAW transforms that existential crisis into a primetime national competition the entire country rallies behind.
            </p>

            <p className="text-base text-[#a39780] mt-4 leading-relaxed">
              It is an entirely original genre—<strong>Agritainment</strong>—joining hands-on agriculture, youth entrepreneurship, and measurable climate action. Every episode is a rigorous technical test of field skill, soil science, indigenous knowledge, and real-world impact.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-8 pt-8 border-t border-[#d4a234]/20">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-[#d4a234] block mb-1">Production Scale</span>
                <p className="text-sm text-[#f5ede0] font-medium">2 Full Production Years in Nepal’s Mountain Terraces</p>
              </div>
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-[#d4a234] block mb-1">Set Architecture</span>
                <p className="text-sm text-[#f5ede0] font-medium">100% Biodegradable Timber & Straw Stack Arena</p>
              </div>
            </div>
          </div>

          {/* Aerial Arena Photo Frame */}
          <div className="relative">
            <div className="overflow-hidden rounded-sm border border-[#d4a234]/30 bg-[#0c0a07] shadow-2xl group cursor-pointer"
                 onClick={() => openLightbox(0, CURATED_GALLERY)}>
              <img 
                src="/images/set-aerial.jpg" 
                alt="Aerial view of the circular RAW set built from natural timber crates" 
                onError={handleImgError}
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="p-4 bg-[#0c0a07] border-t border-[#d4a234]/20 flex items-center justify-between text-xs text-[#a39780]">
                <span>Aerial view of the circular RAW arena atop Parbat hills</span>
                <span className="text-[#f3d482] flex items-center gap-1 font-medium">
                  <Maximize2 className="w-3.5 h-3.5" /> View Photo
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Format Pairing: Practical Wisdom meets Science */}
        <div className="mt-28">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#d4a234] mb-3">
              <span>The Contestant Pairing Engine</span>
              <span aria-hidden="true">·</span>
              <span>The Duo Dynamic</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-serif text-[#f5ede0]">
              Practical wisdom meets science.
            </h2>
            <p className="text-lg text-[#dcd0bc] mt-4 leading-relaxed">
              Professional generational farmers and university agriculture graduates were evaluated on their own disciplines, then paired into symbiotic teams. Neither could win alone.
            </p>
          </div>

          {/* Tab Selector */}
          <div className="flex items-center gap-2 mt-8 p-1 bg-[#0c0a07] border border-[#d4a234]/20 rounded-sm w-fit">
            <button 
              onClick={() => setActiveFormatTab('farmers')}
              className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-sm transition-all cursor-pointer ${
                activeFormatTab === 'farmers' ? 'bg-[#d4a234] text-black shadow-sm' : 'text-[#a39780] hover:text-[#f5ede0]'
              }`}
            >
              The Working Farmers
            </button>
            <button 
              onClick={() => setActiveFormatTab('graduates')}
              className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-sm transition-all cursor-pointer ${
                activeFormatTab === 'graduates' ? 'bg-[#d4a234] text-black shadow-sm' : 'text-[#a39780] hover:text-[#f5ede0]'
              }`}
            >
              The Science Graduates
            </button>
            <button 
              onClick={() => setActiveFormatTab('pairing')}
              className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-sm transition-all cursor-pointer ${
                activeFormatTab === 'pairing' ? 'bg-[#d4a234] text-black shadow-sm' : 'text-[#a39780] hover:text-[#f5ede0]'
              }`}
            >
              The Symbiotic Pairing
            </button>
          </div>

          {/* Duo Photo Cards */}
          <div className="grid md:grid-cols-2 gap-8 mt-8">
            
            {/* The Farmers Card */}
            <div className={`bg-[#0c0a07] border border-[#d4a234]/25 rounded-sm overflow-hidden flex flex-col justify-between transition-all duration-300 ${activeFormatTab === 'farmers' ? 'ring-2 ring-[#d4a234]' : 'opacity-90'}`}>
              <div>
                <div className="aspect-3/2 overflow-hidden relative cursor-pointer" onClick={() => openLightbox(24, ALL_ARCHIVE_PHOTOS)}>
                  <img 
                    src="/images/farmers-on-set.jpg" 
                    alt="Farmer contestants on set" 
                    onError={handleImgError}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-[#060504]/90 backdrop-blur-sm border border-[#d4a234]/30 text-[#f3d482] text-xs font-bold px-3 py-1 rounded-sm">
                    Generational Agronomists
                  </div>
                </div>
                <div className="p-6 sm:p-8">
                  <h3 className="text-2xl font-serif font-bold text-[#f3d482]">The Farmers</h3>
                  <p className="text-sm font-medium text-[#dcd0bc] mt-1">Judged on real working farms, by verified subject experts.</p>
                  <p className="text-sm text-[#a39780] mt-4 leading-relaxed">
                    Seasoned practitioners with decades of muscle memory in monsoon cycles, seed germination, livestock breeding, and clay soil tillage. They understand what textbooks cannot teach.
                  </p>
                  <ul className="mt-5 space-y-2 text-xs text-[#dcd0bc]">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#d4a234] shrink-0" /> Evaluated on crop yields and seasonal survival tactics
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#d4a234] shrink-0" /> Masters of traditional water channels and organic amendments
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* The Graduates Card */}
            <div className={`bg-[#0c0a07] border border-[#d4a234]/25 rounded-sm overflow-hidden flex flex-col justify-between transition-all duration-300 ${activeFormatTab === 'graduates' ? 'ring-2 ring-[#d4a234]' : 'opacity-90'}`}>
              <div>
                <div className="aspect-3/2 overflow-hidden relative cursor-pointer" onClick={() => openLightbox(25, ALL_ARCHIVE_PHOTOS)}>
                  <img 
                    src="/images/graduates-on-set.jpg" 
                    alt="Graduate contestants on set" 
                    onError={handleImgError}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-[#060504]/90 backdrop-blur-sm border border-[#d4a234]/30 text-[#f3d482] text-xs font-bold px-3 py-1 rounded-sm">
                    B.Sc. Agriculture Scientists
                  </div>
                </div>
                <div className="p-6 sm:p-8">
                  <h3 className="text-2xl font-serif font-bold text-[#f3d482]">The Graduates</h3>
                  <p className="text-sm font-medium text-[#dcd0bc] mt-1">Bachelor’s-level agriculture scientists, tested under primetime pressure.</p>
                  <p className="text-sm text-[#a39780] mt-4 leading-relaxed">
                    Trained in soil microbiology, plant pathology, precision irrigation, and agricultural business modeling. They possess the lab theory to modernize ancestral output.
                  </p>
                  <ul className="mt-5 space-y-2 text-xs text-[#dcd0bc]">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#d4a234] shrink-0" /> Tested on pest histology, soil chemistry & post-harvest economics
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#d4a234] shrink-0" /> Bridge local farmers with global supply chains and export standards
                    </li>
                  </ul>
                </div>
              </div>
            </div>

          </div>

          {/* Featured Field Challenge Highlight */}
          <div className="mt-8 p-6 bg-[#0c0a07] border border-[#d4a234]/20 rounded-sm grid sm:grid-cols-2 gap-6 items-center">
            <div className="flex gap-4 items-center">
              <img 
                src="/images/tapari-weaving.jpg" 
                alt="Tapari Leaf Weaving" 
                onError={handleImgError}
                className="w-24 h-24 sm:w-28 sm:h-28 rounded-sm object-cover border border-[#d4a234]/30 shrink-0 cursor-pointer"
                onClick={() => openLightbox(7, CURATED_GALLERY)}
              />
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#d4a234]">Ancestral Task</span>
                <h4 className="text-base font-serif font-bold text-[#f5ede0]">Sal Leaf Tapari Weaving</h4>
                <p className="text-xs text-[#a39780] mt-1">Graduates and farmers evaluated on zero-plastic ancestral packaging judged by village matriarchs.</p>
              </div>
            </div>

            <div className="flex gap-4 items-center">
              <img 
                src="/images/beekeeping.jpg" 
                alt="Live Apiary Inspection" 
                onError={handleImgError}
                className="w-24 h-24 sm:w-28 sm:h-28 rounded-sm object-cover border border-[#d4a234]/30 shrink-0 cursor-pointer"
                onClick={() => openLightbox(3, CURATED_GALLERY)}
              />
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#d4a234]">Scientific Task</span>
                <h4 className="text-base font-serif font-bold text-[#f5ede0]">Live Apiary Management</h4>
                <p className="text-xs text-[#a39780] mt-1">Field inspection of brood frames, queen cells, and parasite prevention under live hive pressure.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ONE TREE, ONE VOTE: THE 289,973-TREE CARBON SEQUESTRATION & SOIL RESTORATION ANALYSIS */}
      <section id="vote" className="relative py-28 bg-[#040403] border-y border-[#d4a234]/20 overflow-hidden">
        
        {/* Background Visual */}
        <div className="absolute inset-0 opacity-15 pointer-events-none">
          <img 
            src="/images/one-tree-one-vote.jpg" 
            alt="Tree Voting Campaign" 
            onError={handleImgError}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          
          {/* Section Header */}
          <div className="max-w-3xl mb-12">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-emerald-400 mb-3">
              <Leaf className="w-3.5 h-3.5" />
              <span>World-First Climate Voting Protocol · Verified Field Results</span>
            </div>

            <h2 className="text-4xl sm:text-6xl font-extrabold font-serif text-[#f5ede0] leading-tight">
              One tree, <br />
              one vote.
            </h2>

            <div className="mt-6 flex flex-wrap items-baseline gap-4">
              <span className="text-6xl sm:text-7xl font-black font-serif text-emerald-400 tracking-tight tabular-nums">
                289,973
              </span>
              <span className="text-xs uppercase font-mono tracking-widest text-[#a39780]">
                Verified Perennial Trees Planted as Votes (Season 1)
              </span>
            </div>

            <p className="text-lg sm:text-xl text-[#f0e6d6] mt-4 font-normal leading-relaxed">
              Instead of discarding millions of rupees on transient SMS voting, RAW pioneered a protocol where every viewer cast their ballot by planting a living perennial tree in their preferred contestant's name. Over 60% were fruit and nut trees (mandarin citrus, apple, walnut) generating lasting local rural income.
            </p>
          </div>

          {/* SCIENTIFIC CARBON SEQUESTRATION & SOIL ORGANIC CARBON TIMELINE EXPLORER */}
          <div className="bg-[#0c0a07] border border-emerald-500/30 rounded-sm p-6 sm:p-10 shadow-2xl">
            
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-emerald-500/20">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 block mb-1">
                  Peer-Reviewed Agroforestry Modeling · IPCC & ICIMOD Benchmarks
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#f5ede0]">
                  How 289,973 Trees Sequester Carbon Across Time
                </h3>
                <p className="text-xs text-[#a39780] mt-1 max-w-2xl">
                  Accurate multi-year projections based on published Himalayan subtropical & temperate perennial tree biomass growth equations and Soil Organic Carbon (SOC) accrual rates.
                </p>
              </div>

              {/* Interactive Year Selector Tabs */}
              <div className="flex items-center gap-1.5 p-1 bg-[#060504] border border-emerald-500/30 rounded-sm overflow-x-auto shrink-0">
                {SEQUESTRATION_TIMELINE.map((stage, idx) => (
                  <button
                    key={stage.year}
                    onClick={() => setSelectedYearIndex(idx)}
                    className={`px-3.5 py-2 text-xs font-mono font-semibold rounded-xs transition-all cursor-pointer ${
                      selectedYearIndex === idx 
                        ? 'bg-emerald-500 text-black shadow-md' 
                        : 'text-[#a39780] hover:text-[#f5ede0]'
                    }`}
                  >
                    {stage.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Active Year Data Spotlight Grid */}
            <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-8 mt-8 items-start">
              
              <div>
                <div className="flex items-center gap-2 text-xs font-mono uppercase text-[#d4a234] mb-2">
                  <Calendar className="w-4 h-4 text-emerald-400" />
                  <span>Timeline Milestone: {activeTimeline.label} ({activeTimeline.stageName})</span>
                </div>

                <h4 className="text-xl sm:text-2xl font-serif font-bold text-[#f5ede0]">
                  {activeTimeline.stageName}
                </h4>

                <p className="text-sm text-[#dcd0bc] mt-2 leading-relaxed">
                  {activeTimeline.description}
                </p>

                {/* Metric Cards */}
                <div className="grid sm:grid-cols-3 gap-4 mt-6">
                  
                  <div className="p-4 bg-[#060504] border border-emerald-500/20 rounded-sm">
                    <span className="text-[10px] uppercase font-mono text-[#a39780] block">
                      Annual Drawdown
                    </span>
                    <span className="text-2xl font-bold font-serif text-emerald-400 mt-1 block">
                      {activeTimeline.annualCO2Tons.toLocaleString()}
                    </span>
                    <span className="text-[11px] text-[#dcd0bc]">Metric Tons CO₂e / yr</span>
                    <span className="text-[10px] text-[#a39780] block mt-1 font-mono">
                      ({activeTimeline.annualRatePerTreeKg} kg CO₂ / tree / yr)
                    </span>
                  </div>

                  <div className="p-4 bg-[#060504] border border-emerald-500/20 rounded-sm">
                    <span className="text-[10px] uppercase font-mono text-[#a39780] block">
                      Cumulative CO₂ Sequestered
                    </span>
                    <span className="text-2xl font-bold font-serif text-[#f3d482] mt-1 block">
                      {activeTimeline.cumulativeCO2Tons.toLocaleString()}
                    </span>
                    <span className="text-[11px] text-[#dcd0bc]">Total Tons CO₂e to date</span>
                    <span className="text-[10px] text-[#a39780] block mt-1 font-mono">
                      (289,973 Trees verified)
                    </span>
                  </div>

                  <div className="p-4 bg-[#060504] border border-emerald-500/20 rounded-sm">
                    <span className="text-[10px] uppercase font-mono text-[#a39780] block">
                      Soil Carbon (SOC) Restored
                    </span>
                    <span className="text-2xl font-bold font-serif text-emerald-300 mt-1 block">
                      {activeTimeline.cumulativeSoilCarbonTons.toLocaleString()}
                    </span>
                    <span className="text-[11px] text-[#dcd0bc]">Tons Organic Carbon in Soil</span>
                    <span className="text-[10px] text-[#a39780] block mt-1 font-mono">
                      (Humus layer & roots)
                    </span>
                  </div>

                </div>

                {/* Published Citation Box */}
                <div className="mt-6 p-5 bg-[#0f0c08] border border-emerald-500/25 rounded-xs">
                  <div className="flex items-center gap-2 font-mono text-[11px] text-emerald-400 uppercase tracking-wider mb-2 font-semibold">
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>Peer-Reviewed Literature Citation:</span>
                  </div>
                  <p className="italic leading-relaxed font-serif text-[13px] text-[#f5ede0]">
                    "{activeTimeline.publishedSource}"
                  </p>
                </div>
              </div>

              {/* Soil Organic Carbon & Watershed Restoration Fact Sheet */}
              <div className="p-6 bg-[#060504] border border-emerald-500/30 rounded-sm space-y-5">
                <div className="flex items-center gap-2 border-b border-emerald-500/20 pb-3">
                  <Layers className="w-4 h-4 text-emerald-400" />
                  <h5 className="text-base font-serif font-bold text-[#f5ede0]">
                    Soil Carbon & Watershed Restoration Facts
                  </h5>
                </div>

                <div>
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className="text-[#dcd0bc]">Soil Organic Carbon (SOC) Increase:</span>
                    <span className="font-mono font-bold text-emerald-400">+34% vs Cropland</span>
                  </div>
                  <p className="text-[11px] text-[#a39780] leading-relaxed">
                    According to published IPCC & CIRAD agroforestry metadata, converting open terrace slope cropland to perennial tree agroforestry increases topsoil organic carbon by an average of 34% through perennial leaf litterfall and root mycorrhizae.
                  </p>
                </div>

                <div>
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className="text-[#dcd0bc]">Annual Topsoil Retention:</span>
                    <span className="font-mono font-bold text-[#f3d482]">~34,000+ Tons Saved/Yr</span>
                  </div>
                  <p className="text-[11px] text-[#a39780] leading-relaxed">
                    Tree canopy interception and deep root cohesion reduce hill erosion during high-intensity monsoons by 42%–68% (ICIMOD Nepal Mid-Hills benchmark), protecting fertile terrace topsoil from river siltation.
                  </p>
                </div>

                <div>
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className="text-[#dcd0bc]">Soil Moisture Infiltration:</span>
                    <span className="font-mono font-bold text-emerald-400">+18% to +26%</span>
                  </div>
                  <p className="text-[11px] text-[#a39780] leading-relaxed">
                    Elevated soil organic matter creates spongy soil aggregate porosity, dramatically improving water infiltration and buffering hillside farming against acute pre-monsoon dry spells.
                  </p>
                </div>

                <div className="pt-2 border-t border-emerald-500/20 text-[10px] text-[#a39780] font-mono">
                  Verified Data: 289,973 Trees · Audited GPS coordinates & photography
                </div>
              </div>

            </div>

            {/* Comprehensive Multi-Year Comparison Table */}
            <div className="mt-10 pt-8 border-t border-emerald-500/20">
              <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 block mb-3 font-semibold">
                Multi-Year Sequestration Matrix (289,973 Trees Planted in Season 1)
              </span>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs font-mono border-collapse">
                  <thead>
                    <tr className="border-b border-emerald-500/30 text-[#f3d482]">
                      <th className="py-2.5 px-3">Timeline Milestone</th>
                      <th className="py-2.5 px-3">Rate / Tree / Yr</th>
                      <th className="py-2.5 px-3">Annual CO₂ Sequestered</th>
                      <th className="py-2.5 px-3">Cumulative CO₂ Sequestered</th>
                      <th className="py-2.5 px-3">Topsoil Carbon (SOC) Added</th>
                      <th className="py-2.5 px-3">Erosion Prevented</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#d4a234]/15 text-[#dcd0bc]">
                    {SEQUESTRATION_TIMELINE.map((item, idx) => (
                      <tr 
                        key={item.year}
                        onClick={() => setSelectedYearIndex(idx)}
                        className={`cursor-pointer transition-colors ${
                          selectedYearIndex === idx ? 'bg-emerald-950/40 text-emerald-300 font-semibold' : 'hover:bg-white/5'
                        }`}
                      >
                        <td className="py-2.5 px-3 font-serif font-bold text-[#f5ede0]">
                          {item.label} ({item.stageName.split(' ')[0]})
                        </td>
                        <td className="py-2.5 px-3">{item.annualRatePerTreeKg} kg CO₂</td>
                        <td className="py-2.5 px-3 text-emerald-400 font-bold">{item.annualCO2Tons.toLocaleString()} t / yr</td>
                        <td className="py-2.5 px-3 text-[#f3d482] font-bold">{item.cumulativeCO2Tons.toLocaleString()} t CO₂e</td>
                        <td className="py-2.5 px-3">{item.cumulativeSoilCarbonTons.toLocaleString()} t C</td>
                        <td className="py-2.5 px-3">{item.erosionSavedTons.toLocaleString()} tons</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

          </div>

          {/* INTERACTIVE GLOBAL & CUSTOM TREE PLANTATION SIMULATOR (ANY NUMBER OF TREES UP TO 30 YEARS) */}
          <div className="mt-12 bg-[#090806] border-2 border-emerald-500/40 rounded-sm p-6 sm:p-10 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

            {/* Simulator Header */}
            <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-emerald-500/20">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-emerald-400 font-semibold mb-2">
                  <Calculator className="w-4 h-4 text-emerald-400" />
                  <span>Global Planetary Impact Engine · 1 to Billions of Trees</span>
                </div>
                <h3 className="text-2xl sm:text-4xl font-serif font-bold text-[#f5ede0]">
                  Type Any Plantation Count & Calculate 30-Year Impact
                </h3>
                <p className="text-sm text-[#dcd0bc] mt-2 max-w-3xl leading-relaxed">
                  Enter any custom number of trees to accurately project 30-year carbon drawdown, land restoration area, soil organic carbon (SOC) accrual, and food security based on published IPCC, FAO, and ICIMOD agroforestry benchmarks.
                </p>
              </div>

              {/* Time Horizon Selector */}
              <div className="shrink-0 bg-[#040403] border border-emerald-500/30 p-2 rounded-sm">
                <span className="text-[10px] uppercase font-mono tracking-wider text-[#a39780] block mb-1.5 px-1 font-semibold">
                  Projection Horizon:
                </span>
                <div className="flex items-center gap-1">
                  {[1, 5, 10, 20, 30].map((yr) => (
                    <button
                      key={yr}
                      onClick={() => setCustomHorizonYears(yr)}
                      className={`px-3 py-1.5 text-xs font-mono font-semibold rounded-xs transition-all cursor-pointer ${
                        customHorizonYears === yr
                          ? 'bg-emerald-500 text-black shadow-md font-bold'
                          : 'text-[#dcd0bc] hover:text-white hover:bg-white/5'
                      }`}
                    >
                      {yr === 30 ? '30 Yrs (Climax)' : `Yr ${yr}`}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Interactive Number Input & Preset Pills */}
            <div className="relative z-10 mt-8 space-y-4">
              <div className="flex flex-col md:flex-row md:items-center gap-4 bg-[#050403] border border-emerald-500/30 p-4 sm:p-5 rounded-sm">
                <div className="flex-1">
                  <label htmlFor="tree-input" className="block text-xs font-mono uppercase tracking-wider text-[#f3d482] mb-1 font-semibold">
                    Input Your Plantation Number (Trees Planted):
                  </label>
                  <div className="relative">
                    <TreePine className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-emerald-400 pointer-events-none" />
                    <input
                      id="tree-input"
                      type="text"
                      value={customInputStr}
                      onChange={(e) => handleTreeInputChange(e.target.value)}
                      placeholder="e.g. 500,000 or 1,000,000,000"
                      className="w-full pl-11 pr-4 py-3 bg-[#0d0a06] border border-emerald-500/40 rounded-sm text-xl sm:text-2xl font-serif font-bold text-emerald-300 focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400"
                    />
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0 pt-2 md:pt-6">
                  <button
                    onClick={() => handleTreeInputChange(String(Math.max(1, Math.floor(customTreeCount * 0.5))))}
                    className="px-3 py-2 text-xs font-mono bg-[#141009] border border-[#d4a234]/30 hover:border-[#f3d482] text-[#dcd0bc] rounded-sm transition-colors cursor-pointer"
                  >
                    ÷2
                  </button>
                  <button
                    onClick={() => handleTreeInputChange(String(Math.min(10_000_000_000_000, customTreeCount * 2)))}
                    className="px-3 py-2 text-xs font-mono bg-[#141009] border border-[#d4a234]/30 hover:border-[#f3d482] text-[#dcd0bc] rounded-sm transition-colors cursor-pointer"
                  >
                    ×2
                  </button>
                  <button
                    onClick={() => handleTreeInputChange(String(Math.min(10_000_000_000_000, customTreeCount * 10)))}
                    className="px-3 py-2 text-xs font-mono bg-[#141009] border border-[#d4a234]/30 hover:border-[#f3d482] text-[#dcd0bc] rounded-sm transition-colors cursor-pointer font-bold"
                  >
                    ×10
                  </button>
                </div>
              </div>

              {/* Quick Preset Buttons */}
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#a39780] block mb-2 font-semibold">
                  Or Test Standard Planetary & National Scales:
                </span>
                <div className="flex flex-wrap gap-2">
                  {GLOBAL_PLANTATION_PRESETS.map((preset) => {
                    const isSelected = customTreeCount === preset.value;
                    return (
                      <button
                        key={preset.label}
                        onClick={() => handleSelectPreset(preset.value)}
                        className={`px-3 py-1.5 rounded-sm border text-xs font-mono transition-all cursor-pointer flex items-center gap-2 ${
                          isSelected
                            ? 'bg-emerald-500/20 border-emerald-400 text-emerald-300 font-semibold shadow-sm'
                            : 'bg-[#060504] border-[#d4a234]/20 text-[#dcd0bc] hover:border-[#d4a234]/50 hover:text-white'
                        }`}
                        title={preset.context}
                      >
                        <span>{preset.label}</span>
                        <span className={`text-[10px] px-1.5 py-0.5 rounded-xs ${
                          isSelected ? 'bg-emerald-500/30 text-emerald-200' : 'bg-white/5 text-[#a39780]'
                        }`}>
                          {preset.badge}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* 4 DYNAMIC EXECUTIVE METRIC CARDS */}
            <div className="relative z-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
              
              {/* Card 1: Carbon Drawdown */}
              <div className="p-5 bg-[#050403] border border-emerald-500/30 rounded-sm relative overflow-hidden">
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-[10px] uppercase font-mono tracking-wider text-emerald-400 font-semibold flex items-center gap-1.5">
                    <Leaf className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Carbon Drawdown</span>
                  </span>
                  <span className="text-[10px] font-mono text-[#a39780]">
                    Yr {customHorizonYears} Horizon
                  </span>
                </div>
                <div className="mt-1">
                  <span className="text-3xl sm:text-4xl font-extrabold font-serif text-emerald-300 block">
                    {formatSmartUnit(simMetrics.cumulativeCO2Tons).formatted}
                  </span>
                  <span className="text-xs text-[#dcd0bc] font-medium block mt-0.5">
                    {formatSmartUnit(simMetrics.cumulativeCO2Tons).unit} CO₂e Sequestered
                  </span>
                </div>
                <div className="mt-4 pt-3 border-t border-emerald-500/15 space-y-1 text-[11px] font-mono">
                  <div className="flex justify-between text-[#a39780]">
                    <span>Annual Rate:</span>
                    <span className="text-emerald-400 font-semibold">
                      {formatSmartUnit(simMetrics.annualCO2Tons).formatted} {formatSmartUnit(simMetrics.annualCO2Tons).unit}/yr
                    </span>
                  </div>
                  <div className="flex justify-between text-[#a39780]">
                    <span>Per Tree Rate:</span>
                    <span className="text-[#f5ede0]">{simMetrics.annualRatePerTreeKg} kg CO₂ / yr</span>
                  </div>
                </div>
              </div>

              {/* Card 2: Land Area Restored */}
              <div className="p-5 bg-[#050403] border border-emerald-500/30 rounded-sm relative overflow-hidden">
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-[10px] uppercase font-mono tracking-wider text-[#f3d482] font-semibold flex items-center gap-1.5">
                    <Mountain className="w-3.5 h-3.5 text-[#f3d482]" />
                    <span>Land Area Restored</span>
                  </span>
                  <span className="text-[10px] font-mono text-[#a39780]">
                    500 Trees/Ha
                  </span>
                </div>
                <div className="mt-1">
                  <span className="text-3xl sm:text-4xl font-extrabold font-serif text-[#f3d482] block">
                    {formatSmartUnit(simMetrics.hectaresRestored, 'Hectare', 'Hectares').formatted}
                  </span>
                  <span className="text-xs text-[#dcd0bc] font-medium block mt-0.5">
                    {formatSmartUnit(simMetrics.hectaresRestored, 'Hectare', 'Hectares').unit}
                  </span>
                </div>
                <div className="mt-4 pt-3 border-t border-emerald-500/15 space-y-1 text-[11px] font-mono">
                  <div className="flex justify-between text-[#a39780]">
                    <span>Imperial Area:</span>
                    <span className="text-[#f3d482] font-semibold">
                      {formatSmartUnit(simMetrics.acresRestored, 'Acre', 'Acres').formatted} Acres
                    </span>
                  </div>
                  <div className="flex justify-between text-[#a39780]">
                    <span>Geographic Area:</span>
                    <span className="text-[#f5ede0]">{Math.round(simMetrics.sqKmRestored).toLocaleString()} km²</span>
                  </div>
                </div>
              </div>

              {/* Card 3: Soil Organic Carbon Rebuilt */}
              <div className="p-5 bg-[#050403] border border-emerald-500/30 rounded-sm relative overflow-hidden">
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-[10px] uppercase font-mono tracking-wider text-emerald-400 font-semibold flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Soil Carbon Rebuilt</span>
                  </span>
                  <span className="text-[10px] font-mono text-[#a39780]">
                    0.8 t C/ha/yr
                  </span>
                </div>
                <div className="mt-1">
                  <span className="text-3xl sm:text-4xl font-extrabold font-serif text-emerald-300 block">
                    {formatSmartUnit(simMetrics.cumulativeSoilCarbonTons).formatted}
                  </span>
                  <span className="text-xs text-[#dcd0bc] font-medium block mt-0.5">
                    {formatSmartUnit(simMetrics.cumulativeSoilCarbonTons).unit} Soil Carbon (SOC)
                  </span>
                </div>
                <div className="mt-4 pt-3 border-t border-emerald-500/15 space-y-1 text-[11px] font-mono">
                  <div className="flex justify-between text-[#a39780]">
                    <span>Annual Topsoil Saved:</span>
                    <span className="text-emerald-400 font-semibold">
                      {formatSmartUnit(simMetrics.annualErosionSavedTons).formatted} tons/yr
                    </span>
                  </div>
                  <div className="flex justify-between text-[#a39780]">
                    <span>Profile Restored:</span>
                    <span className="text-[#f5ede0]">0–30 cm Humus Layer</span>
                  </div>
                </div>
              </div>

              {/* Card 4: Food & Nutrition Harvest */}
              <div className="p-5 bg-[#050403] border border-emerald-500/30 rounded-sm relative overflow-hidden">
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-[10px] uppercase font-mono tracking-wider text-[#f3d482] font-semibold flex items-center gap-1.5">
                    <Apple className="w-3.5 h-3.5 text-[#f3d482]" />
                    <span>Food Sovereignty Yield</span>
                  </span>
                  <span className="text-[10px] font-mono text-emerald-400 font-semibold">
                    Solves Food Crisis
                  </span>
                </div>
                <div className="mt-1">
                  <span className="text-3xl sm:text-4xl font-extrabold font-serif text-[#f3d482] block">
                    {formatSmartUnit(simMetrics.annualFoodTons).formatted}
                  </span>
                  <span className="text-xs text-[#dcd0bc] font-medium block mt-0.5">
                    {formatSmartUnit(simMetrics.annualFoodTons).unit}/Yr of Fresh Food
                  </span>
                </div>
                <div className="mt-4 pt-3 border-t border-emerald-500/15 space-y-1 text-[11px] font-mono">
                  <div className="flex justify-between text-[#a39780]">
                    <span>Cumulative 30-Yr Food:</span>
                    <span className="text-[#f3d482] font-semibold">
                      {formatSmartUnit(simMetrics.cumulativeFoodTons).formatted} Tons
                    </span>
                  </div>
                  <div className="flex justify-between text-[#a39780]">
                    <span>Agroforestry Varieties:</span>
                    <span className="text-[#f5ede0]">60% Mandarin, Walnut, Apple</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Trajectory Breakdown Table for This Exact Tree Count */}
            <div className="relative z-10 mt-8 pt-6 border-t border-emerald-500/20">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-semibold">
                  30-Year Trajectory Matrix for {customTreeCount.toLocaleString()} Trees Planted
                </span>
                <span className="text-xs font-mono text-[#a39780]">
                  Grounded in peer-reviewed Himalayan and subtropical agroforestry field data
                </span>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs font-mono border-collapse">
                  <thead>
                    <tr className="border-b border-emerald-500/30 text-[#f3d482]">
                      <th className="py-2.5 px-3">Horizon Year</th>
                      <th className="py-2.5 px-3">Growth Phase</th>
                      <th className="py-2.5 px-3">Rate / Tree</th>
                      <th className="py-2.5 px-3">Annual CO₂ Drawdown</th>
                      <th className="py-2.5 px-3">Cumulative CO₂ Sequestered</th>
                      <th className="py-2.5 px-3">Soil Carbon (SOC) Rebuilt</th>
                      <th className="py-2.5 px-3">Annual Food Yield</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#d4a234]/15 text-[#dcd0bc]">
                    {[1, 5, 10, 20, 30].map((yr) => {
                      const m = computePlantationMetrics(customTreeCount, yr);
                      const isTarget = customHorizonYears === yr;
                      const phaseName = yr === 1 ? 'Root & Sapling' : yr === 5 ? 'Canopy Expansion' : yr === 10 ? 'Bearing Maturity' : yr === 20 ? 'Canopy Density' : 'Climax Ecological Stock';
                      return (
                        <tr
                          key={yr}
                          onClick={() => setCustomHorizonYears(yr)}
                          className={`cursor-pointer transition-colors ${
                            isTarget ? 'bg-emerald-950/50 text-emerald-200 font-bold' : 'hover:bg-white/5'
                          }`}
                        >
                          <td className="py-2.5 px-3 font-serif font-bold text-[#f5ede0]">Year {yr}</td>
                          <td className="py-2.5 px-3 text-[#a39780]">{phaseName}</td>
                          <td className="py-2.5 px-3">{m.annualRatePerTreeKg} kg/tree</td>
                          <td className="py-2.5 px-3 text-emerald-400 font-semibold">
                            {formatSmartUnit(m.annualCO2Tons).formatted} {formatSmartUnit(m.annualCO2Tons).unit}
                          </td>
                          <td className="py-2.5 px-3 text-[#f3d482] font-semibold">
                            {formatSmartUnit(m.cumulativeCO2Tons).formatted} {formatSmartUnit(m.cumulativeCO2Tons).unit}
                          </td>
                          <td className="py-2.5 px-3 text-emerald-300">
                            {formatSmartUnit(m.cumulativeSoilCarbonTons).formatted} {formatSmartUnit(m.cumulativeSoilCarbonTons).unit}
                          </td>
                          <td className="py-2.5 px-3 text-[#dcd0bc]">
                            {formatSmartUnit(m.annualFoodTons).formatted} {formatSmartUnit(m.annualFoodTons).unit}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>

            {/* SCIENTIFIC ANSWERS TO THE BIG GLOBAL QUESTIONS */}
            <div className="relative z-10 mt-10 pt-8 border-t border-emerald-500/30">
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-semibold flex items-center gap-1.5">
                    <Globe2 className="w-4 h-4 text-emerald-400" />
                    <span>Planetary Impact Analysis · Peer-Reviewed Science</span>
                  </span>
                  <h4 className="text-xl sm:text-2xl font-serif font-bold text-[#f5ede0] mt-1">
                    Can "One Tree, One Vote" Solve the Global Climate & Food Crisis?
                  </h4>
                </div>

                {/* Tab Navigation */}
                <div className="flex items-center gap-1 p-1 bg-[#050403] border border-emerald-500/30 rounded-sm">
                  <button
                    onClick={() => setSimulatorTab('calculator')}
                    className={`px-3 py-1.5 text-xs font-mono rounded-xs transition-colors cursor-pointer ${
                      simulatorTab === 'calculator' ? 'bg-emerald-500 text-black font-bold' : 'text-[#a39780] hover:text-white'
                    }`}
                  >
                    Global Climate Balance
                  </button>
                  <button
                    onClick={() => setSimulatorTab('food_crisis')}
                    className={`px-3 py-1.5 text-xs font-mono rounded-xs transition-colors cursor-pointer ${
                      simulatorTab === 'food_crisis' ? 'bg-emerald-500 text-black font-bold' : 'text-[#a39780] hover:text-white'
                    }`}
                  >
                    Solving Food Crisis
                  </button>
                  <button
                    onClick={() => setSimulatorTab('global_climate')}
                    className={`px-3 py-1.5 text-xs font-mono rounded-xs transition-colors cursor-pointer ${
                      simulatorTab === 'global_climate' ? 'bg-emerald-500 text-black font-bold' : 'text-[#a39780] hover:text-white'
                    }`}
                  >
                    Published Citations
                  </button>
                </div>
              </div>

              {/* Tab 1 Content: Global Climate Balance */}
              {simulatorTab === 'calculator' && (
                <div className="grid md:grid-cols-2 gap-6 bg-[#050403] border border-emerald-500/25 p-6 rounded-sm">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-emerald-400 font-serif font-bold text-base">
                      <Scale className="w-5 h-5 shrink-0" />
                      <h5>The Planetary Carbon Equation</h5>
                    </div>
                    <p className="text-xs text-[#dcd0bc] leading-relaxed">
                      Humanity emits approximately <strong className="text-white">40.0 Gigatons (40 Billion metric tons) of CO₂</strong> per year from industrial activity and fossil energy.
                    </p>
                    <div className="p-4 bg-[#0d0a06] border border-emerald-500/25 rounded-xs text-xs font-mono text-emerald-300 space-y-1">
                      <div>· Current Input: <span className="text-[#f3d482]">{customTreeCount.toLocaleString()} trees</span></div>
                      <div>· Annual Drawdown at Maturity: <span className="text-white">{formatSmartUnit(simMetrics.annualCO2Tons).formatted} {formatSmartUnit(simMetrics.annualCO2Tons).unit}/yr</span></div>
                      <div>· Offsets: <span className="text-emerald-400">{simMetrics.annualEmissionsOffsetPercent.toFixed(4)}%</span> of total annual global human emissions.</div>
                    </div>
                    <p className="text-xs text-[#a39780] leading-relaxed">
                      If all <strong>8 Billion humans</strong> plant just 1 tree per month for 10 years (960 Billion trees), at maturity they sequester <strong className="text-emerald-300">~28.8 Gigatons CO₂/year</strong>—absorbing over <strong>70% of total planetary emissions</strong>, while cumulative 30-year drawdown captures <strong className="text-[#f3d482]">&gt;750 Gigatons CO₂</strong>, neutralizing two-thirds of all industrial emissions since 1800.
                    </p>
                  </div>

                  <div className="space-y-4 border-t md:border-t-0 md:border-l border-emerald-500/20 md:pl-6">
                    <div className="flex items-center gap-2 text-[#f3d482] font-serif font-bold text-base">
                      <TrendingUp className="w-5 h-5 shrink-0" />
                      <h5>Can One Tree One Vote Singly Solve the Problem?</h5>
                    </div>
                    <p className="text-xs text-[#dcd0bc] leading-relaxed">
                      <strong>The Objective Scientific Verdict:</strong> Tree planting alone cannot grant license to burn unlimited fossil fuels indefinitely—emissions must be mitigated at the smokestack and tailpipe.
                    </p>
                    <p className="text-xs text-[#dcd0bc] leading-relaxed">
                      However, <strong>agroforestry is the ONLY scalable, cost-effective negative-emissions mechanism on Earth</strong> that simultaneously:
                    </p>
                    <ul className="text-xs text-[#a39780] space-y-1.5 list-disc list-inside">
                      <li>Removes existing carbon already trapped in the troposphere.</li>
                      <li>Recharges dried groundwater aquifers via deep root channels.</li>
                      <li>Cools regional microclimates through active foliar evapotranspiration.</li>
                      <li>Rebuilds living biological topsoil without billions spent on artificial direct-air capture machines.</li>
                    </ul>
                  </div>
                </div>
              )}

              {/* Tab 2 Content: Solving Food Crisis */}
              {simulatorTab === 'food_crisis' && (
                <div className="grid md:grid-cols-2 gap-6 bg-[#050403] border border-emerald-500/25 p-6 rounded-sm">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-[#f3d482] font-serif font-bold text-base">
                      <Apple className="w-5 h-5 shrink-0" />
                      <h5>How Agroforestry Resolves the Global Food Crisis</h5>
                    </div>
                    <p className="text-xs text-[#dcd0bc] leading-relaxed">
                      Conventional industrial agriculture is self-defeating: it destroys topsoil through chemical salinization, consumes massive fossil fertilizers, and accounts for 24% of global greenhouse emissions.
                    </p>
                    <p className="text-xs text-[#dcd0bc] leading-relaxed">
                      RAW’s <strong className="text-emerald-300">One Tree, One Vote</strong> protocol mandate guarantees that <strong className="text-[#f3d482]">over 60% of all planted trees are perennial food-bearing species</strong>:
                    </p>
                    <div className="grid grid-cols-2 gap-2 text-xs font-mono text-[#dcd0bc]">
                      <div className="p-2 bg-[#0d0a06] border border-emerald-500/20 rounded-xs">
                        <span className="text-[#f3d482] block font-bold">Mandarin Citrus</span>
                        <span className="text-[10px] text-[#a39780]">High Vitamin C, mountain slope resilience</span>
                      </div>
                      <div className="p-2 bg-[#0d0a06] border border-emerald-500/20 rounded-xs">
                        <span className="text-[#f3d482] block font-bold">Walnut & Chestnut</span>
                        <span className="text-[10px] text-[#a39780]">Calorie-dense proteins & healthy fats</span>
                      </div>
                      <div className="p-2 bg-[#0d0a06] border border-emerald-500/20 rounded-xs">
                        <span className="text-[#f3d482] block font-bold">Wild Apple & Pear</span>
                        <span className="text-[10px] text-[#a39780]">Drought-tolerant deep rootstock</span>
                      </div>
                      <div className="p-2 bg-[#0d0a06] border border-emerald-500/20 rounded-xs">
                        <span className="text-[#f3d482] block font-bold">Legume & Fodder</span>
                        <span className="text-[10px] text-[#a39780]">Biological nitrogen fixation & livestock feed</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4 border-t md:border-t-0 md:border-l border-emerald-500/20 md:pl-6">
                    <div className="flex items-center gap-2 text-emerald-400 font-serif font-bold text-base">
                      <Sprout className="w-5 h-5 shrink-0" />
                      <h5>Decentralized Nutrition at Scale</h5>
                    </div>
                    <p className="text-xs text-[#dcd0bc] leading-relaxed">
                      At your entered count of <strong className="text-white">{customTreeCount.toLocaleString()} trees</strong>, this generates <strong className="text-[#f3d482]">{formatSmartUnit(simMetrics.annualFoodTons).formatted} {formatSmartUnit(simMetrics.annualFoodTons).unit}</strong> of fresh organic nutrition every single year at full maturity.
                    </p>
                    <p className="text-xs text-[#a39780] leading-relaxed">
                      If 8 Billion people participate globally, it produces <strong className="text-emerald-300">over 216 Million metric tons</strong> of decentralized fruits, nuts, and pollinator honey annually—bypassing fragile supply chains and directly terminating regional food scarcity in rural communities.
                    </p>
                    <div className="p-3 bg-[#0d0a06] border border-emerald-500/30 text-[11px] font-mono text-[#f3d482]">
                      Outcome: Climate drawdown and hunger eradication are achieved through the exact same physical act of planting perennial food forests.
                    </div>
                  </div>
                </div>
              )}

              {/* Tab 3 Content: Published Citations */}
              {simulatorTab === 'global_climate' && (
                <div className="bg-[#050403] border border-emerald-500/25 p-6 rounded-sm space-y-4 text-xs text-[#dcd0bc]">
                  <div className="flex items-center gap-2 text-emerald-400 font-serif font-bold text-base">
                    <BookOpen className="w-5 h-5 shrink-0" />
                    <h5>Peer-Reviewed Grounding & Literature Backing</h5>
                  </div>
                  <div className="space-y-3 font-mono text-[11px]">
                    <div className="p-4 bg-[#0d0a06] border border-emerald-500/20 rounded-xs">
                      <strong className="text-white block font-serif text-xs mb-0.5">IPCC 2019 Refinement to the 2006 Guidelines for National GHG Inventories</strong>
                      <span className="text-[#a39780]">Volume 4 (AFOLU), Chapter 5: Perennial Agroforestry Tree Biomass & Root-to-Shoot Ratios (0.26–0.35) and default carbon accrual coefficients.</span>
                    </div>
                    <div className="p-4 bg-[#0d0a06] border border-[#d4a234]/20 rounded-xs">
                      <strong className="text-white block font-serif text-xs mb-0.5">Bastin, Finegold, et al. (Science, 2019) – "The global tree restoration potential"</strong>
                      <span className="text-[#a39780]">Crowther Lab / ETH Zurich study identifying 0.9 billion hectares of degraded global land capable of holding 1.2 trillion trees storing 205 Gigatons of carbon without competing with human agriculture or urban zones.</span>
                    </div>
                    <div className="p-4 bg-[#0d0a06] border border-emerald-500/20 rounded-xs">
                      <strong className="text-white block font-serif text-xs mb-0.5">ICIMOD Field Trials (Nepal Mid-Hills Watersheds)</strong>
                      <span className="text-[#a39780]">Documented 2.65 metric tons C/ha/year soil accrual and 42%–68% reduction in monsoon slope topsoil runoff under community terrace agroforestry systems.</span>
                    </div>
                    <div className="p-4 bg-[#0d0a06] border border-[#d4a234]/20 rounded-xs">
                      <strong className="text-white block font-serif text-xs mb-0.5">FAO & World Agroforestry Centre (ICRAF)</strong>
                      <span className="text-[#a39780]">State of the World's Forests (2022): Confirmed +34% average topsoil organic carbon (SOC) elevation in multi-strata food agroforestry compared to mono-crop baselines.</span>
                    </div>
                  </div>
                </div>
              )}

            </div>

          </div>

          {/* Verified Planting Campaign Photos */}
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="overflow-hidden rounded-sm border border-emerald-500/30 cursor-pointer" onClick={() => openLightbox(32, ALL_ARCHIVE_PHOTOS)}>
              <img src="/images/all-photos/pdf-photo-035.jpg" alt="Tree planting drive" onError={handleImgError} className="w-full h-32 object-cover hover:scale-105 transition-transform" />
            </div>
            <div className="overflow-hidden rounded-sm border border-emerald-500/30 cursor-pointer" onClick={() => openLightbox(33, ALL_ARCHIVE_PHOTOS)}>
              <img src="/images/all-photos/pdf-photo-036.jpg" alt="Community tree planting" onError={handleImgError} className="w-full h-32 object-cover hover:scale-105 transition-transform" />
            </div>
            <div className="overflow-hidden rounded-sm border border-emerald-500/30 cursor-pointer" onClick={() => openLightbox(34, ALL_ARCHIVE_PHOTOS)}>
              <img src="/images/all-photos/pdf-photo-037.jpg" alt="Tree auditing in district" onError={handleImgError} className="w-full h-32 object-cover hover:scale-105 transition-transform" />
            </div>
            <div className="overflow-hidden rounded-sm border border-emerald-500/30 cursor-pointer" onClick={() => openLightbox(35, ALL_ARCHIVE_PHOTOS)}>
              <img src="/images/champion-climate-suman-bimali.jpg" alt="Climate Award Winner" onError={handleImgError} className="w-full h-32 object-cover hover:scale-105 transition-transform" />
            </div>
          </div>

        </div>
      </section>

      {/* 77-DISTRICT SACRED SOIL MAP OF NEPAL */}
      <section id="regions" className="py-24 bg-[#0c0a07] border-b border-[#d4a234]/20">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="max-w-3xl mb-12">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#d4a234] mb-3">
              <Compass className="w-4 h-4" />
              <span>National Representation</span>
              <span aria-hidden="true">·</span>
              <span>77 Districts · 7 Agro-Climatic Provinces</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-serif text-[#f5ede0] leading-tight">
              The 77-District sacred soil.
            </h2>
            <p className="text-lg text-[#dcd0bc] mt-4 leading-relaxed">
              Every contestant brought soil from their ancestral plot to the arena. At the coronation, these soils were consecrated into a singular sacred tika representing the agrarian dignity of all Nepal.
            </p>
          </div>

          {/* Interactive Region Selector & Inspector */}
          <div className="grid lg:grid-cols-[1fr_1.3fr] gap-8 items-start">
            
            {/* Region List */}
            <div className="space-y-2">
              {NEPAL_AGRO_REGIONS.map((region) => {
                const isSelected = region.id === activeRegion.id;
                return (
                  <button
                    key={region.id}
                    onClick={() => setSelectedRegionId(region.id)}
                    className={`w-full p-4 rounded-sm border text-left transition-all cursor-pointer flex items-center justify-between ${
                      isSelected 
                        ? 'border-[#f3d482] bg-[#141009] shadow-md' 
                        : 'border-[#d4a234]/15 bg-[#060504] hover:border-[#d4a234]/40 hover:bg-[#0c0a07]'
                    }`}
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className={`text-sm font-serif font-bold ${isSelected ? 'text-[#f3d482]' : 'text-[#f5ede0]'}`}>
                          {region.name}
                        </span>
                        {region.id === 'gandaki' && (
                          <span className="text-[10px] font-mono bg-[#d4a234]/20 text-[#f3d482] px-1.5 py-0.5 rounded-sm">
                            RAW Arena Site
                          </span>
                        )}
                      </div>
                      <span className="text-xs text-[#a39780] block mt-0.5">{region.zone}</span>
                    </div>

                    <div className="text-right shrink-0">
                      <span className="text-xs font-mono text-[#dcd0bc]">{region.elevation}</span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Active Region Deep Dive Card */}
            <div className="bg-[#060504] border border-[#d4a234]/30 p-8 rounded-sm shadow-xl">
              <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#d4a234]/20">
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-[#d4a234]">Selected Province Profile</span>
                  <h3 className="text-3xl font-serif font-bold text-[#f3d482] mt-1">{activeRegion.name}</h3>
                  <p className="text-xs text-[#dcd0bc] mt-0.5">{activeRegion.zone} · Elevation: {activeRegion.elevation}</p>
                </div>
                <div className="text-right">
                  <span className="text-xs font-mono text-[#a39780] block">Season 1 Involvement</span>
                  <span className="text-sm font-bold text-[#f5ede0]">{activeRegion.season1Contestants}</span>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6 mt-6">
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-[#d4a234] block mb-1">
                    Dominant Soil Type
                  </span>
                  <p className="text-sm text-[#f5ede0] font-medium">{activeRegion.soil}</p>
                </div>

                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-[#d4a234] block mb-1">
                    Indigenous Staples
                  </span>
                  <p className="text-sm text-[#f5ede0] font-medium">{activeRegion.staples}</p>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-[#d4a234]/15">
                <span className="text-xs font-mono uppercase tracking-wider text-[#d4a234] block mb-1">
                  Primary Climate Challenge
                </span>
                <p className="text-sm text-[#dcd0bc]">{activeRegion.climateChallenge}</p>
              </div>

              <div className="mt-6 p-4 bg-[#100d07] border border-[#d4a234]/25 rounded-sm">
                <span className="text-xs font-mono uppercase tracking-wider text-[#f3d482] block mb-1">
                  RAW Season 1 Highlight from this Region
                </span>
                <p className="text-xs text-[#dcd0bc] leading-relaxed italic">
                  "{activeRegion.rawHighlight}"
                </p>
              </div>

              <div className="mt-6 flex justify-end">
                <button 
                  onClick={() => openLightbox(13, CURATED_GALLERY)}
                  className="text-xs font-semibold text-[#f3d482] hover:text-white flex items-center gap-1.5 cursor-pointer"
                >
                  <Maximize2 className="w-3.5 h-3.5" /> View Grand Finale Soil Tika Ritual
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* SEASON ONE LAUREATES & REAL-WORLD CONSEQUENCES */}
      <section id="champions" className="py-24 bg-[#0c0a07] border-y border-[#d4a234]/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#d4a234] mb-3">
              <span>Grand Finale Coronation</span>
              <span aria-hidden="true">·</span>
              <span>Hall of Laureates</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-serif text-[#f5ede0]">
              Season One champions.
            </h2>
            <p className="text-xl text-[#dcd0bc] mt-4 leading-relaxed">
              21 episodes over two production years, crowned at a Grand Finale where soil from all 77 districts was applied as a sacred tika to the winner.
            </p>
          </div>

          {/* Crowning Highlight Feature Photo */}
          <div className="mt-12 relative rounded-sm overflow-hidden border border-[#d4a234]/30 shadow-2xl cursor-pointer"
               onClick={() => openLightbox(13, CURATED_GALLERY)}>
            <img 
              src="/images/finale-crowning.jpg" 
              alt="Grand Finale Crowning Ceremony" 
              onError={handleImgError}
              className="w-full max-h-[500px] object-cover hover:scale-102 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#060504] via-[#060504]/50 to-transparent flex items-end p-6 sm:p-10 pointer-events-none">
              <div className="max-w-3xl">
                <div className="text-xs font-mono uppercase tracking-wider text-[#d4a234] mb-1">
                  Coronation Ritual · 77 Districts Unified
                </div>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-2">
                  Soil Tika from Every Corner of Nepal
                </h3>
                <p className="text-sm text-[#dcd0bc]">
                  Contestants carried a pouch of soil from their home province. At the podium, these soils were blended and sanctified as a crown of dignity.
                </p>
              </div>
            </div>
          </div>

          {/* Champions Roster */}
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            
            {/* Champion 1: Farmer Champion */}
            <div className="bg-[#060504] border border-[#d4a234]/25 rounded-sm overflow-hidden flex flex-col justify-between">
              <div>
                <div className="aspect-3/4 overflow-hidden relative cursor-pointer" onClick={() => openLightbox(40, ALL_ARCHIVE_PHOTOS)}>
                  <img 
                    src="/images/champion-farmer-laxman-kc.jpg" 
                    alt="Farmer champion Laxman K.C." 
                    onError={handleImgError}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-[#d4a234] text-black text-xs font-bold px-2.5 py-1 rounded-sm">
                    Farmer Champion
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-serif font-bold text-[#f3d482]">Laxman K.C.</h3>
                  <p className="text-sm text-[#a39780] mt-1 font-medium">Grand Farmer Champion · Season One</p>
                  <p className="text-sm text-[#dcd0bc] mt-4 leading-relaxed">
                    Now appointed official brand ambassador of a publicly traded enterprise. Proved that decades of hill-farming experience outperform pure academic theory under unpredictable weather.
                  </p>
                </div>
              </div>
            </div>

            {/* Champion 2: Graduate Champion */}
            <div className="bg-[#060504] border border-[#d4a234]/25 rounded-sm overflow-hidden flex flex-col justify-between">
              <div>
                <div className="aspect-3/4 overflow-hidden relative cursor-pointer" onClick={() => openLightbox(41, ALL_ARCHIVE_PHOTOS)}>
                  <img 
                    src="/images/champion-graduate-samriddha.jpg" 
                    alt="Graduate champion Samriddha Bhantana" 
                    onError={handleImgError}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-[#f3d482] text-black text-xs font-bold px-2.5 py-1 rounded-sm">
                    Graduate Champion
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-serif font-bold text-[#f3d482]">Samriddha Bhantana</h3>
                  <p className="text-sm text-[#a39780] mt-1 font-medium">Graduate Science Champion · Season One</p>
                  <p className="text-sm text-[#dcd0bc] mt-4 leading-relaxed">
                    Leading new agri-tech research on cold-hardy organic pest remedies. Developed a bio-fertilizer protocol in the RAW arena that increased root density by 38%.
                  </p>
                </div>
              </div>
            </div>

            {/* Champion 3: Climate Award */}
            <div className="bg-[#060504] border border-[#d4a234]/25 rounded-sm overflow-hidden flex flex-col justify-between">
              <div>
                <div className="aspect-3/4 overflow-hidden relative cursor-pointer" onClick={() => openLightbox(35, ALL_ARCHIVE_PHOTOS)}>
                  <img 
                    src="/images/champion-climate-suman-bimali.jpg" 
                    alt="Climate Award winner Suman Bimali" 
                    onError={handleImgError}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-emerald-700 text-white text-xs font-bold px-2.5 py-1 rounded-sm">
                    Climate Award
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-serif font-bold text-[#f3d482]">Suman Bimali</h3>
                  <p className="text-sm text-[#a39780] mt-1 font-medium">First RAW Climate Award Laureate</p>
                  <p className="text-sm text-[#dcd0bc] mt-4 leading-relaxed">
                    Winner of the national One Tree, One Vote campaign, mobilizing thousands of citizens to plant over 65,000 verified trees in his district alone.
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Institutional Impact Proof Tiles */}
          <div className="grid md:grid-cols-3 gap-8 mt-14 pt-12 border-t border-[#d4a234]/20">
            
            {/* Tile 1: 103+ Schools */}
            <div className="bg-[#060504] border border-[#d4a234]/25 rounded-sm overflow-hidden flex flex-col justify-between">
              <div>
                <div className="aspect-4/3 overflow-hidden relative cursor-pointer" onClick={() => openLightbox(18, ALL_ARCHIVE_PHOTOS)}>
                  <img 
                    src="/images/campaign-schools.jpg" 
                    alt="Students in a school campaign" 
                    onError={handleImgError}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <span className="text-xs text-[#d4a234] uppercase tracking-wider font-mono block mb-1">Youth Educational Outreach</span>
                  <h3 className="text-2xl font-serif font-bold text-[#f3d482]">103+ schools</h3>
                  <p className="text-sm text-[#a39780] mt-2.5 leading-relaxed">
                    Over 15,000 students directly taught that farming is an entrepreneurial science rather than a path of last resort.
                  </p>
                </div>
              </div>
              <div className="p-6 pt-0 border-t border-[#d4a234]/15 mt-4">
                <span className="text-xs text-[#dcd0bc] font-mono">Curriculum modules co-authored</span>
              </div>
            </div>

            {/* Tile 2: 200+ Policymakers */}
            <div className="bg-[#060504] border border-[#d4a234]/25 rounded-sm overflow-hidden flex flex-col justify-between">
              <div>
                <div className="aspect-4/3 overflow-hidden relative cursor-pointer" onClick={() => openLightbox(28, ALL_ARCHIVE_PHOTOS)}>
                  <img 
                    src="/images/campaign-policy.jpg" 
                    alt="Finalists meeting the Agriculture Minister" 
                    onError={handleImgError}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <span className="text-xs text-[#d4a234] uppercase tracking-wider font-mono block mb-1">Direct Legislative Impact</span>
                  <h3 className="text-2xl font-serif font-bold text-[#f3d482]">200+ policymakers</h3>
                  <p className="text-sm text-[#a39780] mt-2.5 leading-relaxed">
                    A comprehensive vision book for agrarian prosperity, authored by contestants, officially handed to the Ministers of Agriculture.
                  </p>
                </div>
              </div>
              <div className="p-6 pt-0 border-t border-[#d4a234]/15 mt-4">
                <span className="text-xs text-[#dcd0bc] font-mono">Presented directly at Ministry level</span>
              </div>
            </div>

            {/* Tile 3: Across the Border */}
            <div className="bg-[#060504] border border-[#d4a234]/25 rounded-sm overflow-hidden flex flex-col justify-between">
              <div>
                <div className="aspect-4/3 overflow-hidden relative cursor-pointer" onClick={() => openLightbox(11, CURATED_GALLERY)}>
                  <img 
                    src="/images/international-round.jpg" 
                    alt="Contestants at the international round in Bihar, India" 
                    onError={handleImgError}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <span className="text-xs text-[#d4a234] uppercase tracking-wider font-mono block mb-1">Cross-Border Bilateral Round</span>
                  <h3 className="text-2xl font-serif font-bold text-[#f3d482]">Across the border</h3>
                  <p className="text-sm text-[#a39780] mt-2.5 leading-relaxed">
                    Nepal’s agrarian innovators formally presented in Bihar, India, establishing bilateral collaboration with university faculties.
                  </p>
                </div>
              </div>
              <div className="p-6 pt-0 border-t border-[#d4a234]/15 mt-4">
                <span className="text-xs text-[#dcd0bc] font-mono">Field trials at Bihar Agricultural University</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* DOCUMENTARY PHOTO GALLERY & MEDIA ARCHIVE (ALL 47 PHOTOS) */}
      <section id="gallery" className="py-24 max-w-7xl mx-auto px-6">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#d4a234] mb-3">
              <ImageIcon className="w-3.5 h-3.5" />
              <span>Documentary Visual Record</span>
              <span aria-hidden="true">·</span>
              <span>All 47 High-Res Photos Loaded</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-serif text-[#f5ede0]">
              Production gallery.
            </h2>
            <p className="text-[#a39780] text-base mt-2 max-w-2xl">
              Authentic documentary moments from two years of high-altitude arena filming. Click any frame to inspect in full-screen lightbox.
            </p>
          </div>

          {/* Controls: Mode & Category */}
          <div className="flex flex-wrap items-center gap-3">
            
            {/* Gallery View Mode */}
            <div className="flex items-center p-1 bg-[#0c0a07] border border-[#d4a234]/30 rounded-sm">
              <button 
                onClick={() => { setGalleryMode('curated'); setGalleryFilter('all'); }}
                className={`px-3 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-sm transition-all cursor-pointer ${
                  galleryMode === 'curated' ? 'bg-[#d4a234] text-black shadow-sm' : 'text-[#a39780] hover:text-[#f5ede0]'
                }`}
              >
                Curated Storylines (14)
              </button>
              <button 
                onClick={() => { setGalleryMode('archive'); setGalleryFilter('all'); }}
                className={`px-3 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-sm transition-all cursor-pointer ${
                  galleryMode === 'archive' ? 'bg-[#d4a234] text-black shadow-sm' : 'text-[#a39780] hover:text-[#f5ede0]'
                }`}
              >
                All 47 Archive Photos
              </button>
            </div>

            {/* Category Filters */}
            <div className="flex items-center gap-1 p-1 bg-[#0c0a07] border border-[#d4a234]/20 rounded-sm">
              <button 
                onClick={() => setGalleryFilter('all')}
                className={`px-2.5 py-1.5 text-xs font-medium rounded-sm transition-colors cursor-pointer ${
                  galleryFilter === 'all' ? 'bg-[#f3d482] text-black font-semibold' : 'text-[#a39780] hover:text-[#f5ede0]'
                }`}
              >
                All
              </button>
              <button 
                onClick={() => setGalleryFilter('arena')}
                className={`px-2.5 py-1.5 text-xs font-medium rounded-sm transition-colors cursor-pointer ${
                  galleryFilter === 'arena' ? 'bg-[#f3d482] text-black font-semibold' : 'text-[#a39780] hover:text-[#f5ede0]'
                }`}
              >
                Arena
              </button>
              <button 
                onClick={() => setGalleryFilter('tasks')}
                className={`px-2.5 py-1.5 text-xs font-medium rounded-sm transition-colors cursor-pointer ${
                  galleryFilter === 'tasks' ? 'bg-[#f3d482] text-black font-semibold' : 'text-[#a39780] hover:text-[#f5ede0]'
                }`}
              >
                Tasks
              </button>
              <button 
                onClick={() => setGalleryFilter('ceremony')}
                className={`px-2.5 py-1.5 text-xs font-medium rounded-sm transition-colors cursor-pointer ${
                  galleryFilter === 'ceremony' ? 'bg-[#f3d482] text-black font-semibold' : 'text-[#a39780] hover:text-[#f5ede0]'
                }`}
              >
                Ceremonies
              </button>
            </div>

          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredGallery.map((item, index) => (
            <div 
              key={item.id}
              onClick={() => openLightbox(index, filteredGallery)}
              className="group relative cursor-pointer overflow-hidden rounded-sm border border-[#d4a234]/20 hover:border-[#f3d482] bg-[#0c0a07] transition-all duration-300"
            >
              <div className="aspect-4/3 overflow-hidden bg-black/40">
                <img 
                  src={item.src} 
                  alt={item.title} 
                  onError={handleImgError}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-3 bg-[#0a0805] border-t border-[#d4a234]/15">
                <h4 className="text-xs font-serif font-bold text-[#f5ede0] truncate group-hover:text-[#f3d482] transition-colors">
                  {item.title}
                </h4>
                <p className="text-[11px] text-[#a39780] truncate mt-0.5">{item.location}</p>
              </div>
            </div>
          ))}
        </div>

        {galleryMode === 'curated' && (
          <div className="mt-8 text-center">
            <button 
              onClick={() => { setGalleryMode('archive'); setGalleryFilter('all'); }}
              className="px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#dcd0bc] hover:text-white border border-[#d4a234]/30 hover:border-[#f3d482] rounded-sm transition-all cursor-pointer"
            >
              View Full 47 Photo Archive →
            </button>
          </div>
        )}
      </section>

      {/* LEADERSHIP & CREATORS */}
      <section id="team" className="py-24 bg-[#0c0a07] border-y border-[#d4a234]/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#d4a234] mb-3">
              <span>Architects of the Movement</span>
              <span aria-hidden="true">·</span>
              <span>Executive Team</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-serif text-[#f5ede0]">
              The people behind it.
            </h2>
            <p className="text-base text-[#a39780] mt-3">
              Visionaries who built an arena where producers take center stage.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-14">
            
            {/* Leader 1: Rajesh Hamal */}
            <div className="bg-[#060504] border border-[#d4a234]/25 rounded-sm overflow-hidden flex flex-col justify-between">
              <div>
                <div className="aspect-4/3 overflow-hidden bg-black/40 relative">
                  <img 
                    src="/images/rajesh-hamal.jpg" 
                    alt="Rajesh Hamal – Maha Host" 
                    onError={handleImgError}
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute top-3 left-3 bg-[#060504]/90 text-[#f3d482] text-xs font-bold px-2.5 py-1 rounded-sm border border-[#d4a234]/30">
                    Maha-Host
                  </div>
                </div>
                <div className="p-6">
                  <span className="text-xs font-mono text-[#d4a234] uppercase tracking-wider block mb-1">Cultural Anchor</span>
                  <h3 className="text-2xl font-serif font-bold text-[#f3d482]">Rajesh Hamal</h3>
                  <p className="text-sm text-[#dcd0bc] mt-3 leading-relaxed">
                    Nepal’s undisputed superstar anchored every broadcast episode and live deliberation, connecting cinematic authority with the urgent dignity of rural farmers.
                  </p>
                </div>
              </div>
            </div>

            {/* Leader 2: Dr. Yogendra Kumar Karki */}
            <div className="bg-[#060504] border border-[#d4a234]/25 rounded-sm overflow-hidden flex flex-col justify-between">
              <div>
                <div className="aspect-4/3 overflow-hidden bg-black/40 relative">
                  <img 
                    src="/images/dr-yogendra-karki.jpg" 
                    alt="Dr. Yogendra Kumar Karki – Chief Technical Judge" 
                    onError={handleImgError}
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute top-3 left-3 bg-[#060504]/90 text-[#f3d482] text-xs font-bold px-2.5 py-1 rounded-sm border border-[#d4a234]/30">
                    Chief Technical Judge
                  </div>
                </div>
                <div className="p-6">
                  <span className="text-xs font-mono text-[#d4a234] uppercase tracking-wider block mb-1">Former Ministry Secretary</span>
                  <h3 className="text-2xl font-serif font-bold text-[#f3d482]">Dr. Yogendra Kumar Karki</h3>
                  <p className="text-sm text-[#dcd0bc] mt-3 leading-relaxed">
                    Former Secretary of the Ministry of Agriculture and Livestock Development. Governed the scoring rubric with scientific exactitude and rigorous peer-reviewed standards.
                  </p>
                </div>
              </div>
            </div>

            {/* Leader 3: Shailesh Kandel Kshetri */}
            <div className="bg-[#060504] border border-[#d4a234]/25 rounded-sm overflow-hidden flex flex-col justify-between">
              <div>
                <div className="aspect-4/3 overflow-hidden bg-black/40 relative">
                  <img 
                    src="/images/shailesh-kandel-kshetri.jpg" 
                    alt="Shailesh Kandel Kshetri – Creator & Director" 
                    onError={handleImgError}
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute top-3 left-3 bg-[#060504]/90 text-[#f3d482] text-xs font-bold px-2.5 py-1 rounded-sm border border-[#d4a234]/30">
                    Creator & Director
                  </div>
                </div>
                <div className="p-6">
                  <span className="text-xs font-mono text-[#d4a234] uppercase tracking-wider block mb-1">Executive Producer</span>
                  <h3 className="text-2xl font-serif font-bold text-[#f3d482]">Shailesh Kandel Kshetri</h3>
                  <p className="text-sm text-[#dcd0bc] mt-3 leading-relaxed">
                    Creator, director and executive producer of RAW. Previously created <em>The Poet Idol</em> and directed primetime franchises including <em>The Voice of Nepal</em> and <em>Himalaya Roadies</em>.
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Maker Highlight Block */}
          <div className="mt-16 p-8 sm:p-12 bg-[#060504] border border-[#d4a234]/30 rounded-sm grid md:grid-cols-[200px_1fr] gap-8 items-center shadow-xl">
            <img 
              src="/images/shailesh-kandel-kshetri.jpg" 
              alt="Shailesh Kandel Kshetri" 
              onError={handleImgError}
              className="w-40 h-40 sm:w-48 sm:h-48 rounded-sm object-cover mx-auto border border-[#d4a234]/40 shadow-lg"
            />
            <div>
              <blockquote className="text-xl sm:text-2xl font-serif italic text-[#f3d482] leading-snug mb-4">
                "Farmers were background, not subject. Agriculture was scenery, not story. RAW changes that forever."
              </blockquote>
              <p className="text-sm sm:text-base text-[#dcd0bc] leading-relaxed">
                Raised in the hills of Parbat, Shailesh spent seven years and his own savings building a show that puts farmers at the centre of primetime entertainment.
              </p>
              <div className="flex flex-wrap items-center gap-6 mt-6 pt-6 border-t border-[#d4a234]/20 text-xs text-[#a39780]">
                <span>Creator of <strong className="text-[#f5ede0]">The Poet Idol</strong></span>
                <span>·</span>
                <span>Alumnus of <strong className="text-[#f5ede0]">The Voice of Nepal</strong></span>
                <span>·</span>
                <span>Director of <strong className="text-[#f5ede0]">Himalaya Roadies</strong></span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* CONTACT & EXECUTIVE INQUIRY */}
      <section id="inquire" className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-start">
          
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#d4a234] mb-3">
              <span>Direct Inquiries</span>
              <span aria-hidden="true">·</span>
              <span>Institutional & Media Partnerships</span>
            </div>
            
            <h2 className="text-3xl sm:text-5xl font-extrabold font-serif text-[#f5ede0] leading-tight">
              Connect with RAW.
            </h2>

            <p className="text-lg text-[#dcd0bc] mt-6 leading-relaxed">
              RAW demonstrated that elevating agriculture to primetime television creates measurable cultural, environmental, and economic shifts. Reach out directly to discuss broadcasting, partnerships, or educational collaboration.
            </p>

            <div className="mt-10 space-y-6">
              
              <div className="p-6 bg-[#0c0a07] border border-[#d4a234]/25 rounded-sm">
                <span className="text-xs font-mono uppercase tracking-wider text-[#d4a234] block mb-1">Pillar 01</span>
                <h3 className="text-xl font-serif font-bold text-[#f3d482]">Institutional & Educational Collaboration</h3>
                <p className="text-sm text-[#a39780] mt-2 leading-relaxed">
                  Partner with RAW's schools and university initiatives to expand agro-entrepreneurship and youth STEM curricula.
                </p>
              </div>

              <div className="p-6 bg-[#0c0a07] border border-[#d4a234]/25 rounded-sm">
                <span className="text-xs font-mono uppercase tracking-wider text-[#d4a234] block mb-1">Pillar 02</span>
                <h3 className="text-xl font-serif font-bold text-[#f3d482]">Environmental & Forestry ESG Programs</h3>
                <p className="text-sm text-[#a39780] mt-2 leading-relaxed">
                  Support verified perennial tree planting campaigns, biodiversity conservation, and mountain watershed stabilization.
                </p>
              </div>

              <div className="p-6 bg-[#0c0a07] border border-[#d4a234]/25 rounded-sm">
                <span className="text-xs font-mono uppercase tracking-wider text-[#d4a234] block mb-1">Pillar 03</span>
                <h3 className="text-xl font-serif font-bold text-[#f3d482]">Media, Syndication & Press</h3>
                <p className="text-sm text-[#a39780] mt-2 leading-relaxed">
                  For broadcasting syndication inquiries, press coverage, or interviews with show leadership and laureates.
                </p>
              </div>

            </div>
          </div>

          {/* Clean Inquiry Form */}
          <div className="bg-[#0c0a07] border border-[#d4a234]/30 p-8 sm:p-10 rounded-sm shadow-2xl relative">
            <h3 className="text-2xl font-serif font-bold text-[#f3d482] mb-1">
              Send an Inquiry
            </h3>
            <p className="text-xs text-[#a39780] mb-8">
              Inquiries are routed directly to executive leadership at RAW.
            </p>

            {formSubmitted ? (
              <div className="p-6 bg-[#13100b] border border-[#d4a234]/40 rounded-sm text-center">
                <CheckCircle2 className="w-12 h-12 text-[#d4a234] mx-auto mb-3" />
                <h4 className="text-xl font-serif font-bold text-[#f5ede0]">Inquiry Logged</h4>
                <p className="text-sm text-[#dcd0bc] mt-2">
                  Thank you, {formName}. Your message has been routed to executive leadership at RAW.
                </p>
                <button 
                  onClick={() => setFormSubmitted(false)}
                  className="mt-6 px-4 py-2 text-xs font-semibold text-[#f3d482] border border-[#d4a234]/30 rounded-sm cursor-pointer"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-medium text-[#dcd0bc] uppercase tracking-wider mb-1.5">
                    Your Name *
                  </label>
                  <input 
                    type="text" 
                    required
                    value={formName}
                    onChange={(e) => setFormName(e.target.value)}
                    placeholder="e.g. Anjali Sharma"
                    className="w-full bg-[#060504] border border-[#d4a234]/25 rounded-sm px-4 py-3 text-sm text-[#f5ede0] focus:outline-none focus:border-[#f3d482]"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-[#dcd0bc] uppercase tracking-wider mb-1.5">
                      Email Address *
                    </label>
                    <input 
                      type="email" 
                      required
                      value={formEmail}
                      onChange={(e) => setFormEmail(e.target.value)}
                      placeholder="name@organization.com"
                      className="w-full bg-[#060504] border border-[#d4a234]/25 rounded-sm px-4 py-3 text-sm text-[#f5ede0] focus:outline-none focus:border-[#f3d482]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-[#dcd0bc] uppercase tracking-wider mb-1.5">
                      Country
                    </label>
                    <input 
                      type="text" 
                      value={formCountry}
                      onChange={(e) => setFormCountry(e.target.value)}
                      placeholder="e.g. Nepal, India, UK"
                      className="w-full bg-[#060504] border border-[#d4a234]/25 rounded-sm px-4 py-3 text-sm text-[#f5ede0] focus:outline-none focus:border-[#f3d482]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#dcd0bc] uppercase tracking-wider mb-1.5">
                    Organization / Affiliation
                  </label>
                  <input 
                    type="text" 
                    value={formOrg}
                    onChange={(e) => setFormOrg(e.target.value)}
                    placeholder="University, NGO, Company, Media Network"
                    className="w-full bg-[#060504] border border-[#d4a234]/25 rounded-sm px-4 py-3 text-sm text-[#f5ede0] focus:outline-none focus:border-[#f3d482]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#dcd0bc] uppercase tracking-wider mb-1.5">
                    Topic of Inquiry
                  </label>
                  <select 
                    value={formInterest}
                    onChange={(e) => setFormInterest(e.target.value)}
                    className="w-full bg-[#060504] border border-[#d4a234]/25 rounded-sm px-4 py-3 text-sm text-[#f5ede0] focus:outline-none focus:border-[#f3d482]"
                  >
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="One Tree One Vote & Carbon Offset">One Tree One Vote & Carbon Program</option>
                    <option value="Educational & Institutional Partnership">Educational & School Outreach</option>
                    <option value="Media & Syndication Rights">Media & Broadcast Syndication</option>
                    <option value="Corporate Partnership & ESG">Corporate Partnership & ESG</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#dcd0bc] uppercase tracking-wider mb-1.5">
                    Message
                  </label>
                  <textarea 
                    rows={3}
                    value={formMsg}
                    onChange={(e) => setFormMsg(e.target.value)}
                    placeholder="Provide details about your inquiry..."
                    className="w-full bg-[#060504] border border-[#d4a234]/25 rounded-sm px-4 py-3 text-sm text-[#f5ede0] focus:outline-none focus:border-[#f3d482]"
                  />
                </div>

                <button 
                  type="submit"
                  className="w-full py-4 text-xs font-bold uppercase tracking-wider text-[#120d04] gold-btn rounded-sm shadow-md mt-2 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" /> Submit Inquiry
                </button>

                <p className="text-[11px] text-[#a39780] text-center pt-2">
                  Direct contact: <a href="mailto:hello@rawworld.net" className="text-[#f3d482] underline">hello@rawworld.net</a>
                </p>
              </form>
            )}
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#d4a234]/20 py-12 bg-[#060504] text-[#a39780] text-xs">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <img 
              src="/images/raw-logo.png" 
              alt="RAW" 
              onError={handleImgError}
              className="h-8 w-auto object-contain"
            />
            <span>© {new Date().getFullYear()} RAW – Revolutionary Agriculture War. All rights reserved.</span>
          </div>

          <div className="flex flex-wrap items-center gap-6">
            <a href="#concept" className="hover:text-[#f3d482] transition-colors">The Format</a>
            <a href="#vote" className="hover:text-[#f3d482] transition-colors">One Tree One Vote (Carbon Data)</a>
            <a href="#regions" className="hover:text-[#f3d482] transition-colors">77-District Soil Map</a>
            <a href="#champions" className="hover:text-[#f3d482] transition-colors">Laureates</a>
            <a href="#gallery" className="hover:text-[#f3d482] transition-colors">Photos (47)</a>
            <a href="#inquire" className="text-[#f3d482] hover:text-white font-medium">Contact</a>
          </div>
        </div>
      </footer>

      {/* FULLSCREEN LIGHTBOX MODAL */}
      {activeLightboxIndex !== null && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col items-center justify-between p-4 sm:p-6"
          onClick={() => setActiveLightboxIndex(null)}
        >
          {/* Top Bar */}
          <div className="w-full max-w-6xl flex items-center justify-between z-10" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono text-[#d4a234] uppercase tracking-wider">
                Photo {activeLightboxIndex + 1} of {lightboxList.length}
              </span>
              <span className="text-xs text-[#a39780]">·</span>
              <span className="text-xs text-[#dcd0bc] bg-[#141009] px-2 py-0.5 rounded-sm border border-[#d4a234]/30">
                {lightboxList[activeLightboxIndex]?.location}
              </span>
            </div>

            <button 
              onClick={() => setActiveLightboxIndex(null)}
              className="p-2 text-[#dcd0bc] hover:text-white rounded-full bg-white/10 hover:bg-white/20 transition-colors cursor-pointer"
              aria-label="Close photo"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Main Photo Viewport */}
          <div className="relative w-full max-w-5xl flex-1 flex items-center justify-center my-4" onClick={(e) => e.stopPropagation()}>
            <button 
              onClick={() => setActiveLightboxIndex((prev) => (prev !== null ? (prev - 1 + lightboxList.length) % lightboxList.length : 0))}
              className="absolute left-2 sm:left-4 z-20 p-3 rounded-full bg-black/70 border border-[#d4a234]/40 text-[#f3d482] hover:text-white hover:bg-black transition-all cursor-pointer"
              aria-label="Previous photo"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <img 
              src={lightboxList[activeLightboxIndex]?.src} 
              alt={lightboxList[activeLightboxIndex]?.title} 
              onError={handleImgError}
              className="max-h-[75vh] max-w-full object-contain rounded-sm border border-[#d4a234]/25 shadow-2xl"
            />

            <button 
              onClick={() => setActiveLightboxIndex((prev) => (prev !== null ? (prev + 1) % lightboxList.length : 0))}
              className="absolute right-2 sm:right-4 z-20 p-3 rounded-full bg-black/70 border border-[#d4a234]/40 text-[#f3d482] hover:text-white hover:bg-black transition-all cursor-pointer"
              aria-label="Next photo"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Bottom Caption Drawer & Filmstrip */}
          <div className="w-full max-w-4xl text-center z-10" onClick={(e) => e.stopPropagation()}>
            <h3 className="text-lg sm:text-xl font-serif font-bold text-[#f5ede0]">
              {lightboxList[activeLightboxIndex]?.title}
            </h3>
            <p className="text-xs sm:text-sm text-[#dcd0bc] mt-1 max-w-2xl mx-auto">
              {lightboxList[activeLightboxIndex]?.caption}
            </p>

            {/* Quick Thumbnail Strip */}
            <div className="flex items-center justify-center gap-2 mt-4 overflow-x-auto py-2 max-w-2xl mx-auto">
              {lightboxList.slice(Math.max(0, activeLightboxIndex - 3), activeLightboxIndex + 4).map((thumb) => {
                const realIndex = lightboxList.findIndex((item) => item.id === thumb.id);
                return (
                  <button 
                    key={thumb.id}
                    onClick={() => setActiveLightboxIndex(realIndex)}
                    className={`w-12 h-12 rounded-xs overflow-hidden shrink-0 border transition-all cursor-pointer ${
                      realIndex === activeLightboxIndex ? 'border-[#f3d482] scale-110' : 'border-[#d4a234]/20 opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={thumb.src} alt={thumb.title} onError={handleImgError} className="w-full h-full object-cover" />
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
