# lanka-schools 🇱🇰🏫

[![npm version](https://img.shields.io/badge/npm-v1.0.0-blue.svg)](https://www.npmjs.com/package/lanka-schools)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue.svg)](https://www.typescriptlang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![Tests](https://img.shields.io/badge/Tests-29%20Passed-brightgreen.svg)]()
[![Schools](https://img.shields.io/badge/Total%20Schools-10%2C146-orange.svg)]()
[![National Schools](https://img.shields.io/badge/National%20Schools-396-purple.svg)]()
[![Education Zones](https://img.shields.io/badge/Education%20Zones-100-teal.svg)]()

A clean, developer-friendly library and open dataset of all schools in Sri Lanka, structured across every administrative level: **Provinces**, **Districts**, **Educational Zones (Zonal Education Offices)**, and **Divisional Education Offices**.

Available as a zero-dependency **TypeScript/JavaScript library**, pre-compiled **JSON** and **CSV** files, and an embeddable **SQLite database**.

---

## 💡 Why `lanka-schools`?

Sri Lanka's school education system is structured into **9 Provinces**, **25 Administrative Districts**, **100 Educational Zones**, and over **300 Educational Divisions**. 

When building web forms, admissions systems, EdTech apps, or student portals in Sri Lanka, developers usually struggle because:
- Educational administrative boundaries (Zones) differ from administrative divisions (DS Divisions).
- Official data is locked inside scanned government PDFs, annual census gazettes, and disconnected spreadsheets.
- There has been no single npm package or clean dataset that links schools to their official Zonal Education Office and 5-digit Ministry of Education Census ID.

`lanka-schools` solves this by giving you verified, structured data and intuitive lookup functions with **zero external dependencies**.

---

## 📊 What's in the Dataset?

| Category | Count | Key Details |
|---|---|---|
| **Provinces** | **9** | English, Sinhala (`බස්නාහිර`), Tamil (`மேல்`), Province Codes (1–9), PCODE (`LK1`–`LK9`), Provincial Department contact address & phone |
| **Districts** | **25** | English, Sinhala (`කොළඹ`), Tamil (`கொழும்பு`), District Codes (11–92), PCODE (`LK11`–`LK92`), mapped to Province |
| **Educational Zones** | **100** | Zone name, slug ID, District, Province, **312+ Divisional Education Offices**, school counts, official telephone numbers & emails |
| **National Schools** | **396** | 5-Digit MOE Census ID (e.g., `00045`), school name, address, gender (`Boys`/`Girls`/`Mixed`), mediums, geocoordinates |
| **Island-wide Schools** | **10,146** | Unique ID (`LK-SCH-xxxxx`), GPS coordinates, district, educational zone, education level, internet connectivity status |

---

## 🚀 Installation

```bash
# npm
npm install lanka-schools

# yarn
yarn add lanka-schools

# pnpm
pnpm add lanka-schools
```

### Import Styles

Supports both **ES Modules (ESM)** and **CommonJS (CJS)** out of the box:

```typescript
// ES Modules / TypeScript
import { getProvinces, getDistricts, getZones } from 'lanka-schools';

// CommonJS (Node.js)
const { getProvinces, getDistricts, getZones } = require('lanka-schools');
```

> 💡 **Bundle Optimization Tip (Subpath Imports)**  
> If you are building a frontend web application (e.g., Next.js, Vite, React) and only need administrative boundaries for dropdowns, import directly from the subpaths to keep your client bundle lightweight:
> ```typescript
> import { getProvinces } from 'lanka-schools/provinces'; // ~6 KB
> import { getDistricts } from 'lanka-schools/districts'; // ~22 KB
> import { getZones }     from 'lanka-schools/zones';     // ~75 KB
> ```

---

## 📖 Quickstart & Examples

### 1. Cascading Dropdowns (`Province ➔ District ➔ Zone ➔ School`)

Easily populate multi-step dropdowns in forms:

```typescript
import {
  getProvinces,
  getDistrictsByProvince,
  getZonesByDistrict,
  getNationalSchoolsByZone,
} from 'lanka-schools';

// 1. Get all 9 provinces
const provinces = getProvinces();

// 2. Get districts in Western Province (Colombo, Gampaha, Kalutara)
const districts = getDistrictsByProvince('Western');

// 3. Get all 4 educational zones in Colombo District (Colombo, Homagama, Piliyandala, Sri Jayawardenapura)
const zones = getZonesByDistrict('Colombo');

// 4. Get all national schools in Colombo Zone
const schools = getNationalSchoolsByZone('Colombo');
console.log(schools.map((s) => s.shortName));
// => ["Royal College", "Ananda College", "Nalanda College", "Visakha Vidyalaya", ...]
```

---

### 2. Find Zonal Education Office by Division or Town

Parents and students often only know their local town or division (e.g. *Moratuwa*, *Wattala*, *Nittambuwa*). You can look up the corresponding Zonal Education Office and its official contact details:

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

### 3. National School Lookup by 5-Digit MOE Census ID

The Ministry of Education assigns every school an official 5-digit Census Number (e.g., `00045` for Royal College, `00081` for Visakha Vidyalaya). This number stays the same even if the school changes names:

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

### 4. Search National Schools by Name, District, or Gender

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

### 5. Find Nearby Schools by GPS Coordinates (Island-wide)

Search within any radius of coordinates across all 10,146 schools:

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

### 6. Filter & Search All 10,146 Schools

```typescript
import { getSchools, searchSchools } from 'lanka-schools';

// Filter schools with internet connectivity in Galle
const connectedInGalle = getSchools({
  district: 'Galle',
  connectivity: 'Yes',
});

// Search schools by name across the country
const results = searchSchools('Mahanama', { district: 'Colombo' });
```

---

## 🗃️ Raw Datasets (JSON, CSV, SQLite)

If you are using Python, R, Go, Flutter, or SQL, you can use the raw datasets located directly in `data/`:

| File | Format | Description |
|---|---|---|
| [`data/provinces.json`](./data/provinces.json) / [`.csv`](./data/provinces.csv) | JSON / CSV | 9 Provinces with names (EN/SI/TA), PCODEs, and department contacts |
| [`data/districts.json`](./data/districts.json) / [`.csv`](./data/districts.csv) | JSON / CSV | 25 Districts with names (EN/SI/TA), PCODEs, and zone mappings |
| [`data/zones.json`](./data/zones.json) / [`.csv`](./data/zones.csv) | JSON / CSV | 100 Educational Zones with 312+ divisions, school counts, and phone/email |
| [`data/national-schools.json`](./data/national-schools.json) / [`.csv`](./data/national-schools.csv) | JSON / CSV | 396 National Schools with official 5-digit Census IDs, addresses, and GPS |
| [`data/schools.json`](./data/schools.json) / [`.csv`](./data/schools.csv) | JSON / CSV | 10,146 schools island-wide with coordinates, level, and internet connectivity |
| [`data/lanka-schools.sqlite`](./data/lanka-schools.sqlite) | SQLite DB | Pre-indexed SQLite database (1.9 MB) with relational tables and B-Tree indexes |

### Querying the SQLite Database Directly:

```python
import sqlite3

conn = sqlite3.connect('data/lanka-schools.sqlite')
cur = conn.cursor()

# Find all national schools in Galle District
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

## 📚 API Reference

### Provinces
- `getProvinces(): Province[]` - Returns all 9 provinces.
- `getProvince(codeOrName: number | string): Province | undefined` - Finds a province by code (e.g. `1`), English name (`"Western"`), Sinhala (`"බස්නාහිර පළාත"`), Tamil (`"மேல் மாகாணம்"`), or PCODE (`"LK1"`).

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
- `getAllDivisions(): { division, zone, district, province }[]` - Returns a flattened list of all 312+ divisional offices.
- `searchZones(query: string): Zone[]` - Searches zones by name, division, or town.

### National Schools
- `getNationalSchools(): NationalSchool[]` - Returns all 396 national schools.
- `getNationalSchoolByCensusNo(censusNo: string): NationalSchool | undefined` - Looks up a school by official 5-digit Census Number (e.g. `"00045"`).
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

## 🏛️ Official Sources & Citations

1. **Ministry of Education (MOE), Sri Lanka**:
   - *Annual School Census Reports* (Statistics Branch)
   - *Official List of National Schools & Zonal Education Offices*
2. **Department of Census and Statistics (DCS), Sri Lanka**:
   - District demographic profiles and census identifiers.
3. **Survey Department of Sri Lanka & UN OCHA**:
   - Subnational administrative boundary standards and PCODE mappings.
4. **UNICEF & ITU Giga Initiative**:
   - Geolocation coordinates and connectivity mapping of 10,146 school facilities in Sri Lanka.

---

## 🤝 Contributing

Contributions are welcome! Please read [CONTRIBUTING.md](./CONTRIBUTING.md) for details on our workflow.

**Important Note on Branching**:
- All Pull Requests must target the **`development`** branch.
- The `main` branch is reserved for tagged production releases on npm.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
Data compiled and organized for public benefit and developer accessibility in Sri Lanka.
