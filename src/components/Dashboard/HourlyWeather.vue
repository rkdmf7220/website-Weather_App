<template>
  <div class="card-item" style="overflow: hidden">
    <div class="tab-menu">
      <button @click="onClickTab('WEATHER')" :class="[{active: selectedTab === 'WEATHER'}]" class="tab-btn">날씨</button>
      <span class="vertical-bar"></span>
      <button @click="onClickTab('WIND')" :class="[{active: selectedTab === 'WIND'}]" class="tab-btn">바람</button>
      <span class="vertical-bar"></span>
      <button @click="onClickTab('RAINFALL')" :class="[{active: selectedTab === 'RAINFALL'}]" class="tab-btn">강수</button>
      <span class="vertical-bar"></span>
      <button @click="onClickTab('HUMIDITY')" :class="[{active: selectedTab === 'HUMIDITY'}]" class="tab-btn">습도</button>
    </div>
    <div class="chart-slide-wrap">
      <canvas id="chart" width="2361" height="40"></canvas>
      <chart-data-list :chart-data="chartTemperatureData"/>
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
      selectedTab : 'WEATHER',

    }
  },
  components: {ChartDataList},
  computed: {
    chartTemperatureData() {
      return this.$store.state.chartTemperatureList
    },
    chartHumidityData() {
      return this.$store.state.chartHumidityList
    }
  },
  watch: {
    chartTemperatureData() {
      this.fillData()
    },
    chartHumidityData() {
      this.fillData
    },
    deep: true
  },
  mounted() {
    this.fillData();
  },
  methods: {
    onClickTab(type) {
      this.selectedTab = type
    },
    fillData() {
      if (chart !== undefined) {
        chart.destroy()
      }
      ctx = document.getElementById('chart').getContext('2d');
      gradientFill = ctx.createLinearGradient(0, 0, 0, 50);
      gradientFill.addColorStop(0, "rgba(255, 225, 120, 1)");
      gradientFill.addColorStop(1, "rgba(255, 255, 255, 0.5)");
      chart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10',
            '11', '12', '13', '14', '15', '16', '17', '18', '19', '20',
            '21', '22', '23', '24','','','','','','','','','','','','','','','','','','','','','','','',''],
          datasets: [{
            label: '테스트 데이터셋',
            data: this.chartTemperatureData,
            borderColor: "rgba(255, 201, 14, 1)",
            fill: true,
            backgroundColor: gradientFill,
            pointBackgroundColor: "#fff",
            lineTension: 0.4
          }]
        },
        options: {
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
    height: 194px;
    flex-shrink: 0;
    flex-direction: column;
    justify-content: space-between;

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

      #chart{
        position: absolute;
        left: 14px;
        top: 40px;
      }
    }
  }
</style>