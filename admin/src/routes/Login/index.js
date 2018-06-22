import { injectReducer } from '../../store/reducers'

export default (store) => ({
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const Login = require('./containers/LoginContainer').default
      const reducer = require('./modules/LoginModules').default
      injectReducer(store, {key: 'user', reducer})
      cb(null, Login)
    }, 'login')
  }
})
