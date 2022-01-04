/*
 * @Author: 徐建辰
 * @Date: 2022-01-04 09:49:23
 * @LastEditTime: 2022-01-04 09:55:08
 * @LastEditors: Please set LastEditors
 * @Description: 获取vite环境变量
 */
export default {
  // beta环境下的我就不写了
  development: {
    cdn: './',
    baseUrl: '/api' 
  },
  release: {
    cdn: 'xxxxxxx.com/xxxx/yyyyy', // 正式环境 cdn 路径
    baseUrl: '//www.xxx.com/yyyyy' // 正式环境接口地址
  }
}