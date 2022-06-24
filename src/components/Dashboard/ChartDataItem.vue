<template>
  <div class="data-item-wrap">
    <div class="weather-icon-wrap">
      <div class="weather-icon" :style="{ backgroundImage: `url('img/icon_weather_0_` + itemData.cloud + `_` + itemData.rain + `.png`}"></div>
    </div>
    <span class="weather-value">{{currentValue}}</span>
    <span class="weather-hour">{{currentHour}}</span>
  </div>
</template>

<script>
export default {
  name: "ChartDataItem",
  props: {
    itemData: Object
  },
  computed: {
    currentValue() {
      return this.itemData.y ? this.itemData.y + '°' : ''
    },
    currentHour() {
      return this.itemData.hour ? this.itemData.hour + '시' : ''
    }
  }
}
</script>

<style scoped lang="scss">
  .data-item-wrap{
    display: flex;
    flex-direction: column;
    width: 40px;
    height: 108px;
    align-items: center;

      .weather-icon-wrap{
        flex-grow: 0;
        width: 16px;
        height: 16px;

        .weather-icon{
          width: 100%;
          height: 100%;
          background-size: cover;
        }
      }

      .weather-value{
        flex: auto;
        font-size: 14px;
      }

      .weather-hour{
        flex-grow: 0;
        font-size: 14px;
        color: #666666;
      }
  }
</style>