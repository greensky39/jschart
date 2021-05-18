function selectChart(){
    var viewType = document.getElementById("viewType");
    var val;

    for(i=0; i<=viewType.options.length; i++) {
        if(viewType.options[i].selected == true) {
            val = viewType.options[i].value;
            if(val == '1'){
                lineChart();
            }
            else if(val == '2'){
                barChart();
            }
            break;
        }
    }

}

function printTitle()  {
    const title = document.getElementById('title').value;
    document.getElementById("result").innerText = title;
}
window.onload = function(){
    // lineChart();
    stackBarChart();
    console.log('radioYes is ' + document.getElementById('radioYes').checked);
    console.log('radioNo is ' + document.getElementById('radioNo').checked);
};

var chartDom = document.getElementById('chartArea');
function lineChart(){
    var myChart = echarts.init(chartDom);
    var option;

    option = {
        xAxis: {
            type: 'category',
            data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']
        },
        yAxis: {
            type: 'value'
        },
        series: [{
            data: [150, 230, 224, 218, 135, 147, 260, 500, 700, 100],
            type: 'line'
        }]
    };

    option && myChart.setOption(option);
}

function barChart(){
    var myChart = echarts.init(chartDom);
    var option;

    option = {
        xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
            type: 'value'
        },
        series: [{
            data: [120, 200, 150, 80, 70, 110, 130],
            type: 'bar',
            showBackground: true,
            backgroundStyle: {
                color: 'rgba(180, 180, 180, 0.2)'
            }
        }]
    };

    option && myChart.setOption(option);
}
