const Fly = require('flyio/dist/npm/wx')
const fly = new Fly()
fly.interceptors.request.use((config, promise) => {
  // 给所有请求添加自定义header
  // config.headers['header'] = 'XXXXXXXXXXX'
  if (global.CONSTANTS.TOKERN) {
    config.headers['x-auth-token'] = global.CONSTANTS.TOKERN
  }
  wx.showLoading({
    title: '加载中',
    mask: true
  })
  // Add custom headers
  return config
})
fly.interceptors.response.use(
  (response, promise) => {
    if (typeof (response.data) === 'string' && response.data !== '') {
      response.data = JSON.parse(response.data)
    }
    wx.hideLoading()
    handleResult(response)
  }, (promise) => {
    wx.hideLoading()
    handleResult(promise)
  })
// 服务器的域名需要经过认证，否则会请求失败
if (process.env.NODE_ENV === 'production') {
  fly.config.baseURL = 'https://m.liepiaowang.com/'
} else {
  fly.config.baseURL = 'https://m.yunpiao5.com/'
}

// 统一显示toast
const showToast = (message) => {
  wx.showToast({
    title: message,
    icon: 'none',
    duration: 2000
  })
}
const handleResult = (res) => {
  let code = res.status
  switch (code) {
    case 200:
      break
    case 401 :
      showToast('请登录！')
      wx.switchTab({
        url: '/pages/index/main'
      })
      break
    case 412 :
      showToast('未填写个人信息！')
      break
    case 500 :
      showToast('服务器异常, 请稍后再试')
      break
    default:
      let msg = res.data.message ? res.data.message : '未知错误，请重试！'
      showToast(msg)
  }
}

export default fly
