<template>
  <div class="player">
    <div class="iconfont icon" @click="click">
        &#48059;
    </div>
    <div class="list">
        <video-list></video-list>
    </div>
    <div class="comment">
        #留下你精彩的评论吧
    </div>
  </div>
</template>

<script>
import videoList from '../../views/first/components/videoList.vue'
export default {
  name: 'player',
  components: {
      videoList
  },
  methods: {
      click () {
          this.$router.go(-1)
      }
  }
}
</script>

<style scoped lang="stylus">
.player
  color #fff
  position relative
  width 100%
  height 100%
.icon
  position absolute
  top .3rem
  left .25rem
  z-index 20
.comment
  position absolute
  bottom .2rem
  left .25rem
  z-index 20
  color #999
  font-size .35rem
.list
  width 100%
  height 100%
  z-index 18
</style>
