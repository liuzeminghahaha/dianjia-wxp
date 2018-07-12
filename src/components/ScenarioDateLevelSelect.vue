<template>
  <div class="scenario-date-level-select-box">
    <div v-for="(date, index) in scenarioDates"
      v-if="date.ticketLevels.length > 0"
      class="scenario-date-level-select border-bottom">
      <div class="scenario-date-title title-color tk-p-l-sm tk-p-r-sm" @click="datePanelClick(date)">
        {{ date.name }}
        <i class="icon iconfont icon-xiangxiajiantou tk-pull-right icon-color" v-show="selectedDateId != date.id"></i>
        <i class="icon iconfont icon-xiangshang2 tk-pull-right icon-color" v-show="selectedDateId == date.id"></i>
      </div>
      <div class="scenario-date-levels flex-box flex-wrap" v-show="selectedDateId == date.id">
        <div v-for="(item, levelIndex) in date.ticketLevels"
          :class="{
          'level-selected': item.checked,
          'disabled': item.existsTicket === false
          }"
          @click="selectLevel(date, item)"
          class="scenario-date-level-item flex-box direction-column align-center flex-center">
          <svg width="100%" height="100%">
            <line class="top" x1="0" y1="0" x2="350" y2="0"/>
            <line class="left" x1="0" y1="70" x2="0" y2="-150"/>
            <line class="bottom" x1="100" y1="70" x2="-250" y2="70"/>
            <line class="right" x1="100" y1="0" x2="100" y2="220"/>
          </svg>
          <i class="icon iconfont icon-xuanze4" v-if="item.checked"></i>
          <p class="level-name">
            &yen; {{ item.name }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'ScenarioDateLevelSelect',
  props: ['scenarioDates', 'scenario', 'selectChange'],
  data () {
    return {
      selectedDateId: null
    }
  },
  watch: {
    scenarioDates: function (newVal, oldVal) {
      // 默认展开第一个场次
      if (newVal && newVal.length > 0) {
        for (let i = 0; i < newVal.length; i++) {
          if (newVal[i].ticketLevels && newVal[i].ticketLevels.length > 0) {
            newVal[i].checked = true
            break
          }
        }
      }
      if (!this.selectedDateId && newVal) {
        const checkedDate = newVal.find(item => item.checked === true)
        if (checkedDate) {
          this.selectedDateId = checkedDate.id
        } else {
          this.selectedDateId = null
        }
      }
    }
  },
  methods: {
    selectLevel (date, level) {
      this.selectedDateId = date.id
      level.scenarioDateId = date.id
      this.selectChange(level)
    },
    datePanelClick (date) {
      if (!this.selectedDateId || this.selectedDateId !== date.id) {
        this.selectedDateId = date.id
      } else {
        this.selectedDateId = null
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '../assets/mixin.styl'

  .scenario-date-level-select-box .scenario-date-level-select:first-child
    border-top 1px solid #ddd
  .scenario-date-level-select
    background-color: #fff
  .border-bottom
    border-bottom 1px solid #dddddd
  .scenario-date-title
    height: 48px
    line-height: 48px
    color: #404040
    font-weight: 500
  .scenario-date-level-item
    // border: 1px solid #ccc
    height: 70px
    width: 100px
    position: relative
    float: left
    text-align: center
    margin-bottom: 10px
    margin-right: 10px
    .level-info
      color: $infoColor
      width: 100%
      text-align: center
    .level-name
      text-align: center
      width: 100%
      color: $titleColor
    svg
      position: absolute
      top: 0
      left: 0
      line
        stroke-width: 2
        stroke: #acaeb3
        transition: transform .8s ease-in-out
    &.disabled
      opacity 0.5

  .level-selected
    // border-color: #f34956
    color: #f34956
    position relative
    overflow hidden
    .iconfont
      position absolute
      bottom -1px
      right -4px
    .level-info
      color: $mainColor
    .level-name
      color: $mainColor
    svg line
      stroke: $mainColor
      &.top
        stroke-dasharray: 130 90
        transform: translateX(-250px)
      &.bottom
        stroke-dasharray: 130 90
        transform: translateX(250px)
      &.left
        stroke-dasharray: 80 60
        transform: translateY(150px)
      &.right
        stroke-dasharray: 80 60
        transform: translateY(-150px)

  .scenario-date-levels
    padding-left: 10px
    padding-right: 10px
  .level-type
    position: absolute
    top: 0
    left: 0
    width: 30px
    height: 26px
  .level-random
    background: url('../assets/level-random.png') no-repeat
    background-size: 46px 26px
  .level-seat
    background: url('../assets/level-seat.png') no-repeat
    background-size: 46px 26px
  .clearfix:after
    visibility: hidden
    display: block
    font-size: 0
    content: " "
    clear: both;height: 0
</style>
