<template>
    <div id="followHeader">
        <div class="iconfont left">
          &#17476; 随拍
        </div>
        <div class="middle">
          <router-link :to="{path:'follow', query:{page:'关注'}}">
            <span class="header-span">
             关注
            </span>
          </router-link>
          <router-link :to="{path:'/friend', query:{page:'好友'}}">
            <span class="header-span">
              好友
            </span>
          </router-link>
        </div>
    </div>
</template>

<script>
export default {
  name: 'followHeader'
}
</script>

<style scoped lang="stylus">
#followHeader
  position fixed
  width 100%
  height 1rem
  left 0
  z-index 20
  color #ffffff
  margin 0 auto
  background #000
  padding .2rem 0
.left
  position absolute
  top 0
  left 0
  width 25%
  height 1.2rem
  line-height 1.2rem
  text-align center
  font-size :.4rem
.middle
  text-align center
  height 1rem
  line-height 1rem
.header-span
  font-size .35rem
  margin 0 .15rem
</style>