<template>
  <header class="main-header">
    【假装我是一个导航栏- 模拟vue-router】
    <router-link :to="{name: 'todo'}" class="link">app</router-link>
    <router-link to="/test" class="link">test</router-link>
    <router-link to="/todo/123" class="link">t123</router-link>
    <router-link to="/todo/456" class="link">t345</router-link>
  </header>
</template>

<style lang="stylus" scoped>
.main-header{
  text-align center
  margin-top 20px
  margin-bottom 50px;
  font-size: 30px;
}
</style>
