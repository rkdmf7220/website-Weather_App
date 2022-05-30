<template>
  <div class="dashboard-container">
<!--    {{this.$store.mediumLandForecast}}-->
    <header>
      <dashboard-title/>
      <search-bar/>
    </header>

    <div class="list-container">
      <current-weather/>
      <div class="list-column">
        <hourly-weather/>
        <sunrise-sunset/>
        <weather-warn/>
      </div>
      <weekly-weather/>
    </div>
  </div>
</template>

<script>
import DashboardTitle from "../components/Dashboard/DashboardTitle";
import SearchBar from "../components/Dashboard/SearchBar";
import CurrentWeather from "../components/Dashboard/CurrentWeather";
import HourlyWeather from "../components/Dashboard/HourlyWeather";
import SunriseSunset from "../components/Dashboard/SunriseSunset";
import WeatherWarn from "../components/Dashboard/WeatherWarn";
import WeeklyWeather from "../components/Dashboard/WeeklyWeather";
import moment from "moment";
import {getAreaInfo} from "@/common/areaInfo";
export default {
  name: "Dashboard",
  components: {WeeklyWeather, WeatherWarn, SunriseSunset, HourlyWeather, CurrentWeather, SearchBar, DashboardTitle},
  data() {
    return{
      moment,
      today: moment().format('YYYYMMDD1800'),
      base_date: moment().format('YYYYMMDD'),
      base_time: moment().format('0200'),
      nx: '55',
      ny: '127',
      areaNo: '1100000000',
      time: moment().format('YYYYMMDD06'),
      stationName: '종로구',
      lat: 37.5360944,
      lng: 126.9675222,
      date: moment().format('YYYY-MM-DD')
  }
  },
  mounted() {
    /*this.$store.dispatch('updateVillageForecast', {base_date: this.base_date, base_time: this.base_time, nx: getAreaInfo("seoul", "gangnam")[2].nx, ny: getAreaInfo("seoul", "gangnam")[2].ny})
    this.$store.dispatch('updateMediumLandForecast', {regId: getAreaInfo("seoul", "gangnam")[0], tmFc: this.today})
    this.$store.dispatch('updateMediumTemperature', {regId: getAreaInfo("seoul", "gangnam")[0], tmFc: this.today})
    this.$store.dispatch('updateWindChillTemperature', {areaNo: getAreaInfo("seoul", "gangnam")[2].areaNo, time: this.time})
    this.$store.dispatch('updateUltraviolet', {areaNo: getAreaInfo("seoul", "gangnam")[2].areaNo, time: this.time})
    this.$store.dispatch('updateAirQuality', {stationName: getAreaInfo("seoul", "gangnam")[2].stationName})
    this.$store.dispatch('updateWeatherWarn')
    this.$store.dispatch('updateSunriseSunset', {lat: getAreaInfo("seoul", "gangnam")[2].lat, lng: getAreaInfo("seoul", "gangnam")[2].lng, date: this.date,})
    */

    this.$store.dispatch('updateVillageForecast', {base_date: this.base_date, base_time: this.base_time, nx: getAreaInfo.seoul.gangnam.nx, ny: getAreaInfo.seoul.gangnam.ny})
    this.$store.dispatch('updateMediumLandForecast', {regId: getAreaInfo.seoul.regId, tmFc: this.today})
    this.$store.dispatch('updateMediumTemperature', {regId: getAreaInfo.seoul.regId, tmFc: this.today})
    this.$store.dispatch('updateWindChillTemperature', {areaNo: getAreaInfo.seoul.gangnam.areaNo, time: this.time})
    this.$store.dispatch('updateUltraviolet', {areaNo: getAreaInfo.seoul.gangnam.areaNo, time: this.time})
    this.$store.dispatch('updateAirQuality', {stationName: getAreaInfo.seoul.gangnam.stationName})
    this.$store.dispatch('updateWeatherWarn')
    this.$store.dispatch('updateSunriseSunset', {lat: getAreaInfo.seoul.gangnam.lat, lng: getAreaInfo.seoul.gangnam.lng, date: this.date,})
  }
}
</script>

<style lang="scss">
  @import "../assets/scss/dashboard";
</style>