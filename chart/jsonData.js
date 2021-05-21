let chartData = [
    {
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
];

let jsonDataAll = [];
for(i=0; i<chartData.length; i++){
    let dataString = JSON.stringify(chartData[i]);
    let parse = JSON.parse(dataString);
    jsonDataAll.push(parse);    
}
console.log(jsonDataAll);

//중복제거, sao값 더하기
let mapData = {};
let crc = {}; //country_region_code
let sao = {}; // symptom_Abdominal_obesityi
for(data of chartData){
    if(data.country_region_code in mapData){
        mapData[data.country_region_code].symptom_Abdominal_obesityi += data.symptom_Abdominal_obesityi;
    }else{
        mapData[data.country_region_code] = data;
    }
}
console.table(mapData);

