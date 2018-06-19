import Vue from 'vue'
import App from './App'
import router from './router'
import './api'
import 'amfe-flexible/index.min.js'
import './style/index.less'
import store from './store'
import vueg from 'vueg'

Vue.config.productionTip = false
Vue.use(vueg, router)
Vue.use(store)

/* eslint-disable no-new */

const v = new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App}
})
console.log(v)