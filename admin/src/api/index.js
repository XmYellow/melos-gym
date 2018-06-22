import axios from 'axios'
import { message } from 'antd'
import { browserHistory } from 'react-router'
let api = null
const createApi = () => {
  if (api) return
  api = axios.create({timeout: 5000})

  // 请求 拦截器
  api.interceptors.request.use(
    config => {
      const accessToken = localStorage.getItem('access_token')
      config.headers = {
        'Content-Type': 'application/json;charset=UTF-8',
        'Authorization': `JWT ${accessToken}`
      }
      return config
    },
    err => {
      return Promise.reject(err)
    })
  // 响应 拦截器
  api.interceptors.response.use(
    response => {
      return response
    },
    err => {
      const {status} = err.response
      if (status === 401) {
        message.error('对不起,您没有权限访问')
        browserHistory.push('/login')
      }
      if (status === 500) {
        message.error('系统错误,请联系管理员')
      }
      return Promise.reject(err)
    })

  return api
}

window.api = createApi(api)
