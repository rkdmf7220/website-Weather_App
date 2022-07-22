<template>
  <div class="card-wrap">
    <div class="card-item">
      <div class="card-top-wrap">
        <div class="tab-menu">
          <button @click="onClickTab('weather', chartTemperatureData)" :class="[{active: selectedTab === 'weather'}]"
                  class="tab-btn">날씨
          </button>
          <span class="vertical-bar"></span>
          <button @click="onClickTab('wind', chartWindData)" :class="[{active: selectedTab === 'wind'}]"
                  class="tab-btn">
            바람
          </button>
          <span class="vertical-bar"></span>
          <button @click="onClickTab('rainfall', chartRainfallData)" :class="[{active: selectedTab === 'rainfall'}]"
                  class="tab-btn">강수
          </button>
          <span class="vertical-bar"></span>
          <button @click="onClickTab('humidity', chartHumidityData)" :class="[{active: selectedTab === 'humidity'}]"
                  class="tab-btn">습도
          </button>
        </div>
        <div class="chart-data-info small-text gray2">
          <span>{{ this.chartDataInfo }}</span>
        </div>
      </div>
      <div @scroll="displaySlideBtn" class="chart-slide-wrap" id="container">
        <canvas id="chart" :width="chartOption.width" :height="chartOption.height"
                :class="`${selectedTab}`"></canvas>
        <chart-data-list :chart-data="chartData" :chart-category="this.selectedTab"/>
      </div>
      <button @click="onClickChartSlideBtn('prev')" :class="{'is-on': prevBtnOn}" class="scroll-btn btn-prev">←</button>
      <button @click="onClickChartSlideBtn('next')" :class="{'is-on': nextBtnOn}" class="scroll-btn btn-next">→</button>
    </div>
  </div>
</template>

<script>
import ChartDataList from "./ChartDataList";
import {
  Chart,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  LineController,
  CategoryScale,
  LinearScale,
  Filler




} from 'chart.js';

Chart.register( LineElement, BarElement, PointElement, BarController, LineController,  CategoryScale, LinearScale, Filler )
let chart;
let ctx;
let gradientFill

export default {
  name: "HourlyWeather",
  data() {
    return {
      selectedTab: 'weather',
      chartData: [],
      chartOption: {
        chartType: "line",
        mainColor: "#FFC90E",
        gradientColor1: "#FFE178",
        gradientColor2: "#fffbed",
        gradientY0: 6,
        gradientY1: 58,
        min: null,
        max: null,
        width: 2400,
        height: 72,
        paddingRight: 45
      },
      prevBtnOn: false,
      nextBtnOn: true
    }
  },
  components: {ChartDataList},
  computed: {
    chartTemperatureData() {
      return this.$store.state.chartTemperatureList
    },
    chartRainfallData() {
      return this.$store.state.chartRainfallList
    },
    chartWindData() {
      return this.$store.state.chartWindList
    },
    chartHumidityData() {
      return this.$store.state.chartHumidityList
    },
    chartDataInfo() {
      let info
      switch (this.selectedTab) {
        case 'weather' :
          info = null
          break;
        case 'wind' :
          info = '풍향│풍속 ㎧'
          break;
        case 'rainfall' :
          info = '확률│강수량 ㎜'
          break;
        case 'humidity' :
          info = '습도 %'
          break;
        default :
      }
      return info
    }
  },
  watch: {
    chartTemperatureData() {
      // this.fillData()
      if (this.selectedTab === "weather") {
        this.chartData = [...this.chartTemperatureData]
      }
    },
    chartRainfallData() {
      if (this.selectedTab === "rainfall") {
        this.chartData = [...this.chartRainfallData]
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
      this.fillData(this.chartOption.chartType, this.chartOption.mainColor, this.chartOption.gradientColor1, this.chartOption.gradientColor2, this.chartOption.gradientY0, this.chartOption.gradientY1, this.chartOption.borderWidth, this.chartOption.min, this.chartOption.max, this.chartOption.width, this.chartOption.height, this.chartOption.paddingRight)
    },
    deep: true
  },
  methods: {
    onClickTab(category, chartData) {
      this.selectedTab = category;
      this.chartData = [...chartData];
      this.changeChartOption(category);
      document.getElementsByClassName('chart-slide-wrap')[0].scrollLeft = 0;
    },
    changeChartOption(category) {
      switch (category) {
        case "weather":
          this.chartOption = {
            chartType: "line",
            mainColor: "#FFC90E",
            gradientColor1: "#FFE178",
            gradientColor2: "#fffbed",
            gradientY0: 6,
            gradientY1: 58,
            borderWidth: 2,
            min: null,
            max: null,
            width: 2400,
            height: 72,
            paddingRight: 45
          }
          break;

        case "wind":
          this.chartOption = {
            chartType: "bar",
            mainColor: "#23e05c",
            gradientColor1: "#B1F8C6",
            gradientColor2: "#DEFCE7",
            gradientY0: 0,
            gradientY1: 50,
            borderWidth: {
              top: 3,
            },
            min: null,
            max: null,
            width: 2399.999,
            height: 64,
            paddingRight: 0
          }
          break;

        case "rainfall":
          this.chartOption = {
            chartType: "line",
            mainColor: "#85B6FD",
            gradientColor1: "#CEE2FE",
            gradientColor2: "#00ccff",
            gradientY0: 0,
            gradientY1: 50,
            borderWidth: 2,
            min: null,
            max: null,
            width: 2400.000,
            height: 40,
            paddingRight: 45
          }
          break;

        case "humidity":
          this.chartOption = {
            chartType: "line",
            mainColor: "#85B6FD",
            gradientColor1: "#CEE2FE",
            gradientColor2: "rgba(250, 252, 255, 1)",
            gradientY0: 6,
            gradientY1: 70,
            borderWidth: 2,
            min: 0,
            max: 100,
            width: 2399.9999,
            height: 80,
            paddingRight: 45
          }
          break;
        default:
      }
    },
    fillData(chartType, mainColor, gradientColor1, gradientColor2, gradientY0, gradientY1, borderWidth, minValue, maxValue, width, height, paddingRight) {
      if (chartType === "rainfall") {
        chart.destroy()
        return
      }
      if (chart !== undefined) {
        chart.destroy()
      }
      ctx = document.getElementById('chart').getContext('2d');
      gradientFill = ctx.createLinearGradient(0, gradientY0, 0, gradientY1);
      gradientFill.addColorStop(0, gradientColor1);
      gradientFill.addColorStop(1, gradientColor2);
      ctx.canvas.width = width;
      ctx.canvas.height = height;
      chart = new Chart(ctx, {
        type: chartType,
        data: {
          labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10',
            '11', '12', '13', '14', '15', '16', '17', '18', '19', '20',
            '21', '22', '23', '24', '25', '26', '27', '28', '29', '30',
            '31', '32', '33', '34', '35', '36', '37', '38', '39', '40',
            '41', '42', '43', '44', '45', '46', '47', '48'],
          datasets: [{
            label: 'hourly',
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
              right: paddingRight
            },
          },
          clip: false,
          parsing: {},
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
      chart.update()
      document.getElementsByClassName('chart-slide-wrap')[0].scrollLeft = 0;
    },
    onClickChartSlideBtn(direction) {
      let slideWrap = document.getElementsByClassName('chart-slide-wrap')[0]
      switch (direction) {
        case "prev" :
          slideWrap.scrollLeft -= 550;
          break;
        case "next" :
          slideWrap.scrollLeft += 550;
          break;
        default:
      }
    },
    displaySlideBtn() {
      let currentScrollLeft = document.getElementsByClassName('chart-slide-wrap')[0].scrollLeft
      let slideWrapScrollWidth = document.getElementsByClassName('chart-slide-wrap')[0].scrollWidth
      let slideWrapOffsetWidth = document.getElementsByClassName('chart-slide-wrap')[0].offsetWidth
      switch (currentScrollLeft) {
        case 0 :
          this.prevBtnOn = false;
          break;
        case slideWrapScrollWidth - slideWrapOffsetWidth :
          this.nextBtnOn = false;
          break;
        default :
          this.prevBtnOn = true;
          this.nextBtnOn = true;
      }

    }
  }
}
</script>

<style scoped lang="scss">
.card-item {
  width: 580px;
  height: 218px;
  flex-shrink: 0;
  flex-direction: column;
  justify-content: space-between;
  position: relative;

  .card-top-wrap {
    display: flex;
    align-items: center;

    .tab-menu {
      line-height: 1em;
      flex: auto;

      .tab-btn {
        background: transparent;
        border: none;
        padding: 4px 8px 8px 8px;
        position: relative;

        &.active::after {
          content: '';
          position: absolute;
          bottom: 0;
          width: 70%;
          height: 2px;
          left: 16%;
          background-color: #1E90FF;
        }
      }

      .vertical-bar {
        font-size: 0.75em;
        border-left: 1px solid #bbbbbb;
      }
    }
  }

  .chart-slide-wrap {
    position: relative;
    width: calc(100% + 40px);
    margin-left: -20px;
    overflow: hidden;
    overflow-x: scroll;
    scroll-behavior: smooth;

    &::-webkit-scrollbar {
      display: none;
    }
    #chart {
      position: absolute;
      left: 34px;
      top: 40px;

      &.weather {
        top: 40px;
      }

      &.wind {
        left: 15px;
      }

      &.rainfall {
        display: none !important;
      }

      &.humidity {
        top: 28px;
      }
    }
  }

  .scroll-btn {
    width: 32px;
    height: 32px;
    border-radius: 16px;
    background-color: white;
    box-shadow: 0 3px 12px rgba(0, 0, 0, 0.1);
    position: absolute;
    top: 50%;
    margin-top: 3px;
    border: none;
    display: none;

    &.btn-prev {
      left: -16px;
    }

    &.btn-next {
      right: -16px;
    }

    &.is-on {
      display: block;
    }
  }
}

@media screen and (max-width: 768px) {
  .card-wrap {
    width: 100%;

    .card-item {
      width: 100%;

      .scroll-btn {
        display: none;
      }
    }
  }
}
</style>