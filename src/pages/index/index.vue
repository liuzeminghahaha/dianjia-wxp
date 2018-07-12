<template>
  <div class="container body">
    <div v-if="account.name">当前用户：{{account.name}}</div>
    <div v-for="item in scenarioList">
      {{item.name}}
    </div>
    <card :text="'我是一个组件'"></card>
    <button @click="getlist">获取数据</button>
    <button @click="goPage">跳转下一页</button>
    <form class="form-container" v-if="!account.name">
      <input type="text" class="form-control" v-model="username" placeholder="账号" />
      <input type="password" class="form-control" v-model="password" placeholder="密码" />
      <button @click="login" :disabled="!username || !password">登陆</button>
    </form>
  </div>
</template>

<script>
import card from '@/components/card'
import { mapActions, mapGetters } from 'vuex'
import Qs from 'qs'
import * as types from '../../store/types'

export default {
  data () {
    return {
      username: '',
      password: null
    }
  },
  computed: {
    ...mapGetters('scenario', {
      scenarioList: 'scenarioList'
    }),
    ...mapGetters('account', {
      account: 'account'
    })
  },
  components: {
    card
  },

  methods: {
    getUserInfo () {
      // 调用登录接口
      wx.login({
        success: () => {
          wx.getUserInfo({
            success: (res) => {
              this.userInfo = res.userInfo
            }
          })
        }
      })
    },
    getlist () {
      this.getScenarioList()
    },
    login () {
      const data = { username: this.username, password: this.password }
      this.doLoginData(Qs.stringify(data)).then(res => {
        wx.setStorageSync('token', res.token)
        global.CONSTANTS.TOKERN = res.token
        wx.showToast({
          title: '登陆成功',
          icon: 'success',
          duration: 3000,
          mask: true
        })
        this.doGetAccount().then(res => {
          console.log(res)
        })
      })
    },
    goPage () {
      this.$router.push({path: '/pages/counter/main', query: { id: 1 }})
    },
    ...mapActions('scenario', {
      getScenarioList: types.DO_GET_BANNERS
    }),
    ...mapActions('account', {
      doLoginData: types.DO_LOGIN,
      doGetAccount: types.DO_GET_ACCOUNT
    })
  },

  created () {
    // 调用应用实例的方法获取全局数据
    // this.getUserInfo()
    console.log('index created')
  }
}
</script>

<style scoped>
.userinfo {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.userinfo-avatar {
  width: 128rpx;
  height: 128rpx;
  margin: 20rpx;
  border-radius: 50%;
}

.userinfo-nickname {
  color: #aaa;
}

.usermotto {
  margin-top: 150px;
}

.form-control {
  display: block;
  padding: 0 12px;
  margin-bottom: 5px;
  border: 1px solid #ccc;
}

.counter {
  display: inline-block;
  margin: 10px auto;
  padding: 5px 10px;
  color: blue;
  border: 1px solid blue;
}
</style>
