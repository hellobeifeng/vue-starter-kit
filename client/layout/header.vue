<template>
  <header class="main-header">
    【假装我是一个导航栏- 模拟vue-router】
    <router-link :to="{name: 'todo'}" class="link">app</router-link>
    <router-link to="/test" class="link">test</router-link>
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
