<template>
    <div id="message">
        <message-header></message-header>
        <message-content></message-content>
        <message-list></message-list>
    </div>
</template>
<script>
import messageHeader from './components/messageHeader'
import messageContent from './components/messageContent'
import messageList from './components/messageList'
export default {
  name: 'message',
  components: {
      messageHeader,
      messageContent,
      messageList
  }
}
</script>
<style lang="stylus" scoped>
</style>