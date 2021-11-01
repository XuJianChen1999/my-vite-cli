import {SET_USER_INFO} from './mutationTypes'

export default {
  //退出登录
  logout({commit}) {
    return new Promise(resolve => {
      commit(SET_USER_INFO, {})
      localStorage.clear()
      resolve()
    })
  },
  // 存储个人信息
  setUserInfo({commit, dispatch}, user) {
    let result = user
    // //处理页面刷新，没有的话从本地获取，也可以从服务器获取，为了方便就直接从本地取了
    if (!user) {
      const localUser = localStorage.getItem('userInfo')
      const localToken = localStorage.getItem('token')
      if (localToken && localUser) {
        result = {userInfo: localUser}
        commit(SET_USER_INFO, localUser)
        return
      }
      return dispatch('logout')
    }
    // //处理用户主动登录
    const {userInfo} = result
    return new Promise((resolve, reject) => {
      if (userInfo !== null) {
        commit(SET_USER_INFO, userInfo)
        setUser(userInfo)
        resolve()
      } else {
        dispatch('logout')
        reject(new Error('no accessRoutes'))
      }
    })
  },
}
