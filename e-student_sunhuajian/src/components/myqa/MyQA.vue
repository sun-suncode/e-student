<template>
  <section class="qa_wrapper type_area">
    <CommonLeft :msg="[{title:'我的提问',icon:'fa-file-text',router:'/myqa/my-question'},{title:'我的回答',icon:'fa-commenting',router:'/myqa/my-answer'}]"></CommonLeft>
    <div class="qa_right">
      <router-view></router-view>
    </div>
  </section>
</template>

<script>
import CommonLeft from "../common/CommonLeft.vue";
export default {
  name: "MyQA",
  components: {
    CommonLeft
  }
};
</script>

<style lang="less" scoped>
.qa_wrapper {
  display: flex;
  justify-content: space-between;

  .qa_right {
    flex: 1;
    background-color: #ffffff;
  }
}
</style>