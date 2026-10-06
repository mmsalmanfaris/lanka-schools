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

// src/districts.ts
var districts_exports = {};
__export(districts_exports, {
  getDistrict: () => getDistrict,
  getDistricts: () => getDistricts,
  getDistrictsByProvince: () => getDistrictsByProvince
});
module.exports = __toCommonJS(districts_exports);

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

// src/utils.ts
function normalizeText(text) {
  if (!text) return "";
  return text.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^\w\s]/g, " ").replace(/\s+/g, " ").trim();
}

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
function getDistricts() {
  return [...districts];
}
function getDistrict(codeOrName) {
  if (typeof codeOrName === "number") {
    return districts.find((d) => d.code === codeOrName);
  }
  const query = normalizeText(codeOrName);
  return districts.find(
    (d) => normalizeText(d.name) === query || d.nameSi.trim() === codeOrName.trim() || d.nameTa.trim() === codeOrName.trim() || d.pcode.toLowerCase() === codeOrName.toLowerCase()
  );
}
function getDistrictsByProvince(provinceCodeOrName) {
  const prov = getProvince(provinceCodeOrName);
  if (!prov) return [];
  return districts.filter((d) => d.provinceCode === prov.code);
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  getDistrict,
  getDistricts,
  getDistrictsByProvince
});
//# sourceMappingURL=districts.js.map