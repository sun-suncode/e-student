<template>
  <section class="center_wrapper type_area">
    <section class="center_left">
      <div class="personal_information">
        <!-- <img :src="poto" class="head_portrait" alt="用户信息头像" /> -->
        <el-avatar :size="120" :src="poto" class="head_portrait">user</el-avatar>
        <div class="personal_msg">
          <p class="name">
            <span>{{msg.username}}</span>
            <span class="per"></span>
          </p>
          <div class="compelete">
            <span>信息完整度</span>
            <div class="line_box">
              <i
                class="line"
                :style="[{width:`${colornum}%`},{'background-color':getColor(msg.compelete)}]"
              ></i>
            </div>
            <span class="line_text" :style="{color:getColor(msg.compelete)}">{{compelete_text}}</span>
          </div>
          <p>
            <i class="fa fa-tablet"></i>
            <i class="fa fa-id-card-o"></i>
            <i class="fa fa-envelope-o"></i>
          </p>
        </div>
      </div>

      <div class="integration_wrapper flex">
        <div class="apply_for" v-if="msg.score > 0" @click="useInte">使用积分</div>
        <div class="apply_for disabled" v-else>使用积分</div>
        <div class="integration_box">
          <p>积分余额</p>
          <span class="integration_num">{{msg.score}}</span>
          <span>分</span>
        </div>
      </div>

      <div class="resume_box flex">
        <el-progress
          type="circle"
          :percentage="msg.compelete"
          :width="200"
          :stroke-width="10"
          :color="getColor(msg.compelete)"
        ></el-progress>

        <div>
          <p class="write">编辑简历</p>
          <p class="preview">预览简历</p>
        </div>
      </div>
    </section>

    <section class="center_right">
      <Course v-for="(item,index) in courses_list" :key="index" :user_course="item"></Course>
    </section>
  </section>
</template>

<script>
import Course from "./Course.vue";
let text = ["极低", "低", "中", "高"];
export default {
  name: "MyCenter",
  components: {
    Course
  },
  data() {
    return {
      msg: {
        id: "111",
        username: "用户111",
        compelete: 0,
        score: 0,
        sourceTotal: 0,
        qaTotal: 0,
        jobTotal: 0
      },
      poto: "",
      colornum: 25,
      compelete_text: "",
      courses_list: [
        {
          title: "我上传的课程",
          num: 0,
          unit: "个",
          watch: "查看详情"
        },
        {
          title: "我投递的职位",
          num: 0,
          unit: "个",
          watch: "查看详情"
        },
        {
          title: "我的问答",
          num: 0,
          unit: "个",
          watch: "查看详情"
        },
        {
          title: "我的积分",
          num: 0,
          unit: "分",
          watch: "兑换礼品"
        }
      ]
    };
  },
  created() {
    this.getData();
  },
  methods: {
    getColor(compelete) {
      if (compelete >= 0 && compelete <= 25) {
        this.compelete_text = text[0];
        return "red";
      } else if (compelete <= 50 && compelete > 25) {
        this.compelete_text = text[1];
        this.colornum = 50;
        return "#ff5b29";
      } else if (compelete <= 75 && compelete > 50) {
        this.compelete_text = text[2];
        this.colornum = 75;
        return "rgb(0, 170, 255)";
      } else if (compelete <= 100 && compelete > 75) {
        this.compelete_text = text[3];
        this.colornum = 100;
        return "green";
      }
    },
    useInte() {
      this.$router.push("/integration-center");
    },
    getData() {
      this.axios
        .get("")
        .then(res => {
          if (res.status === 200) {
            console.log(res);
            this.msg = res.data;
            this.courses_list[0].num = res.data.sourceTotal;
            this.courses_list[1].num = this.msg.jobTotal;
            this.courses_list[3].num = this.msg.score;
            this.courses_list[2].num = this.msg.qaTotal;
            this.poto = require("../../assets/img/t1.jpg");
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style lang="less" scoped>
// .main {
//   display: flex;
//   padding: 35px 0px;
//   background-color: #f4f4f4;
// }

.center_wrapper {
  display: flex;
  justify-content: space-between;
  .center_left {
    width: 600px;
    margin-right: 25px;
    background-color: #fff;

    .personal_information {
      display: flex;
      padding: 40px;

      .head_portrait {
        // display: block;
        // width: 120px;
        // height: 120px;
        // border-radius: 50%;
        font-size: 28px;
      }

      .personal_msg {
        height: 120px;
        margin-left: 45px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;

        .name {
          font-size: 24px;
          font-weight: bold;
        }
        .per {
          display: inline-block;
          width: 16px;
          height: 25px;
          vertical-align: bottom;
          margin-left: 15px;
          background-image: url(../../assets/img/per.jpg);
          background-position: center;
          background-size: cover;
        }

        .compelete {
          font-size: 18px;
        }

        .line_box {
          display: inline-block;
          width: 180px;
          height: 10px;
          line-height: 0;
          font-size: 0;
          margin: 0 15px;
          background-color: rgb(199, 199, 206);
          border-radius: 5px;
        }
        .line {
          display: inline-block;
          height: 10px;
          border-radius: 5px;
          margin: 0;
        }

        p i {
          margin: 0 8px 0 0;
          font-size: 16px;
        }

        p i:first-child {
          color: #00aaff;
        }
      }
    }
    .flex {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .integration_wrapper {
      padding: 60px 0 55px 40px;
      height: 155px;
      font-size: 18px;
      color: #767676;
      box-sizing: border-box;
      border-top: 1px solid rgb(199, 199, 206);
      border-bottom: 1px solid rgb(199, 199, 206);
      .apply_for {
        display: inline-block;
        width: 210px;
        height: 40px;
        color: #ffffff;
        text-align: center;
        line-height: 40px;
        font-size: 18px;
        cursor: pointer;
        border-radius: 20px;
        background-color: #9bc604;
      }
      .disabled {
        background-color: rgb(199, 199, 206);
      }

      .integration_box {
        flex: 1;
        margin-left: 70px;
      }

      .integration_num {
        display: inline-block;
        margin-top: 20px;
        font-size: 36px;
        color: #1b1b1b;
      }
    }

    .resume_box {
      height: 380px;
      padding: 0 60px 0 40px;

      .write {
        display: block;
        width: 210px;
        height: 40px;
        color: #9bc604;
        line-height: 40px;
        text-align: center;
        cursor: pointer;
        margin-bottom: 30px;
        border-radius: 20px;
        border: 1px solid rgb(199, 199, 206);
      }

      .write:hover {
        color: #ffffff;
        background-color: #9bc604;
      }
      .preview {
        width: 210px;
        height: 40px;
        cursor: pointer;
        text-align: center;
      }
      .preview:hover {
        color: #9bc604;
      }
    }
  }

  .center_right {
    flex: 1;
    display: flex;
    flex-wrap: wrap;
  }
}
</style>