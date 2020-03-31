<template>
    <div id="personal">
      <info :user="user"></info>
      <keep-alive>
        <router-view :key="$route.fullPath" />
      </keep-alive>
    </div>
</template>
<script>
import info from './components/info.vue'
export default {
  name: 'personal',
  components: {
    info
  },
  props: ['user'],
}
</script>
<style lang="stylus" scoped>
#personal
  color #fff
</style>