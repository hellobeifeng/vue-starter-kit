import Vue from 'vue'
import VueCookie from 'vue-cookie'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router'
import store from './store/store'
import App from './app.vue'
import bus from './util/bus'

import './assets/styles/global.styl'
import './assets/styles/index.styl'

// 两个自定义组件
import Notification from './components/notification'
import Tabs from './components/tabs'

Vue.use(VueCookie)
Vue.use(ElementUI)

bus.$on('auth', () => {
  router.push('/login')
})

Vue.use(Notification)
Vue.use(Tabs)

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#root')