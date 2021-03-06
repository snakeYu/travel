// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import store from './store/store'
// 支持promise
import 'babel-polyfill'
// 轮播图
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
// 300毫秒延迟的问题
import fastClick from 'fastclick'
// css reset
import '@/assets/styles/reset.css'
// css border 1px 问题解决方式
import '@/assets/styles/border.css'
// 字体图标
import '@/assets/styles/iconfont.css'
Vue.prototype.axios = axios
Vue.use(VueAwesomeSwiper)
fastClick.attach(document.body)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
})
