/*
 * @Author: 徐建辰
 * @Date: 2021-11-01 14:32:31
 * @LastEditTime: 2021-11-01 14:45:20
 * @LastEditors: Please set LastEditors
 * @Description: vuex入口文件
 */
import {createStore} from 'vuex'
import state from './state'
import * as getters from './getters'
import actions from './actions'
import mutations from './mutations'

export default createStore({
  state,
  actions,
  getters,
  mutations,
})