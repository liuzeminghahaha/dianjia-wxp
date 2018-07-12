<template>
  <div class="no-data text-center">
    <div class="img bg-image" :class="imgClass"></div>
    <div class="text">{{ text || '暂无相关记录' }}</div>
  </div>
</template>

<script>
export default {
  name: 'no-data-area',
  props: ['text', 'imgClass']
}
</script>

<style lang="stylus" scoped>

.no-data
  .img
    background-image: url('../assets/nolist.png')
    height: r(130 * 280 / 210)
    width: r(130) // 图片原大小 210x280
    margin: r(20) auto
    &.small
      width r(100)
      height: r(100 * 280 / 210)
  .text
    font-size: r(16)
    color: #5f5f5f
</style>