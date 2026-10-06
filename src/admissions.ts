import { Grade1ProximityResult } from './types';
import { calculateDistance } from './utils';

/**
 * Analyzes proximity between an applicant's residence and a school for Grade 1 admissions.
 * In Sri Lanka, Grade 1 circular guidelines prioritize residents within immediate catchment categories (< 2km, < 5km).
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
): Grade1ProximityResult {
  const distanceKm = calculateDistance(schoolLat, schoolLon, homeLat, homeLon);
  return {
    distanceKm,
    withinImmediateCatchment: distanceKm <= 2.0,
    withinSecondaryCatchment: distanceKm <= 5.0,
  };
}
