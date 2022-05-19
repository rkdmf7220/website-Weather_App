<template>
  <div class="info-container">
    <h2>12°</h2>
    <span>어제보다 <b class="coral">1°</b> 높아요</span>
    <div class="temperature-list">
      <h3 class="gray2"><span class="blue-bell">12°</span> / <span class="coral">23°</span></h3>
      <span class="small-text"><span class="gray3">체감온도</span> 22°</span>
    </div>
    <ul class="sub-info small-text">
      <li>
        <span class="gray3">습도</span>
        <span class="gray4">20%</span>
      </li>
      <li><span class="vertical-line"></span></li>
      <li>
        <span class="gray3">풍속</span>
        <span class="gray4">2.8m/x</span>
      </li>
      <li><span class="vertical-line"></span></li>
      <li>
        <span class="gray3">강수확률</span>
        <span class="gray4">50%</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "TempInfo"
}
</script>

<style scoped lang="scss">
  .info-container{
    display: flex;
    flex-direction: column;
    line-height: 1.25em;

    h2{
      margin-bottom: 16px;
    }
    h3{
      display: inline;
      margin-right: 8px;
    }
    .temperature-list{
      margin: 12px 0;
    }
    .sub-info{
      display: flex;
      flex-direction: row;
      .gray3{
        margin-right: 2px
      }
      .vertical-line{
        margin: 0 8px;
        border-left: 1px solid #bbbbbb;
      }
    }
  }
</style>