<template>
  <div class="my_courses_msg">
    <a href="javascript:;">
      <img :src="courses_lists.video" alt />
    </a>
    <div class="my_courses_msg_detail">
      <div class="my_courses_title">
        <h2>{{courses_lists.title}}</h2>
        <span class="status" v-if="!courses_lists.status_color">{{courses_lists.status}}</span>
        <span class="status status_gray" v-else>{{courses_lists.status}}</span>
      </div>
      <p class="data_time">
        <span v-if="courses_lists.status_show==='course'">上传时间：</span>
        <span v-else-if="courses_lists.status_show==='collect'">收藏时间：</span>
        <span v-else-if="courses_lists.status_show==='activity'">报名时间：</span>
        <span class="data">{{courses_lists.data}}</span>
        <span>{{courses_lists.time}}</span>
      </p>
      <p class="data_time" v-if="courses_lists.status_show==='activity'">
        <span>结束时间：</span>
        <span class="data">{{courses_lists.enddata}}</span>
        <span>{{courses_lists.endtime}}</span>
      </p>
      <p class="author">
        <span>{{courses_lists.author}}</span>
      </p>
      <p class="address" v-if="courses_lists.status_show==='activity'">
        <span>{{courses_lists.address}}</span>
      </p>
      <span class="price price_red" v-if="courses_lists.price_red">{{courses_lists.price}}</span>
      <span class="price" v-else>{{courses_lists.price}}</span>
    </div>

    <div class="btn_box" v-if="courses_lists.status_show==='course'">
      <span class="make">购买课程</span>
      <span class="delete" v-if="!tf">取消收藏</span>
    </div>

    <div class="btn_box" v-if="courses_lists.status_show==='collect'">
      <span class="make">评价课程</span>
    </div>
    <div class="btn_box" v-if="courses_lists.status_show==='activity'">
      <span class="make">评价活动</span>
    </div>
  </div>
</template>

<script>
export default {
  props: ["courses_lists", "tf", "sh"],
  data() {
    return {};
  }
};
</script>

<style scoped lang="less">
.my_courses_msg {
  height: 270px;
  box-sizing: border-box;
  padding: 60px 0px 50px 35px;
  box-sizing: border-box;
  position: relative;
}
.my_courses_msg a {
  display: inline-block;
}
.my_courses_msg a img {
  display: block;
}
.my_courses .my_courses_msg:first-child {
  border-bottom: 1px solid #f3f3f3;
}
.my_courses_msg_detail {
  display: inline-block;
  vertical-align: top;
  margin-left: 35px;
}
.my_courses_title {
  margin-top: 10px;
}
.my_courses_title h2 {
  display: inline-block;
  font-weight: bold;
  font-size: 22px;
}
.status {
  display: inline-block;
  color: #9bc604;
  margin-left: 10px;
  font-size: 22px;
  font-weight: bold;
}
.data_time {
  font-size: 18px;
  margin: 20px 0;
  color: #cacaca;
}
.data {
  margin: 0 10px;
}

.author {
  font-size: 18px;
  color: #cacaca;
  margin-bottom: 20px;
}
.address {
  font-size: 18px;
  color: #cacaca;
}

.price {
  display: inline-block;
  color: #9bc604;
  font-size: 22px;
  margin-left: 5px;
  font-weight: bold;
}
.price_red {
  color: #ff872e;
}
.mt {
  margin-top: 15px;
}
.status_gray {
  color: gray;
}
.btn_box {
  position: absolute;
  right: 105px;
  top: 95px;
  text-align: center;
}
.make {
  display: block;
  width: 160px;
  height: 40px;
  border: 1px solid #cacaca;
  text-align: center;
  line-height: 40px;
  cursor: pointer;
  border-radius: 20px;
  font-size: 18px;
  color: #9bc604;
  margin-bottom: 20px;
}
.make:hover {
  color: #ffffff;
  background-color: #9bc604;
}
.delete {
  cursor: pointer;
  color: #cacaca;
  font-size: 14px;
}
</style>