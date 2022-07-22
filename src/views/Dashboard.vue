<template>
  <div class="dashboard-container">
    <header>
      <dashboard-title/>
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
        <b-form-select  class="select-city" v-model="selectedCity" :options="this.cityOptions"></b-form-select>
        <b-form-select  class="select-station" v-model="selectedStation" :options="this.stationOptions"></b-form-select>
      </b-modal>
    </div>
  </div>
</template>

<script>
import DashboardTitle from "../components/Dashboard/DashboardTitle";
import CurrentWeather from "../components/Dashboard/CurrentWeather";
import HourlyWeather from "../components/Dashboard/HourlyWeather";
import SunriseSunset from "../components/Dashboard/SunriseSunset";
import WeatherWarn from "../components/Dashboard/WeatherWarn";
import WeeklyWeather from "../components/Dashboard/WeeklyWeather";
import moment from "moment";
import {areaInfo} from "@/common/areaInfo";
import LocaleUtil from "../common/LocationUtil"

export default {
  name: "Dashboard",
  components: {WeeklyWeather, WeatherWarn, SunriseSunset, HourlyWeather, CurrentWeather, DashboardTitle},
  computed: {
    cityOptions() {
      let found = []
      found.push({value: null, text: "시/도"})
      for (let key in this.areaInfo) {
        found.push({value: key, text: this.areaInfo[key].cityName})
      }
      return found
    },
    stationOptions() {
      let found = []
      found.push({value: null, text: "시/군/구"})
      if (this.selectedCity === null) {
        found.push({value: null, text: "시/도 미선택"})
      } else if (!this.selectedCity && !localStorage.getItem("cityName")) {
        this.areaInfo.seoul.stations.forEach((station) => {
          found.push({value: station.areaNo, text: station.stationName})
        })
      } else if (!this.selectedCity) {
        this.areaInfo[localStorage.getItem('cityName')].stations.forEach((station) => {
          found.push({value: station.areaNo, text: station.stationName})
        })
      } else {
        this.areaInfo[this.selectedCity].stations.forEach((station) => {
          found.push({value: station.areaNo, text: station.stationName})
        })
      }
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
      searchDate: moment().format('YYYY-MM-DD'),
      lat: 37.5360944,
      lng: 126.9675222,
      date_today: moment().format('YYYY-MM-DD'),
      date_tomorrow: moment().add(1, 'days').format('YYYY-MM-DD'),
      date_after_tomorrow: moment().add(2, 'days').format('YYYY-MM-DD'),
      areaInfo,
      LocaleUtil,
      selectedCity: null,
      selectedStation: null,
  }
  },
  mounted() {
    let localeObject = LocaleUtil.getLocale();
    if (!localeObject.isSaved) {
      this.$bvModal.show("stationModal")
    }
    this.dispatchStation(localeObject.station, localeObject.city)


  },
  methods : {
    getBaseDateTime() {
      let base_date = null;
      let base_time = null;
      let isToday = moment().hour() > 2;
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
    dispatchStation(station, cityInfo) {
      const {time} = this.getMidlandAndLivingTime();
      this.$store.dispatch('updateWindChillTemperature', {areaNo: station.areaNo, time: time})
      this.$store.dispatch('updateUltraviolet', {areaNo: station.areaNo, time: time})
      this.$store.dispatch('updateAirQuality', {searchDate: this.searchDate, cityName: cityInfo.sidoName, stationName: station.airStation})
      this.$store.dispatch('updateWeatherWarn')
      this.$store.dispatch('updateTodaySunriseSunset', {lat: station.lat, lng: station.lng, date: this.date_today,})
      this.$store.dispatch('updateTomorrowSunriseSunset', {lat: station.lat, lng: station.lng, date: this.date_tomorrow,})
      this.$store.dispatch('updateAfterTomorrowSunriseSunset', {lat: station.lat, lng: station.lng, date: this.date_after_tomorrow,})
      const {base_date, base_time} = this.getBaseDateTime();
      this.$store.dispatch('updateVillageForecast', {base_date, base_time, nx: station.nx, ny: station.ny})
      this.$store.dispatch('updateMediumLandForecast', {regId: areaInfo.seoul.landRegId, tmFc: time})
      this.$store.dispatch('updateMediumTemperature', {regId: station.temperatureRegId, tmFc: time})
      this.$store.dispatch('setCityInfo', cityInfo)
      this.$store.dispatch('setAreaNo', station.areaNo)
    },
    onConfirmChangeLocale() {
      if(this.selectedCity && this.selectedStation) {
        this.$store.dispatch('resetLoadingCount', true)
        LocaleUtil.setLocale(this.selectedCity, this.selectedStation, this.dispatchStation)
      }
    }
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
  .select-city{
    width: 120px;
  }
  .select-station{
    left: 140px;
  }
</style>