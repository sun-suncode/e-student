<template>
  <section class="common_left">
    <a href="javascript:;" class="head_photo">
      <img src="../../assets/img/t1.jpg" alt />
      <p>编辑</p>
    </a>
    <a
      href="javascript:;"
      v-for="(item , index) in msg"
      :key="index"
      :class="{def:item.router===router}"
      @click="[changeRouter(item.router),push(item.router)]"
    >
      <i class="fa lo" :class="item.icon"></i>
      <span>{{item.title}}</span>
    </a>
  </section>
</template>

<script>
export default {
  props: ["msg"],
  data: function() {
    return {
      router: ""
    };
  },
  methods: {
    changeRouter(router) {
      this.router = router;
    },
    push(router) {
      this.$router.push(router);
    }
  },
  created() {
    this.router = this.$route.path;
  }
};
</script>

<style scoped lang="less">
/* 页面左侧区域的样式 */

.common_left {
  width: 370px;
  min-height: 770px;
  margin-right: 25px;
  text-align: center;
  background-color: #ffffff;
}
.common_left a {
  display: block;
  font-size: 20px;
  margin-bottom: 40px;
  font-weight: bold;
  color: #666666;
}
.common_left a span {
  font-weight: bold;
}
.common_left a:hover {
  color: #9bc604;
}
.common_left .head_photo {
  width: 135px;
  height: 135px;
  margin: 65px auto;
  overflow: hidden;
  border-radius: 50%;
  position: relative;
}
.common_left .head_photo p {
  width: 100%;
  line-height: 30px;
  font-size: 14px;
  position: absolute;
  color: #ffffff;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.4);
}
.common_left .head_photo p:hover {
  color: #9bc604;
}
.common_left .head_photo img {
  display: block;
  width: 100%;
  height: 100%;
}

.common_left a.def {
  color: #9bc604;
}
.lo {
  margin-right: 15px;
}
.item_i {
  margin-top: 40px;
}
</style>