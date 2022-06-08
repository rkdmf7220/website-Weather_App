<template>
  <ul class="weekly-list">
    <li class="weekly-item" v-for="(item, index) in this.weeklyInfoList" :key="item.id">
      <weekly-weather-item :item-data="item" :index="index"/>
    </li>
  </ul>
</template>

<script>
import WeeklyWeatherItem from "./WeeklyWeatherItem";
import {mapState} from "vuex";
export default {
  name: "WeeklyWeather",
  components: {WeeklyWeatherItem},
  computed: {
    ...mapState([
        'weeklyInfoList'
    ])
  }
}
</script>

<style scoped lang="scss">
  .weekly-list{
    display: flex;
    flex-direction: row;
  }
</style>