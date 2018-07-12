<template>
  <div class="page">
    <div class="page__bd">
      <div class="weui-tab">
        <div class="weui-navbar order-navbar">
          <block v-for="(item,index) in tabs" :key="index">
            <div :id="index" :class="{'weui-bar__item_on':activeIndex == index}" class="weui-navbar__item" @click="tabClick">
              <div class="weui-navbar__title">{{item}}</div>
            </div>
          </block>
          <div class="weui-navbar__slider" :class="'weui-navbar__slider_' +  activeIndex"></div>
        </div>
        <div class="weui-tab__panel order-panel">
          <div class="weui-tab__content" :hidden="activeIndex != 0">
            <OrderItem v-for="(order, index) in orderList" :order="order" :key="index" @change="deleteOrder"></OrderItem>
          </div>
          <div class="weui-tab__content" :hidden="activeIndex != 1">
            待支付
          </div>
          <div class="weui-tab__content" :hidden="activeIndex != 2">
            已完成
          </div>
        </div>
      </div>
    </div>
    <button @click="gotoDetail">订单详情</button>

    <div id="dialog1" v-if="showDeleteDialog">
      <div class="weui-mask"></div>
      <div class="weui-dialog">
          <div class="weui-dialog__hd"><strong class="weui-dialog__title">确定删除订单吗?</strong></div>
          <div class="weui-dialog__bd">删除之后将无法找回</div>
          <div class="weui-dialog__ft">
              <a class="weui-dialog__btn weui-dialog__btn_default">取消</a>
              <a class="weui-dialog__btn weui-dialog__btn_primary">确定</a>
          </div>
      </div>
  </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import Qs from 'qs'
import * as types from '../../../store/types'
import OrderItem from '../../../components/OrderItem'

export default {
  name: 'buy-order-list',
  components: {
    OrderItem
  },
  data () {
    return {
      tabs: ['全部', '待支付', '已完成'],
      activeIndex: 0,
      pageData: {
        page: 0,
        size: 20,
        sort: 'createdDate,desc',
        status: []
      },
      orderList: [],
      showDeleteDialog: false
    }
  },
  methods: {
    getList () {
      this.getBuyOrderList(Qs.stringify(this.pageData)).then(res => {
        console.log(res)
        if (this.pageData.page === 0) {
          this.orderList = [].concat(res)
        } else {
          this.orderList = this.orderList.concat(res)
        }
        console.log(this.buyOrderList)
      })
    },
    gotoDetail () {
      this.$router.push({ path: '../order-detail/main' })
    },
    deleteOrder (buyOrderId) {
      console.log(buyOrderId)
      this.showDeleteDialog = true
    },
    tabClick (e) {
      this.activeIndex = e.currentTarget.id
    },
    onPullDownRefresh () {
      console.log('下拉刷新')
      setTimeout(() => {
        wx.stopPullDownRefresh()
      }, 1000)
    },
    onReachBottom () {
      console.log('加载更多')
    },
    ...mapActions('order', {
      getBuyOrderList: types.DO_GET_BUYORDER_LIST
    })
  },
  computed: {
    // ...mapGetters('order', {
    //   buyOrderList: 'buyOrderList'
    // })
  },
  onShow () {
    this.getList()
  },
  created () {
  }
}
</script>

<style lang="stylus" scoped>
.page {
  background: #f0f0f0;
}
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

.order-navbar {
  background: #fff;
  position: fixed;
}
.order-panel {
  padding-top: 0rpx;
}

</style>

