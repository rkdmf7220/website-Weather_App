<template>
 <div class="sun-data-container">
   <div class="sun-data-date">
     <span class="small-text"><span class="gray3">{{this.itemData.day}}</span>{{this.itemData.date}}</span>
   </div>
   <div class="sun-data-sunrise">
     <span><span class="small-text gray3">일출</span>{{this.itemData.sunrise}}</span>
   </div>
   <div class="sun-data-sunset">
     <span><span class="small-text gray3">일몰</span>{{this.itemData.sunset}}</span>
   </div>
 </div>
<!--  <div class="sun-data-container">
   <div class="sun-data-date">
     <span class="small-text"><span class="gray3">{{this.itemData.title}}</span>{{moment().format("MM/DD")}}</span>
   </div>
   <div class="sun-data-sunrise">
     <span><span class="small-text gray3">일출</span>{{moment(`${this.itemData.sunrise}`, 'hh:mm a').add(9, 'h').format('HH:mm')}}</span>
   </div>
   <div class="sun-data-sunset">
     <span><span class="small-text gray3">일몰</span>{{moment(`${this.itemData.sunset}`, 'hh:mm a').add(9, 'h').format('HH:mm')}}</span>
   </div>
 </div>-->
<!-- <div class="sun-data-container">
   <div class="sun-data-date">
     <span class="small-text"><span class="gray3">{{this.itemData.title}}</span>{{moment().format("MM/DD")}}</span>
   </div>
   <div class="sun-data-sunrise">
     <span><span class="small-text gray3">일출</span>06:00</span>
   </div>
   <div class="sun-data-sunset">
     <span><span class="small-text gray3">일몰</span>18:00</span>
   </div>
 </div>-->
</template>

<script>
export default {
  name: "SunDataItem",
  props: {
    itemData: Object
  }
}
</script>

<style scoped lang="scss">
.sun-data-container{
  display: flex;
  flex-direction: row;
  width: 100%;
  flex: 1 1 0;
  justify-content: space-around;

  .gray3{
    margin-right: 4px;
  }
}
</style>