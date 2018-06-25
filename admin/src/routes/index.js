// We only need to import the modules necessary for initial render
// auth
import { adminAuth } from './auth'

// layout
import CoreLayout from '../layouts/PageLayout/PageLayout'
import AdminLayout from './../layouts/AdminLayout/AdminLayout'
import NotLayout from './../layouts/NotLayout/NotLayout'

// public page
import CounterRoute from './Counter'
import Login from './Login'

// admin
import AdminHome from './Home'
import AdminUser from './User'
import AdminRole from './Article'
import AdminCourse from './Course'
import AdminTeach from './Teach'
import AdminPrice from './Price'
import AdminSetting from './Setting'
import NotFound from './NotFound'

export const createRoutes = (store) => {
  return [
    {
      path: '/login',
      component: NotLayout,
      indexRoute: Login(store),
      childRoutes: [
        CounterRoute(store)
      ]
    },
    {
      path: '/admin',
      component: AdminLayout,
      indexRoute: AdminHome,
      onEnter: adminAuth(store),
      childRoutes: [
        AdminUser(store),
        AdminRole(store),
        CounterRoute(store),
        AdminCourse(store),
        AdminTeach(store),
        AdminPrice(store),
        AdminSetting(store),
        NotFound()
      ]
    },
    {
      path: '/*',
      onEnter: (nextState, replace) => {
        replace('login')
      }
    },
  ]
}

export default createRoutes
