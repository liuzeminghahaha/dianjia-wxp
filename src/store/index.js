import Vue from 'vue'
import Vuex from 'vuex'

import state from './state'
import mutations from './mutations'
import actions from './actions'

import account from './modules/account'

Vue.use(Vuex)

const getters = {
}

const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  modules: {
    account
  }
  // getters, // 可以用getters来取state的稍加处理的结果
  // modules, // 可以用modules来分割state,以免在全局状态中出现混淆
})

export default store
