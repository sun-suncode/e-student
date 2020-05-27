<template>
  <section class="all_ques">
    <div class="question_title">
      <span v-for="(item,index) in navs" :key="index" @click="change(index)">
        <i
          class="fa mr"
          :class="[{item_def:index===number},{'fa-check-circle':index===number},{'fa-circle-o':index !==number}]"
        ></i>
        {{item}}
      </span>
      <span class="quiz">我要提问</span>
    </div>

    <div class="content_one">
      <section class="my_ques_box">
        <ul>
          <li class="ques_list" v-for="( item , index) in list" :key="index">
            <p class="ques_list_title">{{ item.title }}</p>
            <p class="ques_list_data">
              <span>提问时间：</span>
              <span>{{ item.time }}</span>
              <span class="ques_list_ans">回答：{{ item.num }}</span> 丨
              <span>{{ item.people }}人看过</span>
            </p>
            <span class="ques_list_buttom" :class="item.bor_bgc">{{ item.text }}</span>
          </li>
        </ul>
      </section>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      navs: ["全部", "待处理"],
      number: 0,
      list: [
        {
          title: "中午在凡客打客服电话退货了，下午可以到么？我在北京",
          time: "3月23日 15:43",
          num: 0,
          people: 91,
          text: "查看并处理",
          bor_bgc: "one_buttom"
        },
        {
          title:
            "想买电脑 不懂配置 求各位大神给一套3000-4000的配置 急求配置 谢谢",
          time: "3月23日 15:43",
          num: 0,
          people: 91,
          text: "删除问题",
          bor_bgc: "two_buttom"
        }
      ]
    };
  },
  methods: {
    change(index) {
      this.number = index;
    }
  }
};
</script>

<style lang="less" scoped>
.all_ques {
  width: 1200px;
  height: 780px;
  background-color: #ffffff;
}
.question_title {
  height: 120px;
  font-size: 20px;
  line-height: 120px;
  padding-left: 40px;
  position: relative;
  border-bottom: 1px solid #ececec;
}
.question_title span:first-child {
  margin-right: 80px;
}
.item_def {
  color: #9bc604;
}
.quiz {
  display: block;
  width: 160px;
  height: 40px;
  font-size: 18px;
  line-height: 40px;
  border-radius: 8px;
  color: #ffffff;
  text-align: center;
  position: absolute;
  right: 90px;
  top: 30px;
  background-color: #9bc604;
}

.my_ques_box {
  border-radius: 5px;
  background-color: #fff;
  box-sizing: border-box;
}
.ques_list {
  padding: 40px 0;
  font-size: 18px;
  padding-left: 40px;
  position: relative;
  border-bottom: 1px solid #efefef;
}
.ques_list_title {
  margin-bottom: 20px;
}
.ques_list_data {
  font-size: 14px;
  color: #888888;
}
.ques_list_ans {
  margin-left: 48px;
}
.ques_list_buttom {
  display: block;
  position: absolute;
  right: 55px;
  top: 65px;
  width: 200px;
  box-sizing: border-box;
  text-align: center;
  padding: 0 60px;
  line-height: 42px;
  color: #9bc604;
  border-radius: 30px;
  font-size: 14px;
  cursor: pointer;
}
.one_buttom {
  border: 1px solid #efefef;
  color: #9bc604;
}
.one_buttom:hover {
  background-color: #9bc604;
  color: #fff;
}
.two_buttom {
  color: #cecece;
}
</style>