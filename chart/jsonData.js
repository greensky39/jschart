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

// fetch('http://localhost:8000/data?size=10')
//   .then(response => response.json())
//   .then(data => console.log(data))

function buildTable(data) {
  let table = document.getElementById('tableArea')
  for (let i = 0; i < data.length; i++) {
    let row = `<tr> 
        <td> ${data[i].row} </td> 
        <td> ${data[i].country_region_code} </td> 
        <td> ${data[i].country_region} </td>
        <td> ${data[i].region} </td> 
        <td> ${data[i].place_id} </td> 
        <td> ${data[i].date} </td>  
        <td> ${data[i].symptom_Abdominal_obesityi.toFixed(2)} </td>  
        </tr>`
    table.innerHTML += row
  }
  let tr = document.createElement("tr");
  let tbody = document.getElementsByTagName("tbody")[0];

  tbody.appendChild(tr);
}

buildTable(chartData);

//중복제거, sao값 더하기
let mapData = {};
for (data of chartData) {
  if (data.country_region_code in mapData) {
    mapData[data.country_region_code].symptom_Abdominal_obesityi += data.symptom_Abdominal_obesityi;
  } else {
    mapData[data.country_region_code] = data;
  }
}

// for(prop in chartData){
//   console.log(prop + "," + chartData[prop]['country_region_code'] + "," + chartData[prop]['symptom_Abdominal_obesityi']);
// }

// keys, country_region_code
let mdKeys = [];
for (prop in mapData) {
  // console.log(prop + "," + mapData[prop].symptom_Abdominal_obesityi);
  mdKeys.push(prop)
}
console.log(mdKeys);

// values, symptom_Abdominal_obesityi
let mdValues = [];
for (prop in mapData) {
  // console.log(prop + "," + mapData[prop].symptom_Abdominal_obesityi);
  mdValues.push(mapData[prop].symptom_Abdominal_obesityi.toFixed(2));
}
console.log(mdValues);

// mapData 테이블
function buildTable2(data) {
  let table = document.getElementById('tableArea2')
  for (prop in mapData) {
    let row = `<tr> 
      <td> ${data[prop].row} </td> 
      <td> ${data[prop].country_region_code} </td> 
      <td> ${data[prop].country_region} </td>
      <td> ${data[prop].region} </td> 
      <td> ${data[prop].place_id} </td> 
      <td> ${data[prop].date} </td>  
      <td> ${data[prop].symptom_Abdominal_obesityi.toFixed(2)} </td>  
      </tr>`
    table.innerHTML += row
  }
  let tr = document.createElement("tr");
  let tbody = document.getElementsByTagName("tbody")[0];

  tbody.appendChild(tr);
}
buildTable2(mapData);