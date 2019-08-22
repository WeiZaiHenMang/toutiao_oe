import axios from 'axios'
import { Notification } from 'element-ui'
import jsonbigint from 'json-bigint'
axios.defaults.transformResponse = [function (data) {
  return jsonbigint.parse(data)
}]
axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/v1_0'
// 运用axios做拦截器
// 因为每次接口的调用都需要本地token的判定，所以运用axios的拦截器在每次请求接口前把token值传过去，这样后面接口调用的时候就不需要再次写token判定了

// 添加请求拦截器
axios.interceptors.request.use(function (config) {
  let stritem = window.localStorage.getItem('str-item')
  let token = stritem ? JSON.parse(stritem).token : null
  //   console.info(config, token)
  config.headers.Authorization = `Bearer ${token}`
  // 在发送请求之前做些什么
  return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})
// 添加响应拦截器
axios.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  // console.log(response)
  return response.data
}, function (error) {
  // 对响应错误做点什么
  console.log(arguments)
  let code = error.response ? error.response.status : ''
  let message = ''
  switch (code) {
    case 400:
      message = '请求参数错误'
      break
    case 401:
      message = 'token过期或未传'
      window.localStorage.clear()
      window.location.hash = '#/login'
      break
    case 403:
      message = '用户非实名认证用户，无权限登录'
      break
    case 404:
      message = '手机号不正确'
      break
    case 507:
      message = '服务器数据库异常'
      break
    default:
      message = '未知错误'
      break
  }
  Notification({ message, duration: 1500, title: '客官:' })
  return Promise.reject(error)
})
export default axios
