<template>
  <div class="deliver-content">
    <div class="box">
      <TicketDetailHead :ticketInfo="ticketGroupInfo"></TicketDetailHead>
      <div class="deliver-tab">
        <div class="tab-item">
          <i class="icon iconfont icon-color tk-font-xl" :class="{ 'icon-kuaidi1': !deliverType || deliverType === 'pickup', 'icon-kuaidishixin selected-icon': deliverType === 'deliver' }"/>

          快递
        </div>
        <div class="tab-item">
          自取
        </div>
      </div>
    </div>
  </div>
</template>


<script>
  import { mapActions, mapGetters } from 'vuex'
  import * as types from '../../../store/types'
  import TicketDetailHead from '../../../components/TicketDetailHead.vue'
  export default {
    data () {
      return {
        deliverType: 'deliver'
      }
    },
    computed: {
      ...mapGetters('ticket', {
        ticketGroupInfo: 'ticketGroupInfo'
      })
    },
    components: {
      TicketDetailHead
    },
    methods: {
      goPage () {
        this.$router.push({path: '/pages/counter/main', query: { id: 1 }})
      },
      ...mapActions('ticket', {
        getTicketGroupInfo: types.DO_GET_TICKET_GROUP_INFO,
        getTicketAreaRowCount: types.DO_GET_TICKET_AREA_ROW_COUNT
      })
    },
    mounted () {
      this.getTicketGroupInfo(28325)
      this.getTicketAreaRowCount(28325)
    }
  }
</script>

<style lang="stylus" scoped>
  @import '../../../assets/mixin.styl'

  p
    margin: 0
  .selected-icon
    color: #ff4958 !important
  .tk-tips
    margin-bottom: r(48)
  .tk-tip-info
    border: none
    white-space: normal
    font-size: r(12)
    color: #b1b1b1
    padding: 7px 11px
    vertical-align: middle
    height: auto
  .tk-pickup-info
    height: auto
    padding: 10px
    background: #fff
    font-size: 14px
    .pickup-item
      padding: 10px 16px
      background: #fff
  .tk-footer
    position: fixed
    bottom: r(54)
    width: 100%
    z-index: 100
    font-size: r(12)
    border-top: 1px solid #e1e1e1
    &.overdue
      border-top: 0px
    .count
      height: r(48)
      line-height: r(48)
  .tk-b-b
    border-bottom: 1px solid #ddd
  .tk-pickup-popup
    height: 100%
    width : 100%
    .tk-list
      padding: 10px 16px
      p:first-child
        font-weight: 500
        font-size: r(16)
        color: #000
  .mint-navbar .mint-tab-item
    padding: r(10) 0
  .tk-ecode-item
    font-weight: 500
    font-size: r(18)
    color: #ff4958
    display: block
  .unitaryCompute
    width: 40px
    height: 24px
    line-height: normal
    display: inline-block
    vertical-align: middle
    border: 1px solid #ddd
    text-align: center
    border-radius: 2px
    i
      font-size: 16px
  .tk-b-red
    border: 1px solid #ff4958 !important
  .tk-input
    width: r(60)
    height: 22px
    border-radius: 2px
    border: 1px solid #ddd
    appearance: none
    padding: 0
    margin: 0 5px
    font-size: 12px
    vertical-align: middle
    outline: none
  .count-info
    height: r(30)
    padding: 8px 0
    background: #fff
    font-size: r(16)
  .tk-b-r
    border-right: 1px solid #e1e1e1
    padding-left: 10px
  .tk-mark
    width: 6.5rem
    padding-left: 10px
  .deliver-tab
    height 65px
    width 100%
    background-color #ffffff
    text-align: center;
    border-bottom: 1px solid #d6d7dc;
    color: #4d4d4d;
    display: flex
    .tab-item
      width 50%
      flex 1
</style>
<style lang="stylus">
  .deliver-content
    .mint-tab-item
      text-align: center
      flex: 0 1 30%
      margin-right: 10%
      margin-left: 10%
    .mint-navbar
      display: flex
</style>
