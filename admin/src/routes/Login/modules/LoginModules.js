import axios from 'axios'
import { updateAuth } from './../../../store/auth'

export const LOGIN = 'LOGIN'

// ------------------------------------
// Actions
// ------------------------------------
export function login (access_token) {
  return {
    type: LOGIN,
    payload: {access_token}
  }
}

export const loginAsync = user => async (dispatch, getState) => {
  const {data, status} = await axios.post('/api/auth', user).catch(() => false)
  if (status !== 200) return {status: false, msg: '用户或密码错误'}
  localStorage.setItem('access_token', data['access_token'])
  const userInfo = await userLogin()
  dispatch(updateAuth(userInfo))
  dispatch(login(data))
  return {status: true}
}
const userLogin = async (id) => {
  const {data} = await api.get('/api/auth/login')
  return data
}

export const actions = {
  login,
  loginAsync
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [LOGIN]: (state, action) => ({...state, access_token: action.payload.access_token})
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  access_token: '',
  status: true
}

export default function loginReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
