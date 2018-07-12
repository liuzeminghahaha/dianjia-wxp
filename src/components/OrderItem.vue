<template>
  <div class="order-item">
    <p class="order-top flex-box align-center space-between font-14">
      <span class="info-color">订单编号：{{order.id}}</span>
      <span class="main-color">{{ order.status }}</span>
    </p>
    <div class="order-content" @click="getOrderDetail()">
      <div :src="order.scenarioHeadImg" class="main-img bg-image"></div>
      <p class="scenario-title">{{order.scenarioName}}</p>

      <p class="ticket-info flex-box">
        <span class="flex-1 ticket-info-price" v-if="order.orderType !== '开放平台' && order.orderType !== '自由交易' && order.orderType !== '预约金'">
          <span class="main-color"> 票面 : {{order.ticketLevelName}}× {{order.num}}</span>
          <span class="tk-pull-right main-color total-price"> &yen; {{order.price * order.num}}</span>
        </span>
        <span class="flex-1" v-if="order.orderType === '开放平台' || order.orderType === '自由交易' || order.orderType === '预约金'">
          <span class="main-color"> 票面 : {{order.ticketLevelName}}</span><br>
          <span class="main-color" v-if="order.price"> {{order.type === 'sale' ? '转让金额' : '出价金额' }} : &yen;{{order.price}} × {{order.num}}</span>
          <span class="tk-pull-right main-color total-price"> &yen; {{order.price * order.num}}</span>
        </span>
      </p>
      <p class="scenario-date">演出时间：{{order.scenarioDateName}}</p>
      <p class="scenario-address ellipsis">演出地点：{{order.placeName}}</p>
    </div>
    <p class="order-operate">
      <span class="tk-pull-right">
        <button v-if="order.status=== '未匹配'" @click="getOrderDetail()" class="mt-button-xs">修改价格</button>
        <button v-if="order.status=== '预约金完成'" @click="getOrderDetail()" class="mt-button-xs">重喊一单</button>
        <button v-if="(order.status=== '已匹配' || order.status=== '待支付')" @click="getOrderDetail()" class="mt-button-xs">去支付</button>
        <button v-if="order.status=== '完成'" @click="gotoPage('ticket')" class="mt-button-xs">前往票夹</button>
        <button v-if="order.status=== '已取消' || order.status=== '支付超时'" @click="deleteOrder()" class="mt-button-xs delete-btn">删除订单</button>
      </span>
    </p>
  </div>
</template>

<script>
  export default {
    props: ['order'],
    methods: {
      deleteOrder () {
        this.$emit('change', this.order.id)
      }
    }
  }
</script>

<style lang="stylus" scoped>

.font-14 {
  font-size: 14rpx;
}
.order-item {
  position: relative;
  background: #fff;
  margin: 0 0 20rpx;
  padding-bottom: 16rpx;
}
.order-top {
  padding: 10rpx 20rpx 10rpx;
  border-bottom: 1rpx dashed #ccc;
}
.main-img {
  width: 184rpx;
  height: 240rpx;
  position: absolute;
  top: 32rpx;
  left: 20rpx;
}
.order-content {
  padding-left: 220rpx;
  height: 262rpx;
  padding-right: 20rpx;
  padding-top: 28rpx;
  position: relative;
  text-align: left;
}
.scenario-title {
  white-space: normal;
  height: 88rpx;
  line-height: 38rpx;
  font-weight: 500;
  font-size: 30rpx;
  color: #323232;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}
.order-price {
  float: right;
  font-size: 28rpx;
  padding-right: 10rpx;
  font-weight: 600;
}
.order-operate {
  height: 60rpx;
  padding: 10rpx 20rpx 0;
  text-align: right;
}
.order-type-buy {
  border: 2rpx solid #46c7f3;
  color: #46c7f3;
}
.order-type-sale {
  border: 2rpx solid #ff5000;
  color: #ff5000;
}
.order-type {
  padding: 0 6rpx;
  display: inline-block;
  line-height: normal;
  font-size: 24rpx;
  border-radius: 4rpx;
  margin-right: 10rpx;
  text-align: center;
}
.mt-button-xs {
  font-size: 28rpx;
  height: 56rpx;
  line-height: 56rpx;
  width: 200rpx;
  margin-right: 0;
  background: #ff405a;
  color: #fff;
}
.delete-btn {
  background: #bcbcbc !important ;
  color: #ffffff !important;
}
.font-weight-bold {
  font-weight: bold;
}
.float-right {
  float: right;
}
.scenario-address {
  line-height: normal;
  font-size: 28rpx;
  color: #808080;
  padding: 2rpx 0;
}
.scenario-date {
  font-size: 28rpx;
  color: #808080;
}
.tk-status {
  display: inline-block;
  font-size: 28rpx;
  margin-right: 10rpx;
}
.ticket-info {
  font-size: 28rpx;
  color: #666;
}
.ticket-info .total-price {
  font-size: 32rpx;
}
.ticket-info .ticket-info-price {
  height: 80rpx;
  line-height: 80rpx;
}
.ticket-info .ticket-info-price .total-price {
  padding-top: 0rpx;
}
.tk-time-icon {
  font-size: 28rpx;
  height: 56px;
  line-height: 56px;
}
.tk-time-icon i {
  font-size: 26rpx;
}
.font-14 {
  font-size: 28rpx;
}
.main-color {
  color: #ff405a;
}
</style>

<style lang="stylus">
  /* flex system */
.flex-box
  /* https://css-tricks.com/snippets/css/a-guide-to-flexbox */
  display: flex
  for prop in column row
    &.direction-{prop}
      flex-direction: prop
  for prop in space-between space-around
    &.{prop}
      justify-content: prop
  &.flex-wrap
    flex-wrap: wrap
  &.align-end
    align-items: flex-end
  &.align-center
    align-items: center
  &.flex-start
    justify-content: flex-start
  &.flex-center
    justify-content: center
  &.flex-end
    justify-content: flex-end

  .flex-item-end
    align-content: flex-end
  .flex-self-center
    align-self: center
  .flex-self-end
    align-self: flex-end
/* for items */
  for n in 1 2 3 4 5 6 12
    .flex-{n}
      flex: n
</style>

