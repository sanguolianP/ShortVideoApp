<template>
    <div id="firstLeft">
        <div class="author">
            @{{item.author}}
        </div>
        <div class="title">
            #{{item.title}}#
        </div>
        <div class="music-box">
          <div class="music">
              当当当当当
          </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'firstLeft',
  props: ['item']
}
</script>

<style scoped lang="stylus">
#firstLeft
  height 3rem
  margin-left .2rem
.author
  height .7rem
  line-height .5rem
  font-size .34rem
.title
  height .7rem
  line-height .5rem
  font-size .34rem
.music
  height .7rem
  line-height .5rem
  font-size .34rem
  animation 5s music linear infinite 
.music-box
  width 2rem
  overflow hidden
@keyframes music {
  0%{
    -webkit-transform translate3d(80%, 0, 0)
    transform translate3d(80%, 0, 0)
  }
  100%{
    -webkit-transform translate3d(-100%, 0, 0)
    transform translate3d(-100%, 0, 0)
  }
}
</style>
