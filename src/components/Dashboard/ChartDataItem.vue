<template>
  <div class="data-item-wrap">
    <div class="weather-icon-wrap" v-if="chartCategory !== 'humidity'">
      <!--      <div class="weather-icon" :style="{ backgroundImage: `url('img/icon_weather_0_` + itemData.cloud + `_` + itemData.rain + `.png`}"></div>-->
      <!--      <div class="weather-icon" :style="{ backgroundImage: weatherSvgIcon.get(`iconWeather0${itemData.cloud}${itemData.rain}`)}"></div>-->
      <div class="weather-icon" v-if="chartCategory === 'weather'" :style="{ backgroundImage: 'url(' + weatherSvgIcon.get(`iconWeather${isDaytime}${itemData.cloud}${itemData.rain}`) + ')'}"></div>
      <div class="weather-icon" v-if="chartCategory === 'wind'" :style="{ backgroundImage: 'url(' + weatherSvgIcon.get(`iconWindArrow`, this.itemData.windDirection) + ')'}"></div>
    </div>
    <span class="weather-value">{{currentValue}}</span>
    <span class="weather-hour" @click="checkDayTimeLog">{{currentHour}}</span>
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
      if (this.chartCategory === "weather") {
        return this.itemData.y ? this.itemData.y + '°' : ''
      } else {
        return this.itemData.y ? this.itemData.y : ''
      }
    },
    currentHour() {
      return this.itemData.hour ? this.itemData.hour + '시' : ''
    },
    isDaytime() {
      let currentTime = this.itemData.hour;
      let checkTime
      let dayTime
      switch (this.itemData.day) {
        case "today":
          checkTime = moment(currentTime, 'HH').isBetween(moment(this.$store.state.sunriseSunsetList[0].sunrise, 'h:mm A'), moment(this.$store.state.sunriseSunsetList[0].sunset, 'h:mm A'))
              break;
        case "tomorrow":
          checkTime = moment(currentTime, 'HH').isBetween(moment(this.$store.state.sunriseSunsetList[1].sunrise, 'h:mm A'), moment(this.$store.state.sunriseSunsetList[1].sunset, 'h:mm A'))
              break;
        case "after-tomorrow":
          checkTime = moment(currentTime, 'HH').isBetween(moment(this.$store.state.sunriseSunsetList[2].sunrise, 'h:mm A'), moment(this.$store.state.sunriseSunsetList[2].sunset, 'h:mm A'))
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
  },
  methods: {
    checkDayTimeLog() {
      // let currentTime = moment(this.itemData.hour, 'HH').format("HH:00")
      // let baseTimeStart = moment(this.$store.state.sunriseSunsetList[0].sunrise, 'hh:mm a').format("HH:MM")
      // let baseTimeEnd = moment(this.$store.state.sunriseSunsetList[0].sunset, 'hh:mm a').format("HH:MM")

      // let currentTime = moment("1600", "HHmm").format("HH:mm")
      // let baseTimeStart = moment("1200", "HHmm").format("HH:mm")
      // let baseTimeEnd = moment("2000", "HHmm").format("HH:mm")

      // let output = moment(currentTime).isBetween(baseTimeStart, baseTimeEnd)
      // console.log(currentTime, baseTimeStart, baseTimeEnd, output)

      let found = moment(this.itemData.hour, 'HH').isBetween(moment(this.$store.state.sunriseSunsetList[0].sunrise, 'h:mm A'), moment(this.$store.state.sunriseSunsetList[0].sunset, 'h:mm A'))
      console.log(found)
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