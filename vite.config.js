/*
 * @Author: 徐建辰
 * @Date: 2021-11-01 09:42:59
 * @LastEditTime: 2021-11-01 14:12:27
 * @LastEditors: Please set LastEditors
 * @Description: vite全局配置文件
 */
import {defineConfig} from 'vite'
import path from 'path'
import vue from '@vitejs/plugin-vue'
import StyleImport from 'vite-plugin-style-import'
import {svgBuilder} from './src/plugins/svgBuilder'

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
  // build: {
  //   assetsDir: "static/img/",
  //   // 关闭打包计算
  //   brotliSize: false,
  //   rollupOptions: {
  //     output: {
  //       chunkFileNames: 'static/js/[name]-[hash].js',
  //       entryFileNames: 'static/js/[name]-[hash].js',
  //       assetFileNames: 'static/[ext]/[name]-[hash].[ext]',
  //     }
  //   }
  // }
})
