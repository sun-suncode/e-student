<template>
  <section class="intergration_wrapper type_area">
    <CommonLeft
      :msg="[{title:'积分记录',icon:'fa-question-circle',router:'/integration-center/inte-center'}]"
    ></CommonLeft>
    <div class="intergration_right">
      <router-view></router-view>
    </div>
  </section>
</template>

<script>
import CommonLeft from "../common/CommonLeft.vue";
export default {
  name: "IntergrationCenter",
  components: {
    CommonLeft
  }
};
</script>

<style lang="less" scoped>
.intergration_wrapper {
  display: flex;
  justify-content: space-between;

  .intergration_right {
    flex: 1;
    background-color: #ffffff;
  }
}
</style>