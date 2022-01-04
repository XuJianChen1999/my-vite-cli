/*
 * @Author: 徐建辰
 * @Date: 2022-01-04 08:49:45
 * @LastEditTime: 2022-01-04 09:43:55
 * @LastEditors: Please set LastEditors
 * @Description: react路由主文件
 */
import Home from '@/pages/home'
import About from '@/pages/about'

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/about',
    component: About
  }
]

export default routes