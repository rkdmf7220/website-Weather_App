<template>
  <div class="air-item-container">
    <span class="small-text">미세먼지</span>
    <b class="air-item-grade small-text white">좋음</b>
    <span class="air-item-value">9<span class="small-text">㎍/㎥</span></span>
  </div>
</template>

<script>
export default {
  name: "AirInfoItem"
}
</script>

<style scoped lang="scss">
  .air-item-container{
    display: flex;
    flex-direction: column;
    align-items: center;

    .air-item-grade{
      line-height: 1em;
      padding: 8px 20px;
      background-color: #85B6FD;
      border-radius: 15px;
    }
  }
</style>