<template>
  <div class="classification">
    <div class="flex-box c-box">
      <div class="left-area">
        <ul class="left-ul">
          <li v-for="(item, index) in leftData" :key="index">
            <a class="left-item" @click="leftItemClick(item)" :class="{ 'active': item.active, 'open': item.open }">
              {{ item.name }}
              <!-- <i class="icon iconfont icon-piaojia1 main-color title-icon-icon"></i> -->
            </a>
            <ul v-if="item.children && item.open" class="left-child-ul" :class="{ 'open': item.open }">
              <li v-for="(childItem, childIndex) in item.children" :key="childIndex" class="child-item"  @click="childItemClick(item, childItem)">
                <a :class="{ 'active': childItem.active }">
                  {{ childItem.name }}
                  <!-- <i class="icon iconfont icon-piaojia1 main-color title-icon-icon"></i> -->
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div class="flex-1 right-area">
        <ClassificationItem v-for="(item, index) in rightData" :key="index" :data="item"></ClassificationItem>
      </div>
    </div>
  </div>
</template>

<script>
import * as _ from 'lodash'
import ClassificationItem from '../../components/ClassificationItem'

export default {
  data () {
    return {
      leftData: [
        {
          name: '默认',
          open: false,
          id: 101
        }, {
          name: '洗护',
          open: false,
          id: 102,
          children: [
            {
              name: '一段',
              active: false,
              id: 1021
            }, {
              name: '二段',
              active: false,
              id: 1022
            }, {
              name: '三段',
              active: false,
              id: 1023
            }
          ]
        }, {
          name: '喂养',
          open: false,
          id: 103,
          children: [
            {
              name: '一段',
              active: false,
              id: 1031
            }, {
              name: '二段',
              active: false,
              id: 1032
            }, {
              name: '三段',
              active: false,
              id: 1033
            }
          ]
        }, {
          name: '奶粉',
          open: false,
          id: 104,
          children: [
            {
              name: '一段',
              active: false,
              id: 1041
            }, {
              name: '二段',
              active: false,
              id: 1042
            }, {
              name: '三段',
              active: false,
              id: 1043
            }
          ]
        }, {
          name: '辅食',
          open: false,
          id: 105,
          children: [
            {
              name: '一段',
              active: false,
              id: 1051
            }, {
              name: '二段',
              active: false,
              id: 1052
            }, {
              name: '三段',
              active: false,
              id: 1053
            }
          ]
        }, {
          name: '童装',
          open: false,
          id: 106,
          children: [
            {
              name: '一段',
              active: false,
              id: 1061
            }, {
              name: '二段',
              active: false,
              id: 1062
            }, {
              name: '三段',
              active: false,
              id: 1063
            }
          ]
        }, {
          name: '喂养',
          open: false,
          id: 107,
          children: [
            {
              name: '一段',
              active: false,
              id: 1071
            }, {
              name: '二段',
              active: false,
              id: 1072
            }, {
              name: '三段',
              active: false,
              id: 1073
            }
          ]
        }, {
          name: '童装',
          open: false,
          id: 108,
          children: [
            {
              name: '一段',
              active: false,
              id: 1081
            }, {
              name: '二段',
              active: false,
              id: 1082
            }, {
              name: '三段',
              active: false,
              id: 1083
            }
          ]
        }, {
          name: '童装',
          open: false,
          id: 109,
          children: [
            {
              name: '一段',
              active: false,
              id: 1091
            }, {
              name: '二段',
              active: false,
              id: 1092
            }, {
              name: '三段',
              active: false,
              id: 1093
            }
          ]
        }, {
          name: '童装',
          open: false,
          id: 1010,
          children: [
            {
              name: '一段',
              active: false,
              id: 10101
            }, {
              name: '二段',
              active: false,
              id: 10102
            }, {
              name: '三段',
              active: false,
              id: 10103
            }
          ]
        }, {
          name: '童装',
          open: false,
          id: 1011,
          children: [
            {
              name: '一段',
              active: false,
              id: 10111
            }, {
              name: '二段',
              active: false,
              id: 10112
            }, {
              name: '三段',
              active: false,
              id: 10113
            }
          ]
        }, {
          name: '童装',
          open: false,
          id: 1012,
          children: [
            {
              name: '一段',
              active: false,
              id: 10121
            }, {
              name: '二段',
              active: false,
              id: 10122
            }, {
              name: '三段',
              active: false,
              id: 10123
            }
          ]
        }, {
          name: '童装',
          open: false,
          id: 1013,
          children: [
            {
              name: '一段',
              active: false,
              id: 10131
            }, {
              name: '二段',
              active: false,
              id: 10132
            }, {
              name: '三段',
              active: false,
              id: 10133
            }
          ]
        }, {
          name: '童装',
          open: false,
          id: 1014,
          children: [
            {
              name: '一段',
              active: false,
              id: 10141
            }, {
              name: '二段',
              active: false,
              id: 10142
            }, {
              name: '三段',
              active: false,
              id: 10143
            }
          ]
        }
      ],
      rightData: [
        { title: '美素佳儿儿童配方奶粉4段(3岁以上宝宝使用)', price: 428, memberPrice: 411.86 },
        { title: '美素佳儿儿童配方奶粉4段(3岁以上宝宝使用)', price: 428, memberPrice: 411.86 },
        { title: '美素佳儿儿童配方奶粉4段(3岁以上宝宝使用)', price: 428, memberPrice: 411.86 },
        { title: '美素佳儿儿童配方奶粉4段(3岁以上宝宝使用)', price: 428, memberPrice: 411.86 },
        { title: '美素佳儿儿童配方奶粉4段(3岁以上宝宝使用)', price: 428, memberPrice: 411.86 },
        { title: '美素佳儿儿童配方奶粉4段(3岁以上宝宝使用)', price: 428, memberPrice: 411.86 },
        { title: '美素佳儿儿童配方奶粉4段(3岁以上宝宝使用)', price: 428, memberPrice: 411.86 },
        { title: '美素佳儿儿童配方奶粉4段(3岁以上宝宝使用)', price: 428, memberPrice: 411.86 },
        { title: '美素佳儿儿童配方奶粉4段(3岁以上宝宝使用)', price: 428, memberPrice: 411.86 },
        { title: '美素佳儿儿童配方奶粉4段(3岁以上宝宝使用)', price: 428, memberPrice: 411.86 }
      ]
    }
  },
  components: {
    ClassificationItem
  },
  computed: {
  },
  methods: {
    leftItemClick (item) {
      if (item.open || item.active) {
        return
      }
      _.forEach(this.leftData, dataItem => {
        dataItem.open = false
        dataItem.active = false
      })
      if (item.children) {
        item.open = true
      } else {
        item.active = true
      }
    },
    childItemClick (item, childItem) {
      if (childItem.active) {
        return
      }
      _.forEach(this.leftData, dataItem => {
        if (dataItem.children) {
          _.forEach(dataItem.children, dataChildItem => {
            dataChildItem.active = false
          })
        }
      })
      childItem.active = true
      console.log(childItem)
    }
  },
  created () {
  }
}
</script>

<style lang="stylus" scoped>
  .c-box
    heigth 100%
    width 100%
    position relative
    .left-area
      width 100px
      height 100%
      position fixed 
      top 0
      left 0
      border-right 1px solid #ccc
      overflow-y auto
      .left-item
        height 50px
        line-height 50px
        text-align center
        font-weight bold
        &.active, &.open
          background #fff
      .left-child-ul
        background #fff
      .child-item
        width 100%
        height 40px
        line-height 40px
        text-align center
        .active
          background orange
          color #ffffff
          width 60%
          height 25px
          line-height 25px
          border-radius 18px
          margin auto
    .right-area
      margin-left 100px
      backgroun #fff
      overflow-y auto
    .left-area::-webkit-scrollbar, .right-area::-webkit-scrollbar
      display: none
</style>
