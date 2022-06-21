<template>
  <div class="wrapper">
    <div v-show="itemData.cloud === '9' && itemData.rain === '9'" class="spinner-wrap">
      <b-spinner label="Spinning" type="grow" variant="300"></b-spinner>
    </div>
    <img v-show="itemData.cloud !== '9' && itemData.rain !== '9'" :src="`/img/icon_weather_${this.checkDaytime}_${this.itemData.cloud}_${this.itemData.rain}.png`" alt="" @click="computeCurrentWeather">
<!--    {{weatherData}}-->
  </div>
</template>

<script>
import moment from "moment"
export default {
  name: "WeatherIcon",
  props: {
    itemData : Object
  },
  computed: {
    checkDaytime() {
      // daytime = true, night = false
      let currentTime;
      let found = moment().isBetween(moment(this.$store.state.sunriseSunsetList[0].sunrise, 'h:mm A'), moment(this.$store.state.sunriseSunsetList[0].sunset, 'h:mm A'))
      switch (found) {
        case true :
          currentTime = "0"
              break;
        case false :
          currentTime = "1"
              break;
        default:
      }
      return currentTime
    }
  },
  data() {
    return {
      moment,
      isDaytime: this.checkDaytime
    }
  },
  methods: {
    computeCurrentWeather() {

    }
  }
}
</script>

<style scoped lang="scss">
.wrapper{
  width: 100%;
  height: 100%;

  .spinner-wrap{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  img{
    width: 100%;
    height: 100%;
  }
}
</style>