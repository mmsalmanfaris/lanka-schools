import nationalSchoolsData from '../data/national-schools.json';
import { NationalSchool } from './types';
import { normalizeText, matchesQuery } from './utils';
import { getDistrict } from './districts';
import { getProvince } from './provinces';
import { getZone } from './zones';

const nationalSchools: NationalSchool[] = nationalSchoolsData as NationalSchool[];

/**
 * Returns all 396 national schools of Sri Lanka
 */
export function getNationalSchools(): NationalSchool[] {
  return [...nationalSchools];
}

/**
 * Finds a national school by its 5-digit Ministry of Education Census Number (e.g. '00045')
 */
export function getNationalSchoolByCensusNo(
  censusNo: string
): NationalSchool | undefined {
  if (!censusNo) return undefined;
  const pad = censusNo.trim().padStart(5, '0');
  return nationalSchools.find(
    (s) => s.censusNo === censusNo.trim() || s.censusNo === pad
  );
}

/**
 * Returns all national schools in a given district
 */
export function getNationalSchoolsByDistrict(
  districtCodeOrName: number | string
): NationalSchool[] {
  const dist = getDistrict(districtCodeOrName);
  if (!dist) return [];
  return nationalSchools.filter((s) => s.districtCode === dist.code);
}

/**
 * Returns all national schools in a given educational zone
 */
export function getNationalSchoolsByZone(
  zoneIdOrName: string
): NationalSchool[] {
  const zone = getZone(zoneIdOrName);
  const zoneName = zone ? zone.name : zoneIdOrName;
  const clean = normalizeText(zoneName);
  return nationalSchools.filter((s) => normalizeText(s.zone) === clean);
}

/**
 * Returns all national schools in a given province
 */
export function getNationalSchoolsByProvince(
  provinceCodeOrName: number | string
): NationalSchool[] {
  const prov = getProvince(provinceCodeOrName);
  if (!prov) return [];
  return nationalSchools.filter((s) => s.provinceCode === prov.code);
}

/**
 * Searches national schools by name, address, census number, or town
 */
export function searchNationalSchools(
  query: string,
  options?: {
    district?: string | number;
    zone?: string;
    gender?: 'Boys' | 'Girls' | 'Mixed';
    medium?: 'Sinhala' | 'Tamil';
  }
): NationalSchool[] {
  if (!query && !options) return [];
  let list = nationalSchools;

  if (options?.district !== undefined) {
    const dist = getDistrict(options.district);
    if (dist) {
      list = list.filter((s) => s.districtCode === dist.code);
    }
  }

  if (options?.zone) {
    const z = normalizeText(options.zone);
    list = list.filter((s) => normalizeText(s.zone) === z);
  }

  if (options?.gender) {
    list = list.filter((s) => s.gender === options.gender || s.gender === 'Mixed');
  }

  if (options?.medium) {
    list = list.filter((s) => s.mediums.includes(options.medium!));
  }

  if (!query) return list;

  return list.filter(
    (s) =>
      s.censusNo === query.trim() ||
      matchesQuery(s.name, query) ||
      matchesQuery(s.shortName, query) ||
      matchesQuery(s.address, query) ||
      matchesQuery(s.zone, query)
  );
}

