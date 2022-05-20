<template>
  <ul class="weekly-list">
    <li class="weekly-item" v-for="item in 6" :key="item">
      <weekly-weather-item/>
    </li>
  </ul>
</template>

<script>
import WeeklyWeatherItem from "./WeeklyWeatherItem";
export default {
  name: "WeeklyWeather",
  components: {WeeklyWeatherItem}
}
</script>

<style scoped lang="scss">
  .weekly-list{
    display: flex;
    flex-direction: row;
  }
</style>