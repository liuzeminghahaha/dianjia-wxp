import fly from './config'

export default {
  Account: {
    login: (param) => fly.post('/api/user/customer/authenticate', param),
    getAccount: () => fly.get('/api/user/customer/account')
  },
  Scenario: {
    getDetail: (scenarioId) => fly.get('/api/hunt/scenarios/app/' + scenarioId)
  },
  Ticket: {
    getTicketGroupInfo: (ticketLevelId) => fly.get('/api/ticket-store/tickets/my/ticketGroupInfo/' + ticketLevelId),
    getTicketAreaRowCount: (param) => fly.get('/api/ticket-store/tickets/my/getTicketAreaRowCount', param),
    getMyTicket: () => fly.get('/api/ticket-store/tickets/my'),
    getDelivering: () => fly.get('/api/ticket-store/tickets/my/delivering'),
    getInPickup: () => fly.get('/api/ticket-store/tickets/my/inPickup')
  },
  BuyOrder: {
    getList: (param) => fly.get('/api/transaction/buyOrders/byStatus', param),
    delete: (scenarioId) => fly.delete('/api/transaction/buyOrders/' + scenarioId)
  }
}
