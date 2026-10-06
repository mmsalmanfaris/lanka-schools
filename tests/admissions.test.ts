import { describe, it, expect } from 'vitest';
import {
  getGrade5Cutoffs,
  getGrade5CutoffsByCensusNo,
  getEligibleNationalSchools,
  getGrade1AdmissionProximity,
} from '../src/admissions';

describe('Admissions and Cutoffs module', () => {
  it('should return Grade 5 cut-off marks', () => {
    const cutoffs = getGrade5Cutoffs();
    expect(cutoffs.length).toBeGreaterThan(200);
  });

  it('should find cutoffs by school census number', () => {
    const royalCutoffs = getGrade5CutoffsByCensusNo('00045');
    expect(royalCutoffs).toHaveLength(2); // Sinhala & Tamil medium
    const sinhala = royalCutoffs.find((c) => c.medium === 'Sinhala');
    const tamil = royalCutoffs.find((c) => c.medium === 'Tamil');
    expect(sinhala?.cutoff).toBe(175);
    expect(tamil?.cutoff).toBe(171);
  });

  it('should calculate student eligibility for high score', () => {
    const results = getEligibleNationalSchools({
      marks: 180,
      gender: 'Boys',
      medium: 'Sinhala',
      district: 'Colombo',
    });

    expect(results.length).toBeGreaterThan(0);
    // Student with 180 marks should be eligible for Royal College (cutoff 175)
    const royal = results.find((r) => r.school.censusNo === '00045');
    expect(royal).toBeDefined();
    expect(royal?.eligible).toBe(true);
    expect(royal?.margin).toBe(5);
  });

  it('should calculate student eligibility for lower score', () => {
    const results = getEligibleNationalSchools({
      marks: 172,
      gender: 'Boys',
      medium: 'Sinhala',
      district: 'Colombo',
    });

    const royal = results.find((r) => r.school.censusNo === '00045');
    expect(royal?.eligible).toBe(false);
    expect(royal?.margin).toBe(-3);

    // But should be eligible for Ananda College (cutoff 170)
    const ananda = results.find((r) => r.school.censusNo === '00046');
    expect(ananda?.eligible).toBe(true);
    expect(ananda?.margin).toBe(2);
  });

  it('should calculate Grade 1 admission catchment distances', () => {
    // Royal College location: approx 6.906, 79.860
    // Residence at 6.910, 79.862 (around 500m away)
    const proximity = getGrade1AdmissionProximity(6.906, 79.86, 6.91, 79.862);
    expect(proximity.distanceKm).toBeLessThan(1.0);
    expect(proximity.withinImmediateCatchment).toBe(true);
    expect(proximity.withinSecondaryCatchment).toBe(true);

    // Far away home (10km)
    const farProximity = getGrade1AdmissionProximity(6.906, 79.86, 6.99, 79.89);
    expect(farProximity.distanceKm).toBeGreaterThan(5.0);
    expect(farProximity.withinImmediateCatchment).toBe(false);
    expect(farProximity.withinSecondaryCatchment).toBe(false);
  });
});
