import schoolsData from '../data/schools.json';
import { School, SchoolFilter, ProximityOptions } from './types';
import { calculateDistance, matchesQuery, normalizeText } from './utils';
import { getDistrict } from './districts';
import { getProvince } from './provinces';

const schools: School[] = schoolsData as School[];

/**
 * Returns all 10,146 schools of Sri Lanka, optionally filtered by criteria
 */
export function getSchools(filter?: SchoolFilter): School[] {
  if (!filter) return [...schools];

  let list = schools;

  if (filter.province !== undefined) {
    const prov = getProvince(filter.province);
    if (prov) {
      list = list.filter((s) => s.provinceCode === prov.code);
    }
  }

  if (filter.district !== undefined) {
    const dist = getDistrict(filter.district);
    if (dist) {
      list = list.filter((s) => s.districtCode === dist.code);
    }
  }

  if (filter.zone) {
    const zoneQuery = normalizeText(filter.zone);
    list = list.filter((s) => s.zone && normalizeText(s.zone) === zoneQuery);
  }

  if (filter.educationLevel) {
    list = list.filter((s) => s.educationLevel === filter.educationLevel);
  }

  if (filter.connectivity) {
    list = list.filter((s) => s.connectivity === filter.connectivity);
  }

  if (filter.isNationalSchool !== undefined) {
    list = list.filter((s) => s.isNationalSchool === filter.isNationalSchool);
  }

  return list;
}

/**
 * Finds a school by its unique ID (e.g. 'LK-SCH-00045') or census number
 */
export function getSchoolById(idOrCensusNo: string): School | undefined {
  if (!idOrCensusNo) return undefined;
  const q = idOrCensusNo.trim();
  return schools.find(
    (s) => s.id === q || (s.censusNo && s.censusNo === q)
  );
}

/**
 * Finds schools near a given coordinate, sorted by distance.
 * Perfect for location-based search in EdTech and school admissions apps.
 */
export function findNearbySchools(
  options: ProximityOptions
): (School & { distanceKm: number })[] {
  const {
    latitude,
    longitude,
    radiusKm = 10,
    limit = 50,
    educationLevel,
    onlyNational,
  } = options;

  const results: (School & { distanceKm: number })[] = [];

  for (const s of schools) {
    if (onlyNational && !s.isNationalSchool) continue;
    if (educationLevel && s.educationLevel !== educationLevel) continue;

    const d = calculateDistance(latitude, longitude, s.latitude, s.longitude);
    if (d <= radiusKm) {
      results.push({ ...s, distanceKm: d });
    }
  }

  results.sort((a, b) => a.distanceKm - b.distanceKm);

  return results.slice(0, limit);
}

/**
 * Searches all schools by name, zone, or district
 */
export function searchSchools(
  query: string,
  options?: {
    district?: string | number;
    zone?: string;
    limit?: number;
  }
): School[] {
  if (!query && !options) return [];
  let list = schools;

  if (options?.district !== undefined) {
    const dist = getDistrict(options.district);
    if (dist) {
      list = list.filter((s) => s.districtCode === dist.code);
    }
  }

  if (options?.zone) {
    const z = normalizeText(options.zone);
    list = list.filter((s) => s.zone && normalizeText(s.zone) === z);
  }

  if (query) {
    list = list.filter(
      (s) =>
        matchesQuery(s.name, query) ||
        (s.zone && matchesQuery(s.zone, query)) ||
        (s.censusNo && s.censusNo === query.trim())
    );
  }

  const limit = options?.limit || 100;
  return list.slice(0, limit);
}

