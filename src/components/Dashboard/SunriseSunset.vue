<template>
  <div class="card-item">
    <p class="card-title">일출일몰</p>
    <div class="sun-container">
      <div class="sun-icon-list">
        <div class="blind sun-icon-item"></div>
        <div class="sun-icon-item">
          <span></span>
        </div>
        <div class="sun-icon-item">
          <span></span>
        </div>
      </div>
      <ul class="sun-data-list">
        <li v-for="item in arrangedSunriseSunset" class="sun-data-item" :key="item.title">
          <sun-data-item :item-data="item"/>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import SunDataItem from "@/components/Dashboard/SunriseSunset/SunDataItem";
import {mapState} from "vuex";
export default {
  name: "SunriseSunset",
  components: {SunDataItem},
  computed: {
    ...mapState([
        'sunriseSunsetList'
    ]),
    arrangedSunriseSunset() {
      return this.sunriseSunsetList.filter((item, index) => index < 2)
    }
/*    todaySunrise() {
      return this.$store.state.sunriseSunset.sunrise
    },
    todaySunset() {
      return this.$store.state.sunriseSunset.sunset
    }*/
  },
  watch: {
    todaySunrise: {
      handler: function() {
        this.SunriseSunsetData.today.sunrise = this.todaySunrise
        this.SunriseSunsetData.tomorrow.sunrise = this.todaySunrise
        this.SunriseSunsetData.afterTomorrow.sunrise = this.todaySunrise
      }
    },
    todaySunset: {
      handler: function() {
        this.SunriseSunsetData.today.sunset = this.todaySunset
        this.SunriseSunsetData.tomorrow.sunset = this.todaySunset
        this.SunriseSunsetData.afterTomorrow.sunset = this.todaySunset
      }
    }
  },
  data() {
    return {
      SunriseSunsetData: {
        today: {
          title: "오늘",
          date: "",
          sunrise: "",
          sunset: ""
        },
        tomorrow: {
          title: "내일",
          date: "",
          sunrise: "",
          sunset: ""
        },
        afterTomorrow: {
          title: "모레",
          date: "",
          sunrise: "",
          sunset: ""
        },
      }
    }
  }
}
</script>

<style scoped lang="scss">
  .card-item{
    width: 380px;
    height: 170px;
    flex-direction: column;

    .card-title{
      margin-bottom: 0;
    }

    .sun-container{
      display: flex;
      flex-direction: column;

      .sun-icon-list{
        display: flex;
        flex-direction: row;
        height: 32px;

        .sun-icon-item{
          flex: 1 1 0;
          justify-content: space-around;
          background-image: url("../../../public/img/Frame32.png");
          background-repeat: no-repeat;
          background-position: center;

          &.blind{
            background-image: none;
          }
        }
      }

      .sun-data-list{
        display: flex;
        flex-direction: column;

        .sun-data-item{
          display: flex;
          flex: 1 1 0;
          justify-content: space-around;
          margin-bottom: 8px;

          &:last-child{
            margin-bottom: 0;
          }
        }
      }
    }
  }
</style>