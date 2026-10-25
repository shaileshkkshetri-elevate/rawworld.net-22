export type Page = 
  | 'home' 
  | 'vote' 
  | 'carbon' 
  | 'impact' 
  | 'team' 
  | 'contestants' 
  | 'news' 
  | 'info';

export interface GalleryItem {
  id: number;
  src: string;
  category: 'arena' | 'tasks' | 'ceremony' | 'archive';
  title: string;
  caption: string;
  location: string;
}

export interface MediaDispatch {
  id: number;
  sn: number;
  title: string;
  url: string;
  outlet: string;
  date: string;
  displayDate: string;
  year: number;
  language: 'English' | 'Nepali';
  category: 'finale' | 'broadcast' | 'vote' | 'auditions' | 'announcement';
  categoryLabel: string;
  excerpt: string;
}

export interface PlantationMetrics {
  safeTrees: number;
  survivalRate: number;
  survivingTrees: number;
  horizonYears: number;
  equivalentHectares: number;
  acresRestored: number;
  sqKmRestored: number;
  effectiveCanopyHectares: number;
  annualRatePerTreeKg: number;
  annualTreeCO2Tons: number;
  cumulativeTreeCO2Tons: number;
  annualSoilCarbonTonsC: number;
  cumulativeSoilCarbonTonsC: number;
  cumulativeSoilCO2eTons: number;
  cumulativeTotalCO2eTons: number;
  annualErosionSavedTons: number;
  cumulativeErosionSavedTons: number;
  annualFoodTons: number;
  cumulativeFoodTons: number;
  annualEmissionsOffsetPercent: number;
}

export interface SequestrationTimelineItem {
  year: number;
  label: string;
  stageName: string;
  description: string;
  publishedSource: string;
  annualRatePerTreeKg: number;
  annualCO2Tons: number;
  cumulativeCO2Tons: number;
  cumulativeSoilCarbonTons: number;
  cumulativeSoilCO2eTons: number;
  cumulativeTotalCO2eTons: number;
  erosionSavedTons: number;
  metrics: PlantationMetrics;
}

export interface AgroRegion {
  id: string;
  name: string;
  zone: string;
  elevation: string;
  soil: string;
  staples: string;
  season1Contestants: string;
  climateChallenge: string;
  rawHighlight: string;
}

export interface ContestantProfile {
  id: string;
  name: string;
  role: string;
  tier: 'farmer' | 'graduate' | 'climate';
  hometown: string;
  province: string;
  image: string;
  tagline: string;
  quote: string;
  biography: string;
  keyInnovation: string;
  fieldAchievement: string;
  prizeAwarded: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  title: string;
  category: 'host' | 'judge' | 'production' | 'advisory';
  image: string;
  quote: string;
  bio: string;
  credentials: string[];
}
