var chartData = {
    result: [
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
        }
    ]
}
console.log(chartData);

function jsonOutput(){
    var dataSet = chartData.result;
    for(i=0; i<chartData.result.length; i++){
        console.log(dataSet[i]);
    }
}
jsonOutput();

function jsonDataSet(){
    var dataSet = chartData.result;
    var xAxis = document.getElementById('xaxis');
    var yAxis = document.getElementById('yaxis');;
    // for(i=0; i<chartData.result.length; i++){

    // }
}