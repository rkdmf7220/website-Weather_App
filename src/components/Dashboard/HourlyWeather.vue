<template>
  <div class="card-item" style="overflow: hidden">
    <div class="tab-menu">
      <div class="tab-btn"></div>
      <span class="vertical-bar"></span>
      <div class="tab-btn"></div>
    </div>
    <div class="chart-slide-wrap" style="width: 1000px; height: 40px;">
      <canvas id="chart" width="1160" height="40"></canvas>
      <ul class="chart-data-list">
        <li class="chart-data-item"></li>
      </ul>
    </div>
  </div>
</template>

<script>
import { Chart, ArcElement, LineElement, BarElement, PointElement, BarController, BubbleController, DoughnutController, LineController, PieController, PolarAreaController, RadarController, ScatterController, CategoryScale, LinearScale, LogarithmicScale, RadialLinearScale, TimeScale, TimeSeriesScale, Decimation, Filler, Legend, Title, Tooltip, SubTitle } from 'chart.js';

Chart.register( ArcElement, LineElement, BarElement, PointElement, BarController, BubbleController, DoughnutController, LineController, PieController, PolarAreaController, RadarController, ScatterController, CategoryScale, LinearScale, LogarithmicScale, RadialLinearScale, TimeScale, TimeSeriesScale, Decimation, Filler, Legend, Title, Tooltip, SubTitle );
// Chart.defaults.elements.point.backgroundColor = "white"
export default {
  name: "HourlyWeather",
  data() {
    return {
      myChart: null
    }
  },
  mounted() {
    this.fillData();
  },
  methods: {
    fillData() {
      const ctx = document.getElementById('chart').getContext('2d');
      this.myChart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10',
            '11', '12', '13', '14', '15', '16', '17', '18', '19', '20',
            '21', '22', '23', '24'],
          datasets: [{
            label: '테스트 데이터셋',
            data: [
                28, 26, 26, 25, 25, 24, 24, 23, 23, 23,
                23, 23, 23, 24, 24, 25, 24, 24, 24, 24,
                24, 25, 24, 24
            ],
            borderColor: "rgba(255, 201, 14, 1)",
            fill: false,
            pointBackgroundColor: "#fff",
            lineTension: 0
          }]
        },
        options: {
          responsive: false,
          title: {},
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
            }
          }
        }
      })
    }
  }
}
</script>

<style scoped lang="scss">
  .card-item{
    width: 580px;
    height: 194px;
    flex-shrink: 0;
  }
</style>