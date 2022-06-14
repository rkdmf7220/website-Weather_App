<template>
  <div>
    <img src="../../../../public/img/icon_weather_0.png" alt="">
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
      return skyData ? skyData.fcstValue + rainData.fcstValue : '';
    },
    checkDaytime() {
      return moment().isBetween(moment(this.$store.state.sunriseSunsetList[0].sunrise, 'h:mm A'), moment(this.$store.state.sunriseSunsetList[0].sunset, 'h:mm A'))
    }
  },
  data() {
    return {
      moment,
      isDaytime: this.checkDaytime
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