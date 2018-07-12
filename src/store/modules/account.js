import API from '../../api'
import * as types from '../types'

const state = {
  loginData: {},
  account: {}
}

// getters
const getters = {
  loginData: state => state.loginData,
  account: state => state.account
}

// actions
const actions = {
  [types.DO_LOGIN] ({ commit }, query) {
    return API.Account.login(query).then(response => {
      commit(types.DO_LOGIN_SUCCESS, response.data)
      return response.data
    })
  },
  [types.DO_GET_ACCOUNT] ({ commit, state }) {
    return API.Account.getAccount().then(response => {
      commit(types.SET_ACCOUNT, response.data)
      return response.data
    })
  }
}

// mutations
const mutations = {
  [types.DO_LOGIN_SUCCESS] (state, data) {
    state.loginData = data
  },
  [types.SET_ACCOUNT] (state, userData) {
    state.account = userData
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
