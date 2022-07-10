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
      <b-modal :ok-title="'적용'" :cancel-title="'취소'" id="stationModal" title="지역 설정" @ok="onConfirmChangeLocale">
<!--        <select v-model="selectedStation" >
          <option key="none" :value="null" label="시/군/구"/>
          <option v-for="station in stations" :key="station.areaNo" :value="station.areaNo" :label="station.stationName"/>
        </select>-->
        <b-form-select  v-model="selectedStation" :options="this.stationOptions"  onmousedown="this.size=8"></b-form-select>
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
import LocaleUtil from "../common/LocationUtil"

export default {
  name: "Dashboard",
  components: {WeeklyWeather, WeatherWarn, SunriseSunset, HourlyWeather, CurrentWeather, SearchBar, DashboardTitle},
  computed: {
    stationOptions() {
      let found = []
      found.push({value: null, text: "시/군/구"})
      this.areaInfo.seoul.stations.forEach((station) => {
        found.push({value: station.areaNo, text: station.stationName})
      })
      return found
    }
  },
  data() {
    return{
      moment,
      today: moment().format('YYYYMMDD0600'),
      base_date: moment().format('YYYYMMDD'),
      base_time: moment().format('0200'),
      nx: '55',
      ny: '127',
      areaNo: '1100000000',
      time: moment().format('YYYYMMDD06'),
      stationName: '종로구',
      lat: 37.5360944,
      lng: 126.9675222,
      date_today: moment().format('YYYY-MM-DD'),
      date_tomorrow: moment().add(1, 'days').format('YYYY-MM-DD'),
      date_after_tomorrow: moment().add(2, 'days').format('YYYY-MM-DD'),
      areaInfo,
      LocaleUtil,
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

    let localeObject = LocaleUtil.getLocale();
    if (!localeObject.isSaved) {
      this.$bvModal.show("stationModal")
    }
    this.dispatchStation(localeObject.station)


  },
  methods : {
    getBaseDateTime() {
      let base_date = null;
      let base_time = null;
      let isToday = moment().hour() > 2;
      // console.log("isToday : ",isToday)
      if (isToday) {
        base_date = moment().format('YYYYMMDD');
        base_time = "0200";
      } else {
        base_date = moment().subtract(1, 'days').format('YYYYMMDD');
        base_time = "2300";
      }
      return {
        base_date,
        base_time,
      }
    },
    getMidlandAndLivingTime() {
      let time = null;
      let isToday = moment().hour() > 6;
      if (isToday) {
        time = moment().format('YYYYMMDD06');
      } else {
        time = moment().subtract(1, 'days').format('YYYYMMDD18');
      }
      return {
        time
      }
    },
    dispatchStation(station) {
      const {time} = this.getMidlandAndLivingTime();
      this.$store.dispatch('updateWindChillTemperature', {areaNo: station.areaNo, time: time})
      this.$store.dispatch('updateUltraviolet', {areaNo: station.areaNo, time: time})
      this.$store.dispatch('updateAirQuality', {stationName: station.stationName})
      this.$store.dispatch('updateWeatherWarn')
      this.$store.dispatch('updateTodaySunriseSunset', {lat: station.lat, lng: station.lng, date: this.date_today,})
      this.$store.dispatch('updateTomorrowSunriseSunset', {lat: station.lat, lng: station.lng, date: this.date_tomorrow,})
      this.$store.dispatch('updateAfterTomorrowSunriseSunset', {lat: station.lat, lng: station.lng, date: this.date_after_tomorrow,})
      const {base_date, base_time} = this.getBaseDateTime();
      this.$store.dispatch('updateVillageForecast', {base_date, base_time, nx: station.nx, ny: station.ny})
      this.$store.dispatch('updateMediumLandForecast', {regId: areaInfo.seoul.landRegId, tmFc: time})
      this.$store.dispatch('updateMediumTemperature', {regId: areaInfo.seoul.temperatureRegId, tmFc: time})
      this.$store.dispatch('setAreaNo', station.areaNo)
    },
    onConfirmChangeLocale() {
      this.$store.dispatch('resetLoadingCount', true)
      LocaleUtil.setLocale(this.selectedStation, this.dispatchStation)
    }
/*    undoLocal() {
      //TODO : cancel을 클릭하거나 close 했을 때 , localStorage 데이터를 이용해 select 되돌리기
    }*/
  }
}
</script>

<style lang="scss">
  @import "../assets/scss/dashboard";
  .custom-select{
    width: 100px;
    height: 40px;
    position: absolute;
    left: 10px;
    top: 10px;
    option{
      padding: 4px 0;
    }
  }
</style>