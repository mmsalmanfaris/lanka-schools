import cutoffsData from '../data/grade5-cutoffs.json';
import { Grade5Cutoff, EligibleSchoolQuery, EligibleSchoolResult } from './types';
import { getNationalSchools } from './national-schools';
import { calculateDistance, normalizeText } from './utils';

const cutoffs: Grade5Cutoff[] = cutoffsData as Grade5Cutoff[];

/**
 * Returns all official Grade 5 scholarship cut-off marks
 */
export function getGrade5Cutoffs(): Grade5Cutoff[] {
  return [...cutoffs];
}

/**
 * Finds Grade 5 cutoffs by census number
 */
export function getGrade5CutoffsByCensusNo(censusNo: string): Grade5Cutoff[] {
  if (!censusNo) return [];
  const pad = censusNo.trim().padStart(5, '0');
  return cutoffs.filter(
    (c) => c.censusNo === censusNo.trim() || c.censusNo === pad
  );
}

/**
 * Evaluates which National Schools a student is eligible for based on their Grade 5 Scholarship score,
 * gender, medium of instruction, and optional district.
 *
 * Essential for school admission apps and EdTech student advisory tools.
 */
export function getEligibleNationalSchools(
  params: EligibleSchoolQuery
): EligibleSchoolResult[] {
  const { marks, gender, medium, district } = params;
  const nationalSchools = getNationalSchools();
  const results: EligibleSchoolResult[] = [];

  const districtNorm = district ? normalizeText(district) : null;

  for (const school of nationalSchools) {
    if (districtNorm && normalizeText(school.districtName) !== districtNorm) {
      continue;
    }

    // Gender check
    if (school.gender !== 'Mixed' && school.gender !== gender) {
      continue;
    }

    // Medium check
    const cutoff =
      medium === 'Sinhala'
        ? school.grade5CutoffSinhala
        : school.grade5CutoffTamil;

    if (cutoff === null || cutoff === undefined) {
      continue;
    }

    const margin = marks - cutoff;
    const eligible = margin >= 0;

    results.push({
      school,
      cutoff,
      margin,
      eligible,
    });
  }

  // Sort by highest cut-off first
  return results.sort((a, b) => b.cutoff - a.cutoff);
}

/**
 * Analyzes proximity between a applicant's residence and a school for Grade 1 admissions.
 * In Sri Lanka, Grade 1 admissions prioritize residents residing within immediate catchment categories.
 *
 * @param schoolLat Latitude of school
 * @param schoolLon Longitude of school
 * @param homeLat Latitude of applicant residence
 * @param homeLon Longitude of applicant residence
 */
export function getGrade1AdmissionProximity(
  schoolLat: number,
  schoolLon: number,
  homeLat: number,
  homeLon: number
): {
  distanceKm: number;
  withinImmediateCatchment: boolean; // < 2km
  withinSecondaryCatchment: boolean; // < 5km
} {
  const distanceKm = calculateDistance(schoolLat, schoolLon, homeLat, homeLon);
  return {
    distanceKm,
    withinImmediateCatchment: distanceKm <= 2.0,
    withinSecondaryCatchment: distanceKm <= 5.0,
  };
}
