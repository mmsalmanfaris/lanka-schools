import { School, SchoolFilter, ProximityOptions } from './types';
/**
 * Returns all 10,146 schools of Sri Lanka, optionally filtered by criteria
 */
export declare function getSchools(filter?: SchoolFilter): School[];
/**
 * Finds a school by its unique ID (e.g. 'LK-SCH-00045') or census number
 */
export declare function getSchoolById(idOrCensusNo: string): School | undefined;
/**
 * Finds schools near a given coordinate, sorted by distance.
 * Perfect for location-based search in EdTech and school admissions apps.
 */
export declare function findNearbySchools(options: ProximityOptions): (School & {
    distanceKm: number;
})[];
/**
 * Searches all schools by name, zone, or district
 */
export declare function searchSchools(query: string, options?: {
    district?: string | number;
    zone?: string;
    limit?: number;
}): School[];
//# sourceMappingURL=schools.d.ts.map