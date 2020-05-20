import Vue from 'vue'
import App from './App.vue'
import './assets/css/reset.css'
import 'font-awesome/css/font-awesome.min.css' 
import router from "./router"
import Router from 'vue-router'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)
Vue.use(Router)

Vue.config.productionTip = false



new Vue({
  render: h => h(App),
  router
}).$mount('#app')