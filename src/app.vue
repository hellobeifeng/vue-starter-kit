<template>
  <div id="app">
    <router-link to="/app" class="link">app</router-link>
    <router-link to="/test" class="link">test</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from './layout/header.vue'
import Todo from './views/todo/todo.vue'
export default {
  components: {
    Header,
    Todo
  }
}
</script>

<style lang="stylus" scoped>

</style>
