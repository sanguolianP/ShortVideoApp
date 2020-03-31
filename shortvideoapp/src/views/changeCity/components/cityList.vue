<template>
    <div id="cityList" ref="wrapper">
        <div class="city-box">
            <div class="box">
                <div class="title">
                    当前城市
                </div>
                <div class="list">
                    <div class="city-name">
                        {{this.$store.state.tcity}}
                    </div>
                </div>
            </div>
            <div class="box">
                <div class="title">
                    热门城市
                </div>
                <div class="list">
                    <div class="city-name">
                        上海
                    </div>
                    <div class="city-name">
                        深圳
                    </div>
                    <div class="city-name">
                        广州
                    </div>
                    <div class="city-name">
                        杭州
                    </div>
                </div>
            </div>
            <div class="box" 
                v-for="(city,index) of cities" 
                :key="index"
                :ref="city.initial"
                >
                <div class="initial">
                    {{city.initial}}
                </div>
                <div class="item" 
                    v-for="(item,subindex) of city.list"
                    :key="subindex"
                    @click="getCity"
                    >
                    {{item.name}}
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Bscroll from 'better-scroll'
export default {
    name: 'cityList',
    props: ['cities','letter'],
    mounted () {
        this.scroll = new Bscroll(this.$refs.wrapper,{
            click:true
        })
    },
    watch: {
        letter () {
            const element = this.$refs[this.letter][0]
            this.scroll.scrollToElement(element)
        }
    },
    methods: {
        getCity (e) {
            const city = e.target.innerText
            this.$store.dispatch('changeCity',city)
            this.scroll.scrollTo(0,0,800)
        }
    }
}
</script>
<style scoped lang="stylus">
#cityList
  width 100%
  background #000
  color #fff
.city-box
  position absolute
  top .8rem
  left 0
  width 100%
  background #000
.box
  background #222
  margin-top .2rem
.title
  height .8rem
  line-height .8rem
  margin-left .3rem
.list
  width 100%
  overflow hidden
.city-name
  width 30%
  height .5rem
  line-height .5rem
  font-size .3rem
  float left
  background #333
  margin-left 2.5%
  margin-bottom .2rem
  text-align center
.initial
  height .5rem
  line-height .5rem
  background #000
  padding-left .2rem 
.item
  height .8rem
  line-height .8rem
  padding-left .2rem 
</style>