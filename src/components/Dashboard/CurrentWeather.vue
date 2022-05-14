<template>
  <div class="card-item">
    <place-and-time/>
    <div class="top-item-wrap">
      <weather-icon/>
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
  components: {AirInfo, WeatherIcon, TemperatureInfo, PlaceAndTime}
}
</script>

<style scoped lang="scss">
.card-item {
  padding-bottom: 48px;
  width: 580px;
  height: 412px;
  flex-shrink: 0;
}
</style>