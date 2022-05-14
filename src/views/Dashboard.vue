<template>
  <div class="dashboard-container">
<!--    {{this.$store.mediumLandForecast}}-->
    <header>
      <dashboard-title/>
      <search-bar/>
    </header>

    <div class="list-container">
      <current-weather/>
      <hourly-weather/>
      <sunrise-sunset/>
      <weather-warn/>
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
export default {
  name: "Dashboard",
  components: {WeeklyWeather, WeatherWarn, SunriseSunset, HourlyWeather, CurrentWeather, SearchBar, DashboardTitle},
  data() {
    return{
      today: '202205131800',
      base_date: '20220513',
      base_time: '0500',
      nx: '55',
      ny: '127',
      areaNo: '1100000000',
      time: '2022051318',
      stationName: '종로구'
    }
  },
  mounted() {
    this.$store.dispatch('updateMediumLandForecast', {regId: '11B00000', tmFc: this.today})
    this.$store.dispatch('updateMediumTemperature', {regId: '11B10101', tmFc: this.today})
    this.$store.dispatch('updateVillageForecast', {today: this.today, base_date: this.base_date, base_time: this.base_time, nx: this.nx, ny: this.ny})
    this.$store.dispatch('updateWindChillTemperature', {areaNo: this.areaNo, time: this.time})
    this.$store.dispatch('updateUltraviolet', {areaNo: this.areaNo, time: this.time})
    this.$store.dispatch('updateAirQuality', {stationName: this.stationName})
    this.$store.dispatch('updateWeatherWarn')
  }
}
</script>

<style scoped lang="scss">
  @import "../assets/scss/dashboard";
</style>