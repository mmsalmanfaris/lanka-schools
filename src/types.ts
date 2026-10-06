/**
 * Type definitions for lanka-schools
 */

export interface ProvincialDepartment {
  name: string;
  address: string;
  phone?: string;
}

export interface Province {
  code: number;
  name: string;
  nameSi: string;
  nameTa: string;
  pcode: string;
  department: ProvincialDepartment;
  districtsCount: number;
  zonesCount: number;
  schoolsCount: number;
  provincialSchoolsCount: number;
  nationalSchoolsCount: number;
}

export interface District {
  code: number;
  name: string;
  nameSi: string;
  nameTa: string;
  pcode: string;
  provinceCode: number;
  provinceName: string;
  zonesCount: number;
  divisionsCount: number;
  schoolsCount: number;
  provincialSchoolsCount: number;
  nationalSchoolsCount: number;
  zones: string[];
}

export interface Zone {
  id: string;
  name: string;
  nameSi: string;
  nameTa: string;
  districtCode: number;
  districtName: string;
  provinceCode: number;
  provinceName: string;
  divisions: string[];
  provincialSchools: number;
  nationalSchools: number;
  totalSchools: number;
  phone: string[];
  email: string | null;
  aliases: string[];
}

export interface NationalSchool {
  seq: number;
  censusNo: string;
  name: string;
  shortName: string;
  address: string;
  districtCode: number;
  districtName: string;
  provinceCode: number;
  provinceName: string;
  zone: string;
  gender: 'Boys' | 'Girls' | 'Mixed';
  mediums: ('Sinhala' | 'Tamil' | 'English')[];
  grade5CutoffSinhala: number | null;
  grade5CutoffTamil: number | null;
  latitude: number | null;
  longitude: number | null;
}

export interface Grade5Cutoff {
  censusNo: string;
  schoolName: string;
  town: string;
  gender: 'Boys' | 'Girls' | 'Mixed';
  medium: 'Sinhala' | 'Tamil';
  cutoff: number;
}

export interface School {
  id: string;
  name: string;
  province: string;
  provinceCode: number;
  district: string;
  districtCode: number;
  zone: string | null;
  latitude: number;
  longitude: number;
  educationLevel: 'Primary' | 'Primary and Secondary' | 'Secondary';
  connectivity: 'Yes' | 'No';
  isNationalSchool: boolean;
  censusNo: string | null;
}

export interface SchoolFilter {
  province?: string | number;
  district?: string | number;
  zone?: string;
  educationLevel?: 'Primary' | 'Primary and Secondary' | 'Secondary';
  connectivity?: 'Yes' | 'No';
  isNationalSchool?: boolean;
}

export interface ProximityOptions {
  latitude: number;
  longitude: number;
  radiusKm?: number;
  limit?: number;
  educationLevel?: 'Primary' | 'Primary and Secondary' | 'Secondary';
  onlyNational?: boolean;
}

export interface EligibleSchoolQuery {
  marks: number;
  gender: 'Boys' | 'Girls' | 'Mixed';
  medium: 'Sinhala' | 'Tamil';
  district?: string;
}

export interface EligibleSchoolResult {
  school: NationalSchool;
  cutoff: number;
  margin: number;
  eligible: boolean;
}
