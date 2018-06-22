import Vue from 'vue'
import App from './App'
import router from './router'
import './api'
import 'amfe-flexible/index.min.js'
import './style/index.less'
import store from './store'
import vueg from 'vueg'

import { Swipe, SwipeItem } from 'mint-ui'

Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)

Vue.config.productionTip = false
Vue.use(vueg, router)
Vue.use(store)

/* eslint-disable no-new */

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App}
})

