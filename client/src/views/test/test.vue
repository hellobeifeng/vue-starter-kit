<template>
  <div>
    <p>{{ proxycontent }}}</p>
  </div>
</template>

<script>
import {
  mapActions
} from 'vuex'
export default {
  metaInfo: {
    title: 'test Page'
  },
  data () {
    return {
      proxycontent: ''
    }
  },
  mounted () {
    this.testProxy()
      .then((data) => {
        this.proxycontent = data
      })
  },
  methods: {
    ...mapActions(['testProxy'])
  }
}
</script>

<style lang="stylus" scoped>

</style>
