<template>
  <ul class="air-info-container">
    <li class="air-info-list" v-for="item in this.airInfoList" :key="item.id">
      <air-info-item :item-data="item"/>
    </li>
  </ul>
</template>

<script>
import AirInfoItem from "@/components/Dashboard/currentWeather/AirInfoItem";
import {mapState} from "vuex";
export default {
  name: "AirInfo",
  components: {AirInfoItem},
  computed: {
    ...mapState([
      'airInfoList'
    ]),
  }
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

  @media screen and (max-width: 768px) {
    .air-info-container .air-info-list{
      border-right: none;
    }
  }
</style>
