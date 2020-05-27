<template>
  <section>
    <div class="inte_box">
      <div class="inte_num_box">
        <span>可用积分</span>
        <span class="inte_num">{{msg.scoreTotal}}</span>
      </div>
      <span class="use_inte" v-if="msg.scoreTotal>0">我要使用积分</span>
      <span class="use_inte disabled" v-else>我要使用积分</span>
    </div>

    <div class="inte_detail_box">
      <h1 class="inte_detail_title">积分明细</h1>

      <ul>
        <li class="inte_detail" v-for="item in msg.scoreDetail" :key="item.id">
          <span class="inte_detail_time">{{item.time}}</span>
          <span class="inte_detail_action" :style="{color:getColor(item.action)}">{{item.action}}</span>
          <span class="inte_detail_act">购买课程赠送积分（课程编号：{{item.id}}）</span>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      msg: {
        scoreTotal: 0,
        scoreDetail: [
          // {
          //   time: "2020-05-20 13:14:52",
          //   action: "-7",
          //   id: "1314520"
          // },
          // {
          //   time: "2020-05-20 13:25:55",
          //   action: "-7",
          //   id: "1314895520"
          // },
          // {
          //   time: "2020-05-20 14:14:52",
          //   action: "+14",
          //   id: "1314521"
          // }
        ]
      }
    };
  },
  methods: {
    getColor(color) {
      if (!color.indexOf("+")) {
        return "#89bc00";
      } else {
        return "red";
      }
    }
  },
  created() {
    this.axios
      .get(
        ""
      )
      .then(res => {
        if (res.status === 200) {
          console.log(res);
          this.msg = res.data;
       
        }
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>

<style lang="less" scoped>
.inte_box {
  display: flex;
  height: 135px;
  padding: 0 55px 0 50px;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  border-bottom: 1px solid #ededed;

  .inte_num_box span:first-child {
    font-size: 16px;
    color: #7d7d7d;
    margin-right: 15px;
  }

  .inte_num {
    font-size: 38px;
    color: #89bc00;
  }

  .use_inte {
    display: block;
    width: 210px;
    height: 45px;
    text-align: center;
    line-height: 45px;
    color: #ffffff;
    border-radius: 10px;
    background-color: #89bc00;
  }
  .disabled {
    background-color: rgb(199, 199, 206);
  }
}

.inte_detail_box {
  padding: 40px 50px;
  font-size: 18px;
  box-sizing: border-box;

  .inte_detail_title {
    display: block;
    width: 90px;
    height: 50px;
    text-align: center;
    line-height: 50px;
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 25px;
    border-bottom: 2px solid #89bc00;
  }

  .inte_detail {
    margin-bottom: 30px;
    text-align: left;
  }

  .inte_detail_time {
    margin-right: 140px;
    color: #9a9a9a;
  }
  .inte_detail_action {
    display: inline-block;
    width: 60px;
    margin-right: 140px;
  }
  .inte_detail_act {
    color: #9a9a9a;
  }
}
</style>