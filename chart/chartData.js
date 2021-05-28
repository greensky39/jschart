
let xOptionData = {};
let yOptionData = {};
let pieOptionData = {};

function chart_X_data() {
  // X axis
  let selX = document.getElementById("inputX");
  let selXIndex = document.getElementById("inputX").options.selectedIndex;
  for (let i = 0; i <= selX.length; i++) {
    if (selX.options[selXIndex].value == "selCrc") {
      xOptionData = mdKeys;
    }
  }
}

function chart_Y_data() {
  // Y axis
  let selY = document.getElementById("inputY");
  let selYIndex = document.getElementById("inputY").options.selectedIndex;
  for (let i = 0; i <= selY.length; i++) {
    if (selY.options[selYIndex].value == "selSao") {
      yOptionData = mdValues;
    }
  }
}

function chart_pie_data() {
  // 
  let selY = document.getElementById("inputY");
  let selYIndex = document.getElementById("inputY").options.selectedIndex;
  for (let i = 0; i <= selY.length; i++) {
    if (selY.options[selYIndex].value == "selSao") {
      pieOptionData = mdkeyVal;
    }
  }
}
