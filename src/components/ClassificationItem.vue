<template>
  <div class="classification-item" >
    <div class="flex-box">
      <div class="item-image"></div>
      <div class="flex-1 flex-box direction-column space-between">
        <h3 class="ellipsis2">{{data.title}}</h3>
        <div>
          <p>￥{{data.price}}</p>
          <div class="flex-box space-between">
            <div class="member-price">
              <span class="member-price-logo">会员价</span>
              <span>￥{{data.memberPrice}}</span>
            </div>
            <div class="shop-car">
              <a></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: [ 'data' ]
  }
</script>

<style lang="stylus" scoped>

  .classification-item
    border-bottom 1px solid #ccc
  .item-image
    width 30vw
    height 30vw
  .ellipsis2
    overflow: hidden;
    text-overflow: ellipsis
    display: -webkit-box
    -webkit-line-clamp: 2
    -webkit-box-orient: vertical
</style>
