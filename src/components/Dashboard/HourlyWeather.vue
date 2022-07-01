<template>
  <div class="card-item">
    <div class="tab-menu">
      <button @click="onClickTab('weather', chartTemperatureData)" :class="[{active: selectedTab === 'weather'}]" class="tab-btn">날씨</button>
      <span class="vertical-bar"></span>
      <button @click="onClickTab('wind', chartWindData)" :class="[{active: selectedTab === 'wind'}]" class="tab-btn">바람</button>
      <span class="vertical-bar"></span>
      <button @click="onClickTab('rainfall', chartHumidityData)" :class="[{active: selectedTab === 'rainfall'}]" class="tab-btn">강수</button>
      <span class="vertical-bar"></span>
      <button @click="onClickTab('humidity', chartHumidityData)" :class="[{active: selectedTab === 'humidity'}]" class="tab-btn">습도</button>
    </div>
    <div class="chart-slide-wrap">
        <canvas id="chart" :width="chartOption.width" :height="chartOption.height" :class="`${selectedTab}`"></canvas>
      <chart-data-list :chart-data="chartData" :chart-category="this.selectedTab"/>
    </div>
  </div>
</template>

<script>
// import {mapState} from "vuex";
import ChartDataList from "./ChartDataList";
import { Chart, ArcElement, LineElement, BarElement, PointElement, BarController, BubbleController, DoughnutController, LineController, PieController, PolarAreaController, RadarController, ScatterController, CategoryScale, LinearScale, LogarithmicScale, RadialLinearScale, TimeScale, TimeSeriesScale, Decimation, Filler, Legend, Title, Tooltip, SubTitle } from 'chart.js';
Chart.register( ArcElement, LineElement, BarElement, PointElement, BarController, BubbleController, DoughnutController, LineController, PieController, PolarAreaController, RadarController, ScatterController, CategoryScale, LinearScale, LogarithmicScale, RadialLinearScale, TimeScale, TimeSeriesScale, Decimation, Filler, Legend, Title, Tooltip, SubTitle )
let chart;
let ctx;
let gradientFill

export default {
  name: "HourlyWeather",
  data() {
    return {
      selectedTab : 'weather',
      chartData: [],
      chartOption: {
        chartType: "line",
        mainColor: "#FFC90E",
        gradientColor1: "#FFE178",
        gradientColor2: "rgba(255, 255, 255, 0.4)",
        gradientY1: 50,
        min: null,
        max: null,
        width: 2361,
        height: 50
      }
    }
  },
  components: {ChartDataList},
  computed: {
    chartTemperatureData() {
      return this.$store.state.chartTemperatureList
    },
    chartWindData() {
      return this.$store.state.chartWindList
    },
    chartHumidityData() {
      return this.$store.state.chartHumidityList
    }
  },
  watch: {
    chartTemperatureData() {
      // this.fillData()
      if (this.selectedTab === "weather") {
        this.chartData = [...this.chartTemperatureData]
      }
    },
    chartWindData() {
      if (this.selectedTab === "wind") {
        this.chartData = [...this.chartWindData]
      }
    },
    chartHumidityData() {
      if (this.selectedTab === "humidity") {
        this.chartData = [...this.chartHumidityData]
      }
    },
    chartData() {
      // console.log(this.chartOption)
      this.fillData(this.chartOption.chartType, this.chartOption.mainColor, this.chartOption.gradientColor1, this.chartOption.gradientColor2, this.chartOption.gradientY1, this.chartOption.borderWidth, this.chartOption.min, this.chartOption.max, this.chartOption.width, this.chartOption.height)
    },
    deep: true
  },
  methods: {
    onClickTab(category, chartData) {
      // console.log('chartData', chartData)
      this.selectedTab = category;
      this.chartData = [...chartData];
      this.changeChartOption(category)
    },
    changeChartOption(category) {
      switch (category) {
        case "weather":
          this.chartOption = {
            chartType: "line",
            mainColor: "#FFC90E",
            gradientColor1: "#FFE178",
            gradientColor2: "#FFF8E0",
            gradientY1: 50,
            borderWidth: 2,
            min: null,
            max: null,
            width: 2361,
            height: 58
          }
              break;

        case "wind":
          this.chartOption = {
            chartType: "bar",
            mainColor: "#23e05c",
            gradientColor1: "#B1F8C6",
            gradientColor2: "#DEFCE7",
            // gradientColor2: "rgba(255, 255, 255, 0.4)",
            gradientY1: 50,
            borderWidth: {
              top: 3,
            },
            min: null,
            max: 10,
            width: 2400,
            height: 48
          }
              break;

        case "rainfall":
          this.chartOption = {
            chartType: "line",
            mainColor: "#85B6FD",
            gradientColor1: "#CEE2FE",
            gradientColor2: "rgba(255, 255, 255, 0.4)",
            gradientY1: 50,
            borderWidth: 2,
            min: null,
            max: null,
            width: 2361,
            height: 40
          }
              break;

        case "humidity":
          this.chartOption = {
            chartType: "line",
            mainColor: "#85B6FD",
            gradientColor1: "#CEE2FE",
            gradientColor2: "rgba(255, 255, 255, 0.4)",
            gradientY1: 64,
            borderWidth: 2,
            min: 0,
            max: 100,
            width: 2361,
            height: 56
          }
              break;
            default:
      }
    },
    fillData(chartType, mainColor, gradientColor1, gradientColor2, gradientY1, borderWidth, minValue, maxValue, width, height) {
      if (chart !== undefined) {
        chart.destroy()
      }
      ctx = document.getElementById('chart').getContext('2d');
      gradientFill = ctx.createLinearGradient(0, 0, 0, gradientY1);
      gradientFill.addColorStop(0, gradientColor1);
      gradientFill.addColorStop(1, gradientColor2);
      // console.log("chartData :", this.chartData)
      // console.log("chartTempData :", this.chartTemperatureData)
      ctx.canvas.width = width;
      ctx.canvas.height = height;
      chart = new Chart(ctx, {
        type: chartType,
        data: {
          labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10',
            '11', '12', '13', '14', '15', '16', '17', '18', '19', '20',
            '21', '22', '23', '24','','','','','','','','','','','','','','','','','','','','','','','',''],
          datasets: [{
            label: '테스트 데이터셋',
            data: this.chartData,
            borderColor: mainColor,
            fill: true,
            backgroundColor: gradientFill,
            borderWidth: borderWidth,
            borderSkipped: false,
            pointBackgroundColor: "#fff",
            lineTension: 0.4
          }]
        },
        options: {
          layout: {
            padding: {
              top: 0,
              bottom: 0
            },
            margin: {
              top: 0,
              bottom: 0
            }
          },
          clip: false,
          parsing: {
          },
          responsive: false,
          title: {},
          hover: {
            mode: null
          },
          scales: {
            y: {
              min: minValue,
              max: maxValue,
              display: false,
              grid: {
                drawBorder: false
              }
            },
            x: {
              display: false,
              grid: {
                drawBorder: false
              }
            },
          },
          plugins: {
            legend: {
              display: false
            },
            tooltip: {
              enabled: false
            }
          }
        }
      })
      // chart.data.datasets[0].data = this.chartTemperatureData
      chart.update()
    }
    /*fillData() {
      if (chart !== undefined) {
        chart.destroy()
      }
      const ctx = document.getElementById('chart').getContext('2d');
      chart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10',
            '11', '12', '13', '14', '15', '16', '17', '18', '19', '20',
            '21', '22', '23', '24','','','','','','','','','','','','','','','','','','','','','','','',''],
          datasets: [{
            label: '테스트 데이터셋',
            data: this.chartHumidityData,
            borderColor: "rgba(255, 201, 14, 1)",
            fill: false,
            pointBackgroundColor: "#fff",
            lineTension: 0
          }]
        },
        options: {
          barPercentage: 0.5,
          parsing: {
          },
          responsive: false,
          title: {},
          hover: {
            mode: null
          },
          scales: {
            y: {
              display: false,
              grid: {
                drawBorder: false
              }
            },
            x: {
              display: false,
              grid: {
                drawBorder: false
              }
            }
          },
          plugins: {
            legend: {
              display: false
            },
            tooltip: {
              enabled: false
            }
          }
        }
      })
      // chart.data.datasets[0].data = this.chartTemperatureData
      chart.update()
    }*/
  }
}
</script>

<style scoped lang="scss">
  .card-item{
    width: 580px;
    height: 218px;
    flex-shrink: 0;
    flex-direction: column;
    justify-content: space-between;
    //overflow: hidden;

    .tab-menu{
      line-height: 1em;

      .tab-btn{
        background: transparent;
        border: none;
        padding: 4px 8px 8px 8px;
        position: relative;

        &.active::after{
          content: '';
          position: absolute;
          bottom: 0;
          width: 60%;
          height: 2px;
          left: 20%;
          background-color: #1E90FF;
        }
      }
      .vertical-bar{
        font-size: 0.75em;
        border-left: 1px solid #bbbbbb;
      }
    }

    .chart-slide-wrap{
      position: relative;
      width: 2390px;

/*      .chart-canvas-wrap{
        position: relative;
        width: 2361px;
        height: 40px;
      }*/

      #chart{
        position: absolute;
        left: 14px;
        top: 52px;

        &.weather{
          top: 48px;
        }

        &.wind{
          left: -5px;
        }

        &.humidity{
          top: 28px;
        }
      }
    }
  }
</style>