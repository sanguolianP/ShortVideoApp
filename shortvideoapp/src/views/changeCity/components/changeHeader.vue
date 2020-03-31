<template>
    <div>
      <div id="changeHeader">
        <router-link to="/city">
        <div class="iconfont left">
            &#39321;
        </div>
        </router-link>
        <div class="text">
            切换城市
        </div>
    </div>
    <div class="ground"></div>
    </div>
</template>
<script>
export default {
    name: 'changeHeader'
}
</script>
<style scoped lang="stylus">
#changeHeader
  width 100%
  height .8rem
  line-height .8rem
  position fixed
  top 0
  left 0
  margin 0 auto
  background #000
  z-index 20
.left
  position absolute
  top 0
  left .3rem
  color #fff
.text
  font-size .35rem
  text-align center
  color #fff
.ground
  width 100%
  height .8rem
</style>