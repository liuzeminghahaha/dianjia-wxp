import Vue from 'vue'
import App from './App'
import store from './store/index'
import './lib'
import './assets/weui/weui.css'
import './assets/main.styl'
import './constants'
import MpvueRouterPatch from 'mpvue-router-patch'
import mptoastRegistry from 'mptoast/registry'
mptoastRegistry(Vue)
Vue.use(MpvueRouterPatch)
Vue.config.productionTip = false
App.mpType = 'app'
// 挂载store到vue实例上
Vue.prototype.$store = store
const app = new Vue(App)
app.$mount()

export default {
  // 这个字段走 app.json
  config: {
    // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
    pages: [ // 描述当前小程序所有页面路径
      '^pages/index/main',
      'pages/classification/main'
    ],
    window: { // 小程序所有页面的顶部背景颜色，文字颜色定义
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: '微信商城',
      navigationBarTextStyle: 'black'
    },
    tabBar: { // tab栏的设置 最少两个，最多五个
      'list': [{
        'pagePath': 'pages/index/main',
        'text': '首页',
        'iconPath': 'static/images/star-gray.png',
        'selectedIconPath': 'static/images/star-red.png'
      }, {
        'pagePath': 'pages/classification/main',
        'text': '分类',
        'iconPath': 'static/images/star-gray.png',
        'selectedIconPath': 'static/images/star-red.png'
      }, {
        'pagePath': 'pages/index/main',
        'text': '登录',
        'iconPath': 'static/images/star-gray.png',
        'selectedIconPath': 'static/images/star-red.png'
      }],
      'selectedColor': '#E51C23',
      'color': '#000'
    },
    'networkTimeout': { // 设置网络请求的超时时间
      'request': 10000,
      'downloadFile': 10000
    },
    debug: true
  }
}
