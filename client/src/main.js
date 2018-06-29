import Vue from 'vue'
import App from './App'
import router from './router'
import './api'
import 'amfe-flexible/index.min.js'
import store from './store'
import vueg from 'vueg'
import VueQrcode from '@xkeshi/vue-qrcode'
import { Toast, Button, Switch, InfiniteScroll } from 'mint-ui'
import MyTitle from './components/MyTitle'
import NotData from './components/NotData'
Vue.use(InfiniteScroll)
Vue.component(Switch.name, Switch)
Vue.component(Button.name, Button)
Vue.component(VueQrcode.name, VueQrcode)
Vue.use(MyTitle)
Vue.use(NotData)
Vue.config.productionTip = false
Vue.use(vueg, router)
Vue.use(store)
Vue.prototype.$toast = Toast

/* eslint-disable no-new */

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App}
})

