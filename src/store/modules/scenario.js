import API from '../../api'
import * as types from '../types'
import * as _ from 'lodash'

const state = {
  scenarioList: {},
  selectedScenario: {}
}

// getters
const getters = {
  scenarioList: state => state.scenarioList,
  selectedScenario: state => state.selectedScenario
}

// actions
const actions = {
  [types.DO_GET_BANNERS] ({ commit }) {
    return API.scenario.getBanners().then(response => {
      commit(types.SET_BANNERS, response.data)
    })
  },
  [types.DO_GET_SCENARIO_DETAIL] ({ commit, state }, id) {
    return API.Scenario.getDetail({ id: id }).then(response => {
      commit(types.SET_SCENARIOS_SELECT, response.body)
      return response.body
    })
  }
}

// mutations
const mutations = {
  [types.SET_BANNERS] (state, data) {
    state.scenarioList = data
  },
  [types.SET_SCENARIOS_SELECT] (state, selected) {
    var scenarioDate = selected.scenarioDates
    _.forEach(scenarioDate, function (date) {
      const sortFunc = function (item) {
        if (item.ticketLevelType === '选座') {
          return 1
        } else if (item.ticketLevelType === '随机') {
          return 2
        } else if (item.ticketLevelType === '无座') {
          return 3
        }
      }
      date.ticketLevels = _.sortBy(date.ticketLevels, [sortFunc, 'price'], ['asc', 'asc'])
    })
    selected.scenarioDates = _.sortBy(scenarioDate, ['showDateBegin'])
    var scenarioDetail = Object.assign({}, state.selectedScenario, selected)
    state.selectedScenario = scenarioDetail
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
