<template>
  <ul class="air-info-container">
    <li class="air-info-list" v-for="item in 4" :key="item">
      <air-info-item/>
    </li>
  </ul>
</template>

<script>
import AirInfoItem from "@/components/Dashboard/currentWeather/AirInfoItem";
export default {
  name: "AirInfo",
  components: {AirInfoItem},
}
</script>

<style scoped lang="scss">
  .air-info-container{
    display: flex;
    flex-direction: row;
    margin-top: 32px;

    .air-info-list{
      border-right: 2px solid #eeeeee;

      &:last-child{
        border-right: none;
      }
    }
  }
</style>