import Vue from 'vue'
import App from './index'

const app = new Vue(App)
app.$mount()
export default {
  config: { // 针对每一个页面的配置项
    navigationBarTitleText: '我的订单',
    backgroundColorTop: '#ccc',
    enablePullDownRefresh: true,
    onReachBottomDistance: 50
  }
}