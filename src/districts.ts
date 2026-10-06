import districtsData from '../data/districts.json';
import { District } from './types';
import { normalizeText } from './utils';
import { getProvince } from './provinces';

const districts: District[] = districtsData as District[];

/**
 * Returns all 25 districts of Sri Lanka
 */
export function getDistricts(): District[] {
  return [...districts];
}

/**
 * Finds a district by its 2-digit code or English/Sinhala/Tamil name or PCODE (e.g. 'LK11')
 */
export function getDistrict(codeOrName: number | string): District | undefined {
  if (typeof codeOrName === 'number') {
    return districts.find((d) => d.code === codeOrName);
  }
  const query = normalizeText(codeOrName);
  return districts.find(
    (d) =>
      normalizeText(d.name) === query ||
      d.nameSi.trim() === codeOrName.trim() ||
      d.nameTa.trim() === codeOrName.trim() ||
      d.pcode.toLowerCase() === codeOrName.toLowerCase()
  );
}

/**
 * Returns all districts in a given province
 */
export function getDistrictsByProvince(
  provinceCodeOrName: number | string
): District[] {
  const prov = getProvince(provinceCodeOrName);
  if (!prov) return [];
  return districts.filter((d) => d.provinceCode === prov.code);
}

