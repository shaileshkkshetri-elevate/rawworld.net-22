import { PlantationMetrics, SequestrationTimelineItem } from '../types';

// Unified Peer-Reviewed Agroforestry Model
// References:
// 1. IPCC 2019 Refinement to the 2006 Guidelines for National GHG Inventories, Vol. 4 (AFOLU), Ch. 5 (Agroforestry Perennial Biomass Growth Constants)
// 2. ICRAF (World Agroforestry / CIFOR) Carbon Accounting Guidelines for Perennial Agroforestry (0.7–1.0 t CO₂/tree over 25–30 year lifespan)
// 3. ICIMOD (International Centre for Integrated Mountain Development) Nepal Mid-Hills Agroforestry Watershed Studies

export const ANNUAL_TREE_SEQUESTRATION_CURVE: Record<number, number> = {
  1: 4.5,
  2: 8.5,
  3: 13.0,
  4: 17.5,
  5: 22.0,
  6: 25.5,
  7: 28.5,
  8: 31.0,
  9: 33.0,
  10: 34.5,
  11: 35.0,
  12: 35.0,
  13: 35.0,
  14: 35.0,
  15: 35.0,
  16: 34.5,
  17: 34.0,
  18: 33.5,
  19: 33.0,
  20: 32.5,
  21: 31.5,
  22: 30.5,
  23: 29.5,
  24: 28.5,
  25: 27.5,
  26: 26.5,
  27: 25.5,
  28: 24.5,
  29: 23.5,
  30: 22.5
};

export const ANNUAL_SOIL_CARBON_ACCRUAL_RATE_PER_HA_C = 0.85; // Tons of Elemental Carbon (C) per hectare per year
export const C_TO_CO2_FACTOR = 3.667; // 44 / 12 (1 ton of Carbon = 3.667 tons of CO₂ equivalent)

export function getAnnualRatePerTree(year: number): number {
  const clampedYear = Math.max(1, Math.min(30, Math.round(year)));
  return ANNUAL_TREE_SEQUESTRATION_CURVE[clampedYear] || 25.0;
}

export function computePlantationMetrics(
  treeCount: number,
  horizonYears: number,
  survivalRate: number = 0.70
): PlantationMetrics {
  const safeTrees = Math.max(0, Math.round(treeCount));
  const safeYears = Math.max(1, Math.min(30, Math.round(horizonYears)));
  const clampedSurvival = Math.max(0.1, Math.min(1.0, survivalRate));

  const survivingTrees = Math.round(safeTrees * clampedSurvival);
  const equivalentHectares = safeTrees / 500;
  const acresRestored = equivalentHectares * 2.47105;
  const sqKmRestored = equivalentHectares / 100;
  const effectiveCanopyHectares = equivalentHectares * clampedSurvival;

  const annualKg = getAnnualRatePerTree(safeYears);
  const annualTreeCO2Tons = (survivingTrees * annualKg) / 1000;

  let cumulativeTreeKgPerTree = 0;
  for (let y = 1; y <= safeYears; y++) {
    cumulativeTreeKgPerTree += getAnnualRatePerTree(y);
  }
  const cumulativeTreeCO2Tons = (survivingTrees * cumulativeTreeKgPerTree) / 1000;

  const annualSoilCarbonTonsC = effectiveCanopyHectares * ANNUAL_SOIL_CARBON_ACCRUAL_RATE_PER_HA_C;
  const cumulativeSoilCarbonTonsC = annualSoilCarbonTonsC * safeYears;
  const cumulativeSoilCO2eTons = cumulativeSoilCarbonTonsC * C_TO_CO2_FACTOR;
  const cumulativeTotalCO2eTons = cumulativeTreeCO2Tons + cumulativeSoilCO2eTons;

  const annualErosionSavedTons = effectiveCanopyHectares * 40;
  const cumulativeErosionSavedTons = annualErosionSavedTons * safeYears;

  const productiveTrees = survivingTrees * 0.60;
  const bearingYears = Math.max(0, safeYears - 4);
  const annualFoodKg = productiveTrees * (safeYears >= 5 ? 40 : (safeYears >= 3 ? 15 : 0));
  const annualFoodTons = annualFoodKg / 1000;
  const cumulativeFoodTons = (productiveTrees * 40 * bearingYears) / 1000;

  const annualEmissionsOffsetPercent = (annualTreeCO2Tons / 40_000_000_000) * 100;

  return {
    safeTrees,
    survivalRate: clampedSurvival,
    survivingTrees,
    horizonYears: safeYears,
    equivalentHectares,
    acresRestored,
    sqKmRestored,
    effectiveCanopyHectares,
    annualRatePerTreeKg: annualKg,
    annualTreeCO2Tons,
    cumulativeTreeCO2Tons,
    annualSoilCarbonTonsC,
    cumulativeSoilCarbonTonsC,
    cumulativeSoilCO2eTons,
    cumulativeTotalCO2eTons,
    annualErosionSavedTons,
    cumulativeErosionSavedTons,
    annualFoodTons,
    cumulativeFoodTons,
    annualEmissionsOffsetPercent,
  };
}

export const TIMELINE_YEARS = [1, 5, 10, 20, 30] as const;

export const TIMELINE_METADATA: Record<number, { stageName: string; description: string; source: string }> = {
  1: {
    stageName: 'Root Establishment & Early Sapling',
    description: 'Initial taproot penetration and mycorrhizal colonization in mountain terrace soil. Biomass growth prioritizes subterranean root architecture over canopy.',
    source: 'IPCC 2019 Refinement to Guidelines for National GHG Inventories, Vol. 4 (AFOLU), Ch. 5.'
  },
  5: {
    stageName: 'Canopy Expansion & Early Bearing',
    description: 'Leaf area expansion across mandarin, walnut, and apple varieties. Initial fruit yields begin alongside active organic leaf litter mulching.',
    source: 'ICRAF & ICIMOD Agroforestry Guidelines (Godavari, Nepal Field Trials).'
  },
  10: {
    stageName: 'Young Mature Bearing Phase',
    description: 'Dense interlocking root network stabilizes terraced slopes during heavy monsoon rainfall. Peak commercial fruit harvest for mountain farming families.',
    source: 'IPCC 2019 Refinement, Vol. 4 (AFOLU) Agroforestry Perennial Growth Constants.'
  },
  20: {
    stageName: 'Mature Canopy & Substantial Soil Carbon',
    description: 'Rich humus accumulation across 0–30 cm topsoil profile. Substantial carbon stored in above-ground trunk biomass and perennial deep-root pools.',
    source: 'ICRAF Agroforestry Carbon Accounting Standards (Temperate & Subtropical Perennials).'
  },
  30: {
    stageName: 'Climax Agroforestry Stand Equilibrium',
    description: 'Perennial orchard equilibrium. High soil organic carbon density, continuous watershed retention, and established biodiversity sanctuary.',
    source: 'IPCC 2019 Refinement, Vol. 4 (AFOLU) 30-Year Carbon Stock Change Factors.'
  }
};

export function generateSequestrationTimeline(treeCount: number = 289973, survivalRate: number = 0.70): SequestrationTimelineItem[] {
  return TIMELINE_YEARS.map((yr) => {
    const metrics = computePlantationMetrics(treeCount, yr, survivalRate);
    const meta = TIMELINE_METADATA[yr];
    return {
      year: yr,
      label: `Year ${yr}`,
      stageName: meta.stageName,
      description: meta.description,
      publishedSource: meta.source,
      annualRatePerTreeKg: metrics.annualRatePerTreeKg,
      annualCO2Tons: metrics.annualTreeCO2Tons,
      cumulativeCO2Tons: metrics.cumulativeTreeCO2Tons,
      cumulativeSoilCarbonTons: metrics.cumulativeSoilCarbonTonsC,
      cumulativeSoilCO2eTons: metrics.cumulativeSoilCO2eTons,
      cumulativeTotalCO2eTons: metrics.cumulativeTotalCO2eTons,
      erosionSavedTons: metrics.cumulativeErosionSavedTons,
      metrics
    };
  });
}
