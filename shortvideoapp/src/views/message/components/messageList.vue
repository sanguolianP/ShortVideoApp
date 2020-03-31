<template>
    <div id="messageList">
        <div class="item"
             v-for="(item,index) of list"
             :key="index"
             >
            <div class="author-img">
                <img class="img" src="../../../../public/img/author.jpg" >
            </div>
            <div class="text">
                <div class="top">
                    <div class="name">{{item.name}}</div>
                    <div class="time">{{item.time}}</div>
                </div>
                <div class="content">{{item.content}}</div>
            </div>
        </div>
        <div class="more">没有更多了</div>
    </div>
</template>
<script>

export default {
  name: 'messageList',
  data () {
      return{
          list: [{
              id: 1,
              name: 'lianlian',
              time: '8-1',
              content: 'fieawurhrpoae'
          },{
              id: 2,
              name: 'lianlian1',
              time: '8-2',
              content: 'fieawurhrpoae'
          },{
              id: 3,
              name: 'lianlian2',
              time: '8-3',
              content: 'fieawurhrpoae'
          },{
              id: 4,
              name: 'lianlian3',
              time: '9-1',
              content: 'fieawurhrpoae'
          },
          {
              id: 4,
              name: 'lianlian3',
              time: '9-1',
              content: 'fieawurhrpoae'
          },
          {
              id: 4,
              name: 'lianlian3',
              time: '9-1',
              content: 'fieawurhrpoae'
          },
          {
              id: 4,
              name: 'lianlian3',
              time: '9-1',
              content: 'fieawurhrpoae'
          },
          {
              id: 4,
              name: 'lianlian3',
              time: '9-1',
              content: 'fieawurhrpoae'
          }
          ]
      }
  }
}
</script>
<style lang="stylus" scoped>
#messageList
  background #000
  margin-top .2rem
.item
  height 1.2rem
  padding  .3rem .2rem
  overflow hidden
.author-img
  float left
  width 1rem
  height 1rem
  margin-left .2rem
  border-radius 50%
.img
  width 1rem
  height 1rem
  border-radius 50%
.text
  float left
  margin-left .4rem
  height 1rem
  width 75%
.top
  height .5rem
  overflow hidden
.name
  float left
  font-size .4rem
  color #fff
.time
  float right
  font-size .25rem
  color #999
.content
  height .5rem
  line-height .5rem
  font-size .3rem
  color #999
.more
  width 100%
  height 1rem
  line-height 1rem
  font-size .3rem
  color #999
  text-align center
</style>