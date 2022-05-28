<template>
  <ul class="air-info-container">
<!--    <li class="air-info-list" v-for="item in airDataList" :key="item.title">
      <air-info-item :item-data="item"/>
    </li>-->
    <li class="air-info-list" v-for="item in keyList" :key="item.id">
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
      'airQuality',
      'ultraviolet'
    ]),

    currentPm10Value() {
      return this.$store.state.airQuality.pm10Value;
      // let found = this.$store.state.airQuality.pm10Value;
      // return found ? found + '㎍/㎥' : '';
    },
    currentPm10Grade() {
      return this.$store.state.airQuality.pm10Grade;
    },
    currentPm25Value() {
      return this.$store.state.airQuality.pm25Value;
      // let found = this.$store.state.airQuality.pm25Value;
      // return found ? found + '㎍/㎥' : '';
    },
    currentPm25Grade() {
      return this.$store.state.airQuality.pm25Grade;
    },
    currentO3Value() {
      return this.$store.state.airQuality.o3Value;
      // let found = this.$store.state.airQuality.o3Value;
      // return found ? found + 'ppm' : '';
    },
    currentO3Grade() {
      return this.$store.state.airQuality.o3Grade;
    },
    currentUltravioletValue() {
      return this.$store.state.ultraviolet.today;
      // let found = this.$store.state.ultraviolet.today;
      // return found ? found + 'uv' : '';
    },
    currentUltravioletGrade() {
      let found = Number(this.$store.state.ultraviolet.today);
      let grade
      if (0 <= found && found < 3) {
        grade = 1
      } else if (3 <= found && found < 6) {
        grade = 2
      } else if (6 <= found && found < 8) {
        grade = 3
      } else if (8 <= found && found < 11) {
        grade = 4
      } else if (11 <= found) {
        grade = 5
      }
      return grade;
    }
  },
  mounted() {
    this.$nextTick(function () {
      this.loadAirData;
      console.log('airData 확인', this.airDataList)
      console.log('store airQuality 확인', this.airQuality)
    })
  },
  watch: {
    currentPm10Value: {
      deep: true,
      handler: function() {
        this.airDataList.pm10.value = this.currentPm10Value
      }
    },
    currentPm10Grade: {
      deep: true,
      handler: function() {
        this.airDataList.pm10.grade = this.currentPm10Grade
      }
    },
    currentPm25Value: {
      deep: true,
      handler: function() {
        this.airDataList.pm25.value = this.currentPm25Value
      }
    },
    currentPm25Grade: {
      deep: true,
      handler: function() {
        this.airDataList.pm25.grade = this.currentPm25Grade
      }
    },
    currentO3Value: {
      deep: true,
      handler: function() {
        this.airDataList.o3.value = this.currentO3Value
      }
    },
    currentO3Grade: {
      deep: true,
      handler: function() {
        this.airDataList.o3.grade = this.currentO3Grade
      }
    },
    currentUltravioletValue: {
      deep: true,
      handler: function() {
        this.airDataList.ultraviolet.value = this.currentUltravioletValue
      }
    },
    currentUltravioletGrade: {
      deep: true,
      handler: function() {
        this.airDataList.ultraviolet.grade = this.currentUltravioletGrade
      }
    }
  },
  data() {
    return {
      keyList: [
        {
          id: 'pm10',
          title: '미세먼지',
          data: this.airQuality,
          gradeKey: 'pm10Grade',
          valueKey: 'pm10Value',
          unit: '㎍/㎥'
        },
        {
          id: 'pm25',
          title: '초미세먼지',
          data: this.airQuality,
          gradeKey: 'pm25Grade',
          valueKey: 'pm25Value',
          unit: '㎍/㎥'
        },
        {
          id: 'o3',
          title: '오존',
          data: this.airQuality,
          gradeKey: 'o3Grade',
          valueKey: 'o3Value',
          unit: 'ppm'
        },
        {
          id: 'ultraviolet',
          title: '자외선',
          data: this.$store.state.ultraviolet,
          gradeKey: 'today',
          valueKey: 'today',
          unit: 'uv'
        }
      ],
      airDataList: {
        pm10: {
          title: '미세먼지',
          value: '',
          grade: '',
          unit: '㎍/㎥'
        },
        pm25: {
          title: '초미세먼지',
          value: '',
          grade: '',
          unit: '㎍/㎥'
        },
        o3: {
          title: '오존',
          value: '',
          grade: '',
          unit: 'ppm'
        },
        ultraviolet: {
          title: '자외선',
          value: '',
          grade: '',
          unit: 'uv'
        }
      }
    }
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
</style>