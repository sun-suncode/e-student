<template>
  <section class="learn_wrapper type_area">
    <CommonLeft :msg="[{title:'我的课程',icon:'fa-book',router:'/learning-management/my-course'},{title:'我的收藏',icon:'fa-star',router:'/learning-management/my-collect'},{title:'我的活动',icon:'fa-bullhorn',router:'/learning-management/my-activity'}]"></CommonLeft>
    <div class="learn_right">
      <router-view></router-view>
    </div>
  </section>
</template>

<script>
import CommonLeft from "../common/CommonLeft.vue";
export default {
  name: "LearningManagement",
  components: {
    CommonLeft
  }
};
</script>

<style lang="less" scoped>
.learn_wrapper {
  display: flex;
  justify-content: space-between;

  .learn_right {
    flex: 1;
    background-color: #ffffff;
  }
}
</style>