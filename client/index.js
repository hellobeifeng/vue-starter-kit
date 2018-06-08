import Vue from 'vue'
import VueRouter from 'vue-router'
import store from './store/index'
import App from './app.vue'
import './assets/styles/global.styl'
import createRouter from './config/router'

Vue.use(VueRouter)
const router = createRouter()

router.beforeEach((to, from, next) => {
  console.log('before each invoked')
  next()
  // if (to.fullPath === '/todo') {
  //   next({ path: '/test' })
  // } else {
  //   next()
  // }
})

router.beforeResolve((to, from, next) => {
  console.log('before resolve invoked')
  next()
})

router.afterEach((to, from) => {
  console.log('after each invoked')
})

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#root')
