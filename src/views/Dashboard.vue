<template>
  <div>
    {{this.$store.mediumLandForecast}}
  </div>
</template>

<script>
export default {
  name: "Dashboard",
  mounted() {
    this.$store.dispatch('updateMediumLandForecast', {regId: '11B00000', tmFc: '202205061800'})
    this.$store.dispatch('updateVillageForecast')
  }
}
</script>

<style scoped>

</style>