<template>
  <div id="app">
    <!-- <section>
      <section v-if="getPath()">
        <HelloWorld />
      </section>
      <section v-else>
        <router-view></router-view>
      </section>
    </section> -->
    <HelloWorld />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
// import Login from "./components/Login/Login.vue"

export default {
  name: "App",
  components: {
    HelloWorld
    // Login
  },
  data() {
    return {
      show: true
    };
  },
  methods: {
    getPath() {
      console.log(this.$route.path);
      if (this.$route.path == "/login") {
        this.show = false;
        return this.show;
      } else if (this.$route.path == "/mycenter") {
        this.show = true;
        return this.show;
      }
    }
  }
  // created() {
  //   this.getPath();
  // }
};
</script>

<style>
</style>
