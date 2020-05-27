<template>
  <nav class="navigation_bar clearfix type_area">
    <a
      href="javascript:;"
      v-for="(item , index) in nav_lists"
      :key="index"
      :class="[{item_def:index===number},{my_center:index===0}]"
      @click="[changeIndex(index),pushRouter(index)]"
    >{{item}}</a>
  </nav>
</template>

<script>
export default {
  name: "Nav",
  data() {
    return {
      number: 0,
      activeIndex: 0,
      nav_lists: [
        "My Center",
        "基本信息",
        "学习管理",
        "求职管理",
        "我的问答",
        "积分中心"
      ],
      routers: [
        "/mycenter",
        "/basic-info",
        "/learning-management",
        "/job-management",
        "/myqa",
        "/integration-center"
      ]
    };
  },

  methods: {
    changeIndex(index) {
      this.number = index;
    },
    pushRouter(index) {
      this.$router.push(this.routers[index]);
    }
  },
  // watch: {
  //   $route(to) {
  //   }
  // },
  created() {
    for (let key = 0; key < this.routers.length; key++) {
      if (!location.pathname.indexOf(this.routers[key])) {
        this.number = key;
      }
    }
  }
};
</script>

<style lang="less" scoped>
/* 导航栏区域样式 */
#nav {
  background-color: #ffffff;
}

.navigation_bar {
  font-size: 18px;
  height: 120px;
  position: relative;
  display: flex;
  align-items: center;
}

.navigation_bar a {
  display: block;
  height: 55px;
  text-align: center;
  line-height: 55px;
  color: #333333;
  margin-right: 110px;
}

.navigation_bar .my_center {
  color: #9bc604;
  font-size: 30px;
  margin-right: 120px;
  border: 0;
}

.navigation_bar_item:hover {
  color: #9bc604;
}
a.item_def {
  color: #9bc604;
  border-bottom: 1px solid #9bc604;
}
</style>