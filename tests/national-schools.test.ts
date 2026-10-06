import { describe, it, expect } from 'vitest';
import {
  getNationalSchools,
  getNationalSchoolByCensusNo,
  getNationalSchoolsByDistrict,
  getNationalSchoolsByZone,
  searchNationalSchools,
} from '../src/national-schools';

describe('National Schools module', () => {
  it('should return all 396 national schools', () => {
    const schools = getNationalSchools();
    expect(schools).toHaveLength(396);
  });

  it('should find school by 5-digit census number', () => {
    const royal = getNationalSchoolByCensusNo('00045');
    expect(royal).toBeDefined();
    expect(royal?.name).toContain('Royal College');
    expect(royal?.districtName).toBe('Colombo');
    expect(royal?.zone).toBe('Colombo');
    expect(royal?.gender).toBe('Boys');
    expect(royal?.grade5CutoffSinhala).toBe(175);
    expect(royal?.grade5CutoffTamil).toBe(171);
    expect(royal?.latitude).toBeCloseTo(6.906, 1);
  });

  it('should find school by census number without leading zero padding', () => {
    const royal = getNationalSchoolByCensusNo('45');
    expect(royal).toBeDefined();
    expect(royal?.name).toContain('Royal College');
  });

  it('should return national schools by district', () => {
    const colomboSchools = getNationalSchoolsByDistrict('Colombo');
    expect(colomboSchools).toHaveLength(39);
  });

  it('should return national schools by zone', () => {
    const colomboZoneSchools = getNationalSchoolsByZone('Colombo');
    expect(colomboZoneSchools.length).toBeGreaterThanOrEqual(20);
  });

  it('should search national schools by name, gender and medium', () => {
    const girlsSchools = searchNationalSchools('Balika', { gender: 'Girls' });
    expect(girlsSchools.length).toBeGreaterThan(10);

    const visakha = searchNationalSchools('Visakha');
    expect(visakha.length).toBeGreaterThan(0);
    expect(visakha[0].name).toContain('Visakha');
    expect(visakha[0].grade5CutoffSinhala).toBe(176);
  });
});
