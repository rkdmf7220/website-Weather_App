<template>
  <h1 class="dashboard-title">
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
  .dashboard-title{
    padding-left: 10px;
    margin-top: 64px;

    span{
      font-weight: 400;
    }
    .title-day{
      display: block;
    }
  }
</style>