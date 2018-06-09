<template>
  <div>
    <h1>脚手架程序 - TODO功能测试</h1>
    <todo></todo>
  </div>
</template>

<script>
import Todo from './todo.vue'
export default {
  metaInfo: {
    title: 'into the todo app'
  },
  beforeRouteEnter (to, from, next) {
    console.log('##todo box before enter')
    // 相同类型的路由重复切换，不会触发这个，只会触发下面的beforeRouteUpdate
    next(vm => {
      console.log('vm', vm)
    })
  },
  beforeRouteUpdate (to, from, next) {
    console.log('##todo update enter')
    // 替代 wtach: {this.$route.id} , /test/:id 形如这样的变换时，会触发 这种情况不会触发mounted
    next()
  },
  beforeRouteLeave (to, from, next) {
    // 用于提醒用户是否确认离开
    console.log('##todo leave enter')
    next()
  },
  components: {
    Todo
  }
}
</script>

<style lang="stylus" scoped>
 h1 {
  text-align center
  font-size 50px
 }
</style>
