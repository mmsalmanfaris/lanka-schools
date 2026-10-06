import { describe, it, expect } from 'vitest';
import {
  getSchools,
  getSchoolById,
  findNearbySchools,
  searchSchools,
} from '../src/schools';

describe('Island-wide Schools module', () => {
  it('should return all 10,146 schools', () => {
    const schools = getSchools();
    expect(schools).toHaveLength(10146);
  });

  it('should filter schools by district', () => {
    const colomboSchools = getSchools({ district: 'Colombo' });
    expect(colomboSchools.length).toBeGreaterThan(300);
    expect(colomboSchools.every((s) => s.district === 'Colombo')).toBe(true);
  });

  it('should filter schools by education level', () => {
    const primarySchools = getSchools({ educationLevel: 'Primary' });
    expect(primarySchools.length).toBeGreaterThan(1000);
    expect(primarySchools.every((s) => s.educationLevel === 'Primary')).toBe(true);
  });

  it('should filter national schools', () => {
    const national = getSchools({ isNationalSchool: true });
    expect(national.length).toBeGreaterThan(300);
    expect(national.every((s) => s.isNationalSchool)).toBe(true);
  });

  it('should find school by unique ID', () => {
    const school = getSchoolById('LK-SCH-00001');
    expect(school).toBeDefined();
    expect(school?.id).toBe('LK-SCH-00001');
    expect(school?.latitude).toBeDefined();
    expect(school?.longitude).toBeDefined();
  });

  it('should find nearby schools sorted by distance', () => {
    // Colombo Town Hall: 6.9147, 79.8653
    const nearby = findNearbySchools({
      latitude: 6.9147,
      longitude: 79.8653,
      radiusKm: 3.0,
      limit: 10,
    });

    expect(nearby.length).toBeGreaterThan(0);
    expect(nearby.length).toBeLessThanOrEqual(10);
    expect(nearby[0].distanceKm).toBeLessThanOrEqual(3.0);
    // Ascending order check
    for (let i = 1; i < nearby.length; i++) {
      expect(nearby[i].distanceKm).toBeGreaterThanOrEqual(nearby[i - 1].distanceKm);
    }
  });

  it('should search schools by text', () => {
    const results = searchSchools('Mahanama', { district: 'Colombo' });
    expect(results.length).toBeGreaterThan(0);
    expect(results[0].name.toLowerCase()).toContain('mahanama');
  });
});
