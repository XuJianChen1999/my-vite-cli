/*
 * @Author: 徐建辰
 * @Date: 2021-11-01 14:17:10
 * @LastEditTime: 2021-11-01 14:29:51
 * @LastEditors: Please set LastEditors
 * @Description: 路由主入口
 */
import {createRouter, createWebHashHistory} from 'vue-router'
const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login')
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('@/views/home')
  }
]

export default createRouter({
  history: createWebHashHistory(),
  routes
})