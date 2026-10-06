import { describe, it, expect } from 'vitest';
import { getProvinces, getProvince } from '../src/provinces';

describe('Provinces module', () => {
  it('should return exactly 9 provinces', () => {
    const provinces = getProvinces();
    expect(provinces).toHaveLength(9);
  });

  it('should find province by code', () => {
    const western = getProvince(1);
    expect(western).toBeDefined();
    expect(western?.name).toBe('Western');
    expect(western?.pcode).toBe('LK1');
    expect(western?.districtsCount).toBe(3);
    expect(western?.zonesCount).toBe(11);
  });

  it('should find province by English name', () => {
    const central = getProvince('Central');
    expect(central).toBeDefined();
    expect(central?.code).toBe(2);
  });

  it('should find province by Sinhala and Tamil names', () => {
    const pSi = getProvince('බස්නාහිර පළාත');
    expect(pSi).toBeDefined();
    expect(pSi?.code).toBe(1);

    const pTa = getProvince('மேல் மாகாணம்');
    expect(pTa).toBeDefined();
    expect(pTa?.code).toBe(1);
  });

  it('should include department contact details', () => {
    const western = getProvince(1);
    expect(western?.department.name).toContain('Western Provincial Department');
    expect(western?.department.phone).toBe('0112875893');
  });
});

