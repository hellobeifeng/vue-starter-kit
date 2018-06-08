<template>
  <div id="app1">
    <div id="cover"></div>
    <Header></Header>
    <todo></todo>
  </div>
</template>

<script>
import Header from '@/layout/header'
import Todo from './todo.vue'
export default {
  components: {
    Header,
    Todo
  }
}
</script>

<style lang="stylus" scoped>
#app1{
  position absolute
  left 0
  right 0
  top 0
  bottom 0
  #cover{
    position absolute
    left 0
    top 0
    right 0
    bottom 0
    background-color #999
    opacity .6
    z-index -1
  }
}
</style>
