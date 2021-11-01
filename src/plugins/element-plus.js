/*
 * @Author: 徐建辰
 * @Date: 2021-11-01 10:31:49
 * @LastEditTime: 2021-11-01 10:49:50
 * @LastEditors: Please set LastEditors
 * @Description: 全局安装element-plus组件
 */
import {
  ElButton, ElInput, ElLoading
} from 'element-plus'

const components = [
  ElButton, ElInput
]

const plugins = [
  ElLoading,
]

const ElementPlus = {
  install: (App) => {
    components.forEach(component => App.component(component.name, component))
    plugins.forEach(plugin => App.use(plugin))
    // 全局配置
    App.config.globalProperties.$element = {size: 'small', zIndex: 3000}
  }
}

export default ElementPlus