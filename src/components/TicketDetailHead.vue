<template>
  <div class="tk-item">
    <div class="flex-box direction-row detail-content tk-horn-b">
      <div :src="ticketInfo.headImgUrl" class="main-img bg-image" @click="gotoBuy"></div>
      <div>
        <h2 class="tk-title">{{ ticketInfo.innerName }}</h2>
        <p class="info-color">{{ ticketInfo.scenarioDateName }}</p>
        <p class="info-color">{{ ticketInfo.placeName }}</p>
      </div>
    </div>
    <div class="tk tk-horn-t">
      <p class="tk-dark-gray detail-footer">
        票面：&yen;{{ ticketInfo.originalPrice }}
        <span>({{ ticketInfo.ticketLevelType }})</span>
        <span class="tk-pull-right">
          {{ ticketInfo.ticketCount -  ticketInfo.saleCount }}张
        </span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TicketDetailHead',
  props: ['ticketInfo'],
  methods: {
    gotoBuy () {
      if (this.ticketInfo.deliverStatus !== '过期') {
        // this.$router.push({ name: 'scenario:buy', params: { id: this.ticketInfo.scenarioId }})
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '../assets/mixin.styl'

  .tk-horn-b
    background: -webkit-radial-gradient(0 100%, circle,#f0f0f0 15px,#fff 15px),
      -webkit-radial-gradient(100% 100%, circle,#f0f0f0 15px,#fff 15px)
    background-position: bottom left, bottom right
    background-size: 50% 100%
    background-repeat: no-repeat
  .tk-horn-t
    background: -webkit-radial-gradient(0 0, circle,#f0f0f0 15px,#fff 15px),
      -webkit-radial-gradient(100% 0, circle,#f0f0f0 15px,#fff 15px)
    background-position:  top left,top right
    background-size: 50% 100%
    background-repeat: no-repeat
    border-top: 1px dashed #f0f0f0
    margin-top: -2px
  .tk-item
    background: #fff
    margin: 10px 0
    padding-bottom: 0
  .detail-content
    height: 108px
    padding: 10px 10px 7px 15px
    p
      font-size: r(12)
  .main-img
    width: 80px
    height: 102px
    margin-right: 10px
    /*background-image: url('../assets/listpic.jpg')*/
  p, h2
    margin: 0
  .tk-title
    margin-top: 2px
    white-space: normal
    height: 42px
    font-weight: 500
    font-size: r(16)
    text-align: left
    color: $titleColor
    text-overflow: ellipsis
    display: -webkit-box
    -webkit-box-orient: vertical
    -webkit-line-clamp: 2
    overflow: hidden
    margin-bottom: 26px
  .tk-span-tag
    line-height: normal
    font-size: r(12)
    border: 1px solid #ccc
    border-radius: 3px
    padding: 1px 3px
    display: inline-block
    margin-top: 3px
  .detail-footer
    padding: 10px 20px
    border-top: 1px dashed #f0f0f0
    font-size: r(14)
</style>
