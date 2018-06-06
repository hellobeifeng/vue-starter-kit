<template>
  <div id="app">
    <Header></Header>
    <todo></todo>
  </div>
</template>

<script>
import Header from '@/layout/header.vue'
import Todo from './todo.vue'
export default {
  components: {
    Header,
    Todo
  }
}
</script>

<style lang="stylus" scoped>
</style>
