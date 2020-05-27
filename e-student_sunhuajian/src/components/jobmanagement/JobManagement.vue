<template>
  <section class="job_wrapper type_area">
    <CommonLeft
      :msg="[{title:'简历管理',icon:'fa-address-card',router:'/job-management/resume-manager'},{title:'应聘管理',icon:'fa-address-book',router:'/job-management/offer-manager'},{title:'职业发展',icon:'fa-briefcase',router:'/job-management/career-development'}]"
    ></CommonLeft>
    <div class="job_right">
      <router-view></router-view>
    </div>
  </section>
</template>

<script>
import CommonLeft from "../common/CommonLeft.vue";
export default {
  name: "JobManagement",
  components: {
    CommonLeft
  }
};
</script>

<style lang="less" scoped>
.job_wrapper {
  display: flex;
  justify-content: space-between;

  .job_right {
    flex: 1;
    background-color: #ffffff;
  }
}
</style>