import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import(/* webpackChunkName: "public" */ './../views/Home')
const Login = () => import(/* webpackChunkName: "public" */ './../views/Login')
const Register = () => import(/* webpackChunkName: "public" */ './../views/Register')
const Share = () => import(/* webpackChunkName: "public" */ './../views/Share')
const Course = () => import(/* webpackChunkName: "public" */ './../views/Course')
const Center = () => import(/* webpackChunkName: "public" */ './../views/Center')
const Teach = () => import(/* webpackChunkName: "public" */ './../views/Teach')
const NotFound = () => import(/* webpackChunkName: "public" */ './../views/NotFound')

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
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '*',
      name: '404',
      component: NotFound
    }

  ]
})
