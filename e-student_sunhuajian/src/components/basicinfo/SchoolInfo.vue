<template>
  <section>
    <form autocomplete="off" :model="schoolFormValue" class="school_info_form">
      <div class="school_info_row school_name">
        <label for="school_name" class="school_label">学校</label>
        <input id="school_name" v-model="schoolFormValue.schoolName" class="school_input" disabled />
        <span class="school_icon" ref="icon">
          <i class="fa fa-university"></i>
        </span>
        <span class="copyreader" ref="write" v-on:click="copyreader()">
          <i class="fa fa-pencil mr"></i>编辑
        </span>
        <span class="school_tag">{{schoolTag[0]}}</span>
      </div>
      <div class="school_info_row school_major">
        <label for="school_major" class="school_label">专业</label>
        <input id="school_major" v-model="schoolFormValue.schoolMajor" class="school_input" disabled />
      </div>
      <div class="school_info_row school_class">
        <label for="school_class" class="school_label">年级</label>
        <input id="school_class" v-model="schoolFormValue.schoolClass" class="school_input" disabled />
      </div>
      <div class="school_info_row school_id">
        <label for="school_id" class="school_label">学籍卡号</label>
        <input id="school_id" v-model="schoolFormValue.schoolId" class="school_input" disabled />
         <span class="verification">
            <i class="fa fa-check">已验证</i>
          </span>
      </div>

      <span class="btn submit_btn" v-on:click="disapper()">保存信息</span>
      <span class="btn cancel_btn" v-on:click="disapper()">取消修改</span>
    </form>
  </section>
</template>

<script>
export default {
  data() {
    return {
      schoolFormValue: {
        schoolName: "中国人民大学",
        schoolMajor: "计算机广告设计",
        schoolClass: "大学三年级",
        schoolId: "2273844668975"
      },
      schoolTag: [985, 211, "一本", "二本"],
      show: false
    };
  },
  methods: {
    disapper() {
      let inputs = document.querySelectorAll(".school_input");
      console.log(inputs);
      inputs.forEach(function(item) {
        item.setAttribute("style", "border: 0px !important;padding-left:15px;");
        item.disabled = "true";
      });
      let btns = document.querySelectorAll(".btn");
      console.log(btns);
      btns.forEach(function(item) {
        item.setAttribute("style", "display:none");
      });
      this.$refs.write.style.display = "inline-block";
      this.$refs.icon.style.display = "none";
    },
    copyreader() {
      let inputs = document.querySelectorAll(".school_input");
      console.log(inputs);
      inputs.forEach(function(item) {
        item.setAttribute(
          "style",
          "border: 1px solid gray !important;padding-left:14px"
        );
        item.disabled = "";
      });
      let btns = document.querySelectorAll(".btn");
      console.log(btns);
      btns.forEach(function(item) {
        item.setAttribute("style", "display:inline-block");
      });
      this.$refs.write.style.display = "none";
      this.$refs.icon.style.display = "inline-block";
    }
  }
};
</script>

<style lang="less" scoped>
.school_info_form {
  margin-top: 50px;
  margin-left: 55px;
}
.school_name ,.school_id{
  position: relative;
}
.copyreader {
  cursor: pointer;
  position: absolute;
  color: #94c200;
  font-size: 22px;
  right: 120px;
}
.mr {
  margin-right: 15px;
}
.school_info_row {
  margin-bottom: 15px;
  font-size: 18px;
  line-height: 60px;
}
.school_label {
  display: inline-block;
  width: 80px;
  height: 60px;
  line-height: 60px;
  color: #666666;
  margin-right: 25px;
  text-align: right;
}
.school_input {
  width: 530px;
  height: 60px;
  line-height: 60px;
  padding-left: 15px;
  font-size: 20px;
  color: #2d2d2d;
  outline: none;
  vertical-align: middle;
  background-color: #ffffff;
  border: 0px solid #666666;
  box-sizing: content-box;
}

.school_icon {
// display: inline-block;
  display: none;
  width: 80px;
  height: 64px;
  font-size: 30px;
  line-height: 58px;
  text-align: center;
  color: #9bc604;
  background-color: #fbfbfb;
  border: 1px solid #666666;
  box-sizing: border-box;
  position: relative;
  right: 80px;
  top: 3px;
}

.school_tag {
  display: inline-block;
  width: 75px;
  height: 25px;
  line-height: 25px;
  text-align: center;
  color: #ffffff;
  background-color: #5cc8a4;
  border-radius: 4px;
  position: absolute;
  right: 780px;
  top: 18px;
}

.btn {
  display: inline-block;
  width: 210px;
  height: 55px;
  font-size: 18px;
  text-align: center;
  margin-top: 25px;
  margin-bottom: 20px;
  line-height: 55px;
  border-radius: 8px;
  border: 1px solid #cdcdcd;
}

.submit_btn {
  color: #ffffff;
  margin-right: 25px;
  margin-left: 120px;
  background-color: #9bc604;
}


 .verification {
  display: inline-block;
  width: 200px;
  height: 55px;
  position: absolute;
  right: 700px;
  top: 4px;
  line-height: 55px;
  box-sizing: border-box;
  text-align: center;
  font-size: 16px;
  color: #94c200;
}
</style>