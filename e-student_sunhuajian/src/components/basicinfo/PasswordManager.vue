<template>
  <section>
    <div class="password_wrapper login_password_wrapper">
      <div class="password_box login_password_box">
        <span class="password_title login_password_title">登陆密码</span>
        <span class="password_write login_password_write" @click="showForm('login_password_form')">
          <i class="fa fa-pencil"></i>编辑
        </span>
      </div>

      <form
        action
        class="password_form login_password_form"
        ref="login_password_form"
        name="login_password_form"
        autocomplete="false"
      >
        <p>
          <label for="old-password" class="label">原密码</label>
          <input
            class="input"
            type="text"
            name="old_password"
            id="old_password"
            placeholder="请输入原始密码"
          />
        </p>
        <p>
          <label for="new-password" class="label">新密码</label>
          <input
            class="input"
            type="text"
            name="new_password"
            id="new_password"
            placeholder="请输入新密码"
          />
        </p>
        <p>
          <label for="again-password" class="label">确认密码</label>
          <input
            class="input"
            type="text"
            name="again_password"
            id="again_password"
            placeholder="请再次输入新密码"
          />
        </p>
        <span class="button submit_button">确认修改</span>
        <span class="button cancel_button" @click="hideForm('login_password_form')">取消修改</span>
      </form>
    </div>
    <div class="password_wrapper apply_password_wrapper">
      <div class="password_box apply_password_box">
        <span class="password_title apply_password_title">支付密码</span>
        <span class="password_write apply_password_write" @click="showForm('apply_password_form')">
          <i class="fa fa-pencil"></i>编辑
        </span>
      </div>
      <form
        action
        class="password_form apply_password_form"
        ref="apply_password_form"
        name="apply_password_form"
      >
        <p>
          <label for="old-password" class="label">原密码</label>
          <input
            class="input"
            type="text"
            name="old_password"
            id="old_password"
            placeholder="请输入原始密码"
          />
        </p>
        <p>
          <label for="new-password" class="label">新密码</label>
          <input
            class="input"
            type="text"
            name="new_password"
            id="new_password"
            placeholder="请输入新密码"
          />
        </p>
        <div class="code_box">
          <label for="phone_num" class="label">手机号</label>
          <input
            class="phone_input input"
            type="text"
            name="phone_num"
            id="phone_num"
            maxlength="11"
            placeholder="请输入您的手机号"
          />
          <span class="get_code_btn">获取验证码</span>
        </div>
        <p>
          <label for="code_num" class="label">验证码</label>
          <input class="input" type="text" name="code_num" id="code_num" placeholder="请输入您获取的验证码" />
        </p>
        <span class="button submit_button">确认修改</span>
        <span class="button cancel_button" @click="hideForm('apply_password_form')">取消修改</span>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  methods: {
    showForm(form_name) {
      if (form_name === "login_password_form") {
        this.$refs.login_password_form.style.display = "block";
      } else if (form_name === "apply_password_form") {
        this.$refs.apply_password_form.style.display = "block";
      }
    },
    hideForm(form_name) {
      if (form_name === "login_password_form") {
        this.$refs.login_password_form.style.display = "none";
      } else if (form_name === "apply_password_form") {
        this.$refs.apply_password_form.style.display = "none";
      }
    }
  }
};
</script>

<style lang="less" scoped>
.password_wrapper {
  .password_box {
    display: flex;
    height: 145px;
    font-size: 18px;
    justify-content: space-between;
    align-items: center;
    padding: 0 60px;
    border-bottom: 1px solid #cdcdcd;
  }
  .password_title {
    display: block;
    color: #333333;
    font-weight: bold;
  }
  .password_write {
    display: block;
    color: #9bc604;
  }
  .password_write i {
    margin-right: 15px;
  }

  .password_form {
    display: none;
    padding: 55px 0 0 90px;
    font-size: 18px;

    .label {
      display: inline-block;
      width: 120px;
      height: 50px;
      text-align: center;
      line-height: 50px;
      margin-bottom: 25px;
      color: #cdcdcd;
    }
    .input {
      width: 530px;
      height: 50px;
      line-height: 50px;
      outline: none;
      font-size: 18px;
      text-indent: 0.5rem;
      box-sizing: border-box;
      border: 1px solid #cdcdcd;
    }

    .button {
      display: inline-block;
      width: 210px;
      height: 55px;
      text-align: center;
      margin-bottom: 20px;
      line-height: 55px;
      border-radius: 8px;
      border: 1px solid #cdcdcd;
    }

    .submit_button {
      color: #ffffff;
      margin-right: 25px;
      margin-left: 120px;
      background-color: #9bc604;
    }

    .phone_input {
      width: 315px;
    }

    .get_code_btn {
      display: inline-block;
      width: 216px;
      height: 49px;
      line-height: 48px;
      text-align: center;
      cursor: pointer;
      border: 1px solid #cdcdcd;
      box-sizing: border-box;
      position: relative;
      top: 1px;
      left: -1px;
    }
  }
}
</style>