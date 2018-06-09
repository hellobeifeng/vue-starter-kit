<template>
  <div id="app">
    <Header></Header>
    <transition name="fade">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import Header from './layout/header.vue'
export default {
  metaInfo: {
    title: 'feng\'s ssr app'
  },
  components: {
    Header
  }
}
</script>

<style lang="stylus" scoped>

</style>
