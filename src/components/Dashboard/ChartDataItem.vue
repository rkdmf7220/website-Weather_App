<template>
  <div class="data-item-wrap">
    <div class="weather-icon-wrap" v-if="chartCategory === 'weather'">
      <!--      <div class="weather-icon" :style="{ backgroundImage: `url('img/icon_weather_0_` + itemData.cloud + `_` + itemData.rain + `.png`}"></div>-->
      <!--      <div class="weather-icon" :style="{ backgroundImage: weatherSvgIcon.get(`iconWeather0${itemData.cloud}${itemData.rain}`)}"></div>-->
      <div class="weather-icon" :style="{ backgroundImage: 'url(' + weatherSvgIcon.get(`iconWeather0${itemData.cloud}${itemData.rain}`) + ')'}"></div>
    </div>
    <span class="weather-value">{{currentValue}}</span>
    <span class="weather-hour">{{currentHour}}</span>
  </div>
</template>

<script>
import weatherSvgIcon from "../../../public/img/weatherSvgIcon";
import moment from "moment";
export default {
  name: "ChartDataItem",
  props: {
    itemData: Object,
    chartCategory: String
  },
  computed: {
    currentValue() {
      return this.itemData.y ? this.itemData.y + '°' : ''
    },
    currentHour() {
      return this.itemData.hour ? this.itemData.hour + '시' : ''
    },
    isDaytime() {
      let currentTime = this.itemData.hour + "00";
      let checkTime
      let dayTime
      switch (this.itemData.day) {
        case "today":
          checkTime = moment(currentTime).isBetween(moment(this.$store.state.sunriseSunsetList[0].sunrise, 'h:mm A'), moment(this.$store.state.sunriseSunsetList[0].sunset, 'h:mm A'))
              break;
        case "tomorrow":
          checkTime = moment(currentTime).isBetween(moment(this.$store.state.sunriseSunsetList[1].sunrise, 'h:mm A'), moment(this.$store.state.sunriseSunsetList[1].sunset, 'h:mm A'))
              break;
        case "afterTomorrow":
          checkTime = moment(currentTime).isBetween(moment(this.$store.state.sunriseSunsetList[2].sunrise, 'h:mm A'), moment(this.$store.state.sunriseSunsetList[2].sunset, 'h:mm A'))
              break;
      }
      switch (checkTime) {
        case true:
          dayTime = "0"
              break;
        case false:
          dayTime = "1"
              break;
          default:
            dayTime = "0"
      }
      return dayTime
    }
  },
  data () {
    return {
      weatherSvgIcon
    }
  }
}
</script>

<style scoped lang="scss">
  .data-item-wrap{
    display: flex;
    flex-direction: column;
    width: 40px;
    height: 108px;
    align-items: center;

      .weather-icon-wrap{
        flex-grow: 0;
        width: 24px;
        height: 24px;

        .weather-icon{
          width: 100%;
          height: 100%;
          background-size: cover;
        }
      }

      .weather-value{
        flex: auto;
        font-size: 14px;
      }

      .weather-hour{
        flex-grow: 0;
        font-size: 14px;
        color: #666666;
      }
  }
</style>