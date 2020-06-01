<template>
  <section>
    <header class="header">
      <div class="login_header_wrapper type_area">
        <a href="javascript:;" class="logo">
          <img src="../../assets/img/logo.jpg" alt="网站logo" />
        </a>
        <div class="login_wrapper">
          <span class="sign_in_button" @click="changePath()">注册</span>
          <span class="line">|</span>
          <span class="login_button" @click="changePathtwo()">登录</span>
        </div>
      </div>
    </header>
    <div class="login_wrapper">
      <div class="teacher_bk">
        <img src="../../assets/img/bkpeople.jpg" alt />
      </div>
      <div class="login_form">
        <div class="userid">
          <UserId></UserId>
          <div v-if="active===0">
            <LoginForm></LoginForm>
          </div>
          <div v-if="active===1">
            <ByPhoneLogin></ByPhoneLogin>
          </div>
          <div v-if="active===2">
            <ByPhoneLoginSign></ByPhoneLoginSign>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import UserId from "./UserId.vue";
import LoginForm from "./LoginForm.vue";
import ByPhoneLogin from "./ByPhoneLogin.vue"
import ByPhoneLoginSign from "./ByPhoneLoginSign.vue"

export default {
  components: {
    UserId,
    LoginForm,
    ByPhoneLogin,
    ByPhoneLoginSign
  },
  data() {
    return {
      active: 0
    };
  },
  methods: {
    changePath() {
      this.active = 1;
    },
    changePathtwo() {
      this.active = 2;
    }
  }
};
</script>

<style lang="less" scoped>
// 登陆页面头部样式
.header {
  height: 120px;
  background-color: #ffffff;
  box-shadow: 15px 15px 50px #eaeaea;
}
.login_header_wrapper {
  display: flex;
  height: 120px;
  align-items: center;
  justify-content: space-between;
}
.logo {
  display: block;
  width: 340px;
  height: 80px;
}
.logo img {
  display: block;
  width: 100%;
  height: 100%;
}
.login_wrapper {
  color: #bcbcbc;
}

.line {
  margin: 0px 5px;
}
.sign_in_button,
.login_button {
  cursor: pointer;
}

// 左侧用户身份样式

.login_wrapper {
  margin-top: 2px;
  display: flex;
  align-items: center;
  background-color: #f9f9f9;
}
.teacher_bk {
  width: 680px;
  height: 840px;
  background-color: black;
}
.teacher_bk img {
  display: block;
  width: 100%;
  height: 100%;
}
.login_form {
  display: flex;
  width: 845px;
  height: 605px;
  position: relative;
  right: 145px;
  border-radius: 5px;
  background-color: #ffffff;
}
.userid {
  display: flex;
}
.userid {
  display: flex;
}
.user_identity_wrapper {
  width: 145px;
}
.user_identity {
  display: block;
  height: 150px;
  text-align: center;
  padding-top: 40px;
  color: #ffffff;
  box-sizing: border-box;
  background-color: #202421;
}
.user_identity_wrapper .item_def {
  padding-top: 120px;
  height: 305px;
  background-color: #adc700;
}
.user_identity img {
  display: block;
  width: 45px;
  height: 45px;
  margin: 0px auto 20px;
}

.username {
  display: block;
  margin: auto;
  width: 85px;
  height: 20px;
  color: #ffffff;
}
</style>

