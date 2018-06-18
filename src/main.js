import Vue from 'vue'
import router from './router'
import store from './store/store'
import App from './app.vue'

import './assets/styles/global.styl'
// import '/assets/styles/index.styl'
import Notification from './components/notification'
import Tabs from './components/tabs'

Vue.use(Notification)
Vue.use(Tabs)

router.beforeEach((to, from, next) => {
  console.log('before each')
  next()
})

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#root')
