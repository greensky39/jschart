let testMapData = {};
let tpData = {};
async function showData() {

  // JSON 읽기
   let response = await fetch('http://localhost:8000/data?size=30&page=1');
  //let response = await fetch('http://127.0.0.1:5500/promiseTest.html');
  let tpData1 = await response.json();

  // 1초 대기
  await new Promise((resolve, reject) => setTimeout(resolve, 1000));
  
  for (let data of tpData1.result) {
    if (data.country_region_code in testMapData) {
      testMapData[data.country_region_code].symptom_Abdominal_obesityi += data.symptom_Abdominal_obesityi;
    } else {
      testMapData[data.country_region_code] = data;
    }
  }

  console.log("tpData :",tpData1);
  console.log("testMapData :",testMapData);
  
  return testMapData;
}
console.log("testMapData!!! :",testMapData);
//showData();

let chartData = {
  result: [{
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
}
console.log(chartData);

function buildTable(data) {
  console.log('buildTable called')
  console.log(data)
  let table = document.getElementById('tableArea')
  table.innerHTML = ''
  console.log(data.AM)
  for (const j in data){
    const i = data[j]
    let row = `<tr> 
        <td> ${i.row} </td> 
        <td> ${i.country_region_code} </td> 
        <td> ${i.country_region} </td>
        <td> ${i.region} </td> 
        <td> ${i.placeId} </td> 
        <td> ${i.date} </td>  
        <td> ${i.symptom_Abdominal_obesityi} </td>  
        </tr>`
    table.innerHTML += row
  }
  let tr = document.createElement("tr");
  let tbody = document.getElementsByTagName("tbody")[0];

  tbody.appendChild(tr);
}

//buildTable(chartData.result);
// buildTable(tpData);
//console.log(buildTable(tpData));


//중복제거, sao값 더하기
let mapData = {};
for (let data of chartData.result) {
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
  mdKeys.push(prop);
}
console.log(mdKeys);

// values, symptom_Abdominal_obesityi
let mdValues = [];
for (prop in mapData) {
  // console.log(prop + "," + mapData[prop].symptom_Abdominal_obesityi);
  mdValues.push(mapData[prop].symptom_Abdominal_obesityi.toFixed(2));

}
console.log(mdValues);

// keys, values
const mdkeyVal = [];
for (let i = 0; i <= mdKeys.length - 1; i++) {
  mdkeyVal.push({
    value: mdValues[i],
    name: mdKeys[i]
  });
}
console.log(mdkeyVal);

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
//buildTable2(mapData);