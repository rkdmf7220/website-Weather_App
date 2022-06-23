<template>
  <div class="card-item" style="overflow: hidden">
    <div class="tab-menu">
      <button class="tab-btn active">날씨</button>
      <span class="vertical-bar"></span>
      <button class="tab-btn">바람</button>
      <span class="vertical-bar"></span>
      <button class="tab-btn">강수</button>
      <span class="vertical-bar"></span>
      <button class="tab-btn">습도</button>
    </div>
    <div class="chart-slide-wrap" style="width: 1000px; height: 40px;">
      <canvas id="chart" width="2390" height="40"></canvas>
      <ul class="chart-data-list">
<!--        <li class="chart-data-item" v-for="item in this.chartTemperatureList">
          <span class="weather-icon"></span>
          <span class="weather-value">{{item.}}</span>
          <span class="weather-hour"></span>
        </li>-->
      </ul>
    </div>
  </div>
</template>

<script>
// import {mapState} from "vuex";
import { Chart, ArcElement, LineElement, BarElement, PointElement, BarController, BubbleController, DoughnutController, LineController, PieController, PolarAreaController, RadarController, ScatterController, CategoryScale, LinearScale, LogarithmicScale, RadialLinearScale, TimeScale, TimeSeriesScale, Decimation, Filler, Legend, Title, Tooltip, SubTitle } from 'chart.js';
Chart.register( ArcElement, LineElement, BarElement, PointElement, BarController, BubbleController, DoughnutController, LineController, PieController, PolarAreaController, RadarController, ScatterController, CategoryScale, LinearScale, LogarithmicScale, RadialLinearScale, TimeScale, TimeSeriesScale, Decimation, Filler, Legend, Title, Tooltip, SubTitle )
let chart

export default {
  name: "HourlyWeather",
  computed: {
    chartTemperatureData() {
      return this.$store.state.chartTemperatureList
    }
  },
  watch: {
    chartTemperatureData() {
      this.fillData()
    },
    deep: true
  },
  mounted() {
    this.fillData();
  },
  methods: {
    fillData() {
      if (chart !== undefined) {
        chart.destroy()
      }
      const ctx = document.getElementById('chart').getContext('2d');
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
            fill: false,
            pointBackgroundColor: "#fff",
            lineTension: 0
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
  }
}
</script>

<style scoped lang="scss">
  .card-item{
    width: 580px;
    height: 194px;
    flex-shrink: 0;
    flex-direction: column;

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

      #chart{
        position: absolute;
      }
    }
  }
</style>