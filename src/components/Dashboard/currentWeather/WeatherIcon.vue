<template>
  <div>
    <img src="../../../../public/img/icon_weather_0.png" alt="">
<!--    {{weatherData}}-->
  </div>
</template>

<script>
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