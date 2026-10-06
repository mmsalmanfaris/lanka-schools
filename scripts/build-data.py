#!/usr/bin/env python3
"""
ETL script to generate cleaned, validated datasets for lanka-schools:
- data/provinces.json & .csv
- data/districts.json & .csv
- data/zones.json & .csv
- data/national-schools.json & .csv
- data/grade5-cutoffs.json & .csv
- data/schools.json & .csv
- data/lanka-schools.sqlite
"""

import os
import sys
import json
import csv
import re
import sqlite3

def ray_cast_point_in_polygon(x, y, poly):
    n = len(poly)
    inside = False
    p1x, p1y = poly[0]
    for i in range(1, n + 1):
        p2x, p2y = poly[i % n]
        if y > min(p1y, p2y):
            if y <= max(p1y, p2y):
                if x <= max(p1x, p2x):
                    if p1y != p2y:
                        xinters = (y - p1y) * (p2x - p1x) / (p2y - p1y) + p1x
                    if p1x == p2x or x <= xinters:
                        inside = not inside
        p1x, p1y = p2x, p2y
    return inside

def normalize_school_name(name):
    n = name.upper()
    n = re.sub(r'[\.\,\'\-\(\)]', ' ', n)
    # Standardize common acronyms and Sri Lankan terms
    n = re.sub(r'\bMAHA VIDYALAYA\b', 'M V', n)
    n = re.sub(r'\bMAHA VIDYALAYAM\b', 'M V', n)
    n = re.sub(r'\bMADHYA MAHA VIDYALAYA\b', 'M M V', n)
    n = re.sub(r'\bCENTRAL COLLEGE\b', 'M M V', n)
    n = re.sub(r'\bBALIKA VIDYALAYA\b', 'B V', n)
    n = re.sub(r'\bKANISHTA VIDYALAYA\b', 'K V', n)
    n = re.sub(r'\bVIDYALAYA\b', 'V', n)
    n = re.sub(r'\bVIDYALAYAM\b', 'V', n)
    n = re.sub(r'\bCOLLEGE\b', 'COLL', n)
    words = sorted([w for w in n.split() if len(w) > 1 and w not in ['SRI', 'ST', 'THE']])
    return ' '.join(words)

def main():
    base_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    data_dir = os.path.join(base_dir, 'data')
    raw_dir = os.path.join(base_dir, 'raw')
    os.makedirs(data_dir, exist_ok=True)
    os.makedirs(raw_dir, exist_ok=True)

    print("Step 1: Parsing District GeoJSON boundaries...")
    geo_path = os.path.join(raw_dir, 'district-boundaries.geojson')
    if not os.path.exists(geo_path):
        geo_path = '/tmp/District_geo.json'
    with open(geo_path, 'r', encoding='utf-8') as f:
        geo = json.load(f)

    district_shapes = []
    district_lang_meta = {}

    for feat in geo['features']:
        props = feat['properties']
        dist_name = props.get('ADM2_EN')
        prov_name = props.get('ADM1_EN')
        pcode = props.get('ADM2_PCODE')

        if dist_name == '[unknown]' and pcode == 'LK60':
            dist_name = 'Puttalam'
        if dist_name == '[unknown]':
            continue

        district_lang_meta[dist_name] = {
            'nameSi': props.get('ADM2_SI', '').replace('[unknown]', ''),
            'nameTa': props.get('ADM2_TA', '').replace('[unknown]', ''),
            'provinceSi': props.get('ADM1_SI', ''),
            'provinceTa': props.get('ADM1_TA', ''),
            'pcode': pcode
        }

        geom = feat['geometry']
        coords = geom['coordinates']
        polys = []
        if geom['type'] == 'Polygon':
            polys.append(coords[0])
        elif geom['type'] == 'MultiPolygon':
            for p in coords:
                polys.append(p[0])

        min_x = min(min(pt[0] for pt in poly) for poly in polys)
        max_x = max(max(pt[0] for pt in poly) for poly in polys)
        min_y = min(min(pt[1] for pt in poly) for poly in polys)
        max_y = max(max(pt[1] for pt in poly) for poly in polys)

        district_shapes.append({
            'name': dist_name,
            'province': prov_name,
            'bbox': (min_x, min_y, max_x, max_y),
            'polys': polys
        })

    print(f"Loaded {len(district_shapes)} district boundary shapes.")

    print("Step 2: Parsing Provinces, Districts, Departments, and Zones metadata...")
    zo_path = '/home/mmsalmanfaris/.gemini/antigravity/brain/f9ab33c0-3732-4183-a465-3f799f1a5375/.system_generated/steps/164/content.md'
    with open(zo_path, 'r', encoding='utf-8') as f:
        zo_text = f.read()

    pos_b = zo_text.find('[', zo_text.find('let b='))
    pos_b_end = zo_text.find('],w=')
    provinces_raw = json.loads(re.sub(r'([{,])([a-zA-Z0-9_]+):', r'\1"\2":', zo_text[pos_b:pos_b_end+1]))

    pos_w = zo_text.find('[', zo_text.find(',w='))
    pos_w_end = zo_text.find('],y=')
    districts_raw = json.loads(re.sub(r'([{,])([a-zA-Z0-9_]+):', r'\1"\2":', zo_text[pos_w:pos_w_end+1]))

    # Provincial departments
    dept_map = {
        1: {"name": "Western Provincial Department of Education", "address": "\"Ranmagapaya\", Kaduwela Road, Battaramulla", "phone": "0112875893"},
        2: {"name": "Central Provincial Department of Education", "address": "AB42, Kandy 20000", "phone": "0812224041"},
        3: {"name": "Southern Provincial Department of Education", "address": "Upper Dickson Road, Galle", "phone": "0912234237"},
        4: {"name": "Northern Provincial Department of Education", "address": "Chemmany Road, Nallur, Jaffna", "phone": "0212242810"},
        5: {"name": "Eastern Provincial Department of Education", "address": "Inner Harbour Road, Trincomalee", "phone": "0262222129"},
        6: {"name": "North Western Provincial Department of Education", "address": "Kurunegala", "phone": "0372231661"},
        7: {"name": "North Central Provincial Department of Education", "address": "Anuradhapura", "phone": "0252227475"},
        8: {"name": "Uva Provincial Department of Education", "address": "Badulla", "phone": "0552232407"},
        9: {"name": "Sabaragamuwa Provincial Department of Education", "address": "Gatangama, Ratnapura", "phone": "0452222403"}
    }

    # Extract Zones array N
    pos_n = zo_text.find('[', zo_text.find(',N='))
    depth = 0
    pos_n_end = -1
    in_str = False
    esc = False
    for i in range(pos_n, len(zo_text)):
        ch = zo_text[i]
        if esc:
            esc = False
            continue
        if ch == '\\':
            esc = True
            continue
        if ch == '"':
            in_str = not in_str
            continue
        if not in_str:
            if ch == '[':
                depth += 1
            elif ch == ']':
                depth -= 1
                if depth == 0:
                    pos_n_end = i
                    break

    zones_json_str = re.sub(r'([{,])([a-zA-Z0-9_]+):', r'\1"\2":', zo_text[pos_n:pos_n_end+1])
    zones_raw = json.loads(zones_json_str)
    print(f"Loaded {len(zones_raw)} zones.")

    # Build province dictionary
    prov_dict = {}
    for p in provinces_raw:
        code = p['code']
        name = p['name']
        prov_dict[code] = {
            'code': code,
            'name': name,
            'nameSi': '',
            'nameTa': '',
            'pcode': f"LK{code}",
            'department': dept_map.get(code, {}),
            'districtsCount': 0,
            'zonesCount': 0,
            'schoolsCount': 0,
            'provincialSchoolsCount': 0,
            'nationalSchoolsCount': 0
        }

    # Add Sinhala / Tamil names for provinces
    for dist_name, meta in district_lang_meta.items():
        for p in prov_dict.values():
            if meta['provinceSi'] and not p['nameSi']:
                p['nameSi'] = meta['provinceSi']
            if meta['provinceTa'] and not p['nameTa']:
                p['nameTa'] = meta['provinceTa']

    # Better fallback Sinhala / Tamil province names
    prov_names_si = {
        1: "බස්නාහිර පළාත", 2: "මධ්‍යම පළාත", 3: "දකුණු පළාත",
        4: "උතුරු පළාත", 5: "නැගෙනහිර පළාත", 6: "වයඹ පළාත",
        7: "උතුරු මැද පළාත", 8: "ඌව පළාත", 9: "සබරගමුව පළාත"
    }
    prov_names_ta = {
        1: "மேல் மாகாணம்", 2: "மத்திய மாகாணம்", 3: "தென் மாகாணம்",
        4: "வட மாகாணம்", 5: "கிழக்கு மாகாணம்", 6: "வட மேல் மாகாணம்",
        7: "வட மத்திய மாகாணம்", 8: "ஊவா மாகாணம்", 9: "சப்ரகமுவ மாகாணம்"
    }
    for code, p in prov_dict.items():
        p['nameSi'] = prov_names_si.get(code, p['nameSi'])
        p['nameTa'] = prov_names_ta.get(code, p['nameTa'])

    # Build district dictionary
    dist_dict = {}
    for d in districts_raw:
        code = d['code']
        name = d['name']
        p_code = d['provinceCode']
        meta = district_lang_meta.get(name, {})
        dist_dict[code] = {
            'code': code,
            'name': name,
            'nameSi': meta.get('nameSi', ''),
            'nameTa': meta.get('nameTa', ''),
            'pcode': meta.get('pcode', f"LK{code}"),
            'provinceCode': p_code,
            'provinceName': prov_dict[p_code]['name'],
            'zonesCount': 0,
            'divisionsCount': 0,
            'schoolsCount': 0,
            'provincialSchoolsCount': 0,
            'nationalSchoolsCount': 0,
            'zones': []
        }
        prov_dict[p_code]['districtsCount'] += 1

    # Better fallback Sinhala / Tamil district names
    dist_names_si = {
        11: "කොළඹ දිස්ත්‍රික්කය", 12: "ගම්පහ දිස්ත්‍රික්කය", 13: "කළුතර දිස්ත්‍රික්කය",
        21: "මහනුවර දිස්ත්‍රික්කය", 22: "මාතලේ දිස්ත්‍රික්කය", 23: "නුවරඑළිය දිස්ත්‍රික්කය",
        31: "ගාල්ල දිස්ත්‍රික්කය", 32: "මාතර දිස්ත්‍රික්කය", 33: "හම්බන්තොට දිස්ත්‍රික්කය",
        41: "යාපනය දිස්ත්‍රික්කය", 42: "මන්නාරම දිස්ත්‍රික්කය", 43: "වවුනියාව දිස්ත්‍රික්කය",
        44: "මුලතිව් දිස්ත්‍රික්කය", 45: "කිලිනොච්චි දිස්ත්‍රික්කය", 51: "මඩකලපුව දිස්ත්‍රික්කය",
        52: "අම්පාර දිස්ත්‍රික්කය", 53: "ත්‍රිකුණාමලය දිස්ත්‍රික්කය", 61: "කුරුණෑගල දිස්ත්‍රික්කය",
        62: "පුත්තලම දිස්ත්‍රික්කය", 71: "අනුරාධපුර දිස්ත්‍රික්කය", 72: "පොළොන්නරුව දිස්ත්‍රික්කය",
        81: "බදුල්ල දිස්ත්‍රික්කය", 82: "මොණරාගල දිස්ත්‍රික්කය", 91: "රත්නපුර දිස්ත්‍රික්කය",
        92: "කෑගල්ල දිස්ත්‍රික්කය"
    }
    dist_names_ta = {
        11: "கொழும்பு மாவட்டம்", 12: "கம்பஹா மாவட்டம்", 13: "களுத்துறை மாவட்டம்",
        21: "கண்டி மாவட்டம்", 22: "மாத்தளை மாவட்டம்", 23: "நுவரெலியா மாவட்டம்",
        31: "காலி மாவட்டம்", 32: "மாத்தறை மாவட்டம்", 33: "அம்பாந்தோட்டை மாவட்டம்",
        41: "யாழ்ப்பாணம் மாவட்டம்", 42: "மன்னார் மாவட்டம்", 43: "வவுனியா மாவட்டம்",
        44: "முல்லைத்தீவு மாவட்டம்", 45: "கிளிநொச்சி மாவட்டம்", 51: "மட்டக்களப்பு மாவட்டம்",
        52: "அம்பாறை மாவட்டம்", 53: "திருகோணமலை மாவட்டம்", 61: "குருணாகல் மாவட்டம்",
        62: "புத்தளம் மாவட்டம்", 71: "அனுராதபுரம் மாவட்டம்", 72: "பொலன்னறுவை மாவட்டம்",
        81: "பதுளை மாவட்டம்", 82: "மொனராகலை மாவட்டம்", 91: "இரத்தினபுரி மாவட்டம்",
        92: "கேகாலை மாவட்டம்"
    }
    for code, d in dist_dict.items():
        if dist_names_si.get(code):
            d['nameSi'] = dist_names_si[code]
        if dist_names_ta.get(code):
            d['nameTa'] = dist_names_ta[code]

    # Process Zones
    zones_list = []
    zone_lookup_by_name = {}

    for z in zones_raw:
        zid = z['id']
        zname = z['name']
        dcode = z['districtCode']
        dist = dist_dict[dcode]
        pcode = dist['provinceCode']
        pname = dist['provinceName']

        divs = z.get('divisions', [])
        p_schools = z.get('provincialSchools', 0)
        n_schools = z.get('nationalSchools', 0)
        total_schools = p_schools + n_schools

        phone = z.get('phone', [])
        if isinstance(phone, str):
            phone = [phone]
        email = z.get('email', None)
        aliases = z.get('aliases', [])

        zone_entry = {
            'id': zid,
            'name': zname,
            'nameSi': z.get('nameSi', ''),
            'nameTa': z.get('nameTa', ''),
            'districtCode': dcode,
            'districtName': dist['name'],
            'provinceCode': pcode,
            'provinceName': pname,
            'divisions': divs,
            'provincialSchools': p_schools,
            'nationalSchools': n_schools,
            'totalSchools': total_schools,
            'phone': phone,
            'email': email,
            'aliases': aliases
        }
        zones_list.append(zone_entry)
        zone_lookup_by_name[zname.lower()] = zone_entry
        zone_lookup_by_name[zid] = zone_entry

        # Accumulate to district & province
        dist['zonesCount'] += 1
        dist['divisionsCount'] += len(divs)
        dist['schoolsCount'] += total_schools
        dist['provincialSchoolsCount'] += p_schools
        dist['nationalSchoolsCount'] += n_schools
        dist['zones'].append(zname)

        prov_dict[pcode]['zonesCount'] += 1
        prov_dict[pcode]['schoolsCount'] += total_schools
        prov_dict[pcode]['provincialSchoolsCount'] += p_schools
        prov_dict[pcode]['nationalSchoolsCount'] += n_schools

    print("Step 3: Parsing Grade 5 Cutoff Marks...")
    co_path = '/home/mmsalmanfaris/.gemini/antigravity/brain/f9ab33c0-3732-4183-a465-3f799f1a5375/.system_generated/steps/86/content.md'
    with open(co_path, 'r', encoding='utf-8') as f:
        co_text = f.read()

    pushes = re.findall(r'self\.__next_f\.push\(\[1,\s*(".*?")\]\)', co_text)
    co_decoded = []
    for p in pushes:
        try:
            co_decoded.append(json.loads(p))
        except:
            pass
    co_combined = '\n'.join(co_decoded)

    cutoff_pattern = re.compile(r'\[\"\$[^\"]*\",\"tr\",\"([^\"]+)\",\{\"children\":\[\[\"\$[^\"]*\",\"th\",null,\{\"scope\":\"row\",\"className\":\"[^\"]*\",\"children\":\"([^\"]+)\"\}\],\[\"\$[^\"]*\",\"td\",null,\{\"children\":\"([^\"]*)\"\}\],\[\"\$[^\"]*\",\"td\",null,\{\"children\":\"([^\"]*)\"\}\],\[\"\$[^\"]*\",\"td\",null,\{\"children\":\"([^\"]*)\"\}\],\[\"\$[^\"]*\",\"td\",null,\{\"className\":\"[^\"]*\",\"children\":([0-9]+|\"[^\"]*\")\}\]\]\}\]')
    raw_cutoffs = cutoff_pattern.findall(co_combined)

    cutoffs_list = []
    cutoffs_by_census = {}
    for census, sname, town, gender, medium, mark_str in raw_cutoffs:
        try:
            mark = int(str(mark_str).replace('"', ''))
        except ValueError:
            continue
        entry = {
            'censusNo': census,
            'schoolName': sname,
            'town': town,
            'gender': gender,
            'medium': medium,
            'cutoff': mark
        }
        cutoffs_list.append(entry)
        if census not in cutoffs_by_census:
            cutoffs_by_census[census] = []
        cutoffs_by_census[census].append(entry)

    print(f"Loaded {len(cutoffs_list)} Grade 5 cutoff marks for {len(cutoffs_by_census)} schools.")

    print("Step 4: Parsing National Schools Directory...")
    ns_path = '/home/mmsalmanfaris/.gemini/antigravity/brain/f9ab33c0-3732-4183-a465-3f799f1a5375/.system_generated/steps/154/content.md'
    with open(ns_path, 'r', encoding='utf-8') as f:
        ns_text = f.read()

    ns_raw = re.findall(r'\{seq:(\d+),censusNo:"([^"]+)",name:"([^"]+)",address:"([^"]*)",districtCode:(\d+),zone:"([^"]+)"\}', ns_text)
    print(f"Loaded {len(ns_raw)} national schools.")

    # Load 10,146 schools geolocation to match coordinates
    geo_path = os.path.join(raw_dir, 'giga-schools-raw.csv')
    if not os.path.exists(geo_path):
        geo_path = '/tmp/sri-lanka-schools-raw.csv'
    all_raw_schools = []
    with open(geo_path, 'r', encoding='utf-8-sig') as f:
        reader = csv.DictReader(f)
        for r in reader:
            all_raw_schools.append(r)

    # Index raw schools by normalized name
    geo_name_index = {}
    for s in all_raw_schools:
        s_norm = normalize_school_name(s['school_name'])
        geo_name_index[s_norm] = s

    # Compile National Schools
    national_schools_list = []
    ns_census_set = set()

    for seq_str, census, name, addr, dcode_str, zname in ns_raw:
        seq = int(seq_str)
        dcode = int(dcode_str)
        dist = dist_dict[dcode]
        pcode = dist['provinceCode']
        pname = dist['provinceName']
        ns_census_set.add(census)

        # Match cutoffs
        school_cutoffs = cutoffs_by_census.get(census, [])
        cutoff_sinhala = None
        cutoff_tamil = None
        gender_from_cutoff = None
        for c in school_cutoffs:
            if c['medium'].lower() == 'sinhala':
                cutoff_sinhala = c['cutoff']
            elif c['medium'].lower() == 'tamil':
                cutoff_tamil = c['cutoff']
            if not gender_from_cutoff:
                gender_from_cutoff = c['gender']

        # Determine gender and mediums
        gender = gender_from_cutoff or ("Girls" if any(w in name.lower() for w in ['balika', 'girls', 'ladies']) else ("Boys" if any(w in name.lower() for w in ['boys']) else "Mixed"))
        mediums = []
        if cutoff_sinhala is not None:
            mediums.append("Sinhala")
        if cutoff_tamil is not None:
            mediums.append("Tamil")
        if not mediums:
            # Infer from name
            if any(w in name.lower() for w in ['tamil', 'muslim', 'zahira', 'hindu', 'al-']):
                mediums = ["Tamil"]
            else:
                mediums = ["Sinhala"]

        # Coordinates match
        lat = None
        lon = None
        n1 = normalize_school_name(name)
        if n1 in geo_name_index:
            lat = float(geo_name_index[n1]['latitude'])
            lon = float(geo_name_index[n1]['longitude'])
        else:
            # Try removing district prefix like "Colombo Royal College" -> "Royal College"
            parts = name.split()
            if len(parts) > 1:
                n2 = normalize_school_name(' '.join(parts[1:]))
                if n2 in geo_name_index:
                    lat = float(geo_name_index[n2]['latitude'])
                    lon = float(geo_name_index[n2]['longitude'])

        # Short clean name
        short_name = name
        parts = name.split()
        if len(parts) > 1 and parts[0].lower() in [d['name'].lower() for d in districts_raw]:
            short_name = ' '.join(parts[1:])

        ns_entry = {
            'seq': seq,
            'censusNo': census,
            'name': name,
            'shortName': short_name,
            'address': addr,
            'districtCode': dcode,
            'districtName': dist['name'],
            'provinceCode': pcode,
            'provinceName': pname,
            'zone': zname,
            'gender': gender,
            'mediums': mediums,
            'grade5CutoffSinhala': cutoff_sinhala,
            'grade5CutoffTamil': cutoff_tamil,
            'latitude': lat,
            'longitude': lon
        }
        national_schools_list.append(ns_entry)

    matched_ns_coords = sum(1 for s in national_schools_list if s['latitude'] is not None)
    print(f"National schools with geocoordinates: {matched_ns_coords} / {len(national_schools_list)}")

    print("Step 5: Processing Island-Wide Geocoded Schools Dataset (10,146 schools)...")
    # Spatial join schools to district
    all_compiled_schools = []

    # Division to zone mapping
    division_to_zone = {}
    for z in zones_list:
        for div in z['divisions']:
            division_to_zone[div.lower()] = z['name']
        for alias in z['aliases']:
            division_to_zone[alias.lower()] = z['name']

    # District name to code lookup
    dist_name_to_code = {d['name'].lower(): d['code'] for d in dist_dict.values()}
    dist_name_to_code['monaragala'] = 82
    dist_name_to_code['moneragala'] = 82

    # Pre-index national schools by normalized name and by rounded coordinates
    ns_by_norm = {}
    ns_by_coord = {}
    for ns in national_schools_list:
        n1 = normalize_school_name(ns['name'])
        n2 = normalize_school_name(ns['shortName'])
        ns_by_norm[n1] = ns
        ns_by_norm[n2] = ns
        if ns['latitude'] and ns['longitude']:
            key = (round(ns['latitude'], 3), round(ns['longitude'], 3))
            ns_by_coord[key] = ns

    for idx, s in enumerate(all_raw_schools, start=1):
        s_id = f"LK-SCH-{idx:05d}"
        s_name = s['school_name'].strip()
        lon = float(s['longitude'])
        lat = float(s['latitude'])
        ed_level = s['education_level'].strip()
        conn = s['connectivity'].strip()

        # Find district
        matched_dist_name = None
        for d in district_shapes:
            min_x, min_y, max_x, max_y = d['bbox']
            if min_x <= lon <= max_x and min_y <= lat <= max_y:
                for poly in d['polys']:
                    if ray_cast_point_in_polygon(lon, lat, poly):
                        matched_dist_name = d['name']
                        break
                if matched_dist_name:
                    break

        if not matched_dist_name:
            # Nearest fallback for coastal boundary edge
            min_dist = float('inf')
            closest_dist = None
            for d in district_shapes:
                for poly in d['polys']:
                    for pt in poly:
                        d2 = (lon - pt[0])**2 + (lat - pt[1])**2
                        if d2 < min_dist:
                            min_dist = d2
                            closest_dist = d['name']
            matched_dist_name = closest_dist or 'Colombo'

        d_code = dist_name_to_code.get(matched_dist_name.lower(), 11)
        dist_meta = dist_dict[d_code]
        p_code = dist_meta['provinceCode']
        p_name = dist_meta['provinceName']

        # Check national school status via pre-indexed maps
        is_national = False
        census_no = None
        matched_zone = None

        coord_key = (round(lat, 3), round(lon, 3))
        matched_ns = ns_by_coord.get(coord_key)
        if not matched_ns:
            s_norm = normalize_school_name(s_name)
            matched_ns = ns_by_norm.get(s_norm)

        if matched_ns:
            is_national = True
            census_no = matched_ns['censusNo']
            matched_zone = matched_ns['zone']

        if not matched_zone:
            s_name_lower = s_name.lower()
            for z_name in dist_meta['zones']:
                z_obj = zone_lookup_by_name.get(z_name.lower())
                if z_obj:
                    for div in z_obj['divisions']:
                        if div.lower() in s_name_lower:
                            matched_zone = z_obj['name']
                            break
                    if not matched_zone:
                        for alias in z_obj['aliases']:
                            if alias.lower() in s_name_lower:
                                matched_zone = z_obj['name']
                                break
                if matched_zone:
                    break

        if not matched_zone:
            for z_name in dist_meta['zones']:
                if z_name.lower() in s_name.lower():
                    matched_zone = z_name
                    break

        if not matched_zone:
            matched_zone = dist_meta['zones'][0] if dist_meta['zones'] else None

        school_entry = {
            'id': s_id,
            'name': s_name,
            'province': p_name,
            'provinceCode': p_code,
            'district': dist_meta['name'],
            'districtCode': d_code,
            'zone': matched_zone,
            'latitude': round(lat, 6),
            'longitude': round(lon, 6),
            'educationLevel': ed_level,
            'connectivity': conn,
            'isNationalSchool': is_national,
            'censusNo': census_no
        }
        all_compiled_schools.append(school_entry)

    print(f"Compiled {len(all_compiled_schools)} total schools.")

    print("Step 6: Writing JSON and CSV files...")

    # 1. Provinces
    provinces_output = list(prov_dict.values())
    with open(os.path.join(data_dir, 'provinces.json'), 'w', encoding='utf-8') as f:
        json.dump(provinces_output, f, indent=2, ensure_ascii=False)
    with open(os.path.join(data_dir, 'provinces.csv'), 'w', newline='', encoding='utf-8') as f:
        writer = csv.writer(f)
        writer.writerow(['code', 'name', 'nameSi', 'nameTa', 'pcode', 'districtsCount', 'zonesCount', 'schoolsCount', 'provincialSchoolsCount', 'nationalSchoolsCount', 'deptName', 'deptAddress', 'deptPhone'])
        for p in provinces_output:
            d = p['department']
            writer.writerow([p['code'], p['name'], p['nameSi'], p['nameTa'], p['pcode'], p['districtsCount'], p['zonesCount'], p['schoolsCount'], p['provincialSchoolsCount'], p['nationalSchoolsCount'], d.get('name', ''), d.get('address', ''), d.get('phone', '')])

    # 2. Districts
    districts_output = list(dist_dict.values())
    with open(os.path.join(data_dir, 'districts.json'), 'w', encoding='utf-8') as f:
        json.dump(districts_output, f, indent=2, ensure_ascii=False)
    with open(os.path.join(data_dir, 'districts.csv'), 'w', newline='', encoding='utf-8') as f:
        writer = csv.writer(f)
        writer.writerow(['code', 'name', 'nameSi', 'nameTa', 'pcode', 'provinceCode', 'provinceName', 'zonesCount', 'divisionsCount', 'schoolsCount', 'provincialSchoolsCount', 'nationalSchoolsCount', 'zones'])
        for d in districts_output:
            writer.writerow([d['code'], d['name'], d['nameSi'], d['nameTa'], d['pcode'], d['provinceCode'], d['provinceName'], d['zonesCount'], d['divisionsCount'], d['schoolsCount'], d['provincialSchoolsCount'], d['nationalSchoolsCount'], ';'.join(d['zones'])])

    # 3. Zones
    with open(os.path.join(data_dir, 'zones.json'), 'w', encoding='utf-8') as f:
        json.dump(zones_list, f, indent=2, ensure_ascii=False)
    with open(os.path.join(data_dir, 'zones.csv'), 'w', newline='', encoding='utf-8') as f:
        writer = csv.writer(f)
        writer.writerow(['id', 'name', 'nameSi', 'nameTa', 'districtCode', 'districtName', 'provinceCode', 'provinceName', 'divisions', 'provincialSchools', 'nationalSchools', 'totalSchools', 'phone', 'email', 'aliases'])
        for z in zones_list:
            writer.writerow([z['id'], z['name'], z['nameSi'], z['nameTa'], z['districtCode'], z['districtName'], z['provinceCode'], z['provinceName'], ';'.join(z['divisions']), z['provincialSchools'], z['nationalSchools'], z['totalSchools'], ';'.join(z['phone']), z['email'] or '', ';'.join(z['aliases'])])

    # 4. National Schools
    with open(os.path.join(data_dir, 'national-schools.json'), 'w', encoding='utf-8') as f:
        json.dump(national_schools_list, f, indent=2, ensure_ascii=False)
    with open(os.path.join(data_dir, 'national-schools.csv'), 'w', newline='', encoding='utf-8') as f:
        writer = csv.writer(f)
        writer.writerow(['seq', 'censusNo', 'name', 'shortName', 'address', 'districtCode', 'districtName', 'provinceCode', 'provinceName', 'zone', 'gender', 'mediums', 'grade5CutoffSinhala', 'grade5CutoffTamil', 'latitude', 'longitude'])
        for ns in national_schools_list:
            writer.writerow([ns['seq'], ns['censusNo'], ns['name'], ns['shortName'], ns['address'], ns['districtCode'], ns['districtName'], ns['provinceCode'], ns['provinceName'], ns['zone'], ns['gender'], ';'.join(ns['mediums']), ns['grade5CutoffSinhala'] or '', ns['grade5CutoffTamil'] or '', ns['latitude'] or '', ns['longitude'] or ''])

    # 5. Grade 5 Cutoffs
    with open(os.path.join(data_dir, 'grade5-cutoffs.json'), 'w', encoding='utf-8') as f:
        json.dump(cutoffs_list, f, indent=2, ensure_ascii=False)
    with open(os.path.join(data_dir, 'grade5-cutoffs.csv'), 'w', newline='', encoding='utf-8') as f:
        writer = csv.writer(f)
        writer.writerow(['censusNo', 'schoolName', 'town', 'gender', 'medium', 'cutoff'])
        for c in cutoffs_list:
            writer.writerow([c['censusNo'], c['schoolName'], c['town'], c['gender'], c['medium'], c['cutoff']])

    # 6. All Schools
    with open(os.path.join(data_dir, 'schools.json'), 'w', encoding='utf-8') as f:
        json.dump(all_compiled_schools, f, indent=2, ensure_ascii=False)
    with open(os.path.join(data_dir, 'schools.csv'), 'w', newline='', encoding='utf-8') as f:
        writer = csv.writer(f)
        writer.writerow(['id', 'name', 'province', 'provinceCode', 'district', 'districtCode', 'zone', 'latitude', 'longitude', 'educationLevel', 'connectivity', 'isNationalSchool', 'censusNo'])
        for s in all_compiled_schools:
            writer.writerow([s['id'], s['name'], s['province'], s['provinceCode'], s['district'], s['districtCode'], s['zone'] or '', s['latitude'], s['longitude'], s['educationLevel'], s['connectivity'], 1 if s['isNationalSchool'] else 0, s['censusNo'] or ''])

    print("Step 7: Generating SQLite Database...")
    sqlite_path = os.path.join(data_dir, 'lanka-schools.sqlite')
    if os.path.exists(sqlite_path):
        os.remove(sqlite_path)

    conn = sqlite3.connect(sqlite_path)
    cur = conn.cursor()

    cur.execute('''
    CREATE TABLE provinces (
        code INTEGER PRIMARY KEY,
        name TEXT NOT NULL,
        name_si TEXT,
        name_ta TEXT,
        pcode TEXT,
        districts_count INTEGER,
        zones_count INTEGER,
        schools_count INTEGER,
        dept_name TEXT,
        dept_address TEXT,
        dept_phone TEXT
    )
    ''')

    cur.execute('''
    CREATE TABLE districts (
        code INTEGER PRIMARY KEY,
        name TEXT NOT NULL,
        name_si TEXT,
        name_ta TEXT,
        pcode TEXT,
        province_code INTEGER REFERENCES provinces(code),
        zones_count INTEGER,
        divisions_count INTEGER,
        schools_count INTEGER,
        national_schools_count INTEGER
    )
    ''')

    cur.execute('''
    CREATE TABLE zones (
        id TEXT PRIMARY KEY,
        name TEXT NOT NULL,
        name_si TEXT,
        name_ta TEXT,
        district_code INTEGER REFERENCES districts(code),
        province_code INTEGER REFERENCES provinces(code),
        divisions TEXT,
        provincial_schools INTEGER,
        national_schools INTEGER,
        total_schools INTEGER,
        phone TEXT,
        email TEXT
    )
    ''')

    cur.execute('''
    CREATE TABLE national_schools (
        census_no TEXT PRIMARY KEY,
        seq INTEGER,
        name TEXT NOT NULL,
        short_name TEXT,
        address TEXT,
        district_code INTEGER REFERENCES districts(code),
        zone TEXT,
        gender TEXT,
        mediums TEXT,
        grade5_cutoff_sinhala INTEGER,
        grade5_cutoff_tamil INTEGER,
        latitude REAL,
        longitude REAL
    )
    ''')

    cur.execute('''
    CREATE TABLE grade5_cutoffs (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        census_no TEXT,
        school_name TEXT,
        town TEXT,
        gender TEXT,
        medium TEXT,
        cutoff INTEGER
    )
    ''')

    cur.execute('''
    CREATE TABLE schools (
        id TEXT PRIMARY KEY,
        name TEXT NOT NULL,
        province_code INTEGER REFERENCES provinces(code),
        district_code INTEGER REFERENCES districts(code),
        zone TEXT,
        latitude REAL,
        longitude REAL,
        education_level TEXT,
        connectivity TEXT,
        is_national_school INTEGER,
        census_no TEXT
    )
    ''')

    # Insert data
    for p in provinces_output:
        d = p['department']
        cur.execute('INSERT INTO provinces VALUES (?,?,?,?,?,?,?,?,?,?,?)', (
            p['code'], p['name'], p['nameSi'], p['nameTa'], p['pcode'],
            p['districtsCount'], p['zonesCount'], p['schoolsCount'],
            d.get('name'), d.get('address'), d.get('phone')
        ))

    for d in districts_output:
        cur.execute('INSERT INTO districts VALUES (?,?,?,?,?,?,?,?,?,?)', (
            d['code'], d['name'], d['nameSi'], d['nameTa'], d['pcode'],
            d['provinceCode'], d['zonesCount'], d['divisionsCount'],
            d['schoolsCount'], d['nationalSchoolsCount']
        ))

    for z in zones_list:
        cur.execute('INSERT INTO zones VALUES (?,?,?,?,?,?,?,?,?,?,?,?)', (
            z['id'], z['name'], z['nameSi'], z['nameTa'],
            z['districtCode'], z['provinceCode'],
            ';'.join(z['divisions']), z['provincialSchools'],
            z['nationalSchools'], z['totalSchools'],
            ';'.join(z['phone']), z['email']
        ))

    for ns in national_schools_list:
        cur.execute('INSERT INTO national_schools VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)', (
            ns['censusNo'], ns['seq'], ns['name'], ns['shortName'], ns['address'],
            ns['districtCode'], ns['zone'], ns['gender'], ';'.join(ns['mediums']),
            ns['grade5CutoffSinhala'], ns['grade5CutoffTamil'],
            ns['latitude'], ns['longitude']
        ))

    for c in cutoffs_list:
        cur.execute('INSERT INTO grade5_cutoffs (census_no, school_name, town, gender, medium, cutoff) VALUES (?,?,?,?,?,?)', (
            c['censusNo'], c['schoolName'], c['town'], c['gender'], c['medium'], c['cutoff']
        ))

    for s in all_compiled_schools:
        cur.execute('INSERT INTO schools VALUES (?,?,?,?,?,?,?,?,?,?,?)', (
            s['id'], s['name'], s['provinceCode'], s['districtCode'], s['zone'],
            s['latitude'], s['longitude'], s['educationLevel'], s['connectivity'],
            1 if s['isNationalSchool'] else 0, s['censusNo']
        ))

    # Create Indexes
    cur.execute('CREATE INDEX idx_schools_district ON schools(district_code)')
    cur.execute('CREATE INDEX idx_schools_zone ON schools(zone)')
    cur.execute('CREATE INDEX idx_schools_nat ON schools(is_national_school)')
    cur.execute('CREATE INDEX idx_schools_lat_lon ON schools(latitude, longitude)')
    cur.execute('CREATE INDEX idx_ns_district ON national_schools(district_code)')
    cur.execute('CREATE INDEX idx_ns_zone ON national_schools(zone)')
    cur.execute('CREATE INDEX idx_zones_district ON zones(district_code)')

    conn.commit()
    conn.close()

    print("Successfully built all data artifacts in data/ and SQLite database!")

if __name__ == '__main__':
    main()
