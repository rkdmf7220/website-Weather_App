<template>
  <div class="card-wrap">
    <div class="card-item">

    </div>
  </div>
</template>

<script>
export default {
  name: "WeatherWarn"
}
</script>

<style scoped lang="scss">
  .card-item{
    width: 180px;
    height: 170px;
  }
  @media screen and (max-width: 768px) {
    .card-wrap{
      display: none;
    }
  }
</style>