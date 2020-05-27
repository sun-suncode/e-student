<template>
  <header>
    <div class="clearfix type_area">
      <div class="logo">
        <a href="javascript:;">
          <img src="../../assets/img/logotwo.jpg" alt />
        </a>
      </div>
      <div class="user_msg">
        <div class="user_head_portrait">
          <!-- <img :src="poto" alt /> -->
          <el-avatar :size="30" :src="poto" >user</el-avatar>
        </div>
        <span class="user_name">{{msg.username}}</span>
        <i class="fa fa-angle-down"></i>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      msg: {
        username: "用户111"
      },
      poto: ""
    };
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      this.axios
        .get(
          "https://d66c3b17-6d30-400f-b650-94f7e035c587.mock.pstmn.io//api/user/information"
        )
        .then(res => {
          if (res.status === 200) {
            this.msg = res.data;
            this.poto = require("../../assets/img/t1.jpg");
          }
        });
    }
  }
};
</script>

<style lang="less" scoped>
/* 头部logo区域的样式 */
header {
  height: 50px;
  background-color: #333333;
}

header .logo {
  float: left;
}

header .logo img {
  display: block;
  height: 50px;
}

header .user_msg {
  float: right;
  color: white;
  font-size: 12px;
  line-height: 50px;
  cursor: pointer;
}

header .user_head_portrait {
  display: inline-block;
  width: 30px;
  height: 30px;
  margin-right: 10px;
  vertical-align: middle;
}

// header .head_img {
//   display: block;
//   width: 100%;
//   height: 100%;
//   border-radius: 50%;
// }

.user_name {
  margin-right: 10px;
}
</style>