<template>
    <div id="share">
        <div class="header">
            分享到
        </div>
        <div class="share-box">
            <vshare :vshareConfig="vshareConfig"></vshare>
        </div>
        <div class="close" @click="close">
            取消
        </div>
    </div>
</template>
<script>
export default {
    name: 'share',
    data(){
        return{
            vshareConfig: {
                shareList: [
                    // 此处放分享列表（ID）
                    'qzone',
                    'tqf',
                    'tsina',
                    'douban',
                    'mogujie',
                    'diandian',
                    'huaban',
                    'duitang',
                    'weixin'
                ],
                common : {
                    //此处放置通用设置
                },
                share : [{
                    //此处放置分享按钮设置
                    bdSize: 32
                    }
                ]
            }
        }
    },
    methods: {
        close(){
            this.$emit('close')
        }
    }
}
</script>
<style lang="stylus" scoped>
#share
  top 3rem
  background #ffffff
  color #000
  height 4rem
  position relative
  border-radius .3rem .3rem 0 0
  width 100%
.header
  height .8rem
  line-height .8rem
  font-size .4rem
  text-align center
.share-box
  height 1rem
  padding .5rem 0
  margin  0 auto
.close
  height .5rem
  line-height .5rem
  font-size .4rem
  position absolute
  bottom .5rem
  left 0
  width 100%
  text-align center
</style>