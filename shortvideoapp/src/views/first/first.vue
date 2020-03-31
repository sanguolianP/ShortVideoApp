<template>
    <div id="first">
      <first-header></first-header>
      <router-view />
    </div>
</template>

<script>
import firstHeader from './components/firstHeader'
export default {
  name: 'first',
  components: {
    firstHeader
  }
}
</script>

<style scoped lang="stylus">
#first
  height :100%
  color :#fff
</style>
