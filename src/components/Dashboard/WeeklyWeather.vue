<template>
  <div class="weekly-wrap">
    <ul class="weekly-list">
      <li class="weekly-item" v-for="(item, index) in this.weeklyInfoList" :key="item.id">
        <weekly-weather-item :item-data="item" :index="index"/>
      </li>
    </ul>
  </div>
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

  @media screen and (max-width: 1280px) {
    .weekly-wrap{
      width: 600px;
      .weekly-list{
        flex-wrap: wrap;
      }
    }
  }
  
  @media screen and (max-width: 768px) {
    .weekly-wrap{
      overflow-x: scroll;
      &::-webkit-scrollbar{
        display: none;
      }
      .weekly-list{
        flex-wrap: nowrap;
      }
    }
  }
</style>