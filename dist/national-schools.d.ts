import { NationalSchool } from './types';
/**
 * Returns all 396 national schools of Sri Lanka
 */
export declare function getNationalSchools(): NationalSchool[];
/**
 * Finds a national school by its 5-digit Ministry of Education Census Number (e.g. '00045')
 */
export declare function getNationalSchoolByCensusNo(censusNo: string): NationalSchool | undefined;
/**
 * Returns all national schools in a given district
 */
export declare function getNationalSchoolsByDistrict(districtCodeOrName: number | string): NationalSchool[];
/**
 * Returns all national schools in a given educational zone
 */
export declare function getNationalSchoolsByZone(zoneIdOrName: string): NationalSchool[];
/**
 * Returns all national schools in a given province
 */
export declare function getNationalSchoolsByProvince(provinceCodeOrName: number | string): NationalSchool[];
/**
 * Searches national schools by name, address, census number, or town
 */
export declare function searchNationalSchools(query: string, options?: {
    district?: string | number;
    zone?: string;
    gender?: 'Boys' | 'Girls' | 'Mixed';
    medium?: 'Sinhala' | 'Tamil';
}): NationalSchool[];
//# sourceMappingURL=national-schools.d.ts.map