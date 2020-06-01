<template>
  <section>
    <!-- <section class="basic_information_right" v-if="show==true">
      <p class="user_name_box">
        <span>姓名</span>
        <span>孙华建</span>
        <span class="copyreader" v-on:click="copyreader()">
          <i class="fa fa-pencil"></i>编辑
        </span>
      </p>
      <p>
        <span>出生日期</span>
        <span>1999年2月9日</span>
      </p>
      <p>
        <span>性别</span>
        <span>男</span>
      </p>
      <p class="user_num_phone">
        <span>手机号</span>
        <span>19998654588</span>
        <span class="verification">
          <i class="fa fa-check mr"></i>已验证
        </span>
      </p>
      <p>
        <span>邮箱</span>
        <span>123456789@qq.com</span>
      </p>
      <p>
        <span>身份证</span>
        <span>555444199902096666</span>
      </p>
      <p>
        <span>微信</span>
        <span>12345678900</span>
      </p>
      <p>
        <span>QQ</span>
        <span>123456789</span>
      </p>
    </section>-->
    <!-- <section v-if="!show"> -->
    <section class="basic_information_right_copyreader">
      <form
        action
        method="POST"
        enctype="multipart/form-data"
        :model="myInfoFormValue"
        autocomplete="off"
      >
        <p class="user_name_box">
          <label for="name">姓名</label>
          <input type="text" id="name" name="username" :value="myInfoFormValue.name" disabled />
          <span class="copyreader" v-on:click="copyreader()">
            <i class="fa fa-pencil mr"></i>编辑
          </span>
        </p>
        <p>
          <label for="birthday">出生日期</label>
          <input
            type="text"
            disabled
            id="birthday"
            name="userbirthday"
            placeholder="本项不可输入，当写完身份证信息后自动同步出生日期"
            :value="myInfoFormValue.birthday"
          />
        </p>
        <div class="sex">
          <label for="sex">性别</label>
          <input type="text" id="sex" name="usersex" :value="myInfoFormValue.sex" disabled />
          <div class="choose_sex btn">
            <i class="fa fa-angle-down"></i>
            <div class="choose_sex_box">
              <option disabled value>请选择</option>
              <option class="sex_choose" value="男" @click="changeSex(sex,0)">男</option>
              <option class="sex_choose" value="女" @click="changeSex(sex,1)">女</option>
            </div>
          </div>
        </div>
        <p class="phone_num">
          <label for="phonenumber">手机号</label>
          <input
            type="text"
            id="phonenumber"
            name="user_phonenumber"
            class="user_phonenum"
            :value="myInfoFormValue.phonenumber"
            disabled
          />
          <span class="verification">
            <i class="fa fa-check">已验证</i>
          </span>
          <span class="get_code btn">获取验证码</span>
        </p>
        <p>
          <label for="email">邮箱</label>
          <input type="text" id="email" name="user_email" :value="myInfoFormValue.mail" disabled />
        </p>
        <p>
          <label for="id_card">身份证</label>
          <input
            type="text"
            id="id_card"
            name="use_id"
            v-model="myInfoFormValue.idcard"
            @blur="getBirthday(myInfoFormValue.idcard)"
            disabled
          />
        </p>
        <p>
          <label for="wechat">微信</label>
          <input
            type="text"
            id="wechat"
            name="use_wechat"
            :value="myInfoFormValue.wechatnumber"
            disabled
          />
        </p>
        <p>
          <label for="qq">QQ</label>
          <input type="text" id="qq" name="use_qq" :value="myInfoFormValue.qqnumber" disabled />
        </p>
      </form>
      <p>
        <span class="sub btn" v-on:click="disapper()">提交信息</span>
        <span class="cancel btn" v-on:click="disapper()">取消修改</span>
      </p>
    </section>
    <!-- </section> -->
  </section>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      show: true,
      myInfoFormValue: {
        name: "孙华建",
        birthday: "1999年02月09日",
        sex: "男",
        phonenumber: "12345678900",
        mail: "1369860716@qq.com",
        idcard: "411256199902095544",
        wechatnumber: "sunhuajian123456",
        qqnumber: "1369860716"
      },
      sex: ["男", "女"],
      num: 0
    };
  },
  methods: {
    copyreader() {
      let inputs = document.querySelectorAll("input");
      console.log(inputs);
      inputs.forEach(function(item, index) {
        item.setAttribute(
          "style",
          "border: 1px solid gray !important;padding-left:14px"
        );
        if (index === 1) {
          item.disabled = "true";
        } else {
          item.disabled = "";
        }
      });
      let btns = document.querySelectorAll(".btn");
      console.log(btns);
      btns.forEach(function(item) {
        item.setAttribute("style", "display:inline-block");
      });
    },
    disapper() {
      let inputs = document.querySelectorAll("input");
      console.log(inputs);
      inputs.forEach(function(item) {
        item.setAttribute("style", "border: 0px !important;padding-left:15px");
        item.disabled = "true";
      });
      let btns = document.querySelectorAll(".btn");
      console.log(btns);
      btns.forEach(function(item) {
        item.setAttribute("style", "display:none");
      });
    },
    changeSex(sex, num) {
      console.log(sex, num);
      this.num = num;
      this.myInfoFormValue.sex = sex[num];
    },
    getBirthday(birthday) {
      console.log(birthday);
      let data =
        birthday.substr(6, 4) +
        "年" +
        birthday.substr(10, 2) +
        "月" +
        birthday.substr(12, 2) +
        "日";
      this.myInfoFormValue.birthday = data;
      // console(a);
      // stringObject.substr(start [, length ])
    }
  },

};
</script>

<style lang="less" scoped>
.copyreader {
  cursor: pointer;
  position: absolute;
  color: #94c200;
  right: 0;
}

.user_name_box {
  position: relative;
}

.mr {
  margin-right: 15px;
}
.btn {
  display: none;
}
// form表单的样式

.basic_information_right_copyreader {
  height: 770px;
  width: 1200px;
  padding: 50px 35px;
  box-sizing: border-box;
  background-color: #fff;
}

.basic_information_right_copyreader form p,
.basic_information_right_copyreader .sex {
  margin: 0px 0px 15px 0px;
}

.basic_information_right_copyreader form p label,
.basic_information_right_copyreader .sex label {
  display: inline-block;
  width: 80px;
  height: 60px;
  line-height: 60px;
  font-size: 20px;
  text-align: right;
  margin-right: 25px;
}
.basic_information_right_copyreader form p span,
.basic_information_right_copyreader .sex span {
  display: inline-block;
  width: 80px;
  font-size: 20px;
  text-align: right;
  margin-right: 25px;
}
.basic_information_right_copyreader form p input,
.basic_information_right_copyreader .sex input {
  width: 520px;
  height: 55px;
  line-height: 55px;
  font-size: 18px;
  outline: none;
  padding-left: 15px;
  color: black;
  vertical-align: middle;
  background-color: #ffffff;
  box-sizing: border-box;
  border: 0px solid grey;
}

.basic_information_right_copyreader form p .user_phonenum {
  width: 325px;
}
.phone_num {
  position: relative;
  width: 650px;
}

.basic_information_right_copyreader .verification {
  display: inline-block;
  width: 200px;
  height: 55px;
  position: absolute;
  right: 170px;
  top: 4px;
  line-height: 55px;
  box-sizing: border-box;
  text-align: center;
  font-size: 16px;
  color: #94c200;
}
.basic_information_right_copyreader .get_code {
  display: block;
  display: none;
  width: 198px;
  height: 56px;
  position: absolute;
  right: -2px;
  top: 4px;
  line-height: 55px;
  box-sizing: border-box;
  text-align: center;
  font-size: 20px;
  cursor: pointer;
  border: 1px solid grey;
}
.basic_information_right_copyreader .get_code:hover {
  background-color: #00aaff;
  color: #fff;
}
.basic_information_right_copyreader .sub {
  display: inline-block;
  display: none;
  width: 215px;
  height: 58px;
  color: #fff;
  font-size: 20px;
  text-align: center;
  line-height: 58px;
  border-radius: 8px;
  margin-right: 20px;
  margin-left: 110px;
  cursor: pointer;
  background-color: #00aaff;
  border: 1px solid gray;
}
.basic_information_right_copyreader .cancel {
  display: inline-block;
  display: none;
  width: 215px;
  height: 58px;
  font-size: 20px;
  text-align: center;
  line-height: 58px;
  border-radius: 8px;
  cursor: pointer;
  background-color: #fff;
  border: 1px solid gray;
}
.basic_information_right_copyreader .sex {
  position: relative;
  width: 650px;
}
.choose_sex,
.choose_sex_box {
  display: inline-block;
  width: 150px;
  height: 55px;
  line-height: 55px;
  text-align: center;
  position: absolute;
  right: 25px;
  top: 5px;
  font-size: 24px;
  box-sizing: border-box;
  border-left: 0;
}

.choose_sex {
  display: none;
}
.basic_information_right_copyreader .choose_sex:hover {
  background-color: #f4f4f4;
  border: 1px solid gray;
  box-sizing: border-box;
}
.basic_information_right_copyreader .choose_sex:hover .choose_sex_box {
  display: block;
}
.basic_information_right_copyreader
  .choose_sex:hover
  .choose_sex_box
  .sex_choose:hover {
  background-color: #f4f4f4;
}
.choose_sex_box {
  display: none;
  height: auto;
  top: 55px;
  right: -1px;
  background-color: #fff;
  z-index: 5;
}
.choose_sex_box option {
  border: 1px solid gray;
}
</style>