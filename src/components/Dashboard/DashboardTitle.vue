<template>
  <div class="dashboard-title-container">
    <h1>Today Weather</h1>
    <h2>
      <b>{{moment().format('M월 DD일')}}</b>
      날씨입니다
    </h2>
  </div>
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

<style scoped>

</style>