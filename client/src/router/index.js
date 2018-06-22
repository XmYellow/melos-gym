import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import(/* webpackChunkName: "home" */ './../views/Home')
const Login = () => import(/* webpackChunkName: "login" */ './../views/Login')
const Share = () => import(/* webpackChunkName: "share" */ './../views/Share')
const Course = () => import(/* webpackChunkName: "course" */ './../views/Course')
const Center = () => import(/* webpackChunkName: "center" */ './../views/Center')
const Teach = () => import(/* webpackChunkName: "teach" */ './../views/List')
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
    }

  ]
})
