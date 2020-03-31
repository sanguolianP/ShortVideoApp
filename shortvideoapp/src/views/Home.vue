<template>
  <div class="home">
    <navigation></navigation>
    <router-view/>
  </div>
</template>

<script>
import Navigation from './components/navigation.vue'
export default {
  name: 'home',
  components: {
    Navigation
  }
}
</script>

<style scoped lang="stylus">
.home
  height :100%
</style>
