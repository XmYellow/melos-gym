// import { injectReducer } from './../../../store/reducers'
import RoleView from './components/RoleView'

export default (store) => ({
  path: 'role',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      // const Counter = require('./containers/CounterContainer').default
      // const reducer = require('./modules/counter').default
      // injectReducer(store, {key: 'counter', reducer})
      cb(null, RoleView)
    }, 'admin')
  }
})
