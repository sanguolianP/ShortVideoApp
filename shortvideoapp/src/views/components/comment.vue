<template>
    <div id="comment">
        <div class="comment-header">
            <div class="middle">
                3.2w条评论
                <div class="iconfont iconclose" @click="close">
                    &#39321;
                </div>  
            </div>
      
        </div>
        <div class="comment-list">
            <div class="item">
                <div class="left">
                    <img src="../../../public/img/author.jpg" class="img" />
                </div>
                <div class="comment-content">
                    <div class="name">
                        张三
                    </div>
                    <div class="content">
                        我就爱学习
                    </div>
                </div>
                <div class="icon-box">
                    <div class="iconfont icon-love">
                        &#21845;
                    </div>
                    <div class="love-number">
                        0
                    </div>
                </div>
            </div>
            <div class="item">
                <div class="left">
                    <img src="../../../public/img/author.jpg" class="img" />
                </div>
                <div class="comment-content">
                    <div class="name">
                        张三
                    </div>
                    <div class="content">
                        我就爱学习
                    </div>
                </div>
                <div class="icon-box">
                    <div class="iconfont icon-love">
                        &#21845;
                    </div>
                    <div class="love-number">
                        0
                    </div>
                </div>
            </div>
            <div class="item">
                <div class="left">
                    <img src="../../../public/img/author.jpg" class="img" />
                </div>
                <div class="comment-content">
                    <div class="name">
                        张三
                    </div>
                    <div class="content">
                        我就爱学习
                    </div>
                </div>
                <div class="icon-box">
                    <div class="iconfont icon-love">
                        &#21845;
                    </div>
                    <div class="love-number">
                        0
                    </div>
                </div>
            </div>
            <div class="item">
                <div class="left">
                    <img src="../../../public/img/author.jpg" class="img" />
                </div>
                <div class="comment-content">
                    <div class="name">
                        张三
                    </div>
                    <div class="content">
                        我就爱学习
                    </div>
                </div>
                <div class="icon-box">
                    <div class="iconfont icon-love">
                        &#21845;
                    </div>
                    <div class="love-number">
                        0
                    </div>
                </div>
            </div>
            <div class="item">
                <div class="left">
                    <img src="../../../public/img/author.jpg" class="img" />
                </div>
                <div class="comment-content">
                    <div class="name">
                        张三
                    </div>
                    <div class="content">
                        我就爱学习
                    </div>
                </div>
                <div class="icon-box">
                    <div class="iconfont icon-love">
                        &#21845;
                    </div>
                    <div class="love-number">
                        0
                    </div>
                </div>
            </div>
            <div class="item">
                <div class="left">
                    <img src="../../../public/img/author.jpg" class="img" />
                </div>
                <div class="comment-content">
                    <div class="name">
                        张三
                    </div>
                    <div class="content">
                        我就爱学习
                    </div>
                </div>
                <div class="icon-box">
                    <div class="iconfont icon-love">
                        &#21845;
                    </div>
                    <div class="love-number">
                        0
                    </div>
                </div>
            </div>
        </div>
        <div class="comment-footer">
            <input type="text" placeholder="#留下你精彩评论吧#">
        </div>
    </div>
</template>
<script>
export default {
    name: 'comment',
    methods: {
        close(){
            this.$emit('close')
        }
    }
}
</script>
<style lang="stylus" scoped>
#comment
  background #aaa
  width 100%
  height 10rem
  border-radius .3rem .3rem 0 0
  position relative
.comment-header
  position absolute
  top 0
  left 0 
  width 100%
  height .8rem
  line-height .8rem
.middle
  width 100%
  text-align center
  font-size .3rem
  color #000
.iconclose
  color #000
  float right
  margin-right .3rem
.comment-list
  margin-top .2rem
  height 8rem
  width 100%
  overflow-x hidden
  overflow-y scrolls
  position absolute
  top .5rem
  left 0
  color #000
.item
  height:2rem
  width:100%
.left
  float:left
  width:.8rem
  height:.8rem
  border-radius:50%
  padding:.1rem .3rem
  margin-top:.2rem
.img
  width:.8rem
  height:.8rem
  border-radius:50%
.comment-content
  float:left
  width:70%
  height:1rem
  margin-top:.2rem
.name
  width:100%
  height:.5rem
  line-height:.5rem
  font-size:.35rem				
.content
  width:100%
  height:.5rem
  line-height:.5rem
  font-size:.28rem
.icon-box
  float:right
  width:10%
  height:1rem
  text-align:center
  margin-top:.2rem
.icon-love
  width:100%
  height:.5rem
  font-size:.3rem
  line-height:.5rem
.love-number
  width:100%
  height:.5rem
  font-size:.3rem
  line-height:.5rem
.comment-footer
  height:1rem
  width:100%
  line-height:1rem
  font-size:.45rem
  color:#666
  position:absolute
  bottom:0
  left:0
  padding-left:.3rem
</style>