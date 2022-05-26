<template>
  <div class="info-container">
    <h2>{{currentTemperature}}</h2>
<!--    <span>어제보다 <b class="coral">1°</b> 높아요</span>-->
    <div class="temperature-list">
      <h3 class="gray2"><span class="blue-bell">12°</span> / <span class="coral">23°</span></h3>
      <span class="small-text"><span class="gray3">체감온도</span> {{currentWindChill}}</span>
    </div>
    <ul class="sub-info small-text">
      <li>
        <span class="gray3">습도</span>
        <span class="gray4">{{currentHumidity}}</span>
      </li>
      <li><span class="vertical-line"></span></li>
      <li>
        <span class="gray3">풍속</span>
        <span class="gray4">{{currentWindSpeed}}</span>
      </li>
      <li><span class="vertical-line"></span></li>
      <li v-if="!nowRain">
        <span class="gray3">강수확률</span>
        <span class="gray4">{{currentRainfallProbability}}</span>
      </li>
      <li v-else>
        <span class="gray3">강수량</span>
        <span class="gray4">{{currentRainfallAmount}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import moment from "moment";

export default {
  name: "TempInfo",
  computed: {
     currentTemperature() {
       // console.log('currentTemperature()::::', this.$store.state)
       let found = this.$store.state.villageForecast.find(item => (
           item.category === "TMP" &&
           item.fcstDate === this.today &&
           item.fcstTime === this.now
       ));
       return found ? found.fcstValue + '°' : '';
     },
    currentWindChill() {
       let found = this.$store.state.windChillTemperature[`h${this.checkWindChillTime()-6}`]
      return found ? found + '°' : '';
    },
    currentHumidity() {
      let found = this.$store.state.villageForecast.find(item => (
          item.category === "REH" &&
          item.fcstDate === this.today &&
          item.fcstTime === this.now
      ))
      return found ? found.fcstValue + '%' : '';
    },
    currentWindSpeed() {
      let found = this.$store.state.villageForecast.find(item => (
          item.category === "WSD" &&
          item.fcstDate === this.today &&
          item.fcstTime === this.now
      ))
      return found ? found.fcstValue + 'm/s' : '';
    },
    currentRainfallProbability() {
      let found = this.$store.state.villageForecast.find(item => (
          item.category === "POP" &&
          item.fcstDate === this.today &&
          item.fcstTime === this.now
      ))
      return found ? found.fcstValue + '%' : '';
    },
    currentRainfallAmount() {
      let found = this.$store.state.villageForecast.find(item => (
          item.category === "PCP" &&
          item.fcstDate === this.today &&
          item.fcstTime === this.now
      ))
      return found ? found.fcstValue + 'mm' : '';
    }
  },

  data() {
    return {
      today: moment().format('YYYYMMDD'),
      now: moment().format('HH') + '00',
      villageForecastApi: this.$store.state.villageForecast,
      nowRain: false,
      // checkWindChillTime: Number(moment().format('HH'))
      checkWindChillTime: function() {
        return Number(moment().format('HH'))
      }
    }
  },

  methods: {
    getYesterdayTemperature() {
      //
    }
  }
}
</script>

<style scoped lang="scss">
  .info-container{
    display: flex;
    flex-direction: column;
    line-height: 1.25em;
    justify-content: center;

    h2{
      //margin-bottom: 16px;
    }
    h3{
      display: inline;
      margin-right: 8px;
    }
    .temperature-list{
      margin: 12px 0;
    }
    .sub-info{
      display: flex;
      flex-direction: row;
      .gray3{
        margin-right: 2px
      }
      .vertical-line{
        margin: 0 8px;
        border-left: 1px solid #bbbbbb;
      }
    }
  }
</style>