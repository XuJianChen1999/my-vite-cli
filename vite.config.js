/*
 * @Author: 徐建辰
 * @Date: 2022-01-04 08:44:49
 * @LastEditTime: 2022-01-04 10:00:45
 * @LastEditors: Please set LastEditors
 * @Description: vite基本配置，请勿修改
 */
import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import VitePluginImp from 'vite-plugin-imp'
import path from 'path'
import fs from 'fs'
import lessToJS from 'less-vars-to-js'
import config from './config'

const themeVariables = lessToJS(
  fs.readFileSync(path.resolve(__dirname, './config/variables.less'), 'utf8')
)
const env = process.argv[process.argv.length - 1]
const base = config[env]

console.log('环境变量----------', process.argv)

// https://vitejs.dev/config/
export default defineConfig({
  base: base.cdn,
  plugins: [
    react(),
    VitePluginImp({
      libList: [
        {
          libName: 'antd',
          style(name) {
            // use less
            return `antd/es/${name}/style/index.js`
          }
        },
      ]
    })
  ],
  /* less全局变量 */
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        modifyVars: themeVariables
      }
    }
  },
  /* 别名 */
  resolve: {
    alias: {
      '~': path.resolve(__dirname, './'), // 根路径
      '@': path.resolve(__dirname, 'src') // src 路径
    }
  },
  /* 代理 */
  server: {
    port: 3030, // 开发环境启动的端口
    proxy: {
      '/api': {
        target: 'http://xxxxx/yyy/zzz',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, '') // 将 /api 重写为空
      }
    }
  }
})
