<template>
  <div class="my_courses">
    <CourseList v-for="(item,index) in my_collect_course" :key="index" :courses_lists="item"></CourseList>
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
      my_collect_course: [
        {
          video: require("../../assets/img/video1.jpg"),
          title: "海迅设计生产系统2017版实例图纸讲解",
          status: "「进行中」",
          status_show: "collect",
          data: "3月23日",
          time: "15:43",
          author: "刘志刚-极客学院",
          price: "￥299",
          price_red:"false"
        },
        {
          video: require("../../assets/img/video2.jpg"),
          title: "台湾证卷交易法",
          status: "「进行中」",
          status_show: "collect",
          data: "3月23日",
          time: "15:43",
          author: "刘志刚-极客学院",
          price: "免费"
        }
      ]
    };
  }
};
</script>

<style lang="less" scoped>
</style>