<template>
  <div class="txt-container">
    <div v-b-modal.stationModal class="txt-place">
      <b-spinner v-if="isLoading" small variant="blue-bell"/>
      <svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.05 3.5a.68.68 0 0 0-.61.39l-.646 1.336-.004.008-.002.005-.086.177a1.515 1.515 0 0 1-1.312.773h-.001l-1.634-.102a.677.677 0 0 0-.631.351l-.908 1.624a.724.724 0 0 0 .022.74l.797 1.247.1.169c.284.507.263 1.11-.003 1.581l-.09.142-.007.01-.754 1.18-.043.067a.724.724 0 0 0-.022.74l.908 1.624c.129.23.373.367.631.35l1.444-.089.14-.008a1.514 1.514 0 0 1 1.365.787l.09.172.647 1.337a.68.68 0 0 0 .61.389h1.815a.68.68 0 0 0 .61-.39l.646-1.336.089-.172c.29-.52.823-.803 1.366-.787l1.585.098a.677.677 0 0 0 .63-.351l.908-1.624a.724.724 0 0 0-.021-.74l-.908-1.42a1.619 1.619 0 0 1 .049-1.628l.017-.032.842-1.316a.724.724 0 0 0 .021-.74l-.907-1.624a.677.677 0 0 0-.632-.35l-1.632.1h-.002c-.558 0-1.046-.31-1.312-.771l-.74-1.528a.68.68 0 0 0-.61-.389H9.052Zm.908 10a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" fill="#BBB"/></svg>
      <span class="gray4">{{`${cityName} ${stationName}`}}</span>
    </div>
    <div class="txt-time">
      <span class="small-text gray3">{{currentTimeInfo}}</span>
    </div>
  </div>
</template>

<script>
import moment from "moment"
import {areaInfo} from "../../../common/areaInfo";
export default {
  name: "PlaceAndTime",
  computed: {
    cityName() {
      return areaInfo.seoul.cityName
    },
    stationName() {
      let areaNo =  this.$store.state.areaNo;
      if (areaNo) {
        // console.log('<<<<',areaNo, this.$store, areaInfo)
        let found = areaNo ? areaInfo.seoul.stations.find(item => item.areaNo === areaNo) : {stationName: '지역을 설정해주세요'}
        return found.stationName;
      } else {
        return ''
      }
    },
    isLoading() {
      return this.$store.state.loadingCount > 0 && this.$store.state.loadingCount < this.$store.getters.getCompleteCount
    },
    currentTimeInfo() {
      return moment().locale('ko').format("ddd, a h:00")
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