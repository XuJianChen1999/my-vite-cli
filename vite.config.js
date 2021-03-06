/*
 * @Author: 徐建辰
 * @Date: 2021-11-01 09:42:59
 * @LastEditTime: 2021-11-01 15:03:18
 * @LastEditors: Please set LastEditors
 * @Description: vite全局配置文件
 */
import {defineConfig} from 'vite'
import path from 'path'
import vue from '@vitejs/plugin-vue'
import StyleImport from 'vite-plugin-style-import'
import {svgBuilder} from './src/plugins/svgBuilder'
import externalGlobals from 'rollup-plugin-external-globals'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [
    vue(),
    // 按需导入element-plus组件
    StyleImport({
      libs: [{
        libraryName: 'element-plus',
        esModule: true,
        resolveStyle: (name) => {
          return `element-plus/theme-chalk/${name}.css`
        }
      }]
    }),
    // 配置svg
    svgBuilder('./src/assets/svg/')
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
    extensions: ['.js', '.vue', '.json']
  },
  css: {
    // 全局scss文件
    preprocessorOptions: {
      scss: {
        additionalData: '@import "./src/assets/styles/var.scss";'
      }
    }
  },
  build: {
    // 关闭打包计算
    brotliSize: false,
    // 配置cdn
    rollupOptions: {
      external: ['vue', 'element-plus'],
      plugins: [
        externalGlobals({
          vue: 'Vue',
          'element-plus': 'ElementPlus',
        })
      ]
    }
  }
})
