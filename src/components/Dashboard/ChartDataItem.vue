<template>
  <div class="data-item-wrap">
    <div class="weather-icon-wrap" v-if="chartCategory !== 'humidity'">
<!--    <div class="weather-icon-wrap" v-if="chartCategory === 'weather' || chartCategory === 'wind'">-->
      <!--      <div class="weather-icon" :style="{ backgroundImage: `url('img/icon_weather_0_` + itemData.cloud + `_` + itemData.rain + `.png`}"></div>-->
      <!--      <div class="weather-icon" :style="{ backgroundImage: weatherSvgIcon.get(`iconWeather0${itemData.cloud}${itemData.rain}`)}"></div>-->
      <div class="weather-icon" v-if="chartCategory === 'weather'" :style="{ backgroundImage: 'url(' + weatherSvgIcon.get(`iconWeather${isDaytime}${itemData.cloud}${itemData.rain}`) + ')'}"></div>
      <div class="weather-icon" v-if="chartCategory === 'wind'" :style="{ backgroundImage: 'url(' + weatherSvgIcon.get(`iconWindArrow`, this.itemData.windDirection) + ')'}"></div>
      <div class="weather-icon rainfall-icon" v-if="chartCategory === 'rainfall'" :style="{backgroundImage: `url(` + weatherSvgIcon.get(`iconRainfallProbabilityBase`) +`)`}">
        <div class="rainfall-icon-fill" :style="{backgroundImage: `url(` + weatherSvgIcon.get(`iconRainfallProbabilityFill`) +`)`, height: itemData.rainfallProbability+'%'}"></div>
      </div>
      <span class="small-text gray3" v-if="chartCategory === 'rainfall'">{{currentRainfallProbability}}</span>
    </div>
    <span :class="{'rainfall-value': chartCategory === 'rainfall', 'white': rainfallValueTextColor}" class="weather-value small-text" :style="{backgroundColor: rainfallValueBackgroundColor}">{{currentValue}}</span>
    <span class="weather-hour" :class="`${itemData.day}`" @click="checkDayTimeLog">{{currentHour}}</span>
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
    },
    currentRainfallProbability() {
      let found = this.itemData.rainfallProbability
      let value
/*      switch (found) {
        case "0" :
          value = "-"
              break;
        default:
          value = found
      }
      return value ? value + '%' : null;*/
      if (found === "0") {
        value = "-"
      } else if (found) {
        value = found + "%"
      } else {
        value = null
      }
      return value
    },
    rainfallValueBackgroundColor() {
      if (this.chartCategory !== 'rainfall') {
        return undefined
      }
      let bgColor
      switch (this.itemData.y) {
        case '-' :
          bgColor = "#EAF2FF"
              break;
        case undefined :
          bgColor = "#EAF2FF"
              break;
        default :
          bgColor = "#558FFF"
      }
      return bgColor
    },
    rainfallValueTextColor() {
      if (this.chartCategory !== 'rainfall') {
        return undefined
      }
      let textColor
      switch (this.itemData.y) {
        case '-' :
          textColor = false
              break;
        case undefined :
          textColor = false
              break;
        default :
          textColor = true
      }
      return textColor
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
    height: 132px;
    align-items: center;
    justify-content: space-between;

      .weather-icon-wrap{
        flex-grow: 0;

        .weather-icon{
          width: 24px;
          height: 24px;
          background-size: cover;
        }
        .rainfall-icon{
          position: relative;
          margin: auto;

          .rainfall-icon-fill{
            position: absolute;
            width: 100%;
            height: 100%;
            bottom: 0;
            left: 0;
            background-position-y: bottom;
          }
        }
      }

      .weather-value{
        flex: auto;

        &.rainfall-value{
          width: 100%;
          height: 32px;
          line-height: 32px;
          flex: none;
          font-size: 12px;
        }
      }

      .weather-hour{
        flex-grow: 0;
        font-size: 14px;
        color: #666666;

        &.tomorrow{
          color: #0cf;
        }
        &.after-tomorrow{
          color: coral;
        }
      }
  }
</style>