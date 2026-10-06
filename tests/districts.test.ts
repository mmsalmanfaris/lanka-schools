import { describe, it, expect } from 'vitest';
import { getDistricts, getDistrict, getDistrictsByProvince } from '../src/districts';

describe('Districts module', () => {
  it('should return exactly 25 districts', () => {
    const districts = getDistricts();
    expect(districts).toHaveLength(25);
  });

  it('should find district by code', () => {
    const colombo = getDistrict(11);
    expect(colombo).toBeDefined();
    expect(colombo?.name).toBe('Colombo');
    expect(colombo?.pcode).toBe('LK11');
    expect(colombo?.provinceName).toBe('Western');
    expect(colombo?.zonesCount).toBe(4);
    expect(colombo?.nationalSchoolsCount).toBe(39);
  });

  it('should find district by PCODE and name', () => {
    const kandy = getDistrict('LK21');
    expect(kandy).toBeDefined();
    expect(kandy?.name).toBe('Kandy');

    const galle = getDistrict('galle');
    expect(galle).toBeDefined();
    expect(galle?.code).toBe(31);
  });

  it('should return districts by province', () => {
    const westernDistricts = getDistrictsByProvince(1);
    expect(westernDistricts).toHaveLength(3);
    const names = westernDistricts.map((d) => d.name);
    expect(names).toEqual(['Colombo', 'Gampaha', 'Kalutara']);
  });
});

