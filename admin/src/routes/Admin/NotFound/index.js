import NotFound from './NotFound.js'

export default (store) => ({
  path: '*',
  getComponent (nextState, cb) {
    cb(null, NotFound)
  }
})
