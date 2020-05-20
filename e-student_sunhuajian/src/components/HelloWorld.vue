<template>
  <section>
    <Header></Header>
    <Nav></Nav>
    <router-view></router-view>
  </section>
</template>

<script>
import Header from "./common/Header.vue";
import Nav from "./common/Nav.vue";
export default {
  name: "HelloWorld",
  props: {
  },
  components: {
    Header,
    Nav
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
