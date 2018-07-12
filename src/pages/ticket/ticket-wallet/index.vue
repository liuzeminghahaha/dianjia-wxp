<template>
  <div class="page">
    <button @click="qupiao">取票</button>
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
          <div class="weui-tab__content" :hidden="activeIndex != 0">
            <MyTickets></MyTickets>
          </div>
          <div class="weui-tab__content" :hidden="activeIndex != 1">
            <MyDeliveringTickets></MyDeliveringTickets>
          </div>
          <div class="weui-tab__content" :hidden="activeIndex != 2">
            <MyInPickupTickets></MyInPickupTickets>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { MyTickets, MyDeliveringTickets, MyInPickupTickets } from '../../../components'
import MyTickets from '../../../components/MyTickets'
import MyDeliveringTickets from '../../../components/MyDeliveringTickets'
import MyInPickupTickets from '../../../components/MyInPickupTickets'

export default {
  data () {
    return {
      tabs: ['我的票', '快递', '自取'],
      activeIndex: 0,
      fontSize: 30
    }
  },
  components: {
    MyTickets,
    MyDeliveringTickets,
    MyInPickupTickets
  },
  computed: {
  },
  methods: {
    qupiao () {
      this.$router.push({ path: '/pages/ticket/ticket-deliver/main' })
    },
    tabClick (e) {
      this.activeIndex = e.currentTarget.id
    }
  },
  mounted () {
    console.log(this.$route)
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
