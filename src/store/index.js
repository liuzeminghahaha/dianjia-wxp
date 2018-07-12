import Vue from 'vue'
import Vuex from 'vuex'

import state from './state'
import mutations from './mutations'
import actions from './actions'

import scenario from './modules/scenario'
import account from './modules/account'
import order from './modules/order'
import ticket from './modules/ticket'

Vue.use(Vuex)

const getters = {
}

const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  modules: {
    scenario,
    account,
    order,
    ticket
  }
  // getters, // 可以用getters来取state的稍加处理的结果
  // modules, // 可以用modules来分割state,以免在全局状态中出现混淆
})

export default store
