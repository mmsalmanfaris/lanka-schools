import { District } from './types';
/**
 * Returns all 25 districts of Sri Lanka
 */
export declare function getDistricts(): District[];
/**
 * Finds a district by its 2-digit code or English/Sinhala/Tamil name or PCODE (e.g. 'LK11')
 */
export declare function getDistrict(codeOrName: number | string): District | undefined;
/**
 * Returns all districts in a given province
 */
export declare function getDistrictsByProvince(provinceCodeOrName: number | string): District[];
//# sourceMappingURL=districts.d.ts.map