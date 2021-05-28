

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
  // case
  let selViewTypeOption = selViewType.options[selViewTypeIndex].value;
  switch (selViewTypeOption) {
    case '1':
      if (selX.options[selXIndex].value == "selCrc" && selY.options[selYIndex].value == "selSao") {
        lineChart();
      }
      break;
    case '2':
      if (selX.options[selXIndex].value == "selCrc" && selY.options[selYIndex].value == "selSao") {
        barChart();
      }
      break;
    case '3':
      if (selX.options[selXIndex].value == "selCrc" & selY.options[selYIndex].value == "selSao") {
        pieChart();
      }
      break;
    default:
      alert('Unknown value');
  }
}

/*
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
*/

/*
function initChart() {
  if (selViewType.options[selViewTypeIndex].value == 1) {
    for(let i=0; i<=selX.length; i++){
      if (selX.options[selXIndex].value == selX[i]) {
        selX[i] = xDataArr[i];
      }
      for(let j=0; j<=selY.length; j++){
        if(selY.options[selYIndex].value == selY[j]){
          selY[j] = yDataArr[j];
        }
         
      }
    }
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
*/


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

