<template>
  <div>
    {{this.$store.mediumLandForecast}}
  </div>
</template>

<script>
export default {
  name: "Dashboard",
  data() {
    return{
      today: '202205131800',
      base_date: '20220513',
      base_time: '0500',
      nx: '55',
      ny: '127',
      areaNo: '1100000000',
      time: '2022051318',
      stationName: '종로구'
    }
  },
  mounted() {
    this.$store.dispatch('updateMediumLandForecast', {regId: '11B00000', tmFc: this.today})
    this.$store.dispatch('updateMediumTemperature', {regId: '11B10101', tmFc: this.today})
    this.$store.dispatch('updateVillageForecast', {today: this.today, base_date: this.base_date, base_time: this.base_time, nx: this.nx, ny: this.ny})
    this.$store.dispatch('updateWindChillTemperature', {areaNo: this.areaNo, time: this.time})
    this.$store.dispatch('updateUltraviolet', {areaNo: this.areaNo, time: this.time})
    this.$store.dispatch('updateAirQuality', {stationName: this.stationName})
  }
}
</script>

<style scoped>

</style>