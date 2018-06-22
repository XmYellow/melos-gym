// We only need to import the modules necessary for initial render
// auth
import { adminAuth } from './auth'

// layout
import CoreLayout from '../layouts/PageLayout/PageLayout'
import AdminLayout from './../layouts/AdminLayout/AdminLayout'
import NotLayout from './../layouts/NotLayout/NotLayout'

// public page
import CounterRoute from './Counter'
import Home from './Home'
import Login from './Login'

// admin
import AdminHome from './Admin/Home'
import AdminUser from './Admin/User'
import AdminRole from './Admin/Role'
import NotFound from './Admin/NotFound'

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
