# Lanka Schools

> Open dataset and developer library for schools, educational zones, districts, and GIS mapping in Sri Lanka.  
> (ශ්‍රී ලංකාවේ පාසල් නාමාවලිය / இலங்கை பாடசாலைகள்)

[![npm version](https://img.shields.io/badge/npm-v1.0.0-blue.svg)](https://www.npmjs.com/package/lanka-schools)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue.svg)](https://www.typescriptlang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![Tests](https://img.shields.io/badge/Tests-29%20Passed-brightgreen.svg)]()
[![Schools](https://img.shields.io/badge/Total%20Schools-10%2C146-orange.svg)]()
[![National Schools](https://img.shields.io/badge/National%20Schools-396-purple.svg)]()
[![Education Zones](https://img.shields.io/badge/Education%20Zones-100-teal.svg)]()

`lanka-schools` is a zero-dependency TypeScript/JavaScript library, JSON/CSV dataset, and SQLite database of all 10,146 schools in Sri Lanka, organized across all 4 administrative tiers: **Provinces**, **Districts**, **Educational Zones**, and **Divisional Education Offices**.

---

## Table of Contents

- [Overview](#overview)
- [Dataset Summary](#dataset-summary)
- [Installation](#installation)
- [Import Styles](#import-styles)
- [Quickstart Examples](#quickstart-examples)
  - [1. Cascading Dropdowns](#1-cascading-dropdowns)
  - [2. Find Educational Zone by Town or Division](#2-find-educational-zone-by-town-or-division)
  - [3. National School Lookup by MOE Census ID](#3-national-school-lookup-by-moe-census-id)
  - [4. Search National Schools](#4-search-national-schools)
  - [5. Find Nearby Schools by GPS Coordinates](#5-find-nearby-schools-by-gps-coordinates)
  - [6. Filter and Search All Schools](#6-filter-and-search-all-schools)
- [Raw Datasets (JSON, CSV, SQLite)](#raw-datasets-json-csv-sqlite)
- [API Reference](#api-reference)
- [Official Sources](#official-sources)
- [Contributing](#contributing)
- [License](#license)

---

## Overview

Sri Lanka's school system is organized under **9 Provinces**, **25 Districts**, **100 Educational Zones**, and over **300 Educational Divisions**.

In most applications (such as school admissions, student portals, and EdTech platforms), developers face several challenges:
- Educational administrative boundaries (Zones) differ from general administrative divisions (Divisional Secretariats).
- Official data is scattered across scanned PDFs, gazettes, and disconnected spreadsheets.
- There has been no unified package linking schools to official Zonal Education Offices and 5-digit Ministry of Education (MOE) Census IDs.

`lanka-schools` provides clean, validated data and helper functions with **zero runtime dependencies**.

---

## Dataset Summary

| Category | Count | Key Details |
|---|---|---|
| **Provinces** | **9** | Names in English, Sinhala (`බස්නාහිර`), and Tamil (`மேல்`), Province Codes (1–9), UN PCODEs (`LK1`–`LK9`), Provincial Department contact address and phone |
| **Districts** | **25** | Names in English, Sinhala (`කොළඹ`), and Tamil (`கொழும்பு`), District Codes (11–92), PCODEs (`LK11`–`LK92`), mapped to Province |
| **Educational Zones** | **100** | Zone name, slug ID, District, Province, 312+ Divisional Education Offices, school counts, official phone numbers and emails |
| **National Schools** | **396** | Official 5-digit MOE Census ID (e.g. `00045`), school name, address, gender (`Boys`, `Girls`, `Mixed`), mediums, coordinates |
| **Island-wide Schools** | **10,146** | Unique ID (`LK-SCH-xxxxx`), GPS coordinates, district, educational zone, education level, internet connectivity status |

---

## Installation

```bash
# npm
npm install lanka-schools

# yarn
yarn add lanka-schools

# pnpm
pnpm add lanka-schools
```

---

## Import Styles

Supports both **ES Modules (ESM)** and **CommonJS (CJS)**:

```typescript
// ES Modules / TypeScript
import { getProvinces, getDistricts, getZones } from 'lanka-schools';

// CommonJS
const { getProvinces, getDistricts, getZones } = require('lanka-schools');
```

### Subpath Imports (Frontend Bundle Optimization)

If you only need administrative boundaries for dropdowns in web apps (React, Next.js, Vue), import from subpaths to avoid loading the full 10,000-school dataset into client bundles:

```typescript
import { getProvinces } from 'lanka-schools/provinces'; // ~6 KB
import { getDistricts } from 'lanka-schools/districts'; // ~22 KB
import { getZones }     from 'lanka-schools/zones';     // ~75 KB
```

---

## Quickstart Examples

### 1. Cascading Dropdowns

Easily build dependent dropdowns (`Province -> District -> Zone -> School`):

```typescript
import {
  getProvinces,
  getDistrictsByProvince,
  getZonesByDistrict,
  getNationalSchoolsByZone,
} from 'lanka-schools';

// 1. Get all 9 provinces
const provinces = getProvinces();

// 2. Get districts in Western Province
const districts = getDistrictsByProvince('Western');

// 3. Get all educational zones in Colombo District
const zones = getZonesByDistrict('Colombo');

// 4. Get national schools in Colombo Zone
const schools = getNationalSchoolsByZone('Colombo');
console.log(schools.map((s) => s.shortName));
// => ["Royal College", "Ananda College", "Nalanda College", "Visakha Vidyalaya", ...]
```

---

### 2. Find Educational Zone by Town or Division

Parents and students often know their home town or divisional office (e.g. *Moratuwa*, *Wattala*, *Nittambuwa*). Look up the governing Zonal Education Office and contact details:

```typescript
import { findZoneByDivision } from 'lanka-schools';

const zone = findZoneByDivision('Moratuwa');

console.log(zone?.name);         // "Piliyandala"
console.log(zone?.districtName); // "Colombo"
console.log(zone?.phone);        // ["0112614200"]
console.log(zone?.email);        // "pil@edudept.wp.gov.lk"
console.log(zone?.divisions);    // ["Dehiwala", "Kesbewa", "Moratuwa"]
```

---

### 3. National School Lookup by MOE Census ID

The Ministry of Education assigns every school a permanent 5-digit Census Number (e.g. `00045` for Royal College, `00081` for Visakha Vidyalaya):

```typescript
import { getNationalSchoolByCensusNo } from 'lanka-schools';

const school = getNationalSchoolByCensusNo('00045');

console.log(school?.name);         // "Colombo Royal College"
console.log(school?.address);      // "Rajakeeya Mw, Colombo 07"
console.log(school?.gender);       // "Boys"
console.log(school?.districtName); // "Colombo"
console.log(school?.zone);         // "Colombo"
console.log(school?.latitude);     // 6.9063
console.log(school?.longitude);    // 79.8606
```

---

### 4. Search National Schools

Search by school name, town, district, or gender:

```typescript
import { searchNationalSchools } from 'lanka-schools';

// Find all girls' national schools in Kandy District
const kandyGirls = searchNationalSchools('', {
  district: 'Kandy',
  gender: 'Girls',
});

kandyGirls.forEach((s) => {
  console.log(`${s.censusNo} - ${s.name} (${s.zone} Zone)`);
});
```

---

### 5. Find Nearby Schools by GPS Coordinates

Find schools within any kilometer radius from coordinates:

```typescript
import { findNearbySchools } from 'lanka-schools';

// Find schools within 3 km of Kandy City Center (7.2906, 80.6337)
const nearby = findNearbySchools({
  latitude: 7.2906,
  longitude: 80.6337,
  radiusKm: 3.0,
  limit: 5,
});

nearby.forEach((s) => {
  console.log(`${s.name} (${s.distanceKm} km away) - Zone: ${s.zone}`);
});
```

---

### 6. Filter and Search All Schools

Filter across all 10,146 schools:

```typescript
import { getSchools, searchSchools } from 'lanka-schools';

// Filter schools with internet connectivity in Galle
const connectedInGalle = getSchools({
  district: 'Galle',
  connectivity: 'Yes',
});

// Search schools by name in Colombo
const results = searchSchools('Mahanama', { district: 'Colombo' });
```

---

## Raw Datasets (JSON, CSV, SQLite)

For non-JavaScript environments (Python, R, Go, Flutter, SQL), use the pre-compiled files in `data/`:

| File | Format | Description |
|---|---|---|
| [`data/provinces.json`](./data/provinces.json) / [`.csv`](./data/provinces.csv) | JSON / CSV | 9 Provinces with names (EN/SI/TA), PCODEs, and department contacts |
| [`data/districts.json`](./data/districts.json) / [`.csv`](./data/districts.csv) | JSON / CSV | 25 Districts with names (EN/SI/TA), PCODEs, and zone mappings |
| [`data/zones.json`](./data/zones.json) / [`.csv`](./data/zones.csv) | JSON / CSV | 100 Educational Zones with 312+ divisions, school counts, and phone/email |
| [`data/national-schools.json`](./data/national-schools.json) / [`.csv`](./data/national-schools.csv) | JSON / CSV | 396 National Schools with official Census IDs, addresses, and GPS |
| [`data/schools.json`](./data/schools.json) / [`.csv`](./data/schools.csv) | JSON / CSV | 10,146 schools island-wide with coordinates, level, and internet connectivity |
| [`data/lanka-schools.sqlite`](./data/lanka-schools.sqlite) | SQLite DB | Pre-indexed 1.9 MB SQLite database with relational tables and indexes |

### Python SQLite Example

```python
import sqlite3

conn = sqlite3.connect('data/lanka-schools.sqlite')
cur = conn.cursor()

# Find national schools in Galle District
cur.execute("""
    SELECT n.census_no, n.name, n.zone, n.gender
    FROM national_schools n
    JOIN districts d ON n.district_code = d.code
    WHERE d.name = 'Galle'
    ORDER BY n.name ASC
""")

for row in cur.fetchall():
    print(row)
```

---

## API Reference

### Provinces
- `getProvinces(): Province[]` - Returns all 9 provinces.
- `getProvince(codeOrName: number | string): Province | undefined` - Finds a province by code (`1`), English name (`"Western"`), Sinhala (`"බස්නාහිර පළාත"`), Tamil (`"மேல் மாகாணம்"`), or PCODE (`"LK1"`).

### Districts
- `getDistricts(): District[]` - Returns all 25 districts.
- `getDistrict(codeOrName: number | string): District | undefined` - Finds a district by code (`11`), English name (`"Colombo"`), Sinhala, Tamil, or PCODE (`"LK11"`).
- `getDistrictsByProvince(province: number | string): District[]` - Returns all districts in a province.

### Educational Zones
- `getZones(): Zone[]` - Returns all 100 educational zones.
- `getZone(idOrName: string): Zone | undefined` - Finds a zone by ID slug (`"piliyandala"`) or name (`"Piliyandala"`).
- `getZonesByDistrict(district: number | string): Zone[]` - Returns all zones in a district.
- `getZonesByProvince(province: number | string): Zone[]` - Returns all zones in a province.
- `findZoneByDivision(divisionName: string): Zone | undefined` - Finds which zone covers a given town or divisional education office.
- `getAllDivisions(): { division, zone, district, province }[]` - Returns a list of all 312+ divisional offices.
- `searchZones(query: string): Zone[]` - Searches zones by name, division, or town.

### National Schools
- `getNationalSchools(): NationalSchool[]` - Returns all 396 national schools.
- `getNationalSchoolByCensusNo(censusNo: string): NationalSchool | undefined` - Looks up a school by 5-digit Census Number (e.g. `"00045"`).
- `getNationalSchoolsByDistrict(district: number | string): NationalSchool[]` - National schools in a district.
- `getNationalSchoolsByZone(zone: string): NationalSchool[]` - National schools in a zone.
- `getNationalSchoolsByProvince(province: number | string): NationalSchool[]` - National schools in a province.
- `searchNationalSchools(query: string, options?): NationalSchool[]` - Search national schools by name, address, gender, or district.

### Island-wide Schools (10,146 Schools)
- `getSchools(filter?: SchoolFilter): School[]` - Filter schools by province, district, zone, level, or connectivity.
- `getSchoolById(idOrCensusNo: string): School | undefined` - Lookup school by unique ID (`"LK-SCH-00045"`) or census number.
- `findNearbySchools(options: ProximityOptions): (School & { distanceKm: number })[]` - Finds schools within a radius of GPS coordinates, sorted by distance.
- `searchSchools(query: string, options?): School[]` - Search all schools by name or town.

### Utilities
- `calculateDistance(lat1, lon1, lat2, lon2): number` - Haversine great-circle distance in kilometers.

---

## Official Sources

1. **Ministry of Education (MOE), Sri Lanka**:
   - Annual School Census Reports (Statistics Branch)
   - Official List of National Schools & Zonal Education Offices
2. **Department of Census and Statistics (DCS), Sri Lanka**:
   - District demographic profiles and census identifiers
3. **Survey Department of Sri Lanka & UN OCHA**:
   - Subnational administrative boundary standards and PCODE mappings
4. **UNICEF & ITU Giga Initiative**:
   - Geolocation coordinates and connectivity mapping of 10,146 school facilities in Sri Lanka

---

## Contributing

Contributions are welcome. Please read [CONTRIBUTING.md](./CONTRIBUTING.md) for details on our workflow.

**Branching Strategy**:
- All Pull Requests must target the **`development`** branch.
- The `main` branch is reserved for tagged production releases on npm.

---

## License

This project is licensed under the [MIT License](LICENSE).
Data compiled and organized for public benefit and developer accessibility in Sri Lanka.
