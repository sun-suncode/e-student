<template>
  <section>
    <Header></Header>
    <Nav></Nav>
    <section class="all_content">
      <router-view></router-view>
    </section>
    <Footer></Footer>
  </section>
</template>

<script>
import Header from "./common/Header.vue";
import Nav from "./common/Nav.vue";
import Footer from "./common/Footer.vue";
export default {
  name: "HelloWorld",
  props: {},
  components: {
    Header,
    Nav,
    Footer
  },
  
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.all_content {
  display: flex;
  padding: 35px 0px;
  background-color: #f4f4f4;
}
</style>
