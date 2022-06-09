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
    <div>
      <b-modal id="stationModal" title="지역 설정" @ok="setLocale">
        <select v-model="selectedStation">
          <option key="none" :value="null" label="시/군/구"/>
          <option v-for="station in stations" :key="station.areaNo" :value="station.areaNo" :label="station.stationName"/>
        </select>
      </b-modal>
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
import {areaInfo} from "../common/areaInfo";
export default {
  name: "Dashboard",
  components: {WeeklyWeather, WeatherWarn, SunriseSunset, HourlyWeather, CurrentWeather, SearchBar, DashboardTitle},
  computed: {
    stations() {
      return this.areaInfo.seoul.stations || []
    }
  },
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
      date: moment().format('YYYY-MM-DD'),
      areaInfo,
      selectedStation: null,
  }
  },
  mounted() {
    /*this.$store.dispatch('updateVillageForecast', {base_date: this.base_date, base_time: this.base_time, nx: areaInfo("seoul", "gangnam")[2].nx, ny: areaInfo("seoul", "gangnam")[2].ny})
    this.$store.dispatch('updateMediumLandForecast', {regId: areaInfo("seoul", "gangnam")[0], tmFc: this.today})
    this.$store.dispatch('updateMediumTemperature', {regId: areaInfo("seoul", "gangnam")[0], tmFc: this.today})
    this.$store.dispatch('updateWindChillTemperature', {areaNo: areaInfo("seoul", "gangnam")[2].areaNo, time: this.time})
    this.$store.dispatch('updateUltraviolet', {areaNo: areaInfo("seoul", "gangnam")[2].areaNo, time: this.time})
    this.$store.dispatch('updateAirQuality', {stationName: areaInfo("seoul", "gangnam")[2].stationName})
    this.$store.dispatch('updateWeatherWarn')
    this.$store.dispatch('updateSunriseSunset', {lat: areaInfo("seoul", "gangnam")[2].lat, lng: areaInfo("seoul", "gangnam")[2].lng, date: this.date,})
    */

    let station = this.getLocale();
    if (station) {
      this.dispatchStation(station)
    }

  },
  methods : {
    dispatchStation(station) {
      this.$store.dispatch('updateWindChillTemperature', {areaNo: station.areaNo, time: this.time})
      this.$store.dispatch('updateUltraviolet', {areaNo: station.areaNo, time: this.time})
      this.$store.dispatch('updateAirQuality', {stationName: station.stationName})
      this.$store.dispatch('updateWeatherWarn')
      this.$store.dispatch('updateSunriseSunset', {lat: station.lat, lng: station.lng, date: this.date,})
      this.$store.dispatch('updateVillageForecast', {base_date: this.base_date, base_time: this.base_time, nx: station.nx, ny: station.ny})
      this.$store.dispatch('updateMediumLandForecast', {regId: areaInfo.seoul.landRegId, tmFc: this.today})
      this.$store.dispatch('updateMediumTemperature', {regId: areaInfo.seoul.temperatureRegId, tmFc: this.today})
    },
    getLocale() {
      let areaNo = localStorage.getItem("areaNo")
      if (areaNo) {
        // console.log('if: areaNo:::', areaNo)
        this.$store.dispatch('setAreaNo', areaNo)
        return areaInfo.seoul.stations.find(item => item.areaNo === areaNo)
      } else {
        this.$bvModal.show("stationModal")
        // console.log('else: areaNo:::', areaNo)
        this.$store.dispatch('setAreaNo', "1168000000")
        return areaInfo.seoul.stations.find(item => item.areaNo === "1168000000")
      }
    },
    setLocale() {
      localStorage.setItem("areaNo", this.selectedStation)
      let station = areaInfo.seoul.stations.find(item => item.areaNo === this.selectedStation);
      if (station) {
        this.dispatchStation(station);
      }
      this.$store.dispatch('setAreaNo', this.selectedStation)
    },
/*    undoLocal() {
      //TODO : cancel을 클릭하거나 close 했을 때 , localStorage 데이터를 이용해 select 되돌리기
    }*/
  }
}
</script>

<style lang="scss">
  @import "../assets/scss/dashboard";
  .box1{
    width: 20px;
    height: 20px;
    background: #000;
    margin: 8px;
  }
</style>