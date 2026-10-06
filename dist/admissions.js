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

// src/admissions.ts
var admissions_exports = {};
__export(admissions_exports, {
  getEligibleNationalSchools: () => getEligibleNationalSchools,
  getGrade1AdmissionProximity: () => getGrade1AdmissionProximity,
  getGrade5Cutoffs: () => getGrade5Cutoffs,
  getGrade5CutoffsByCensusNo: () => getGrade5CutoffsByCensusNo
});
module.exports = __toCommonJS(admissions_exports);

// data/grade5-cutoffs.json
var grade5_cutoffs_default = [
  {
    censusNo: "00081",
    schoolName: "Visakha Vidyalaya",
    town: "Colombo 05",
    gender: "Girls",
    medium: "Sinhala",
    cutoff: 176
  },
  {
    censusNo: "00045",
    schoolName: "Royal College",
    town: "Colombo 07",
    gender: "Boys",
    medium: "Sinhala",
    cutoff: 175
  },
  {
    censusNo: "00066",
    schoolName: "Devi Balika Vidyalaya",
    town: "Colombo 08",
    gender: "Girls",
    medium: "Sinhala",
    cutoff: 171
  },
  {
    censusNo: "00045",
    schoolName: "Royal College",
    town: "Colombo 07",
    gender: "Boys",
    medium: "Tamil",
    cutoff: 171
  },
  {
    censusNo: "00046",
    schoolName: "Ananda College",
    town: "Colombo 10",
    gender: "Boys",
    medium: "Sinhala",
    cutoff: 170
  },
  {
    censusNo: "00074",
    schoolName: "Sirimavo Bandaranaike Vidyalaya",
    town: "Colombo 07",
    gender: "Girls",
    medium: "Sinhala",
    cutoff: 168
  },
  {
    censusNo: "00047",
    schoolName: "Nalanda College",
    town: "Colombo 10",
    gender: "Boys",
    medium: "Sinhala",
    cutoff: 167
  },
  {
    censusNo: "00150",
    schoolName: "Anula Vidyalaya",
    town: "Nugegoda",
    gender: "Girls",
    medium: "Sinhala",
    cutoff: 164
  },
  {
    censusNo: "00060",
    schoolName: "D. S. Senanayake College",
    town: "Colombo 07",
    gender: "Boys",
    medium: "Sinhala",
    cutoff: 164
  },
  {
    censusNo: "00048",
    schoolName: "Thurstan College",
    town: "Colombo 03",
    gender: "Boys",
    medium: "Sinhala",
    cutoff: 162
  },
  {
    censusNo: "00080",
    schoolName: "St. Paul's Girls' School",
    town: "Colombo 05",
    gender: "Girls",
    medium: "Sinhala",
    cutoff: 161
  },
  {
    censusNo: "00077",
    schoolName: "Isipathana College",
    town: "Colombo 05",
    gender: "Boys",
    medium: "Sinhala",
    cutoff: 159
  },
  {
    censusNo: "00079",
    schoolName: "Mahanama College",
    town: "Colombo 03",
    gender: "Boys",
    medium: "Sinhala",
    cutoff: 157
  },
  {
    censusNo: "01137",
    schoolName: "Rathnavali Balika Vidyalaya",
    town: "Gampaha",
    gender: "Girls",
    medium: "Sinhala",
    cutoff: 165
  },
  {
    censusNo: "01136",
    schoolName: "Bandaranayake College",
    town: "Gampaha",
    gender: "Boys",
    medium: "Sinhala",
    cutoff: 158
  },
  {
    censusNo: "01319",
    schoolName: "Viharamahadevi Balika Vidyalaya",
    town: "Kiribathgoda",
    gender: "Girls",
    medium: "Sinhala",
    cutoff: 157
  },
  {
    censusNo: "01083",
    schoolName: "Bandaranayake Central College",
    town: "Veyangoda",
    gender: "Mixed",
    medium: "Sinhala",
    cutoff: 156
  },
  {
    censusNo: "01138",
    schoolName: "Yasodara Devi Balika Maha Vidyalaya",
    town: "Gampaha",
    gender: "Girls",
    medium: "Sinhala",
    cutoff: 156
  },
  {
    censusNo: "01501",
    schoolName: "President's College",
    town: "Minuwangoda",
    gender: "Mixed",
    medium: "Sinhala",
    cutoff: 149
  },
  {
    censusNo: "01593",
    schoolName: "Taxila Maha Vidyalaya",
    town: "Gampaha",
    gender: "Mixed",
    medium: "Sinhala",
    cutoff: 148
  },
  {
    censusNo: "01590",
    schoolName: "Visakha Balika Vidyalaya",
    town: "Makola",
    gender: "Girls",
    medium: "Sinhala",
    cutoff: 147
  },
  {
    censusNo: "02083",
    schoolName: "Taxila Central College",
    town: "Horana",
    gender: "Mixed",
    medium: "Sinhala",
    cutoff: 159
  },
  {
    censusNo: "02180",
    schoolName: "C. W. W. Kannangara Central College",
    town: "Mathugama",
    gender: "Mixed",
    medium: "Sinhala",
    cutoff: 154
  },
  {
    censusNo: "02002",
    schoolName: "Panadura Balika Maha Vidyalaya",
    town: "Panadura",
    gender: "Girls",
    medium: "Sinhala",
    cutoff: 152
  },
  {
    censusNo: "02110",
    schoolName: "Royal College",
    town: "Horana",
    gender: "Mixed",
    medium: "Sinhala",
    cutoff: 151
  },
  {
    censusNo: "02181",
    schoolName: "Ananda Sastralaya",
    town: "Mathugama",
    gender: "Mixed",
    medium: "Sinhala",
    cutoff: 150
  },
  {
    censusNo: "02189",
    schoolName: "St. Mary's College",
    town: "Mathugama",
    gender: "Mixed",
    medium: "Sinhala",
    cutoff: 148
  },
  {
    censusNo: "02005",
    schoolName: "Sri Sumangala Balika Maha Vidyalaya",
    town: "Panadura",
    gender: "Girls",
    medium: "Sinhala",
    cutoff: 147
  },
  {
    censusNo: "02085",
    schoolName: "Sripali Maha Vidyalaya",
    town: "Horana",
    gender: "Mixed",
    medium: "Sinhala",
    cutoff: 146
  },
  {
    censusNo: "03350",
    schoolName: "Dharmaraja College",
    town: "Kandy",
    gender: "Boys",
    medium: "Sinhala",
    cutoff: 174
  },
  {
    censusNo: "03380",
    schoolName: "Kingswood College",
    town: "Kandy",
    gender: "Boys",
    medium: "Sinhala",
    cutoff: 170
  },
  {
    censusNo: "03351",
    schoolName: "Mahamaya Girls' College",
    town: "Kandy",
    gender: "Girls",
    medium: "Sinhala",
    cutoff: 168
  },
  {
    censusNo: "03379",
    schoolName: "Girls' High School",
    town: "Kandy",
    gender: "Girls",
    medium: "Sinhala",
    cutoff: 162
  },
  {
    censusNo: "03384",
    schoolName: "St. Sylvester's College",
    town: "Kandy",
    gender: "Boys",
    medium: "Sinhala",
    cutoff: 162
  },
  {
    censusNo: "03382",
    schoolName: "Pushpadana Girls' College",
    town: "Kandy",
    gender: "Girls",
    medium: "Sinhala",
    cutoff: 159
  },
  {
    censusNo: "03389",
    schoolName: "Swarnamali Balika Vidyalaya",
    town: "Kandy",
    gender: "Girls",
    medium: "Sinhala",
    cutoff: 155
  },
  {
    censusNo: "03381",
    schoolName: "Vidyartha College",
    town: "Kandy",
    gender: "Boys",
    medium: "Sinhala",
    cutoff: 155
  },
  {
    censusNo: "03353",
    schoolName: "St. Anthony's Girls' College",
    town: "Kandy",
    gender: "Girls",
    medium: "Sinhala",
    cutoff: 153
  },
  {
    censusNo: "04172",
    schoolName: "Sri Sangamitta Balika National School",
    town: "Matale",
    gender: "Girls",
    medium: "Sinhala",
    cutoff: 153
  },
  {
    censusNo: "04175",
    schoolName: "St. Thomas' National School",
    town: "Matale",
    gender: "Boys",
    medium: "Sinhala",
    cutoff: 149
  },
  {
    censusNo: "04003",
    schoolName: "Rangiri Dambulla Central College",
    town: "Dambulla",
    gender: "Mixed",
    medium: "Sinhala",
    cutoff: 140
  },
  {
    censusNo: "04264",
    schoolName: "Al-Furkhan Central College",
    town: "Galewela",
    gender: "Mixed",
    medium: "Tamil",
    cutoff: 135
  },
  {
    censusNo: "04261",
    schoolName: "Amina Maha Vidyalaya",
    town: "Matale",
    gender: "Girls",
    medium: "Tamil",
    cutoff: 135
  },
  {
    censusNo: "05167",
    schoolName: "Highlands College",
    town: "Hatton",
    gender: "Mixed",
    medium: "Tamil",
    cutoff: 158
  },
  {
    censusNo: "05533",
    schoolName: "Cambridge College",
    town: "Kotagala",
    gender: "Mixed",
    medium: "Tamil",
    cutoff: 146
  },
  {
    censusNo: "05169",
    schoolName: "St. John Bosco's College",
    town: "Hatton",
    gender: "Boys",
    medium: "Tamil",
    cutoff: 143
  },
  {
    censusNo: "05251",
    schoolName: "St. Mary's Central College",
    town: "Bogawantalawa",
    gender: "Mixed",
    medium: "Tamil",
    cutoff: 143
  },
  {
    censusNo: "05255",
    schoolName: "Norwood Tamil Maha Vidyalaya",
    town: "Norwood",
    gender: "Mixed",
    medium: "Tamil",
    cutoff: 142
  },
  {
    censusNo: "05428",
    schoolName: "Poramadulla Central College",
    town: "Rikillagaskada",
    gender: "Mixed",
    medium: "Sinhala",
    cutoff: 142
  },
  {
    censusNo: "05031",
    schoolName: "Ginigathhena Central College",
    town: "Ginigathhena",
    gender: "Mixed",
    medium: "Sinhala",
    cutoff: 140
  },
  {
    censusNo: "05035",
    schoolName: "St. Gabriel's Girls' College",
    town: "Hatton",
    gender: "Girls",
    medium: "Tamil",
    cutoff: 140
  },
  {
    censusNo: "06367",
    schoolName: "Richmond College",
    town: "Galle",
    gender: "Boys",
    medium: "Sinhala",
    cutoff: 168
  },
  {
    censusNo: "06370",
    schoolName: "Southlands College",
    town: "Galle",
    gender: "Girls",
    medium: "Sinhala",
    cutoff: 167
  },
  {
    censusNo: "06366",
    schoolName: "Mahinda College",
    town: "Galle",
    gender: "Boys",
    medium: "Sinhala",
    cutoff: 163
  },
  {
    censusNo: "06369",
    schoolName: "Sanghamitta Balika Vidyalaya",
    town: "Galle",
    gender: "Girls",
    medium: "Sinhala",
    cutoff: 163
  },
  {
    censusNo: "06372",
    schoolName: "Sacred Heart Convent",
    town: "Galle",
    gender: "Girls",
    medium: "Sinhala",
    cutoff: 158
  },
  {
    censusNo: "06371",
    schoolName: "St. Aloysius' College",
    town: "Galle",
    gender: "Boys",
    medium: "Sinhala",
    cutoff: 157
  },
  {
    censusNo: "06036",
    schoolName: "Dharmasoka College",
    town: "Ambalangoda",
    gender: "Mixed",
    medium: "Sinhala",
    cutoff: 152
  },
  {
    censusNo: "06368",
    schoolName: "Rippon Girls' College",
    town: "Galle",
    gender: "Girls",
    medium: "Sinhala",
    cutoff: 151
  },
  {
    censusNo: "06511",
    schoolName: "Siridhamma College",
    town: "Labuduwa, Galle",
    gender: "Mixed",
    medium: "Sinhala",
    cutoff: 150
  },
  {
    censusNo: "07305",
    schoolName: "Rahula College",
    town: "Matara",
    gender: "Boys",
    medium: "Sinhala",
    cutoff: 164
  },
  {
    censusNo: "07306",
    schoolName: "Sujatha Vidyalaya",
    town: "Matara",
    gender: "Girls",
    medium: "Sinhala",
    cutoff: 164
  },
  {
    censusNo: "07318",
    schoolName: "St. Thomas' Girls' High School",
    town: "Matara",
    gender: "Girls",
    medium: "Sinhala",
    cutoff: 156
  },
  {
    censusNo: "07317",
    schoolName: "St. Thomas' College",
    town: "Matara",
    gender: "Boys",
    medium: "Sinhala",
    cutoff: 155
  },
  {
    censusNo: "07406",
    schoolName: "Mahinda Rajapaksa College",
    town: "Sarasavi Uyana, Matara",
    gender: "Mixed",
    medium: "Sinhala",
    cutoff: 150
  },
  {
    censusNo: "07071",
    schoolName: "Telijjawila Central College",
    town: "Telijjawila",
    gender: "Mixed",
    medium: "Sinhala",
    cutoff: 148
  },
  {
    censusNo: "07328",
    schoolName: "St. Servatius' College",
    town: "Matara",
    gender: "Boys",
    medium: "Sinhala",
    cutoff: 146
  },
  {
    censusNo: "07335",
    schoolName: "Kotuwa President's College",
    town: "Matara",
    gender: "Mixed",
    medium: "Sinhala",
    cutoff: 144
  },
  {
    censusNo: "08038",
    schoolName: "Rajapaksha Central College",
    town: "Weeraketiya",
    gender: "Mixed",
    medium: "Sinhala",
    cutoff: 161
  },
  {
    censusNo: "08229",
    schoolName: "Debarawewa Maha Vidyalaya",
    town: "Tissamaharama",
    gender: "Mixed",
    medium: "Sinhala",
    cutoff: 152
  },
  {
    censusNo: "08346",
    schoolName: "Sri Lanka Singapore Friendship Girls' School",
    town: "Weeraketiya",
    gender: "Girls",
    medium: "Sinhala",
    cutoff: 152
  },
  {
    censusNo: "08106",
    schoolName: "Vijayaba National School",
    town: "Hungama",
    gender: "Mixed",
    medium: "Sinhala",
    cutoff: 151
  },
  {
    censusNo: "08001",
    schoolName: "Walasmulla National School",
    town: "Walasmulla",
    gender: "Mixed",
    medium: "Sinhala",
    cutoff: 146
  },
  {
    censusNo: "08339",
    schoolName: "Ruhunu Vijayaba National School",
    town: "Beliatta",
    gender: "Mixed",
    medium: "Sinhala",
    cutoff: 145
  },
  {
    censusNo: "08074",
    schoolName: "Tangalle Balika Maha Vidyalaya",
    town: "Tangalle",
    gender: "Girls",
    medium: "Sinhala",
    cutoff: 144
  },
  {
    censusNo: "08073",
    schoolName: "Tangalle Boys' National School",
    town: "Tangalle",
    gender: "Boys",
    medium: "Sinhala",
    cutoff: 142
  },
  {
    censusNo: "09332",
    schoolName: "Hartley College",
    town: "Point Pedro",
    gender: "Boys",
    medium: "Tamil",
    cutoff: 145
  },
  {
    censusNo: "09465",
    schoolName: "Vembadi Girls' High School",
    town: "Jaffna",
    gender: "Girls",
    medium: "Tamil",
    cutoff: 145
  },
  {
    censusNo: "09416",
    schoolName: "Jaffna Hindu College",
    town: "Jaffna",
    gender: "Boys",
    medium: "Tamil",
    cutoff: 139
  },
  {
    censusNo: "09418",
    schoolName: "Kokuvil Hindu College",
    town: "Kokuvil",
    gender: "Mixed",
    medium: "Tamil",
    cutoff: 134
  },
  {
    censusNo: "09353",
    schoolName: "Chavakachcheri Hindu College",
    town: "Chavakachcheri",
    gender: "Mixed",
    medium: "Tamil",
    cutoff: 132
  },
  {
    censusNo: "09456",
    schoolName: "Jaffna Central College",
    town: "Jaffna",
    gender: "Boys",
    medium: "Tamil",
    cutoff: 132
  },
  {
    censusNo: "09417",
    schoolName: "Jaffna Hindu Ladies College",
    town: "Jaffna",
    gender: "Girls",
    medium: "Tamil",
    cutoff: 132
  },
  {
    censusNo: "09118",
    schoolName: "Mahajana College",
    town: "Tellippalai",
    gender: "Mixed",
    medium: "Tamil",
    cutoff: 132
  },
  {
    censusNo: "10001",
    schoolName: "Kilinochchi Madya Maha Vidyalaya",
    town: "Kilinochchi",
    gender: "Mixed",
    medium: "Tamil",
    cutoff: 132
  },
  {
    censusNo: "13001",
    schoolName: "Rambaikulam Girls' College",
    town: "Jaffna",
    gender: "Girls",
    medium: "Tamil",
    cutoff: 132
  },
  {
    censusNo: "13012",
    schoolName: "Saivapragasa Ladies College",
    town: "Vavuniya",
    gender: "Girls",
    medium: "Tamil",
    cutoff: 132
  },
  {
    censusNo: "13002",
    schoolName: "Vavuniya Tamil Madya Maha Vidyalaya",
    town: "Vavuniya",
    gender: "Mixed",
    medium: "Tamil",
    cutoff: 132
  },
  {
    censusNo: "12002",
    schoolName: "Puthukkudiyiruppu Central College",
    town: "Puthukkudiyiruppu",
    gender: "Mixed",
    medium: "Tamil",
    cutoff: 137
  },
  {
    censusNo: "14185",
    schoolName: "Padirippu Central College",
    town: "Kaluwanchikudy",
    gender: "Mixed",
    medium: "Tamil",
    cutoff: 139
  },
  {
    censusNo: "14115",
    schoolName: "Vincent Girls' High School",
    town: "Batticaloa",
    gender: "Girls",
    medium: "Tamil",
    cutoff: 139
  },
  {
    censusNo: "14147",
    schoolName: "Meera Balika Maha Vidyalaya",
    town: "Kattankudy",
    gender: "Girls",
    medium: "Tamil",
    cutoff: 136
  },
  {
    censusNo: "14285",
    schoolName: "Oddamavadi Fathima Balika Maha Vidyalaya",
    town: "Oddamavadi",
    gender: "Girls",
    medium: "Tamil",
    cutoff: 135
  },
  {
    censusNo: "14031",
    schoolName: "Valaichenai Hindu College",
    town: "Valaichenai",
    gender: "Mixed",
    medium: "Tamil",
    cutoff: 134
  },
  {
    censusNo: "14118",
    schoolName: "Cecilia's Girls' College",
    town: "Batticaloa",
    gender: "Girls",
    medium: "Tamil",
    cutoff: 132
  },
  {
    censusNo: "14145",
    schoolName: "Kattankudy Central College",
    town: "Kattankudy",
    gender: "Boys",
    medium: "Tamil",
    cutoff: 132
  },
  {
    censusNo: "14116",
    schoolName: "Methodist Central College",
    town: "Batticaloa",
    gender: "Boys",
    medium: "Tamil",
    cutoff: 132
  },
  {
    censusNo: "15203",
    schoolName: "Mahmud Ladies College",
    town: "Kalmunai",
    gender: "Girls",
    medium: "Tamil",
    cutoff: 149
  },
  {
    censusNo: "15161",
    schoolName: "Muslim Madya Maha Vidyalaya",
    town: "Sammanthurai",
    gender: "Mixed",
    medium: "Tamil",
    cutoff: 145
  },
  {
    censusNo: "15290",
    schoolName: "Sri Ramakrishna College",
    town: "Akkaraipattu",
    gender: "Mixed",
    medium: "Tamil",
    cutoff: 144
  },
  {
    censusNo: "15067",
    schoolName: "D. S. Senanayake Central College",
    town: "Ampara",
    gender: "Mixed",
    medium: "Sinhala",
    cutoff: 143
  },
  {
    censusNo: "15291",
    schoolName: "Thambviluvil Maha Vidyalaya",
    town: "Thambviluvil",
    gender: "Mixed",
    medium: "Tamil",
    cutoff: 143
  },
  {
    censusNo: "15200",
    schoolName: "Zahira College",
    town: "Sainthamaruthu",
    gender: "Boys",
    medium: "Tamil",
    cutoff: 138
  },
  {
    censusNo: "15080",
    schoolName: "Bandaranayake Balika Maha Vidyalaya",
    town: "Ampara",
    gender: "Girls",
    medium: "Sinhala",
    cutoff: 137
  },
  {
    censusNo: "15202",
    schoolName: "Carmel Pattima College",
    town: "Kalmunai",
    gender: "Mixed",
    medium: "Tamil",
    cutoff: 137
  },
  {
    censusNo: "16175",
    schoolName: "Mutur Central College",
    town: "Mutur",
    gender: "Mixed",
    medium: "Tamil",
    cutoff: 135
  },
  {
    censusNo: "16121",
    schoolName: "Agbodhi Maha Vidyalaya",
    town: "Kantale",
    gender: "Mixed",
    medium: "Sinhala",
    cutoff: 133
  },
  {
    censusNo: "16186",
    schoolName: "Kinniya Muslim Girls' College",
    town: "Kinniya",
    gender: "Girls",
    medium: "Tamil",
    cutoff: 133
  },
  {
    censusNo: "16187",
    schoolName: "Kinniya Central College",
    town: "Kinniya",
    gender: "Boys",
    medium: "Tamil",
    cutoff: 131
  },
  {
    censusNo: "17292",
    schoolName: "Maliyadeva Balika Vidyalaya",
    town: "Kurunegala",
    gender: "Girls",
    medium: "Sinhala",
    cutoff: 170
  },
  {
    censusNo: "17293",
    schoolName: "Maliyadeva College",
    town: "Kurunegala",
    gender: "Boys",
    medium: "Sinhala",
    cutoff: 169
  },
  {
    censusNo: "17296",
    schoolName: "Holy Family Balika Maha Vidyalaya",
    town: "Kurunegala",
    gender: "Girls",
    medium: "Sinhala",
    cutoff: 167
  },
  {
    censusNo: "17295",
    schoolName: "St. Anne's College",
    town: "Kurunegala",
    gender: "Boys",
    medium: "Sinhala",
    cutoff: 167
  },
  {
    censusNo: "17321",
    schoolName: "Maliyadeva Adarsha Maha Vidyalaya",
    town: "Kurunegala",
    gender: "Mixed",
    medium: "Sinhala",
    cutoff: 163
  },
  {
    censusNo: "17327",
    schoolName: "President Girls' College",
    town: "Saragama, Kurunegala",
    gender: "Girls",
    medium: "Sinhala",
    cutoff: 158
  },
  {
    censusNo: "17489",
    schoolName: "Kuliyapitiya Central College",
    town: "Kuliyapitiya",
    gender: "Mixed",
    medium: "Sinhala",
    cutoff: 155
  },
  {
    censusNo: "42024",
    schoolName: "Vishwoda National School",
    town: "Kurunegala",
    gender: "Mixed",
    medium: "Sinhala",
    cutoff: 155
  },
  {
    censusNo: "18243",
    schoolName: "Joseph Vaz College",
    town: "Wennappuwa",
    gender: "Boys",
    medium: "Sinhala",
    cutoff: 154
  },
  {
    censusNo: "18246",
    schoolName: "Holy Family Balika Maha Vidyalaya",
    town: "Wennappuwa",
    gender: "Girls",
    medium: "Sinhala",
    cutoff: 151
  },
  {
    censusNo: "18199",
    schoolName: "Ananda National School",
    town: "Chilaw",
    gender: "Mixed",
    medium: "Sinhala",
    cutoff: 149
  },
  {
    censusNo: "18074",
    schoolName: "Fathima Balika Maha Vidyalaya",
    town: "Puttalam",
    gender: "Girls",
    medium: "Tamil",
    cutoff: 149
  },
  {
    censusNo: "18302",
    schoolName: "Dhammissara Central College",
    town: "Nattandiya",
    gender: "Mixed",
    medium: "Sinhala",
    cutoff: 147
  },
  {
    censusNo: "18169",
    schoolName: "Carmel Girls' College",
    town: "Chilaw",
    gender: "Girls",
    medium: "Sinhala",
    cutoff: 141
  },
  {
    censusNo: "18001",
    schoolName: "Anamaduwa Central College",
    town: "Anamaduwa",
    gender: "Mixed",
    medium: "Sinhala",
    cutoff: 139
  },
  {
    censusNo: "18218",
    schoolName: "Senanayake Central College",
    town: "Madampe",
    gender: "Mixed",
    medium: "Sinhala",
    cutoff: 137
  },
  {
    censusNo: "19176",
    schoolName: "Anuradhapura Central College",
    town: "Anuradhapura",
    gender: "Mixed",
    medium: "Sinhala",
    cutoff: 159
  },
  {
    censusNo: "19224",
    schoolName: "Niwanthakachethiya Maha Vidyalaya",
    town: "Anuradhapura",
    gender: "Mixed",
    medium: "Sinhala",
    cutoff: 154
  },
  {
    censusNo: "19177",
    schoolName: "Swarnapali Balika Maha Vidyalaya",
    town: "Anuradhapura",
    gender: "Girls",
    medium: "Sinhala",
    cutoff: 151
  },
  {
    censusNo: "19182",
    schoolName: "Walisinghe Harischandra Maha Vidyalaya",
    town: "Anuradhapura",
    gender: "Mixed",
    medium: "Sinhala",
    cutoff: 151
  },
  {
    censusNo: "19429",
    schoolName: "Kekirawa Central College",
    town: "Kekirawa",
    gender: "Mixed",
    medium: "Sinhala",
    cutoff: 150
  },
  {
    censusNo: "19178",
    schoolName: "St. Joseph's College",
    town: "Anuradhapura",
    gender: "Boys",
    medium: "Sinhala",
    cutoff: 149
  },
  {
    censusNo: "19296",
    schoolName: "Tambuttegama Central College",
    town: "Tambuttegama",
    gender: "Mixed",
    medium: "Sinhala",
    cutoff: 143
  },
  {
    censusNo: "19362",
    schoolName: "Ganthiriyagama Mahinda Maha Vidyalaya",
    town: "Ipalogama",
    gender: "Mixed",
    medium: "Sinhala",
    cutoff: 139
  },
  {
    censusNo: "20069",
    schoolName: "Royal Central College",
    town: "Polonnaruwa",
    gender: "Mixed",
    medium: "Sinhala",
    cutoff: 144
  },
  {
    censusNo: "20073",
    schoolName: "Thopawewa Maha Vidyalaya",
    town: "Polonnaruwa",
    gender: "Mixed",
    medium: "Sinhala",
    cutoff: 142
  },
  {
    censusNo: "20035",
    schoolName: "Medirigiriya National School",
    town: "Medirigiriya",
    gender: "Mixed",
    medium: "Sinhala",
    cutoff: 133
  },
  {
    censusNo: "15151",
    schoolName: "Siripura Central College",
    town: "Siripura, Polonnaruwa",
    gender: "Mixed",
    medium: "Sinhala",
    cutoff: 133
  },
  {
    censusNo: "20103",
    schoolName: "Vilayaya Central College",
    town: "Aralaganwila",
    gender: "Mixed",
    medium: "Sinhala",
    cutoff: 133
  },
  {
    censusNo: "21233",
    schoolName: "Bandarawela Central College",
    town: "Bandarawela",
    gender: "Mixed",
    medium: "Sinhala",
    cutoff: 157
  },
  {
    censusNo: "21254",
    schoolName: "Dharmapala Maha Vidyalaya",
    town: "Bandarawela",
    gender: "Mixed",
    medium: "Sinhala",
    cutoff: 154
  },
  {
    censusNo: "21173",
    schoolName: "Badulla Central College",
    town: "Badulla",
    gender: "Mixed",
    medium: "Sinhala",
    cutoff: 153
  },
  {
    censusNo: "21026",
    schoolName: "Mahiyangana National School",
    town: "Mahiyanganaya",
    gender: "Mixed",
    medium: "Sinhala",
    cutoff: 152
  },
  {
    censusNo: "21236",
    schoolName: "St. Joseph's College",
    town: "Bandarawela",
    gender: "Mixed",
    medium: "Sinhala",
    cutoff: 148
  },
  {
    censusNo: "21185",
    schoolName: "Viharamahadevi Balika Maha Vidyalaya",
    town: "Badulla",
    gender: "Girls",
    medium: "Sinhala",
    cutoff: 146
  },
  {
    censusNo: "21172",
    schoolName: "Dharmadutha National School",
    town: "Badulla",
    gender: "Boys",
    medium: "Sinhala",
    cutoff: 142
  },
  {
    censusNo: "21560",
    schoolName: "Uva Science College",
    town: "Hali-Ela",
    gender: "Mixed",
    medium: "Tamil",
    cutoff: 141
  },
  {
    censusNo: "22149",
    schoolName: "Dutugemunu Central College",
    town: "Buttala",
    gender: "Mixed",
    medium: "Sinhala",
    cutoff: 157
  },
  {
    censusNo: "22086",
    schoolName: "Royal College",
    town: "Monaragala",
    gender: "Mixed",
    medium: "Sinhala",
    cutoff: 156
  },
  {
    censusNo: "22069",
    schoolName: "Mahanama Central College",
    town: "Monaragala",
    gender: "Mixed",
    medium: "Sinhala",
    cutoff: 154
  },
  {
    censusNo: "22146",
    schoolName: "Malwattawala Central College",
    town: "Wellawaya",
    gender: "Mixed",
    medium: "Sinhala",
    cutoff: 146
  },
  {
    censusNo: "22111",
    schoolName: "Nissanka Central College",
    town: "Badalkumbura",
    gender: "Mixed",
    medium: "Sinhala",
    cutoff: 139
  },
  {
    censusNo: "22001",
    schoolName: "Wellassa National School",
    town: "Bibile",
    gender: "Mixed",
    medium: "Sinhala",
    cutoff: 139
  },
  {
    censusNo: "22206",
    schoolName: "Sevanagala Maha Vidyalaya",
    town: "Sevanagala",
    gender: "Mixed",
    medium: "Sinhala",
    cutoff: 138
  },
  {
    censusNo: "22187",
    schoolName: "Thanamalwila Central College",
    town: "Thanamalwila",
    gender: "Mixed",
    medium: "Sinhala",
    cutoff: 136
  },
  {
    censusNo: "23092",
    schoolName: "Sivali Central College",
    town: "Ratnapura",
    gender: "Mixed",
    medium: "Sinhala",
    cutoff: 168
  },
  {
    censusNo: "23060",
    schoolName: "Ferguson High School",
    town: "Ratnapura",
    gender: "Girls",
    medium: "Sinhala",
    cutoff: 159
  },
  {
    censusNo: "23001",
    schoolName: "Eheliyagoda Central College",
    town: "Eheliyagoda",
    gender: "Mixed",
    medium: "Sinhala",
    cutoff: 152
  },
  {
    censusNo: "23465",
    schoolName: "President's College",
    town: "Embilipitiya",
    gender: "Mixed",
    medium: "Sinhala",
    cutoff: 151
  },
  {
    censusNo: "23209",
    schoolName: "Ananda Maithreya Central College",
    town: "Balangoda",
    gender: "Mixed",
    medium: "Sinhala",
    cutoff: 150
  },
  {
    censusNo: "23062",
    schoolName: "St. Aloysius' National School",
    town: "Ratnapura",
    gender: "Boys",
    medium: "Sinhala",
    cutoff: 147
  },
  {
    censusNo: "23061",
    schoolName: "Sumana Balika Vidyalaya",
    town: "Ratnapura",
    gender: "Girls",
    medium: "Sinhala",
    cutoff: 145
  },
  {
    censusNo: "23123",
    schoolName: "Gankanda Central College",
    town: "Pelmadulla",
    gender: "Mixed",
    medium: "Sinhala",
    cutoff: 144
  },
  {
    censusNo: "24505",
    schoolName: "St. Joseph's Balika Maha Vidyalaya",
    town: "Kegalle",
    gender: "Girls",
    medium: "Sinhala",
    cutoff: 156
  },
  {
    censusNo: "24321",
    schoolName: "Pinnawala Central College",
    town: "Rambukkana",
    gender: "Mixed",
    medium: "Sinhala",
    cutoff: 155
  },
  {
    censusNo: "24489",
    schoolName: "Kegalu Balika Maha Vidyalaya",
    town: "Kegalle",
    gender: "Girls",
    medium: "Sinhala",
    cutoff: 152
  },
  {
    censusNo: "24490",
    schoolName: "Kegalle Maha Vidyalaya",
    town: "Kegalle",
    gender: "Boys",
    medium: "Sinhala",
    cutoff: 151
  },
  {
    censusNo: "24504",
    schoolName: "St. Mary's College",
    town: "Kegalle",
    gender: "Boys",
    medium: "Sinhala",
    cutoff: 149
  },
  {
    censusNo: "24493",
    schoolName: "Swarna Jayanthi Maha Vidyalaya",
    town: "Kegalle",
    gender: "Mixed",
    medium: "Sinhala",
    cutoff: 148
  },
  {
    censusNo: "24577",
    schoolName: "Dudley Senanayake Central College",
    town: "Tholangamuwa",
    gender: "Mixed",
    medium: "Sinhala",
    cutoff: 145
  },
  {
    censusNo: "24228",
    schoolName: "Rajasinghe Central College",
    town: "Ruwanwella",
    gender: "Mixed",
    medium: "Sinhala",
    cutoff: 145
  },
  {
    censusNo: "00236",
    schoolName: "Muslim Ladies College",
    town: "Colombo 04",
    gender: "Girls",
    medium: "Tamil",
    cutoff: 156
  },
  {
    censusNo: "00394",
    schoolName: "Dharmapala Vidyalaya",
    town: "Pannipitiya",
    gender: "Mixed",
    medium: "Sinhala",
    cutoff: 155
  },
  {
    censusNo: "00099",
    schoolName: "St. Joseph's Girls' School",
    town: "Nugegoda",
    gender: "Girls",
    medium: "Sinhala",
    cutoff: 155
  },
  {
    censusNo: "00060",
    schoolName: "D. S. Senanayake College",
    town: "Colombo 07",
    gender: "Boys",
    medium: "Tamil",
    cutoff: 152
  },
  {
    censusNo: "00051",
    schoolName: "Gothami Balika Vidyalaya",
    town: "Colombo 10",
    gender: "Girls",
    medium: "Sinhala",
    cutoff: 152
  },
  {
    censusNo: "00064",
    schoolName: "Asoka College",
    town: "Colombo 10",
    gender: "Boys",
    medium: "Sinhala",
    cutoff: 151
  },
  {
    censusNo: "00151",
    schoolName: "Samudradevi Balika Vidyalaya",
    town: "Nugegoda",
    gender: "Girls",
    medium: "Sinhala",
    cutoff: 149
  },
  {
    censusNo: "00457",
    schoolName: "Mahinda Rajapaksa College",
    town: "Homagama",
    gender: "Mixed",
    medium: "Sinhala",
    cutoff: 148
  },
  {
    censusNo: "00050",
    schoolName: "Ananda Balika Vidyalaya",
    town: "Colombo 10",
    gender: "Girls",
    medium: "Sinhala",
    cutoff: 146
  },
  {
    censusNo: "00077",
    schoolName: "Isipathana College",
    town: "Colombo 05",
    gender: "Boys",
    medium: "Tamil",
    cutoff: 146
  },
  {
    censusNo: "00057",
    schoolName: "Yasodara Balika Vidyalaya",
    town: "Colombo 08",
    gender: "Girls",
    medium: "Sinhala",
    cutoff: 145
  },
  {
    censusNo: "00207",
    schoolName: "Fathima Muslim Ladies College",
    town: "Colombo 12",
    gender: "Girls",
    medium: "Tamil",
    cutoff: 144
  },
  {
    censusNo: "00316",
    schoolName: "Hanwella Rajasinghe Central College",
    town: "Hanwella",
    gender: "Mixed",
    medium: "Sinhala",
    cutoff: 143
  },
  {
    censusNo: "00166",
    schoolName: "Prince of Wales' College",
    town: "Moratuwa",
    gender: "Boys",
    medium: "Sinhala",
    cutoff: 143
  },
  {
    censusNo: "00282",
    schoolName: "Adarsha Boys' Vidyalaya",
    town: "Malabe",
    gender: "Boys",
    medium: "Sinhala",
    cutoff: 140
  },
  {
    censusNo: "00078",
    schoolName: "Lumbini College",
    town: "Colombo 05",
    gender: "Mixed",
    medium: "Sinhala",
    cutoff: 140
  },
  {
    censusNo: "00418",
    schoolName: "Piliyandala Central College",
    town: "Piliyandala",
    gender: "Mixed",
    medium: "Sinhala",
    cutoff: 140
  },
  {
    censusNo: "00167",
    schoolName: "Princess of Wales' College",
    town: "Moratuwa",
    gender: "Girls",
    medium: "Sinhala",
    cutoff: 140
  },
  {
    censusNo: "00249",
    schoolName: "Sri Rahula Balika Maha Vidyalaya",
    town: "Malabe",
    gender: "Girls",
    medium: "Sinhala",
    cutoff: 140
  },
  {
    censusNo: "00241",
    schoolName: "Ramanathan Hindu Ladies College",
    town: "Colombo 04",
    gender: "Girls",
    medium: "Tamil",
    cutoff: 138
  },
  {
    censusNo: "00237",
    schoolName: "Hindu College",
    town: "Colombo 04",
    gender: "Boys",
    medium: "Tamil",
    cutoff: 134
  },
  {
    censusNo: "01084",
    schoolName: "Sanghabodhi Central College",
    town: "Nittambuwa",
    gender: "Mixed",
    medium: "Sinhala",
    cutoff: 144
  },
  {
    censusNo: "01340",
    schoolName: "Newstead Girls' College",
    town: "Negombo",
    gender: "Girls",
    medium: "Sinhala",
    cutoff: 143
  },
  {
    censusNo: "01613",
    schoolName: "Reggie Ranatunga Vidya Vidyalaya",
    town: "Minuwangoda",
    gender: "Mixed",
    medium: "Sinhala",
    cutoff: 143
  },
  {
    censusNo: "01301",
    schoolName: "Sri Dharmaloka Maha Vidyalaya",
    town: "Waragoda, Kelaniya",
    gender: "Mixed",
    medium: "Sinhala",
    cutoff: 143
  },
  {
    censusNo: "01131",
    schoolName: "Galahitiyawa Central College",
    town: "Ganemulla",
    gender: "Mixed",
    medium: "Sinhala",
    cutoff: 142
  },
  {
    censusNo: "01589",
    schoolName: "Kirindiwela Sangamitta Balika Vidyalaya",
    town: "Kirindiwela",
    gender: "Girls",
    medium: "Sinhala",
    cutoff: 142
  },
  {
    censusNo: "01289",
    schoolName: "Mahamaya Balika Maha Vidyalaya",
    town: "Kadawatha",
    gender: "Girls",
    medium: "Sinhala",
    cutoff: 142
  },
  {
    censusNo: "01448",
    schoolName: "C. W. W. Kannangara Central College",
    town: "Hunumulla",
    gender: "Mixed",
    medium: "Sinhala",
    cutoff: 140
  },
  {
    censusNo: "01300",
    schoolName: "Gurukula Maha Vidyalaya",
    town: "Kelaniya",
    gender: "Mixed",
    medium: "Sinhala",
    cutoff: 140
  },
  {
    censusNo: "01341",
    schoolName: "Harischandra National School",
    town: "Negombo",
    gender: "Mixed",
    medium: "Sinhala",
    cutoff: 140
  },
  {
    censusNo: "01479",
    schoolName: "Nalanda Balika Central College",
    town: "Minuwangoda",
    gender: "Girls",
    medium: "Sinhala",
    cutoff: 140
  },
  {
    censusNo: "02093",
    schoolName: "Don Pedrick Maha Vidyalaya",
    town: "Horana",
    gender: "Mixed",
    medium: "Sinhala",
    cutoff: 143
  },
  {
    censusNo: "02039",
    schoolName: "Agamethi Balika Vidyalaya",
    town: "Panadura",
    gender: "Girls",
    medium: "Sinhala",
    cutoff: 142
  },
  {
    censusNo: "02243",
    schoolName: "Kalutara Maha Vidyalaya",
    town: "Kalutara",
    gender: "Boys",
    medium: "Sinhala",
    cutoff: 141
  },
  {
    censusNo: "02242",
    schoolName: "Kalutara Balika Maha Vidyalaya",
    town: "Kalutara South",
    gender: "Girls",
    medium: "Sinhala",
    cutoff: 140
  },
  {
    censusNo: "03388",
    schoolName: "Wariyapola Sri Sumangala College",
    town: "Kandy",
    gender: "Boys",
    medium: "Sinhala",
    cutoff: 152
  },
  {
    censusNo: "03383",
    schoolName: "Hemamali Balika Maha Vidyalaya",
    town: "Kandy",
    gender: "Girls",
    medium: "Sinhala",
    cutoff: 151
  },
  {
    censusNo: "03401",
    schoolName: "Viharamahadevi Balika Vidyalaya",
    town: "Kandy",
    gender: "Girls",
    medium: "Sinhala",
    cutoff: 150
  },
  {
    censusNo: "03398",
    schoolName: "Seethadevi Balika Vidyalaya",
    town: "Kandy",
    gender: "Girls",
    medium: "Sinhala",
    cutoff: 148
  },
  {
    censusNo: "03352",
    schoolName: "St. Anthony's College",
    town: "Kandy",
    gender: "Boys",
    medium: "Tamil",
    cutoff: 146
  },
  {
    censusNo: "03214",
    schoolName: "Walala A. Rathnayake Central College",
    town: "Menikhinna",
    gender: "Mixed",
    medium: "Sinhala",
    cutoff: 144
  },
  {
    censusNo: "03575",
    schoolName: "Badi-Ud-Din Mahmud Girls' College",
    town: "Kandy",
    gender: "Girls",
    medium: "Tamil",
    cutoff: 143
  },
  {
    censusNo: "03385",
    schoolName: "Peradeniya Central College",
    town: "Peradeniya",
    gender: "Mixed",
    medium: "Sinhala",
    cutoff: 143
  },
  {
    censusNo: "03499",
    schoolName: "St. Joseph's Balika Vidyalaya",
    town: "Gampola",
    gender: "Girls",
    medium: "Sinhala",
    cutoff: 143
  },
  {
    censusNo: "03395",
    schoolName: "Sarasavi Uyana Maha Vidyalaya",
    town: "Peradeniya",
    gender: "Mixed",
    medium: "Sinhala",
    cutoff: 141
  },
  {
    censusNo: "03075",
    schoolName: "Nugawela Central College",
    town: "Nugawela",
    gender: "Mixed",
    medium: "Sinhala",
    cutoff: 140
  },
  {
    censusNo: "03184",
    schoolName: "Teldeniya National School",
    town: "Teldeniya",
    gender: "Mixed",
    medium: "Sinhala",
    cutoff: 140
  },
  {
    censusNo: "03488",
    schoolName: "Wickramabahu National School",
    town: "Gampola",
    gender: "Mixed",
    medium: "Sinhala",
    cutoff: 140
  },
  {
    censusNo: "03284",
    schoolName: "Azhar Central College",
    town: "Akurana",
    gender: "Mixed",
    medium: "Tamil",
    cutoff: 138
  },
  {
    censusNo: "03263",
    schoolName: "Madina National School",
    town: "Madawala",
    gender: "Mixed",
    medium: "Tamil",
    cutoff: 134
  },
  {
    censusNo: "05250",
    schoolName: "St. Joseph's Tamil Vidyalaya",
    town: "Maskeliya",
    gender: "Mixed",
    medium: "Tamil",
    cutoff: 138
  },
  {
    censusNo: "05168",
    schoolName: "Talawakelle Tamil Maha Vidyalaya",
    town: "Talawakelle",
    gender: "Mixed",
    medium: "Tamil",
    cutoff: 137
  },
  {
    censusNo: "05344",
    schoolName: "Al Minhaj National School",
    town: "Hapugastalawa",
    gender: "Mixed",
    medium: "Tamil",
    cutoff: 132
  },
  {
    censusNo: "05458",
    schoolName: "Denike Secondary School",
    town: "Rikillagaskada",
    gender: "Mixed",
    medium: "Sinhala",
    cutoff: 132
  },
  {
    censusNo: "06035",
    schoolName: "Sri Devananda College",
    town: "Ambalangoda",
    gender: "Mixed",
    medium: "Sinhala",
    cutoff: 147
  },
  {
    censusNo: "06373",
    schoolName: "Vidyaloka College",
    town: "Galle",
    gender: "Boys",
    medium: "Sinhala",
    cutoff: 147
  },
  {
    censusNo: "06141",
    schoolName: "Ananda Central College",
    town: "Elpitiya",
    gender: "Mixed",
    medium: "Sinhala",
    cutoff: 143
  },
  {
    censusNo: "06067",
    schoolName: "P. de S. Kularatne Maha Vidyalaya",
    town: "Ambalangoda",
    gender: "Mixed",
    medium: "Sinhala",
    cutoff: 143
  },
  {
    censusNo: "06259",
    schoolName: "Christ Church Girls' College",
    town: "Baddegama",
    gender: "Girls",
    medium: "Sinhala",
    cutoff: 141
  },
  {
    censusNo: "07055",
    schoolName: "Deniyaya Central College",
    town: "Deniyaya",
    gender: "Mixed",
    medium: "Sinhala",
    cutoff: 140
  },
  {
    censusNo: "07309",
    schoolName: "Matara Central College",
    town: "Matara",
    gender: "Mixed",
    medium: "Sinhala",
    cutoff: 140
  },
  {
    censusNo: "07146",
    schoolName: "Narandeniya Central College",
    town: "Kamburupitiya",
    gender: "Mixed",
    medium: "Sinhala",
    cutoff: 140
  },
  {
    censusNo: "07383",
    schoolName: "Vijitha Central College",
    town: "Dikwella",
    gender: "Mixed",
    medium: "Sinhala",
    cutoff: 140
  },
  {
    censusNo: "08275",
    schoolName: "Jeraputhra National School",
    town: "Ambalantota",
    gender: "Mixed",
    medium: "Sinhala",
    cutoff: 139
  },
  {
    censusNo: "14117",
    schoolName: "St. Michael's College",
    town: "Batticaloa",
    gender: "Boys",
    medium: "Tamil",
    cutoff: 132
  },
  {
    censusNo: "15266",
    schoolName: "Al-Hamra Maha Vidyalaya",
    town: "Oluvil",
    gender: "Mixed",
    medium: "Tamil",
    cutoff: 135
  },
  {
    censusNo: "15236",
    schoolName: "Munawwara Junior College",
    town: "Akkaraipattu",
    gender: "Mixed",
    medium: "Tamil",
    cutoff: 135
  },
  {
    censusNo: "15260",
    schoolName: "As-Siraj Maha Vidyalaya",
    town: "Akkaraipattu",
    gender: "Mixed",
    medium: "Tamil",
    cutoff: 133
  },
  {
    censusNo: "15152",
    schoolName: "Dehiattakandiya National School",
    town: "Dehiattakandiya",
    gender: "Mixed",
    medium: "Sinhala",
    cutoff: 133
  },
  {
    censusNo: "15074",
    schoolName: "Gamini Maha Vidyalaya",
    town: "Ampara",
    gender: "Mixed",
    medium: "Sinhala",
    cutoff: 133
  },
  {
    censusNo: "15248",
    schoolName: "Addalaichenai Central College",
    town: "Addalaichenai",
    gender: "Mixed",
    medium: "Tamil",
    cutoff: 132
  },
  {
    censusNo: "15231",
    schoolName: "Akkaraipattu Muslim Central College",
    town: "Akkaraipattu",
    gender: "Mixed",
    medium: "Tamil",
    cutoff: 132
  },
  {
    censusNo: "15265",
    schoolName: "Al-Ashraq Maha Vidyalaya",
    town: "Nintavur",
    gender: "Mixed",
    medium: "Tamil",
    cutoff: 132
  },
  {
    censusNo: "17974",
    schoolName: "Wayamba Royal College",
    town: "Kurunegala",
    gender: "Mixed",
    medium: "Sinhala",
    cutoff: 153
  },
  {
    censusNo: "17313",
    schoolName: "Sir John Kotelawala Maha Vidyalaya",
    town: "Kurunegala",
    gender: "Mixed",
    medium: "Sinhala",
    cutoff: 150
  },
  {
    censusNo: "17314",
    schoolName: "Defence Services College",
    town: "Kurunegala",
    gender: "Mixed",
    medium: "Sinhala",
    cutoff: 149
  },
  {
    censusNo: "17490",
    schoolName: "Saranath College",
    town: "Kuliyapitiya",
    gender: "Mixed",
    medium: "Sinhala",
    cutoff: 149
  },
  {
    censusNo: "17265",
    schoolName: "Mayurapada Central College",
    town: "Narammala",
    gender: "Mixed",
    medium: "Sinhala",
    cutoff: 146
  },
  {
    censusNo: "17838",
    schoolName: "Mahasen Central College",
    town: "Nikaweratiya",
    gender: "Mixed",
    medium: "Sinhala",
    cutoff: 145
  },
  {
    censusNo: "17613",
    schoolName: "S. W. R. D. Bandaranaike National School",
    town: "Panduwasnuwara",
    gender: "Mixed",
    medium: "Sinhala",
    cutoff: 142
  },
  {
    censusNo: "17522",
    schoolName: "Sandalanka National School",
    town: "Sandalankawa",
    gender: "Mixed",
    medium: "Sinhala",
    cutoff: 140
  },
  {
    censusNo: "17361",
    schoolName: "Sri Rahula Central College",
    town: "Alawwa",
    gender: "Mixed",
    medium: "Sinhala",
    cutoff: 140
  },
  {
    censusNo: "17141",
    schoolName: "Sri Sumangala Central College",
    town: "Wariyapola",
    gender: "Mixed",
    medium: "Sinhala",
    cutoff: 140
  },
  {
    censusNo: "17708",
    schoolName: "Vijayaba Central College",
    town: "Mahawa",
    gender: "Mixed",
    medium: "Sinhala",
    cutoff: 140
  },
  {
    censusNo: "17663",
    schoolName: "Kekunagolla National School",
    town: "Kekunagolla",
    gender: "Mixed",
    medium: "Tamil",
    cutoff: 134
  },
  {
    censusNo: "18073",
    schoolName: "Zahira National School",
    town: "Puttalam",
    gender: "Boys",
    medium: "Tamil",
    cutoff: 131
  },
  {
    censusNo: "19336",
    schoolName: "Galnewa Central College",
    town: "Galnewa",
    gender: "Mixed",
    medium: "Sinhala",
    cutoff: 133
  },
  {
    censusNo: "19102",
    schoolName: "Kahatagasdigiliya Central College",
    town: "Kahatagasdigiliya",
    gender: "Mixed",
    medium: "Sinhala",
    cutoff: 133
  },
  {
    censusNo: "19001",
    schoolName: "Maithripala Senanayake Central College",
    town: "Medawachchiya",
    gender: "Mixed",
    medium: "Sinhala",
    cutoff: 133
  },
  {
    censusNo: "19361",
    schoolName: "Sri Siddhartha Central College",
    town: "Eppawala",
    gender: "Mixed",
    medium: "Sinhala",
    cutoff: 133
  },
  {
    censusNo: "19297",
    schoolName: "Thalawa Maha Vidyalaya",
    town: "Thalawa",
    gender: "Mixed",
    medium: "Sinhala",
    cutoff: 133
  },
  {
    censusNo: "19457",
    schoolName: "Thibbatuwewa Maha Vidyalaya",
    town: "Kekirawa",
    gender: "Mixed",
    medium: "Sinhala",
    cutoff: 133
  },
  {
    censusNo: "21560",
    schoolName: "Uva Vidya Vidyalaya",
    town: "Haliela",
    gender: "Mixed",
    medium: "Sinhala",
    cutoff: 140
  },
  {
    censusNo: "21255",
    schoolName: "Dharmasoka Central College",
    town: "Bandarawela",
    gender: "Mixed",
    medium: "Sinhala",
    cutoff: 135
  },
  {
    censusNo: "21241",
    schoolName: "Little Flower Balika Maha Vidyalaya",
    town: "Bandarawela",
    gender: "Girls",
    medium: "Sinhala",
    cutoff: 135
  },
  {
    censusNo: "21234",
    schoolName: "Visakha Balika Maha Vidyalaya",
    town: "Bandarawela",
    gender: "Girls",
    medium: "Sinhala",
    cutoff: 135
  },
  {
    censusNo: "21311",
    schoolName: "Welimada Central College",
    town: "Welimada",
    gender: "Mixed",
    medium: "Sinhala",
    cutoff: 134
  },
  {
    censusNo: "21464",
    schoolName: "Saraswathy Central College",
    town: "Badulla",
    gender: "Boys",
    medium: "Tamil",
    cutoff: 132
  },
  {
    censusNo: "22270",
    schoolName: "Yasodara Balika Vidyalaya",
    town: "Bibile",
    gender: "Girls",
    medium: "Sinhala",
    cutoff: 134
  },
  {
    censusNo: "23007",
    schoolName: "Eheliyagoda Dharmapala Vidyalaya",
    town: "Eheliyagoda",
    gender: "Mixed",
    medium: "Sinhala",
    cutoff: 143
  },
  {
    censusNo: "23613",
    schoolName: "Embilipitiya Royal College",
    town: "Pallegama, Embilipitiya",
    gender: "Mixed",
    medium: "Sinhala",
    cutoff: 143
  },
  {
    censusNo: "23214",
    schoolName: "Vidyaloka Maha Vidyalaya",
    town: "Balangoda",
    gender: "Mixed",
    medium: "Sinhala",
    cutoff: 143
  },
  {
    censusNo: "23068",
    schoolName: "Convent of the Infant Jesus",
    town: "Ratnapura",
    gender: "Girls",
    medium: "Sinhala",
    cutoff: 139
  },
  {
    censusNo: "23400",
    schoolName: "Kalawana National School",
    town: "Kalawana",
    gender: "Mixed",
    medium: "Sinhala",
    cutoff: 139
  },
  {
    censusNo: "23247",
    schoolName: "Rahula National School",
    town: "Godakawela",
    gender: "Mixed",
    medium: "Sinhala",
    cutoff: 138
  },
  {
    censusNo: "23126",
    schoolName: "Pelmadulla Dharmaloka Maha Vidyalaya",
    town: "Pelmadulla",
    gender: "Mixed",
    medium: "Sinhala",
    cutoff: 136
  },
  {
    censusNo: "23166",
    schoolName: "Sri Buddha Jayanthi Maha Vidyalaya",
    town: "Balangoda",
    gender: "Mixed",
    medium: "Sinhala",
    cutoff: 136
  },
  {
    censusNo: "24475",
    schoolName: "Bandaranayake Maha Vidyalaya",
    town: "Hettimulla",
    gender: "Mixed",
    medium: "Sinhala",
    cutoff: 141
  },
  {
    censusNo: "24112",
    schoolName: "Sirisaman National School",
    town: "Deraniyagala",
    gender: "Mixed",
    medium: "Sinhala",
    cutoff: 140
  },
  {
    censusNo: "24343",
    schoolName: "Zahira College",
    town: "Mawanella",
    gender: "Mixed",
    medium: "Tamil",
    cutoff: 134
  }
];

// data/national-schools.json
var national_schools_default = [
  {
    seq: 1,
    censusNo: "00023",
    name: "Kotahena M.M.V.",
    shortName: "Kotahena M.M.V.",
    address: "Maha Vidyala Mw, Colombo 13",
    districtCode: 11,
    districtName: "Colombo",
    provinceCode: 1,
    provinceName: "Western",
    zone: "Colombo",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: null,
    grade5CutoffTamil: null,
    latitude: 6.9431257247924805,
    longitude: 79.86254883
  },
  {
    seq: 2,
    censusNo: "00045",
    name: "Colombo Royal College",
    shortName: "Royal College",
    address: "Rajakeeya Mw, Colombo 07",
    districtCode: 11,
    districtName: "Colombo",
    provinceCode: 1,
    provinceName: "Western",
    zone: "Colombo",
    gender: "Boys",
    mediums: [
      "Sinhala",
      "Tamil"
    ],
    grade5CutoffSinhala: 175,
    grade5CutoffTamil: 171,
    latitude: 6.904820919036865,
    longitude: 79.86143493652344
  },
  {
    seq: 3,
    censusNo: "00046",
    name: "Colombo Ananda College",
    shortName: "Ananda College",
    address: "Colombo 10",
    districtCode: 11,
    districtName: "Colombo",
    provinceCode: 1,
    provinceName: "Western",
    zone: "Colombo",
    gender: "Boys",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: 170,
    grade5CutoffTamil: null,
    latitude: 6.924685478210449,
    longitude: 79.86923217773438
  },
  {
    seq: 4,
    censusNo: "00047",
    name: "Colombo Nalanda College",
    shortName: "Nalanda College",
    address: "Siri Damma Mw, Colombo 10",
    districtCode: 11,
    districtName: "Colombo",
    provinceCode: 1,
    provinceName: "Western",
    zone: "Colombo",
    gender: "Boys",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: 167,
    grade5CutoffTamil: null,
    latitude: 6.9240288734436035,
    longitude: 79.87496185302734
  },
  {
    seq: 5,
    censusNo: "00048",
    name: "Colombo Thurstan College",
    shortName: "Thurstan College",
    address: "Colombo 07",
    districtCode: 11,
    districtName: "Colombo",
    provinceCode: 1,
    provinceName: "Western",
    zone: "Colombo",
    gender: "Boys",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: 162,
    grade5CutoffTamil: null,
    latitude: 6.902346611022949,
    longitude: 79.85932159423828
  },
  {
    seq: 6,
    censusNo: "00050",
    name: "Colombo Ananda B.V.",
    shortName: "Ananda B.V.",
    address: "Rev. Hikkaduwa Sri Sumangala Nahimi Mw, Colombo 10",
    districtCode: 11,
    districtName: "Colombo",
    provinceCode: 1,
    provinceName: "Western",
    zone: "Colombo",
    gender: "Girls",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: 146,
    grade5CutoffTamil: null,
    latitude: 6.926540374755859,
    longitude: 79.86986541748047
  },
  {
    seq: 7,
    censusNo: "00051",
    name: "Colombo Gothami B.V.",
    shortName: "Gothami B.V.",
    address: "Temple Road, Colombo 10",
    districtCode: 11,
    districtName: "Colombo",
    provinceCode: 1,
    provinceName: "Western",
    zone: "Colombo",
    gender: "Girls",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: 152,
    grade5CutoffTamil: null,
    latitude: 6.923181533813477,
    longitude: 79.87191009521484
  },
  {
    seq: 8,
    censusNo: "00060",
    name: "Colombo D.S.Senanayake College",
    shortName: "D.S.Senanayake College",
    address: "R.G.Senanayake Mw, Colombo 07",
    districtCode: 11,
    districtName: "Colombo",
    provinceCode: 1,
    provinceName: "Western",
    zone: "Colombo",
    gender: "Boys",
    mediums: [
      "Sinhala",
      "Tamil"
    ],
    grade5CutoffSinhala: 164,
    grade5CutoffTamil: 152,
    latitude: 6.9088239669799805,
    longitude: 79.87548828
  },
  {
    seq: 9,
    censusNo: "00066",
    name: "Colombo Devi B.V.",
    shortName: "Devi B.V.",
    address: "Colombo-08",
    districtCode: 11,
    districtName: "Colombo",
    provinceCode: 1,
    provinceName: "Western",
    zone: "Colombo",
    gender: "Girls",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: 171,
    grade5CutoffTamil: null,
    latitude: 6.910553932189941,
    longitude: 79.88217926
  },
  {
    seq: 10,
    censusNo: "00074",
    name: "Colombo Sirimavo Bandaranayake V.",
    shortName: "Sirimavo Bandaranayake V.",
    address: "Stanmore Crescent, Colombo 07",
    districtCode: 11,
    districtName: "Colombo",
    provinceCode: 1,
    provinceName: "Western",
    zone: "Colombo",
    gender: "Girls",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: 168,
    grade5CutoffTamil: null,
    latitude: 6.897562503814697,
    longitude: 79.86282348632812
  },
  {
    seq: 11,
    censusNo: "00077",
    name: "Colombo Isipathana College",
    shortName: "Isipathana College",
    address: "Isipathana Mw, Colombo-05",
    districtCode: 11,
    districtName: "Colombo",
    provinceCode: 1,
    provinceName: "Western",
    zone: "Colombo",
    gender: "Boys",
    mediums: [
      "Sinhala",
      "Tamil"
    ],
    grade5CutoffSinhala: 159,
    grade5CutoffTamil: 146,
    latitude: 6.887902736663818,
    longitude: 79.86783599853516
  },
  {
    seq: 12,
    censusNo: "00078",
    name: "Colombo Lumbini V.",
    shortName: "Lumbini V.",
    address: "Havelock Town, Colombo 05",
    districtCode: 11,
    districtName: "Colombo",
    provinceCode: 1,
    provinceName: "Western",
    zone: "Colombo",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: 140,
    grade5CutoffTamil: null,
    latitude: 6.884214878082275,
    longitude: 79.86696625
  },
  {
    seq: 13,
    censusNo: "00079",
    name: "Colombo Mahanama College",
    shortName: "Mahanama College",
    address: "R A De Mel Mawatha, Colombo 03",
    districtCode: 11,
    districtName: "Colombo",
    provinceCode: 1,
    provinceName: "Western",
    zone: "Colombo",
    gender: "Boys",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: 157,
    grade5CutoffTamil: null,
    latitude: 6.906383991241455,
    longitude: 79.85492706298828
  },
  {
    seq: 14,
    censusNo: "00080",
    name: "Milagiriya St. Paul's Girl's School",
    shortName: "Milagiriya St. Paul's Girl's School",
    address: "Milagiriya, Colombo 05",
    districtCode: 11,
    districtName: "Colombo",
    provinceCode: 1,
    provinceName: "Western",
    zone: "Colombo",
    gender: "Girls",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: 161,
    grade5CutoffTamil: null,
    latitude: 6.885920048,
    longitude: 79.85867309570312
  },
  {
    seq: 15,
    censusNo: "00081",
    name: "Colombo Visakha V.",
    shortName: "Visakha V.",
    address: "133, Vajira Rd, Colombo 05",
    districtCode: 11,
    districtName: "Colombo",
    provinceCode: 1,
    provinceName: "Western",
    zone: "Colombo",
    gender: "Girls",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: 176,
    grade5CutoffTamil: null,
    latitude: 6.891822814941406,
    longitude: 79.85929870605469
  },
  {
    seq: 16,
    censusNo: "00098",
    name: "Dehiwala Presbyterian B.V",
    shortName: "Dehiwala Presbyterian B.V",
    address: "Dehiwala",
    districtCode: 11,
    districtName: "Colombo",
    provinceCode: 1,
    provinceName: "Western",
    zone: "Piliyandala",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: null,
    grade5CutoffTamil: null,
    latitude: 6.850200176239014,
    longitude: 79.86386871
  },
  {
    seq: 17,
    censusNo: "00114",
    name: "Mount Lavinia Scienge College",
    shortName: "Mount Lavinia Scienge College",
    address: "Templers Road, Mount Lavinia",
    districtCode: 11,
    districtName: "Colombo",
    provinceCode: 1,
    provinceName: "Western",
    zone: "Piliyandala",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: null,
    grade5CutoffTamil: null,
    latitude: 6.830752372741699,
    longitude: 79.87602996826172
  },
  {
    seq: 18,
    censusNo: "00129",
    name: "Kolonnawa Balika Vidyalaya",
    shortName: "Kolonnawa Balika Vidyalaya",
    address: "Sugunasara Road, Kolonnawa",
    districtCode: 11,
    districtName: "Colombo",
    provinceCode: 1,
    provinceName: "Western",
    zone: "Sri Jayawardenapura",
    gender: "Girls",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: null,
    grade5CutoffTamil: null,
    latitude: 6.933507442474365,
    longitude: 79.89225006103516
  },
  {
    seq: 19,
    censusNo: "00131",
    name: "Kuda Buthgamuwa Sri Rajasinghe Central College",
    shortName: "Kuda Buthgamuwa Sri Rajasinghe Central College",
    address: "Kuda Buthgamuwa, Mulleriyawa New Town",
    districtCode: 11,
    districtName: "Colombo",
    provinceCode: 1,
    provinceName: "Western",
    zone: "Sri Jayawardenapura",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: null,
    grade5CutoffTamil: null,
    latitude: null,
    longitude: null
  },
  {
    seq: 20,
    censusNo: "00148",
    name: "Kotte Ananda Shasthralaya",
    shortName: "Kotte Ananda Shasthralaya",
    address: "Kotte",
    districtCode: 11,
    districtName: "Colombo",
    provinceCode: 1,
    provinceName: "Western",
    zone: "Sri Jayawardenapura",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: null,
    grade5CutoffTamil: null,
    latitude: 6.8834686279296875,
    longitude: 79.90277099609375
  },
  {
    seq: 21,
    censusNo: "00150",
    name: "Nugegoda Anula Vidyalaya",
    shortName: "Nugegoda Anula Vidyalaya",
    address: "Nugegoda",
    districtCode: 11,
    districtName: "Colombo",
    provinceCode: 1,
    provinceName: "Western",
    zone: "Sri Jayawardenapura",
    gender: "Girls",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: 164,
    grade5CutoffTamil: null,
    latitude: 6.872936248779297,
    longitude: 79.88581848144531
  },
  {
    seq: 22,
    censusNo: "00152",
    name: "C.M.S. Sri Jayawardenapura Vidyalaya",
    shortName: "C.M.S. Sri Jayawardenapura Vidyalaya",
    address: "Mission Road, Kotte",
    districtCode: 11,
    districtName: "Colombo",
    provinceCode: 1,
    provinceName: "Western",
    zone: "Sri Jayawardenapura",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: null,
    grade5CutoffTamil: null,
    latitude: null,
    longitude: null
  },
  {
    seq: 23,
    censusNo: "00165",
    name: "Rajagiriya President's College",
    shortName: "Rajagiriya President's College",
    address: "Rajagiriya",
    districtCode: 11,
    districtName: "Colombo",
    provinceCode: 1,
    provinceName: "Western",
    zone: "Sri Jayawardenapura",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: null,
    grade5CutoffTamil: null,
    latitude: 6.907683849334717,
    longitude: 79.89288330078125
  },
  {
    seq: 24,
    censusNo: "00166",
    name: "Moratuwa Prince of Wales College",
    shortName: "Moratuwa Prince of Wales College",
    address: "Moratuwa",
    districtCode: 11,
    districtName: "Colombo",
    provinceCode: 1,
    provinceName: "Western",
    zone: "Piliyandala",
    gender: "Boys",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: 143,
    grade5CutoffTamil: null,
    latitude: 6.782868862,
    longitude: 79.88339996
  },
  {
    seq: 25,
    censusNo: "00167",
    name: "Moratuwa Princess of Wales' College",
    shortName: "Moratuwa Princess of Wales' College",
    address: "Rawathawatha, Moratuwa",
    districtCode: 11,
    districtName: "Colombo",
    provinceCode: 1,
    provinceName: "Western",
    zone: "Piliyandala",
    gender: "Girls",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: 140,
    grade5CutoffTamil: null,
    latitude: 6.784953594207764,
    longitude: 79.88302612304688
  },
  {
    seq: 26,
    censusNo: "00204",
    name: "Hameed Al-Husseinie College",
    shortName: "Hameed Al-Husseinie College",
    address: "45, Husseinia Road, Colombo-12",
    districtCode: 11,
    districtName: "Colombo",
    provinceCode: 1,
    provinceName: "Western",
    zone: "Colombo",
    gender: "Mixed",
    mediums: [
      "Tamil"
    ],
    grade5CutoffSinhala: null,
    grade5CutoffTamil: null,
    latitude: 6.940916061401367,
    longitude: 79.85970306396484
  },
  {
    seq: 27,
    censusNo: "00210",
    name: "Vivekananda National School",
    shortName: "Vivekananda National School",
    address: "57, New Chetty Street, Colombo-13",
    districtCode: 11,
    districtName: "Colombo",
    provinceCode: 1,
    provinceName: "Western",
    zone: "Colombo",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: null,
    grade5CutoffTamil: null,
    latitude: 6.943342685699463,
    longitude: 79.86001586914062
  },
  {
    seq: 28,
    censusNo: "00236",
    name: "Bambalapitiya Muslim Ladies College",
    shortName: "Bambalapitiya Muslim Ladies College",
    address: "22, Bambalapitiya, Colombo-04",
    districtCode: 11,
    districtName: "Colombo",
    provinceCode: 1,
    provinceName: "Western",
    zone: "Colombo",
    gender: "Girls",
    mediums: [
      "Tamil"
    ],
    grade5CutoffSinhala: null,
    grade5CutoffTamil: 156,
    latitude: 6.881455421447754,
    longitude: 79.86141204833984
  },
  {
    seq: 29,
    censusNo: "00237",
    name: "Bambalapitiya Hindu College",
    shortName: "Bambalapitiya Hindu College",
    address: "77, Lorenz Road, Colombo 04",
    districtCode: 11,
    districtName: "Colombo",
    provinceCode: 1,
    provinceName: "Western",
    zone: "Colombo",
    gender: "Boys",
    mediums: [
      "Tamil"
    ],
    grade5CutoffSinhala: null,
    grade5CutoffTamil: 134,
    latitude: 6.883664608001709,
    longitude: 79.86204528808594
  },
  {
    seq: 30,
    censusNo: "00241",
    name: "Bambalapitiya Ramanathan Hindu Ladies College",
    shortName: "Bambalapitiya Ramanathan Hindu Ladies College",
    address: "55/5, Lorence Rd, Colombo-04",
    districtCode: 11,
    districtName: "Colombo",
    provinceCode: 1,
    provinceName: "Western",
    zone: "Colombo",
    gender: "Girls",
    mediums: [
      "Tamil"
    ],
    grade5CutoffSinhala: null,
    grade5CutoffTamil: 138,
    latitude: 6.883934020996094,
    longitude: 79.86038970947266
  },
  {
    seq: 31,
    censusNo: "00248",
    name: "Battaramulla Subhuthi National School",
    shortName: "Battaramulla Subhuthi National School",
    address: "Battaramulla",
    districtCode: 11,
    districtName: "Colombo",
    provinceCode: 1,
    provinceName: "Western",
    zone: "Sri Jayawardenapura",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: null,
    grade5CutoffTamil: null,
    latitude: 6.903318881988525,
    longitude: 79.92381286621094
  },
  {
    seq: 32,
    censusNo: "00250",
    name: "Bomiriya Central College",
    shortName: "Bomiriya Central College",
    address: "Kaduwela",
    districtCode: 11,
    districtName: "Colombo",
    provinceCode: 1,
    provinceName: "Western",
    zone: "Sri Jayawardenapura",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: null,
    grade5CutoffTamil: null,
    latitude: 6.934266567230225,
    longitude: 80.00232696533203
  },
  {
    seq: 33,
    censusNo: "00283",
    name: "Avissawella Seethawaka M.M.V.",
    shortName: "Avissawella Seethawaka M.M.V.",
    address: "Avissawella",
    districtCode: 11,
    districtName: "Colombo",
    provinceCode: 1,
    provinceName: "Western",
    zone: "Homagama",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: null,
    grade5CutoffTamil: null,
    latitude: 6.957264423370361,
    longitude: 80.21643066
  },
  {
    seq: 34,
    censusNo: "00316",
    name: "Hanwella Rajasinghe Central College",
    shortName: "Hanwella Rajasinghe Central College",
    address: "School Lane, Hanwella",
    districtCode: 11,
    districtName: "Colombo",
    provinceCode: 1,
    provinceName: "Western",
    zone: "Homagama",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: 143,
    grade5CutoffTamil: null,
    latitude: 6.908930778503418,
    longitude: 80.08893585205078
  },
  {
    seq: 35,
    censusNo: "00394",
    name: "Pannipitiya Dharmapala Vidyalaya",
    shortName: "Pannipitiya Dharmapala Vidyalaya",
    address: "Pannipitiya",
    districtCode: 11,
    districtName: "Colombo",
    provinceCode: 1,
    provinceName: "Western",
    zone: "Sri Jayawardenapura",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: 155,
    grade5CutoffTamil: null,
    latitude: 6.8441667556762695,
    longitude: 79.95409393310547
  },
  {
    seq: 36,
    censusNo: "00418",
    name: "Piliyandala M.M.V.",
    shortName: "Piliyandala M.M.V.",
    address: "Piliyandala",
    districtCode: 11,
    districtName: "Colombo",
    provinceCode: 1,
    provinceName: "Western",
    zone: "Piliyandala",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: 140,
    grade5CutoffTamil: null,
    latitude: 6.7999467849731445,
    longitude: 79.92071533203125
  },
  {
    seq: 37,
    censusNo: "00453",
    name: "Defence Services College",
    shortName: "Defence Services College",
    address: "34, Malay St, Colombo-02",
    districtCode: 11,
    districtName: "Colombo",
    provinceCode: 1,
    provinceName: "Western",
    zone: "Colombo",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: null,
    grade5CutoffTamil: null,
    latitude: 6.926959515,
    longitude: 79.85095215
  },
  {
    seq: 38,
    censusNo: "00457",
    name: "Homagama Mahinda Rajapaksha College",
    shortName: "Homagama Mahinda Rajapaksha College",
    address: "Pitipana, Homagama",
    districtCode: 11,
    districtName: "Colombo",
    provinceCode: 1,
    provinceName: "Western",
    zone: "Homagama",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: 148,
    grade5CutoffTamil: null,
    latitude: 6.824270248413086,
    longitude: 80.03928375
  },
  {
    seq: 39,
    censusNo: "00464",
    name: "Suneetha Vidyalaya",
    shortName: "Suneetha Vidyalaya",
    address: "Watareka, Padukka",
    districtCode: 11,
    districtName: "Colombo",
    provinceCode: 1,
    provinceName: "Western",
    zone: "Homagama",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: null,
    grade5CutoffTamil: null,
    latitude: 6.858898162841797,
    longitude: 80.06505584716797
  },
  {
    seq: 40,
    censusNo: "01001",
    name: "Wattala St. Anthony's M.V.",
    shortName: "Wattala St. Anthony's M.V.",
    address: "Vinstant Jhosep Mw, Old Negombo, Rd,Wattala",
    districtCode: 12,
    districtName: "Gampaha",
    provinceCode: 1,
    provinceName: "Western",
    zone: "Kelaniya",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: null,
    grade5CutoffTamil: null,
    latitude: 6.984253883361816,
    longitude: 79.89124298095703
  },
  {
    seq: 41,
    censusNo: "01028",
    name: "Mirigama D.S.Senanayaka National School",
    shortName: "Mirigama D.S.Senanayaka National School",
    address: "Mirigama",
    districtCode: 12,
    districtName: "Gampaha",
    provinceCode: 1,
    provinceName: "Western",
    zone: "Minuwangoda",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: null,
    grade5CutoffTamil: null,
    latitude: 6.469015121459961,
    longitude: 79.98684692382812
  },
  {
    seq: 42,
    censusNo: "01083",
    name: "Veyangoda Bandaranayake Central College",
    shortName: "Veyangoda Bandaranayake Central College",
    address: "Veyangoda",
    districtCode: 12,
    districtName: "Gampaha",
    provinceCode: 1,
    provinceName: "Western",
    zone: "Gampaha",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: 156,
    grade5CutoffTamil: null,
    latitude: 7.1637349128723145,
    longitude: 80.06179047
  },
  {
    seq: 43,
    censusNo: "01084",
    name: "Nittambuwa Sangabodhi M.M.V.",
    shortName: "Nittambuwa Sangabodhi M.M.V.",
    address: "Nittambuwa",
    districtCode: 12,
    districtName: "Gampaha",
    provinceCode: 1,
    provinceName: "Western",
    zone: "Gampaha",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: 144,
    grade5CutoffTamil: null,
    latitude: 7.132656097412109,
    longitude: 80.08023834228516
  },
  {
    seq: 44,
    censusNo: "01131",
    name: "Galahitiyawa Central College",
    shortName: "Galahitiyawa Central College",
    address: "Galahitiyawa, Ganemulla",
    districtCode: 12,
    districtName: "Gampaha",
    provinceCode: 1,
    provinceName: "Western",
    zone: "Gampaha",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: 142,
    grade5CutoffTamil: null,
    latitude: 7.069110870361328,
    longitude: 79.95037841796875
  },
  {
    seq: 45,
    censusNo: "01136",
    name: "Gampaha Bandaranayake M.V.",
    shortName: "Bandaranayake M.V.",
    address: "Yakkala Road, Gampaha",
    districtCode: 12,
    districtName: "Gampaha",
    provinceCode: 1,
    provinceName: "Western",
    zone: "Gampaha",
    gender: "Boys",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: 158,
    grade5CutoffTamil: null,
    latitude: 7.091506004333496,
    longitude: 80.00408935546875
  },
  {
    seq: 46,
    censusNo: "01137",
    name: "Gampaha Rathnawalee Balika V.",
    shortName: "Rathnawalee Balika V.",
    address: "Colombo Road, Gampaha",
    districtCode: 12,
    districtName: "Gampaha",
    provinceCode: 1,
    provinceName: "Western",
    zone: "Gampaha",
    gender: "Girls",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: 165,
    grade5CutoffTamil: null,
    latitude: 7.089315891265869,
    longitude: 79.99967193603516
  },
  {
    seq: 47,
    censusNo: "01183",
    name: "Henegama Central College",
    shortName: "Henegama Central College",
    address: "Henegama",
    districtCode: 12,
    districtName: "Gampaha",
    provinceCode: 1,
    provinceName: "Western",
    zone: "Kelaniya",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: null,
    grade5CutoffTamil: null,
    latitude: 6.058076382,
    longitude: 80.46606445
  },
  {
    seq: 48,
    censusNo: "01228",
    name: "Siyane National School",
    shortName: "Siyane National School",
    address: "Palugama, Dompe",
    districtCode: 12,
    districtName: "Gampaha",
    provinceCode: 1,
    provinceName: "Western",
    zone: "Gampaha",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: null,
    grade5CutoffTamil: null,
    latitude: 6.943899154663086,
    longitude: 80.06774902
  },
  {
    seq: 49,
    censusNo: "01300",
    name: "Kelaniya Gurukula V.",
    shortName: "Kelaniya Gurukula V.",
    address: "Kelaniya",
    districtCode: 12,
    districtName: "Gampaha",
    provinceCode: 1,
    provinceName: "Western",
    zone: "Kelaniya",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: 140,
    grade5CutoffTamil: null,
    latitude: 6.958570957183838,
    longitude: 79.89255524
  },
  {
    seq: 50,
    censusNo: "01301",
    name: "Kelaniya Sri Dharmaloka M.M.V",
    shortName: "Kelaniya Sri Dharmaloka M.M.V",
    address: "Waragoda Rd, Kelaniya",
    districtCode: 12,
    districtName: "Gampaha",
    provinceCode: 1,
    provinceName: "Western",
    zone: "Kelaniya",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: 143,
    grade5CutoffTamil: null,
    latitude: 6.9608306884765625,
    longitude: 79.89920806884766
  },
  {
    seq: 51,
    censusNo: "01319",
    name: "Kiribathgoda Viharamahadevi B.V.",
    shortName: "Kiribathgoda Viharamahadevi B.V.",
    address: "Kiribathgoda",
    districtCode: 12,
    districtName: "Gampaha",
    provinceCode: 1,
    provinceName: "Western",
    zone: "Kelaniya",
    gender: "Girls",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: 157,
    grade5CutoffTamil: null,
    latitude: 6.980737686157227,
    longitude: 79.92543793
  },
  {
    seq: 52,
    censusNo: "01336",
    name: "Al-Mubarak National School",
    shortName: "Al-Mubarak National School",
    address: "Malwana",
    districtCode: 12,
    districtName: "Gampaha",
    provinceCode: 1,
    provinceName: "Western",
    zone: "Kelaniya",
    gender: "Mixed",
    mediums: [
      "Tamil"
    ],
    grade5CutoffSinhala: null,
    grade5CutoffTamil: null,
    latitude: 6.954535007476807,
    longitude: 80.01506042480469
  },
  {
    seq: 53,
    censusNo: "01340",
    name: "Negombo Newstead Girls College",
    shortName: "Negombo Newstead Girls College",
    address: "Negombo",
    districtCode: 12,
    districtName: "Gampaha",
    provinceCode: 1,
    provinceName: "Western",
    zone: "Negombo",
    gender: "Girls",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: 143,
    grade5CutoffTamil: null,
    latitude: 7.211212158203125,
    longitude: 79.83129119873047
  },
  {
    seq: 54,
    censusNo: "01341",
    name: "Negombo Harishchandra National School",
    shortName: "Negombo Harishchandra National School",
    address: "Temple Rd, Negombo",
    districtCode: 12,
    districtName: "Gampaha",
    provinceCode: 1,
    provinceName: "Western",
    zone: "Negombo",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: 140,
    grade5CutoffTamil: null,
    latitude: 7.209502220153809,
    longitude: 79.85049438476562
  },
  {
    seq: 55,
    censusNo: "01379",
    name: "Kotugoda Sri Pangnananda National College",
    shortName: "Kotugoda Sri Pangnananda National College",
    address: "Raddoluwa, Kotugoda",
    districtCode: 12,
    districtName: "Gampaha",
    provinceCode: 1,
    provinceName: "Western",
    zone: "Negombo",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: null,
    grade5CutoffTamil: null,
    latitude: 7.131174564361572,
    longitude: 79.89851379394531
  },
  {
    seq: 56,
    censusNo: "01478",
    name: "Minuwangoda Nalanda Boys M.M.V",
    shortName: "Minuwangoda Nalanda Boys M.M.V",
    address: "Minuwangoda",
    districtCode: 12,
    districtName: "Gampaha",
    provinceCode: 1,
    provinceName: "Western",
    zone: "Minuwangoda",
    gender: "Boys",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: null,
    grade5CutoffTamil: null,
    latitude: 7.169633865356445,
    longitude: 79.94961547851562
  },
  {
    seq: 57,
    censusNo: "01502",
    name: "Udugampola Senerath Paranavithana M.V.",
    shortName: "Udugampola Senerath Paranavithana M.V.",
    address: "Udugampola",
    districtCode: 12,
    districtName: "Gampaha",
    provinceCode: 1,
    provinceName: "Western",
    zone: "Minuwangoda",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: null,
    grade5CutoffTamil: null,
    latitude: 7.124006748199463,
    longitude: 79.97328186035156
  },
  {
    seq: 58,
    censusNo: "01539",
    name: "Ja-Ela Christ King College",
    shortName: "Ja-Ela Christ King College",
    address: "Thudella, Ja-Ela",
    districtCode: 12,
    districtName: "Gampaha",
    provinceCode: 1,
    provinceName: "Western",
    zone: "Negombo",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: null,
    grade5CutoffTamil: null,
    latitude: 7.090216159820557,
    longitude: 79.88967133
  },
  {
    seq: 59,
    censusNo: "01592",
    name: "Dompe Devi B.M.V.",
    shortName: "Dompe Devi B.M.V.",
    address: "Dompe",
    districtCode: 12,
    districtName: "Gampaha",
    provinceCode: 1,
    provinceName: "Western",
    zone: "Gampaha",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: null,
    grade5CutoffTamil: null,
    latitude: 6.947502136230469,
    longitude: 80.05783081054688
  },
  {
    seq: 60,
    censusNo: "02001",
    name: "Wadduwa M M.V.",
    shortName: "Wadduwa M M.V.",
    address: "Vijaya Road, Wadduwa",
    districtCode: 13,
    districtName: "Kalutara",
    provinceCode: 1,
    provinceName: "Western",
    zone: "Kalutara",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: null,
    grade5CutoffTamil: null,
    latitude: 6.6631598472595215,
    longitude: 79.92925262451172
  },
  {
    seq: 61,
    censusNo: "02003",
    name: "Panadura St. John's M.V.",
    shortName: "Panadura St. John's M.V.",
    address: "Udahamulla, Panadura",
    districtCode: 13,
    districtName: "Kalutara",
    provinceCode: 1,
    provinceName: "Western",
    zone: "Kalutara",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: null,
    grade5CutoffTamil: null,
    latitude: 6.722355842590332,
    longitude: 79.91166687011719
  },
  {
    seq: 62,
    censusNo: "02004",
    name: "Panadura Sri Sumangala College",
    shortName: "Panadura Sri Sumangala College",
    address: "Horana Road, Panadura",
    districtCode: 13,
    districtName: "Kalutara",
    provinceCode: 1,
    provinceName: "Western",
    zone: "Kalutara",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: null,
    grade5CutoffTamil: null,
    latitude: 6.710203170776367,
    longitude: 79.90980529785156
  },
  {
    seq: 63,
    censusNo: "02005",
    name: "Panadura Sri Sumangala Balika M.V.",
    shortName: "Panadura Sri Sumangala Balika M.V.",
    address: "Nalluruwa, Panadura",
    districtCode: 13,
    districtName: "Kalutara",
    provinceCode: 1,
    provinceName: "Western",
    zone: "Kalutara",
    gender: "Girls",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: 147,
    grade5CutoffTamil: null,
    latitude: 6.700354576,
    longitude: 79.9079361
  },
  {
    seq: 64,
    censusNo: "02040",
    name: "Bandaragama M.M.V.",
    shortName: "Bandaragama M.M.V.",
    address: "Bandaragama",
    districtCode: 13,
    districtName: "Kalutara",
    provinceCode: 1,
    provinceName: "Western",
    zone: "Horana",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: null,
    grade5CutoffTamil: null,
    latitude: 6.711163520812988,
    longitude: 79.98769379
  },
  {
    seq: 65,
    censusNo: "02083",
    name: "Horana Taxila M.M.V",
    shortName: "Horana Taxila M.M.V",
    address: "Aguruwathota Road, Horana",
    districtCode: 13,
    districtName: "Kalutara",
    provinceCode: 1,
    provinceName: "Western",
    zone: "Horana",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: 159,
    grade5CutoffTamil: null,
    latitude: 6.711501598358154,
    longitude: 80.06084442138672
  },
  {
    seq: 66,
    censusNo: "02085",
    name: "Horana Sripalee M.V.",
    shortName: "Horana Sripalee M.V.",
    address: "Wewala, Horana",
    districtCode: 13,
    districtName: "Kalutara",
    provinceCode: 1,
    provinceName: "Western",
    zone: "Horana",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: 146,
    grade5CutoffTamil: null,
    latitude: 6.707592010498047,
    longitude: 80.06861877441406
  },
  {
    seq: 67,
    censusNo: "02110",
    name: "Horana Rajakeeya M.V.",
    shortName: "Horana Rajakeeya M.V.",
    address: "Horana",
    districtCode: 13,
    districtName: "Kalutara",
    provinceCode: 1,
    provinceName: "Western",
    zone: "Horana",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: 151,
    grade5CutoffTamil: null,
    latitude: 6.715312480926514,
    longitude: 80.06752777
  },
  {
    seq: 68,
    censusNo: "02133",
    name: "Bulathsinhala M.M.V",
    shortName: "Bulathsinhala M.M.V",
    address: "Bulathsinhala",
    districtCode: 13,
    districtName: "Kalutara",
    provinceCode: 1,
    provinceName: "Western",
    zone: "Horana",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: null,
    grade5CutoffTamil: null,
    latitude: null,
    longitude: null
  },
  {
    seq: 69,
    censusNo: "02180",
    name: "Matugama C.W.W. Kannangara M.M.V.",
    shortName: "Matugama C.W.W. Kannangara M.M.V.",
    address: "Matugama",
    districtCode: 13,
    districtName: "Kalutara",
    provinceCode: 1,
    provinceName: "Western",
    zone: "Matugama",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: 154,
    grade5CutoffTamil: null,
    latitude: 6.516849040985107,
    longitude: 80.11827087402344
  },
  {
    seq: 70,
    censusNo: "02181",
    name: "Matugama Ananda Sastralaya",
    shortName: "Matugama Ananda Sastralaya",
    address: "Matugama",
    districtCode: 13,
    districtName: "Kalutara",
    provinceCode: 1,
    provinceName: "Western",
    zone: "Matugama",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: 150,
    grade5CutoffTamil: null,
    latitude: 6.523957252502441,
    longitude: 80.11407470703125
  },
  {
    seq: 71,
    censusNo: "02187",
    name: "Dodangoda Miriswatta National School",
    shortName: "Dodangoda Miriswatta National School",
    address: "Dodangoda",
    districtCode: 13,
    districtName: "Kalutara",
    provinceCode: 1,
    provinceName: "Western",
    zone: "Kalutara",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: null,
    grade5CutoffTamil: null,
    latitude: 6.549516677856445,
    longitude: 80.0279541
  },
  {
    seq: 72,
    censusNo: "02241",
    name: "Kalutara Tissa M.M.V.",
    shortName: "Tissa M.M.V.",
    address: "Nagas Junction, Kalutara North",
    districtCode: 13,
    districtName: "Kalutara",
    provinceCode: 1,
    provinceName: "Western",
    zone: "Kalutara",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: null,
    grade5CutoffTamil: null,
    latitude: 6.607957363128662,
    longitude: 79.95118713378906
  },
  {
    seq: 73,
    censusNo: "02242",
    name: "Kalutara Balika M.V.",
    shortName: "Balika M.V.",
    address: "Old Road, Kalutara South",
    districtCode: 13,
    districtName: "Kalutara",
    provinceCode: 1,
    provinceName: "Western",
    zone: "Kalutara",
    gender: "Girls",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: 140,
    grade5CutoffTamil: null,
    latitude: 6.585511207580566,
    longitude: 79.96221923828125
  },
  {
    seq: 74,
    censusNo: "02243",
    name: "Kalutara M.V.",
    shortName: "M.V.",
    address: "Kalutara South",
    districtCode: 13,
    districtName: "Kalutara",
    provinceCode: 1,
    provinceName: "Western",
    zone: "Kalutara",
    gender: "Boys",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: 141,
    grade5CutoffTamil: null,
    latitude: 6.573878765106201,
    longitude: 79.96236419677734
  },
  {
    seq: 75,
    censusNo: "02276",
    name: "Aluthgama National School",
    shortName: "Aluthgama National School",
    address: "Aluthgama",
    districtCode: 13,
    districtName: "Kalutara",
    provinceCode: 1,
    provinceName: "Western",
    zone: "Kalutara",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: null,
    grade5CutoffTamil: null,
    latitude: 6.436360836029053,
    longitude: 79.99796295166016
  },
  {
    seq: 76,
    censusNo: "02282",
    name: "D S Senanayaka National School",
    shortName: "D S Senanayaka National School",
    address: "Beruwala",
    districtCode: 13,
    districtName: "Kalutara",
    provinceCode: 1,
    provinceName: "Western",
    zone: "Kalutara",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: null,
    grade5CutoffTamil: null,
    latitude: 6.469015121459961,
    longitude: 79.98684692382812
  },
  {
    seq: 77,
    censusNo: "02358",
    name: "Ittapana Colvin R De Silva M.V.",
    shortName: "Ittapana Colvin R De Silva M.V.",
    address: "Ittapana",
    districtCode: 13,
    districtName: "Kalutara",
    provinceCode: 1,
    provinceName: "Western",
    zone: "Matugama",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: null,
    grade5CutoffTamil: null,
    latitude: 6.412539958953857,
    longitude: 80.08296203613281
  },
  {
    seq: 78,
    censusNo: "02405",
    name: "Aluthgam Weediya Muslim Balika M.V.",
    shortName: "Aluthgam Weediya Muslim Balika M.V.",
    address: "Dharga Town",
    districtCode: 13,
    districtName: "Kalutara",
    provinceCode: 1,
    provinceName: "Western",
    zone: "Kalutara",
    gender: "Girls",
    mediums: [
      "Tamil"
    ],
    grade5CutoffSinhala: null,
    grade5CutoffTamil: null,
    latitude: 6.442880630493164,
    longitude: 80.01663970947266
  },
  {
    seq: 79,
    censusNo: "02406",
    name: "Beruwala Al Humaisara Central College",
    shortName: "Beruwala Al Humaisara Central College",
    address: "China Fort Beruwala",
    districtCode: 13,
    districtName: "Kalutara",
    provinceCode: 1,
    provinceName: "Western",
    zone: "Kalutara",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: null,
    grade5CutoffTamil: null,
    latitude: 6.477053165435791,
    longitude: 79.98980712890625
  },
  {
    seq: 80,
    censusNo: "03004",
    name: "Galagedara M.M.V.",
    shortName: "Galagedara M.M.V.",
    address: "Galagedara",
    districtCode: 21,
    districtName: "Kandy",
    provinceCode: 2,
    provinceName: "Central",
    zone: "Katugastota",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: null,
    grade5CutoffTamil: null,
    latitude: 7.371449947357178,
    longitude: 80.51927947998047
  },
  {
    seq: 81,
    censusNo: "03010",
    name: "Galagedara Sujatha Balika.M.M.V.",
    shortName: "Galagedara Sujatha Balika.M.M.V.",
    address: "Galagedara",
    districtCode: 21,
    districtName: "Kandy",
    provinceCode: 2,
    provinceName: "Central",
    zone: "Katugastota",
    gender: "Girls",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: null,
    grade5CutoffTamil: null,
    latitude: 7.371598720550537,
    longitude: 80.5185318
  },
  {
    seq: 82,
    censusNo: "03011",
    name: "Hatharaliyadda M. M. V.",
    shortName: "Hatharaliyadda M. M. V.",
    address: "Hatharaliyadda",
    districtCode: 21,
    districtName: "Kandy",
    provinceCode: 2,
    provinceName: "Central",
    zone: "Katugastota",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: null,
    grade5CutoffTamil: null,
    latitude: 7.337808609008789,
    longitude: 80.46980285644531
  },
  {
    seq: 83,
    censusNo: "03045",
    name: "Poojapitiya M.M.V.",
    shortName: "Poojapitiya M.M.V.",
    address: "Poojapitiya",
    districtCode: 21,
    districtName: "Kandy",
    provinceCode: 2,
    provinceName: "Central",
    zone: "Katugastota",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: null,
    grade5CutoffTamil: null,
    latitude: 7.373814582824707,
    longitude: 80.58930206298828
  },
  {
    seq: 84,
    censusNo: "03046",
    name: "Ankumbura Parakrama M. M. V.",
    shortName: "Ankumbura Parakrama M. M. V.",
    address: "Ankumbura",
    districtCode: 21,
    districtName: "Kandy",
    provinceCode: 2,
    provinceName: "Central",
    zone: "Katugastota",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: null,
    grade5CutoffTamil: null,
    latitude: 7.4397664070129395,
    longitude: 80.56845092773438
  },
  {
    seq: 85,
    censusNo: "03048",
    name: "Alawathugoda M.M.V",
    shortName: "Alawathugoda M.M.V",
    address: "Alawathugoda",
    districtCode: 21,
    districtName: "Kandy",
    provinceCode: 2,
    provinceName: "Central",
    zone: "Katugastota",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: null,
    grade5CutoffTamil: null,
    latitude: 7.400930881500244,
    longitude: 80.61035156
  },
  {
    seq: 86,
    censusNo: "03075",
    name: "Nugawela.M.M.V.",
    shortName: "Nugawela.M.M.V.",
    address: "Nugawela",
    districtCode: 21,
    districtName: "Kandy",
    provinceCode: 2,
    provinceName: "Central",
    zone: "Katugastota",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: 140,
    grade5CutoffTamil: null,
    latitude: 7.325563430786133,
    longitude: 80.58380126953125
  },
  {
    seq: 87,
    censusNo: "03108",
    name: "Rajasinghe C C",
    shortName: "Rajasinghe C C",
    address: "Rajasinghe C C Panwila",
    districtCode: 21,
    districtName: "Kandy",
    provinceCode: 2,
    provinceName: "Central",
    zone: "Wathegama",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: null,
    grade5CutoffTamil: null,
    latitude: 7.360136509,
    longitude: 80.70513916015625
  },
  {
    seq: 88,
    censusNo: "03169",
    name: "Hasalaka Ranasinghe Premadasa National School",
    shortName: "Hasalaka Ranasinghe Premadasa National School",
    address: "Hasalaka",
    districtCode: 21,
    districtName: "Kandy",
    provinceCode: 2,
    provinceName: "Central",
    zone: "Teldeniya",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: null,
    grade5CutoffTamil: null,
    latitude: 7.350189685821533,
    longitude: 80.94744110107422
  },
  {
    seq: 89,
    censusNo: "03181",
    name: "Amupitiya N.S.",
    shortName: "Amupitiya N.S.",
    address: "Udispaththuwa",
    districtCode: 21,
    districtName: "Kandy",
    provinceCode: 2,
    provinceName: "Central",
    zone: "Teldeniya",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: null,
    grade5CutoffTamil: null,
    latitude: 7.333160877227783,
    longitude: 80.77056884765625
  },
  {
    seq: 90,
    censusNo: "03184",
    name: "Teldeniya National School",
    shortName: "Teldeniya National School",
    address: "Teldeniya",
    districtCode: 21,
    districtName: "Kandy",
    provinceCode: 2,
    provinceName: "Central",
    zone: "Teldeniya",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: 140,
    grade5CutoffTamil: null,
    latitude: 7.312427520751953,
    longitude: 80.75690460205078
  },
  {
    seq: 91,
    censusNo: "03217",
    name: "S.W.R.D.Bandaranayake N.S.",
    shortName: "S.W.R.D.Bandaranayake N.S.",
    address: "Warapitiya, Kundasale",
    districtCode: 21,
    districtName: "Kandy",
    provinceCode: 2,
    provinceName: "Central",
    zone: "Wathegama",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: null,
    grade5CutoffTamil: null,
    latitude: 7.136734485626221,
    longitude: 79.87277985
  },
  {
    seq: 92,
    censusNo: "03256",
    name: "Digana Rajawella Hindu N.C.",
    shortName: "Digana Rajawella Hindu N.C.",
    address: "Rajawella, Digana",
    districtCode: 21,
    districtName: "Kandy",
    provinceCode: 2,
    provinceName: "Central",
    zone: "Wathegama",
    gender: "Mixed",
    mediums: [
      "Tamil"
    ],
    grade5CutoffSinhala: null,
    grade5CutoffTamil: null,
    latitude: 7.2965617179870605,
    longitude: 80.72848510742188
  },
  {
    seq: 93,
    censusNo: "03263",
    name: "Madawala Madina N S",
    shortName: "Madawala Madina N S",
    address: "Madawala Bazaar",
    districtCode: 21,
    districtName: "Kandy",
    provinceCode: 2,
    provinceName: "Central",
    zone: "Wathegama",
    gender: "Mixed",
    mediums: [
      "Tamil"
    ],
    grade5CutoffSinhala: null,
    grade5CutoffTamil: 134,
    latitude: 7.257400035858154,
    longitude: 80.67150115966797
  },
  {
    seq: 94,
    censusNo: "03284",
    name: "Akurana Azhar Central College",
    shortName: "Akurana Azhar Central College",
    address: "Akurana",
    districtCode: 21,
    districtName: "Kandy",
    provinceCode: 2,
    provinceName: "Central",
    zone: "Katugastota",
    gender: "Mixed",
    mediums: [
      "Tamil"
    ],
    grade5CutoffSinhala: null,
    grade5CutoffTamil: 138,
    latitude: null,
    longitude: null
  },
  {
    seq: 95,
    censusNo: "03285",
    name: "Al-Manar Mus.M.V.",
    shortName: "Al-Manar Mus.M.V.",
    address: "Galhinna",
    districtCode: 21,
    districtName: "Kandy",
    provinceCode: 2,
    provinceName: "Central",
    zone: "Katugastota",
    gender: "Mixed",
    mediums: [
      "Tamil"
    ],
    grade5CutoffSinhala: null,
    grade5CutoffTamil: null,
    latitude: null,
    longitude: null
  },
  {
    seq: 96,
    censusNo: "03286",
    name: "Akurana Zahira Mus.M.M.V.",
    shortName: "Akurana Zahira Mus.M.M.V.",
    address: "Bulugahathenna, Akurana",
    districtCode: 21,
    districtName: "Kandy",
    provinceCode: 2,
    provinceName: "Central",
    zone: "Katugastota",
    gender: "Mixed",
    mediums: [
      "Tamil"
    ],
    grade5CutoffSinhala: null,
    grade5CutoffTamil: null,
    latitude: 7.371075153,
    longitude: 80.60964203
  },
  {
    seq: 97,
    censusNo: "03314",
    name: "Bopitiya Rajasinghe N.S.",
    shortName: "Bopitiya Rajasinghe N.S.",
    address: "Pothgoda, Marassana",
    districtCode: 21,
    districtName: "Kandy",
    provinceCode: 2,
    provinceName: "Central",
    zone: "Kandy",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: null,
    grade5CutoffTamil: null,
    latitude: 7.199547768,
    longitude: 80.74523926
  },
  {
    seq: 98,
    censusNo: "03320",
    name: "Marassana N.S.",
    shortName: "Marassana N.S.",
    address: "Meruppa, Marassana",
    districtCode: 21,
    districtName: "Kandy",
    provinceCode: 2,
    provinceName: "Central",
    zone: "Kandy",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: null,
    grade5CutoffTamil: null,
    latitude: 7.217326641082764,
    longitude: 80.73894500732422
  },
  {
    seq: 99,
    censusNo: "03350",
    name: "Kandy Dharmaraja College",
    shortName: "Dharmaraja College",
    address: "Kandy",
    districtCode: 21,
    districtName: "Kandy",
    provinceCode: 2,
    provinceName: "Central",
    zone: "Kandy",
    gender: "Boys",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: 174,
    grade5CutoffTamil: null,
    latitude: 7.289700031280518,
    longitude: 80.64800262451172
  },
  {
    seq: 100,
    censusNo: "03351",
    name: "Kandy Mahamaya Girls College",
    shortName: "Mahamaya Girls College",
    address: "Kandy",
    districtCode: 21,
    districtName: "Kandy",
    provinceCode: 2,
    provinceName: "Central",
    zone: "Kandy",
    gender: "Girls",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: 168,
    grade5CutoffTamil: null,
    latitude: 7.286180019378662,
    longitude: 80.64333344
  },
  {
    seq: 101,
    censusNo: "03379",
    name: "Kandy Girl's High School",
    shortName: "Girl's High School",
    address: "Kandy",
    districtCode: 21,
    districtName: "Kandy",
    provinceCode: 2,
    provinceName: "Central",
    zone: "Kandy",
    gender: "Girls",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: 162,
    grade5CutoffTamil: null,
    latitude: 7.286904811859131,
    longitude: 80.62438201904297
  },
  {
    seq: 102,
    censusNo: "03380",
    name: "Kandy Kingswood College",
    shortName: "Kingswood College",
    address: "Kandy",
    districtCode: 21,
    districtName: "Kandy",
    provinceCode: 2,
    provinceName: "Central",
    zone: "Kandy",
    gender: "Boys",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: 170,
    grade5CutoffTamil: null,
    latitude: 7.278427600860596,
    longitude: 80.61435699
  },
  {
    seq: 103,
    censusNo: "03382",
    name: "Kandy Pushpadana Girls' College",
    shortName: "Pushpadana Girls' College",
    address: "Kandy",
    districtCode: 21,
    districtName: "Kandy",
    provinceCode: 2,
    provinceName: "Central",
    zone: "Kandy",
    gender: "Girls",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: 159,
    grade5CutoffTamil: null,
    latitude: 7.293579102,
    longitude: 80.63071442
  },
  {
    seq: 104,
    censusNo: "03387",
    name: "Katugastota Sri Rahula College",
    shortName: "Katugastota Sri Rahula College",
    address: "Katugastota",
    districtCode: 21,
    districtName: "Kandy",
    provinceCode: 2,
    provinceName: "Central",
    zone: "Kandy",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: null,
    grade5CutoffTamil: null,
    latitude: 7.3221330642700195,
    longitude: 80.62217712402344
  },
  {
    seq: 105,
    censusNo: "03405",
    name: "Kadugannawa N.S",
    shortName: "Kadugannawa N.S",
    address: "Kadugannawa",
    districtCode: 21,
    districtName: "Kandy",
    provinceCode: 2,
    provinceName: "Central",
    zone: "Denuwara",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: null,
    grade5CutoffTamil: null,
    latitude: 7.260352611541748,
    longitude: 80.52935791015625
  },
  {
    seq: 106,
    censusNo: "03406",
    name: "Sri Swarnajothi Natinal School",
    shortName: "Sri Swarnajothi Natinal School",
    address: "Kiribathikubura",
    districtCode: 21,
    districtName: "Kandy",
    provinceCode: 2,
    provinceName: "Central",
    zone: "Denuwara",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: null,
    grade5CutoffTamil: null,
    latitude: 7.268754482269287,
    longitude: 80.57452392578125
  },
  {
    seq: 107,
    censusNo: "03441",
    name: "D.B.Wijethunga N.S",
    shortName: "D.B.Wijethunga N.S",
    address: "Muruthagahamula",
    districtCode: 21,
    districtName: "Kandy",
    provinceCode: 2,
    provinceName: "Central",
    zone: "Denuwara",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: null,
    grade5CutoffTamil: null,
    latitude: 7.2068400382995605,
    longitude: 80.57788086
  },
  {
    seq: 108,
    censusNo: "03488",
    name: "Gampola Wickramabahu Madya Vidyalaya",
    shortName: "Gampola Wickramabahu Madya Vidyalaya",
    address: "Gampola",
    districtCode: 21,
    districtName: "Kandy",
    provinceCode: 2,
    provinceName: "Central",
    zone: "Gampola",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: 140,
    grade5CutoffTamil: null,
    latitude: 7.153883457183838,
    longitude: 80.56513977050781
  },
  {
    seq: 109,
    censusNo: "03490",
    name: "Atabage Wimaladharma N.S.",
    shortName: "Atabage Wimaladharma N.S.",
    address: "Atabage, Gampola",
    districtCode: 21,
    districtName: "Kandy",
    provinceCode: 2,
    provinceName: "Central",
    zone: "Gampola",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: null,
    grade5CutoffTamil: null,
    latitude: 7.134962558746338,
    longitude: 80.59664916992188
  },
  {
    seq: 110,
    censusNo: "03532",
    name: "Senadhikari National School",
    shortName: "Senadhikari National School",
    address: "Udahenthenna",
    districtCode: 21,
    districtName: "Kandy",
    provinceCode: 2,
    provinceName: "Central",
    zone: "Gampola",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: null,
    grade5CutoffTamil: null,
    latitude: null,
    longitude: null
  },
  {
    seq: 111,
    censusNo: "03553",
    name: "Anurudda Kumara Mmv",
    shortName: "Anurudda Kumara Mmv",
    address: "Nawalapitiya",
    districtCode: 21,
    districtName: "Kandy",
    provinceCode: 2,
    provinceName: "Central",
    zone: "Gampola",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: null,
    grade5CutoffTamil: null,
    latitude: null,
    longitude: null
  },
  {
    seq: 112,
    censusNo: "03575",
    name: "Kandy Badi-Du-Din Mahmud Girls' College",
    shortName: "Badi-Du-Din Mahmud Girls' College",
    address: "D.S.Senanayaka Veediya, Kandy",
    districtCode: 21,
    districtName: "Kandy",
    provinceCode: 2,
    provinceName: "Central",
    zone: "Kandy",
    gender: "Girls",
    mediums: [
      "Tamil"
    ],
    grade5CutoffSinhala: null,
    grade5CutoffTamil: 143,
    latitude: 7.301140785217285,
    longitude: 80.63510131835938
  },
  {
    seq: 113,
    censusNo: "03617",
    name: "Hindu N.S.",
    shortName: "Hindu N.S.",
    address: "Nuwara Eliya Road, Pussellawa",
    districtCode: 21,
    districtName: "Kandy",
    provinceCode: 2,
    provinceName: "Central",
    zone: "Gampola",
    gender: "Mixed",
    mediums: [
      "Tamil"
    ],
    grade5CutoffSinhala: null,
    grade5CutoffTamil: null,
    latitude: null,
    longitude: null
  },
  {
    seq: 114,
    censusNo: "03648",
    name: "Al-Manar Central College(N.S.)",
    shortName: "Al-Manar Central College(N.S.)",
    address: "Handessa",
    districtCode: 21,
    districtName: "Kandy",
    provinceCode: 2,
    provinceName: "Central",
    zone: "Denuwara",
    gender: "Mixed",
    mediums: [
      "Tamil"
    ],
    grade5CutoffSinhala: null,
    grade5CutoffTamil: null,
    latitude: 8.462007522583008,
    longitude: 81.26885223388672
  },
  {
    seq: 115,
    censusNo: "03658",
    name: "Gampola Zahira National School",
    shortName: "Gampola Zahira National School",
    address: "Gampola",
    districtCode: 21,
    districtName: "Kandy",
    provinceCode: 2,
    provinceName: "Central",
    zone: "Gampola",
    gender: "Mixed",
    mediums: [
      "Tamil"
    ],
    grade5CutoffSinhala: null,
    grade5CutoffTamil: null,
    latitude: 7.164975166320801,
    longitude: 80.58289337158203
  },
  {
    seq: 116,
    censusNo: "04003",
    name: "Rangiri Dambulla Central College",
    shortName: "Rangiri Dambulla Central College",
    address: "Nissanka Mawatha, Dambulla",
    districtCode: 22,
    districtName: "Matale",
    provinceCode: 2,
    provinceName: "Central",
    zone: "Galewela",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: 140,
    grade5CutoffTamil: null,
    latitude: 7.863016128540039,
    longitude: 80.64422607421875
  },
  {
    seq: 117,
    censusNo: "04093",
    name: "Naula Sri Naga National School",
    shortName: "Naula Sri Naga National School",
    address: "Naula",
    districtCode: 22,
    districtName: "Matale",
    provinceCode: 2,
    provinceName: "Central",
    zone: "Naula",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: null,
    grade5CutoffTamil: null,
    latitude: 7.706310749053955,
    longitude: 80.65469360351562
  },
  {
    seq: 118,
    censusNo: "04172",
    name: "Matale Sri Sangamiththa Balika National School",
    shortName: "Sri Sangamiththa Balika National School",
    address: "Hulangamuwa Road Matale",
    districtCode: 22,
    districtName: "Matale",
    provinceCode: 2,
    provinceName: "Central",
    zone: "Matale",
    gender: "Girls",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: 153,
    grade5CutoffTamil: null,
    latitude: 7.463315010070801,
    longitude: 80.6155014
  },
  {
    seq: 119,
    censusNo: "04173",
    name: "Matale Vijaya National School",
    shortName: "Vijaya National School",
    address: "Matale",
    districtCode: 22,
    districtName: "Matale",
    provinceCode: 2,
    provinceName: "Central",
    zone: "Matale",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: null,
    grade5CutoffTamil: null,
    latitude: 7.464999675750732,
    longitude: 80.62193298339844
  },
  {
    seq: 120,
    censusNo: "04175",
    name: "Matale St. Thomas College",
    shortName: "St. Thomas College",
    address: "Matale",
    districtCode: 22,
    districtName: "Matale",
    provinceCode: 2,
    provinceName: "Central",
    zone: "Matale",
    gender: "Boys",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: 149,
    grade5CutoffTamil: null,
    latitude: null,
    longitude: null
  },
  {
    seq: 121,
    censusNo: "04189",
    name: "Matale Christ Church College",
    shortName: "Christ Church College",
    address: "Matale",
    districtCode: 22,
    districtName: "Matale",
    provinceCode: 2,
    provinceName: "Central",
    zone: "Matale",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: null,
    grade5CutoffTamil: null,
    latitude: 7.467227458953857,
    longitude: 80.61795806884766
  },
  {
    seq: 122,
    censusNo: "04260",
    name: "Matale Zahira College",
    shortName: "Zahira College",
    address: "Matale",
    districtCode: 22,
    districtName: "Matale",
    provinceCode: 2,
    provinceName: "Central",
    zone: "Matale",
    gender: "Mixed",
    mediums: [
      "Tamil"
    ],
    grade5CutoffSinhala: null,
    grade5CutoffTamil: null,
    latitude: 7.475820064544678,
    longitude: 80.62464904785156
  },
  {
    seq: 123,
    censusNo: "04261",
    name: "Matale Amina National School",
    shortName: "Amina National School",
    address: "Molandapitiya Rd, Matale",
    districtCode: 22,
    districtName: "Matale",
    provinceCode: 2,
    provinceName: "Central",
    zone: "Matale",
    gender: "Girls",
    mediums: [
      "Tamil"
    ],
    grade5CutoffSinhala: null,
    grade5CutoffTamil: 135,
    latitude: null,
    longitude: null
  },
  {
    seq: 124,
    censusNo: "04262",
    name: "Akuramboda Matale Pakkiyam National College",
    shortName: "Akuramboda Matale Pakkiyam National College",
    address: "Dhramapala Mawatha, Matale",
    districtCode: 22,
    districtName: "Matale",
    provinceCode: 2,
    provinceName: "Central",
    zone: "Matale",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: null,
    grade5CutoffTamil: null,
    latitude: null,
    longitude: null
  },
  {
    seq: 125,
    censusNo: "04263",
    name: "Ukuwela Ajmeer National School",
    shortName: "Ukuwela Ajmeer National School",
    address: "Elkaduwa, Ukuwela",
    districtCode: 22,
    districtName: "Matale",
    provinceCode: 2,
    provinceName: "Central",
    zone: "Matale",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: null,
    grade5CutoffTamil: null,
    latitude: 7.421173095703125,
    longitude: 80.63322448730469
  },
  {
    seq: 126,
    censusNo: "04266",
    name: "Matale Hindu National School",
    shortName: "Hindu National School",
    address: "Matale",
    districtCode: 22,
    districtName: "Matale",
    provinceCode: 2,
    provinceName: "Central",
    zone: "Matale",
    gender: "Mixed",
    mediums: [
      "Tamil"
    ],
    grade5CutoffSinhala: null,
    grade5CutoffTamil: null,
    latitude: 7.484624862670898,
    longitude: 80.62250518798828
  },
  {
    seq: 127,
    censusNo: "04316",
    name: "Akuramboda Weera Keppetipola National School",
    shortName: "Akuramboda Weera Keppetipola National School",
    address: "Akuramboda",
    districtCode: 22,
    districtName: "Matale",
    provinceCode: 2,
    provinceName: "Central",
    zone: "Galewela",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: null,
    grade5CutoffTamil: null,
    latitude: 7.645235538482666,
    longitude: 80.60324096679688
  },
  {
    seq: 128,
    censusNo: "05001",
    name: "Nuwara Eliya Gamini Central College",
    shortName: "Nuwara Eliya Gamini Central College",
    address: "Nuwara Eliya",
    districtCode: 23,
    districtName: "Nuwara Eliya",
    provinceCode: 2,
    provinceName: "Central",
    zone: "Nuwara Eliya",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: null,
    grade5CutoffTamil: null,
    latitude: null,
    longitude: null
  },
  {
    seq: 129,
    censusNo: "05035",
    name: "Hatton St. Gabriel's Girls' College",
    shortName: "Hatton St. Gabriel's Girls' College",
    address: "Hatton",
    districtCode: 23,
    districtName: "Nuwara Eliya",
    provinceCode: 2,
    provinceName: "Central",
    zone: "Hatton",
    gender: "Girls",
    mediums: [
      "Tamil"
    ],
    grade5CutoffSinhala: null,
    grade5CutoffTamil: 140,
    latitude: 6.893401145935059,
    longitude: 80.59751892089844
  },
  {
    seq: 130,
    censusNo: "05070",
    name: "Jayahela National School",
    shortName: "Jayahela National School",
    address: "Pundaluoya",
    districtCode: 23,
    districtName: "Nuwara Eliya",
    provinceCode: 2,
    provinceName: "Central",
    zone: "Kotmale",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: null,
    grade5CutoffTamil: null,
    latitude: 7.014582633972168,
    longitude: 80.66880798339844
  },
  {
    seq: 131,
    censusNo: "05071",
    name: "Gamini Dissanayake N.S.",
    shortName: "Gamini Dissanayake N.S.",
    address: "New Town, Kotmale",
    districtCode: 23,
    districtName: "Nuwara Eliya",
    provinceCode: 2,
    provinceName: "Central",
    zone: "Kotmale",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: null,
    grade5CutoffTamil: null,
    latitude: 7.0633440017700195,
    longitude: 80.68371582
  },
  {
    seq: 132,
    censusNo: "05111",
    name: "Sri Sumangala Nc",
    shortName: "Sri Sumangala Nc",
    address: "Nildandahinna",
    districtCode: 23,
    districtName: "Nuwara Eliya",
    provinceCode: 2,
    provinceName: "Central",
    zone: "Walapane",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: null,
    grade5CutoffTamil: null,
    latitude: null,
    longitude: null
  },
  {
    seq: 133,
    censusNo: "05344",
    name: "Al-Minhaj N.S.",
    shortName: "Al-Minhaj N.S.",
    address: "Hapugasthalawa, Nawalapitiya",
    districtCode: 23,
    districtName: "Nuwara Eliya",
    provinceCode: 2,
    provinceName: "Central",
    zone: "Kotmale",
    gender: "Mixed",
    mediums: [
      "Tamil"
    ],
    grade5CutoffSinhala: null,
    grade5CutoffTamil: 132,
    latitude: 7.056379795074463,
    longitude: 80.57018280029297
  },
  {
    seq: 134,
    censusNo: "05428",
    name: "Poramadulla Central College",
    shortName: "Poramadulla Central College",
    address: "Rikillagaskada",
    districtCode: 23,
    districtName: "Nuwara Eliya",
    provinceCode: 2,
    provinceName: "Central",
    zone: "Hanguranketha",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: 142,
    grade5CutoffTamil: null,
    latitude: 7.140453338623047,
    longitude: 80.77360534667969
  },
  {
    seq: 135,
    censusNo: "05429",
    name: "Victoria National School",
    shortName: "Victoria National School",
    address: "Rajamawatha Adikarigama",
    districtCode: 23,
    districtName: "Nuwara Eliya",
    provinceCode: 2,
    provinceName: "Central",
    zone: "Hanguranketha",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: null,
    grade5CutoffTamil: null,
    latitude: 7.213063716888428,
    longitude: 80.78253173828125
  },
  {
    seq: 136,
    censusNo: "06001",
    name: "Balapitiya Rewatha National College",
    shortName: "Balapitiya Rewatha National College",
    address: "Sir Lalitha Rajapaksha Mawatha, Balapitiya",
    districtCode: 31,
    districtName: "Galle",
    provinceCode: 3,
    provinceName: "Southern",
    zone: "Ambalangoda",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: null,
    grade5CutoffTamil: null,
    latitude: 6.283954144,
    longitude: 80.04138946533203
  },
  {
    seq: 137,
    censusNo: "06035",
    name: "Ambalangoda Sri Devananda College",
    shortName: "Ambalangoda Sri Devananda College",
    address: "Ambalangoda",
    districtCode: 31,
    districtName: "Galle",
    provinceCode: 3,
    provinceName: "Southern",
    zone: "Ambalangoda",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: 147,
    grade5CutoffTamil: null,
    latitude: 6.239475727081299,
    longitude: 80.04955291748047
  },
  {
    seq: 138,
    censusNo: "06036",
    name: "Ambalangoda Dharmashoka College",
    shortName: "Ambalangoda Dharmashoka College",
    address: "Ambalangoda",
    districtCode: 31,
    districtName: "Galle",
    provinceCode: 3,
    provinceName: "Southern",
    zone: "Ambalangoda",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: 152,
    grade5CutoffTamil: null,
    latitude: 6.240143775939941,
    longitude: 80.05179595947266
  },
  {
    seq: 139,
    censusNo: "06068",
    name: "Karandeniya Central College",
    shortName: "Karandeniya Central College",
    address: "Karandeniya",
    districtCode: 31,
    districtName: "Galle",
    provinceCode: 3,
    provinceName: "Southern",
    zone: "Elpitiya",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: null,
    grade5CutoffTamil: null,
    latitude: 6.2724151611328125,
    longitude: 80.09395599365234
  },
  {
    seq: 140,
    censusNo: "06116",
    name: "Benthota Gamini M.M.V",
    shortName: "Benthota Gamini M.M.V",
    address: "Benthota",
    districtCode: 31,
    districtName: "Galle",
    provinceCode: 3,
    provinceName: "Southern",
    zone: "Elpitiya",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: null,
    grade5CutoffTamil: null,
    latitude: 6.420040607452393,
    longitude: 80.00165557861328
  },
  {
    seq: 141,
    censusNo: "06141",
    name: "Elpitiya Ananda M.V.",
    shortName: "Elpitiya Ananda M.V.",
    address: "Elpitiya",
    districtCode: 31,
    districtName: "Galle",
    provinceCode: 3,
    provinceName: "Southern",
    zone: "Elpitiya",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: 143,
    grade5CutoffTamil: null,
    latitude: 6.295362473,
    longitude: 80.16423034667969
  },
  {
    seq: 142,
    censusNo: "06180",
    name: "Neluwa National School",
    shortName: "Neluwa National School",
    address: "Neluwa",
    districtCode: 31,
    districtName: "Galle",
    provinceCode: 3,
    provinceName: "Southern",
    zone: "Udugama",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: null,
    grade5CutoffTamil: null,
    latitude: 6.376725196838379,
    longitude: 80.35655212402344
  },
  {
    seq: 143,
    censusNo: "06182",
    name: "Thawalama Vidyaraja National School",
    shortName: "Thawalama Vidyaraja National School",
    address: "Thawalama",
    districtCode: 31,
    districtName: "Galle",
    provinceCode: 3,
    provinceName: "Southern",
    zone: "Udugama",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: null,
    grade5CutoffTamil: null,
    latitude: 6.340583324432373,
    longitude: 80.33306121826172
  },
  {
    seq: 144,
    censusNo: "06218",
    name: "Nagoda Royal National School",
    shortName: "Nagoda Royal National School",
    address: "Nagoda",
    districtCode: 31,
    districtName: "Galle",
    provinceCode: 3,
    provinceName: "Southern",
    zone: "Udugama",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: null,
    grade5CutoffTamil: null,
    latitude: 6.193889617919922,
    longitude: 80.27476501464844
  },
  {
    seq: 145,
    censusNo: "06254",
    name: "Wanduramba Central College",
    shortName: "Wanduramba Central College",
    address: "Wanduramba",
    districtCode: 31,
    districtName: "Galle",
    provinceCode: 3,
    provinceName: "Southern",
    zone: "Galle",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: null,
    grade5CutoffTamil: null,
    latitude: 6.134197235107422,
    longitude: 80.25272369384766
  },
  {
    seq: 146,
    censusNo: "06258",
    name: "Baddegama Christ Church Boy's College",
    shortName: "Baddegama Christ Church Boy's College",
    address: "Baddegama",
    districtCode: 31,
    districtName: "Galle",
    provinceCode: 3,
    provinceName: "Southern",
    zone: "Galle",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: null,
    grade5CutoffTamil: null,
    latitude: 6.172926902770996,
    longitude: 80.17503356933594
  },
  {
    seq: 147,
    censusNo: "06259",
    name: "Baddegama Christ Church Girls' College",
    shortName: "Baddegama Christ Church Girls' College",
    address: "Baddegama",
    districtCode: 31,
    districtName: "Galle",
    provinceCode: 3,
    provinceName: "Southern",
    zone: "Galle",
    gender: "Girls",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: 141,
    grade5CutoffTamil: null,
    latitude: 6.176069259643555,
    longitude: 80.17959594726562
  },
  {
    seq: 148,
    censusNo: "06317",
    name: "Sri Sumangala M.M.V.",
    shortName: "Sri Sumangala M.M.V.",
    address: "Nalagasdeniya, Hikkaduwa",
    districtCode: 31,
    districtName: "Galle",
    provinceCode: 3,
    provinceName: "Southern",
    zone: "Ambalangoda",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: null,
    grade5CutoffTamil: null,
    latitude: 7.077805995941162,
    longitude: 79.94713592529297
  },
  {
    seq: 149,
    censusNo: "06318",
    name: "Rathgama Devapathiraja College",
    shortName: "Rathgama Devapathiraja College",
    address: "Rathgama",
    districtCode: 31,
    districtName: "Galle",
    provinceCode: 3,
    provinceName: "Southern",
    zone: "Ambalangoda",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: null,
    grade5CutoffTamil: null,
    latitude: 6.103177070617676,
    longitude: 80.14905548095703
  },
  {
    seq: 150,
    censusNo: "06366",
    name: "Galle Mahinda College",
    shortName: "Mahinda College",
    address: "Woodward Mawatha Galle",
    districtCode: 31,
    districtName: "Galle",
    provinceCode: 3,
    provinceName: "Southern",
    zone: "Galle",
    gender: "Boys",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: 163,
    grade5CutoffTamil: null,
    latitude: 6.048641204833984,
    longitude: 80.21308135986328
  },
  {
    seq: 151,
    censusNo: "06367",
    name: "Galle Richmond College",
    shortName: "Richmond College",
    address: "Richmond Hill, Galle",
    districtCode: 31,
    districtName: "Galle",
    provinceCode: 3,
    provinceName: "Southern",
    zone: "Galle",
    gender: "Boys",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: 168,
    grade5CutoffTamil: null,
    latitude: 6.05214262,
    longitude: 80.20278930664062
  },
  {
    seq: 152,
    censusNo: "06368",
    name: "Galle Rippon Girls College",
    shortName: "Rippon Girls College",
    address: "Richman Hill, Galle",
    districtCode: 31,
    districtName: "Galle",
    provinceCode: 3,
    provinceName: "Southern",
    zone: "Galle",
    gender: "Girls",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: 151,
    grade5CutoffTamil: null,
    latitude: 6.05219841,
    longitude: 80.20133972167969
  },
  {
    seq: 153,
    censusNo: "06369",
    name: "Galle Sanghamiththa Balika Vidyalaya",
    shortName: "Sanghamiththa Balika Vidyalaya",
    address: "Wackwella Road, Galle",
    districtCode: 31,
    districtName: "Galle",
    provinceCode: 3,
    provinceName: "Southern",
    zone: "Galle",
    gender: "Girls",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: 163,
    grade5CutoffTamil: null,
    latitude: 6.046840667724609,
    longitude: 80.21043395996094
  },
  {
    seq: 154,
    censusNo: "06370",
    name: "Galle Southland College",
    shortName: "Southland College",
    address: "Fort -Galle",
    districtCode: 31,
    districtName: "Galle",
    provinceCode: 3,
    provinceName: "Southern",
    zone: "Galle",
    gender: "Girls",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: 167,
    grade5CutoffTamil: null,
    latitude: 6.027946949005127,
    longitude: 80.21621704101562
  },
  {
    seq: 155,
    censusNo: "06371",
    name: "Galle St. Aloysius College",
    shortName: "St. Aloysius College",
    address: "Kaluwella Galle",
    districtCode: 31,
    districtName: "Galle",
    provinceCode: 3,
    provinceName: "Southern",
    zone: "Galle",
    gender: "Boys",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: 157,
    grade5CutoffTamil: null,
    latitude: 6.035590648651123,
    longitude: 80.20984649658203
  },
  {
    seq: 156,
    censusNo: "06373",
    name: "Galle Vidyaloka College",
    shortName: "Vidyaloka College",
    address: "Wackwella Road, Galle",
    districtCode: 31,
    districtName: "Galle",
    provinceCode: 3,
    provinceName: "Southern",
    zone: "Galle",
    gender: "Boys",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: 147,
    grade5CutoffTamil: null,
    latitude: 6.034191608428955,
    longitude: 80.21463775634766
  },
  {
    seq: 157,
    censusNo: "06392",
    name: "Upananda Vidyalaya",
    shortName: "Upananda Vidyalaya",
    address: "Manawila Walahanduwa",
    districtCode: 31,
    districtName: "Galle",
    provinceCode: 3,
    provinceName: "Southern",
    zone: "Galle",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: null,
    grade5CutoffTamil: null,
    latitude: 6.062318325042725,
    longitude: 80.26108551
  },
  {
    seq: 158,
    censusNo: "06393",
    name: "Meepawala Amarasuriya College",
    shortName: "Meepawala Amarasuriya College",
    address: "Meepawala, Poddala",
    districtCode: 31,
    districtName: "Galle",
    provinceCode: 3,
    provinceName: "Southern",
    zone: "Galle",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: null,
    grade5CutoffTamil: null,
    latitude: 6.105842113494873,
    longitude: 80.21786499023438
  },
  {
    seq: 159,
    censusNo: "06431",
    name: "Buonavista College",
    shortName: "Buonavista College",
    address: "Unawatuna Galle",
    districtCode: 31,
    districtName: "Galle",
    provinceCode: 3,
    provinceName: "Southern",
    zone: "Galle",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: null,
    grade5CutoffTamil: null,
    latitude: 6.048814296722412,
    longitude: 80.18564606
  },
  {
    seq: 160,
    censusNo: "06457",
    name: "Kathaluwa Central College",
    shortName: "Kathaluwa Central College",
    address: "Kathaluwa, Ahangama",
    districtCode: 31,
    districtName: "Galle",
    provinceCode: 3,
    provinceName: "Southern",
    zone: "Galle",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: null,
    grade5CutoffTamil: null,
    latitude: 5.984985828399658,
    longitude: 80.34065246582031
  },
  {
    seq: 161,
    censusNo: "06459",
    name: "Batemulla National School",
    shortName: "Batemulla National School",
    address: "Imaduwa",
    districtCode: 31,
    districtName: "Galle",
    provinceCode: 3,
    provinceName: "Southern",
    zone: "Galle",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: null,
    grade5CutoffTamil: null,
    latitude: 6.036358833312988,
    longitude: 80.38047028
  },
  {
    seq: 162,
    censusNo: "06496",
    name: "Gintota Zahira College (N.S.)",
    shortName: "Gintota Zahira College (N.S.)",
    address: "Kurudwatta, Gintota",
    districtCode: 31,
    districtName: "Galle",
    provinceCode: 3,
    provinceName: "Southern",
    zone: "Galle",
    gender: "Mixed",
    mediums: [
      "Tamil"
    ],
    grade5CutoffSinhala: null,
    grade5CutoffTamil: null,
    latitude: 7.475820064544678,
    longitude: 80.62464904785156
  },
  {
    seq: 163,
    censusNo: "06497",
    name: "Galle Malharsulhiya Central College",
    shortName: "Malharsulhiya Central College",
    address: "H.K.Edmond Mawatha, Galle",
    districtCode: 31,
    districtName: "Galle",
    provinceCode: 3,
    provinceName: "Southern",
    zone: "Galle",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: null,
    grade5CutoffTamil: null,
    latitude: 6.044853210449219,
    longitude: 80.22386169433594
  },
  {
    seq: 164,
    censusNo: "06511",
    name: "Labuduwa Siridhamma College",
    shortName: "Labuduwa Siridhamma College",
    address: "Labuduwa, Akmeemana",
    districtCode: 31,
    districtName: "Galle",
    provinceCode: 3,
    provinceName: "Southern",
    zone: "Galle",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: 150,
    grade5CutoffTamil: null,
    latitude: 6.071634769439697,
    longitude: 80.23004150390625
  },
  {
    seq: 165,
    censusNo: "06516",
    name: "Janadipathi Balika Vidyalaya",
    shortName: "Janadipathi Balika Vidyalaya",
    address: "Walahanduwa, Galle",
    districtCode: 31,
    districtName: "Galle",
    provinceCode: 3,
    provinceName: "Southern",
    zone: "Galle",
    gender: "Girls",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: null,
    grade5CutoffTamil: null,
    latitude: null,
    longitude: null
  },
  {
    seq: 166,
    censusNo: "07017",
    name: "Morawka Keerthi Abeywickrama National School",
    shortName: "Morawka Keerthi Abeywickrama National School",
    address: "Deniyaya Rd, Morawaka",
    districtCode: 32,
    districtName: "Matara",
    provinceCode: 3,
    provinceName: "Southern",
    zone: "Morawaka",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: null,
    grade5CutoffTamil: null,
    latitude: 6.2699408531188965,
    longitude: 80.49630737304688
  },
  {
    seq: 167,
    censusNo: "07029",
    name: "Kotapola N.S.",
    shortName: "Kotapola N.S.",
    address: "Kotapola",
    districtCode: 32,
    districtName: "Matara",
    provinceCode: 3,
    provinceName: "Southern",
    zone: "Morawaka",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: null,
    grade5CutoffTamil: null,
    latitude: 6.295253753662109,
    longitude: 80.53916168
  },
  {
    seq: 168,
    censusNo: "07041",
    name: "Urubokka National School",
    shortName: "Urubokka National School",
    address: "Urubokka",
    districtCode: 32,
    districtName: "Matara",
    provinceCode: 3,
    provinceName: "Southern",
    zone: "Morawaka",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: null,
    grade5CutoffTamil: null,
    latitude: 6.291190147399902,
    longitude: 80.63323974609375
  },
  {
    seq: 169,
    censusNo: "07055",
    name: "Deniyaya Central College",
    shortName: "Deniyaya Central College",
    address: "Deniyaya",
    districtCode: 32,
    districtName: "Matara",
    provinceCode: 3,
    provinceName: "Southern",
    zone: "Morawaka",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: 140,
    grade5CutoffTamil: null,
    latitude: 6.345590591430664,
    longitude: 80.55708312988281
  },
  {
    seq: 170,
    censusNo: "07071",
    name: "Thelijjawila Central College",
    shortName: "Thelijjawila Central College",
    address: "Thelijjawila",
    districtCode: 32,
    districtName: "Matara",
    provinceCode: 3,
    provinceName: "Southern",
    zone: "Akuressa",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: 148,
    grade5CutoffTamil: null,
    latitude: 6.019201278686523,
    longitude: 80.48991394042969
  },
  {
    seq: 171,
    censusNo: "07104",
    name: "Akuressa Godapitiya National School",
    shortName: "Akuressa Godapitiya National School",
    address: "Matara Road, Akuressa",
    districtCode: 32,
    districtName: "Matara",
    provinceCode: 3,
    provinceName: "Southern",
    zone: "Akuressa",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: null,
    grade5CutoffTamil: null,
    latitude: 6.0882649421691895,
    longitude: 80.47705078
  },
  {
    seq: 172,
    censusNo: "07146",
    name: "Kamburupiyiya Narandeniya M.M.V.",
    shortName: "Kamburupiyiya Narandeniya M.M.V.",
    address: "Kamburupiyiya",
    districtCode: 32,
    districtName: "Matara",
    provinceCode: 3,
    provinceName: "Southern",
    zone: "Mulatiyana (Hakmana)",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: 140,
    grade5CutoffTamil: null,
    latitude: null,
    longitude: null
  },
  {
    seq: 173,
    censusNo: "07162",
    name: "Thihagoda M.M.V.",
    shortName: "Thihagoda M.M.V.",
    address: "Thihagoda",
    districtCode: 32,
    districtName: "Matara",
    provinceCode: 3,
    provinceName: "Southern",
    zone: "Mulatiyana (Hakmana)",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: null,
    grade5CutoffTamil: null,
    latitude: 6.012513160705566,
    longitude: 80.56479645
  },
  {
    seq: 174,
    censusNo: "07181",
    name: "Puhulwella Madya Maha Vidyalaya",
    shortName: "Puhulwella Madya Maha Vidyalaya",
    address: "Kirinda Puhulwella",
    districtCode: 32,
    districtName: "Matara",
    provinceCode: 3,
    provinceName: "Southern",
    zone: "Mulatiyana (Hakmana)",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: null,
    grade5CutoffTamil: null,
    latitude: 6.040482997894287,
    longitude: 80.61843872070312
  },
  {
    seq: 175,
    censusNo: "07225",
    name: "Deyiyandara National School",
    shortName: "Deyiyandara National School",
    address: "Deyiyandara",
    districtCode: 32,
    districtName: "Matara",
    provinceCode: 3,
    provinceName: "Southern",
    zone: "Mulatiyana (Hakmana)",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: null,
    grade5CutoffTamil: null,
    latitude: 6.153918743133545,
    longitude: 80.60148620605469
  },
  {
    seq: 176,
    censusNo: "07258",
    name: "Weligama Siddartha College",
    shortName: "Weligama Siddartha College",
    address: "Hettiwediya, Weligama",
    districtCode: 32,
    districtName: "Matara",
    provinceCode: 3,
    provinceName: "Southern",
    zone: "Matara",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: null,
    grade5CutoffTamil: null,
    latitude: 5.971004486083984,
    longitude: 80.42029571533203
  },
  {
    seq: 177,
    censusNo: "07272",
    name: "Weligama Sri Sumangala Balika Vidyalaya",
    shortName: "Weligama Sri Sumangala Balika Vidyalaya",
    address: "Weligama",
    districtCode: 32,
    districtName: "Matara",
    provinceCode: 3,
    provinceName: "Southern",
    zone: "Matara",
    gender: "Girls",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: null,
    grade5CutoffTamil: null,
    latitude: 5.972925186157227,
    longitude: 80.42305755615234
  },
  {
    seq: 178,
    censusNo: "07283",
    name: "Arafa Central College",
    shortName: "Arafa Central College",
    address: "Galbokka, Weligama",
    districtCode: 32,
    districtName: "Matara",
    provinceCode: 3,
    provinceName: "Southern",
    zone: "Matara",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: null,
    grade5CutoffTamil: null,
    latitude: 7.7723259925842285,
    longitude: 81.60603332519531
  },
  {
    seq: 179,
    censusNo: "07305",
    name: "Matara Rahula College",
    shortName: "Rahula College",
    address: "Matara",
    districtCode: 32,
    districtName: "Matara",
    provinceCode: 3,
    provinceName: "Southern",
    zone: "Matara",
    gender: "Boys",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: 164,
    grade5CutoffTamil: null,
    latitude: 5.952901363372803,
    longitude: 80.53397369384766
  },
  {
    seq: 180,
    censusNo: "07306",
    name: "Matara Sujatha Vidyalaya",
    shortName: "Sujatha Vidyalaya",
    address: "Matara",
    districtCode: 32,
    districtName: "Matara",
    provinceCode: 3,
    provinceName: "Southern",
    zone: "Matara",
    gender: "Girls",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: 164,
    grade5CutoffTamil: null,
    latitude: 5.953762054443359,
    longitude: 80.53599548339844
  },
  {
    seq: 181,
    censusNo: "07309",
    name: "Matara Central College",
    shortName: "Central College",
    address: "Rahula Road, Matara",
    districtCode: 32,
    districtName: "Matara",
    provinceCode: 3,
    provinceName: "Southern",
    zone: "Matara",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: 140,
    grade5CutoffTamil: null,
    latitude: 5.9529194831848145,
    longitude: 80.54234313964844
  },
  {
    seq: 182,
    censusNo: "07317",
    name: "Matara St. Thomas Boys College",
    shortName: "St. Thomas Boys College",
    address: "Kumarathunga Mawatha, Matara",
    districtCode: 32,
    districtName: "Matara",
    provinceCode: 3,
    provinceName: "Southern",
    zone: "Matara",
    gender: "Boys",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: 155,
    grade5CutoffTamil: null,
    latitude: 5.948416233062744,
    longitude: 80.54178619384766
  },
  {
    seq: 183,
    censusNo: "07318",
    name: "Matara St.Thomas Girl's High Sch0ol",
    shortName: "St.Thomas Girl's High Sch0ol",
    address: "Walpola, Matara",
    districtCode: 32,
    districtName: "Matara",
    provinceCode: 3,
    provinceName: "Southern",
    zone: "Matara",
    gender: "Girls",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: 156,
    grade5CutoffTamil: null,
    latitude: null,
    longitude: null
  },
  {
    seq: 184,
    censusNo: "07328",
    name: "Matara St. Servetious College",
    shortName: "St. Servetious College",
    address: "Kotuwegoda, Matara",
    districtCode: 32,
    districtName: "Matara",
    provinceCode: 3,
    provinceName: "Southern",
    zone: "Matara",
    gender: "Boys",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: 146,
    grade5CutoffTamil: null,
    latitude: 5.9434590339660645,
    longitude: 80.54969787597656
  },
  {
    seq: 185,
    censusNo: "07350",
    name: "Devinuwara Central College",
    shortName: "Devinuwara Central College",
    address: "Devinuwara",
    districtCode: 32,
    districtName: "Matara",
    provinceCode: 3,
    provinceName: "Southern",
    zone: "Matara",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: null,
    grade5CutoffTamil: null,
    latitude: 5.9285993576049805,
    longitude: 80.58722686767578
  },
  {
    seq: 186,
    censusNo: "07383",
    name: "Dickwella Vijitha Central College",
    shortName: "Dickwella Vijitha Central College",
    address: "Mahawela Road, Dickwella",
    districtCode: 32,
    districtName: "Matara",
    provinceCode: 3,
    provinceName: "Southern",
    zone: "Matara",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: 140,
    grade5CutoffTamil: null,
    latitude: 5.96597147,
    longitude: 80.70059967041016
  },
  {
    seq: 187,
    censusNo: "07394",
    name: "Dickwella Minhath N.S.",
    shortName: "Dickwella Minhath N.S.",
    address: "Sandis Road, Dickwella",
    districtCode: 32,
    districtName: "Matara",
    provinceCode: 3,
    provinceName: "Southern",
    zone: "Matara",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: null,
    grade5CutoffTamil: null,
    latitude: 5.971798896789551,
    longitude: 80.69239807128906
  },
  {
    seq: 188,
    censusNo: "07406",
    name: "Matara Mahinda Rajapaksha College",
    shortName: "Mahinda Rajapaksha College",
    address: "Sarasavi Uyana, Matara",
    districtCode: 32,
    districtName: "Matara",
    provinceCode: 3,
    provinceName: "Southern",
    zone: "Matara",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: 150,
    grade5CutoffTamil: null,
    latitude: 5.934660435,
    longitude: 80.57933044433594
  },
  {
    seq: 189,
    censusNo: "08001",
    name: "Walasmulla National School",
    shortName: "Walasmulla National School",
    address: "Walasmulla",
    districtCode: 33,
    districtName: "Hambantota",
    provinceCode: 3,
    provinceName: "Southern",
    zone: "Walasmulla",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: 146,
    grade5CutoffTamil: null,
    latitude: 6.148916244506836,
    longitude: 80.69573211669922
  },
  {
    seq: 190,
    censusNo: "08002",
    name: "Katuwana National School",
    shortName: "Katuwana National School",
    address: "Katuwana",
    districtCode: 33,
    districtName: "Hambantota",
    provinceCode: 3,
    provinceName: "Southern",
    zone: "Walasmulla",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: null,
    grade5CutoffTamil: null,
    latitude: 6.267679691314697,
    longitude: 80.68596649169922
  },
  {
    seq: 191,
    censusNo: "08038",
    name: "Weeraketiya Rajapaksha Central College",
    shortName: "Weeraketiya Rajapaksha Central College",
    address: "Weeraketiya",
    districtCode: 33,
    districtName: "Hambantota",
    provinceCode: 3,
    provinceName: "Southern",
    zone: "Walasmulla",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: 161,
    grade5CutoffTamil: null,
    latitude: 6.9754228591918945,
    longitude: 79.92364501953125
  },
  {
    seq: 192,
    censusNo: "08073",
    name: "Tangalle Boys National School",
    shortName: "Tangalle Boys National School",
    address: "Tangalle",
    districtCode: 33,
    districtName: "Hambantota",
    provinceCode: 3,
    provinceName: "Southern",
    zone: "Tangalle",
    gender: "Boys",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: 142,
    grade5CutoffTamil: null,
    latitude: 6.022561073303223,
    longitude: 80.79302978515625
  },
  {
    seq: 193,
    censusNo: "08074",
    name: "Tangalle Balika Vidyalaya",
    shortName: "Tangalle Balika Vidyalaya",
    address: "Tangalle",
    districtCode: 33,
    districtName: "Hambantota",
    provinceCode: 3,
    provinceName: "Southern",
    zone: "Tangalle",
    gender: "Girls",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: 144,
    grade5CutoffTamil: null,
    latitude: 6.021448135375977,
    longitude: 80.79536437988281
  },
  {
    seq: 194,
    censusNo: "08106",
    name: "Hungama Vijayaba National School",
    shortName: "Hungama Vijayaba National School",
    address: "Hungama",
    districtCode: 33,
    districtName: "Hambantota",
    provinceCode: 3,
    provinceName: "Southern",
    zone: "Hambantota",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: 151,
    grade5CutoffTamil: null,
    latitude: 6.111670970916748,
    longitude: 80.92938232421875
  },
  {
    seq: 195,
    censusNo: "08112",
    name: "Angunakolapelessa Mahanaga National School",
    shortName: "Angunakolapelessa Mahanaga National School",
    address: "Angunakolapelessa",
    districtCode: 33,
    districtName: "Hambantota",
    provinceCode: 3,
    provinceName: "Southern",
    zone: "Tangalle",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: null,
    grade5CutoffTamil: null,
    latitude: 6.163880348205566,
    longitude: 80.89282989501953
  },
  {
    seq: 196,
    censusNo: "08144",
    name: "Gatamanna Vijaya National School",
    shortName: "Gatamanna Vijaya National School",
    address: "Gatamanna",
    districtCode: 33,
    districtName: "Hambantota",
    provinceCode: 3,
    provinceName: "Southern",
    zone: "Tangalle",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: null,
    grade5CutoffTamil: null,
    latitude: null,
    longitude: null
  },
  {
    seq: 197,
    censusNo: "08154",
    name: "Puwakdandawa Dhammapala Balika Vidyalaya",
    shortName: "Puwakdandawa Dhammapala Balika Vidyalaya",
    address: "Puwakdandawa,Beliatta",
    districtCode: 33,
    districtName: "Hambantota",
    provinceCode: 3,
    provinceName: "Southern",
    zone: "Tangalle",
    gender: "Girls",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: null,
    grade5CutoffTamil: null,
    latitude: 6.041929244995117,
    longitude: 80.74353790283203
  },
  {
    seq: 198,
    censusNo: "08229",
    name: "Thissamaharama Debarawewa Central School",
    shortName: "Thissamaharama Debarawewa Central School",
    address: "Debarawewa, Thissamaharama",
    districtCode: 33,
    districtName: "Hambantota",
    provinceCode: 3,
    provinceName: "Southern",
    zone: "Hambantota",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: 152,
    grade5CutoffTamil: null,
    latitude: 6.2840776443481445,
    longitude: 81.26336669921875
  },
  {
    seq: 199,
    censusNo: "08275",
    name: "Ambalantota Therapuththa N.S",
    shortName: "Ambalantota Therapuththa N.S",
    address: "Ambalantota",
    districtCode: 33,
    districtName: "Hambantota",
    provinceCode: 3,
    provinceName: "Southern",
    zone: "Hambantota",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: 139,
    grade5CutoffTamil: null,
    latitude: 6.120002269744873,
    longitude: 81.02172852
  },
  {
    seq: 200,
    censusNo: "08276",
    name: "Hambantota St.Mary's College",
    shortName: "St.Mary's College",
    address: "Hambantota",
    districtCode: 33,
    districtName: "Hambantota",
    provinceCode: 3,
    provinceName: "Southern",
    zone: "Hambantota",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: null,
    grade5CutoffTamil: null,
    latitude: 6.128077507019043,
    longitude: 81.12113952636719
  },
  {
    seq: 201,
    censusNo: "08280",
    name: "Hamabantota Zahira N.S.",
    shortName: "Hamabantota Zahira N.S.",
    address: "Hamabantota",
    districtCode: 33,
    districtName: "Hambantota",
    provinceCode: 3,
    provinceName: "Southern",
    zone: "Hambantota",
    gender: "Mixed",
    mediums: [
      "Tamil"
    ],
    grade5CutoffSinhala: null,
    grade5CutoffTamil: null,
    latitude: 6.126145839691162,
    longitude: 81.12281799316406
  },
  {
    seq: 202,
    censusNo: "08289",
    name: "Sooriyawewa N.S",
    shortName: "Sooriyawewa N.S",
    address: "Vidyala Mawatha, Sooriyawewa",
    districtCode: 33,
    districtName: "Hambantota",
    provinceCode: 3,
    provinceName: "Southern",
    zone: "Hambantota",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: null,
    grade5CutoffTamil: null,
    latitude: 6.307457924,
    longitude: 80.99510955810547
  },
  {
    seq: 203,
    censusNo: "08339",
    name: "Beliatta Ruhunu Vijayaba National College",
    shortName: "Beliatta Ruhunu Vijayaba National College",
    address: "Sitinamaluwa, Beliatta",
    districtCode: 33,
    districtName: "Hambantota",
    provinceCode: 3,
    provinceName: "Southern",
    zone: "Tangalle",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: 145,
    grade5CutoffTamil: null,
    latitude: 6.032776832580566,
    longitude: 80.77114105
  },
  {
    seq: 204,
    censusNo: "08340",
    name: "Hambantota Tzu-Chi National School",
    shortName: "Tzu-Chi National School",
    address: "Siribopura, Hambantota",
    districtCode: 33,
    districtName: "Hambantota",
    provinceCode: 3,
    provinceName: "Southern",
    zone: "Hambantota",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: null,
    grade5CutoffTamil: null,
    latitude: 6.160247802734375,
    longitude: 81.13286590576172
  },
  {
    seq: 205,
    censusNo: "08346",
    name: "Sri Lanka Singapore Frienship College",
    shortName: "Sri Lanka Singapore Frienship College",
    address: "Kondagala, Weerakatiya",
    districtCode: 33,
    districtName: "Hambantota",
    provinceCode: 3,
    provinceName: "Southern",
    zone: "Walasmulla",
    gender: "Girls",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: 152,
    grade5CutoffTamil: null,
    latitude: 6.1397809982299805,
    longitude: 80.75571442
  },
  {
    seq: 206,
    censusNo: "09166",
    name: "Manipay Hindu College (National School)",
    shortName: "Manipay Hindu College (National School)",
    address: "Sangarapillai Road, Manipay",
    districtCode: 41,
    districtName: "Jaffna",
    provinceCode: 4,
    provinceName: "Northern",
    zone: "Valikamam",
    gender: "Mixed",
    mediums: [
      "Tamil"
    ],
    grade5CutoffSinhala: null,
    grade5CutoffTamil: null,
    latitude: 9.715048789978027,
    longitude: 79.99289703
  },
  {
    seq: 207,
    censusNo: "09269",
    name: "Nelliady Central College",
    shortName: "Nelliady Central College",
    address: "Karaveddy",
    districtCode: 41,
    districtName: "Jaffna",
    provinceCode: 4,
    provinceName: "Northern",
    zone: "Vadamarachchi",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: null,
    grade5CutoffTamil: null,
    latitude: 9.803188324,
    longitude: 80.20034790039062
  },
  {
    seq: 208,
    censusNo: "09333",
    name: "Point Pedro Methodist Girls' High School",
    shortName: "Point Pedro Methodist Girls' High School",
    address: "Point Pedro",
    districtCode: 41,
    districtName: "Jaffna",
    provinceCode: 4,
    provinceName: "Northern",
    zone: "Vadamarachchi",
    gender: "Girls",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: null,
    grade5CutoffTamil: null,
    latitude: 9.829191207885742,
    longitude: 80.23036193847656
  },
  {
    seq: 209,
    censusNo: "09353",
    name: "Chavakachcheri Hindu College",
    shortName: "Chavakachcheri Hindu College",
    address: "Kandy Road, Chavakachcheri",
    districtCode: 41,
    districtName: "Jaffna",
    provinceCode: 4,
    provinceName: "Northern",
    zone: "Thennamarachchi",
    gender: "Mixed",
    mediums: [
      "Tamil"
    ],
    grade5CutoffSinhala: null,
    grade5CutoffTamil: 132,
    latitude: 9.664623260498047,
    longitude: 80.17272186279297
  },
  {
    seq: 210,
    censusNo: "09416",
    name: "Jaffna Hindu College",
    shortName: "Hindu College",
    address: "Kks Road Jaffna",
    districtCode: 41,
    districtName: "Jaffna",
    provinceCode: 4,
    provinceName: "Northern",
    zone: "Jaffna",
    gender: "Boys",
    mediums: [
      "Tamil"
    ],
    grade5CutoffSinhala: null,
    grade5CutoffTamil: 139,
    latitude: 9.678354263305664,
    longitude: 80.00975799560547
  },
  {
    seq: 211,
    censusNo: "09456",
    name: "Jaffna Central College",
    shortName: "Central College",
    address: "Jaffna",
    districtCode: 41,
    districtName: "Jaffna",
    provinceCode: 4,
    provinceName: "Northern",
    zone: "Jaffna",
    gender: "Boys",
    mediums: [
      "Tamil"
    ],
    grade5CutoffSinhala: null,
    grade5CutoffTamil: 132,
    latitude: 9.661676406860352,
    longitude: 80.01190948486328
  },
  {
    seq: 212,
    censusNo: "09457",
    name: "Jaffna Holy Family Convent National School",
    shortName: "Holy Family Convent National School",
    address: "Vembady Road, Jaffna",
    districtCode: 41,
    districtName: "Jaffna",
    provinceCode: 4,
    provinceName: "Northern",
    zone: "Jaffna",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: null,
    grade5CutoffTamil: null,
    latitude: null,
    longitude: null
  },
  {
    seq: 213,
    censusNo: "09465",
    name: "Jaffna Vembadi Girls High School",
    shortName: "Vembadi Girls High School",
    address: "1st Cross Street, Jaffna",
    districtCode: 41,
    districtName: "Jaffna",
    provinceCode: 4,
    provinceName: "Northern",
    zone: "Jaffna",
    gender: "Girls",
    mediums: [
      "Tamil"
    ],
    grade5CutoffSinhala: null,
    grade5CutoffTamil: 145,
    latitude: null,
    longitude: null
  },
  {
    seq: 214,
    censusNo: "10001",
    name: "Kilinochchi Madhya Maha Vidyalayam",
    shortName: "Madhya Maha Vidyalayam",
    address: "A9 Road, Ananthapuram, Kilinochchi",
    districtCode: 45,
    districtName: "Kilinochchi",
    provinceCode: 4,
    provinceName: "Northern",
    zone: "Kilinochchi",
    gender: "Mixed",
    mediums: [
      "Tamil"
    ],
    grade5CutoffSinhala: null,
    grade5CutoffTamil: 132,
    latitude: 9.381329536437988,
    longitude: 80.40898132324219
  },
  {
    seq: 215,
    censusNo: "10011",
    name: "Mulankavil Maha Vidyalayam",
    shortName: "Mulankavil Maha Vidyalayam",
    address: "Vinayakapuram, Poonakary",
    districtCode: 45,
    districtName: "Kilinochchi",
    provinceCode: 4,
    provinceName: "Northern",
    zone: "Kilinochchi",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: null,
    grade5CutoffTamil: null,
    latitude: 9.244859695,
    longitude: 80.14038086
  },
  {
    seq: 216,
    censusNo: "10038",
    name: "Pallai Central College",
    shortName: "Pallai Central College",
    address: "A-09 Road, Pallai",
    districtCode: 45,
    districtName: "Kilinochchi",
    provinceCode: 4,
    provinceName: "Northern",
    zone: "Kilinochchi",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: null,
    grade5CutoffTamil: null,
    latitude: 9.610159873962402,
    longitude: 80.33045959472656
  },
  {
    seq: 217,
    censusNo: "11001",
    name: "Sithivinayagar Hindu College",
    shortName: "Sithivinayagar Hindu College",
    address: "Uppukulam Mannar",
    districtCode: 42,
    districtName: "Mannar",
    provinceCode: 4,
    provinceName: "Northern",
    zone: "Mannar",
    gender: "Mixed",
    mediums: [
      "Tamil"
    ],
    grade5CutoffSinhala: null,
    grade5CutoffTamil: null,
    latitude: 8.978995323181152,
    longitude: 79.91764068603516
  },
  {
    seq: 218,
    censusNo: "11002",
    name: "Mannar St. Xaviers Boys College",
    shortName: "St. Xaviers Boys College",
    address: "Sinnakadai, Mannar",
    districtCode: 42,
    districtName: "Mannar",
    provinceCode: 4,
    provinceName: "Northern",
    zone: "Mannar",
    gender: "Boys",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: null,
    grade5CutoffTamil: null,
    latitude: 8.985984802246094,
    longitude: 79.90665435791016
  },
  {
    seq: 219,
    censusNo: "11003",
    name: "St. Xavier's Girls' College",
    shortName: "St. Xavier's Girls' College",
    address: "Sinnakadai, Mannar",
    districtCode: 42,
    districtName: "Mannar",
    provinceCode: 4,
    provinceName: "Northern",
    zone: "Mannar",
    gender: "Girls",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: null,
    grade5CutoffTamil: null,
    latitude: 8.980856895446777,
    longitude: 79.90617370605469
  },
  {
    seq: 220,
    censusNo: "11025",
    name: "Al-Azhar M.V.",
    shortName: "Al-Azhar M.V.",
    address: "Moorstreet, Mannar",
    districtCode: 42,
    districtName: "Mannar",
    provinceCode: 4,
    provinceName: "Northern",
    zone: "Mannar",
    gender: "Mixed",
    mediums: [
      "Tamil"
    ],
    grade5CutoffSinhala: null,
    grade5CutoffTamil: null,
    latitude: 8.980652809143066,
    longitude: 79.91248321533203
  },
  {
    seq: 221,
    censusNo: "11035",
    name: "Musali National School",
    shortName: "Musali National School",
    address: "Musali, Chilawathuari",
    districtCode: 42,
    districtName: "Mannar",
    provinceCode: 4,
    provinceName: "Northern",
    zone: "Mannar",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: null,
    grade5CutoffTamil: null,
    latitude: 8.760769844055176,
    longitude: 79.95308685302734
  },
  {
    seq: 222,
    censusNo: "12003",
    name: "Vidyananda College",
    shortName: "Vidyananda College",
    address: "Mulliyawalai",
    districtCode: 44,
    districtName: "Mullaitivu",
    provinceCode: 4,
    provinceName: "Northern",
    zone: "Mullaitivu",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: null,
    grade5CutoffTamil: null,
    latitude: 9.224040985107422,
    longitude: 80.78031158447266
  },
  {
    seq: 223,
    censusNo: "12048",
    name: "Mallavi Central College",
    shortName: "Mallavi Central College",
    address: "Yogapuram",
    districtCode: 44,
    districtName: "Mullaitivu",
    provinceCode: 4,
    provinceName: "Northern",
    zone: "Thunukkai",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: null,
    grade5CutoffTamil: null,
    latitude: 9.140932083129883,
    longitude: 80.29319
  },
  {
    seq: 224,
    censusNo: "13001",
    name: "Vavuniya Rambaikulam Girls Maha Vidyalayam",
    shortName: "Rambaikulam Girls Maha Vidyalayam",
    address: "Rambaikulam Vavuniya",
    districtCode: 43,
    districtName: "Vavuniya",
    provinceCode: 4,
    provinceName: "Northern",
    zone: "Vavuniya",
    gender: "Girls",
    mediums: [
      "Tamil"
    ],
    grade5CutoffSinhala: null,
    grade5CutoffTamil: 132,
    latitude: 8.750946044921875,
    longitude: 80.50182342529297
  },
  {
    seq: 225,
    censusNo: "13002",
    name: "Vavuniya Tamil M.M.V.",
    shortName: "Tamil M.M.V.",
    address: "Kandy Road, Vavuniya",
    districtCode: 43,
    districtName: "Vavuniya",
    provinceCode: 4,
    provinceName: "Northern",
    zone: "Vavuniya",
    gender: "Mixed",
    mediums: [
      "Tamil"
    ],
    grade5CutoffSinhala: null,
    grade5CutoffTamil: 132,
    latitude: 8.750086784362793,
    longitude: 80.49495697021484
  },
  {
    seq: 226,
    censusNo: "13004",
    name: "Vavuniya Muslim Maha Vidyalayam",
    shortName: "Muslim Maha Vidyalayam",
    address: "Mannar Road Paddanichoor Vavuniya",
    districtCode: 43,
    districtName: "Vavuniya",
    provinceCode: 4,
    provinceName: "Northern",
    zone: "Vavuniya",
    gender: "Mixed",
    mediums: [
      "Tamil"
    ],
    grade5CutoffSinhala: null,
    grade5CutoffTamil: null,
    latitude: 8.763348579406738,
    longitude: 80.48043823242188
  },
  {
    seq: 227,
    censusNo: "13110",
    name: "Gamini National School",
    shortName: "Gamini National School",
    address: "Mannar Road Vavuniya",
    districtCode: 43,
    districtName: "Vavuniya",
    provinceCode: 4,
    provinceName: "Northern",
    zone: "Vavuniya",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: null,
    grade5CutoffTamil: null,
    latitude: 8.761814117,
    longitude: 80.49249267578125
  },
  {
    seq: 228,
    censusNo: "13111",
    name: "Madukanda Maha Vidiyalaya (National School)",
    shortName: "Madukanda Maha Vidiyalaya (National School)",
    address: "Madukanda Vavuniya",
    districtCode: 43,
    districtName: "Vavuniya",
    provinceCode: 4,
    provinceName: "Northern",
    zone: "Vavuniya",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: null,
    grade5CutoffTamil: null,
    latitude: null,
    longitude: null
  },
  {
    seq: 229,
    censusNo: "14018",
    name: "Oddamavadi Centerl College",
    shortName: "Oddamavadi Centerl College",
    address: "Oddamavadi",
    districtCode: 51,
    districtName: "Batticaloa",
    provinceCode: 5,
    provinceName: "Eastern",
    zone: "Batticaloa Central",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: null,
    grade5CutoffTamil: null,
    latitude: 7.910896301269531,
    longitude: 81.52313232421875
  },
  {
    seq: 230,
    censusNo: "14022",
    name: "Valaicheanai An-Noor Maha Vidyalayam",
    shortName: "Valaicheanai An-Noor Maha Vidyalayam",
    address: "Main Cross Road, Valacheanai-5",
    districtCode: 51,
    districtName: "Batticaloa",
    provinceCode: 5,
    provinceName: "Eastern",
    zone: "Batticaloa Central",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: null,
    grade5CutoffTamil: null,
    latitude: 7.923804283,
    longitude: 81.52479553222656
  },
  {
    seq: 231,
    censusNo: "14031",
    name: "Valaichenai Hindu College",
    shortName: "Valaichenai Hindu College",
    address: "Kalkudah Road, Valaichenai",
    districtCode: 51,
    districtName: "Batticaloa",
    provinceCode: 5,
    provinceName: "Eastern",
    zone: "Kalkudah",
    gender: "Mixed",
    mediums: [
      "Tamil"
    ],
    grade5CutoffSinhala: null,
    grade5CutoffTamil: 134,
    latitude: 7.926058769226074,
    longitude: 81.52965545654297
  },
  {
    seq: 232,
    censusNo: "14081",
    name: "Alighar Central College",
    shortName: "Alighar Central College",
    address: "Main Street, Eravur",
    districtCode: 51,
    districtName: "Batticaloa",
    provinceCode: 5,
    provinceName: "Eastern",
    zone: "Batticaloa Central",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: null,
    grade5CutoffTamil: null,
    latitude: 7.777018070220947,
    longitude: 81.60144043
  },
  {
    seq: 233,
    censusNo: "14087",
    name: "Macan Markar Maha Vidyalaya",
    shortName: "Macan Markar Maha Vidyalaya",
    address: "Meerakerny Road, Eravur",
    districtCode: 51,
    districtName: "Batticaloa",
    provinceCode: 5,
    provinceName: "Eastern",
    zone: "Batticaloa Central",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: null,
    grade5CutoffTamil: null,
    latitude: 7.787847042,
    longitude: 81.61476898
  },
  {
    seq: 234,
    censusNo: "14115",
    name: "Batticaloa Vincent Girls' High School",
    shortName: "Vincent Girls' High School",
    address: "Chapel Street, Batticaloa",
    districtCode: 51,
    districtName: "Batticaloa",
    provinceCode: 5,
    provinceName: "Eastern",
    zone: "Batticaloa",
    gender: "Girls",
    mediums: [
      "Tamil"
    ],
    grade5CutoffSinhala: null,
    grade5CutoffTamil: 139,
    latitude: 7.711884498596191,
    longitude: 81.69695281982422
  },
  {
    seq: 235,
    censusNo: "14117",
    name: "Batticaloa St. Michael's College",
    shortName: "St. Michael's College",
    address: "1 Central Road, Batticaloa",
    districtCode: 51,
    districtName: "Batticaloa",
    provinceCode: 5,
    provinceName: "Eastern",
    zone: "Batticaloa",
    gender: "Boys",
    mediums: [
      "Tamil"
    ],
    grade5CutoffSinhala: null,
    grade5CutoffTamil: 132,
    latitude: 6.913900375366211,
    longitude: 79.85308074951172
  },
  {
    seq: 236,
    censusNo: "14118",
    name: "Batticaloa St. Cecilia's Girls' College",
    shortName: "St. Cecilia's Girls' College",
    address: "2nd Cross Road, Batticaloa",
    districtCode: 51,
    districtName: "Batticaloa",
    provinceCode: 5,
    provinceName: "Eastern",
    zone: "Batticaloa",
    gender: "Girls",
    mediums: [
      "Tamil"
    ],
    grade5CutoffSinhala: null,
    grade5CutoffTamil: 132,
    latitude: 7.710962772369385,
    longitude: 81.69195556640625
  },
  {
    seq: 237,
    censusNo: "14129",
    name: "Shivananda Vidyalayam",
    shortName: "Shivananda Vidyalayam",
    address: "Kallady Uppodai, Batticaloa",
    districtCode: 51,
    districtName: "Batticaloa",
    provinceCode: 5,
    provinceName: "Eastern",
    zone: "Batticaloa",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: null,
    grade5CutoffTamil: null,
    latitude: null,
    longitude: null
  },
  {
    seq: 238,
    censusNo: "14145",
    name: "Kattankudy Madya Maha Vidyalayam",
    shortName: "Kattankudy Madya Maha Vidyalayam",
    address: "322, Beach Road, New Kattankudy 06",
    districtCode: 51,
    districtName: "Batticaloa",
    provinceCode: 5,
    provinceName: "Eastern",
    zone: "Batticaloa Central",
    gender: "Boys",
    mediums: [
      "Tamil"
    ],
    grade5CutoffSinhala: null,
    grade5CutoffTamil: 132,
    latitude: null,
    longitude: null
  },
  {
    seq: 239,
    censusNo: "14147",
    name: "Kattankudy Meera Balika Maha Vidyalayam",
    shortName: "Kattankudy Meera Balika Maha Vidyalayam",
    address: "Main Street, Kattankudy",
    districtCode: 51,
    districtName: "Batticaloa",
    provinceCode: 5,
    provinceName: "Eastern",
    zone: "Batticaloa Central",
    gender: "Girls",
    mediums: [
      "Tamil"
    ],
    grade5CutoffSinhala: null,
    grade5CutoffTamil: 136,
    latitude: 7.677587032318115,
    longitude: 81.72860717773438
  },
  {
    seq: 240,
    censusNo: "14180",
    name: "Kaluthavalai Maha Vidyalayam",
    shortName: "Kaluthavalai Maha Vidyalayam",
    address: "Kaluthavalai, Paddirippu",
    districtCode: 51,
    districtName: "Batticaloa",
    provinceCode: 5,
    provinceName: "Eastern",
    zone: "Paddrippu",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: null,
    grade5CutoffTamil: null,
    latitude: 7.546938419342041,
    longitude: 81.78556060791016
  },
  {
    seq: 241,
    censusNo: "14185",
    name: "Paddiruppu Madhya Maha Vidyalayam",
    shortName: "Paddiruppu Madhya Maha Vidyalayam",
    address: "Kaluwanchikudy - 30200",
    districtCode: 51,
    districtName: "Batticaloa",
    provinceCode: 5,
    provinceName: "Eastern",
    zone: "Paddrippu",
    gender: "Mixed",
    mediums: [
      "Tamil"
    ],
    grade5CutoffSinhala: null,
    grade5CutoffTamil: 139,
    latitude: 7.517102241516113,
    longitude: 81.78422546386719
  },
  {
    seq: 242,
    censusNo: "15002",
    name: "Padiyathalawa National School",
    shortName: "Padiyathalawa National School",
    address: "Padiyathalawa",
    districtCode: 52,
    districtName: "Ampara",
    provinceCode: 5,
    provinceName: "Eastern",
    zone: "Mahaoya",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: null,
    grade5CutoffTamil: null,
    latitude: 7.406240940093994,
    longitude: 81.24082184
  },
  {
    seq: 243,
    censusNo: "15037",
    name: "Uhana Maha Vidyalaya",
    shortName: "Uhana Maha Vidyalaya",
    address: "Uhana",
    districtCode: 52,
    districtName: "Ampara",
    provinceCode: 5,
    provinceName: "Eastern",
    zone: "Ampara",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: null,
    grade5CutoffTamil: null,
    latitude: 7.3684282302856445,
    longitude: 81.63991547
  },
  {
    seq: 244,
    censusNo: "15067",
    name: "Ampara D.S.Senanayaka Madya Maha Vidyalaya",
    shortName: "D.S.Senanayaka Madya Maha Vidyalaya",
    address: "Ampara",
    districtCode: 52,
    districtName: "Ampara",
    provinceCode: 5,
    provinceName: "Eastern",
    zone: "Ampara",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: 143,
    grade5CutoffTamil: null,
    latitude: 7.303026199,
    longitude: 81.66987609863281
  },
  {
    seq: 245,
    censusNo: "15080",
    name: "Ampara Bandaranayaka Balika Maha Vidyalaya",
    shortName: "Bandaranayaka Balika Maha Vidyalaya",
    address: "Ampara",
    districtCode: 52,
    districtName: "Ampara",
    provinceCode: 5,
    provinceName: "Eastern",
    zone: "Ampara",
    gender: "Girls",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: 137,
    grade5CutoffTamil: null,
    latitude: 7.304140090942383,
    longitude: 81.67511749267578
  },
  {
    seq: 246,
    censusNo: "15152",
    name: "Dehiattakandiya M.M.V.",
    shortName: "Dehiattakandiya M.M.V.",
    address: "Dehiattakandiya",
    districtCode: 52,
    districtName: "Ampara",
    provinceCode: 5,
    provinceName: "Eastern",
    zone: "Dehiattakandiya",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: 133,
    grade5CutoffTamil: null,
    latitude: 7.667174816131592,
    longitude: 81.04656982421875
  },
  {
    seq: 247,
    censusNo: "15161",
    name: "Sammanthurai Muslim Madya Maha Vidyalayam",
    shortName: "Sammanthurai Muslim Madya Maha Vidyalayam",
    address: "Ampara Road, Sammanthurai",
    districtCode: 52,
    districtName: "Ampara",
    provinceCode: 5,
    provinceName: "Eastern",
    zone: "Sammanthurai",
    gender: "Mixed",
    mediums: [
      "Tamil"
    ],
    grade5CutoffSinhala: null,
    grade5CutoffTamil: 145,
    latitude: 7.370190143585205,
    longitude: 81.80761719
  },
  {
    seq: 248,
    censusNo: "15169",
    name: "Sammanthurai Al-Marjan Muslim Ladies College",
    shortName: "Sammanthurai Al-Marjan Muslim Ladies College",
    address: "Ampara Road, Sammanthurai",
    districtCode: 52,
    districtName: "Ampara",
    provinceCode: 5,
    provinceName: "Eastern",
    zone: "Sammanthurai",
    gender: "Girls",
    mediums: [
      "Tamil"
    ],
    grade5CutoffSinhala: null,
    grade5CutoffTamil: null,
    latitude: 7.363066196,
    longitude: 81.79781341552734
  },
  {
    seq: 249,
    censusNo: "15200",
    name: "Sainthamaruthu Zahira College",
    shortName: "Sainthamaruthu Zahira College",
    address: "Zahira College Road, Sainthamaruthu - 02",
    districtCode: 52,
    districtName: "Ampara",
    provinceCode: 5,
    provinceName: "Eastern",
    zone: "Kalmunai",
    gender: "Boys",
    mediums: [
      "Tamil"
    ],
    grade5CutoffSinhala: null,
    grade5CutoffTamil: 138,
    latitude: 7.399468898773193,
    longitude: 81.83723449707031
  },
  {
    seq: 250,
    censusNo: "15202",
    name: "Kalmunai Carmel Fatima College (National School)",
    shortName: "Kalmunai Carmel Fatima College (National School)",
    address: "Yard Road, Kalmunai - 01b",
    districtCode: 52,
    districtName: "Ampara",
    provinceCode: 5,
    provinceName: "Eastern",
    zone: "Kalmunai",
    gender: "Mixed",
    mediums: [
      "Tamil"
    ],
    grade5CutoffSinhala: null,
    grade5CutoffTamil: 137,
    latitude: 7.419587135314941,
    longitude: 81.82211303710938
  },
  {
    seq: 251,
    censusNo: "15203",
    name: "Kalmunai Mahmud Ladies College",
    shortName: "Kalmunai Mahmud Ladies College",
    address: "Zahira College Road, Kalmunai",
    districtCode: 52,
    districtName: "Ampara",
    provinceCode: 5,
    provinceName: "Eastern",
    zone: "Kalmunai",
    gender: "Girls",
    mediums: [
      "Tamil"
    ],
    grade5CutoffSinhala: null,
    grade5CutoffTamil: 149,
    latitude: 7.3989691734313965,
    longitude: 81.83239746
  },
  {
    seq: 252,
    censusNo: "15231",
    name: "Akkaraipattu Muslim Central College (National Sc)",
    shortName: "Akkaraipattu Muslim Central College (National Sc)",
    address: "Akkaraipattu-06",
    districtCode: 52,
    districtName: "Ampara",
    provinceCode: 5,
    provinceName: "Eastern",
    zone: "Akkaraipattu",
    gender: "Mixed",
    mediums: [
      "Tamil"
    ],
    grade5CutoffSinhala: null,
    grade5CutoffTamil: 132,
    latitude: 7.225523948669434,
    longitude: 81.83636474609375
  },
  {
    seq: 253,
    censusNo: "15233",
    name: "Irakkamam Ashraf Central College",
    shortName: "Irakkamam Ashraf Central College",
    address: "Irakkamam-09",
    districtCode: 52,
    districtName: "Ampara",
    provinceCode: 5,
    provinceName: "Eastern",
    zone: "Sammanthurai",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: null,
    grade5CutoffTamil: null,
    latitude: 7.246461868286133,
    longitude: 81.72329711914062
  },
  {
    seq: 254,
    censusNo: "15248",
    name: "Addalaicenai M.M.V.",
    shortName: "Addalaicenai M.M.V.",
    address: "Main Street Addalaicenai",
    districtCode: 52,
    districtName: "Ampara",
    provinceCode: 5,
    provinceName: "Eastern",
    zone: "Akkaraipattu",
    gender: "Mixed",
    mediums: [
      "Tamil"
    ],
    grade5CutoffSinhala: null,
    grade5CutoffTamil: 132,
    latitude: 7.244091987609863,
    longitude: 81.85276794433594
  },
  {
    seq: 255,
    censusNo: "15265",
    name: "Al-Ashraq Madya Maha Vidyalaya (National School)",
    shortName: "Al-Ashraq Madya Maha Vidyalaya (National School)",
    address: "Main Street, Nintavur-25",
    districtCode: 52,
    districtName: "Ampara",
    provinceCode: 5,
    provinceName: "Eastern",
    zone: "Kalmunai",
    gender: "Mixed",
    mediums: [
      "Tamil"
    ],
    grade5CutoffSinhala: null,
    grade5CutoffTamil: 132,
    latitude: null,
    longitude: null
  },
  {
    seq: 256,
    censusNo: "15290",
    name: "Sri Ramakrishna College",
    shortName: "Sri Ramakrishna College",
    address: "Akkaraipattu",
    districtCode: 52,
    districtName: "Ampara",
    provinceCode: 5,
    provinceName: "Eastern",
    zone: "Thirukkovil",
    gender: "Mixed",
    mediums: [
      "Tamil"
    ],
    grade5CutoffSinhala: null,
    grade5CutoffTamil: 144,
    latitude: 7.2102742195129395,
    longitude: 81.84327697753906
  },
  {
    seq: 257,
    censusNo: "15291",
    name: "Thambiluvil Madhya Maha Vidyalayam (Ns)",
    shortName: "Thambiluvil Madhya Maha Vidyalayam (Ns)",
    address: "Main Street, Thambiluvil",
    districtCode: 52,
    districtName: "Ampara",
    provinceCode: 5,
    provinceName: "Eastern",
    zone: "Thirukkovil",
    gender: "Mixed",
    mediums: [
      "Tamil"
    ],
    grade5CutoffSinhala: null,
    grade5CutoffTamil: 143,
    latitude: null,
    longitude: null
  },
  {
    seq: 258,
    censusNo: "15292",
    name: "Pottuvil Central College",
    shortName: "Pottuvil Central College",
    address: "R.M.Nagar, Pottuvil-27",
    districtCode: 52,
    districtName: "Ampara",
    provinceCode: 5,
    provinceName: "Eastern",
    zone: "Akkaraipattu",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: null,
    grade5CutoffTamil: null,
    latitude: 6.879158973693848,
    longitude: 81.8347168
  },
  {
    seq: 259,
    censusNo: "16031",
    name: "Mahadiwulwewa M.V.",
    shortName: "Mahadiwulwewa M.V.",
    address: "Mahadiwulwewa",
    districtCode: 53,
    districtName: "Trincomalee",
    provinceCode: 5,
    provinceName: "Eastern",
    zone: "Trincomalee North",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: null,
    grade5CutoffTamil: null,
    latitude: 8.616982460021973,
    longitude: 80.96195983886719
  },
  {
    seq: 260,
    censusNo: "16054",
    name: "Trincomalee Sri Shanmuga Hindu Ladies' College",
    shortName: "Sri Shanmuga Hindu Ladies' College",
    address: "Vidyalayam Road, Trincomalee",
    districtCode: 53,
    districtName: "Trincomalee",
    provinceCode: 5,
    provinceName: "Eastern",
    zone: "Trincomalee",
    gender: "Girls",
    mediums: [
      "Tamil"
    ],
    grade5CutoffSinhala: null,
    grade5CutoffTamil: null,
    latitude: 8.575231552124023,
    longitude: 81.23093414
  },
  {
    seq: 261,
    censusNo: "16057",
    name: "Sinhala Madya Maha Vidyalaya",
    shortName: "Sinhala Madya Maha Vidyalaya",
    address: "Inner Harbour Road, Trincomalee",
    districtCode: 53,
    districtName: "Trincomalee",
    provinceCode: 5,
    provinceName: "Eastern",
    zone: "Trincomalee",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: null,
    grade5CutoffTamil: null,
    latitude: 8.575302124023438,
    longitude: 81.22368621826172
  },
  {
    seq: 262,
    censusNo: "16059",
    name: "Rajakeeya Vidyaloka M.V. (N.S.) -Trincomalee",
    shortName: "Rajakeeya Vidyaloka M.V. (N.S.) -Trincomalee",
    address: "North Coast Road, Trincomalee",
    districtCode: 53,
    districtName: "Trincomalee",
    provinceCode: 5,
    provinceName: "Eastern",
    zone: "Trincomalee",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: null,
    grade5CutoffTamil: null,
    latitude: 8.581621170043945,
    longitude: 81.22808837890625
  },
  {
    seq: 263,
    censusNo: "16068",
    name: "Trincomalee St. Mary's College",
    shortName: "St. Mary's College",
    address: "Dockyard Road, Trincomalee",
    districtCode: 53,
    districtName: "Trincomalee",
    provinceCode: 5,
    provinceName: "Eastern",
    zone: "Trincomalee",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: null,
    grade5CutoffTamil: null,
    latitude: 8.571192741394043,
    longitude: 81.23447418
  },
  {
    seq: 264,
    censusNo: "16070",
    name: "Trincomalee R.K.M.Sri Koneswara Hindu College",
    shortName: "R.K.M.Sri Koneswara Hindu College",
    address: "246, Dockyard Road Trincomalee",
    districtCode: 53,
    districtName: "Trincomalee",
    provinceCode: 5,
    provinceName: "Eastern",
    zone: "Trincomalee",
    gender: "Mixed",
    mediums: [
      "Tamil"
    ],
    grade5CutoffSinhala: null,
    grade5CutoffTamil: null,
    latitude: 8.574234962463379,
    longitude: 81.23310089111328
  },
  {
    seq: 265,
    censusNo: "16073",
    name: "Trincomalee St. Joseph's College",
    shortName: "St. Joseph's College",
    address: "Power House Road, Trincomalee",
    districtCode: 53,
    districtName: "Trincomalee",
    provinceCode: 5,
    provinceName: "Eastern",
    zone: "Trincomalee",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: null,
    grade5CutoffTamil: null,
    latitude: 8.573111534118652,
    longitude: 81.22756195
  },
  {
    seq: 266,
    censusNo: "16121",
    name: "Kanthale Agrabodhi National School",
    shortName: "Kanthale Agrabodhi National School",
    address: "Kanthale",
    districtCode: 53,
    districtName: "Trincomalee",
    provinceCode: 5,
    provinceName: "Eastern",
    zone: "Kantale",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: 133,
    grade5CutoffTamil: null,
    latitude: 8.354574203491211,
    longitude: 81.00592803955078
  },
  {
    seq: 267,
    censusNo: "16175",
    name: "Muttur Central College",
    shortName: "Muttur Central College",
    address: "Knox Road, Mutur-05",
    districtCode: 53,
    districtName: "Trincomalee",
    provinceCode: 5,
    provinceName: "Eastern",
    zone: "Muttur",
    gender: "Mixed",
    mediums: [
      "Tamil"
    ],
    grade5CutoffSinhala: null,
    grade5CutoffTamil: 135,
    latitude: 8.449240684509277,
    longitude: 81.25595092773438
  },
  {
    seq: 268,
    censusNo: "16182",
    name: "Kinniya Al-Aqsha College",
    shortName: "Kinniya Al-Aqsha College",
    address: "Main Street, Kinniya",
    districtCode: 53,
    districtName: "Trincomalee",
    provinceCode: 5,
    provinceName: "Eastern",
    zone: "Kinniya",
    gender: "Mixed",
    mediums: [
      "Tamil"
    ],
    grade5CutoffSinhala: null,
    grade5CutoffTamil: null,
    latitude: null,
    longitude: null
  },
  {
    seq: 269,
    censusNo: "16186",
    name: "Kinniya Muslim Girls' Maha Vidyalayam",
    shortName: "Kinniya Muslim Girls' Maha Vidyalayam",
    address: "Periya Kinniya, Kinniya-06",
    districtCode: 53,
    districtName: "Trincomalee",
    provinceCode: 5,
    provinceName: "Eastern",
    zone: "Kinniya",
    gender: "Girls",
    mediums: [
      "Tamil"
    ],
    grade5CutoffSinhala: null,
    grade5CutoffTamil: 133,
    latitude: 8.504652976989746,
    longitude: 81.17787170410156
  },
  {
    seq: 270,
    censusNo: "16187",
    name: "Kinniya Central College",
    shortName: "Kinniya Central College",
    address: "Main Street, Kinniya-05",
    districtCode: 53,
    districtName: "Trincomalee",
    provinceCode: 5,
    provinceName: "Eastern",
    zone: "Kinniya",
    gender: "Boys",
    mediums: [
      "Tamil"
    ],
    grade5CutoffSinhala: null,
    grade5CutoffTamil: 131,
    latitude: 8.497036933898926,
    longitude: 81.17835998535156
  },
  {
    seq: 271,
    censusNo: "17001",
    name: "Polgahawela Parakramabahu Madya Maha Vidyalaya",
    shortName: "Polgahawela Parakramabahu Madya Maha Vidyalaya",
    address: "Polgahawela",
    districtCode: 61,
    districtName: "Kurunegala",
    provinceCode: 6,
    provinceName: "North Western",
    zone: "Kurunegala",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: null,
    grade5CutoffTamil: null,
    latitude: 7.330846786499023,
    longitude: 80.30532836914062
  },
  {
    seq: 272,
    censusNo: "17003",
    name: "Uhumeeya D.S Senanayaka Madya Maha Vidyalaya",
    shortName: "Uhumeeya D.S Senanayaka Madya Maha Vidyalaya",
    address: "Uhumeeya",
    districtCode: 61,
    districtName: "Kurunegala",
    provinceCode: 6,
    provinceName: "North Western",
    zone: "Kurunegala",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: null,
    grade5CutoffTamil: null,
    latitude: 7.459597110748291,
    longitude: 80.29061126708984
  },
  {
    seq: 273,
    censusNo: "17094",
    name: "Mawathagama M.M.V.",
    shortName: "Mawathagama M.M.V.",
    address: "Kandy Road, Mawathagama",
    districtCode: 61,
    districtName: "Kurunegala",
    provinceCode: 6,
    provinceName: "North Western",
    zone: "Kurunegala",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: null,
    grade5CutoffTamil: null,
    latitude: 7.430427551269531,
    longitude: 80.44857025146484
  },
  {
    seq: 274,
    censusNo: "17095",
    name: "Sri Nishshanka M.M.V. (N.S.) - Indulgodakanda",
    shortName: "Sri Nishshanka M.M.V. (N.S.) - Indulgodakanda",
    address: "Indulgodakanda Kurunegala",
    districtCode: 61,
    districtName: "Kurunegala",
    provinceCode: 6,
    provinceName: "North Western",
    zone: "Kurunegala",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: null,
    grade5CutoffTamil: null,
    latitude: 7.424123764038086,
    longitude: 80.39987946
  },
  {
    seq: 275,
    censusNo: "17141",
    name: "Wariyapola Sri Sumangala M.M.V.",
    shortName: "Wariyapola Sri Sumangala M.M.V.",
    address: "Wariyapola",
    districtCode: 61,
    districtName: "Kurunegala",
    provinceCode: 6,
    provinceName: "North Western",
    zone: "Nikaweratiya",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: 140,
    grade5CutoffTamil: null,
    latitude: 7.6197967529296875,
    longitude: 80.23163604736328
  },
  {
    seq: 276,
    censusNo: "17199",
    name: "Ibbagamuwa Central College",
    shortName: "Ibbagamuwa Central College",
    address: "Ibbagamuwa",
    districtCode: 61,
    districtName: "Kurunegala",
    provinceCode: 6,
    provinceName: "North Western",
    zone: "Ibbagamuwa",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: null,
    grade5CutoffTamil: null,
    latitude: 7.537216663360596,
    longitude: 80.44956970214844
  },
  {
    seq: 277,
    censusNo: "17234",
    name: "Ganewaththa S.B.Herath M.M.V.",
    shortName: "Ganewaththa S.B.Herath M.M.V.",
    address: "Ganewaththa, Nikadalupotha.",
    districtCode: 61,
    districtName: "Kurunegala",
    provinceCode: 6,
    provinceName: "North Western",
    zone: "Ibbagamuwa",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: null,
    grade5CutoffTamil: null,
    latitude: 7.654911994934082,
    longitude: 80.34399414
  },
  {
    seq: 278,
    censusNo: "17265",
    name: "Narammala Mayurapada N.S.",
    shortName: "Narammala Mayurapada N.S.",
    address: "Narammala",
    districtCode: 61,
    districtName: "Kurunegala",
    provinceCode: 6,
    provinceName: "North Western",
    zone: "Giriulla",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: 146,
    grade5CutoffTamil: null,
    latitude: 7.427347183227539,
    longitude: 80.20927429199219
  },
  {
    seq: 279,
    censusNo: "17292",
    name: "Kurunegala Maliyadeva Balika Vidyalaya",
    shortName: "Maliyadeva Balika Vidyalaya",
    address: "Colombo Road, Kurunegala",
    districtCode: 61,
    districtName: "Kurunegala",
    provinceCode: 6,
    provinceName: "North Western",
    zone: "Kurunegala",
    gender: "Girls",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: 170,
    grade5CutoffTamil: null,
    latitude: 7.481945037841797,
    longitude: 80.36048126220703
  },
  {
    seq: 280,
    censusNo: "17293",
    name: "Kurunegala Maliyadeva College",
    shortName: "Maliyadeva College",
    address: "Negombo Road, Kurunegala",
    districtCode: 61,
    districtName: "Kurunegala",
    provinceCode: 6,
    provinceName: "North Western",
    zone: "Kurunegala",
    gender: "Boys",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: 169,
    grade5CutoffTamil: null,
    latitude: 7.486342430114746,
    longitude: 80.35726165771484
  },
  {
    seq: 281,
    censusNo: "17352",
    name: "Paragahadeniya National School",
    shortName: "Paragahadeniya National School",
    address: "Paragahadeniya",
    districtCode: 61,
    districtName: "Kurunegala",
    provinceCode: 6,
    provinceName: "North Western",
    zone: "Kurunegala",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: null,
    grade5CutoffTamil: null,
    latitude: 7.415364742279053,
    longitude: 80.47058868408203
  },
  {
    seq: 282,
    censusNo: "17361",
    name: "Alawwa Sri Rahula N.S",
    shortName: "Alawwa Sri Rahula N.S",
    address: "Alawwa",
    districtCode: 61,
    districtName: "Kurunegala",
    provinceCode: 6,
    provinceName: "North Western",
    zone: "Giriulla",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: 140,
    grade5CutoffTamil: null,
    latitude: 7.296396255493164,
    longitude: 80.23053741455078
  },
  {
    seq: 283,
    censusNo: "17391",
    name: "Bingiriya Sri Saranankara National School",
    shortName: "Bingiriya Sri Saranankara National School",
    address: "Bingiriya",
    districtCode: 61,
    districtName: "Kurunegala",
    provinceCode: 6,
    provinceName: "North Western",
    zone: "Kuliyapitiya",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: null,
    grade5CutoffTamil: null,
    latitude: 7.599451541900635,
    longitude: 79.93621826171875
  },
  {
    seq: 284,
    censusNo: "17420",
    name: "Nakkawatttha M.M.V.",
    shortName: "Nakkawatttha M.M.V.",
    address: "Nakkawatta",
    districtCode: 61,
    districtName: "Kurunegala",
    provinceCode: 6,
    provinceName: "North Western",
    zone: "Giriulla",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: null,
    grade5CutoffTamil: null,
    latitude: 7.455787181854248,
    longitude: 80.14002990722656
  },
  {
    seq: 285,
    censusNo: "17464",
    name: "Dummalasooriya J.R.Jayawardana M.M.V.",
    shortName: "Dummalasooriya J.R.Jayawardana M.M.V.",
    address: "Dummalasooriya",
    districtCode: 61,
    districtName: "Kurunegala",
    provinceCode: 6,
    provinceName: "North Western",
    zone: "Kuliyapitiya",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: null,
    grade5CutoffTamil: null,
    latitude: 7.502093315124512,
    longitude: 79.91721344
  },
  {
    seq: 286,
    censusNo: "17489",
    name: "Kuliyapitiya Central Colleage",
    shortName: "Kuliyapitiya Central Colleage",
    address: "Meegahakotuwa Kuliyapitiya",
    districtCode: 61,
    districtName: "Kurunegala",
    provinceCode: 6,
    provinceName: "North Western",
    zone: "Kuliyapitiya",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: 155,
    grade5CutoffTamil: null,
    latitude: null,
    longitude: null
  },
  {
    seq: 287,
    censusNo: "17490",
    name: "Kuliyapitiya Saranath Vidyalaya",
    shortName: "Kuliyapitiya Saranath Vidyalaya",
    address: "Kuliyapitiya",
    districtCode: 61,
    districtName: "Kurunegala",
    provinceCode: 6,
    provinceName: "North Western",
    zone: "Kuliyapitiya",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: 149,
    grade5CutoffTamil: null,
    latitude: 7.468855381011963,
    longitude: 80.04061889648438
  },
  {
    seq: 288,
    censusNo: "17522",
    name: "Sandalanka M.M.V.",
    shortName: "Sandalanka M.M.V.",
    address: "Sandalankawa",
    districtCode: 61,
    districtName: "Kurunegala",
    provinceCode: 6,
    provinceName: "North Western",
    zone: "Giriulla",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: 140,
    grade5CutoffTamil: null,
    latitude: 7.321711063,
    longitude: 79.96038055419922
  },
  {
    seq: 289,
    censusNo: "17549",
    name: "Giriulla Wickramashila N.S.",
    shortName: "Giriulla Wickramashila N.S.",
    address: "Giriulla",
    districtCode: 61,
    districtName: "Kurunegala",
    provinceCode: 6,
    provinceName: "North Western",
    zone: "Giriulla",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: null,
    grade5CutoffTamil: null,
    latitude: 7.326162815093994,
    longitude: 80.11566925048828
  },
  {
    seq: 290,
    censusNo: "17550",
    name: "Pannala National School",
    shortName: "Pannala National School",
    address: "Pannala",
    districtCode: 61,
    districtName: "Kurunegala",
    provinceCode: 6,
    provinceName: "North Western",
    zone: "Giriulla",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: null,
    grade5CutoffTamil: null,
    latitude: 7.326964378356934,
    longitude: 80.02368927001953
  },
  {
    seq: 291,
    censusNo: "17613",
    name: "Panduwasnuwara S.W.R.D.Bandaranayaka National School",
    shortName: "Panduwasnuwara S.W.R.D.Bandaranayaka National School",
    address: "Panduwasnuwara",
    districtCode: 61,
    districtName: "Kurunegala",
    provinceCode: 6,
    provinceName: "North Western",
    zone: "Kuliyapitiya",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: 142,
    grade5CutoffTamil: null,
    latitude: 7.605607032775879,
    longitude: 80.10010528564453
  },
  {
    seq: 292,
    censusNo: "17663",
    name: "Kekunagolla National School",
    shortName: "Kekunagolla National School",
    address: "Kekunagolla",
    districtCode: 61,
    districtName: "Kurunegala",
    provinceCode: 6,
    provinceName: "North Western",
    zone: "Giriulla",
    gender: "Mixed",
    mediums: [
      "Tamil"
    ],
    grade5CutoffSinhala: null,
    grade5CutoffTamil: 134,
    latitude: 7.501509189605713,
    longitude: 80.17210388183594
  },
  {
    seq: 293,
    censusNo: "17664",
    name: "Siyambalagaskotuwa Madeena National School",
    shortName: "Siyambalagaskotuwa Madeena National School",
    address: "Siyambalagaskotuwa",
    districtCode: 61,
    districtName: "Kurunegala",
    provinceCode: 6,
    provinceName: "North Western",
    zone: "Giriulla",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: null,
    grade5CutoffTamil: null,
    latitude: 7.491821765899658,
    longitude: 80.18877410888672
  },
  {
    seq: 294,
    censusNo: "17675",
    name: "Polpithigama N.S.",
    shortName: "Polpithigama N.S.",
    address: "Polpithigama",
    districtCode: 61,
    districtName: "Kurunegala",
    provinceCode: 6,
    provinceName: "North Western",
    zone: "Maho",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: null,
    grade5CutoffTamil: null,
    latitude: 7.816181659698486,
    longitude: 80.40247344970703
  },
  {
    seq: 295,
    censusNo: "17708",
    name: "Maho Vijayaba N.S.",
    shortName: "Maho Vijayaba N.S.",
    address: "Maho",
    districtCode: 61,
    districtName: "Kurunegala",
    provinceCode: 6,
    provinceName: "North Western",
    zone: "Maho",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: 140,
    grade5CutoffTamil: null,
    latitude: 7.823860168457031,
    longitude: 80.26538086
  },
  {
    seq: 296,
    censusNo: "17757",
    name: "Galgamuwa U B Wanninaya National College",
    shortName: "Galgamuwa U B Wanninaya National College",
    address: "Nanneriya Road, Galgamuwa",
    districtCode: 61,
    districtName: "Kurunegala",
    provinceCode: 6,
    provinceName: "North Western",
    zone: "Maho",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: null,
    grade5CutoffTamil: null,
    latitude: 7.996387958526611,
    longitude: 80.26526641845703
  },
  {
    seq: 297,
    censusNo: "17767",
    name: "Perakumpura National School",
    shortName: "Perakumpura National School",
    address: "R.L.B. Track 03, Solepura",
    districtCode: 61,
    districtName: "Kurunegala",
    provinceCode: 6,
    provinceName: "North Western",
    zone: "Maho",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: null,
    grade5CutoffTamil: null,
    latitude: 8.153810501098633,
    longitude: 80.14212799072266
  },
  {
    seq: 298,
    censusNo: "17771",
    name: "Meegalewa Mahweli N.S.",
    shortName: "Meegalewa Mahweli N.S.",
    address: "Meegalewa",
    districtCode: 61,
    districtName: "Kurunegala",
    provinceCode: 6,
    provinceName: "North Western",
    zone: "Maho",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: null,
    grade5CutoffTamil: null,
    latitude: 8.054177284240723,
    longitude: 80.34960938
  },
  {
    seq: 299,
    censusNo: "17838",
    name: "Nikaweratiya Mahasen N.S.",
    shortName: "Nikaweratiya Mahasen N.S.",
    address: "Nikaweratiya",
    districtCode: 61,
    districtName: "Kurunegala",
    provinceCode: 6,
    provinceName: "North Western",
    zone: "Nikaweratiya",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: 145,
    grade5CutoffTamil: null,
    latitude: 7.751093864440918,
    longitude: 80.11567687988281
  },
  {
    seq: 300,
    censusNo: "17867",
    name: "Sri Parackrama N.S.",
    shortName: "Sri Parackrama N.S.",
    address: "Kobeigane",
    districtCode: 61,
    districtName: "Kurunegala",
    provinceCode: 6,
    provinceName: "North Western",
    zone: "Nikaweratiya",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: null,
    grade5CutoffTamil: null,
    latitude: 7.515585899353027,
    longitude: 80.67362213134766
  },
  {
    seq: 301,
    censusNo: "18072",
    name: "Ananda National School",
    shortName: "Ananda National School",
    address: "Puttlam",
    districtCode: 62,
    districtName: "Puttalam",
    provinceCode: 6,
    provinceName: "North Western",
    zone: "Puttalam",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: null,
    grade5CutoffTamil: null,
    latitude: 8.021061897277832,
    longitude: 79.83611297607422
  },
  {
    seq: 302,
    censusNo: "18073",
    name: "Puttalam Zahira College",
    shortName: "Zahira College",
    address: "Mannar Road Puttalam",
    districtCode: 62,
    districtName: "Puttalam",
    provinceCode: 6,
    provinceName: "North Western",
    zone: "Puttalam",
    gender: "Boys",
    mediums: [
      "Tamil"
    ],
    grade5CutoffSinhala: null,
    grade5CutoffTamil: 131,
    latitude: 8.039847373962402,
    longitude: 79.82608795166016
  },
  {
    seq: 303,
    censusNo: "18091",
    name: "Kalpitiya Al-Aqsha Natioal School",
    shortName: "Kalpitiya Al-Aqsha Natioal School",
    address: "U M U Road, Kalpitiya",
    districtCode: 62,
    districtName: "Puttalam",
    provinceCode: 6,
    provinceName: "North Western",
    zone: "Puttalam",
    gender: "Mixed",
    mediums: [
      "Tamil"
    ],
    grade5CutoffSinhala: null,
    grade5CutoffTamil: null,
    latitude: null,
    longitude: null
  },
  {
    seq: 304,
    censusNo: "18199",
    name: "Chilaw Ananda National School",
    shortName: "Chilaw Ananda National School",
    address: "Colombo Road, Chilaw",
    districtCode: 62,
    districtName: "Puttalam",
    provinceCode: 6,
    provinceName: "North Western",
    zone: "Chilaw",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: 149,
    grade5CutoffTamil: null,
    latitude: 7.570956230163574,
    longitude: 79.79675293
  },
  {
    seq: 305,
    censusNo: "18218",
    name: "Madampe Senanayaka National School",
    shortName: "Madampe Senanayaka National School",
    address: "Madampe",
    districtCode: 62,
    districtName: "Puttalam",
    provinceCode: 6,
    provinceName: "North Western",
    zone: "Chilaw",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: 137,
    grade5CutoffTamil: null,
    latitude: 7.493089676,
    longitude: 79.83351135253906
  },
  {
    seq: 306,
    censusNo: "18243",
    name: "Wennappuwa St. Joseph Vaz College",
    shortName: "Wennappuwa St. Joseph Vaz College",
    address: "Wennappuwa",
    districtCode: 62,
    districtName: "Puttalam",
    provinceCode: 6,
    provinceName: "North Western",
    zone: "Chilaw",
    gender: "Boys",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: 154,
    grade5CutoffTamil: null,
    latitude: 7.341944694519043,
    longitude: 79.83862305
  },
  {
    seq: 307,
    censusNo: "18282",
    name: "Kirimatiyan Buddhist Girls' College",
    shortName: "Kirimatiyan Buddhist Girls' College",
    address: "Kirimatiyana Lunuwila",
    districtCode: 62,
    districtName: "Puttalam",
    provinceCode: 6,
    provinceName: "North Western",
    zone: "Chilaw",
    gender: "Girls",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: null,
    grade5CutoffTamil: null,
    latitude: null,
    longitude: null
  },
  {
    seq: 308,
    censusNo: "18302",
    name: "Naththandiya Dhammissara National School",
    shortName: "Naththandiya Dhammissara National School",
    address: "Naththandiya",
    districtCode: 62,
    districtName: "Puttalam",
    provinceCode: 6,
    provinceName: "North Western",
    zone: "Chilaw",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: 147,
    grade5CutoffTamil: null,
    latitude: 7.410456181,
    longitude: 79.85643005371094
  },
  {
    seq: 309,
    censusNo: "19001",
    name: "Medawachchiya Maithripala Senanayaka Central College",
    shortName: "Medawachchiya Maithripala Senanayaka Central College",
    address: "Medawachchiya",
    districtCode: 71,
    districtName: "Anuradhapura",
    provinceCode: 7,
    provinceName: "North Central",
    zone: "Kebithigollewa",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: 133,
    grade5CutoffTamil: null,
    latitude: null,
    longitude: null
  },
  {
    seq: 310,
    censusNo: "19097",
    name: "Sampath Nuwara N.S.",
    shortName: "Sampath Nuwara N.S.",
    address: "Sampathnuwara, Welioya, Ethawetunuwewa",
    districtCode: 44,
    districtName: "Mullaitivu",
    provinceCode: 4,
    provinceName: "Northern",
    zone: "Mullaitivu",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: null,
    grade5CutoffTamil: null,
    latitude: 8.975262641906738,
    longitude: 80.77287292480469
  },
  {
    seq: 311,
    censusNo: "19176",
    name: "Anuradhapura Central College",
    shortName: "Central College",
    address: "Anuradhapura",
    districtCode: 71,
    districtName: "Anuradhapura",
    provinceCode: 7,
    provinceName: "North Central",
    zone: "Anuradhapura",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: 159,
    grade5CutoffTamil: null,
    latitude: 8.335618019104004,
    longitude: 80.40460968017578
  },
  {
    seq: 312,
    censusNo: "19177",
    name: "Anuradhapura Swarnapali Girls College",
    shortName: "Swarnapali Girls College",
    address: "Anuradhapura",
    districtCode: 71,
    districtName: "Anuradhapura",
    provinceCode: 7,
    provinceName: "North Central",
    zone: "Anuradhapura",
    gender: "Girls",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: 151,
    grade5CutoffTamil: null,
    latitude: 8.334145545959473,
    longitude: 80.40403747558594
  },
  {
    seq: 313,
    censusNo: "19296",
    name: "Thambuttegama Central College",
    shortName: "Thambuttegama Central College",
    address: "Thambuttegama",
    districtCode: 71,
    districtName: "Anuradhapura",
    provinceCode: 7,
    provinceName: "North Central",
    zone: "Thambuttegama",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: 143,
    grade5CutoffTamil: null,
    latitude: 8.14831543,
    longitude: 80.29437255859375
  },
  {
    seq: 314,
    censusNo: "19361",
    name: "Eppawala Sri Siddartha Maha Vidyalaya",
    shortName: "Eppawala Sri Siddartha Maha Vidyalaya",
    address: "Eppawala",
    districtCode: 71,
    districtName: "Anuradhapura",
    provinceCode: 7,
    provinceName: "North Central",
    zone: "Thambuttegama",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: 133,
    grade5CutoffTamil: null,
    latitude: 8.146618843078613,
    longitude: 80.40973663330078
  },
  {
    seq: 315,
    censusNo: "19429",
    name: "Kekirawa Central College",
    shortName: "Kekirawa Central College",
    address: "Kekirawa",
    districtCode: 71,
    districtName: "Anuradhapura",
    provinceCode: 7,
    provinceName: "North Central",
    zone: "Kekirawa",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: 150,
    grade5CutoffTamil: null,
    latitude: 8.039944648742676,
    longitude: 80.58388519
  },
  {
    seq: 316,
    censusNo: "19457",
    name: "Kekirawa Vidyartha M.V.",
    shortName: "Kekirawa Vidyartha M.V.",
    address: "Kekirawa",
    districtCode: 71,
    districtName: "Anuradhapura",
    provinceCode: 7,
    provinceName: "North Central",
    zone: "Kekirawa",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: 133,
    grade5CutoffTamil: null,
    latitude: 8.025224685668945,
    longitude: 80.59967041015625
  },
  {
    seq: 317,
    censusNo: "19487",
    name: "Anuradhapura Zahira College",
    shortName: "Zahira College",
    address: "Anuradhapura",
    districtCode: 71,
    districtName: "Anuradhapura",
    provinceCode: 7,
    provinceName: "North Central",
    zone: "Anuradhapura",
    gender: "Mixed",
    mediums: [
      "Tamil"
    ],
    grade5CutoffSinhala: null,
    grade5CutoffTamil: null,
    latitude: 7.475820064544678,
    longitude: 80.62464904785156
  },
  {
    seq: 318,
    censusNo: "20001",
    name: "Hingurakgoda Minneriya N.S.",
    shortName: "Hingurakgoda Minneriya N.S.",
    address: "Hingurakgoda",
    districtCode: 72,
    districtName: "Polonnaruwa",
    provinceCode: 7,
    provinceName: "North Central",
    zone: "Hingurakgoda",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: null,
    grade5CutoffTamil: null,
    latitude: 8.041824340820312,
    longitude: 80.93644714355469
  },
  {
    seq: 319,
    censusNo: "20002",
    name: "Ananda Balika N.S",
    shortName: "Ananda Balika N.S",
    address: "Hingurakgoda",
    districtCode: 72,
    districtName: "Polonnaruwa",
    provinceCode: 7,
    provinceName: "North Central",
    zone: "Hingurakgoda",
    gender: "Girls",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: null,
    grade5CutoffTamil: null,
    latitude: 8.035802841186523,
    longitude: 80.95783996582031
  },
  {
    seq: 320,
    censusNo: "20035",
    name: "Medirigiriya National School",
    shortName: "Medirigiriya National School",
    address: "Medirigiriya",
    districtCode: 72,
    districtName: "Polonnaruwa",
    provinceCode: 7,
    provinceName: "North Central",
    zone: "Hingurakgoda",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: 133,
    grade5CutoffTamil: null,
    latitude: 8.143402099609375,
    longitude: 80.96797180175781
  },
  {
    seq: 321,
    censusNo: "20036",
    name: "Divulankadawala Central College",
    shortName: "Divulankadawala Central College",
    address: "Divulankadawala",
    districtCode: 72,
    districtName: "Polonnaruwa",
    provinceCode: 7,
    provinceName: "North Central",
    zone: "Hingurakgoda",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: null,
    grade5CutoffTamil: null,
    latitude: 8.11115551,
    longitude: 80.95209503173828
  },
  {
    seq: 322,
    censusNo: "20069",
    name: "Polonnaruwa Royal Central College",
    shortName: "Royal Central College",
    address: "New Town, Polonnaruwa",
    districtCode: 72,
    districtName: "Polonnaruwa",
    provinceCode: 7,
    provinceName: "North Central",
    zone: "Polonnaruwa",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: 144,
    grade5CutoffTamil: null,
    latitude: 7.919610023498535,
    longitude: 81.00292205810547
  },
  {
    seq: 323,
    censusNo: "20073",
    name: "Polonnaruwa Thopawewa Maha Vidyalaya",
    shortName: "Thopawewa Maha Vidyalaya",
    address: "Polonnaruwa",
    districtCode: 72,
    districtName: "Polonnaruwa",
    provinceCode: 7,
    provinceName: "North Central",
    zone: "Polonnaruwa",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: 142,
    grade5CutoffTamil: null,
    latitude: 8.017470359802246,
    longitude: 81.04985046386719
  },
  {
    seq: 324,
    censusNo: "20103",
    name: "Vilayaya C.C",
    shortName: "Vilayaya C.C",
    address: "Aralaganwila",
    districtCode: 72,
    districtName: "Polonnaruwa",
    provinceCode: 7,
    provinceName: "North Central",
    zone: "Dimbulagala",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: 133,
    grade5CutoffTamil: null,
    latitude: 7.780419826507568,
    longitude: 81.18711853027344
  },
  {
    seq: 325,
    censusNo: "20154",
    name: "Polonnaruwa Muslim Central College",
    shortName: "Muslim Central College",
    address: "Kaduruwela Polonnaruwa",
    districtCode: 72,
    districtName: "Polonnaruwa",
    provinceCode: 7,
    provinceName: "North Central",
    zone: "Polonnaruwa",
    gender: "Mixed",
    mediums: [
      "Tamil"
    ],
    grade5CutoffSinhala: null,
    grade5CutoffTamil: null,
    latitude: 7.927299976348877,
    longitude: 81.03888702392578
  },
  {
    seq: 326,
    censusNo: "20176",
    name: "Bakamuna Mahasen Madya Maha Vidyalaya",
    shortName: "Bakamuna Mahasen Madya Maha Vidyalaya",
    address: "Bakamuna",
    districtCode: 72,
    districtName: "Polonnaruwa",
    provinceCode: 7,
    provinceName: "North Central",
    zone: "Hingurakgoda",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: null,
    grade5CutoffTamil: null,
    latitude: 7.775683879852295,
    longitude: 80.82159423828125
  },
  {
    seq: 327,
    censusNo: "21001",
    name: "Andaulpotha N.S.",
    shortName: "Andaulpotha N.S.",
    address: "Uraniya, Mahiyanganaya",
    districtCode: 81,
    districtName: "Badulla",
    provinceCode: 8,
    provinceName: "Uva",
    zone: "Mahiyanganaya",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: null,
    grade5CutoffTamil: null,
    latitude: 7.266170024871826,
    longitude: 81.07686614990234
  },
  {
    seq: 328,
    censusNo: "21026",
    name: "Mahiyanganaya N.S",
    shortName: "Mahiyanganaya N.S",
    address: "Mahiyanganaya",
    districtCode: 81,
    districtName: "Badulla",
    provinceCode: 8,
    provinceName: "Uva",
    zone: "Mahiyanganaya",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: 152,
    grade5CutoffTamil: null,
    latitude: null,
    longitude: null
  },
  {
    seq: 329,
    censusNo: "21071",
    name: "Kandegedara National School",
    shortName: "Kandegedara National School",
    address: "Kandegedara, Haliela",
    districtCode: 81,
    districtName: "Badulla",
    provinceCode: 8,
    provinceName: "Uva",
    zone: "Viyaluwa",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: null,
    grade5CutoffTamil: null,
    latitude: 7.024330139160156,
    longitude: 81.02179718017578
  },
  {
    seq: 330,
    censusNo: "21102",
    name: "Viyaluwa D.S.Senanayake National School",
    shortName: "Viyaluwa D.S.Senanayake National School",
    address: "Kandaketiya",
    districtCode: 81,
    districtName: "Badulla",
    provinceCode: 8,
    provinceName: "Uva",
    zone: "Viyaluwa",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: null,
    grade5CutoffTamil: null,
    latitude: 7.170065879821777,
    longitude: 81.00225830078125
  },
  {
    seq: 331,
    censusNo: "21105",
    name: "Meegahakivula National College",
    shortName: "Meegahakivula National College",
    address: "Meegahakivula, Badulla",
    districtCode: 81,
    districtName: "Badulla",
    provinceCode: 8,
    provinceName: "Uva",
    zone: "Viyaluwa",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: null,
    grade5CutoffTamil: null,
    latitude: null,
    longitude: null
  },
  {
    seq: 332,
    censusNo: "21125",
    name: "Passara Madya Vidyalaya",
    shortName: "Passara Madya Vidyalaya",
    address: "Passara",
    districtCode: 81,
    districtName: "Badulla",
    provinceCode: 8,
    provinceName: "Uva",
    zone: "Passara",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: null,
    grade5CutoffTamil: null,
    latitude: null,
    longitude: null
  },
  {
    seq: 333,
    censusNo: "21172",
    name: "Badulla Dharmadutha National College",
    shortName: "Dharmadutha National College",
    address: "Badulla",
    districtCode: 81,
    districtName: "Badulla",
    provinceCode: 8,
    provinceName: "Uva",
    zone: "Badulla",
    gender: "Boys",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: 142,
    grade5CutoffTamil: null,
    latitude: null,
    longitude: null
  },
  {
    seq: 334,
    censusNo: "21173",
    name: "Badulla Madya Maha Vidyalaya",
    shortName: "Madya Maha Vidyalaya",
    address: "Badulla",
    districtCode: 81,
    districtName: "Badulla",
    provinceCode: 8,
    provinceName: "Uva",
    zone: "Badulla",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: 153,
    grade5CutoffTamil: null,
    latitude: 6.996337413787842,
    longitude: 81.05101013183594
  },
  {
    seq: 335,
    censusNo: "21174",
    name: "Badulla Vishaka Girls' High School",
    shortName: "Vishaka Girls' High School",
    address: "Badulla",
    districtCode: 81,
    districtName: "Badulla",
    provinceCode: 8,
    provinceName: "Uva",
    zone: "Badulla",
    gender: "Girls",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: null,
    grade5CutoffTamil: null,
    latitude: 6.991609573364258,
    longitude: 81.05321502685547
  },
  {
    seq: 336,
    censusNo: "21191",
    name: "Ettampitiya National College",
    shortName: "Ettampitiya National College",
    address: "Ettampitiya",
    districtCode: 81,
    districtName: "Badulla",
    provinceCode: 8,
    provinceName: "Uva",
    zone: "Badulla",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: null,
    grade5CutoffTamil: null,
    latitude: 6.937871456,
    longitude: 80.98795318603516
  },
  {
    seq: 337,
    censusNo: "21192",
    name: "Hali-Ela Central College",
    shortName: "Hali-Ela Central College",
    address: "Hali-Ela",
    districtCode: 81,
    districtName: "Badulla",
    provinceCode: 8,
    provinceName: "Uva",
    zone: "Badulla",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: null,
    grade5CutoffTamil: null,
    latitude: null,
    longitude: null
  },
  {
    seq: 338,
    censusNo: "21233",
    name: "Bandarawela M.M.V.",
    shortName: "Bandarawela M.M.V.",
    address: "Kinigama, Bandarawela",
    districtCode: 81,
    districtName: "Badulla",
    provinceCode: 8,
    provinceName: "Uva",
    zone: "Bandarawela",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: 157,
    grade5CutoffTamil: null,
    latitude: 6.832586288452148,
    longitude: 80.99085235595703
  },
  {
    seq: 339,
    censusNo: "21234",
    name: "Bandarawela Vishaka B.M.M.V.",
    shortName: "Bandarawela Vishaka B.M.M.V.",
    address: "Bandarawela",
    districtCode: 81,
    districtName: "Badulla",
    provinceCode: 8,
    provinceName: "Uva",
    zone: "Bandarawela",
    gender: "Girls",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: 135,
    grade5CutoffTamil: null,
    latitude: 7.474461078643799,
    longitude: 80.04647827148438
  },
  {
    seq: 340,
    censusNo: "21235",
    name: "Naulla M.M.V.",
    shortName: "Naulla M.M.V.",
    address: "Naulla, Demodara",
    districtCode: 81,
    districtName: "Badulla",
    provinceCode: 8,
    provinceName: "Uva",
    zone: "Bandarawela",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: null,
    grade5CutoffTamil: null,
    latitude: 6.8978776931762695,
    longitude: 81.06036376953125
  },
  {
    seq: 341,
    censusNo: "21236",
    name: "Bandarawela St. Joseph's College",
    shortName: "Bandarawela St. Joseph's College",
    address: "Bandarawela",
    districtCode: 81,
    districtName: "Badulla",
    provinceCode: 8,
    provinceName: "Uva",
    zone: "Bandarawela",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: 148,
    grade5CutoffTamil: null,
    latitude: 7.7512898445129395,
    longitude: 81.63912200927734
  },
  {
    seq: 342,
    censusNo: "21239",
    name: "Halpe National School",
    shortName: "Halpe National School",
    address: "Hela - Halpe",
    districtCode: 81,
    districtName: "Badulla",
    provinceCode: 8,
    provinceName: "Uva",
    zone: "Bandarawela",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: null,
    grade5CutoffTamil: null,
    latitude: null,
    longitude: null
  },
  {
    seq: 343,
    censusNo: "21241",
    name: "Bandarawela Kudakusum Balika M.V.",
    shortName: "Bandarawela Kudakusum Balika M.V.",
    address: "Bandarawela",
    districtCode: 81,
    districtName: "Badulla",
    provinceCode: 8,
    provinceName: "Uva",
    zone: "Bandarawela",
    gender: "Girls",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: 135,
    grade5CutoffTamil: null,
    latitude: 6.830662727355957,
    longitude: 80.99494934082031
  },
  {
    seq: 344,
    censusNo: "21276",
    name: "Sri Janananda.M.V.",
    shortName: "Sri Janananda.M.V.",
    address: "Kadurugamuwa, Diyathalawa",
    districtCode: 81,
    districtName: "Badulla",
    provinceCode: 8,
    provinceName: "Uva",
    zone: "Bandarawela",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: null,
    grade5CutoffTamil: null,
    latitude: 6.790184020996094,
    longitude: 80.94318389892578
  },
  {
    seq: 345,
    censusNo: "21277",
    name: "Ananda M.M.V.",
    shortName: "Ananda M.M.V.",
    address: "Walhaputhenna, Haldummulla",
    districtCode: 81,
    districtName: "Badulla",
    provinceCode: 8,
    provinceName: "Uva",
    zone: "Bandarawela",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: null,
    grade5CutoffTamil: null,
    latitude: 7.010120391845703,
    longitude: 80.13157653808594
  },
  {
    seq: 346,
    censusNo: "21279",
    name: "Kahagolla M.V.",
    shortName: "Kahagolla M.V.",
    address: "Kahagolla, Diyathalawa",
    districtCode: 81,
    districtName: "Badulla",
    provinceCode: 8,
    provinceName: "Uva",
    zone: "Bandarawela",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: null,
    grade5CutoffTamil: null,
    latitude: 6.816315650939941,
    longitude: 80.96373748779297
  },
  {
    seq: 347,
    censusNo: "21280",
    name: "Koslanda M.M.V.",
    shortName: "Koslanda M.M.V.",
    address: "Wellawaya Road, Koslanda",
    districtCode: 81,
    districtName: "Badulla",
    provinceCode: 8,
    provinceName: "Uva",
    zone: "Bandarawela",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: null,
    grade5CutoffTamil: null,
    latitude: 6.7406415939331055,
    longitude: 81.01521301269531
  },
  {
    seq: 348,
    censusNo: "21311",
    name: "Welimada Madya Maha Vidyalaya",
    shortName: "Welimada Madya Maha Vidyalaya",
    address: "Welimada",
    districtCode: 81,
    districtName: "Badulla",
    provinceCode: 8,
    provinceName: "Uva",
    zone: "Welimada",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: 134,
    grade5CutoffTamil: null,
    latitude: 6.906956195831299,
    longitude: 80.91691589355469
  },
  {
    seq: 349,
    censusNo: "21315",
    name: "Boralanda Wangiyakumbura M.M.V.",
    shortName: "Boralanda Wangiyakumbura M.M.V.",
    address: "Boralanda",
    districtCode: 81,
    districtName: "Badulla",
    provinceCode: 8,
    provinceName: "Uva",
    zone: "Welimada",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: null,
    grade5CutoffTamil: null,
    latitude: 6.838390827178955,
    longitude: 80.88291168
  },
  {
    seq: 350,
    censusNo: "21356",
    name: "Loonuwatta National School",
    shortName: "Loonuwatta National School",
    address: "Loonuwatta",
    districtCode: 81,
    districtName: "Badulla",
    provinceCode: 8,
    provinceName: "Uva",
    zone: "Welimada",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: null,
    grade5CutoffTamil: null,
    latitude: 6.961205959320068,
    longitude: 80.92170715332031
  },
  {
    seq: 351,
    censusNo: "21398",
    name: "Guruthalawa Muslim Central College",
    shortName: "Guruthalawa Muslim Central College",
    address: "Guruthathlawa",
    districtCode: 81,
    districtName: "Badulla",
    provinceCode: 8,
    provinceName: "Uva",
    zone: "Welimada",
    gender: "Mixed",
    mediums: [
      "Tamil"
    ],
    grade5CutoffSinhala: null,
    grade5CutoffTamil: null,
    latitude: 6.846038341522217,
    longitude: 80.9005127
  },
  {
    seq: 352,
    censusNo: "21464",
    name: "Badulla Saraswathy Central College",
    shortName: "Saraswathy Central College",
    address: "Mahiyangana Road, Badulla",
    districtCode: 81,
    districtName: "Badulla",
    provinceCode: 8,
    provinceName: "Uva",
    zone: "Badulla",
    gender: "Boys",
    mediums: [
      "Tamil"
    ],
    grade5CutoffSinhala: null,
    grade5CutoffTamil: 132,
    latitude: 6.902292728424072,
    longitude: 81.36473846435547
  },
  {
    seq: 353,
    censusNo: "21511",
    name: "Passara Tamil Maha Vidyalaya",
    shortName: "Passara Tamil Maha Vidyalaya",
    address: "Passara",
    districtCode: 81,
    districtName: "Badulla",
    provinceCode: 8,
    provinceName: "Uva",
    zone: "Passara",
    gender: "Mixed",
    mediums: [
      "Tamil"
    ],
    grade5CutoffSinhala: null,
    grade5CutoffTamil: null,
    latitude: 6.940207004547119,
    longitude: 81.16760254
  },
  {
    seq: 354,
    censusNo: "22001",
    name: "Bibile Wellassa N.S.",
    shortName: "Bibile Wellassa N.S.",
    address: "Hewelwela, Bibile",
    districtCode: 82,
    districtName: "Moneragala",
    provinceCode: 8,
    provinceName: "Uva",
    zone: "Bibile",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: 139,
    grade5CutoffTamil: null,
    latitude: 7.135209560394287,
    longitude: 81.21714782714844
  },
  {
    seq: 355,
    censusNo: "22005",
    name: "Medagama N.S.",
    shortName: "Medagama N.S.",
    address: "Medagama",
    districtCode: 82,
    districtName: "Moneragala",
    provinceCode: 8,
    provinceName: "Uva",
    zone: "Bibile",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: null,
    grade5CutoffTamil: null,
    latitude: 7.569955825805664,
    longitude: 81.04259490966797
  },
  {
    seq: 356,
    censusNo: "22069",
    name: "Monaragala Mahanama M.M.V.",
    shortName: "Monaragala Mahanama M.M.V.",
    address: "Monaragala",
    districtCode: 82,
    districtName: "Moneragala",
    provinceCode: 8,
    provinceName: "Uva",
    zone: "Moneragala",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: 154,
    grade5CutoffTamil: null,
    latitude: 6.8741021156311035,
    longitude: 81.34519196
  },
  {
    seq: 357,
    censusNo: "22073",
    name: "Siyambalanduwa M.V.",
    shortName: "Siyambalanduwa M.V.",
    address: "Siyambalanduwa",
    districtCode: 82,
    districtName: "Moneragala",
    provinceCode: 8,
    provinceName: "Uva",
    zone: "Moneragala",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: null,
    grade5CutoffTamil: null,
    latitude: 6.928060054779053,
    longitude: 81.55299377441406
  },
  {
    seq: 358,
    censusNo: "22086",
    name: "Monaragala Rajakeeya V.",
    shortName: "Monaragala Rajakeeya V.",
    address: "Monaragala",
    districtCode: 82,
    districtName: "Moneragala",
    provinceCode: 8,
    provinceName: "Uva",
    zone: "Moneragala",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: 156,
    grade5CutoffTamil: null,
    latitude: 6.860412120819092,
    longitude: 81.33969879
  },
  {
    seq: 359,
    censusNo: "22111",
    name: "Badalkumbura Nishshanka M.M.V.",
    shortName: "Badalkumbura Nishshanka M.M.V.",
    address: "Badalkumbura",
    districtCode: 82,
    districtName: "Moneragala",
    provinceCode: 8,
    provinceName: "Uva",
    zone: "Moneragala",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: 139,
    grade5CutoffTamil: null,
    latitude: 6.892075061798096,
    longitude: 81.23764801
  },
  {
    seq: 360,
    censusNo: "22146",
    name: "Malwattawala M.M.V.",
    shortName: "Malwattawala M.M.V.",
    address: "Wellawaya",
    districtCode: 82,
    districtName: "Moneragala",
    provinceCode: 8,
    provinceName: "Uva",
    zone: "Wellawaya",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: 146,
    grade5CutoffTamil: null,
    latitude: 6.733121871948242,
    longitude: 81.11282348632812
  },
  {
    seq: 361,
    censusNo: "22149",
    name: "Buttala Dutugemunu Central College",
    shortName: "Buttala Dutugemunu Central College",
    address: "Buttala",
    districtCode: 82,
    districtName: "Moneragala",
    provinceCode: 8,
    provinceName: "Uva",
    zone: "Wellawaya",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: 157,
    grade5CutoffTamil: null,
    latitude: 6.762609958648682,
    longitude: 81.24736022949219
  },
  {
    seq: 362,
    censusNo: "22184",
    name: "Katharagama .M.M.V",
    shortName: "Katharagama .M.M.V",
    address: "Kataharagama.",
    districtCode: 82,
    districtName: "Moneragala",
    provinceCode: 8,
    provinceName: "Uva",
    zone: "Thanamalvila",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: null,
    grade5CutoffTamil: null,
    latitude: 6.413200378417969,
    longitude: 81.33639526367188
  },
  {
    seq: 363,
    censusNo: "22187",
    name: "Thanamalwila M.M.V",
    shortName: "Thanamalwila M.M.V",
    address: "Thanamalwila.",
    districtCode: 82,
    districtName: "Moneragala",
    provinceCode: 8,
    provinceName: "Uva",
    zone: "Thanamalvila",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: 136,
    grade5CutoffTamil: null,
    latitude: null,
    longitude: null
  },
  {
    seq: 364,
    censusNo: "22270",
    name: "Bibile Yashodhara G.C.",
    shortName: "Bibile Yashodhara G.C.",
    address: "Bibile",
    districtCode: 82,
    districtName: "Moneragala",
    provinceCode: 8,
    provinceName: "Uva",
    zone: "Bibile",
    gender: "Girls",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: 134,
    grade5CutoffTamil: null,
    latitude: 7.166803837,
    longitude: 81.22539520263672
  },
  {
    seq: 365,
    censusNo: "23001",
    name: "Eheliyagoda M.M.V.",
    shortName: "Eheliyagoda M.M.V.",
    address: "Eheliyagoda",
    districtCode: 91,
    districtName: "Ratnapura",
    provinceCode: 9,
    provinceName: "Sabaragamuwa",
    zone: "Ratnapura",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: 152,
    grade5CutoffTamil: null,
    latitude: 6.85274601,
    longitude: 80.26098633
  },
  {
    seq: 366,
    censusNo: "23060",
    name: "Ratnapura Fergusion High School",
    shortName: "Fergusion High School",
    address: "Ratnapura",
    districtCode: 91,
    districtName: "Ratnapura",
    provinceCode: 9,
    provinceName: "Sabaragamuwa",
    zone: "Ratnapura",
    gender: "Girls",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: 159,
    grade5CutoffTamil: null,
    latitude: 6.6821746826171875,
    longitude: 80.39750671386719
  },
  {
    seq: 367,
    censusNo: "23061",
    name: "Ratnapura Sumana Balika V",
    shortName: "Sumana Balika V",
    address: "Getangama, Ratnapura",
    districtCode: 91,
    districtName: "Ratnapura",
    provinceCode: 9,
    provinceName: "Sabaragamuwa",
    zone: "Ratnapura",
    gender: "Girls",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: 145,
    grade5CutoffTamil: null,
    latitude: null,
    longitude: null
  },
  {
    seq: 368,
    censusNo: "23062",
    name: "Ratnapura St. Aloysius National School",
    shortName: "St. Aloysius National School",
    address: "Church Road Ratnapura",
    districtCode: 91,
    districtName: "Ratnapura",
    provinceCode: 9,
    provinceName: "Sabaragamuwa",
    zone: "Ratnapura",
    gender: "Boys",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: 147,
    grade5CutoffTamil: null,
    latitude: null,
    longitude: null
  },
  {
    seq: 369,
    censusNo: "23068",
    name: "Ratnapura Convent of the Child Jesus National School",
    shortName: "Convent of the Child Jesus National School",
    address: "Ratnapura",
    districtCode: 91,
    districtName: "Ratnapura",
    provinceCode: 9,
    provinceName: "Sabaragamuwa",
    zone: "Ratnapura",
    gender: "Girls",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: 139,
    grade5CutoffTamil: null,
    latitude: null,
    longitude: null
  },
  {
    seq: 370,
    censusNo: "23092",
    name: "Ratnapura Seevalee Central College",
    shortName: "Seevalee Central College",
    address: "Hidellana, Ratnapura",
    districtCode: 91,
    districtName: "Ratnapura",
    provinceCode: 9,
    provinceName: "Sabaragamuwa",
    zone: "Ratnapura",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: 168,
    grade5CutoffTamil: null,
    latitude: 6.713837146759033,
    longitude: 80.38307189941406
  },
  {
    seq: 371,
    censusNo: "23094",
    name: "Kuruwita Central College",
    shortName: "Kuruwita Central College",
    address: "Kuruvita",
    districtCode: 91,
    districtName: "Ratnapura",
    provinceCode: 9,
    provinceName: "Sabaragamuwa",
    zone: "Ratnapura",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: null,
    grade5CutoffTamil: null,
    latitude: 6.781383514404297,
    longitude: 80.35986328
  },
  {
    seq: 372,
    censusNo: "23123",
    name: "Pelmadulla Gankanda Central College",
    shortName: "Pelmadulla Gankanda Central College",
    address: "Vidyala Mawatha, Pelmadulla",
    districtCode: 91,
    districtName: "Ratnapura",
    provinceCode: 9,
    provinceName: "Sabaragamuwa",
    zone: "Ratnapura",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: 144,
    grade5CutoffTamil: null,
    latitude: 6.6270952224731445,
    longitude: 80.53803253173828
  },
  {
    seq: 373,
    censusNo: "23209",
    name: "Balangoda Ananda Maithriya M.M.V.",
    shortName: "Balangoda Ananda Maithriya M.M.V.",
    address: "Miriswatta, Balangoda",
    districtCode: 91,
    districtName: "Ratnapura",
    provinceCode: 9,
    provinceName: "Sabaragamuwa",
    zone: "Balangoda",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: 150,
    grade5CutoffTamil: null,
    latitude: 6.642636775970459,
    longitude: 80.70509338378906
  },
  {
    seq: 374,
    censusNo: "23247",
    name: "Godakawela Rahula National School",
    shortName: "Godakawela Rahula National School",
    address: "Godakawela",
    districtCode: 91,
    districtName: "Ratnapura",
    provinceCode: 9,
    provinceName: "Sabaragamuwa",
    zone: "Embilipitiya",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: 138,
    grade5CutoffTamil: null,
    latitude: 6.505864143371582,
    longitude: 80.64616394042969
  },
  {
    seq: 375,
    censusNo: "23319",
    name: "Karawita National School",
    shortName: "Karawita National School",
    address: "Karawita",
    districtCode: 91,
    districtName: "Ratnapura",
    provinceCode: 9,
    provinceName: "Sabaragamuwa",
    zone: "Nivitigala",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: null,
    grade5CutoffTamil: null,
    latitude: 6.584148406982422,
    longitude: 80.41481781
  },
  {
    seq: 376,
    censusNo: "23400",
    name: "Kalawana National School",
    shortName: "Kalawana National School",
    address: "Kalawana",
    districtCode: 91,
    districtName: "Ratnapura",
    provinceCode: 9,
    provinceName: "Sabaragamuwa",
    zone: "Nivitigala",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: 139,
    grade5CutoffTamil: null,
    latitude: 6.535174369812012,
    longitude: 80.39885711669922
  },
  {
    seq: 377,
    censusNo: "23431",
    name: "Kolonna National School.",
    shortName: "Kolonna National School.",
    address: "Kolonna",
    districtCode: 91,
    districtName: "Ratnapura",
    provinceCode: 9,
    provinceName: "Sabaragamuwa",
    zone: "Embilipitiya",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: null,
    grade5CutoffTamil: null,
    latitude: 6.403171539306641,
    longitude: 80.69163513183594
  },
  {
    seq: 378,
    censusNo: "23465",
    name: "Embilipitiya President College",
    shortName: "Embilipitiya President College",
    address: "New Town,Embilipitiya",
    districtCode: 91,
    districtName: "Ratnapura",
    provinceCode: 9,
    provinceName: "Sabaragamuwa",
    zone: "Embilipitiya",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: 151,
    grade5CutoffTamil: null,
    latitude: 6.560579776763916,
    longitude: 80.01138305664062
  },
  {
    seq: 379,
    censusNo: "23544",
    name: "Rakwana St. John's Tamil Maha Vidyalaya",
    shortName: "Rakwana St. John's Tamil Maha Vidyalaya",
    address: "Rakwana",
    districtCode: 91,
    districtName: "Ratnapura",
    provinceCode: 9,
    provinceName: "Sabaragamuwa",
    zone: "Embilipitiya",
    gender: "Mixed",
    mediums: [
      "Tamil"
    ],
    grade5CutoffSinhala: null,
    grade5CutoffTamil: null,
    latitude: 6.475110054016113,
    longitude: 80.60855865478516
  },
  {
    seq: 380,
    censusNo: "23559",
    name: "Dehigastalawa Jailani Mus M.V.",
    shortName: "Dehigastalawa Jailani Mus M.V.",
    address: "Dehigastalawa, Balangoda",
    districtCode: 91,
    districtName: "Ratnapura",
    provinceCode: 9,
    provinceName: "Sabaragamuwa",
    zone: "Balangoda",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: null,
    grade5CutoffTamil: null,
    latitude: 6.6396965980529785,
    longitude: 80.71282196044922
  },
  {
    seq: 381,
    censusNo: "24042",
    name: "Yatiyantota Dr. N.M. Perera M.M.V.",
    shortName: "Yatiyantota Dr. N.M. Perera M.M.V.",
    address: "Yatiyantota",
    districtCode: 92,
    districtName: "Kegalle",
    provinceCode: 9,
    provinceName: "Sabaragamuwa",
    zone: "Dehiowita",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: null,
    grade5CutoffTamil: null,
    latitude: 7.033169746398926,
    longitude: 80.28725433
  },
  {
    seq: 382,
    censusNo: "24066",
    name: "Dehiowita National School",
    shortName: "Dehiowita National School",
    address: "Dehiowita",
    districtCode: 92,
    districtName: "Kegalle",
    provinceCode: 9,
    provinceName: "Sabaragamuwa",
    zone: "Dehiowita",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: null,
    grade5CutoffTamil: null,
    latitude: 6.9644904136657715,
    longitude: 80.26290130615234
  },
  {
    seq: 383,
    censusNo: "24112",
    name: "Deraniyagala Sirisaman National School",
    shortName: "Deraniyagala Sirisaman National School",
    address: "Vidyala Mawatha, Deraniyagala",
    districtCode: 92,
    districtName: "Kegalle",
    provinceCode: 9,
    provinceName: "Sabaragamuwa",
    zone: "Dehiowita",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: 140,
    grade5CutoffTamil: null,
    latitude: 6.935633182525635,
    longitude: 80.33549499511719
  },
  {
    seq: 384,
    censusNo: "24158",
    name: "Pindeniya M.M.V",
    shortName: "Pindeniya M.M.V",
    address: "Pindeniya, Atala",
    districtCode: 92,
    districtName: "Kegalle",
    provinceCode: 9,
    provinceName: "Sabaragamuwa",
    zone: "Kegalle",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: null,
    grade5CutoffTamil: null,
    latitude: 7.155686378479004,
    longitude: 80.29439544677734
  },
  {
    seq: 385,
    censusNo: "24228",
    name: "Ruwanwella Rajasinghe M.M.V.",
    shortName: "Ruwanwella Rajasinghe M.M.V.",
    address: "Ruwanwella",
    districtCode: 92,
    districtName: "Kegalle",
    provinceCode: 9,
    provinceName: "Sabaragamuwa",
    zone: "Dehiowita",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: 145,
    grade5CutoffTamil: null,
    latitude: 7.040393352508545,
    longitude: 80.25400543
  },
  {
    seq: 386,
    censusNo: "24321",
    name: "Pinnawala M.M.V.",
    shortName: "Pinnawala M.M.V.",
    address: "Rambukkana",
    districtCode: 92,
    districtName: "Kegalle",
    provinceCode: 9,
    provinceName: "Sabaragamuwa",
    zone: "Mawanella",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: 155,
    grade5CutoffTamil: null,
    latitude: 7.310666561126709,
    longitude: 80.38801574707031
  },
  {
    seq: 387,
    censusNo: "24343",
    name: "Mawanella Zahira College",
    shortName: "Mawanella Zahira College",
    address: "Mawanella",
    districtCode: 92,
    districtName: "Kegalle",
    provinceCode: 9,
    provinceName: "Sabaragamuwa",
    zone: "Mawanella",
    gender: "Mixed",
    mediums: [
      "Tamil"
    ],
    grade5CutoffSinhala: null,
    grade5CutoffTamil: 134,
    latitude: 7.252173900604248,
    longitude: 80.45299530029297
  },
  {
    seq: 388,
    censusNo: "24355",
    name: "Mawanella Mayurapada M.M.V.",
    shortName: "Mawanella Mayurapada M.M.V.",
    address: "Mawanella",
    districtCode: 92,
    districtName: "Kegalle",
    provinceCode: 9,
    provinceName: "Sabaragamuwa",
    zone: "Mawanella",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: null,
    grade5CutoffTamil: null,
    latitude: 7.249490261077881,
    longitude: 80.43955231
  },
  {
    seq: 389,
    censusNo: "24381",
    name: "Mawathagoda Rivisanda M.M.V.",
    shortName: "Mawathagoda Rivisanda M.M.V.",
    address: "Ussapitiya",
    districtCode: 92,
    districtName: "Kegalle",
    provinceCode: 9,
    provinceName: "Sabaragamuwa",
    zone: "Mawanella",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: null,
    grade5CutoffTamil: null,
    latitude: 7.210850238800049,
    longitude: 80.45594024658203
  },
  {
    seq: 390,
    censusNo: "24489",
    name: "Kegalu Balika M.V",
    shortName: "Kegalu Balika M.V",
    address: "Bandaranayaka Mawatha, Kegalle",
    districtCode: 92,
    districtName: "Kegalle",
    provinceCode: 9,
    provinceName: "Sabaragamuwa",
    zone: "Kegalle",
    gender: "Girls",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: 152,
    grade5CutoffTamil: null,
    latitude: 7.249277114868164,
    longitude: 80.34854888916016
  },
  {
    seq: 391,
    censusNo: "24490",
    name: "Kegalu Vidyalaya",
    shortName: "Kegalu Vidyalaya",
    address: "Kegalle",
    districtCode: 92,
    districtName: "Kegalle",
    provinceCode: 9,
    provinceName: "Sabaragamuwa",
    zone: "Kegalle",
    gender: "Boys",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: 151,
    grade5CutoffTamil: null,
    latitude: 7.251193523406982,
    longitude: 80.34741211
  },
  {
    seq: 392,
    censusNo: "24493",
    name: "Kegalle Swarnajayanthi M.V.",
    shortName: "Swarnajayanthi M.V.",
    address: "Kegalle",
    districtCode: 92,
    districtName: "Kegalle",
    provinceCode: 9,
    provinceName: "Sabaragamuwa",
    zone: "Kegalle",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: 148,
    grade5CutoffTamil: null,
    latitude: 7.256058216094971,
    longitude: 80.34829711914062
  },
  {
    seq: 393,
    censusNo: "24504",
    name: "Kegalle St. Marys College",
    shortName: "St. Marys College",
    address: "Kegalle",
    districtCode: 92,
    districtName: "Kegalle",
    provinceCode: 9,
    provinceName: "Sabaragamuwa",
    zone: "Kegalle",
    gender: "Boys",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: 149,
    grade5CutoffTamil: null,
    latitude: 7.252261638641357,
    longitude: 80.33660125732422
  },
  {
    seq: 394,
    censusNo: "24505",
    name: "Kegalle St. Joseph's Balika M.V.",
    shortName: "St. Joseph's Balika M.V.",
    address: "Kegalle",
    districtCode: 92,
    districtName: "Kegalle",
    provinceCode: 9,
    provinceName: "Sabaragamuwa",
    zone: "Kegalle",
    gender: "Girls",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: 156,
    grade5CutoffTamil: null,
    latitude: 7.250951290130615,
    longitude: 80.33693695
  },
  {
    seq: 395,
    censusNo: "24577",
    name: "Tholangamuwa Dudley Senanayaka Central College",
    shortName: "Tholangamuwa Dudley Senanayaka Central College",
    address: "Tholangamuwa",
    districtCode: 92,
    districtName: "Kegalle",
    provinceCode: 9,
    provinceName: "Sabaragamuwa",
    zone: "Kegalle",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: 145,
    grade5CutoffTamil: null,
    latitude: 7.237372398376465,
    longitude: 80.23355865478516
  },
  {
    seq: 396,
    censusNo: "42024",
    name: "Kurunegala Vishvoda National School",
    shortName: "Vishvoda National School",
    address: "Boyagane, Kurunegala",
    districtCode: 61,
    districtName: "Kurunegala",
    provinceCode: 6,
    provinceName: "North Western",
    zone: "Kurunegala",
    gender: "Mixed",
    mediums: [
      "Sinhala"
    ],
    grade5CutoffSinhala: 155,
    grade5CutoffTamil: null,
    latitude: 7.469041824,
    longitude: 80.32610321044922
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

// src/national-schools.ts
var nationalSchools = national_schools_default;
function getNationalSchools() {
  return [...nationalSchools];
}

// src/admissions.ts
var cutoffs = grade5_cutoffs_default;
function getGrade5Cutoffs() {
  return [...cutoffs];
}
function getGrade5CutoffsByCensusNo(censusNo) {
  if (!censusNo) return [];
  const pad = censusNo.trim().padStart(5, "0");
  return cutoffs.filter(
    (c) => c.censusNo === censusNo.trim() || c.censusNo === pad
  );
}
function getEligibleNationalSchools(params) {
  const { marks, gender, medium, district } = params;
  const nationalSchools2 = getNationalSchools();
  const results = [];
  const districtNorm = district ? normalizeText(district) : null;
  for (const school of nationalSchools2) {
    if (districtNorm && normalizeText(school.districtName) !== districtNorm) {
      continue;
    }
    if (school.gender !== "Mixed" && school.gender !== gender) {
      continue;
    }
    const cutoff = medium === "Sinhala" ? school.grade5CutoffSinhala : school.grade5CutoffTamil;
    if (cutoff === null || cutoff === void 0) {
      continue;
    }
    const margin = marks - cutoff;
    const eligible = margin >= 0;
    results.push({
      school,
      cutoff,
      margin,
      eligible
    });
  }
  return results.sort((a, b) => b.cutoff - a.cutoff);
}
function getGrade1AdmissionProximity(schoolLat, schoolLon, homeLat, homeLon) {
  const distanceKm = calculateDistance(schoolLat, schoolLon, homeLat, homeLon);
  return {
    distanceKm,
    withinImmediateCatchment: distanceKm <= 2,
    withinSecondaryCatchment: distanceKm <= 5
  };
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  getEligibleNationalSchools,
  getGrade1AdmissionProximity,
  getGrade5Cutoffs,
  getGrade5CutoffsByCensusNo
});
//# sourceMappingURL=admissions.js.map