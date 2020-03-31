<template>
    <div id="city">
        <div class="location">
          <div class="iconfont location-left">
            &#34952;自动定位:{{this.$store.state.tcity}}
          </div>
          <router-link to="/changeCity">
          <div class="iconfont location-right">
            切换&#43690;
          </div>
          </router-link>
        </div>
        <div class="sort">
          <div class="sort-box" 
               v-for="(item,index) of sortList"
               :key="index"
               >
            <img class="sort-img" :src="item.imgSrc"/>
            <div class="sort-name">{{item.name}}</div>
          </div>
        </div>
        <div class="video-list">
          <div class="item" v-for="(item,index) of list" :key="index">
            <div class="video">
              <videos :videos="item"></videos>
            </div>
            <div class="title">
              {{item.title}}{{item.title}}{{item.title}}
              {{item.title}}{{item.title}}{{item.title}}
              {{item.title}}{{item.title}}{{item.title}}
              </div>
          </div>
        </div>
    </div>
</template>

<script>
import videos from './video.vue'
import axios from 'axios'
export default {
  name: 'city',
  components: {
    videos
  },
  data () {
    return {
      list: [],
      sortList: [{
        imgSrc: require('../../../assets/img/food.png'),
        name: '美食'
      },
      {
        imgSrc: require('../../../assets/img/cultrue.png'),
        name: '文化'
      },
      {
        imgSrc: require('../../../assets/img/playfun.png'),
        name: '玩乐'
      },
      {
        imgSrc: require('../../../assets/img/hotel.png'),
        name: '酒店'
      },
      {
        imgSrc: require('../../../assets/img/shopping.png'),
        name: '购物'
      },
      {
        imgSrc: require('../../../assets/img/sports.png'),
        name: '运动'
      },
      {
        imgSrc: require('../../../assets/img/view.png'),
        name: '景点'
      }
      ]
    }
  },
  mounted () {
    this.getVideoInfo()
  },
  methods: {
    getVideoInfo () {
      axios.get('/api/videoinfo/video.json')
      .then(this.getVideoInfoSucc)
    },
    getVideoInfoSucc (res) {
      this.list = res.data.list
    },
  }
}
</script>

<style scoped lang="stylus">
::-webkit-scrollbar
display none 
#city
  padding .02rem
  width 100%
  background #222
.location
  width 100%
  height .8rem
  line-height .8rem
  margin-top 1.2rem
  border-bottom .01rem solid #c3c3c3
  overflow hidden
.location-left
  float left
  margin-left .3rem
  color #bbb
.location-right
  float right
  margin-right .3rem
  color #bbb
.sort
  width 100%
  height 2rem
  overflow auto
  display flex
.sort-box
  width 1.5rem
  height 2rem
  flex-shrink 0
.sort-img
  width 1rem
  height 1rem
  border radius .1rem
  margin .2rem .25rem
.sort-name
  width 1rem
  height .3rem
  line-height .3rem
  color #fff
  margin 0 .25rem
  text-align center
.video-list
  width 100%
  column-count 2
  column-gap 0
.item
  break-inside: avoid
  margin 0 auto
.video
  width 90%
  margin-left 5%
.title
  color #fff
  line-height .5rem
  font-size .3rem
  margin-top .2rem
  padding-left .4rem
  padding-right .2rem
</style>
