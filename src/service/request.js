/*
 * @Author: axios
 * @Date: 2022-01-04 10:01:21
 * @LastEditTime: 2022-01-04 10:06:12
 * @LastEditors: Please set LastEditors
 * @Description: axios二次封装
 */
import axios from 'axios'
import {message} from 'antd'
import config from '~/config'

const MODE = import.meta.env.MODE
const instance = axios.create({
  baseURL: config[MODE].baseUrl,
  timeout: 7000
})

// 请求拦截
instance.interceptors.request.use(config => {
  const token = '你的token'
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  // 配置接口国际化
  config.headers['Accept-Language'] = store.getters.language
  return config
}, error => {
  return Promise.reject(error)
})

// 响应拦截
instance.interceptors.response.use(res => {
  const {success, message, data} = res.data
  if (success) {
    return data
  } else {
    message.error(message)
    return Promise.reject(new Error(message))
  }
}, err => {
  // token过期，其实也可以在成功的回调中处理
  if (err.response && err.response.data && err.response.data.code === 401) {
    // do something...
  }
  message.error(err.message)
  return Promise.reject(err)
})

export default instance