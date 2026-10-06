import provincesData from '../data/provinces.json';
import { Province } from './types';
import { normalizeText } from './utils';

const provinces: Province[] = provincesData as Province[];

/**
 * Returns all 9 provinces of Sri Lanka
 */
export function getProvinces(): Province[] {
  return [...provinces];
}

/**
 * Finds a province by its 1-digit code or English/Sinhala/Tamil name
 */
export function getProvince(codeOrName: number | string): Province | undefined {
  if (typeof codeOrName === 'number') {
    return provinces.find((p) => p.code === codeOrName);
  }
  const query = normalizeText(codeOrName);
  return provinces.find(
    (p) =>
      normalizeText(p.name) === query ||
      p.nameSi.trim() === codeOrName.trim() ||
      p.nameTa.trim() === codeOrName.trim() ||
      p.pcode.toLowerCase() === codeOrName.toLowerCase()
  );
}

