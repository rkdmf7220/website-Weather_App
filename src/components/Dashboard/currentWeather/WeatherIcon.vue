<template>
  <div>
    <img src="/img/icon_weather_0.png" alt="" @click="computeCurrentWeather">
<!--    {{weatherData}}-->
  </div>
</template>

<script>
import moment from "moment"
export default {
  name: "WeatherIcon",
  computed: {
    weatherData() {
      let skyData = this.$store.state.villageForecast.find(item => (
          item.category === "SKY"
      ))
      let rainData = this.$store.state.villageForecast.find(item => (
          item.category === "PTY"
      ))
      if (skyData && rainData) {
        return {cloud: skyData.fcstValue, rain: rainData.fcstValue};
      } else {
        return {cloud: '9', rain: '9'}
      }

      // return skyData ? skyData.fcstValue + rainData.fcstValue : '';

      // return {cloud: "0", rain: "0"};
    },
    checkDaytime() {
      // daytime = true, night = false
      return moment().isBetween(moment(this.$store.state.sunriseSunsetList[0].sunrise, 'h:mm A'), moment(this.$store.state.sunriseSunsetList[0].sunset, 'h:mm A'))
    }
  },
  mounted() {
    console.log('적용확인', this.weatherData)
  },
  data() {
    return {
      moment,
      isDaytime: this.checkDaytime
    }
  },
  methods: {
    computeCurrentWeather() {
      let data = this.weatherData
      switch (data.rain) {
        case "0":
          if (data.cloud === "0") {
            // 날씨는 맑음이며, 밤/낮을 적용해야 함
          } else if (data.cloud === "3") {
            // 날씨는 구름많음이며, 밤/낮을 적용해야 함
          } else if (data.cloud === "4") {
            // 날씨는 흐림
          }
          break;
        case "1":
          // 날씨는 비
          break;
        case "2":
          // 날씨는 눈
          break;
        case "3":
          // 날씨는 비/눈
          break;
        case "4":
          // 날씨는 소나기지만 비
          break;
        default:
      }
    }
  }
}
</script>

<style scoped>
img{
  width: 100%;
  height: 100%;
}
</style>