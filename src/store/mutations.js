import {SET_USER_INFO} from './mutationTypes'

export default {
  [SET_USER_INFO](state, user) {
    state.userInfo = user
  }
}
