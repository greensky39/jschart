
let chartData = [{
    "row": 1,
    "country_region_code": "NZ",
    "country_region": "New Zealand",
    "region": null,
    "place_id": "ChIJh5Z3Fw4gLG0RM0dqdeIY1rE",
    "date": "2021-04-30",
    "symptom_Abdominal_obesityi": 4.5
  },
  {
    "row": 2,
    "country_region_code": "IE",
    "country_region": "Ireland",
    "region": null,
    "place_id": "ChIJ-ydAXOS6WUgRCPTbzjQSfM8",
    "date": "2021-04-30",
    "symptom_Abdominal_obesityi": 3.25
  },
  {
    "row": 3,
    "country_region_code": "GB",
    "country_region": "United Kingdom",
    "region": null,
    "place_id": "ChIJqZHHQhE7WgIReiWIMkOg",
    "date": "2021-04-30",
    "symptom_Abdominal_obesityi": 1.4
  },
  {
    "row": 4,
    "country_region_code": "AU",
    "country_region": "Australia",
    "region": null,
    "place_id": "ChIJCzYy5IS16lQRQrfeQ5K5Oxw",
    "date": "2021-04-30",
    "symptom_Abdominal_obesityi": 1.73
  },
  {
    "row": 5,
    "country_region_code": "US",
    "country_region": "United States",
    "region": null,
    "place_id": "ChIJh5Z3Fw4gLG0RM0dqdeIY1rE",
    "date": "2021-04-30",
    "symptom_Abdominal_obesityi": 4.08
  },
  {
    "row": 6,
    "country_region_code": "SG",
    "country_region": "Singapore",
    "region": null,
    "place_id": "ChIJ-ydAXOS6WUgRCPTbzjQSfM8",
    "date": "2021-04-30",
    "symptom_Abdominal_obesityi": 3.6
  },
  {
    "row": 7,
    "country_region_code": "NZ",
    "country_region": "New Zealand",
    "region": null,
    "place_id": "ChIJqZHHQhE7WgIReiWIMkOg",
    "date": "2020-11-28",
    "symptom_Abdominal_obesityi": 5
  },
  {
    "row": 8,
    "country_region_code": "IE",
    "country_region": "Ireland",
    "region": null,
    "place_id": "ChIJCzYy5IS16lQRQrfeQ5K5Oxw",
    "date": "2020-11-28",
    "symptom_Abdominal_obesityi": 2.85
  },
  {
    "row": 9,
    "country_region_code": "GB",
    "country_region": "United Kingdom",
    "region": null,
    "place_id": "ChIJh5Z3Fw4gLG0RM0dqdeIY1rE",
    "date": "2020-11-28",
    "symptom_Abdominal_obesityi": 1.95
  },
  {
    "row": 10,
    "country_region_code": "AU",
    "country_region": "Australia",
    "region": null,
    "place_id": "ChIJ-ydAXOS6WUgRCPTbzjQSfM8",
    "date": "2020-11-28",
    "symptom_Abdominal_obesityi": 4.08
  },
  {
    "row": 11,
    "country_region_code": "US",
    "country_region": "United States",
    "region": null,
    "place_id": "ChIJqZHHQhE7WgIReiWIMkOg",
    "date": "2019-05-16",
    "symptom_Abdominal_obesityi": 3.6
  },
  {
    "row": 12,
    "country_region_code": "SG",
    "country_region": "Singapore",
    "region": null,
    "place_id": "ChIJCzYy5IS16lQRQrfeQ5K5Oxw",
    "date": "2019-05-16",
    "symptom_Abdominal_obesityi": 5
  },
  {
    "row": 13,
    "country_region_code": "IE",
    "country_region": "Ireland",
    "region": null,
    "place_id": "ChIJqZHHQhE7WgIReiWIMkOg",
    "date": "2019-05-16",
    "symptom_Abdominal_obesityi": 1.4
  },
  {
    "row": 14,
    "country_region_code": "US",
    "country_region": "United States",
    "region": null,
    "place_id": "ChIJqZHHQhE7WgIReiWIMkOg",
    "date": "2019-05-16",
    "symptom_Abdominal_obesityi": 3.6
  },
  {
    "row": 15,
    "country_region_code": "SG",
    "country_region": "Singapore",
    "region": null,
    "place_id": "ChIJCzYy5IS16lQRQrfeQ5K5Oxw",
    "date": "2019-05-16",
    "symptom_Abdominal_obesityi": 5
  }
]

buildTable(chartData)

function buildTable(data) {
  let table = document.getElementById('tableArea')
   for (let i=0; i < data.length; i++) { 
       let row = `<tr> 
       <td> ${data[i].row} </td> 
       <td> ${data[i].country_region_code} </td> 
       <td> ${data[i].country_region} </td>
       <td> ${data[i].region} </td> 
       <td> ${data[i].place_id} </td> 
       <td> ${data[i].date} </td>  
       <td> ${data[i].symptom_Abdominal_obesityi} </td>  
       </tr>` 
       table.innerHTML += row 
  }
  // for (let i = 0; i < data.length; i++) {
  //   let row = data[i].row;
  //   let country_region_code = data[i].country_region_code;
  //   let country_region = data[i].country_region;
  //   let region = data[i].region;
  //   let place_id = data[i].place_id;
  //   let date = data[i].date;
  //   let symptom_Abdominal_obesityi = data[i].symptom_Abdominal_obesityi;

  //   let tRow = document.createTextNode(row);
  //   let tCountry_region_code = document.createTextNode(country_region_code);
  //   let tCountry_region = document.createTextNode(country_region);
  //   let tRegion = document.createTextNode(region);
  //   let tPlace_id = document.createTextNode(place_id);
  //   let tDate = document.createTextNode(date);
  //   let tSymptom_Abdominal_obesityi = document.createTextNode(symptom_Abdominal_obesityi);

  //   let tr = document.createElement("tr");
  //   let td1 = document.createElement("td");
  //   let td2 = document.createElement("td");
  //   let td3 = document.createElement("td");
  //   let td4 = document.createElement("td");
  //   let td5 = document.createElement("td");
  //   let td6 = document.createElement("td");
  //   let td7 = document.createElement("td");

  //   td1.appendChild(tRow);
  //   td2.appendChild(tCountry_region_code);
  //   td3.appendChild(tCountry_region);
  //   td4.appendChild(tRegion);
  //   td5.appendChild(tPlace_id);
  //   td6.appendChild(tDate);
  //   td7.appendChild(tSymptom_Abdominal_obesityi);

  //   tr.appendChild(td1);
  //   tr.appendChild(td2);
  //   tr.appendChild(td3);
  //   tr.appendChild(td4);
  //   tr.appendChild(td5);
  //   tr.appendChild(td6);
  //   tr.appendChild(td7);

  //   let tbody = document.getElementsByTagName("tbody")[0];

  //   tbody.appendChild(tr);
  }

// let jsonDataAll = [];
// for (i = 0; i < chartData.length; i++) {
//   let dataString = JSON.stringify(chartData[i]);
//   let parse = JSON.parse(dataString);
//   jsonDataAll.push(parse);
// }
// console.log(jsonDataAll);

//중복제거, sao값 더하기
let mapData = {};

for (data of chartData) {
  if (data.country_region_code in mapData) {

    mapData[data.country_region_code].symptom_Abdominal_obesityi += data.symptom_Abdominal_obesityi;
  } else {
    mapData[data.country_region_code] = data;
  }
}

console.table(mapData);
let fruits = ['Apple', 'Banana', 'Chery'];
console.log(fruits[1]);
