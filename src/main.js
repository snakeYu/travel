// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 300毫秒延迟的问题
import fastClick from 'fastclick'
// css reset
import './assets/style/reset.css'
// css border 1px 问题解决方式
import './assets/style/border.css'
fastClick.attach(document.body)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
