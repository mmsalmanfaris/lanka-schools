// data/provinces.json
var provinces_default = [
  {
    code: 1,
    name: "Western",
    nameSi: "\u0DB6\u0DC3\u0DCA\u0DB1\u0DCF\u0DC4\u0DD2\u0DBB \u0DB4\u0DC5\u0DCF\u0DAD",
    nameTa: "\u0BAE\u0BC7\u0BB2\u0BCD \u0BAE\u0BBE\u0B95\u0BBE\u0BA3\u0BAE\u0BCD",
    pcode: "LK1",
    department: {
      name: "Western Provincial Department of Education",
      address: '"Ranmagapaya", Kaduwela Road, Battaramulla',
      phone: "0112875893"
    },
    districtsCount: 3,
    zonesCount: 11,
    schoolsCount: 1339,
    provincialSchoolsCount: 1260,
    nationalSchoolsCount: 79
  },
  {
    code: 2,
    name: "Central",
    nameSi: "\u0DB8\u0DB0\u0DCA\u200D\u0DBA\u0DB8 \u0DB4\u0DC5\u0DCF\u0DAD",
    nameTa: "\u0BAE\u0BA4\u0BCD\u0BA4\u0BBF\u0BAF \u0BAE\u0BBE\u0B95\u0BBE\u0BA3\u0BAE\u0BCD",
    pcode: "LK2",
    department: {
      name: "Central Provincial Department of Education",
      address: "AB42, Kandy 20000",
      phone: "0812224041"
    },
    districtsCount: 3,
    zonesCount: 15,
    schoolsCount: 1511,
    provincialSchoolsCount: 1455,
    nationalSchoolsCount: 56
  },
  {
    code: 3,
    name: "Southern",
    nameSi: "\u0DAF\u0D9A\u0DD4\u0DAB\u0DD4 \u0DB4\u0DC5\u0DCF\u0DAD",
    nameTa: "\u0BA4\u0BC6\u0BA9\u0BCD \u0BAE\u0BBE\u0B95\u0BBE\u0BA3\u0BAE\u0BCD",
    pcode: "LK3",
    department: {
      name: "Southern Provincial Department of Education",
      address: "Upper Dickson Road, Galle",
      phone: "0912234237"
    },
    districtsCount: 3,
    zonesCount: 11,
    schoolsCount: 1100,
    provincialSchoolsCount: 1030,
    nationalSchoolsCount: 70
  },
  {
    code: 4,
    name: "Northern",
    nameSi: "\u0D8B\u0DAD\u0DD4\u0DBB\u0DD4 \u0DB4\u0DC5\u0DCF\u0DAD",
    nameTa: "\u0BB5\u0B9F \u0BAE\u0BBE\u0B95\u0BBE\u0BA3\u0BAE\u0BCD",
    pcode: "LK4",
    department: {
      name: "Northern Provincial Department of Education",
      address: "Chemmany Road, Nallur, Jaffna",
      phone: "0212242810"
    },
    districtsCount: 5,
    zonesCount: 13,
    schoolsCount: 969,
    provincialSchoolsCount: 945,
    nationalSchoolsCount: 24
  },
  {
    code: 5,
    name: "Eastern",
    nameSi: "\u0DB1\u0DD0\u0D9C\u0DD9\u0DB1\u0DC4\u0DD2\u0DBB \u0DB4\u0DC5\u0DCF\u0DAD",
    nameTa: "\u0B95\u0BBF\u0BB4\u0B95\u0BCD\u0B95\u0BC1 \u0BAE\u0BBE\u0B95\u0BBE\u0BA3\u0BAE\u0BCD",
    pcode: "LK5",
    department: {
      name: "Eastern Provincial Department of Education",
      address: "Inner Harbour Road, Trincomalee",
      phone: "0262222129"
    },
    districtsCount: 3,
    zonesCount: 17,
    schoolsCount: 1128,
    provincialSchoolsCount: 1086,
    nationalSchoolsCount: 42
  },
  {
    code: 6,
    name: "North Western",
    nameSi: "\u0DC0\u0DBA\u0DB9 \u0DB4\u0DC5\u0DCF\u0DAD",
    nameTa: "\u0BB5\u0B9F \u0BAE\u0BC7\u0BB2\u0BCD \u0BAE\u0BBE\u0B95\u0BBE\u0BA3\u0BAE\u0BCD",
    pcode: "LK6",
    department: {
      name: "North Western Provincial Department of Education",
      address: "Kurunegala",
      phone: "0372231661"
    },
    districtsCount: 2,
    zonesCount: 8,
    schoolsCount: 1241,
    provincialSchoolsCount: 1202,
    nationalSchoolsCount: 39
  },
  {
    code: 7,
    name: "North Central",
    nameSi: "\u0D8B\u0DAD\u0DD4\u0DBB\u0DD4 \u0DB8\u0DD0\u0DAF \u0DB4\u0DC5\u0DCF\u0DAD",
    nameTa: "\u0BB5\u0B9F \u0BAE\u0BA4\u0BCD\u0BA4\u0BBF\u0BAF \u0BAE\u0BBE\u0B95\u0BBE\u0BA3\u0BAE\u0BCD",
    pcode: "LK7",
    department: {
      name: "North Central Provincial Department of Education",
      address: "Anuradhapura",
      phone: "0252227475"
    },
    districtsCount: 2,
    zonesCount: 8,
    schoolsCount: 806,
    provincialSchoolsCount: 789,
    nationalSchoolsCount: 17
  },
  {
    code: 8,
    name: "Uva",
    nameSi: "\u0D8C\u0DC0 \u0DB4\u0DC5\u0DCF\u0DAD",
    nameTa: "\u0B8A\u0BB5\u0BBE \u0BAE\u0BBE\u0B95\u0BBE\u0BA3\u0BAE\u0BCD",
    pcode: "LK8",
    department: {
      name: "Uva Provincial Department of Education",
      address: "Badulla",
      phone: "0552232407"
    },
    districtsCount: 2,
    zonesCount: 10,
    schoolsCount: 892,
    provincialSchoolsCount: 854,
    nationalSchoolsCount: 38
  },
  {
    code: 9,
    name: "Sabaragamuwa",
    nameSi: "\u0DC3\u0DB6\u0DBB\u0D9C\u0DB8\u0DD4\u0DC0 \u0DB4\u0DC5\u0DCF\u0DAD",
    nameTa: "\u0B9A\u0BAA\u0BCD\u0BB0\u0B95\u0BAE\u0BC1\u0BB5 \u0BAE\u0BBE\u0B95\u0BBE\u0BA3\u0BAE\u0BCD",
    pcode: "LK9",
    department: {
      name: "Sabaragamuwa Provincial Department of Education",
      address: "Gatangama, Ratnapura",
      phone: "0452222403"
    },
    districtsCount: 2,
    zonesCount: 7,
    schoolsCount: 1090,
    provincialSchoolsCount: 1059,
    nationalSchoolsCount: 31
  }
];

// src/utils.ts
function calculateDistance(lat1, lon1, lat2, lon2) {
  const R = 6371;
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return Math.round(R * c * 100) / 100;
}
function normalizeText(text) {
  if (!text) return "";
  return text.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^\w\s]/g, " ").replace(/\s+/g, " ").trim();
}
function matchesQuery(target, query) {
  if (!target || !query) return false;
  const normTarget = normalizeText(target);
  const normQuery = normalizeText(query);
  if (normTarget.includes(normQuery)) return true;
  const queryWords = normQuery.split(" ").filter(Boolean);
  return queryWords.every((w) => normTarget.includes(w));
}

// src/provinces.ts
var provinces = provinces_default;
function getProvinces() {
  return [...provinces];
}
function getProvince(codeOrName) {
  if (typeof codeOrName === "number") {
    return provinces.find((p) => p.code === codeOrName);
  }
  const query = normalizeText(codeOrName);
  return provinces.find(
    (p) => normalizeText(p.name) === query || p.nameSi.trim() === codeOrName.trim() || p.nameTa.trim() === codeOrName.trim() || p.pcode.toLowerCase() === codeOrName.toLowerCase()
  );
}

export {
  calculateDistance,
  normalizeText,
  matchesQuery,
  getProvinces,
  getProvince
};
//# sourceMappingURL=chunk-RWJNZNRK.mjs.map