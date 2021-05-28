
// 차트 출력 부분
// chartDom
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
}

function pieChart() {
  var myChart = echarts.init(chartDom);
  var option;

  option = {
    title: {
      text: '차트',
      subtext: '파이 차트',
      left: 'center'
    },
    tooltip: {
      trigger: 'item'
    },
    legend: {
      orient: 'vertical',
      left: 'left',
    },
    series: [{
      name: 'sao',
      type: 'pie',
      radius: '50%',
      data: pieOptionData,
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }]
  };

  option && myChart.setOption(option);
}