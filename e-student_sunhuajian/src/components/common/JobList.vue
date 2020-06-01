<template>
  <div class="job_wrapper">
    <ul>
      <li class="job_msg_box">
        <div class="job_msg_detail">
          <p class="rows">
            <span class="title">{{job_list.title}}</span>
            <span class="price">{{job_list.price}}</span>
          </p>
          <p class="rows">
            <span class="adress">{{job_list.adress}}</span>
            <span class="line">|</span>
            <span class="data">{{job_list.data}}</span>
            <span class="line">|</span>
            <span class="data_time">{{job_list.data_time}}</span>
          </p>
          <p class="rows">
            <span v-if="showone===true">收藏时间：</span>
            <span v-else>投递时间：</span>
            <span class="data">{{job_list.months}}</span>
            <span class="data_time">{{job_list.months_time}}</span>
          </p>
        </div>
        <img :src="job_list.src" alt="企业logo" />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["job_list", "showone"]
};
</script>

<style lang="less" scoped>

.job_msg_box {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 200px;
  padding: 0 30px;
  box-sizing: border-box;
  border-top: 1px solid #cdcdcd;

  .rows {
    margin-bottom: 20px;
    font-size: 18px;
    color: #cdcdcd;
  }
  .title {
    font-size: 20px;
    color: black;
    font-weight: bold;
    margin-right: 15px;
  }
  .price {
    font-size: 18px;
    color: #ff872e;
    font-weight: bold;
  }

  .line{
      display: inline-block;
      margin: 0 15px;
  }
}
</style>