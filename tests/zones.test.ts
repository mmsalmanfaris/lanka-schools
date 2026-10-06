import { describe, it, expect } from 'vitest';
import {
  getZones,
  getZone,
  getZonesByDistrict,
  getZonesByProvince,
  findZoneByDivision,
  getAllDivisions,
  searchZones,
} from '../src/zones';

describe('Zones module', () => {
  it('should return exactly 100 educational zones', () => {
    const zones = getZones();
    expect(zones).toHaveLength(100);
  });

  it('should find zone by id', () => {
    const pili = getZone('piliyandala');
    expect(pili).toBeDefined();
    expect(pili?.name).toBe('Piliyandala');
    expect(pili?.districtName).toBe('Colombo');
    expect(pili?.divisions).toEqual(['Dehiwala', 'Kesbewa', 'Moratuwa']);
    expect(pili?.totalSchools).toBe(85);
    expect(pili?.nationalSchools).toBe(5);
  });

  it('should find zones by district', () => {
    const colomboZones = getZonesByDistrict('Colombo');
    expect(colomboZones).toHaveLength(4);
    const names = colomboZones.map((z) => z.name);
    expect(names).toEqual([
      'Colombo',
      'Homagama',
      'Piliyandala',
      'Sri Jayawardenapura',
    ]);
  });

  it('should find zones by province', () => {
    const westernZones = getZonesByProvince('Western');
    expect(westernZones).toHaveLength(11);
  });

  it('should find zone by division', () => {
    const zoneFromDiv = findZoneByDivision('Moratuwa');
    expect(zoneFromDiv).toBeDefined();
    expect(zoneFromDiv?.name).toBe('Piliyandala');

    const zoneFromWattala = findZoneByDivision('Wattala');
    expect(zoneFromWattala).toBeDefined();
    expect(zoneFromWattala?.name).toBe('Kelaniya');
  });

  it('should retrieve all divisions across Sri Lanka', () => {
    const divisions = getAllDivisions();
    expect(divisions.length).toBeGreaterThan(300);
    const sample = divisions.find((d) => d.division === 'Moratuwa');
    expect(sample?.zone).toBe('Piliyandala');
    expect(sample?.district).toBe('Colombo');
  });

  it('should search zones by query', () => {
    const results = searchZones('Kelaniya');
    expect(results.length).toBeGreaterThan(0);
    expect(results[0].name).toBe('Kelaniya');
  });
});
