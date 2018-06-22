// ------------------------------------
// Constants
// ------------------------------------
export const EXIT = 'EXIT'
export const AUTH = 'AUTH'
// ------------------------------------
// Actions
// ------------------------------------
export function exit () {
  localStorage.setItem('access_token', '')
  return {
    type: EXIT
  }
}

export function auth (user) {
  return {
    type: AUTH,
    payload: {user}
  }
}

// 初始化用户登入
export const initUser = async (store) => {
  const accessToken = localStorage.getItem('access_token')
  if (!accessToken) return store.dispatch(exit())
  const {data} = await api.get('/api/auth/login').catch(() => { return store.dispatch(exit()) })
  store.dispatch(auth(data))
}

// ------------------------------------
// Specialized Action Creator
// ------------------------------------
export const updateAuth = user => {
  return dispatch => dispatch(auth(user))
}
export const exitAuth = () => {
  return dispatch => dispatch(exit())
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [AUTH]: (state, action) => ({user: {...action.payload.user, load: true}}),
  [EXIT]: (state, action) => ({user: {load: false}})
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  user: {load: false}
}

export default function loginReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
