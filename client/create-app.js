// 每次创建新的渲染 app
import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'

import App from './app.vue'
import createStore from './store/store'
import createRouter from './config/router'

import './assets/styles/global.styl'

Vue.use(VueRouter)
Vue.use(Vuex)

export default () => {
  const router = createRouter()
  const store = createStore()

  const app = new Vue({
    router,
    store,
    render: h => h(App)
  })

  return { app, router, store }
}
