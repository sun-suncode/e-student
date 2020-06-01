<template>
  <div class="my_courses">
    <CourseList v-for="(item,index) in my_courses" :key="index" :courses_lists="item"></CourseList>
  </div>
</template>

<script>
import CourseList from "../common/CourseList.vue";
export default {
  components: {
    CourseList
  },
  data() {
    return {
      my_courses: [
        {
          video: require("../../assets/img/video1.jpg"),
          title: "刘丽君老师沙龙讲座",
          status: "「报名成功」",
          status_show: "activity",
          data: "3月23日",
          time: "15:43",
          enddata: "3月30日",
          endtime: "09:00",
          address: "北京市朝阳区八里庄北里108号中国银行营业厅"
        },
        {
          video: require("../../assets/img/video2.jpg"),
          title: "UI设计北京沙龙讲座",
          status: "「报名成功」",
          status_show: "activity",
          data: "3月23日",
          time: "15:43",
          enddata: "3月30日",
          endtime: "09:00",
          address: "北京市朝阳区八里庄北里108号中国银行营业厅"
        }
      ]
    };
  }
};
</script>

<style lang="less" scoped>
</style>