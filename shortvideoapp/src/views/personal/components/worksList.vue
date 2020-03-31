<template>
    <div id="worksList">
      <router-link to="/player">
        <div class="item"
             v-for="(item,index) of list"
             :key="index"
             >
            <videos :videos="item"></videos>
            <div class="box">
                <span class="iconfont love">
                    &#21845;
                </span>
                <span class="number">
                    666
                </span>
            </div>
        </div>
      </router-link>  
    </div>
</template>
<script>
import videos from '../../first/components/video.vue'
import axios from 'axios'
export default {
  name: 'worksList',
  components: {
      videos
  },
  data () {
      return {
        list: [],
        listname: this.$route.query.listName
      }
  },
  created () {
    this.getVideo()
  },
  methods:{
    getVideo () {
        axios.get('/api/videoinfo/video.json')
        .then(this.getVideoSucc)
    },
    getVideoSucc (res) {
        if(this.listname==="like"){
            this.list = res.data.list.slice(0,6)
        }else{
            this.list = res.data.list.slice(3,6)
        }
        
    }
  }
}
</script>
<style lang="stylus" scoped>
#worksList
  width 100%
  background #000
  overflow hidden
  padding 0 0.5%
.item
  width 33%
  height 3rem
  float left
  position relative
.box
  position absolute
  bottom .1rem
  left .2rem
.love
  font-size .3rem
  color #fff
.number
  font-size .3rem
  color #fff
</style>