<template>
  <div id="app">
    <div id="cover"></div>
    <div id="loading" v-show="loading">
      <loading></loading>
    </div>
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import Loading from './components/loading/loading.vue'
export default {
  metaInfo: {
    title: 'vue脚手架'
  },
  methods: {
    // ...mapActions(['updateCountAsync']),
    // ...mapMutations(['updateCount']),
    notify () {
      this.$notify({
        content: 'test $notify',
        btn: 'close'
      })
    }
  },
  components: {
    Loading
  },
  mounted () {},
  computed: {
    ...mapState(['loading'])
  }
}
</script>

<style lang="stylus" scoped>
</style>
