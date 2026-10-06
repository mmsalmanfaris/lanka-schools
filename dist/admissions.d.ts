import { Grade5Cutoff, EligibleSchoolQuery, EligibleSchoolResult } from './types';
/**
 * Returns all official Grade 5 scholarship cut-off marks
 */
export declare function getGrade5Cutoffs(): Grade5Cutoff[];
/**
 * Finds Grade 5 cutoffs by census number
 */
export declare function getGrade5CutoffsByCensusNo(censusNo: string): Grade5Cutoff[];
/**
 * Evaluates which National Schools a student is eligible for based on their Grade 5 Scholarship score,
 * gender, medium of instruction, and optional district.
 *
 * Essential for school admission apps and EdTech student advisory tools.
 */
export declare function getEligibleNationalSchools(params: EligibleSchoolQuery): EligibleSchoolResult[];
/**
 * Analyzes proximity between a applicant's residence and a school for Grade 1 admissions.
 * In Sri Lanka, Grade 1 admissions prioritize residents residing within immediate catchment categories.
 *
 * @param schoolLat Latitude of school
 * @param schoolLon Longitude of school
 * @param homeLat Latitude of applicant residence
 * @param homeLon Longitude of applicant residence
 */
export declare function getGrade1AdmissionProximity(schoolLat: number, schoolLon: number, homeLat: number, homeLon: number): {
    distanceKm: number;
    withinImmediateCatchment: boolean;
    withinSecondaryCatchment: boolean;
};
//# sourceMappingURL=admissions.d.ts.map