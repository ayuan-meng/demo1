import Vue from 'vue'
import App from './App.vue'
import routers from './router'
import VueRouter from 'vue-router'

Vue.config.productionTip = false
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: routers
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})