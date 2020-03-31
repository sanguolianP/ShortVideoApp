<template>
    <div id="firstRight">
        <div class="author-img">
          <router-link :to="{path:'/user', query:{user:true}}">
            <img class="img" src="../../../../public/img/author.jpg" />
          </router-link>
            <div class="iconfont add" v-if="show" @click="clickShow">
              &#26214;
            </div>
        </div>
        <div :class="changeColor" @click="click">
            &#21845;
        </div>
        <div class="number">{{item.loveNumber}}</div>
        <div class="iconfont right-icon" @click="openComment">
            &#4369;
        </div>
        <div class="number">{{item.comment}}</div>
        <div class="iconfont right-icon" @click="openShare">
            &#30583;
        </div>
        <div class="number">{{item.share}}</div>
        <div class="around">
            <img class="img" src="../../../../public/img/music.jpg" />
        </div>
    </div>
</template>

<script>
export default {
  name: 'firstRight',
  props: ['item','loveColor'],
  methods: {
    click () {
      this.changeColor= this.changeColor=='iconfont right-icon'?
      'iconfont icon-red' : 'iconfont right-icon'
      console.log('love')
    },
    clickShow(){
      if(this.show){
        this.show = false
      }
    },
    openComment(){
      this.$emit('openComment')
    },
    openShare(){
      this.$emit('openShare')
    }
  },
  data () {
    return {
      show: true,
      changeColor:'iconfont right-icon'
    }
  },
  watch: {
    loveColor () {
      if(this.changeColor==='iconfont right-icon'){
        this.changeColor = 'iconfont icon-red'
      }
    }
  }
}
</script>

<style scoped lang="stylus">
#firstRight
  width 1rem
  margin 0 auto
.author-img
  border-radius 50%
  border .02rem solid #fff
  width 1rem
  height 1rem
  margin-bottom .4rem
  position relative
.add
  background red
  width .35rem
  height .35rem
  line-height .35rem
  border-radius 50%
  position absolute
  bottom -.175rem
  left .325rem
  color #fff
  text-align center
.img
  width 1rem
  height 1rem
  border-radius 50%
.around
  border-radius 50%
  margin-top .4rem
  width 1rem
  height 1rem
  position relative
  animation rotate 2s linear 0.2s infinite
.right-icon
  width 1rem
  height .8rem
  margin-top .3rem
  text-align center
  line-height .8rem
  color #fff
  font-size .6rem
.icon-red
  width 1rem
  height .8rem
  margin-top .3rem
  text-align center
  line-height .8rem
  color #f00
  font-size .6rem
.number
  font-size .25rem
  text-align center

@keyframes rotate {
    0% {
        transform rotate(0deg)
    }
    100% {
        transform rotate(360deg)
    }
}
</style>
