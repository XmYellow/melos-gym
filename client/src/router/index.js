import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import(/* webpackChunkName: "home" */ './../views/Home')
const Login = () => import(/* webpackChunkName: "login" */ './../views/Login')
const Share = () => import(/* webpackChunkName: "share" */ './../views/Share')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/share',
      name: 'share',
      component: Share
    }
  ]
})
