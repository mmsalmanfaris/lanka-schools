import { Zone } from './types';
/**
 * Returns all 100 educational zones of Sri Lanka
 */
export declare function getZones(): Zone[];
/**
 * Finds an educational zone by slug id or name
 */
export declare function getZone(idOrName: string): Zone | undefined;
/**
 * Returns all educational zones in a specific district
 */
export declare function getZonesByDistrict(districtCodeOrName: number | string): Zone[];
/**
 * Returns all educational zones in a specific province
 */
export declare function getZonesByProvince(provinceCodeOrName: number | string): Zone[];
/**
 * Finds which educational zone contains a specific divisional education office
 */
export declare function findZoneByDivision(divisionName: string): Zone | undefined;
/**
 * Returns a flattened list of all divisional education offices across Sri Lanka
 */
export declare function getAllDivisions(): {
    division: string;
    zone: string;
    district: string;
    province: string;
}[];
/**
 * Searches zones by name, division, town, or alias
 */
export declare function searchZones(query: string): Zone[];
//# sourceMappingURL=zones.d.ts.map