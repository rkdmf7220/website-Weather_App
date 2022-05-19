<template>
  <ul>
    <li>
      <air-info-item/>
    </li>
  </ul>
</template>

<script>
import AirInfoItem from "@/components/Dashboard/currentWeather/AirInfoItem";
export default {
  name: "AirInfo",
  components: {AirInfoItem},
}
</script>

<style scoped lang="scss">

</style>