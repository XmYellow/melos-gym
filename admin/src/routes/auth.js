import { message } from 'antd'

export const adminAuth = store => async (nextState, replace) => {
  // if (!localStorage.getItem('access_token')) return replace('/login')
  // if (!store.getState().auth.user.is_admin) {
  //   message.error('对不起,您没有权限访问')
  //   replace('/')
  // }
}
export default {adminAuth}
