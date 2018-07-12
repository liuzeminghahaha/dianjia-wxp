// import * as types from '../store/types'
const wxLogin = () => {
  return new Promise((resolve, reject) => {
    wx.login({
      success: res => {
        if (res.code) { // 获得临时登陆凭证，有效期是5分钟
          // 请求后台接口获取session_key和openid
          console.log(res)
          // resolve(res)
        } else {
          console.log('登陆失败')
        }
      }
    })
  })
}

const getUserInfo = () => {
  wx.getUserInfo({
    success: res => {
      // console.log(res)
      wx.setStorageSync('userInfo', res.userInfo)
    },
    fail: res => {
      wx.showModal({
        title: '警告',
        content: '尚未进行授权，请点击确定跳转到授权页面进行授权',
        success: res => {
          if (res.confirm) {
            console.log('用户点击确定')
            // this.$router.push('')
          }
        }
      })
    }
  })
}

const tokenLogin = (token) => {
  global.CONSTANTS.TOKERN = token
  wx.showToast({
    title: '登陆成功',
    icon: 'success',
    duration: 3000,
    mask: true
  })
}

const wxCodeLogin = () => {
}
export default {
  wxLogin,
  getUserInfo,
  wxCodeLogin,
  tokenLogin
}
