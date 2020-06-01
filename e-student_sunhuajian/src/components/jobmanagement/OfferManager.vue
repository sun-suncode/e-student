<template>
  <section>
    <div class="courses">
      <span
        class="courses_button"
        v-for="(item,index) in courses_btn"
        :key="index"
        @click="change(index)"
      >
        <i
          class="fa mr"
          :class="[{item_def:index==number},{'fa-check-circle':index==number},{'fa-circle-o':index !=number}]"
        ></i>
        {{item}}
      </span>
    </div>
    <div v-if="show">
      <JobList v-for="(item,index) in my_joblist" :key="index" :job_list="item" :showone="true"></JobList>
    </div>
    <div v-else>
      <JobList v-for="(item,index) in my_joblist" :key="index" :job_list="item" :showone="false"></JobList>
    </div>
  </section>
</template>

<script>
import JobList from "../common/JobList.vue";
export default {
  components: {
    JobList
  },
  data() {
    return {
      number: 0,
      show: true,
      courses_btn: ["我投递的职位", "我收藏的职位"],
      my_joblist: [
        {
          title: "JAVA后端实习生",
          price: "150-200/天",
          adress: "北京朝阳区",
          data: "3天/周",
          data_time: "三个月",
          months: "2017-05-23",
          months_time: "17:28",
          src: require("../../assets/img/comlogo1.jpg")
        },
        {
          title: "JAVA后端实习生",
          price: "150-200/天",
          adress: "北京朝阳区",
          data: "3天/周",
          data_time: "三个月",
          months: "2017-05-23",
          months_time: "17:28",
          src: require("../../assets/img/comlogo2.jpg")
        },
        {
          title: "JAVA后端实习生",
          price: "150-200/天",
          adress: "北京朝阳区",
          data: "3天/周",
          data_time: "三个月",
          months: "2017-05-23",
          months_time: "17:28",
          src: require("../../assets/img/comlogo3.jpg")
        }
      ]
    };
  },
  methods: {
    change(index) {
      this.number = index;
      this.show = !this.show;
    }
  }
};
</script>

<style lang="less" scoped>
.courses {
  line-height: 130px;
  font-size: 22px;
  padding-left: 35px;
  border-bottom: 1px solid #f3f3f3;
}

.courses_button {
  margin-right: 55px;
}
.item_def {
  color: #00aaff;
}
.mr {
  margin-right: 15px;
}
</style>