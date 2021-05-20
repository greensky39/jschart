
var chartData = [
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

// var jsonDataAll = [];
// for(i=0; i<chartData.length; i++){
//     var dataString = JSON.stringify(chartData[i]);
//     var parse = JSON.parse(dataString);
//     jsonDataAll.push(parse);    
// }
// console.log(jsonDataAll);

// var jsonDataIter = chartData.filter((item1, idx1)=>{
//     return chartData.findIndex((item2, idx2)=>{
//         return item1.country_region_code == item2.country_region_code;
//     }) == idx1;
// });
// console.table(jsonDataIter);

// const keys = ['symptom_Abdominal_obesityi'];
// jsonDataSum = chartData.reduce(
//     (r, o) => (keys.forEach(k => r[k] += o[k]), r), 
//     Object.fromEntries(keys.map(k => [k, 0]))
// );

// console.log(jsonDataSum);

var jsonfilterTest1 = chartData.filter((item1, idx1)=>{
    return chartData.findIndex((item2, idx2)=>{
        return item1.country_region_code == item2.country_region_code;
    }) == idx1;
});
console.table(jsonfilterTest1);


var testJson = 
[
    {name : "이건", salary : 50000000},
    {name : "홍길동", salary : 1000000},
    {name : "임신구", salary : 3000000},
    {name : "이승룡", salary : 2000000}
];

var newJson = testJson.filter(
    function(element){
    var newArr = [];
        for(i=0; i<testJson.length; i++);{
            if(element.name == "이건"){
                // console.log('이건');
            }
        }
    }
);


var njData = 
[
    {
        "id" : 1,
        "name" : "kimys",
        "count" : 5
    },
    {
        "id" : 2,
        "name" : "ahndy",
        "count" : 1
    },
    {
        "id" : 3,
        "name" : "choi",
        "count" : 3
    },
    {
        "id" : 4,
        "name" : "kimys",
        "count" : 2
    },
    {
        "id" : 2,
        "name" : "ahndy",
        "count" : 1
    },
    {
        "id" : 4,
        "name" : "yoo",
        "count" : 3
    },
    {
        "id" : 3,
        "name" : "kimys",
        "count" : 10
    },
    {
        "id" : 1,
        "name" : "kimys",
        "count" : 10
    }
    
];

var newDataArr = [];
for(var data in njData){
    var string = JSON.stringify(njData[data]);
    var parse = JSON.parse(string);
    newDataArr.push(parse);
    
}
var newDataArr1 = [];
for(var i=0; i<newDataArr.length; i++){
    for(j = i+1; j<newDataArr.length; j++){
    //     else if(newDataArr[i].id == newDataArr[j].id){
    //         newDataArr[i].count += newDataArr[j].count;
    //         newDataArr1.push(newDataArr[i]);
    //     }
    }
}
console.log(newDataArr1);

var newDataArr2 = [];
var flag = false;
for(var i=0; i<newDataArr.length; i++){
    for(var j=i+1; j<newDataArr.length; j++){
        if(newDataArr[i].id == newDataArr[j].id){
            flag = true;
        }
    }
    if(flag){
        newDataArr2.push(newDataArr[i]);
    }else{
        console.log('노중복');
    }
}