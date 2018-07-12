import Vue from 'vue'
import App from './index'

const app = new Vue(App)
app.$mount()
export default {
  config: { // 针对每一个页面的配置项
    navigationBarTitleText: '猎票',
    backgroundColorTop: '#ccc'
  }
}
