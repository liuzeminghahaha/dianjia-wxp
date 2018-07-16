<template>
  <div class="classification-item" >
    <div class="flex-box">
      <div class="item-image" :class="{'classification': type === 'classification'}"></div>
      <div class="flex-1 flex-box direction-column space-between">
        <h3 class="ellipsis2 item-title">{{data.title}}</h3>
        <div>
          <div class="item-price">￥<span class="price">{{data.price}}</span></div>
          <div class="flex-box space-between">
            <div class="member-price-box">
              <span class="member-price-logo">会员价</span>
              <span class="member-price">￥<span class="price">{{data.memberPrice}}</span></span>
            </div>
            <div class="shop-car">
              <a @click="addCar(data)">car</a>
              <span class="car-count" v-if="data.carCount > 0">{{data.carCount}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: [ 'data', 'type' ],
    methods: {
      addCar (item) {
        this.$emit('addCar', item)
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @import '../assets/mixin.styl'

  .classification-item
    border-bottom 1px solid #ccc
    background #fff
    padding 20px 20px 10px 10px
  .item-image
    width 30vw
    height 30vw
  .ellipsis2
    overflow: hidden;
    text-overflow: ellipsis
    display: -webkit-box
    -webkit-line-clamp: 2
    -webkit-box-orient: vertical
  .item-title
    font-size r(16)
  .item-price
    color #ff405a
    font-size r(10)
    display inline-block
    transform translateY(8px)
    .price 
      font-size r(18)
  .member-price-logo
    background orange 
    color #ffffff
    padding 2px
    font-size r(10)
  .member-price
    font-size r(10)
    color orange
    margin-left 4px
    .price
      font-size r(18)
      font-weight bold
  .shop-car
    position relative
    .car-count
      position absolute 
      top 0
      right -5px
      width auto 
      min-width 15px
      heigth 10px
      font-size r(10)
      border-radius 50%
      color #ffffff
      background #ff405a
      text-align center
</style>
