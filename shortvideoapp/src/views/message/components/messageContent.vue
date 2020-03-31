<template>
    <div id="messageContent">
        <div class="box">
            <div class="img">
                <img src="../../../assets/img/fans.png" class="img-box">
            </div>
            <div class="box-text">
                粉丝
            </div>
        </div>
        <div class="box">
            <div class="img">
                <img src="../../../assets/img/zan.png" class="img-box">
            </div>
            <div class="box-text">
                点赞
            </div>
        </div>
        <div class="box">
            <div class="img">
                <img src="../../../assets/img/pinglun.png" class="img-box">
            </div>
            <div class="box-text">
                评论和@
            </div>
        </div>
        <div class="box">
            <div class="img">
                <img src="../../../assets/img/hudong.png" class="img-box">
            </div>
            <div class="box-text">
                随拍互动
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: 'messageContent',
}
</script>
<style lang="stylus" scoped>
#messageContent
  width 100%
  height 2.5rem
  border-bottom:.01rem solid #444
.box
  width 25%
  height 2rem
  float left
  margin 0 auto
.img
  text-align center
.img-box
  width 1rem
  height 1rem
  border-radius .1rem
  margin-top .4rem
.box-text
  font-size:.3rem
  text-align:center
  color:#eee
  margin-top:.2rem
</style>
