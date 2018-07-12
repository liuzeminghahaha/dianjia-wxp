import API from '../../api'
import * as types from '../types'

const state = {
  buyOrderList: []
}

// getters
const getters = {
  buyOrderList: state => state.buyOrderList
}

// actions
const actions = {
  [types.DO_GET_BUYORDER_LIST] ({ commit }, query) {
    return API.BuyOrder.getList(query).then(response => {
      commit(types.SET_BUYORDER_LIST, response.data)
      return response.data
    })
  },
  [types.DO_DELETE_BUYORDER] ({ commit, state }, data) {
    return API.BuyOrder.delete(data).then(response => {
    })
  }
}

// mutations
const mutations = {
  [types.SET_BUYORDER_LIST] (state, data) {
    state.buyOrderList = data
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
