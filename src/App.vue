<script>
import authService from './lib/authService'
export default {
  onLaunch () {
    // 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
    // 调用API从本地缓存中获取数据
    const loginFlag = wx.getStorageSync('skey')
    const token = wx.getStorageSync('token')
    if (token) {
      // token 登陆
      authService.tokenLogin(token)
    } else if (loginFlag) {
      // 每次进入小程序通过wx.checkSession检测登录是否失效，如果失效重新获取openid
      wx.checkSession({
        success: (res) => {
          // session_key 未过期，并且在本生命周期一直有效
          console.log(res)
        },
        fail: (res) => {
          // session_key 已经失效，需要重新执行登录流程
          authService.wxLogin()
        }
      })
    } else {
      // 无skey，作为首次登录
      authService.wxLogin()
    }
  },
  onShow () { // 当小程序启动，或从后台进入前台显示，会触发 onShow
  }
}
</script>

<style>
  /*在这里引入全局公共的CSS,并且style标签不加scoped,所有页面都有效*/
  @import "assets/scss/main.scss";
.container {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 200px 0;
  box-sizing: border-box;
}
/* this rule will be remove */
* {
  transition: width 2s;
  -moz-transition: width 2s;
  -webkit-transition: width 2s;
  -o-transition: width 2s;
}
</style>
