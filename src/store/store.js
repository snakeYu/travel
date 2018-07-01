import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 对浏览器进行兼容处理，有的浏览器不支持localStorage
let defaultCity = '上海'
try {
  if (localStorage.city) {
    defaultCity = localStorage.city
  }
} catch (e) {}

const store = new Vuex.Store({
  state: {
    city: defaultCity
  },
  getters: {
    getCity (state) {
      return state.city
    }
  },
  mutations: {
    setCity (state, city) {
      state.city = city
      try {
        localStorage.city = city
      } catch (e) {}
    }
  },
  actions: {}
})
export default store
