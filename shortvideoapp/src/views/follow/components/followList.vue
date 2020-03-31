<template>
    <div id="followList">
        <div class="item" 
             v-for="(item,index) of list"
             :key="index"
             >
            <div class="top">
                <div class="img-box">
                    <img src="../../../../public/img/author.jpg" alt="" class="author-img">
                </div>
                <div class="author-name">
                    {{item.author}} {{page}}
                </div>
                <div class="share">
                    分享
                </div>
            </div>
            <div class="title">{{item.title}}</div>
            <div class="videos">
                <div class="video-box">
                    <videos :videos="item"></videos>
                </div>
            </div>
            <div class="box">
                <div class="left">{{item.time}}</div>
                <div class="right">
                    <div class="iconfont box-number">
                        &#4369; {{item.comment}}
                    </div>
                    <div class="iconfont box-number">
                        &#30583; {{item.share}}
                    </div>
                    <div class="iconfont box-number">
                        &#21845; {{item.loveNumber}}
                    </div>
                </div>
            </div>
            <div class="comment-text">
                <input class="comment-input" type="text" placeholder="  #留下你的评论" />
            </div>
        </div>
 
    </div>
</template>

<script>
import axios from 'axios'
import videos from '../../first/components/video.vue'
export default {
  name: 'followList',
  components: {
      videos
  },
  created () {
      this.getVideo()
  },
  methods: {
      getVideo () {
          axios.get('/api/videoinfo/video.json')
          .then(this.getVideoInfoSucc)
      },
      getVideoInfoSucc (res) {
          if(this.page==="好友"){
            this.list = res.data.list.slice(3,5)
          }else if(this.page==="关注"){
            this.list = res.data.list.slice(0,3)
          }else if(this.page==="动态"){
            this.list = res.data.list.slice(2,6)
          }else{
            this.list = res.data.list.slice(0,6)
          }
      }
  },
  data () {
      return {
        list: [],
        page: this.$route.query.page
      }
  }
}
</script>

<style scoped lang="stylus">
#followList
  position absolute
  margin-top 1.2rem
  left 0
  width 100%
  background #111
  padding-bottom 1rem
.item
  padding 0 .5rem
  border-bottom .005rem solid #333
.top
  margin-top .5rem
  height 1rem
  overflow hidden
.img-box
  float left
  border-radius 50%
  width 1rem
  height 1rem
.author-img
  border-radius 50%
  width 1rem
  height 1rem
.author-name
  float left
  font-size .4rem
  height 1rem
  line-height 1rem
  color #fff
  margin-left .2rem
.share
  float right
  font-size .3rem
  margin-right .3rem
  color #fff
  height 1rem
  line-height 1rem
.title
  width 100%
  font-size .3rem
  margin-top .3rem
  height .5rem
  line-height .5rem
  color #fff
.videos
  margin-top .2rem
  width 100%
  height 7.5rem
.video-box
  width 85%
  height 8rem
.box
  margin-top .8rem
  overflow hidden
.left
  float left
  font-size .3rem
  height .5rem
  line-height .5rem
  color #fff
  margin-left .1rem
.right
  float right
  overflow hidden
.box-number
  float right
  font-size .3rem
  height .5rem
  line-height .5rem
  padding-left .2rem
  color #fff
.comment-text
  width 100%
  margin-top .2rem
  margin-bottom .5rem
.comment-input
  width 95%
  height .7rem
  background #333
</style>
