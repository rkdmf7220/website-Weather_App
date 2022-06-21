<template>
  <div class="card-item">
    <place-and-time/>
    <div class="top-item-wrap">
      <div class="icon-wrap">
        <weather-icon :item-data="this.weatherData"/>
      </div>
      <temperature-info/>
    </div>
    <air-info/>
  </div>
</template>

<script>
import PlaceAndTime from "./currentWeather/PlaceAndTime";
import WeatherIcon from "./currentWeather/WeatherIcon";
import TemperatureInfo from "./currentWeather/TemperatureInfo";
import AirInfo from "./currentWeather/AirInfo";
export default {
  name: "CurrentWeather",
  components: {AirInfo, WeatherIcon, TemperatureInfo, PlaceAndTime},
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
    },
  }
}
</script>

<style scoped lang="scss">
.card-item {
  padding-bottom: 48px;
  width: 580px;
  height: 412px;
  flex-shrink: 0;
  flex-direction: column;
  align-items: center;

  .top-item-wrap{
    display: flex;
    flex-direction: row;
    gap: 16px;

    .icon-wrap{
      width: 160px;
      height: 160px;
    }
  }
}
</style>