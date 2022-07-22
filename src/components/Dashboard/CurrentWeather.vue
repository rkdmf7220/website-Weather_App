<template>
  <div class="card-wrap">
    <div class="card-item">
      <place-and-time/>
      <div class="top-item-wrap">
        <div class="icon-wrap">
          <weather-icon :item-data="this.weatherData" :daytime="currentDaytime"/>
        </div>
        <temperature-info :item-data="this.weatherData" :daytime="currentDaytime"/>
      </div>
      <air-info/>
    </div>
  </div>
</template>

<script>
import PlaceAndTime from "./currentWeather/PlaceAndTime";
import WeatherIcon from "./currentWeather/WeatherIcon";
import TemperatureInfo from "./currentWeather/TemperatureInfo";
import AirInfo from "./currentWeather/AirInfo";
import moment from "moment";
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
    currentDaytime() {
      let currentTime;
      let found = moment().isBetween(moment(this.$store.state.sunriseSunsetList[0].sunrise, 'h:mm A'), moment(this.$store.state.sunriseSunsetList[0].sunset, 'h:mm A'))
      switch (found) {
        case true :
          currentTime = "0"
          break;
        case false :
          currentTime = "1"
          break;
        default:
      }
      return currentTime
    }
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

@media screen and (max-width: 768px) {
  .card-wrap {
    width: 100%;
    .card-item {
      width: 100%;
      height: auto;
      .top-item-wrap {
        .icon-wrap {
          display: none;
        }
      }
    }
  }
}
</style>