import zonesData from '../data/zones.json';
import { Zone } from './types';
import { normalizeText, matchesQuery } from './utils';
import { getDistrict } from './districts';
import { getProvince } from './provinces';

const zones: Zone[] = zonesData as Zone[];

/**
 * Returns all 100 educational zones of Sri Lanka
 */
export function getZones(): Zone[] {
  return [...zones];
}

/**
 * Finds an educational zone by slug id or name
 */
export function getZone(idOrName: string): Zone | undefined {
  if (!idOrName) return undefined;
  const clean = normalizeText(idOrName);
  return zones.find(
    (z) =>
      z.id.toLowerCase() === idOrName.toLowerCase() ||
      normalizeText(z.name) === clean ||
      (z.nameSi && z.nameSi.trim() === idOrName.trim()) ||
      (z.nameTa && z.nameTa.trim() === idOrName.trim())
  );
}

/**
 * Returns all educational zones in a specific district
 */
export function getZonesByDistrict(
  districtCodeOrName: number | string
): Zone[] {
  const dist = getDistrict(districtCodeOrName);
  if (!dist) return [];
  return zones.filter((z) => z.districtCode === dist.code);
}

/**
 * Returns all educational zones in a specific province
 */
export function getZonesByProvince(
  provinceCodeOrName: number | string
): Zone[] {
  const prov = getProvince(provinceCodeOrName);
  if (!prov) return [];
  return zones.filter((z) => z.provinceCode === prov.code);
}

/**
 * Finds which educational zone contains a specific divisional education office
 */
export function findZoneByDivision(divisionName: string): Zone | undefined {
  if (!divisionName) return undefined;
  const query = normalizeText(divisionName);
  return zones.find(
    (z) =>
      z.divisions.some((d) => normalizeText(d) === query) ||
      z.aliases.some((a) => normalizeText(a) === query)
  );
}

/**
 * Returns a flattened list of all divisional education offices across Sri Lanka
 */
export function getAllDivisions(): {
  division: string;
  zone: string;
  district: string;
  province: string;
}[] {
  const list: {
    division: string;
    zone: string;
    district: string;
    province: string;
  }[] = [];
  for (const z of zones) {
    for (const d of z.divisions) {
      list.push({
        division: d,
        zone: z.name,
        district: z.districtName,
        province: z.provinceName,
      });
    }
  }
  return list;
}

/**
 * Searches zones by name, division, town, or alias
 */
export function searchZones(query: string): Zone[] {
  if (!query) return [];
  return zones.filter(
    (z) =>
      matchesQuery(z.name, query) ||
      z.divisions.some((d) => matchesQuery(d, query)) ||
      z.aliases.some((a) => matchesQuery(a, query))
  );
}

