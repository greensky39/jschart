let xOptionData = {};
let yOptionData = {};

function initChart() {
  //시각화 유형
  let selViewType = document.getElementById("viewType");
  let selViewTypeIndex = document.getElementById("viewType").options.selectedIndex;
  // X axis
  let selX = document.getElementById("inputX");
  let selXIndex = document.getElementById("inputX").options.selectedIndex;
  // Y axis
  let selY = document.getElementById("inputY");
  let selYIndex = document.getElementById("inputY").options.selectedIndex;

  console.log("viewType : " + selViewType.options[selViewTypeIndex].value);
  console.log("inputX : " + selX.options[selXIndex].value);
  console.log("inputY : " + selY.options[selYIndex].value);

  if (selViewType.options[selViewTypeIndex].value == 1) {
    if (selX.options[selXIndex].value == "selCrc") {
      if (selY.options[selYIndex].value == "selSao") {
        lineChart();
      }
    }
  } else if (selViewType.options[selViewTypeIndex].value == 2) {
    if (selX.options[selXIndex].value == "selCrc") {
      if (selY.options[selYIndex].value == "selSao") {
        barChart();
      }
    }
  }
}

function chart_X_data() {
  // X axis
  let selX = document.getElementById("inputX");
  let selXIndex = document.getElementById("inputX").options.selectedIndex;
  for(let i=0; i<=selX.length; i++){
    if (selX.options[selXIndex].value == "selCrc") {
      xOptionData = mdKeys;
    }
  }
}

function chart_Y_data() {
    // Y axis
    let selY = document.getElementById("inputY");
    let selYIndex = document.getElementById("inputY").options.selectedIndex;
    for(let i=0; i<=selY.length; i++){
      if (selY.options[selYIndex].value == "selSao") {
        yOptionData = mdValues;
      }
    }

}

// title 출력 부분
let titleTemp;

function printTitle() {
  let input = document.getElementById("inputTitle").value;
  titleTemp = input;
  document.getElementById("printTitle").value = titleTemp;
}

window.onload = function () {
  // lineChart();
  console.log('radioYes is ' + document.getElementById('radioYes').checked);
  console.log('radioNo is ' + document.getElementById('radioNo').checked);
};

// 차트 출력 부분
const chartDom = document.getElementById('chartArea');

function lineChart() {
  let myChart = echarts.init(chartDom);
  let option;

  option = {
    xAxis: {
      type: 'category',
      data: xOptionData
    },
    yAxis: {
      type: 'value'
    },
    series: [{
      data: yOptionData,
      type: 'line'
    }]
  };

  option && myChart.setOption(option);
  console.log("xoptondata :", xOptionData);
  console.log("yoptondata :", yOptionData);
}

function barChart() {
  let myChart = echarts.init(chartDom);
  let option;

  option = {
    xAxis: {
      type: 'category',
      data: xOptionData
    },
    yAxis: {
      type: 'value'
    },
    series: [{
      data: yOptionData,
      type: 'bar',
      showBackground: true,
      backgroundStyle: {
        color: 'rgba(180, 180, 180, 0.2)'
      }
    }]
  };

  option && myChart.setOption(option);
  console.log("xoptondata :", xOptionData);
  console.log("yoptondata :", yOptionData);
}

function xyDataInput() {
  // for (let valx = 0; valx < inputX.options.length; i++) {

  // }
  console.log("func test !!");
}