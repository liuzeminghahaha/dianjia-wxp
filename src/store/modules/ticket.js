import API from '../../api'
import * as types from '../types'
import moment from 'moment'

const state = {
  myTickets: [],
  myDeliveringTickets: [],
  myInPickupTickets: [],
  ticketAreaRowCount: [],
  ticketGroupInfo: {}
}

// getters
const getters = {
  ticketGroupInfo: state => state.ticketGroupInfo,
  myTickets: state => state.myTickets,
  ticketAreaRowCount: state => state.ticketAreaRowCount,
  myDeliveringTickets: state => state.myDeliveringTickets,
  myInPickupTickets: state => state.myInPickupTickets
}

// actions
const actions = {
  [types.DO_GET_TICKET_GROUP_INFO] ({ commit, state }, ticketLevelId) {
    return API.Ticket.getTicketGroupInfo(ticketLevelId).then(response => {
      commit(types.SET_TICKET_GROUP_INFO, response.data)
      return response.data
    })
  },
  [types.DO_GET_TICKETS] ({ commit, state }, params) {
    return API.Ticket.get(params).then(response => {
      commit(types.SET_TICKETS, response.body)
    })
  },
  [types.DO_GET_DELIVERING_TICKETS] ({ commit, state }, query) {
    return API.Ticket.delivering(query).then(response => {
      commit(types.SET_DELIVERING_TICKETS, response.body)
      return response.body
    })
  },
  [types.DO_GET_INPICKUP_TICKETS] ({ commit, state }, params) {
    return API.Ticket.inPickup(params).then(response => {
      commit(types.SET_INPICKUP_TICKETS, response.body)
    })
  },
  [types.DO_GET_TICKET_AREA_ROW_COUNT] ({ commit, state }, ticketLevelId) {
    return API.Ticket.getTicketAreaRowCount({ ticketLevelId: ticketLevelId }).then(response => {
      commit(types.SET_TICKET_AREA_ROW_COUNT, response.data)
    })
  }
}

// mutations
const mutations = {
  [types.SET_TICKET_GROUP_INFO] (state, data) {
    const now = moment()
    if (data && data !== undefined && JSON.stringify(data) !== '{}') {
      data.deliverStatus = null
      data.pickupStatus = null
      if (data.deliverType !== '快递') {
        const pickupBeginDate = moment(data.pickupBeginDate)
        const pickupEndDate = moment(data.pickupEndDate)
        if (pickupBeginDate > now) {
          data.pickupStatus = '未开票'
        } else if (pickupBeginDate <= now && pickupEndDate >= now) {
          data.pickupStatus = '已开票'
        } else if (pickupEndDate < now) {
          data.pickupStatus = '过期'
        }
      }
      if (data.deliverType !== '自取') {
        const deliverBeginDate = moment(data.deliverBeginDate)
        const deliverEndDate = moment(data.deliverEndDate)
        if (deliverBeginDate > now) {
          data.deliverStatus = '未开票'
        } else if (deliverBeginDate <= now && deliverEndDate >= now) {
          data.deliverStatus = '已开票'
        } else if (deliverEndDate < now) {
          data.deliverStatus = '过期'
        }
      }
    }
    state.ticketGroupInfo = data
  },
  [types.SET_TICKETS] (state, list) {
    state.myTickets = list
  },
  [types.SET_DELIVERING_TICKETS] (state, list) {
    state.myDeliveringTickets = list
  },
  [types.SET_INPICKUP_TICKETS] (state, list) {
    state.myInPickupTickets = list
  },
  [types.SET_TICKET_AREA_ROW_COUNT] (state, list) {
    state.ticketAreaRowCount = list
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
