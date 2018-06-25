// import { injectReducer } from './../../../store/reducers'
import PriceView from './Setting'

export default (store) => ({
  path: 'setting',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      // const Counter = require('./containers/CounterContainer').default
      // const reducer = require('./modules/counter').default
      // injectReducer(store, {key: 'counter', reducer})
      cb(null, PriceView)
    }, 'admin')
  }
})
