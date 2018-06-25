// import { injectReducer } from './../../../store/reducers'
import CourseView from './components/CourseView'

export default (store) => ({
  path: 'course',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      // const Counter = require('./containers/CounterContainer').default
      // const reducer = require('./modules/counter').default
      // injectReducer(store, {key: 'counter', reducer})
      cb(null, CourseView)
    }, 'admin')
  }
})
