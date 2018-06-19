import axios from 'axios'
import router from './../router'

let api = null
const createApi = () => {
  if (api) return
  api = axios.create({timeout: 5000})

  // 请求 拦截器
  api.interceptors.request.use(
    config => {
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
        alert('对不起,您没有权限访问')
        router.replace('/login')
      }
      if (status === 500) {
        alert('系统错误,请联系管理员')
      }
      return Promise.reject(err)
    })

  return api
}

window.api = createApi(api)
