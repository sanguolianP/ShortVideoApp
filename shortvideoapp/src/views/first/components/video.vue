<template>
    <div id="videos">
        <video-player
              class="video-player-box"
              ref="videoPlayer"
              :options="playerOptions"
              >
        </video-player>
    </div>
</template>

<script>
import { videoPlayer } from 'vue-video-player'

export default {
  name: 'videos',
  props: ['videos', 'index'],
  components: {
    videoPlayer
  },
  data () {
    return {
      state: false,
      playerOptions: {
        controls: false,
        fluid: true,
        muted: false,
        loop: true,
        sources: [{
          type: 'video/mp4',
          src: 'http://127.0.0.1:8181/' + this.videos.videoSrc
          // src: 'http://192.168.0.100:8181/' + this.videos.videoSrc
        }]
        // poster:require('')
      }
    }
  },
  computed: {
    // player () {
    //   return this.$refs.videoPlayer.player
    // }
  },
  methods: {
    judge () {
      if (this.state === false) {
        this.$refs.videoPlayer.player.play()
        this.$refs.videoPlayer.player.volume(0.05)
        this.state = true
      } else {
        this.$refs.videoPlayer.player.pause()
        this.state = false
      }
    },
    changePlay () {
      this.$refs.videoPlayer.player.load()
      this.$refs.videoPlayer.player.play()
      this.$refs.videoPlayer.player.volume(0.05)
      this.state = true
    },
    changeStop () {
      this.$refs.videoPlayer.player.pause()
      this.state = false
    }
  }
}
</script>

<style scoped lang="stylus">
#videos
  height 100%
.video-player-box
  height :100%
  display :flex
  margin :0 auto
  overflow :hidden
  align-items :center
</style>
