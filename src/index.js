import Vue from 'vue'
import VueRouter from 'vue-router'
import store from './store/store'
import App from './app.vue'

import './assets/styles/global.styl'
import createRouter from './config/router'
import Notification from './components/notification'
import Tabs from './components/tabs'

Vue.use(VueRouter)
Vue.use(Notification)
Vue.use(Tabs)

const router = createRouter()

router.beforeEach((to, from, next) => {
  console.log('before each')
  next()
})

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#root')
