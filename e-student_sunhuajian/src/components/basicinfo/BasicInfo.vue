<template>
  <section class="basicinfo_wrapper type_area">
    <CommonLeft :msg="[{title:'我的信息',icon:'fa-user-o',router:'/basic-info/my-info'},{title:'学校信息',icon:'fa-bank',router:'/basic-info/school-info'},{title:'密码管理',icon:'fa-cog',router:'/basic-info/password-manager'}]"></CommonLeft>
    <div class="basicinfo_right">
      <router-view></router-view>
    </div>
  </section>
</template>

<script>
import CommonLeft from "../common/CommonLeft.vue";
export default {
  name: "BasicInfo",
  components: {
    CommonLeft
  }
};
</script>

<style lang="less" scoped>
.basicinfo_wrapper {
  display: flex;
  justify-content: space-between;

  .basicinfo_right {
    flex: 1;
    background-color: #ffffff;
  }
}
</style>