<template>
    <div id="navigation">
        <router-link to="/">
            <div class="nav-box">
                首页
            </div>
        </router-link>
        <router-link to="/follow">
            <div class="nav-box">
                关注
            </div>
        </router-link>
        <div class="nav-box">
            <div class="iconfont icon-box">
                &#26214;
            </div>
        </div>
        <router-link to="/message">
            <div class="nav-box">
                消息
            </div>
        </router-link>
        <router-link to="/personal">
            <div class="nav-box">
                我的
            </div>
        </router-link>

    </div>
</template>
<script>
export default {
  name: 'navigation'
}
</script>
<style scoped lang="stylus">
#navigation
  height:1rem
  width:100%
  position:fixed
  bottom:0
  left:0
  z-index 20
.nav-box
  float:left
  width:20%
  color:#fff
  text-align :center
  height :1rem
  line-height :1rem
  font-size :.4rem
.icon-box
  width 70%
  height .7rem
  line-height .7rem
  background #fff
  color #000
  font-size .4rem
  border-radius .1rem
  margin .15rem 15%
</style>
