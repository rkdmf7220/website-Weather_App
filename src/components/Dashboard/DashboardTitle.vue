<template>
  <h1 class="dashboard-title-container">
    <span>Today Weather</span>
    <span class="title-day">
      <b>{{moment().format('M월 DD일')}}</b>
      날씨입니다
    </span>
  </h1>
</template>

<script>
import moment from "moment"
export default {
  name: "DashboardTitle",
  data() {
    return {
      moment
    }
  }
}
</script>

<style scoped lang="scss">
  .dashboard-title-container{
    padding-left: 10px;
  }
  .title-day{
    display: block;
  }
</style>