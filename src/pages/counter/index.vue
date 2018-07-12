<template>
  <div class="page">
    <div class="page__bd">
      <div class="weui-tab">
        <div class="weui-navbar">
          <block v-for="(item,index) in tabs" :key="index">
            <div :id="index" :class="{'weui-bar__item_on':activeIndex == index}" class="weui-navbar__item" @click="tabClick">
              <div class="weui-navbar__title">{{item}}</div>
            </div>
          </block>
          <div class="weui-navbar__slider" :class="'weui-navbar__slider_' +  activeIndex"></div>
        </div>
        <div class="weui-tab__panel">
          <div class="weui-tab__content" :hidden="activeIndex != 0">选项一的内容
            <div class="weui-btn-area">
              <button class="weui-btn" type="default" @click="openToast">成功提示</button>
              <button class="weui-btn" type="default" @click="openLoading">加载中提示</button>
            </div>
          </div>
          <div class="weui-tab__content" :hidden="activeIndex != 1">选项二的内容
            <a href="/pages/index/main" class="home">去往首页</a>
          </div>
          <div class="weui-tab__content" :hidden="activeIndex != 2">
            <button @click="showTestToast">toast</button>
          </div>
        </div>
      </div>
    </div>
    <mptoast></mptoast>
  </div>
</template>

<script>
import mptoast from 'mptoast'
export default {
  data () {
    return {
      tabs: ['选项一', '选项二', '选项三'],
      activeIndex: 0,
      fontSize: 30
    }
  },
  components: {
    mptoast
  },
  computed: {
  },
  methods: {
    showTestToast () {
      this.$mptoast(`我是弹框toast`, '', 1500)
    },
    goPage () {
      this.$router.push({path: '/pages/counter/main'})
    },
    tabClick (e) {
      this.activeIndex = e.currentTarget.id
    },
    openToast () {
      wx.showToast({
        title: '已完成',
        icon: 'success',
        duration: 3000,
        mask: true
      })
    },
    openLoading () {
      wx.showToast({
        title: '数据加载中',
        icon: 'loading',
        duration: 3000,
        mask: true
      })
    },
    increment () {
      // store.commit('increment')
    },
    decrement () {
      // store.commit('decrement')
    }
  },
  mounted () {
    console.log(this.$route)
  },
  created () {
    console.log('counter created')
  }
}
</script>

<style>
.counter-warp {
  text-align: center;
  margin-top: 100px;
}
.home {
  display: inline-block;
  margin: 100px auto;
  padding: 5px 10px;
  color: blue;
  border: 1px solid blue;
}
</style>

<style scoped>
  page,
  .page,
  .page__bd {
    height: 100%;
  }
  .page__bd {
    padding-bottom: 0;
  }
  .weui-tab__content {
    padding-top: 60px;
    text-align: center;
  }
  .weui-navbar__slider_0 {
    left: 29rpx;
    transform: translateX(0);
  }
  .weui-navbar__slider_1 {
    left: 29rpx;
    transform: translateX(250rpx);
  }
  .weui-navbar__slider_2 {
    left:29rpx;
    transform: translateX(500rpx);
  }
</style>
