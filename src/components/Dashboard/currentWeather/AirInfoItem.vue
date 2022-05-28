<template>
  <div class="air-item-container">
    <span class="small-text">{{itemData.title}}</span>
    <b class="air-item-grade small-text white" :class="gradeObject.className">{{ gradeObject.text }}</b>
    <span class="air-item-value blue-bell">{{itemData.value}}<span v-show="itemData.value.length" class="small-text">{{itemData.unit}}</span></span>
  </div>
</template>

<script>
export default {
  name: "AirInfoItem",
  props: {
    itemData: Object
  },
  computed: {
    // dataValue() {
    //   return this.itemData.valueKey
    //   // return this.itemData.data.pm25Grade
    // }
    gradeObject() {
      let grade = this.itemData.data[this.itemData.gradeKey];
      let text;
      let className;
      if (this.itemData.id === 'ultraviolet') {

        let found = Number(grade);
        if (0 <= found && found < 3) {
          text = '낮음'
          className = 'grade-good';
        } else if (3 <= found && found < 6) {
          text = '보통'
          className = 'grade-good';
        } else if (6 <= found && found < 8) {
          text = '높음'
          className = 'grade-good';
        } else if (8 <= found && found < 11) {
          text = '매우높음'
          className = 'grade-good';
        } else if (11 <= found) {
          text = '위험'
          className = 'grade-good';
        }

      } else {
        switch (grade) {
          case "1":
            text = '좋음'
            className = 'grade-good';
            break;
          case "2":
            text = '보통'
            className = 'grade-good';
            break;
          case "3":
            text = '나쁨'
            className = 'grade-good';
            break;
          case "4":
            text = '매우나쁨'
            className = 'grade-good';
            break;
          default:
        }
      }

      return {
        text,
        className
      };
    }
  },
  watch: {
    dataValue: {
      deep: true,
      handler() {
          // return this.itemData.valueKey
          return this.itemData.id
      }
    }
  },
  mounted() {
    console.log(this.itemData.title, this.itemData)
  }
}
</script>

<style scoped lang="scss">
  .air-item-container{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 102px;

    .air-item-grade{
      line-height: 1em;
      padding: 8px 20px;
      border-radius: 15px;
      margin: 16px 0 8px 0;
    }

    .grade-good{
      background-color: #85B6FD;
    }
    .grade-moderate{
      background-color: #23E05C;
    }
    .grade-unhealthy{
      background-color: #FFAD33;
    }
    .grade-very-unhealthy{
      background-color: #FF6F61;
    }
    .grade-hazardous{
      background-color: #000000;
    }

    .air-item-value{
      .small-text{
        margin-left: 1px;
      }
    }
  }
</style>