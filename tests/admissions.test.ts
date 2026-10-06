import { describe, it, expect } from 'vitest';
import { getGrade1AdmissionProximity } from '../src/admissions';

describe('Admissions module', () => {
  it('should calculate Grade 1 admission catchment distances', () => {
    // Royal College location: approx 6.906, 79.860
    // Residence in Cinnamon Gardens (6.910, 79.862) -> around 500m away
    const proximity = getGrade1AdmissionProximity(6.906, 79.86, 6.91, 79.862);
    expect(proximity.distanceKm).toBeLessThan(1.0);
    expect(proximity.withinImmediateCatchment).toBe(true);
    expect(proximity.withinSecondaryCatchment).toBe(true);

    // Far away home (around 10km)
    const farProximity = getGrade1AdmissionProximity(6.906, 79.86, 6.99, 79.89);
    expect(farProximity.distanceKm).toBeGreaterThan(5.0);
    expect(farProximity.withinImmediateCatchment).toBe(false);
    expect(farProximity.withinSecondaryCatchment).toBe(false);
  });

  it('should differentiate between immediate and secondary catchments', () => {
    // Distance approx 3.5 km
    const mediumProximity = getGrade1AdmissionProximity(6.906, 79.86, 6.937, 79.86);
    expect(proximityRange(mediumProximity.distanceKm, 2.5, 4.5)).toBe(true);
    expect(mediumProximity.withinImmediateCatchment).toBe(false);
    expect(mediumProximity.withinSecondaryCatchment).toBe(true);
  });
});

function proximityRange(val: number, min: number, max: number): boolean {
  return val >= min && val <= max;
}
