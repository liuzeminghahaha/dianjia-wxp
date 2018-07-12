<template>
  <div>
    <div class="page">
      <div class="page__bd page__bd_spacing">
        <open-data type="userNickName" open-gid="xxxxxx"></open-data>
        <open-data type="userCity"></open-data>
        <open-data type="userGender" lang="zh_CN"></open-data>
        <button @click="doLogin" open-type="getUserInfo">登陆</button>
      </div>
    </div>
  </div>
</template>

<script>
import { formatTime } from '@/utils/index'
import card from '@/components/card'
import authService from '../../lib/authService'

export default {
  components: {
    card
  },

  data () {
    return {
      logs: []
    }
  },
  methods: {
    doLogin () {
      authService.wxLogin().then(res => {
        // 使用code在后台服务器去换取openid和session_key
        wx.getSetting({
          success: res => {
            if (res.authSetting['scope.userInfo']) {
              // 已经授权，可以直接调用 getUserInfo 获取头像昵称
              wx.getUserInfo({
                success: res => {
                  console.log(res)
                  // wx.setStorageSync('userInfo', res.userInfo)
                },
                fail: res => {
                  console.log(res)
                  //        wx.showModal({
                  //              title: '警告',
                  //              content: '尚未进行授权，请点击确定跳转到授权页面进行授权',
                  //              success: res => {
                  //                if (res.confirm) {
                  //                  console.log('用户点击确定')
                  //                  // this.$router.push('')
                  //                }
                  //              }
                  //            })
                }
              })
            }
          }
        })
      })
    }
  },
  created () {
    const logs = (wx.getStorageSync('logs') || [])
    this.logs = logs.map(log => formatTime(new Date(log)))
  }
}
</script>

<style>
.log-list {
  display: flex;
  flex-direction: column;
  padding: 40rpx;
}

.log-item {
  margin: 10rpx;
}
</style>
