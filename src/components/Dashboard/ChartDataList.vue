<template>
  <div>
    <ul class="chart-data-list">
      <li class="chart-data-item" v-for="(item, index) in chartData" :key="item.x">
        <chart-data-item :item-data="chartData[index]" :chart-category="chartCategory"/>
      </li>
    </ul>
  </div>
</template>

<script>
import ChartDataItem from "./ChartDataItem";
export default {
  name: "ChartDataList",
  components: {ChartDataItem},
  props: {
    chartData: Array,
    chartCategory: String
  },
  methods: {
  }
}
</script>

<style scoped lang="scss">
  .chart-data-list{
    display: flex;
    margin-left: 20px;

    .chart-data-item{
      display: inline-block;
      text-align: center;
      margin-right: 10px;

      &:last-child{
        margin-right: 0;
      }
    }
  }
</style>