// import { injectReducer } from './../../../store/reducers'
import TeachView from './components/TeachView'

export default (store) => ({
  path: 'teach',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      // const Counter = require('./containers/CounterContainer').default
      // const reducer = require('./modules/counter').default
      // injectReducer(store, {key: 'counter', reducer})
      cb(null, TeachView)
    }, 'admin')
  }
})
