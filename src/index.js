import Vue from 'vue'
import App from './app.vue'

// import './assets/styles/test.css'
// import './assets/images/sicon.png'

// import './assets/styles/test-stylus.styl'
// import './assets/styles/global.styl' // 这行可以单独出来style.css
const root = document.createElement('div')
document.body.appendChild(root)


new Vue({
  render: (h) => h(App)
}).$mount(root)