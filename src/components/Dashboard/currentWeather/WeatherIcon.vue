<template>
  <div class="wrapper">
    <div v-show="itemData.cloud === '9' && itemData.rain === '9'" class="spinner-wrap">
      <b-spinner label="Spinning" type="grow" variant="300"></b-spinner>
    </div>
    <img v-show="itemData.cloud !== '9' && itemData.rain !== '9'" :src="`/img/icon_weather_${this.checkDaytime}_${this.itemData.cloud}_${this.itemData.rain}.png`" alt="" @click="computeCurrentWeather">
  </div>
</template>

<script>
import moment from "moment"
export default {
  name: "WeatherIcon",
  props: {
    itemData : Object,
    daytime : String
  },
  computed: {
    checkDaytime() {
      return this.daytime ? this.daytime : "0"
    }
  },
  data() {
    return {
      moment,
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