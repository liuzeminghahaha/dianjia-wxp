<template>
  <div class="body">
    <div class="top-swiper">
      <swiper :indicator-dots="swiperData.indicatorDots"
      :autoplay="swiperData.autoplay" :duration="duration" :interval="interval">
        <block v-for="(item, index) in swiperData.imgUrls" :key="index">
          <swiper-item>
            <image :src="item" class="slide-image" height="200"/>
          </swiper-item>
        </block>
      </swiper>
    </div>


    <!-- <div @click="gotoScenarioDetail()">购买详情页</div> -->
    <button @click="gotoScenarioDetail">购买详情页</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      swiperData: {
        imgUrls: [
          'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
          'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
          'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
        ],
        autoplay: false,
        indicatorDots: true,
        interval: 5000,
        duration: 1000
      }
    }
  },
  computed: {
  },
  components: {
  },

  methods: {
    gotoScenarioDetail () {
      this.$router.push({path: '/pages/scenario/scenario-detail/main', query: { scenarioId: 8145 }})
    }
  },

  created () {
  }
}
</script>

<style scoped>
  .top-swiper {
    width: 100%;
    height: 100%;
  }
  .slide-image {
    width: 100%;
  }
</style>
