<template>
  <div class="txt-container">
    <div class="txt-place">
      <svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M8 2C5.79 2 4 3.705 4 5.808 4 7.91 7.333 13 8 13c.667 0 4-5.09 4-7.192C12 3.705 10.21 2 8 2Zm0 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" fill="#BBB"/></svg>
      <span class="gray4">{{`${cityName} ${stationName}`}}</span>
    </div>
    <div class="txt-time">
      <span class="small-text gray3">금, 오후 4:30</span>
    </div>
  </div>
</template>

<script>
import moment from "moment"
import {getAreaInfo} from "@/common/areaInfo";
export default {
  name: "PlaceAndTime",
  computed: {
    cityName() {
      return getAreaInfo.seoul.cityName
    },
    stationName() {
      return getAreaInfo.seoul.gangnam.stationName
    }
  },
  data() {
    return {
      moment
    }
  }
}
</script>

<style scoped lang="scss">
  .txt-container{
    margin-left: auto;
    margin-right: 0;

    .txt-place{
      display: flex;
      align-items: center;
      line-height: 1.25em;
    }

    .txt-time{
      text-align: right;
      line-height: 1.25em;
    }
  }
</style>