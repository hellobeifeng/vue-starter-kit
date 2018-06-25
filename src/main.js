import Vue from 'vue'
import router from './router'
import store from './store/store'
import App from './app.vue'

import './assets/styles/global.styl'
// import '/assets/styles/index.styl'
// 两个自定义组件
import Notification from './components/notification'
import Tabs from './components/tabs'

Vue.use(Notification)
Vue.use(Tabs)

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#root')
