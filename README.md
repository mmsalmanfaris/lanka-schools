# lanka-schools 🇱🇰🏫

[![npm version](https://img.shields.io/badge/npm-v1.0.0-blue.svg)](https://www.npmjs.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue.svg)](https://www.typescriptlang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![Tests](https://img.shields.io/badge/Tests-34%20Passed-brightgreen.svg)]()
[![Schools](https://img.shields.io/badge/Total%20Schools-10%2C146-orange.svg)]()
[![National Schools](https://img.shields.io/badge/National%20Schools-396-purple.svg)]()
[![Education Zones](https://img.shields.io/badge/Education%20Zones-100-teal.svg)]()

> The comprehensive open dataset and developer SDK for Sri Lankan schools organized by Province, District, Educational Zone, and Divisional Office.
>
> Specially designed for **school admissions applications**, **EdTech platforms**, **student information systems (SIS)**, and **GIS educational planning**.

---

## 📌 Overview

The general education system in Sri Lanka operates under a hierarchical administrative structure governed by the **Ministry of Education (MOE)** and Provincial Departments of Education. Navigating this structure—especially linking schools to their specific **Educational Zone (Zonal Education Office)** and **Educational Division**—is essential for:

1. **Grade 1 Admissions**: Validating residential catchment areas, calculating proximity distance, and identifying relevant divisional education offices for appeals.
2. **Grade 5 Scholarship Admissions (Grade 6 entry)**: Determining eligibility for **National Schools** based on official district and gender/medium cut-off marks.
3. **EdTech & Form UX**: Providing clean, cascading dropdowns (`Province ➔ District ➔ Education Zone ➔ School`) with multilingual support (English, Sinhala, Tamil).
4. **Data Science & Geospatial Analysis**: Exploring internet connectivity, school distribution, and pupil access across all 25 districts and 100 zones.

---

## 📊 Dataset Contents & Hierarchy

| Administrative Level | Total Count | Included Fields |
|---|---|---|
| **Provinces** | **9** | Code (1–9), English, Sinhala (`බස්නාහිර`), Tamil (`மேல்`), PCODE (`LK1`), Provincial Department contact & address |
| **Districts** | **25** | Code (11–92), English, Sinhala, Tamil, PCODE, Province Code, Zone counts, National School counts, Total school counts |
| **Educational Zones** | **100** | Zone slug/ID, Name (EN/SI/TA), District, Province, **312+ Divisional Education Offices**, School counts, Official Zonal Office Phone & Email, Search Aliases |
| **National Schools** | **396** | 5-Digit MOE Census ID (e.g. `00045`), Official name, Address, District, Zone, Gender (`Boys`/`Girls`/`Mixed`), Mediums, Geocoordinates, Grade 5 Cut-offs |
| **Grade 5 Scholarship Cut-offs** | **281** | Census ID, School name, Town, Gender, Medium (`Sinhala`/`Tamil`), Cut-off mark |
| **Island-wide Schools** | **10,146** | Unique ID (`LK-SCH-xxxxx`), Verified Latitude & Longitude, District (GIS polygon-matched), Educational Zone, Education Level, Internet Connectivity |

---

## 📁 Available Formats

Everything is pre-compiled and ready to use in multiple formats in the [`data/`](./data) directory:

- **TypeScript / JavaScript SDK** (ESM & CommonJS with full type declarations)
- **JSON** (`data/provinces.json`, `data/districts.json`, `data/zones.json`, `data/national-schools.json`, `data/grade5-cutoffs.json`, `data/schools.json`)
- **CSV** (`data/provinces.csv`, `data/districts.csv`, `data/zones.csv`, `data/national-schools.csv`, `data/grade5-cutoffs.csv`, `data/schools.csv`)
- **SQLite Database** (`data/lanka-schools.sqlite`) with relational foreign keys and B-Tree indexes on `district_code`, `zone`, `is_national_school`, and `coordinates`.

---

## 🚀 Installation

```bash
# Using npm
npm install lanka-schools

# Using yarn
yarn add lanka-schools

# Using pnpm
pnpm add lanka-schools
```

---

## 💻 Code Examples

### 1. Hierarchy & Cascading Dropdowns

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
const westernDistricts = getDistrictsByProvince('Western');

// 3. Get all 4 educational zones in Colombo District
// Returns: Colombo, Homagama, Piliyandala, Sri Jayawardenapura
const colomboZones = getZonesByDistrict('Colombo');

// 4. Get all national schools in Colombo Zone
const colomboZoneSchools = getNationalSchoolsByZone('Colombo');
console.log(colomboZoneSchools.map((s) => s.shortName));
// => ["Royal College", "Ananda College", "Nalanda College", "Visakha Vidyalaya", ...]
```

---

### 2. Finding Zonal Office by Divisional Education Office

Parents and schools often only know their local division or town. You can look up the corresponding Zonal Education Office and its contact info:

```typescript
import { findZoneByDivision } from 'lanka-schools';

// When an applicant searches for "Moratuwa" or "Dehiwala"
const zone = findZoneByDivision('Moratuwa');

console.log(zone?.name); // "Piliyandala"
console.log(zone?.districtName); // "Colombo"
console.log(zone?.phone); // ["0112614200"]
console.log(zone?.email); // "pil@edudept.wp.gov.lk"
console.log(zone?.divisions); // ["Dehiwala", "Kesbewa", "Moratuwa"]
```

---

### 3. Grade 5 Scholarship National School Admission Eligibility

Calculate which schools a student qualifies for based on their score, gender, medium, and district:

```typescript
import { getEligibleNationalSchools } from 'lanka-schools';

// Student scored 173 marks in Sinhala medium (Boy in Colombo District)
const recommendations = getEligibleNationalSchools({
  marks: 173,
  gender: 'Boys',
  medium: 'Sinhala',
  district: 'Colombo',
});

recommendations.forEach(({ school, cutoff, margin, eligible }) => {
  if (eligible) {
    console.log(`✅ ${school.shortName}: Cutoff ${cutoff} (Margin: +${margin})`);
  } else {
    console.log(`❌ ${school.shortName}: Cutoff ${cutoff} (Needs ${Math.abs(margin)} more marks)`);
  }
});

// Output:
// ❌ Royal College: Cutoff 175 (Needs 2 more marks)
// ❌ Dharmaraja College: Cutoff 174 (Needs 1 more marks)
// ✅ Nalanda College: Cutoff 167 (Margin: +6)
// ✅ D.S. Senanayake College: Cutoff 164 (Margin: +9)
// ✅ Thurstan College: Cutoff 162 (Margin: +11)
```

---

### 4. Grade 1 Admission Catchment Distance Analysis

Sri Lankan Grade 1 circular guidelines prioritize residents by distance intervals:

```typescript
import { getGrade1AdmissionProximity, getNationalSchoolByCensusNo } from 'lanka-schools';

// Royal College Colombo (Census ID: 00045)
const school = getNationalSchoolByCensusNo('00045');

// Applicant residence in Cinnamon Gardens (6.9110, 79.8630)
const proximity = getGrade1AdmissionProximity(
  school!.latitude!,
  school!.longitude!,
  6.911,
  79.863
);

console.log(`Distance: ${proximity.distanceKm} km`); // 0.62 km
console.log(`Immediate Catchment (<2km): ${proximity.withinImmediateCatchment}`); // true
console.log(`Secondary Catchment (<5km): ${proximity.withinSecondaryCatchment}`); // true
```

---

### 5. Geospatial Radius Search (10,146 Schools)

Find all schools within a radius of any GPS coordinate:

```typescript
import { findNearbySchools } from 'lanka-schools';

// Find schools within 3km of Kandy City Center (7.2906, 80.6337)
const nearbySchools = findNearbySchools({
  latitude: 7.2906,
  longitude: 80.6337,
  radiusKm: 3.0,
  limit: 5,
});

nearbySchools.forEach((s) => {
  console.log(`${s.name} (${s.distanceKm} km) - Zone: ${s.zone} [National: ${s.isNationalSchool}]`);
});
```

---

### 6. Official MOE 5-Digit Census Number Lookup

```typescript
import { getNationalSchoolByCensusNo, getSchoolById } from 'lanka-schools';

// Lookup by official 5-digit Census Number
const school = getNationalSchoolByCensusNo('00081');
console.log(school?.name); // "Colombo Visakha V."
console.log(school?.grade5CutoffSinhala); // 176

// Lookup island-wide school by ID
const sch = getSchoolById('LK-SCH-00045');
console.log(sch?.name);
```

---

## 🗄️ Using the SQLite Database Directly

If you are developing a mobile application (Flutter, React Native), Python backend, or desktop tool, you can directly query `data/lanka-schools.sqlite`:

```python
import sqlite3

conn = sqlite3.connect('data/lanka-schools.sqlite')
cur = conn.cursor()

# Query national schools in Galle District with Grade 5 cut-off >= 160
cur.execute("""
    SELECT n.census_no, n.name, n.gender, n.grade5_cutoff_sinhala
    FROM national_schools n
    JOIN districts d ON n.district_code = d.code
    WHERE d.name = 'Galle' AND n.grade5_cutoff_sinhala >= 160
    ORDER BY n.grade5_cutoff_sinhala DESC
""")

for row in cur.fetchall():
    print(row)
```

---

## 📜 Official Sources & Citations

1. **Ministry of Education (MOE), Sri Lanka**:
   - *Annual School Census Reports* (Statistics Branch)
   - *Official List of National Schools & Zonal Education Offices*
   - *National School Grade 6 Admission Cut-Off Marks Circulars*
2. **Department of Census and Statistics (DCS), Sri Lanka**:
   - Administrative district definitions, school and teacher demographics.
3. **Survey Department of Sri Lanka & UN OCHA**:
   - Subnational administrative boundary shapefiles and PCODE standards (`LK1` - `LK92`).
4. **UNICEF & ITU Giga Initiative**:
   - Geolocation coordinates and connectivity mapping of 10,146 school facilities in Sri Lanka.

---

## 🛠️ Development & Building

```bash
# Clone the repository
git clone https://github.com/mmsalmanfaris/lanka-schools.git
cd lanka-schools

# Install dependencies
npm install

# Re-run ETL script to compile data from raw sources
npm run data:build

# Run TypeScript build
npm run build

# Run unit tests
npm run test
```

---

## 📄 License

This project is open-source under the [MIT License](LICENSE).
Data compiled and structured for public benefit and developer accessibility in Sri Lanka.
