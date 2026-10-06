"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/zones.ts
var zones_exports = {};
__export(zones_exports, {
  findZoneByDivision: () => findZoneByDivision,
  getAllDivisions: () => getAllDivisions,
  getZone: () => getZone,
  getZones: () => getZones,
  getZonesByDistrict: () => getZonesByDistrict,
  getZonesByProvince: () => getZonesByProvince,
  searchZones: () => searchZones
});
module.exports = __toCommonJS(zones_exports);

// data/zones.json
var zones_default = [
  {
    id: "colombo",
    name: "Colombo",
    nameSi: "\u0D9A\u0DDC\u0DC5\u0DB9",
    nameTa: "\u0B95\u0BCA\u0BB4\u0BC1\u0BAE\u0BCD\u0BAA\u0BC1",
    districtCode: 11,
    districtName: "Colombo",
    provinceCode: 1,
    provinceName: "Western",
    divisions: [
      "Borella",
      "Colombo Central",
      "Colombo North",
      "Colombo South"
    ],
    provincialSchools: 101,
    nationalSchools: 21,
    totalSchools: 122,
    phone: [],
    email: null,
    aliases: [
      "colombo north",
      "colombo south",
      "colombo central",
      "borella"
    ]
  },
  {
    id: "homagama",
    name: "Homagama",
    nameSi: "\u0DC4\u0DDD\u0DB8\u0DCF\u0D9C\u0DB8",
    nameTa: "\u0B93\u0BAE\u0BBE\u0B95\u0BAE",
    districtCode: 11,
    districtName: "Colombo",
    provinceCode: 1,
    provinceName: "Western",
    divisions: [
      "Hanwella",
      "Homagama",
      "Padukka"
    ],
    provincialSchools: 95,
    nationalSchools: 4,
    totalSchools: 99,
    phone: [
      "0112855225"
    ],
    email: null,
    aliases: [
      "hanwella",
      "padukka",
      "avissawella"
    ]
  },
  {
    id: "piliyandala",
    name: "Piliyandala",
    nameSi: "",
    nameTa: "",
    districtCode: 11,
    districtName: "Colombo",
    provinceCode: 1,
    provinceName: "Western",
    divisions: [
      "Dehiwala",
      "Kesbewa",
      "Moratuwa"
    ],
    provincialSchools: 80,
    nationalSchools: 5,
    totalSchools: 85,
    phone: [
      "0112614200"
    ],
    email: "pil@edudept.wp.gov.lk",
    aliases: [
      "dehiwala",
      "mount lavinia",
      "moratuwa",
      "kesbewa"
    ]
  },
  {
    id: "sri-jayawardenapura",
    name: "Sri Jayawardenapura",
    nameSi: "",
    nameTa: "",
    districtCode: 11,
    districtName: "Colombo",
    provinceCode: 1,
    provinceName: "Western",
    divisions: [
      "Kaduwela",
      "Kolonnawa",
      "Maharagama",
      "Nugegoda"
    ],
    provincialSchools: 76,
    nationalSchools: 9,
    totalSchools: 85,
    phone: [
      "0112876627"
    ],
    email: null,
    aliases: [
      "sri jayawardenepura",
      "jayawardenapura",
      "japura",
      "kotte",
      "nugegoda"
    ]
  },
  {
    id: "gampaha",
    name: "Gampaha",
    nameSi: "\u0D9C\u0DB8\u0DCA\u0DB4\u0DC4",
    nameTa: "\u0B95\u0BAE\u0BCD\u0BAA\u0BB9\u0BBE",
    districtCode: 12,
    districtName: "Gampaha",
    provinceCode: 1,
    provinceName: "Western",
    divisions: [
      "Attanagalla",
      "Dompe (Weke)",
      "Gampaha"
    ],
    provincialSchools: 138,
    nationalSchools: 7,
    totalSchools: 145,
    phone: [
      "0332231663"
    ],
    email: null,
    aliases: [
      "attanagalla",
      "dompe",
      "nittambuwa"
    ]
  },
  {
    id: "kelaniya",
    name: "Kelaniya",
    nameSi: "\u0D9A\u0DD0\u0DBD\u0DAB\u0DD2\u0DBA",
    nameTa: "\u0B95\u0BB3\u0BA9\u0BBF",
    districtCode: 12,
    districtName: "Gampaha",
    provinceCode: 1,
    provinceName: "Western",
    divisions: [
      "Biyagama",
      "Kelaniya",
      "Mahara",
      "Wattala"
    ],
    provincialSchools: 108,
    nationalSchools: 6,
    totalSchools: 114,
    phone: [
      "0112927592"
    ],
    email: "nemis.kel@edudept.wp.gov.lk",
    aliases: [
      "wattala",
      "mahara",
      "biyagama"
    ]
  },
  {
    id: "minuwangoda",
    name: "Minuwangoda",
    nameSi: "\u0DB8\u0DD2\u0DB1\u0DD4\u0DC0\u0DB1\u0DCA\u0D9C\u0DDC\u0DA9",
    nameTa: "\u0BAE\u0BBF\u0BA9\u0BC1\u0BB5\u0BBE\u0BA9\u0BCD\u0B95\u0BCA\u0B9F\u0BC8",
    districtCode: 12,
    districtName: "Gampaha",
    provinceCode: 1,
    provinceName: "Western",
    divisions: [
      "Divulapitiya",
      "Meerigama",
      "Minuwangoda"
    ],
    provincialSchools: 154,
    nationalSchools: 3,
    totalSchools: 157,
    phone: [
      "0112295077"
    ],
    email: null,
    aliases: [
      "divulapitiya",
      "meerigama",
      "mirigama"
    ]
  },
  {
    id: "negombo",
    name: "Negombo",
    nameSi: "\u0DB8\u0DD3\u0D9C\u0DB8\u0DD4\u0DC0",
    nameTa: "\u0BA8\u0BC0\u0BB0\u0BCD\u0B95\u0BCA\u0BB4\u0BC1\u0BAE\u0BCD\u0BAA\u0BC1",
    districtCode: 12,
    districtName: "Gampaha",
    provinceCode: 1,
    provinceName: "Western",
    divisions: [
      "Ja-Ela",
      "Katana",
      "Negombo"
    ],
    provincialSchools: 113,
    nationalSchools: 4,
    totalSchools: 117,
    phone: [
      "0112265639"
    ],
    email: null,
    aliases: [
      "katana",
      "ja-ela",
      "jaela"
    ]
  },
  {
    id: "horana",
    name: "Horana",
    nameSi: "\u0DC4\u0DDC\u0DBB\u0DAB",
    nameTa: "\u0BB9\u0BCA\u0BB0\u0BBE\u0BA3",
    districtCode: 13,
    districtName: "Kalutara",
    provinceCode: 1,
    provinceName: "Western",
    divisions: [
      "Bandaragama",
      "Bulathsinhala",
      "Horana"
    ],
    provincialSchools: 132,
    nationalSchools: 5,
    totalSchools: 137,
    phone: [
      "0342262663"
    ],
    email: null,
    aliases: [
      "bandaragama",
      "bulathsinhala"
    ]
  },
  {
    id: "kalutara",
    name: "Kalutara",
    nameSi: "\u0D9A\u0DC5\u0DD4\u0DAD\u0DBB",
    nameTa: "\u0B95\u0BB3\u0BC1\u0BA4\u0BCD\u0BA4\u0BC1\u0BB1\u0BC8",
    districtCode: 13,
    districtName: "Kalutara",
    provinceCode: 1,
    provinceName: "Western",
    divisions: [
      "Beruwala",
      "Dodangoda",
      "Kalutara",
      "Panadura"
    ],
    provincialSchools: 137,
    nationalSchools: 12,
    totalSchools: 149,
    phone: [
      "0342222007"
    ],
    email: null,
    aliases: [
      "panadura",
      "beruwala",
      "dodangoda"
    ]
  },
  {
    id: "matugama",
    name: "Matugama",
    nameSi: "",
    nameTa: "",
    districtCode: 13,
    districtName: "Kalutara",
    provinceCode: 1,
    provinceName: "Western",
    divisions: [
      "Agalawatta",
      "Matugama",
      "Palindanuwara",
      "Walallawita"
    ],
    provincialSchools: 126,
    nationalSchools: 3,
    totalSchools: 129,
    phone: [
      "0342247218"
    ],
    email: null,
    aliases: [
      "agalawatta",
      "walallawita",
      "palindanuwara"
    ]
  },
  {
    id: "denuwara",
    name: "Denuwara",
    nameSi: "",
    nameTa: "",
    districtCode: 21,
    districtName: "Kandy",
    provinceCode: 2,
    provinceName: "Central",
    divisions: [
      "Udunuwara",
      "Yatinuwara"
    ],
    provincialSchools: 83,
    nationalSchools: 4,
    totalSchools: 87,
    phone: [
      "0812575543"
    ],
    email: null,
    aliases: [
      "deltota",
      "udunuwara",
      "yatinuwara"
    ]
  },
  {
    id: "gampola",
    name: "Gampola",
    nameSi: "",
    nameTa: "",
    districtCode: 21,
    districtName: "Kandy",
    provinceCode: 2,
    provinceName: "Central",
    divisions: [
      "Ganga Ihala Korale",
      "Pasbage Korale",
      "Udapalatha"
    ],
    provincialSchools: 137,
    nationalSchools: 6,
    totalSchools: 143,
    phone: [
      "0812350368"
    ],
    email: null,
    aliases: [
      "udapalatha",
      "nawalapitiya",
      "pasbage korale"
    ]
  },
  {
    id: "kandy",
    name: "Kandy",
    nameSi: "\u0DB8\u0DC4\u0DB1\u0DD4\u0DC0\u0DBB",
    nameTa: "\u0B95\u0BA3\u0BCD\u0B9F\u0BBF",
    districtCode: 21,
    districtName: "Kandy",
    provinceCode: 2,
    provinceName: "Central",
    divisions: [
      "Gangawata Korale",
      "Pathahewaheta"
    ],
    provincialSchools: 108,
    nationalSchools: 9,
    totalSchools: 117,
    phone: [
      "0812234522"
    ],
    email: null,
    aliases: []
  },
  {
    id: "katugastota",
    name: "Katugastota",
    nameSi: "",
    nameTa: "",
    districtCode: 21,
    districtName: "Kandy",
    provinceCode: 2,
    provinceName: "Central",
    divisions: [
      "Akurana",
      "Galagedara",
      "Harispattuwa",
      "Hatharaliyadda",
      "Poojapitiya"
    ],
    provincialSchools: 110,
    nationalSchools: 10,
    totalSchools: 120,
    phone: [],
    email: null,
    aliases: [
      "katugasthota"
    ]
  },
  {
    id: "teldeniya",
    name: "Teldeniya",
    nameSi: "",
    nameTa: "",
    districtCode: 21,
    districtName: "Kandy",
    provinceCode: 2,
    provinceName: "Central",
    divisions: [
      "Medadumbara",
      "Minipe",
      "Udadumbara"
    ],
    provincialSchools: 94,
    nationalSchools: 3,
    totalSchools: 97,
    phone: [
      "0812374435"
    ],
    email: null,
    aliases: [
      "medadumbara",
      "minipe",
      "udadumbara"
    ]
  },
  {
    id: "waththegama",
    name: "Waththegama",
    nameSi: "",
    nameTa: "",
    districtCode: 21,
    districtName: "Kandy",
    provinceCode: 2,
    provinceName: "Central",
    divisions: [
      "Kundasale",
      "Panvila",
      "Pathadumbara"
    ],
    provincialSchools: 82,
    nationalSchools: 4,
    totalSchools: 86,
    phone: [
      "0812476307"
    ],
    email: null,
    aliases: [
      "wattegama",
      "wathegama"
    ]
  },
  {
    id: "galewela",
    name: "Galewela",
    nameSi: "\u0D9C\u0DBD\u0DDA\u0DC0\u0DD9\u0DBD",
    nameTa: "\u0B95\u0BB2\u0BC7\u0BB5\u0BC6\u0BB2",
    districtCode: 22,
    districtName: "Matale",
    provinceCode: 2,
    provinceName: "Central",
    divisions: [
      "Dambulla",
      "Galewela",
      "Pallepola"
    ],
    provincialSchools: 105,
    nationalSchools: 2,
    totalSchools: 107,
    phone: [
      "0662289303"
    ],
    email: null,
    aliases: [
      "dambulla",
      "pallepola"
    ]
  },
  {
    id: "matale",
    name: "Matale",
    nameSi: "\u0DB8\u0DCF\u0DAD\u0DBD\u0DDA",
    nameTa: "\u0BAE\u0BBE\u0BA4\u0BCD\u0BA4\u0BB3\u0BC8",
    districtCode: 22,
    districtName: "Matale",
    provinceCode: 2,
    provinceName: "Central",
    divisions: [
      "Matale",
      "Rattota",
      "Ukuwela",
      "Yatawatta"
    ],
    provincialSchools: 110,
    nationalSchools: 9,
    totalSchools: 119,
    phone: [
      "0662222333"
    ],
    email: null,
    aliases: [
      "rattota",
      "ukuwela",
      "yatawatta"
    ]
  },
  {
    id: "naula",
    name: "Naula",
    nameSi: "\u0DB1\u0DCF\u0D8B\u0DBD",
    nameTa: "\u0BA8\u0BBE\u0BB5\u0BC1\u0BB2",
    districtCode: 22,
    districtName: "Matale",
    provinceCode: 2,
    provinceName: "Central",
    divisions: [
      "Ambanganga Korale",
      "Naula"
    ],
    provincialSchools: 38,
    nationalSchools: 1,
    totalSchools: 39,
    phone: [
      "0662246103"
    ],
    email: null,
    aliases: [
      "ambanganga korale"
    ]
  },
  {
    id: "wilgamuwa",
    name: "Wilgamuwa",
    nameSi: "\u0DC0\u0DD2\u0DBD\u0DCA\u0D9C\u0DB8\u0DD4\u0DC0",
    nameTa: "\u0BB5\u0BBF\u0BB2\u0BCD\u0B95\u0BAE\u0BC1\u0BB5",
    districtCode: 22,
    districtName: "Matale",
    provinceCode: 2,
    provinceName: "Central",
    divisions: [
      "Laggala",
      "Wilgamuwa"
    ],
    provincialSchools: 45,
    nationalSchools: 0,
    totalSchools: 45,
    phone: [
      "0662250102"
    ],
    email: null,
    aliases: [
      "laggala",
      "hettipola"
    ]
  },
  {
    id: "hanguranketha",
    name: "Hanguranketha",
    nameSi: "\u0DC4\u0D9F\u0DD4\u0DBB\u0DB1\u0DCA\u0D9A\u0DD9\u0DAD",
    nameTa: "\u0BB9\u0BA9\u0BCD\u0B95\u0BC1\u0BB0\u0BA9\u0BCD\u0B95\u0BC6\u0BA4",
    districtCode: 23,
    districtName: "Nuwara Eliya",
    provinceCode: 2,
    provinceName: "Central",
    divisions: [
      "Udahewaheta"
    ],
    provincialSchools: 66,
    nationalSchools: 2,
    totalSchools: 68,
    phone: [
      "0812369039"
    ],
    email: null,
    aliases: [
      "udahewaheta"
    ]
  },
  {
    id: "hatton",
    name: "Hatton",
    nameSi: "",
    nameTa: "",
    districtCode: 23,
    districtName: "Nuwara Eliya",
    provinceCode: 2,
    provinceName: "Central",
    divisions: [
      "Ambagamuwa",
      "Hatton Tamil - I",
      "Hatton Tamil - II",
      "Hatton Tamil - III"
    ],
    provincialSchools: 150,
    nationalSchools: 1,
    totalSchools: 151,
    phone: [
      "0512224920"
    ],
    email: null,
    aliases: [
      "hatton zone",
      "maskeliya",
      "dickoya"
    ]
  },
  {
    id: "kotmale",
    name: "Kotmale",
    nameSi: "",
    nameTa: "",
    districtCode: 23,
    districtName: "Nuwara Eliya",
    provinceCode: 2,
    provinceName: "Central",
    divisions: [
      "Kotmale"
    ],
    provincialSchools: 84,
    nationalSchools: 3,
    totalSchools: 87,
    phone: [
      "0522259873"
    ],
    email: null,
    aliases: [
      "kothmale"
    ]
  },
  {
    id: "nuwara-eliya",
    name: "Nuwara Eliya",
    nameSi: "\u0DB1\u0DD4\u0DC0\u0DBB\u0D91\u0DC5\u0DD2\u0DBA",
    nameTa: "\u0BA8\u0BC1\u0BB5\u0BB0\u0BC6\u0BB2\u0BBF\u0BAF\u0BBE",
    districtCode: 23,
    districtName: "Nuwara Eliya",
    provinceCode: 2,
    provinceName: "Central",
    divisions: [
      "Nuwara Eliya",
      "Nuwara Eliya Tamil - I",
      "Nuwara Eliya Tamil - II",
      "Nuwara Eliya Tamil - III"
    ],
    provincialSchools: 155,
    nationalSchools: 1,
    totalSchools: 156,
    phone: [
      "0522222311"
    ],
    email: null,
    aliases: [
      "nuwaraeliya",
      "nuwara-eliya"
    ]
  },
  {
    id: "walapane",
    name: "Walapane",
    nameSi: "\u0DC0\u0DBD\u0DB4\u0DB1\u0DDA",
    nameTa: "\u0BB5\u0BB2\u0BAA\u0BBE\u0BA9\u0BC8",
    districtCode: 23,
    districtName: "Nuwara Eliya",
    provinceCode: 2,
    provinceName: "Central",
    divisions: [
      "Walapane"
    ],
    provincialSchools: 88,
    nationalSchools: 1,
    totalSchools: 89,
    phone: [
      "0522279131"
    ],
    email: null,
    aliases: [
      "rikillagaskada"
    ]
  },
  {
    id: "ambalangoda",
    name: "Ambalangoda",
    nameSi: "\u0D85\u0DB8\u0DCA\u0DB6\u0DBD\u0DB1\u0DCA\u0D9C\u0DDC\u0DA9",
    nameTa: "\u0B85\u0BAE\u0BCD\u0BAA\u0BB2\u0BBE\u0B99\u0BCD\u0B95\u0BCA\u0B9F\u0BC8",
    districtCode: 31,
    districtName: "Galle",
    provinceCode: 3,
    provinceName: "Southern",
    divisions: [
      "Ambalangoda",
      "Balapitiya",
      "Hikkaduwa"
    ],
    provincialSchools: 76,
    nationalSchools: 5,
    totalSchools: 81,
    phone: [
      "0912258596"
    ],
    email: null,
    aliases: [
      "hikkaduwa",
      "balapitiya"
    ]
  },
  {
    id: "elpitiya",
    name: "Elpitiya",
    nameSi: "\u0D87\u0DBD\u0DCA\u0DB4\u0DD2\u0DA7\u0DD2\u0DBA",
    nameTa: "\u0B8E\u0BB2\u0BCD\u0BAA\u0BBF\u0B9F\u0BCD\u0B9F\u0BBF\u0BAF",
    districtCode: 31,
    districtName: "Galle",
    provinceCode: 3,
    provinceName: "Southern",
    divisions: [
      "Bentota",
      "Elpitiya",
      "Karandeniya",
      "Niyagama",
      "Welivitiya-Divithura"
    ],
    provincialSchools: 119,
    nationalSchools: 3,
    totalSchools: 122,
    phone: [
      "0912291084"
    ],
    email: null,
    aliases: [
      "karandeniya",
      "bentota"
    ]
  },
  {
    id: "galle",
    name: "Galle",
    nameSi: "\u0D9C\u0DCF\u0DBD\u0DCA\u0DBD",
    nameTa: "\u0B95\u0BBE\u0BB2\u0BBF",
    districtCode: 31,
    districtName: "Galle",
    provinceCode: 3,
    provinceName: "Southern",
    divisions: [
      "Akmeemana",
      "Baddegama",
      "Galle",
      "Habaraduwa"
    ],
    provincialSchools: 125,
    nationalSchools: 19,
    totalSchools: 144,
    phone: [
      "0912246337"
    ],
    email: null,
    aliases: []
  },
  {
    id: "udugama",
    name: "Udugama",
    nameSi: "",
    nameTa: "",
    districtCode: 31,
    districtName: "Galle",
    provinceCode: 3,
    provinceName: "Southern",
    divisions: [
      "Mapalagama",
      "Thawalama",
      "Yakkalamulla"
    ],
    provincialSchools: 75,
    nationalSchools: 3,
    totalSchools: 78,
    phone: [],
    email: null,
    aliases: [
      "thawalama",
      "yakkalamulla",
      "neluwa"
    ]
  },
  {
    id: "akuressa",
    name: "Akuressa",
    nameSi: "\u0D85\u0D9A\u0DD4\u0DBB\u0DD0\u0DC3\u0DCA\u0DC3",
    nameTa: "\u0B85\u0B95\u0BCD\u0B95\u0BC1\u0BB0\u0BC6\u0BB8\u0BCD\u0BB8",
    districtCode: 32,
    districtName: "Matara",
    provinceCode: 3,
    provinceName: "Southern",
    divisions: [
      "Akuressa",
      "Malimboda",
      "Welipitiya"
    ],
    provincialSchools: 75,
    nationalSchools: 2,
    totalSchools: 77,
    phone: [],
    email: null,
    aliases: [
      "malimboda",
      "welipitiya"
    ]
  },
  {
    id: "deniyaya",
    name: "Deniyaya",
    nameSi: "",
    nameTa: "",
    districtCode: 32,
    districtName: "Matara",
    provinceCode: 3,
    provinceName: "Southern",
    divisions: [
      "Kotapola",
      "Morawaka",
      "Pasgoda"
    ],
    provincialSchools: 73,
    nationalSchools: 4,
    totalSchools: 77,
    phone: [],
    email: null,
    aliases: [
      "morawaka",
      "deniyaya (morawaka)"
    ]
  },
  {
    id: "matara",
    name: "Matara",
    nameSi: "\u0DB8\u0DCF\u0DAD\u0DBB",
    nameTa: "\u0BAE\u0BBE\u0BA4\u0BCD\u0BA4\u0BB1\u0BC8",
    districtCode: 32,
    districtName: "Matara",
    provinceCode: 3,
    provinceName: "Southern",
    divisions: [
      "Devinuwara",
      "Dikwella",
      "Matara",
      "Weligama"
    ],
    provincialSchools: 98,
    nationalSchools: 13,
    totalSchools: 111,
    phone: [
      "0412224066"
    ],
    email: null,
    aliases: []
  },
  {
    id: "mulatiyana",
    name: "Mulatiyana",
    nameSi: "\u0DB8\u0DD4\u0DBD\u0DA7\u0DD2\u0DBA\u0DB1",
    nameTa: "\u0BAE\u0BC1\u0BB2\u0B9F\u0BBF\u0BAF\u0BA9",
    districtCode: 32,
    districtName: "Matara",
    provinceCode: 3,
    provinceName: "Southern",
    divisions: [
      "Hakmana",
      "Kamburupitiya",
      "Mulatiyana",
      "Thihagoda"
    ],
    provincialSchools: 87,
    nationalSchools: 4,
    totalSchools: 91,
    phone: [
      "0412286004"
    ],
    email: null,
    aliases: [
      "hakmana",
      "mulatiyana (hakmana)",
      "mulatiyana hakmana"
    ]
  },
  {
    id: "hambantota",
    name: "Hambantota",
    nameSi: "\u0DC4\u0DB8\u0DCA\u0DB6\u0DB1\u0DCA\u0DAD\u0DDC\u0DA7",
    nameTa: "\u0B85\u0BAE\u0BCD\u0BAA\u0BBE\u0BA8\u0BCD\u0BA4\u0BCB\u0B9F\u0BCD\u0B9F\u0BC8",
    districtCode: 33,
    districtName: "Hambantota",
    provinceCode: 3,
    provinceName: "Southern",
    divisions: [
      "Ambalantota",
      "Hambantota",
      "Lunugamvehera",
      "Sooriyawewa",
      "Thissamaharama"
    ],
    provincialSchools: 115,
    nationalSchools: 7,
    totalSchools: 122,
    phone: [],
    email: null,
    aliases: [
      "thissamaharama",
      "ambalantota",
      "sooriyawewa"
    ]
  },
  {
    id: "tangalle",
    name: "Tangalle",
    nameSi: "\u0DAD\u0D82\u0D9C\u0DBD\u0DCA\u0DBD",
    nameTa: "\u0BA4\u0B99\u0BCD\u0B95\u0BB2\u0BCD\u0BB2\u0BC8",
    districtCode: 33,
    districtName: "Hambantota",
    provinceCode: 3,
    provinceName: "Southern",
    divisions: [
      "Angunakolapelessa",
      "Beliatta",
      "Tangalle"
    ],
    provincialSchools: 100,
    nationalSchools: 6,
    totalSchools: 106,
    phone: [
      "0472240268"
    ],
    email: null,
    aliases: [
      "beliatta",
      "angunakolapelessa"
    ]
  },
  {
    id: "walasmulla",
    name: "Walasmulla",
    nameSi: "\u0DC0\u0DBD\u0DC3\u0DCA\u0DB8\u0DD4\u0DBD\u0DCA\u0DBD",
    nameTa: "\u0BB5\u0BB2\u0BB8\u0BCD\u0BAE\u0BC1\u0BB2\u0BCD\u0BB2\u0BC8",
    districtCode: 33,
    districtName: "Hambantota",
    provinceCode: 3,
    provinceName: "Southern",
    divisions: [
      "Katuwana",
      "Walasmulla"
    ],
    provincialSchools: 87,
    nationalSchools: 4,
    totalSchools: 91,
    phone: [],
    email: null,
    aliases: [
      "katuwana"
    ]
  },
  {
    id: "islands",
    name: "Islands",
    nameSi: "",
    nameTa: "",
    districtCode: 41,
    districtName: "Jaffna",
    provinceCode: 4,
    provinceName: "Northern",
    divisions: [
      "Delft",
      "Karainagar",
      "Kayts",
      "Velanai"
    ],
    provincialSchools: 63,
    nationalSchools: 0,
    totalSchools: 63,
    phone: [],
    email: null,
    aliases: [
      "island",
      "islands zone",
      "kayts",
      "delft"
    ]
  },
  {
    id: "jaffna",
    name: "Jaffna",
    nameSi: "\u0DBA\u0DCF\u0DB4\u0DB1\u0DBA",
    nameTa: "\u0BAF\u0BBE\u0BB4\u0BCD\u0BAA\u0BCD\u0BAA\u0BBE\u0BA3\u0BAE\u0BCD",
    districtCode: 41,
    districtName: "Jaffna",
    provinceCode: 4,
    provinceName: "Northern",
    divisions: [
      "Jaffna",
      "Kopay",
      "Nallur"
    ],
    provincialSchools: 94,
    nationalSchools: 4,
    totalSchools: 98,
    phone: [
      "0212222449"
    ],
    email: null,
    aliases: [
      "kopay",
      "nallur"
    ]
  },
  {
    id: "thenmaradchi",
    name: "Thenmaradchi",
    nameSi: "",
    nameTa: "",
    districtCode: 41,
    districtName: "Jaffna",
    provinceCode: 4,
    provinceName: "Northern",
    divisions: [
      "Chavakachcheri"
    ],
    provincialSchools: 57,
    nationalSchools: 1,
    totalSchools: 58,
    phone: [
      "0212270787"
    ],
    email: null,
    aliases: [
      "thenmarachchi",
      "thenmaratchi",
      "chavakachcheri"
    ]
  },
  {
    id: "vadamaradchi",
    name: "Vadamaradchi",
    nameSi: "",
    nameTa: "",
    districtCode: 41,
    districtName: "Jaffna",
    provinceCode: 4,
    provinceName: "Northern",
    divisions: [
      "Karaveddy",
      "Maruthankerney",
      "Point Pedru"
    ],
    provincialSchools: 78,
    nationalSchools: 2,
    totalSchools: 80,
    phone: [],
    email: null,
    aliases: [
      "vadamarachchi",
      "vadamaratchi",
      "point pedro"
    ]
  },
  {
    id: "valikamam",
    name: "Valikamam",
    nameSi: "",
    nameTa: "",
    districtCode: 41,
    districtName: "Jaffna",
    provinceCode: 4,
    provinceName: "Northern",
    divisions: [
      "Chankanai",
      "Sandilipay",
      "Tellippalai",
      "Uduvil"
    ],
    provincialSchools: 140,
    nationalSchools: 1,
    totalSchools: 141,
    phone: [],
    email: null,
    aliases: [
      "vallikamam",
      "valigamam"
    ]
  },
  {
    id: "madhu",
    name: "Madhu",
    nameSi: "\u0DB8\u0DA9\u0DD4",
    nameTa: "\u0BAE\u0B9F\u0BC1",
    districtCode: 42,
    districtName: "Mannar",
    provinceCode: 4,
    provinceName: "Northern",
    divisions: [
      "Madhu",
      "Manthai West"
    ],
    provincialSchools: 50,
    nationalSchools: 0,
    totalSchools: 50,
    phone: [
      "0232051199"
    ],
    email: null,
    aliases: [
      "madu",
      "madhu zone"
    ]
  },
  {
    id: "mannar",
    name: "Mannar",
    nameSi: "\u0DB8\u0DB1\u0DCA\u0DB1\u0DCF\u0DBB\u0DB8",
    nameTa: "\u0BAE\u0BA9\u0BCD\u0BA9\u0BBE\u0BB0\u0BCD",
    districtCode: 42,
    districtName: "Mannar",
    provinceCode: 4,
    provinceName: "Northern",
    divisions: [
      "Mannar",
      "Musali",
      "Nanattan"
    ],
    provincialSchools: 77,
    nationalSchools: 5,
    totalSchools: 82,
    phone: [
      "0232223771"
    ],
    email: null,
    aliases: [
      "nanattan",
      "musali"
    ]
  },
  {
    id: "vavuniya-north",
    name: "Vavuniya North",
    nameSi: "\u0DC0\u0DC0\u0DD4\u0DB1\u0DD2\u0DBA\u0DCF\u0DC0 \u0D8B\u0DAD\u0DD4\u0DBB",
    nameTa: "\u0BB5\u0BB5\u0BC1\u0BA9\u0BBF\u0BAF\u0BBE \u0BB5\u0B9F\u0B95\u0BCD\u0B95\u0BC1",
    districtCode: 43,
    districtName: "Vavuniya",
    provinceCode: 4,
    provinceName: "Northern",
    divisions: [
      "Nedunkerny",
      "Omanthai"
    ],
    provincialSchools: 72,
    nationalSchools: 0,
    totalSchools: 72,
    phone: [
      "0242051910"
    ],
    email: null,
    aliases: [
      "vavuniya",
      "nedunkerny"
    ]
  },
  {
    id: "vavuniya-south",
    name: "Vavuniya South",
    nameSi: "\u0DC0\u0DC0\u0DD4\u0DB1\u0DD2\u0DBA\u0DCF\u0DC0 \u0DAF\u0D9A\u0DD4\u0DAB",
    nameTa: "\u0BB5\u0BB5\u0BC1\u0BA9\u0BBF\u0BAF\u0BBE \u0BA4\u0BC6\u0BB1\u0BCD\u0B95\u0BC1",
    districtCode: 43,
    districtName: "Vavuniya",
    provinceCode: 4,
    provinceName: "Northern",
    divisions: [
      "Vavuniya South (Sinhala)",
      "Vavuniya South (Tamil)",
      "Vengalacheddikulam"
    ],
    provincialSchools: 91,
    nationalSchools: 5,
    totalSchools: 96,
    phone: [],
    email: null,
    aliases: [
      "vavuniya",
      "vavuniya town"
    ]
  },
  {
    id: "mullaitivu",
    name: "Mullaitivu",
    nameSi: "\u0DB8\u0DD4\u0DBD\u0DAD\u0DD2\u0DC0\u0DCA",
    nameTa: "\u0BAE\u0BC1\u0BB2\u0BCD\u0BB2\u0BC8\u0BA4\u0BCD\u0BA4\u0BC0\u0BB5\u0BC1",
    districtCode: 44,
    districtName: "Mullaitivu",
    provinceCode: 4,
    provinceName: "Northern",
    divisions: [
      "Maritimepattu",
      "Puthukkudiyiruppu",
      "Welioya"
    ],
    provincialSchools: 64,
    nationalSchools: 2,
    totalSchools: 66,
    phone: [],
    email: null,
    aliases: [
      "puthukkudiyiruppu",
      "maritimepattu",
      "oddusuddan"
    ]
  },
  {
    id: "thunukkai",
    name: "Thunukkai",
    nameSi: "\u0DAD\u0DD4\u0DB1\u0DD4\u0D9A\u0DCA\u0D9A\u0DCF\u0DBA\u0DD2",
    nameTa: "\u0BA4\u0BC1\u0BA3\u0BC1\u0B95\u0BCD\u0B95\u0BBE\u0BAF\u0BCD",
    districtCode: 44,
    districtName: "Mullaitivu",
    provinceCode: 4,
    provinceName: "Northern",
    divisions: [
      "Manthai East",
      "Oddusuddan",
      "Thunukkai"
    ],
    provincialSchools: 58,
    nationalSchools: 1,
    totalSchools: 59,
    phone: [
      "0212060032"
    ],
    email: null,
    aliases: [
      "thunukai",
      "mankulam"
    ]
  },
  {
    id: "kilinochchi-north",
    name: "Kilinochchi North",
    nameSi: "",
    nameTa: "",
    districtCode: 45,
    districtName: "Kilinochchi",
    provinceCode: 4,
    provinceName: "Northern",
    divisions: [
      "Kandawalai",
      "Pallai"
    ],
    provincialSchools: 37,
    nationalSchools: 1,
    totalSchools: 38,
    phone: [],
    email: null,
    aliases: [
      "kilinochchi",
      "killinochchi north",
      "pallai"
    ]
  },
  {
    id: "kilinochchi-south",
    name: "Kilinochchi South",
    nameSi: "",
    nameTa: "",
    districtCode: 45,
    districtName: "Kilinochchi",
    provinceCode: 4,
    provinceName: "Northern",
    divisions: [
      "Karachchi",
      "Poonakary"
    ],
    provincialSchools: 64,
    nationalSchools: 2,
    totalSchools: 66,
    phone: [],
    email: null,
    aliases: [
      "kilinochchi",
      "killinochchi south",
      "kilinochchi town"
    ]
  },
  {
    id: "batticaloa",
    name: "Batticaloa",
    nameSi: "\u0DB8\u0DA9\u0D9A\u0DBD\u0DB4\u0DD4\u0DC0",
    nameTa: "\u0BAE\u0B9F\u0BCD\u0B9F\u0B95\u0BCD\u0B95\u0BB3\u0BAA\u0BCD\u0BAA\u0BC1",
    districtCode: 51,
    districtName: "Batticaloa",
    provinceCode: 5,
    provinceName: "Eastern",
    divisions: [
      "Eravur Pattu - I (Chenkalady)",
      "Manmunai North (Batticaloa)",
      "Manmunai Pattu"
    ],
    provincialSchools: 62,
    nationalSchools: 4,
    totalSchools: 66,
    phone: [],
    email: null,
    aliases: []
  },
  {
    id: "batticaloa-central",
    name: "Batticaloa Central",
    nameSi: "",
    nameTa: "",
    districtCode: 51,
    districtName: "Batticaloa",
    provinceCode: 5,
    provinceName: "Eastern",
    divisions: [
      "Eravur Town",
      "Kaththankudy",
      "Koralai Pattu West"
    ],
    provincialSchools: 72,
    nationalSchools: 6,
    totalSchools: 78,
    phone: [],
    email: null,
    aliases: [
      "batticaloa central zone",
      "eravur"
    ]
  },
  {
    id: "batticaloa-west",
    name: "Batticaloa West",
    nameSi: "",
    nameTa: "",
    districtCode: 51,
    districtName: "Batticaloa",
    provinceCode: 5,
    provinceName: "Eastern",
    divisions: [
      "Eravur Pattu - III",
      "Manmunai South West",
      "Manmunai West"
    ],
    provincialSchools: 68,
    nationalSchools: 0,
    totalSchools: 68,
    phone: [
      "0655678787"
    ],
    email: null,
    aliases: [
      "chenkalady west",
      "manmunai west"
    ]
  },
  {
    id: "kalkudah",
    name: "Kalkudah",
    nameSi: "",
    nameTa: "",
    districtCode: 51,
    districtName: "Batticaloa",
    provinceCode: 5,
    provinceName: "Eastern",
    divisions: [
      "Eravur Pattu - II",
      "Koralai Pattu",
      "Koralai Pattu North"
    ],
    provincialSchools: 84,
    nationalSchools: 1,
    totalSchools: 85,
    phone: [
      "0652258130"
    ],
    email: null,
    aliases: [
      "kalkuda",
      "valaichchenai"
    ]
  },
  {
    id: "paddrippu",
    name: "Paddrippu",
    nameSi: "",
    nameTa: "",
    districtCode: 51,
    districtName: "Batticaloa",
    provinceCode: 5,
    provinceName: "Eastern",
    divisions: [
      "Manmunai South & Eruvil Pattu",
      "Porativu Pattu"
    ],
    provincialSchools: 68,
    nationalSchools: 2,
    totalSchools: 70,
    phone: [
      "0652251601"
    ],
    email: null,
    aliases: [
      "paddiruppu",
      "paddirippu",
      "kaluwanchikudy"
    ]
  },
  {
    id: "akkaraipattu",
    name: "Akkaraipattu",
    nameSi: "\u0D85\u0D9A\u0DCA\u0D9A\u0DBB\u0DD9\u0DBA\u0DD2\u0DB4\u0DAD\u0DCA\u0DAD\u0DD4",
    nameTa: "\u0B85\u0B95\u0BCD\u0B95\u0BB0\u0BC8\u0BAA\u0BCD\u0BAA\u0BB1\u0BCD\u0BB1\u0BC1",
    districtCode: 52,
    districtName: "Ampara",
    provinceCode: 5,
    provinceName: "Eastern",
    divisions: [
      "Addalachchenai",
      "Akkaraipattu",
      "Pottuvil - I"
    ],
    provincialSchools: 69,
    nationalSchools: 3,
    totalSchools: 72,
    phone: [],
    email: "akk@edudept.ep.gov.lk",
    aliases: [
      "akkaraippattu",
      "addalachchenai"
    ]
  },
  {
    id: "ampara",
    name: "Ampara",
    nameSi: "\u0D85\u0DB8\u0DCA\u0DB4\u0DCF\u0DBB",
    nameTa: "\u0B85\u0BAE\u0BCD\u0BAA\u0BBE\u0BB1\u0BC8",
    districtCode: 52,
    districtName: "Ampara",
    provinceCode: 5,
    provinceName: "Eastern",
    divisions: [
      "Ampara",
      "Damana",
      "Lahugala",
      "Uhana"
    ],
    provincialSchools: 100,
    nationalSchools: 3,
    totalSchools: 103,
    phone: [],
    email: null,
    aliases: [
      "uhana",
      "damana",
      "lahugala"
    ]
  },
  {
    id: "dehiattakandiya",
    name: "Dehiattakandiya",
    nameSi: "\u0DAF\u0DD9\u0DC4\u0DD2\u0D85\u0DAD\u0DCA\u0DAD\u0D9A\u0DAB\u0DCA\u0DA9\u0DD2\u0DBA",
    nameTa: "\u0BA4\u0BC6\u0BB9\u0BBF\u0BAF\u0B9F\u0BCD\u0B9F\u0B95\u0BA3\u0BCD\u0B9F\u0BBF\u0BAF",
    districtCode: 52,
    districtName: "Ampara",
    provinceCode: 5,
    provinceName: "Eastern",
    divisions: [
      "Dehiattakandiya"
    ],
    provincialSchools: 46,
    nationalSchools: 1,
    totalSchools: 47,
    phone: [],
    email: null,
    aliases: [
      "dehiaththakandiya"
    ]
  },
  {
    id: "kalmunai",
    name: "Kalmunai",
    nameSi: "",
    nameTa: "",
    districtCode: 52,
    districtName: "Ampara",
    provinceCode: 5,
    provinceName: "Eastern",
    divisions: [
      "Kalmunai",
      "Kalmunai Tamil",
      "Karaithivu",
      "Ninthavur",
      "Sainthamaruthu"
    ],
    provincialSchools: 61,
    nationalSchools: 4,
    totalSchools: 65,
    phone: [],
    email: null,
    aliases: [
      "kalmunai tamil",
      "sainthamaruthu"
    ]
  },
  {
    id: "mahaoya",
    name: "Mahaoya",
    nameSi: "\u0DB8\u0DC4\u0D94\u0DBA",
    nameTa: "\u0BAE\u0B95\u0BBE\u0B93\u0BAF",
    districtCode: 52,
    districtName: "Ampara",
    provinceCode: 5,
    provinceName: "Eastern",
    divisions: [
      "Mahaoya",
      "Padiyatalawa"
    ],
    provincialSchools: 39,
    nationalSchools: 1,
    totalSchools: 40,
    phone: [
      "0632244095"
    ],
    email: null,
    aliases: [
      "padiyatalawa"
    ]
  },
  {
    id: "sammanthurai",
    name: "Sammanthurai",
    nameSi: "\u0DC3\u0DB8\u0DCA\u0DB8\u0DB1\u0DCA\u0DAD\u0DD4\u0DBB\u0DDA",
    nameTa: "\u0B9A\u0BAE\u0BCD\u0BAE\u0BBE\u0BA8\u0BCD\u0BA4\u0BC1\u0BB1\u0BC8",
    districtCode: 52,
    districtName: "Ampara",
    provinceCode: 5,
    provinceName: "Eastern",
    divisions: [
      "Irakkamam",
      "Navithanveli",
      "Sammanthurai"
    ],
    provincialSchools: 68,
    nationalSchools: 3,
    totalSchools: 71,
    phone: [],
    email: null,
    aliases: [
      "samanthurai",
      "sammanthurai zone"
    ]
  },
  {
    id: "thirukkovil",
    name: "Thirukkovil",
    nameSi: "\u0DAD\u0DD2\u0DBB\u0DD4\u0D9A\u0DDD\u0DC0\u0DD2\u0DBD\u0DCA",
    nameTa: "\u0BA4\u0BBF\u0BB0\u0BC1\u0B95\u0BCD\u0B95\u0BCB\u0BB5\u0BBF\u0BB2\u0BCD",
    districtCode: 52,
    districtName: "Ampara",
    provinceCode: 5,
    provinceName: "Eastern",
    divisions: [
      "Alayadivembu",
      "Pottuvil - II (Tamil)",
      "Thirukkovil"
    ],
    provincialSchools: 44,
    nationalSchools: 2,
    totalSchools: 46,
    phone: [
      "0672265356"
    ],
    email: null,
    aliases: [
      "thirukovil",
      "pottuvil"
    ]
  },
  {
    id: "kantale",
    name: "Kantale",
    nameSi: "\u0D9A\u0DB1\u0DCA\u0DAD\u0DBD\u0DDA",
    nameTa: "\u0B95\u0BA8\u0BCD\u0BA4\u0BB3\u0BBE\u0BAF\u0BCD",
    districtCode: 53,
    districtName: "Trincomalee",
    provinceCode: 5,
    provinceName: "Eastern",
    divisions: [
      "Kantale",
      "Seruvila"
    ],
    provincialSchools: 43,
    nationalSchools: 1,
    totalSchools: 44,
    phone: [],
    email: null,
    aliases: [
      "kanthale",
      "kantalai"
    ]
  },
  {
    id: "kinniya",
    name: "Kinniya",
    nameSi: "\u0D9A\u0DD2\u0DA4\u0DCA\u0DA4\u0DD2\u0DBA",
    nameTa: "\u0B95\u0BBF\u0BA3\u0BCD\u0BA3\u0BBF\u0BAF\u0BBE",
    districtCode: 53,
    districtName: "Trincomalee",
    provinceCode: 5,
    provinceName: "Eastern",
    divisions: [
      "Kinniya",
      "Kurinchakerny",
      "Mullipothana"
    ],
    provincialSchools: 64,
    nationalSchools: 3,
    totalSchools: 67,
    phone: [
      "0262236155"
    ],
    email: "kin@edudept.ep.gov.lk",
    aliases: [
      "kurinchakerny",
      "mullipothana"
    ]
  },
  {
    id: "muttur",
    name: "Muttur",
    nameSi: "\u0DB8\u0DD4\u0DAD\u0DD6\u0DBB\u0DCA",
    nameTa: "\u0BAE\u0BC2\u0BA4\u0BC2\u0BB0\u0BCD",
    districtCode: 53,
    districtName: "Trincomalee",
    provinceCode: 5,
    provinceName: "Eastern",
    divisions: [
      "Echchilampattu",
      "Muttur"
    ],
    provincialSchools: 87,
    nationalSchools: 1,
    totalSchools: 88,
    phone: [
      "0262238256"
    ],
    email: "mut@edudept.ep.gov.lk",
    aliases: [
      "mutur",
      "moothur"
    ]
  },
  {
    id: "trincomalee",
    name: "Trincomalee",
    nameSi: "\u0DAD\u0DCA\u200D\u0DBB\u0DD2\u0D9A\u0DD4\u0DAB\u0DCF\u0DB8\u0DBD\u0DBA",
    nameTa: "\u0BA4\u0BBF\u0BB0\u0BC1\u0B95\u0BCB\u0BA3\u0BAE\u0BB2\u0BC8",
    districtCode: 53,
    districtName: "Trincomalee",
    provinceCode: 5,
    provinceName: "Eastern",
    divisions: [
      "Kuchchaveli",
      "Thampalakamam",
      "Trincomalee Town"
    ],
    provincialSchools: 77,
    nationalSchools: 6,
    totalSchools: 83,
    phone: [],
    email: null,
    aliases: [
      "trincomalee town",
      "kuchchaveli",
      "thampalakamam"
    ]
  },
  {
    id: "trincomalee-north",
    name: "Trincomalee North",
    nameSi: "",
    nameTa: "",
    districtCode: 53,
    districtName: "Trincomalee",
    provinceCode: 5,
    provinceName: "Eastern",
    divisions: [
      "Gomarankadawala",
      "Morawewa",
      "Padavi Sripura"
    ],
    provincialSchools: 34,
    nationalSchools: 1,
    totalSchools: 35,
    phone: [
      "0262255056"
    ],
    email: "trn@edudept.ep.gov.lk",
    aliases: [
      "gomarankadawala",
      "morawewa",
      "padavi sripura"
    ]
  },
  {
    id: "giriulla",
    name: "Giriulla",
    nameSi: "",
    nameTa: "",
    districtCode: 61,
    districtName: "Kurunegala",
    provinceCode: 6,
    provinceName: "North Western",
    divisions: [
      "Alawwa",
      "Kuliyapitiya East",
      "Pannala"
    ],
    provincialSchools: 129,
    nationalSchools: 8,
    totalSchools: 137,
    phone: [
      "0372050497"
    ],
    email: null,
    aliases: [
      "alawwa",
      "pannala"
    ]
  },
  {
    id: "ibbagamuwa",
    name: "Ibbagamuwa",
    nameSi: "\u0D89\u0DB6\u0DCA\u0DB6\u0DCF\u0D9C\u0DB8\u0DD4\u0DC0",
    nameTa: "\u0B87\u0BAA\u0BCD\u0BAA\u0BBE\u0B95\u0BAE\u0BC1\u0BB5",
    districtCode: 61,
    districtName: "Kurunegala",
    provinceCode: 6,
    provinceName: "North Western",
    divisions: [
      "Ganewatta",
      "Ibbagamuwa",
      "Rideegama"
    ],
    provincialSchools: 106,
    nationalSchools: 2,
    totalSchools: 108,
    phone: [
      "0372259651"
    ],
    email: null,
    aliases: [
      "rideegama",
      "ganewatta"
    ]
  },
  {
    id: "kuliyapitiya",
    name: "Kuliyapitiya",
    nameSi: "",
    nameTa: "",
    districtCode: 61,
    districtName: "Kurunegala",
    provinceCode: 6,
    provinceName: "North Western",
    divisions: [
      "Bingiriya",
      "Dahanekgedara",
      "Kuliyapitiya West",
      "Panduwasnuwara",
      "Udubaddawa"
    ],
    provincialSchools: 160,
    nationalSchools: 5,
    totalSchools: 165,
    phone: [
      "0372281247",
      "0372281246"
    ],
    email: null,
    aliases: [
      "kuliyapitiya west",
      "panduwasnuwara"
    ]
  },
  {
    id: "kurunegala",
    name: "Kurunegala",
    nameSi: "\u0D9A\u0DD4\u0DBB\u0DD4\u0DAB\u0DD1\u0D9C\u0DBD",
    nameTa: "\u0B95\u0BC1\u0BB0\u0BC1\u0BA8\u0BBE\u0B95\u0BB2\u0BCD",
    districtCode: 61,
    districtName: "Kurunegala",
    provinceCode: 6,
    provinceName: "North Western",
    divisions: [
      "Kurunegala",
      "Mawathagama",
      "Polgahawela"
    ],
    provincialSchools: 110,
    nationalSchools: 8,
    totalSchools: 118,
    phone: [
      "0372224839"
    ],
    email: null,
    aliases: [
      "mawathagama",
      "polgahawela"
    ]
  },
  {
    id: "maho",
    name: "Maho",
    nameSi: "\u0DB8\u0DC4\u0DC0",
    nameTa: "\u0BAE\u0BB9\u0BB5",
    districtCode: 61,
    districtName: "Kurunegala",
    provinceCode: 6,
    provinceName: "North Western",
    divisions: [
      "Galgamuwa",
      "Giribawa",
      "Maho",
      "Polpitigama"
    ],
    provincialSchools: 183,
    nationalSchools: 5,
    totalSchools: 188,
    phone: [
      "0372275236"
    ],
    email: null,
    aliases: [
      "mahawa",
      "maho zone"
    ]
  },
  {
    id: "nikaweratiya",
    name: "Nikaweratiya",
    nameSi: "\u0DB1\u0DD2\u0D9A\u0DC0\u0DD0\u0DBB\u0DA7\u0DD2\u0DBA",
    nameTa: "\u0BA8\u0BBF\u0B95\u0BCD\u0B95\u0BB5\u0BC6\u0BB0\u0B9F\u0BCD\u0B9F\u0BBF\u0BAF",
    districtCode: 61,
    districtName: "Kurunegala",
    provinceCode: 6,
    provinceName: "North Western",
    divisions: [
      "Kobeigane",
      "Kotavehera",
      "Nikaweratiya",
      "Wariyapola"
    ],
    provincialSchools: 151,
    nationalSchools: 3,
    totalSchools: 154,
    phone: [
      "0372260359"
    ],
    email: null,
    aliases: [
      "wariyapola"
    ]
  },
  {
    id: "chilaw",
    name: "Chilaw",
    nameSi: "\u0DC4\u0DBD\u0DCF\u0DC0\u0DAD",
    nameTa: "\u0B9A\u0BBF\u0BB2\u0BBE\u0BAA\u0BAE\u0BCD",
    districtCode: 62,
    districtName: "Puttalam",
    provinceCode: 6,
    provinceName: "North Western",
    divisions: [
      "Arachchikattuwa",
      "Chilaw",
      "Nattandiya",
      "Wennappuwa"
    ],
    provincialSchools: 153,
    nationalSchools: 5,
    totalSchools: 158,
    phone: [
      "0322222387"
    ],
    email: null,
    aliases: [
      "nattandiya",
      "wennappuwa",
      "arachchikattuwa"
    ]
  },
  {
    id: "puttalam",
    name: "Puttalam",
    nameSi: "\u0DB4\u0DD4\u0DAD\u0DCA\u0DAD\u0DBD\u0DB8",
    nameTa: "\u0BAA\u0BC1\u0BA4\u0BCD\u0BA4\u0BB3\u0BAE\u0BCD",
    districtCode: 62,
    districtName: "Puttalam",
    provinceCode: 6,
    provinceName: "North Western",
    divisions: [
      "Anamaduwa",
      "Kalpitiya",
      "Pallama",
      "Puttalam North",
      "Puttalam South"
    ],
    provincialSchools: 210,
    nationalSchools: 3,
    totalSchools: 213,
    phone: [
      "0322264061"
    ],
    email: null,
    aliases: [
      "kalpitiya",
      "anamaduwa",
      "pallama"
    ]
  },
  {
    id: "anuradhapura",
    name: "Anuradhapura",
    nameSi: "\u0D85\u0DB1\u0DD4\u0DBB\u0DCF\u0DB0\u0DB4\u0DD4\u0DBB",
    nameTa: "\u0B85\u0BA9\u0BC1\u0BB0\u0BBE\u0BA4\u0BAA\u0BC1\u0BB0\u0BAE\u0BCD",
    districtCode: 71,
    districtName: "Anuradhapura",
    provinceCode: 7,
    provinceName: "North Central",
    divisions: [
      "Mahawilachchiya",
      "Nachchaduwa",
      "Nochchiyagama",
      "Nuwaragam Palatha Central",
      "Nuwaragam Palatha East",
      "Rambewa"
    ],
    provincialSchools: 133,
    nationalSchools: 3,
    totalSchools: 136,
    phone: [
      "0252220214"
    ],
    email: null,
    aliases: [
      "nochchiyagama",
      "rambewa",
      "nuwaragam palatha"
    ]
  },
  {
    id: "galenbindunuwewa",
    name: "Galenbindunuwewa",
    nameSi: "\u0D9C\u0DBD\u0DD9\u0DB1\u0DCA\u0DB6\u0DD2\u0DB3\u0DD4\u0DAB\u0DD4\u0DC0\u0DD0\u0DC0",
    nameTa: "\u0B95\u0BB2\u0BC6\u0BA9\u0BCD\u0BAA\u0BBF\u0BA8\u0BCD\u0BA4\u0BC1\u0BA3\u0BC1\u0BB5\u0BC6\u0BB5",
    districtCode: 71,
    districtName: "Anuradhapura",
    provinceCode: 7,
    provinceName: "North Central",
    divisions: [
      "Galenbindunuwewa",
      "Kahatagasdigiliya",
      "Mihintale"
    ],
    provincialSchools: 95,
    nationalSchools: 0,
    totalSchools: 95,
    phone: [
      "0252258245"
    ],
    email: null,
    aliases: [
      "galenbindunuwewa zone",
      "mihintale",
      "kahatagasdigiliya"
    ]
  },
  {
    id: "kebithigollewa",
    name: "Kebithigollewa",
    nameSi: "\u0D9A\u0DD0\u0DB6\u0DD2\u0DAD\u0DD2\u0D9C\u0DDC\u0DBD\u0DCA\u0DBD\u0DD1\u0DC0",
    nameTa: "\u0B95\u0BC6\u0BAA\u0BBF\u0BA4\u0BCD\u0BA4\u0BBF\u0B95\u0BCA\u0BB2\u0BCD\u0BB2\u0BC7\u0BB5",
    districtCode: 71,
    districtName: "Anuradhapura",
    provinceCode: 7,
    provinceName: "North Central",
    divisions: [
      "Horowpothana",
      "Kebithigollewa",
      "Medawachchiya",
      "Padaviya"
    ],
    provincialSchools: 124,
    nationalSchools: 1,
    totalSchools: 125,
    phone: [
      "0252298615"
    ],
    email: null,
    aliases: [
      "medawachchiya",
      "horowpothana"
    ]
  },
  {
    id: "kekirawa",
    name: "Kekirawa",
    nameSi: "\u0D9A\u0DD0\u0D9A\u0DD2\u0DBB\u0DCF\u0DC0",
    nameTa: "\u0B95\u0BC6\u0B95\u0BBF\u0BB0\u0BBE\u0BB5",
    districtCode: 71,
    districtName: "Anuradhapura",
    provinceCode: 7,
    provinceName: "North Central",
    divisions: [
      "Ipalogama",
      "Kekirawa",
      "Palagala",
      "Palugaswewa",
      "Thirappane"
    ],
    provincialSchools: 128,
    nationalSchools: 2,
    totalSchools: 130,
    phone: [
      "0252264233"
    ],
    email: null,
    aliases: [
      "ipalogama",
      "palagala",
      "thirappane"
    ]
  },
  {
    id: "thambuttegama",
    name: "Thambuttegama",
    nameSi: "\u0DAD\u0DB9\u0DD4\u0DAD\u0DCA\u0DAD\u0DDA\u0D9C\u0DB8",
    nameTa: "\u0BA4\u0BAE\u0BCD\u0BAA\u0BC1\u0BA4\u0BCD\u0BA4\u0BC7\u0B95\u0BAE",
    districtCode: 71,
    districtName: "Anuradhapura",
    provinceCode: 7,
    provinceName: "North Central",
    divisions: [
      "Galnewa",
      "Rajanganaya",
      "Thalawa",
      "Thambuttegama"
    ],
    provincialSchools: 69,
    nationalSchools: 2,
    totalSchools: 71,
    phone: [
      "0252276248"
    ],
    email: null,
    aliases: [
      "tambuttegama",
      "thalawa"
    ]
  },
  {
    id: "dimbulagala",
    name: "Dimbulagala",
    nameSi: "\u0DAF\u0DD2\u0DB9\u0DD4\u0DBD\u0DCF\u0D9C\u0DBD",
    nameTa: "\u0BA4\u0BBF\u0BAE\u0BCD\u0BAA\u0BC1\u0BB2\u0BBE\u0B95\u0BB2\u0BC8",
    districtCode: 72,
    districtName: "Polonnaruwa",
    provinceCode: 7,
    provinceName: "North Central",
    divisions: [
      "Aralaganwila",
      "Dimbulagala",
      "Welikanda"
    ],
    provincialSchools: 99,
    nationalSchools: 1,
    totalSchools: 100,
    phone: [],
    email: null,
    aliases: [
      "aralaganwila",
      "welikanda",
      "manampitiya"
    ]
  },
  {
    id: "hingurakgoda",
    name: "Hingurakgoda",
    nameSi: "\u0DC4\u0DD2\u0D9F\u0DD4\u0DBB\u0D9A\u0DCA\u0D9C\u0DDC\u0DA9",
    nameTa: "\u0BB9\u0BBF\u0B99\u0BCD\u0B95\u0BC1\u0BB0\u0B95\u0BCD\u0B95\u0BCA\u0B9F\u0BC8",
    districtCode: 72,
    districtName: "Polonnaruwa",
    provinceCode: 7,
    provinceName: "North Central",
    divisions: [
      "Elahera",
      "Hingurakgoda",
      "Medirigiriya"
    ],
    provincialSchools: 91,
    nationalSchools: 5,
    totalSchools: 96,
    phone: [
      "0272246243"
    ],
    email: null,
    aliases: [
      "medirigiriya",
      "minneriya"
    ]
  },
  {
    id: "polonnaruwa",
    name: "Polonnaruwa",
    nameSi: "\u0DB4\u0DDC\u0DC5\u0DDC\u0DB1\u0DCA\u0DB1\u0DBB\u0DD4\u0DC0",
    nameTa: "\u0BAA\u0BCA\u0BB2\u0BA9\u0BCD\u0BA9\u0BB1\u0BC1\u0BB5\u0BC8",
    districtCode: 72,
    districtName: "Polonnaruwa",
    provinceCode: 7,
    provinceName: "North Central",
    divisions: [
      "Lankapura",
      "Thamankaduwa"
    ],
    provincialSchools: 50,
    nationalSchools: 3,
    totalSchools: 53,
    phone: [
      "0272222184"
    ],
    email: null,
    aliases: [
      "kaduruwela",
      "thamankaduwa",
      "lankapura"
    ]
  },
  {
    id: "badulla",
    name: "Badulla",
    nameSi: "\u0DB6\u0DAF\u0DD4\u0DBD\u0DCA\u0DBD",
    nameTa: "\u0BAA\u0BA4\u0BC1\u0BB3\u0BC8",
    districtCode: 81,
    districtName: "Badulla",
    provinceCode: 8,
    provinceName: "Uva",
    divisions: [
      "Badulla",
      "Hali-Ela"
    ],
    provincialSchools: 106,
    nationalSchools: 6,
    totalSchools: 112,
    phone: [
      "0552294044"
    ],
    email: null,
    aliases: [
      "hali-ela",
      "haliela"
    ]
  },
  {
    id: "bandarawela",
    name: "Bandarawela",
    nameSi: "\u0DB6\u0DAB\u0DCA\u0DA9\u0DCF\u0DBB\u0DC0\u0DD9\u0DBD",
    nameTa: "\u0BAA\u0BA3\u0BCD\u0B9F\u0BBE\u0BB0\u0BB5\u0BC6\u0BB3\u0BC8",
    districtCode: 81,
    districtName: "Badulla",
    provinceCode: 8,
    provinceName: "Uva",
    divisions: [
      "Bandarawela",
      "Ella",
      "Haldummulla",
      "Haputale"
    ],
    provincialSchools: 130,
    nationalSchools: 10,
    totalSchools: 140,
    phone: [],
    email: null,
    aliases: [
      "haputale",
      "ella",
      "haldummulla"
    ]
  },
  {
    id: "mahiyanganaya",
    name: "Mahiyanganaya",
    nameSi: "\u0DB8\u0DC4\u0DD2\u0DBA\u0D82\u0D9C\u0DAB\u0DBA",
    nameTa: "\u0BAE\u0BB9\u0BBF\u0BAF\u0B99\u0BCD\u0B95\u0BA9\u0BC8",
    districtCode: 81,
    districtName: "Badulla",
    provinceCode: 8,
    provinceName: "Uva",
    divisions: [
      "Mahiyanganaya",
      "Rideemaliyedda"
    ],
    provincialSchools: 79,
    nationalSchools: 2,
    totalSchools: 81,
    phone: [
      "0552258193"
    ],
    email: null,
    aliases: [
      "rideemaliyedda"
    ]
  },
  {
    id: "passara",
    name: "Passara",
    nameSi: "\u0DB4\u0DC3\u0DCA\u0DC3\u0DBB",
    nameTa: "\u0BAA\u0BB8\u0BCD\u0B9A\u0BB0",
    districtCode: 81,
    districtName: "Badulla",
    provinceCode: 8,
    provinceName: "Uva",
    divisions: [
      "Passara"
    ],
    provincialSchools: 86,
    nationalSchools: 2,
    totalSchools: 88,
    phone: [
      "0552288130"
    ],
    email: null,
    aliases: [
      "lunugala"
    ]
  },
  {
    id: "viyaluwa",
    name: "Viyaluwa",
    nameSi: "",
    nameTa: "",
    districtCode: 81,
    districtName: "Badulla",
    provinceCode: 8,
    provinceName: "Uva",
    divisions: [
      "Kandaketiya",
      "Meegahakivula",
      "Soranatota"
    ],
    provincialSchools: 67,
    nationalSchools: 3,
    totalSchools: 70,
    phone: [],
    email: null,
    aliases: [
      "wiyaluwa",
      "meegahakivula"
    ]
  },
  {
    id: "welimada",
    name: "Welimada",
    nameSi: "\u0DC0\u0DD0\u0DBD\u0DD2\u0DB8\u0DA9",
    nameTa: "\u0BB5\u0BC6\u0BB2\u0BBF\u0BAE\u0B9F\u0BC8",
    districtCode: 81,
    districtName: "Badulla",
    provinceCode: 8,
    provinceName: "Uva",
    divisions: [
      "Uva Paranagama",
      "Welimada"
    ],
    provincialSchools: 106,
    nationalSchools: 4,
    totalSchools: 110,
    phone: [],
    email: null,
    aliases: [
      "uva paranagama"
    ]
  },
  {
    id: "bibile",
    name: "Bibile",
    nameSi: "\u0DB6\u0DD2\u0DB6\u0DD2\u0DBD\u0DDA",
    nameTa: "\u0BAA\u0BBF\u0BAA\u0BBF\u0BB2\u0BC8",
    districtCode: 82,
    districtName: "Moneragala",
    provinceCode: 8,
    provinceName: "Uva",
    divisions: [
      "Bibile",
      "Madulla",
      "Medagama"
    ],
    provincialSchools: 79,
    nationalSchools: 3,
    totalSchools: 82,
    phone: [],
    email: null,
    aliases: [
      "madulla",
      "medagama"
    ]
  },
  {
    id: "moneragala",
    name: "Moneragala",
    nameSi: "",
    nameTa: "",
    districtCode: 82,
    districtName: "Moneragala",
    provinceCode: 8,
    provinceName: "Uva",
    divisions: [
      "Badalkumbura",
      "Moneragala",
      "Siyambalanduwa"
    ],
    provincialSchools: 105,
    nationalSchools: 4,
    totalSchools: 109,
    phone: [
      "0552276070"
    ],
    email: null,
    aliases: [
      "monaragala"
    ]
  },
  {
    id: "thanamalwila",
    name: "Thanamalwila",
    nameSi: "",
    nameTa: "",
    districtCode: 82,
    districtName: "Moneragala",
    provinceCode: 8,
    provinceName: "Uva",
    divisions: [
      "Thanamalwila"
    ],
    provincialSchools: 41,
    nationalSchools: 2,
    totalSchools: 43,
    phone: [],
    email: null,
    aliases: [
      "thanamalvila"
    ]
  },
  {
    id: "wellawaya",
    name: "Wellawaya",
    nameSi: "\u0DC0\u0DD0\u0DBD\u0DCA\u0DBD\u0DC0\u0DCF\u0DBA",
    nameTa: "\u0BB5\u0BC6\u0BB2\u0BCD\u0BB2\u0BB5\u0BBE\u0BAF\u0BC8",
    districtCode: 82,
    districtName: "Moneragala",
    provinceCode: 8,
    provinceName: "Uva",
    divisions: [
      "Buttala",
      "Wellawaya"
    ],
    provincialSchools: 55,
    nationalSchools: 2,
    totalSchools: 57,
    phone: [
      "0552274819"
    ],
    email: null,
    aliases: [
      "buttala"
    ]
  },
  {
    id: "balangoda",
    name: "Balangoda",
    nameSi: "\u0DB6\u0DBD\u0D82\u0D9C\u0DDC\u0DA9",
    nameTa: "\u0BAA\u0BB2\u0BBE\u0B99\u0BCD\u0B95\u0BCA\u0B9F\u0BC8",
    districtCode: 91,
    districtName: "Ratnapura",
    provinceCode: 9,
    provinceName: "Sabaragamuwa",
    divisions: [
      "Balangoda",
      "Imbulpe",
      "Weligepola"
    ],
    provincialSchools: 131,
    nationalSchools: 2,
    totalSchools: 133,
    phone: [
      "0452288432"
    ],
    email: null,
    aliases: [
      "imbulpe",
      "weligepola"
    ]
  },
  {
    id: "embilipitiya",
    name: "Embilipitiya",
    nameSi: "\u0D87\u0DB9\u0DD2\u0DBD\u0DD2\u0DB4\u0DD2\u0DA7\u0DD2\u0DBA",
    nameTa: "\u0B8E\u0BAE\u0BCD\u0BAA\u0BBF\u0BB2\u0BBF\u0BAA\u0BBF\u0B9F\u0BCD\u0B9F\u0BBF\u0BAF",
    districtCode: 91,
    districtName: "Ratnapura",
    provinceCode: 9,
    provinceName: "Sabaragamuwa",
    divisions: [
      "Embilipitiya",
      "Godakawela",
      "Kolonna"
    ],
    provincialSchools: 122,
    nationalSchools: 4,
    totalSchools: 126,
    phone: [
      "0472230336"
    ],
    email: null,
    aliases: [
      "godakawela",
      "kolonna"
    ]
  },
  {
    id: "nivitigala",
    name: "Nivitigala",
    nameSi: "",
    nameTa: "",
    districtCode: 91,
    districtName: "Ratnapura",
    provinceCode: 9,
    provinceName: "Sabaragamuwa",
    divisions: [
      "Ayagama",
      "Elapatha",
      "Kahawatta",
      "Kalawana",
      "Nivitigala"
    ],
    provincialSchools: 139,
    nationalSchools: 2,
    totalSchools: 141,
    phone: [],
    email: null,
    aliases: [
      "kalawana",
      "kahawatta"
    ]
  },
  {
    id: "ratnapura",
    name: "Ratnapura",
    nameSi: "\u0DBB\u0DAD\u0DCA\u0DB1\u0DB4\u0DD4\u0DBB",
    nameTa: "\u0B87\u0BB0\u0BA4\u0BCD\u0BA4\u0BBF\u0BA9\u0BAA\u0BC1\u0BB0\u0BBF",
    districtCode: 91,
    districtName: "Ratnapura",
    provinceCode: 9,
    provinceName: "Sabaragamuwa",
    divisions: [
      "Eheliyagoda",
      "Kuruwita",
      "Pelmadulla",
      "Ratnapura",
      "Sri Pada"
    ],
    provincialSchools: 177,
    nationalSchools: 8,
    totalSchools: 185,
    phone: [],
    email: null,
    aliases: [
      "eheliyagoda",
      "kuruwita",
      "pelmadulla"
    ]
  },
  {
    id: "dehiowita",
    name: "Dehiowita",
    nameSi: "\u0DAF\u0DD9\u0DC4\u0DD2\u0D95\u0DC0\u0DD2\u0DA7",
    nameTa: "\u0BA4\u0BC6\u0BB9\u0BBF\u0B93\u0BB5\u0BBF\u0B9F\u0BCD\u0B9F",
    districtCode: 92,
    districtName: "Kegalle",
    provinceCode: 9,
    provinceName: "Sabaragamuwa",
    divisions: [
      "Dehiowita",
      "Deraniyagala",
      "Kitulgala",
      "Ruwanwella",
      "Yatiyantota"
    ],
    provincialSchools: 213,
    nationalSchools: 4,
    totalSchools: 217,
    phone: [
      "0362267412"
    ],
    email: null,
    aliases: [
      "deraniyagala",
      "yatiyantota",
      "ruwanwella",
      "kitulgala"
    ]
  },
  {
    id: "kegalle",
    name: "Kegalle",
    nameSi: "\u0D9A\u0DD1\u0D9C\u0DBD\u0DCA\u0DBD",
    nameTa: "\u0B95\u0BC7\u0B95\u0BBE\u0BB2\u0BC8",
    districtCode: 92,
    districtName: "Kegalle",
    provinceCode: 9,
    provinceName: "Sabaragamuwa",
    divisions: [
      "Dedigama",
      "Galigamuwa",
      "Kegalle",
      "Warakapola"
    ],
    provincialSchools: 148,
    nationalSchools: 7,
    totalSchools: 155,
    phone: [
      "0352222520"
    ],
    email: null,
    aliases: [
      "warakapola",
      "galigamuwa"
    ]
  },
  {
    id: "mawanella",
    name: "Mawanella",
    nameSi: "\u0DB8\u0DCF\u0DC0\u0DB1\u0DD0\u0DBD\u0DCA\u0DBD",
    nameTa: "\u0BAE\u0BBE\u0BB5\u0BA9\u0BC6\u0BB2\u0BCD\u0BB2",
    districtCode: 92,
    districtName: "Kegalle",
    provinceCode: 9,
    provinceName: "Sabaragamuwa",
    divisions: [
      "Aranayaka",
      "Mawanella",
      "Rambukkana"
    ],
    provincialSchools: 129,
    nationalSchools: 4,
    totalSchools: 133,
    phone: [],
    email: null,
    aliases: [
      "rambukkana",
      "aranayaka"
    ]
  }
];

// src/utils.ts
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

// data/districts.json
var districts_default = [
  {
    code: 11,
    name: "Colombo",
    nameSi: "\u0D9A\u0DDC\u0DC5\u0DB9 \u0DAF\u0DD2\u0DC3\u0DCA\u0DAD\u0DCA\u200D\u0DBB\u0DD2\u0D9A\u0DCA\u0D9A\u0DBA",
    nameTa: "\u0B95\u0BCA\u0BB4\u0BC1\u0BAE\u0BCD\u0BAA\u0BC1 \u0BAE\u0BBE\u0BB5\u0B9F\u0BCD\u0B9F\u0BAE\u0BCD",
    pcode: "LK11",
    provinceCode: 1,
    provinceName: "Western",
    zonesCount: 4,
    divisionsCount: 14,
    schoolsCount: 391,
    provincialSchoolsCount: 352,
    nationalSchoolsCount: 39,
    zones: [
      "Colombo",
      "Homagama",
      "Piliyandala",
      "Sri Jayawardenapura"
    ]
  },
  {
    code: 12,
    name: "Gampaha",
    nameSi: "\u0D9C\u0DB8\u0DCA\u0DB4\u0DC4 \u0DAF\u0DD2\u0DC3\u0DCA\u0DAD\u0DCA\u200D\u0DBB\u0DD2\u0D9A\u0DCA\u0D9A\u0DBA",
    nameTa: "\u0B95\u0BAE\u0BCD\u0BAA\u0BB9\u0BBE \u0BAE\u0BBE\u0BB5\u0B9F\u0BCD\u0B9F\u0BAE\u0BCD",
    pcode: "LK12",
    provinceCode: 1,
    provinceName: "Western",
    zonesCount: 4,
    divisionsCount: 13,
    schoolsCount: 533,
    provincialSchoolsCount: 513,
    nationalSchoolsCount: 20,
    zones: [
      "Gampaha",
      "Kelaniya",
      "Minuwangoda",
      "Negombo"
    ]
  },
  {
    code: 13,
    name: "Kalutara",
    nameSi: "\u0D9A\u0DC5\u0DD4\u0DAD\u0DBB \u0DAF\u0DD2\u0DC3\u0DCA\u0DAD\u0DCA\u200D\u0DBB\u0DD2\u0D9A\u0DCA\u0D9A\u0DBA",
    nameTa: "\u0B95\u0BB3\u0BC1\u0BA4\u0BCD\u0BA4\u0BC1\u0BB1\u0BC8 \u0BAE\u0BBE\u0BB5\u0B9F\u0BCD\u0B9F\u0BAE\u0BCD",
    pcode: "LK13",
    provinceCode: 1,
    provinceName: "Western",
    zonesCount: 3,
    divisionsCount: 11,
    schoolsCount: 415,
    provincialSchoolsCount: 395,
    nationalSchoolsCount: 20,
    zones: [
      "Horana",
      "Kalutara",
      "Matugama"
    ]
  },
  {
    code: 21,
    name: "Kandy",
    nameSi: "\u0DB8\u0DC4\u0DB1\u0DD4\u0DC0\u0DBB \u0DAF\u0DD2\u0DC3\u0DCA\u0DAD\u0DCA\u200D\u0DBB\u0DD2\u0D9A\u0DCA\u0D9A\u0DBA",
    nameTa: "\u0B95\u0BA3\u0BCD\u0B9F\u0BBF \u0BAE\u0BBE\u0BB5\u0B9F\u0BCD\u0B9F\u0BAE\u0BCD",
    pcode: "LK21",
    provinceCode: 2,
    provinceName: "Central",
    zonesCount: 6,
    divisionsCount: 18,
    schoolsCount: 650,
    provincialSchoolsCount: 614,
    nationalSchoolsCount: 36,
    zones: [
      "Denuwara",
      "Gampola",
      "Kandy",
      "Katugastota",
      "Teldeniya",
      "Waththegama"
    ]
  },
  {
    code: 22,
    name: "Matale",
    nameSi: "\u0DB8\u0DCF\u0DAD\u0DBD\u0DDA \u0DAF\u0DD2\u0DC3\u0DCA\u0DAD\u0DCA\u200D\u0DBB\u0DD2\u0D9A\u0DCA\u0D9A\u0DBA",
    nameTa: "\u0BAE\u0BBE\u0BA4\u0BCD\u0BA4\u0BB3\u0BC8 \u0BAE\u0BBE\u0BB5\u0B9F\u0BCD\u0B9F\u0BAE\u0BCD",
    pcode: "LK22",
    provinceCode: 2,
    provinceName: "Central",
    zonesCount: 4,
    divisionsCount: 11,
    schoolsCount: 310,
    provincialSchoolsCount: 298,
    nationalSchoolsCount: 12,
    zones: [
      "Galewela",
      "Matale",
      "Naula",
      "Wilgamuwa"
    ]
  },
  {
    code: 23,
    name: "Nuwara Eliya",
    nameSi: "\u0DB1\u0DD4\u0DC0\u0DBB\u0D91\u0DC5\u0DD2\u0DBA \u0DAF\u0DD2\u0DC3\u0DCA\u0DAD\u0DCA\u200D\u0DBB\u0DD2\u0D9A\u0DCA\u0D9A\u0DBA",
    nameTa: "\u0BA8\u0BC1\u0BB5\u0BB0\u0BC6\u0BB2\u0BBF\u0BAF\u0BBE \u0BAE\u0BBE\u0BB5\u0B9F\u0BCD\u0B9F\u0BAE\u0BCD",
    pcode: "LK23",
    provinceCode: 2,
    provinceName: "Central",
    zonesCount: 5,
    divisionsCount: 11,
    schoolsCount: 551,
    provincialSchoolsCount: 543,
    nationalSchoolsCount: 8,
    zones: [
      "Hanguranketha",
      "Hatton",
      "Kotmale",
      "Nuwara Eliya",
      "Walapane"
    ]
  },
  {
    code: 31,
    name: "Galle",
    nameSi: "\u0D9C\u0DCF\u0DBD\u0DCA\u0DBD \u0DAF\u0DD2\u0DC3\u0DCA\u0DAD\u0DCA\u200D\u0DBB\u0DD2\u0D9A\u0DCA\u0D9A\u0DBA",
    nameTa: "\u0B95\u0BBE\u0BB2\u0BBF \u0BAE\u0BBE\u0BB5\u0B9F\u0BCD\u0B9F\u0BAE\u0BCD",
    pcode: "LK31",
    provinceCode: 3,
    provinceName: "Southern",
    zonesCount: 4,
    divisionsCount: 15,
    schoolsCount: 425,
    provincialSchoolsCount: 395,
    nationalSchoolsCount: 30,
    zones: [
      "Ambalangoda",
      "Elpitiya",
      "Galle",
      "Udugama"
    ]
  },
  {
    code: 32,
    name: "Matara",
    nameSi: "\u0DB8\u0DCF\u0DAD\u0DBB \u0DAF\u0DD2\u0DC3\u0DCA\u0DAD\u0DCA\u200D\u0DBB\u0DD2\u0D9A\u0DCA\u0D9A\u0DBA",
    nameTa: "\u0BAE\u0BBE\u0BA4\u0BCD\u0BA4\u0BB1\u0BC8 \u0BAE\u0BBE\u0BB5\u0B9F\u0BCD\u0B9F\u0BAE\u0BCD",
    pcode: "LK32",
    provinceCode: 3,
    provinceName: "Southern",
    zonesCount: 4,
    divisionsCount: 14,
    schoolsCount: 356,
    provincialSchoolsCount: 333,
    nationalSchoolsCount: 23,
    zones: [
      "Akuressa",
      "Deniyaya",
      "Matara",
      "Mulatiyana"
    ]
  },
  {
    code: 33,
    name: "Hambantota",
    nameSi: "\u0DC4\u0DB8\u0DCA\u0DB6\u0DB1\u0DCA\u0DAD\u0DDC\u0DA7 \u0DAF\u0DD2\u0DC3\u0DCA\u0DAD\u0DCA\u200D\u0DBB\u0DD2\u0D9A\u0DCA\u0D9A\u0DBA",
    nameTa: "\u0B85\u0BAE\u0BCD\u0BAA\u0BBE\u0BA8\u0BCD\u0BA4\u0BCB\u0B9F\u0BCD\u0B9F\u0BC8 \u0BAE\u0BBE\u0BB5\u0B9F\u0BCD\u0B9F\u0BAE\u0BCD",
    pcode: "LK33",
    provinceCode: 3,
    provinceName: "Southern",
    zonesCount: 3,
    divisionsCount: 10,
    schoolsCount: 319,
    provincialSchoolsCount: 302,
    nationalSchoolsCount: 17,
    zones: [
      "Hambantota",
      "Tangalle",
      "Walasmulla"
    ]
  },
  {
    code: 41,
    name: "Jaffna",
    nameSi: "\u0DBA\u0DCF\u0DB4\u0DB1\u0DBA \u0DAF\u0DD2\u0DC3\u0DCA\u0DAD\u0DCA\u200D\u0DBB\u0DD2\u0D9A\u0DCA\u0D9A\u0DBA",
    nameTa: "\u0BAF\u0BBE\u0BB4\u0BCD\u0BAA\u0BCD\u0BAA\u0BBE\u0BA3\u0BAE\u0BCD \u0BAE\u0BBE\u0BB5\u0B9F\u0BCD\u0B9F\u0BAE\u0BCD",
    pcode: "LK41",
    provinceCode: 4,
    provinceName: "Northern",
    zonesCount: 5,
    divisionsCount: 15,
    schoolsCount: 440,
    provincialSchoolsCount: 432,
    nationalSchoolsCount: 8,
    zones: [
      "Islands",
      "Jaffna",
      "Thenmaradchi",
      "Vadamaradchi",
      "Valikamam"
    ]
  },
  {
    code: 42,
    name: "Mannar",
    nameSi: "\u0DB8\u0DB1\u0DCA\u0DB1\u0DCF\u0DBB\u0DB8 \u0DAF\u0DD2\u0DC3\u0DCA\u0DAD\u0DCA\u200D\u0DBB\u0DD2\u0D9A\u0DCA\u0D9A\u0DBA",
    nameTa: "\u0BAE\u0BA9\u0BCD\u0BA9\u0BBE\u0BB0\u0BCD \u0BAE\u0BBE\u0BB5\u0B9F\u0BCD\u0B9F\u0BAE\u0BCD",
    pcode: "LK42",
    provinceCode: 4,
    provinceName: "Northern",
    zonesCount: 2,
    divisionsCount: 5,
    schoolsCount: 132,
    provincialSchoolsCount: 127,
    nationalSchoolsCount: 5,
    zones: [
      "Madhu",
      "Mannar"
    ]
  },
  {
    code: 43,
    name: "Vavuniya",
    nameSi: "\u0DC0\u0DC0\u0DD4\u0DB1\u0DD2\u0DBA\u0DCF\u0DC0 \u0DAF\u0DD2\u0DC3\u0DCA\u0DAD\u0DCA\u200D\u0DBB\u0DD2\u0D9A\u0DCA\u0D9A\u0DBA",
    nameTa: "\u0BB5\u0BB5\u0BC1\u0BA9\u0BBF\u0BAF\u0BBE \u0BAE\u0BBE\u0BB5\u0B9F\u0BCD\u0B9F\u0BAE\u0BCD",
    pcode: "LK43",
    provinceCode: 4,
    provinceName: "Northern",
    zonesCount: 2,
    divisionsCount: 5,
    schoolsCount: 168,
    provincialSchoolsCount: 163,
    nationalSchoolsCount: 5,
    zones: [
      "Vavuniya North",
      "Vavuniya South"
    ]
  },
  {
    code: 44,
    name: "Mullaitivu",
    nameSi: "\u0DB8\u0DD4\u0DBD\u0DAD\u0DD2\u0DC0\u0DCA \u0DAF\u0DD2\u0DC3\u0DCA\u0DAD\u0DCA\u200D\u0DBB\u0DD2\u0D9A\u0DCA\u0D9A\u0DBA",
    nameTa: "\u0BAE\u0BC1\u0BB2\u0BCD\u0BB2\u0BC8\u0BA4\u0BCD\u0BA4\u0BC0\u0BB5\u0BC1 \u0BAE\u0BBE\u0BB5\u0B9F\u0BCD\u0B9F\u0BAE\u0BCD",
    pcode: "LK44",
    provinceCode: 4,
    provinceName: "Northern",
    zonesCount: 2,
    divisionsCount: 6,
    schoolsCount: 125,
    provincialSchoolsCount: 122,
    nationalSchoolsCount: 3,
    zones: [
      "Mullaitivu",
      "Thunukkai"
    ]
  },
  {
    code: 45,
    name: "Kilinochchi",
    nameSi: "\u0D9A\u0DD2\u0DBD\u0DD2\u0DB1\u0DDC\u0DA0\u0DCA\u0DA0\u0DD2 \u0DAF\u0DD2\u0DC3\u0DCA\u0DAD\u0DCA\u200D\u0DBB\u0DD2\u0D9A\u0DCA\u0D9A\u0DBA",
    nameTa: "\u0B95\u0BBF\u0BB3\u0BBF\u0BA8\u0BCA\u0B9A\u0BCD\u0B9A\u0BBF \u0BAE\u0BBE\u0BB5\u0B9F\u0BCD\u0B9F\u0BAE\u0BCD",
    pcode: "LK45",
    provinceCode: 4,
    provinceName: "Northern",
    zonesCount: 2,
    divisionsCount: 4,
    schoolsCount: 104,
    provincialSchoolsCount: 101,
    nationalSchoolsCount: 3,
    zones: [
      "Kilinochchi North",
      "Kilinochchi South"
    ]
  },
  {
    code: 51,
    name: "Batticaloa",
    nameSi: "\u0DB8\u0DA9\u0D9A\u0DBD\u0DB4\u0DD4\u0DC0 \u0DAF\u0DD2\u0DC3\u0DCA\u0DAD\u0DCA\u200D\u0DBB\u0DD2\u0D9A\u0DCA\u0D9A\u0DBA",
    nameTa: "\u0BAE\u0B9F\u0BCD\u0B9F\u0B95\u0BCD\u0B95\u0BB3\u0BAA\u0BCD\u0BAA\u0BC1 \u0BAE\u0BBE\u0BB5\u0B9F\u0BCD\u0B9F\u0BAE\u0BCD",
    pcode: "LK51",
    provinceCode: 5,
    provinceName: "Eastern",
    zonesCount: 5,
    divisionsCount: 14,
    schoolsCount: 367,
    provincialSchoolsCount: 354,
    nationalSchoolsCount: 13,
    zones: [
      "Batticaloa",
      "Batticaloa Central",
      "Batticaloa West",
      "Kalkudah",
      "Paddrippu"
    ]
  },
  {
    code: 52,
    name: "Ampara",
    nameSi: "\u0D85\u0DB8\u0DCA\u0DB4\u0DCF\u0DBB \u0DAF\u0DD2\u0DC3\u0DCA\u0DAD\u0DCA\u200D\u0DBB\u0DD2\u0D9A\u0DCA\u0D9A\u0DBA",
    nameTa: "\u0B85\u0BAE\u0BCD\u0BAA\u0BBE\u0BB1\u0BC8 \u0BAE\u0BBE\u0BB5\u0B9F\u0BCD\u0B9F\u0BAE\u0BCD",
    pcode: "LK52",
    provinceCode: 5,
    provinceName: "Eastern",
    zonesCount: 7,
    divisionsCount: 21,
    schoolsCount: 444,
    provincialSchoolsCount: 427,
    nationalSchoolsCount: 17,
    zones: [
      "Akkaraipattu",
      "Ampara",
      "Dehiattakandiya",
      "Kalmunai",
      "Mahaoya",
      "Sammanthurai",
      "Thirukkovil"
    ]
  },
  {
    code: 53,
    name: "Trincomalee",
    nameSi: "\u0DAD\u0DCA\u200D\u0DBB\u0DD2\u0D9A\u0DD4\u0DAB\u0DCF\u0DB8\u0DBD\u0DBA \u0DAF\u0DD2\u0DC3\u0DCA\u0DAD\u0DCA\u200D\u0DBB\u0DD2\u0D9A\u0DCA\u0D9A\u0DBA",
    nameTa: "\u0BA4\u0BBF\u0BB0\u0BC1\u0B95\u0BCB\u0BA3\u0BAE\u0BB2\u0BC8 \u0BAE\u0BBE\u0BB5\u0B9F\u0BCD\u0B9F\u0BAE\u0BCD",
    pcode: "LK53",
    provinceCode: 5,
    provinceName: "Eastern",
    zonesCount: 5,
    divisionsCount: 13,
    schoolsCount: 317,
    provincialSchoolsCount: 305,
    nationalSchoolsCount: 12,
    zones: [
      "Kantale",
      "Kinniya",
      "Muttur",
      "Trincomalee",
      "Trincomalee North"
    ]
  },
  {
    code: 61,
    name: "Kurunegala",
    nameSi: "\u0D9A\u0DD4\u0DBB\u0DD4\u0DAB\u0DD1\u0D9C\u0DBD \u0DAF\u0DD2\u0DC3\u0DCA\u0DAD\u0DCA\u200D\u0DBB\u0DD2\u0D9A\u0DCA\u0D9A\u0DBA",
    nameTa: "\u0B95\u0BC1\u0BB0\u0BC1\u0BA3\u0BBE\u0B95\u0BB2\u0BCD \u0BAE\u0BBE\u0BB5\u0B9F\u0BCD\u0B9F\u0BAE\u0BCD",
    pcode: "LK61",
    provinceCode: 6,
    provinceName: "North Western",
    zonesCount: 6,
    divisionsCount: 22,
    schoolsCount: 870,
    provincialSchoolsCount: 839,
    nationalSchoolsCount: 31,
    zones: [
      "Giriulla",
      "Ibbagamuwa",
      "Kuliyapitiya",
      "Kurunegala",
      "Maho",
      "Nikaweratiya"
    ]
  },
  {
    code: 62,
    name: "Puttalam",
    nameSi: "\u0DB4\u0DD4\u0DAD\u0DCA\u0DAD\u0DBD\u0DB8 \u0DAF\u0DD2\u0DC3\u0DCA\u0DAD\u0DCA\u200D\u0DBB\u0DD2\u0D9A\u0DCA\u0D9A\u0DBA",
    nameTa: "\u0BAA\u0BC1\u0BA4\u0BCD\u0BA4\u0BB3\u0BAE\u0BCD \u0BAE\u0BBE\u0BB5\u0B9F\u0BCD\u0B9F\u0BAE\u0BCD",
    pcode: "LK62",
    provinceCode: 6,
    provinceName: "North Western",
    zonesCount: 2,
    divisionsCount: 9,
    schoolsCount: 371,
    provincialSchoolsCount: 363,
    nationalSchoolsCount: 8,
    zones: [
      "Chilaw",
      "Puttalam"
    ]
  },
  {
    code: 71,
    name: "Anuradhapura",
    nameSi: "\u0D85\u0DB1\u0DD4\u0DBB\u0DCF\u0DB0\u0DB4\u0DD4\u0DBB \u0DAF\u0DD2\u0DC3\u0DCA\u0DAD\u0DCA\u200D\u0DBB\u0DD2\u0D9A\u0DCA\u0D9A\u0DBA",
    nameTa: "\u0B85\u0BA9\u0BC1\u0BB0\u0BBE\u0BA4\u0BAA\u0BC1\u0BB0\u0BAE\u0BCD \u0BAE\u0BBE\u0BB5\u0B9F\u0BCD\u0B9F\u0BAE\u0BCD",
    pcode: "LK71",
    provinceCode: 7,
    provinceName: "North Central",
    zonesCount: 5,
    divisionsCount: 22,
    schoolsCount: 557,
    provincialSchoolsCount: 549,
    nationalSchoolsCount: 8,
    zones: [
      "Anuradhapura",
      "Galenbindunuwewa",
      "Kebithigollewa",
      "Kekirawa",
      "Thambuttegama"
    ]
  },
  {
    code: 72,
    name: "Polonnaruwa",
    nameSi: "\u0DB4\u0DDC\u0DC5\u0DDC\u0DB1\u0DCA\u0DB1\u0DBB\u0DD4\u0DC0 \u0DAF\u0DD2\u0DC3\u0DCA\u0DAD\u0DCA\u200D\u0DBB\u0DD2\u0D9A\u0DCA\u0D9A\u0DBA",
    nameTa: "\u0BAA\u0BCA\u0BB2\u0BA9\u0BCD\u0BA9\u0BB1\u0BC1\u0BB5\u0BC8 \u0BAE\u0BBE\u0BB5\u0B9F\u0BCD\u0B9F\u0BAE\u0BCD",
    pcode: "LK72",
    provinceCode: 7,
    provinceName: "North Central",
    zonesCount: 3,
    divisionsCount: 8,
    schoolsCount: 249,
    provincialSchoolsCount: 240,
    nationalSchoolsCount: 9,
    zones: [
      "Dimbulagala",
      "Hingurakgoda",
      "Polonnaruwa"
    ]
  },
  {
    code: 81,
    name: "Badulla",
    nameSi: "\u0DB6\u0DAF\u0DD4\u0DBD\u0DCA\u0DBD \u0DAF\u0DD2\u0DC3\u0DCA\u0DAD\u0DCA\u200D\u0DBB\u0DD2\u0D9A\u0DCA\u0D9A\u0DBA",
    nameTa: "\u0BAA\u0BA4\u0BC1\u0BB3\u0BC8 \u0BAE\u0BBE\u0BB5\u0B9F\u0BCD\u0B9F\u0BAE\u0BCD",
    pcode: "LK81",
    provinceCode: 8,
    provinceName: "Uva",
    zonesCount: 6,
    divisionsCount: 14,
    schoolsCount: 601,
    provincialSchoolsCount: 574,
    nationalSchoolsCount: 27,
    zones: [
      "Badulla",
      "Bandarawela",
      "Mahiyanganaya",
      "Passara",
      "Viyaluwa",
      "Welimada"
    ]
  },
  {
    code: 82,
    name: "Moneragala",
    nameSi: "\u0DB8\u0DDC\u0DAB\u0DBB\u0DCF\u0D9C\u0DBD \u0DAF\u0DD2\u0DC3\u0DCA\u0DAD\u0DCA\u200D\u0DBB\u0DD2\u0D9A\u0DCA\u0D9A\u0DBA",
    nameTa: "\u0BAE\u0BCA\u0BA9\u0BB0\u0BBE\u0B95\u0BB2\u0BC8 \u0BAE\u0BBE\u0BB5\u0B9F\u0BCD\u0B9F\u0BAE\u0BCD",
    pcode: "LK82",
    provinceCode: 8,
    provinceName: "Uva",
    zonesCount: 4,
    divisionsCount: 9,
    schoolsCount: 291,
    provincialSchoolsCount: 280,
    nationalSchoolsCount: 11,
    zones: [
      "Bibile",
      "Moneragala",
      "Thanamalwila",
      "Wellawaya"
    ]
  },
  {
    code: 91,
    name: "Ratnapura",
    nameSi: "\u0DBB\u0DAD\u0DCA\u0DB1\u0DB4\u0DD4\u0DBB \u0DAF\u0DD2\u0DC3\u0DCA\u0DAD\u0DCA\u200D\u0DBB\u0DD2\u0D9A\u0DCA\u0D9A\u0DBA",
    nameTa: "\u0B87\u0BB0\u0BA4\u0BCD\u0BA4\u0BBF\u0BA9\u0BAA\u0BC1\u0BB0\u0BBF \u0BAE\u0BBE\u0BB5\u0B9F\u0BCD\u0B9F\u0BAE\u0BCD",
    pcode: "LK91",
    provinceCode: 9,
    provinceName: "Sabaragamuwa",
    zonesCount: 4,
    divisionsCount: 16,
    schoolsCount: 585,
    provincialSchoolsCount: 569,
    nationalSchoolsCount: 16,
    zones: [
      "Balangoda",
      "Embilipitiya",
      "Nivitigala",
      "Ratnapura"
    ]
  },
  {
    code: 92,
    name: "Kegalle",
    nameSi: "\u0D9A\u0DD1\u0D9C\u0DBD\u0DCA\u0DBD \u0DAF\u0DD2\u0DC3\u0DCA\u0DAD\u0DCA\u200D\u0DBB\u0DD2\u0D9A\u0DCA\u0D9A\u0DBA",
    nameTa: "\u0B95\u0BC7\u0B95\u0BBE\u0BB2\u0BC8 \u0BAE\u0BBE\u0BB5\u0B9F\u0BCD\u0B9F\u0BAE\u0BCD",
    pcode: "LK92",
    provinceCode: 9,
    provinceName: "Sabaragamuwa",
    zonesCount: 3,
    divisionsCount: 12,
    schoolsCount: 505,
    provincialSchoolsCount: 490,
    nationalSchoolsCount: 15,
    zones: [
      "Dehiowita",
      "Kegalle",
      "Mawanella"
    ]
  }
];

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

// src/provinces.ts
var provinces = provinces_default;
function getProvince(codeOrName) {
  if (typeof codeOrName === "number") {
    return provinces.find((p) => p.code === codeOrName);
  }
  const query = normalizeText(codeOrName);
  return provinces.find(
    (p) => normalizeText(p.name) === query || p.nameSi.trim() === codeOrName.trim() || p.nameTa.trim() === codeOrName.trim() || p.pcode.toLowerCase() === codeOrName.toLowerCase()
  );
}

// src/districts.ts
var districts = districts_default;
function getDistrict(codeOrName) {
  if (typeof codeOrName === "number") {
    return districts.find((d) => d.code === codeOrName);
  }
  const query = normalizeText(codeOrName);
  return districts.find(
    (d) => normalizeText(d.name) === query || d.nameSi.trim() === codeOrName.trim() || d.nameTa.trim() === codeOrName.trim() || d.pcode.toLowerCase() === codeOrName.toLowerCase()
  );
}

// src/zones.ts
var zones = zones_default;
function getZones() {
  return [...zones];
}
function getZone(idOrName) {
  if (!idOrName) return void 0;
  const clean = normalizeText(idOrName);
  return zones.find(
    (z) => z.id.toLowerCase() === idOrName.toLowerCase() || normalizeText(z.name) === clean || z.nameSi && z.nameSi.trim() === idOrName.trim() || z.nameTa && z.nameTa.trim() === idOrName.trim()
  );
}
function getZonesByDistrict(districtCodeOrName) {
  const dist = getDistrict(districtCodeOrName);
  if (!dist) return [];
  return zones.filter((z) => z.districtCode === dist.code);
}
function getZonesByProvince(provinceCodeOrName) {
  const prov = getProvince(provinceCodeOrName);
  if (!prov) return [];
  return zones.filter((z) => z.provinceCode === prov.code);
}
function findZoneByDivision(divisionName) {
  if (!divisionName) return void 0;
  const query = normalizeText(divisionName);
  return zones.find(
    (z) => z.divisions.some((d) => normalizeText(d) === query) || z.aliases.some((a) => normalizeText(a) === query)
  );
}
function getAllDivisions() {
  const list = [];
  for (const z of zones) {
    for (const d of z.divisions) {
      list.push({
        division: d,
        zone: z.name,
        district: z.districtName,
        province: z.provinceName
      });
    }
  }
  return list;
}
function searchZones(query) {
  if (!query) return [];
  return zones.filter(
    (z) => matchesQuery(z.name, query) || z.divisions.some((d) => matchesQuery(d, query)) || z.aliases.some((a) => matchesQuery(a, query))
  );
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  findZoneByDivision,
  getAllDivisions,
  getZone,
  getZones,
  getZonesByDistrict,
  getZonesByProvince,
  searchZones
});
//# sourceMappingURL=zones.js.map