import { injectReducer } from './../../../store/reducers'

export default (store) => ({
  path: 'user',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const UserView = require('./container/UserContainer').default
      const reducer = require('./modules/UserModule').default
      injectReducer(store, {key: 'admin', reducer})
      cb(null, UserView)
    }, 'admin')
  }
})
