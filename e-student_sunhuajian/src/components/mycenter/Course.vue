<template>
  <section id="my_list">
    <h3>{{user_course.title}}</h3>
    <p>
      <span class="my_list_num">{{user_course.num}}</span>
      <span>{{user_course.unit}}</span>
    </p>
    <p>
      <span>{{user_course.watch}}</span>
      <i class="fa fa-angle-right icon_ml"></i>
    </p>
  </section>
</template>

<script>
export default {
  props: ["user_course"]
};
</script>

<style lang="less" scoped>
#my_list {
  display: inline-block;
  width: 450px;
  height: 355px;
  background-position: center;
  background-size: cover;
  padding: 40px 0 0 60px;
  box-sizing: border-box;
}

.center_right #my_list:first-child {
  margin-right: 30px;
  margin-bottom: 30px;
  background-image: url("../../assets/img/bk1.jpg");
}
.center_right #my_list:nth-child(2) {
  margin-bottom: 30px;
  background-image: url("../../assets/img/bk2.jpg");
}
.center_right #my_list:nth-child(3) {

  margin-right: 30px;
  background-image: url("../../assets/img/bk2.jpg");
}
.center_right #my_list:last-child {
  background-image: url("../../assets/img/bk1.jpg");
}

.center_right h3 {
  font-size: 24px;
  margin-bottom: 45px;
  cursor: pointer;
}
.my_list_num {
  font-size: 34px;
  margin-right: 8px;
}

#my_list p:nth-child(2) {
  margin-bottom: 40px;
}

#my_list p:nth-child(3){
  color: gray;
  cursor: pointer;
}
.icon_ml{
  margin-left: 8px;
}
</style>