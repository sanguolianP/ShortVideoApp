<template>
    <div id="cityAlphabet">
        <ul class="list">
            <li class="item" 
                v-for="(item,index) of letter" 
                :key="index"
                @click="click"
                @touchstart="touchStart"
                @touchmove="touchMove"
                @touchend="touchEnd"
                :ref="item"
            >
                {{item}}
                </li>
        </ul>
    </div>
</template>
<script>
export default {
    name: 'cityAlphabet',
    props: ['cities'],
    computed: {
        letter () {
            const letter = []
            for(let i in this.cities){
                letter.push(this.cities[i].initial)
            }
            return letter
        }
    },
    data () {
        return {
            touchStatus: false,
            timer: null
        }
    },
    methods: {
        click (e) {
            this.$emit('chooseLetter',e.target.innerText)
        },
        touchStart () {
            this.touchStatus = true
        },
        touchMove (e) {
            if(this.touchStatus){
                if(this.timer){
                    clearTimeout(this.timer)
                }
                this.timer = setTimeout(()=>{
                    const moveY = e.touches[0].clientY - 175
                    const index = Math.floor(moveY/20)
                    if(index>=0&&index<=this.letter.length){
                        this.$emit('chooseLetter',this.letter[index])
                    }
                },16)
            }
        },
        touchEnd () {
            this.touchStatus = false
        }
    }
}
</script>
<style scoped lang="stylus">
.list
  position fixed
  top 3.5rem
  right 0
  width 1rem
  z-index 20
  color #fff
.item
  line-height .4rem
  text-align center
  padding-left .5rem
</style>