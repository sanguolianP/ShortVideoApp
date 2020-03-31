<template>
    <div id="videoList">
        <swiper :options="swiperOption">
            <swiper-slide class="swiper" v-for="(item,index) of list" :key="item.id">
              <videos ref="videos" :videos="item" :index="index"></videos>
              <div v-if="pages - 1 === index" class="left">
                <firstLeft :item="item"></firstLeft>
              </div>
              <div v-if="pages - 1 === index" class="right">
                <first-right @openShare="openShare" @openComment="openComment" :loveColor="loveColor" :item="item"></first-right>
              </div>
            </swiper-slide>
        </swiper>

        <div v-if="show" class="comment-box">
          <component @close="close" :is="componentName"></component>
        </div>
    </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
// import { videoPlayer } from 'vue-video-player'
import firstLeft from './firstLeft.vue'
import firstRight from './firstRight.vue'
import videos from './video.vue'
import axios from 'axios'
import comment from '../../components/comment.vue'
import firstShare from '../../components/share.vue'

export default {
  name: 'videoList',
  components: {
    swiper,
    swiperSlide,
    // videoPlayer,
    firstLeft,
    firstRight,
    videos,
    comment,
    firstShare
  },
  data () {
    return {
      componentName: "",
      show: false,
      pages: 1,
      loveColor: false,
      swiperOption: {
        direction: 'vertical', // 设置滑动方向为垂直
        autoHeight: true, // 自动高度
        mousewhell: false,
        mousewhellControl: false,
        setWrapperSize: true,
        height: window.innerHeight,
        on: {
          tap: (event) => this.player(this.pages - 1),
          slideNextTransitionStart: (event) => {
            this.pages += 1
            this.next(this.pages - 1)
          },
          slidePrevTransitionStart: (event) => {
            if (this.pages > 1) {
              this.pages -= 1
            }
            this.prev(this.pages - 1)
          },
          doubleTap: (event) => {
            this.changeColor()
          }
        }
      },
      list: []
    }
  },
  mounted () {
    this.getVideoInfo()
  },
  methods: {
    getVideoInfo () {
      axios.get('/api/videoinfo/video.json').then(this.getVideoInfoSucc)
    },
    getVideoInfoSucc (res) {
      this.list = res.data.list
    },
    player (page) {
      this.$refs.videos[page].judge()
    },
    next (page) {
      this.$refs.videos[page].changePlay()
      this.$refs.videos[page - 1].changeStop()
    },
    prev (page) {
      this.$refs.videos[page].changePlay()
      this.$refs.videos[page + 1].changeStop()
    },
    changeColor () {
      this.loveColor = this.loveColor===false ? true : false
    },
    openComment(){
      this.show = true
      this.componentName = "comment"
    },
    openShare(){
      this.show = true
      this.componentName = "first-share"
    },
    close(){
      this.show = false
    }
  }
}

</script>

<style scoped lang="stylus">
#videoList
  width :100%
  height :100%
  background  :#333
  z-index :15
.swiper
  color :#fff
  position :relative
  z-index :15
.video-player-box
  height :100%
  display :flex
  margin :0 auto
  overflow :hidden
  align-items :center
  z-index :15
.left
  position :absolute
  bottom :1rem
  left .2rem
  z-index 16
  font-size .5rem
.right
  position :absolute
  bottom :1rem
  right .2rem
  z-index 16
  font-size .5rem
.comment-box
  z-index 22
  width 100%
  height 10rem
  position fixed
  bottom 0
  left 0
  display flex
  align-items center
  justify-content center
</style>
