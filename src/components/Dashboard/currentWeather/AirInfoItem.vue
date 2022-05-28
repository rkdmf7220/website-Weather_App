<template>
  <div class="air-item-container">
    <span class="small-text">{{itemData.title}}</span>
    <b class="air-item-grade small-text white grade-good">좋음</b>
    <span class="air-item-value blue-bell">{{dataValue}}</span>
  </div>
</template>

<script>
export default {
  name: "AirInfoItem",
  props: {
    itemData: Object
  },
  computed: {
    // dataValue() {
    //   return this.itemData.valueKey
    //   // return this.itemData.data.pm25Grade
    // }
  },
  watch: {
    dataValue: {
      deep: true,
      handler() {
          // return this.itemData.valueKey
          return this.itemData.id
      }
    }
  },
  mounted() {
    console.log(this.itemData.title, this.itemData)
  }
}
</script>

<style scoped lang="scss">
  .air-item-container{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 102px;

    .air-item-grade{
      line-height: 1em;
      padding: 8px 20px;
      border-radius: 15px;
      margin: 16px 0 8px 0;
    }

    .grade-good{
      background-color: #85B6FD;
    }
    .grade-moderate{
      background-color: #23E05C;
    }
    .grade-unhealthy{
      background-color: #FFAD33;
    }
    .grade-very-unhealthy{
      background-color: #FF6F61;
    }
    .grade-hazardous{
      background-color: #000000;
    }

    .air-item-value{
      .small-text{
        margin-left: 1px;
      }
    }
  }
</style>