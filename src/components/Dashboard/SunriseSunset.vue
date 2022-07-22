<template>
  <div class="card-wrap">
    <div class="card-item">
      <p class="card-title">일출일몰</p>
      <div class="sun-container">
        <div class="sun-icon-list">
          <div class="blind sun-icon-item"></div>
          <div class="sun-icon-item sunrise">
            <span></span>
          </div>
          <div class="sun-icon-item sunset">
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
          background-repeat: no-repeat;
          background-position: center;

          &.sunrise{
            background-image: url("data:image/svg+xml,%3Csvg width='57' height='32' viewBox='0 0 57 32' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0_457_1848)'%3E%3Crect x='4.75' y='22.4' width='7.91667' height='3.2' rx='1.6' fill='%23FDE5A5'/%3E%3Crect width='7.95844' height='3.18338' rx='1.59169' transform='matrix(0.703395 0.710799 -0.703395 0.710799 12.8259 5.89804)' fill='%23FDE5A5'/%3E%3Crect x='44.3333' y='22.4' width='7.91667' height='3.2' rx='1.6' fill='%23FDE5A5'/%3E%3Crect x='30.0833' width='8' height='3.16667' rx='1.58333' transform='rotate(90 30.0833 0)' fill='%23FDE5A5'/%3E%3Crect width='7.95844' height='3.18338' rx='1.59169' transform='matrix(-0.703395 0.710799 -0.703395 -0.710799 46.4134 8.16074)' fill='%23FDE5A5'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M41.1667 24C41.1667 25.6975 40.8397 27.3177 40.2459 28.8H55.4167C56.2911 28.8 57 29.5164 57 30.4C57 31.2837 56.2911 32 55.4167 32H1.58333C0.708883 32 0 31.2837 0 30.4C0 29.5164 0.708883 28.8 1.58333 28.8H16.7541C16.1603 27.3177 15.8333 25.6975 15.8333 24C15.8333 16.9308 21.5044 11.2 28.5 11.2C35.4956 11.2 41.1667 16.9308 41.1667 24ZM20.2709 28.8H36.7291C37.5374 27.388 38 25.7486 38 24C38 18.6981 33.7467 14.4 28.5 14.4C23.2533 14.4 19 18.6981 19 24C19 25.7486 19.4626 27.388 20.2709 28.8Z' fill='%23FDE5A5'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M20.2709 28.8H36.7291C37.5374 27.388 38 25.7486 38 24C38 18.6981 33.7467 14.4 28.5 14.4C23.2533 14.4 19 18.6981 19 24C19 25.7486 19.4626 27.388 20.2709 28.8Z' fill='%23FFD071'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_457_1848'%3E%3Crect width='57' height='32' fill='white'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E%0A");
          }
          &.sunset{
            background-image: url("data:image/svg+xml,%3Csvg width='57' height='32' viewBox='0 0 57 32' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M14.785 32H42.2152C43.5624 29.6466 44.3334 26.9143 44.3334 24C44.3334 15.1634 37.2446 8 28.5001 8C19.7556 8 12.6667 15.1634 12.6667 24C12.6667 26.9143 13.4378 29.6466 14.785 32Z' fill='%23FFBEB6'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M41.1667 24C41.1667 25.6974 40.8397 27.3177 40.2459 28.8H55.4167C56.2911 28.8 57 29.5163 57 30.4C57 31.2837 56.2911 32 55.4167 32H1.58333C0.708883 32 0 31.2837 0 30.4C0 29.5163 0.708883 28.8 1.58333 28.8H16.7541C16.1603 27.3177 15.8333 25.6974 15.8333 24C15.8333 16.9308 21.5044 11.2 28.5 11.2C35.4956 11.2 41.1667 16.9308 41.1667 24Z' fill='%23FF7F77'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M20.2709 28.8H36.7291C37.5374 27.388 38 25.7486 38 24C38 18.6981 33.7467 14.4 28.5 14.4C23.2533 14.4 19 18.6981 19 24C19 25.7486 19.4626 27.388 20.2709 28.8Z' fill='%23FF5146'/%3E%3C/svg%3E%0A");
          }
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

  @media screen and (max-width: 768px) {
    .card-wrap{
      width: 100%;
      .card-item{
        width: 100%;
      }
    }
  }
</style>