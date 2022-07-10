<template>
<!--  <div :class="currentColorClass" id="app">-->
  <div id="app">
    <router-view/>
  </div>
</template>

<!--<script>
import moment from "moment";
export default {
  computed: {
    currentColorClass() {
      let sunset = this.$store.state.sunriseSunsetList[0].sunset
      let sunrise = this.$store.state.sunriseSunsetList[0].sunrise
      let foundDawn = moment().isBetween(moment("00:00", 'h:mm A'), moment(sunrise, 'h:mm A').add(1, 'minute'))
      let foundDaytime = moment().isBetween(moment(sunrise, 'h:mm A'), moment(sunset, 'h:mm A').subtract(1, 'hour'))
      let foundSunset = moment().isBetween(moment(sunset, 'h:mm A').subtract(1, 'hour'), moment(sunset, 'h:mm A').add(1, 'minute'))
      let foundNight = moment().isBetween(moment(sunset, 'h:mm A'), moment('23:59', 'HH:mm'))
      return this.getDaytimeColor(foundDawn, foundDaytime, foundSunset, foundNight)
    }
  },
  data() {
    return {
      moment,
    }
  },
  methods: {
    getDaytimeColor(foundDawn, foundDaytime, foundSunset, foundNight) {


      if (foundDawn) {
        return "daytime-color dawn"
      } else if (foundDaytime) {
        return "daytime-color daytime"
      } else if (foundSunset) {
        return "daytime-color sunset"
      } else if (foundNight) {
        return "daytime-color night"
      } else {
        return "daytime-color"
      }
    }
  }
}
</script>-->

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;700&display=swap');
@import "assets/scss/reset-bootstrap";
@import "assets/scss/reset.scss";
#app {
  min-width: 1216px;
  &.dawn{
    background-color: #8E9CE8;
  }
  &.daytime{
    background-color: #DAEDFF;
  }
  &.sunset{
    background-color: #FFAD33;
  }
  &.night{
    background-color: #0E236B;
  }
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
