<template>
  <div class="card-wrap">
    <div class="card-item weekly-weather-item">
      <div class="text-day-info">
        <span>{{ itemData.day }}</span>
        <span class="small-text txt-date gray2">{{ moment().add(index, "days").format("M/D") }}</span>
      </div>
      <div class="icon-wrap">
        <weather-icon :item-data="weatherData"/>
      </div>
      <div class="value-info">
        <div class="temperature-value">
          <h3 class="gray2 small-text"><span class="blue-bell">{{ itemData.minTemperature }}°</span>
            /
            <span class="coral">{{ itemData.maxTemperature }}°</span>
          </h3>
        </div>
        <div class="rainfall-probability-value small-text">
          <svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M14 11.692c0 2.103-1.79 3.808-4 3.808s-4-1.705-4-3.808C6 9.59 9.333 4.5 10 4.5c.667 0 4 5.09 4 7.192Z"
                fill="#85B6FD"/>
          </svg>
          <b class="blue-bell">{{ itemData.rainfallProbability }}%</b>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import WeatherIcon from "@/components/Dashboard/currentWeather/WeatherIcon";
import moment from "moment"
export default {
  name: "WeeklyWeatherItem",
  components: {WeatherIcon},
  computed: {
    weatherData() {
      let skyData = this.itemData.cloud;
      let rainData = this.itemData.rain;
/*      if (skyData && rainData) {
        console.log("if 작동 확인")
        return {cloud: skyData, rain: rainData}
      } else if (!skyData && !rainData) {
        console.log("else if 작동 확인")
        return {cloud: '9', rain: '9'}
      } else {
        console.log("else 작동 확인")
        return {cloud: '9', rain: '9'}
      }*/
      if (skyData && rainData) {
        // console.log("if 작동 확인")
        return {cloud: skyData, rain: rainData}
      } else {
        // console.log("else if 작동 확인")
        return {cloud: '9', rain: '9'}
      }
    }
  },
  props: {
    itemData: Object,
    index: Number
  },
  data() {
    return{
      moment
    }
  }
}
</script>

<style scoped lang="scss">
  .weekly-weather-item{
    width: 180px;
    height: 236px;
    flex-direction: column;
    justify-content: space-between;

    .txt-date{
      margin-left: 4px;
    }

    .icon-wrap{
      width: 100px;
      height: 100px;
      margin: 0 auto;
    }

    .value-info{
      display: flex;
      flex-direction: row;
      align-items: center;

      .temperature-value{
        margin-left: 0;
        margin-right: auto;
      }
      .rainfall-probability-value{
        margin-left: auto;
        margin-right: 0;
      }
    }
  }

  @media screen and (max-width: 768px) {
    .dashboard-container .list-container .weekly-item{
      &:last-child .card-wrap{
        padding-right: 10px;
      }

      .card-wrap {
        padding-right: 0;
        padding-bottom: 22px;

        .weekly-weather-item {
          width: 160px;
        }
      }
    }
  }
</style>