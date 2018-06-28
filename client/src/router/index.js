import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import(/* webpackChunkName: "home" */ './../views/Home')
const Login = () => import(/* webpackChunkName: "login" */ './../views/Login')
const Share = () => import(/* webpackChunkName: "share" */ './../views/Share')
const Course = () => import(/* webpackChunkName: "course" */ './../views/Course')
const Center = () => import(/* webpackChunkName: "center" */ './../views/Center')
const Teach = () => import(/* webpackChunkName: "teach" */ './../views/Teach')
const Vip = () => import(/* webpackChunkName: "vip" */ './../views/Vip')
const AutoPay = () => import(/* webpackChunkName: "vip" */ './../views/AutoPay')


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
      path: '/course',
      name: 'course',
      component: Course
    },
    {
      path: '/share',
      name: 'share',
      component: Share
    },
    {
      path: '/center',
      name: 'center',
      component: Center
    },
    {
      path: '/teach',
      name: 'teach',
      component: Teach
    },
    {
      path: '/vip',
      name: 'vip',
      component: Vip
    },
    {
      path: '/auto-pay',
      name: 'autoPay',
      component: AutoPay
    }

  ]
})
