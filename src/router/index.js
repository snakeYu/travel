import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/page/home/Home'
import City from '@/page/city/City'
import Detail from '@/page/detail/Detail'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
    path: '/',
    name: 'Home',
    component: Home
  }, {
    path: '/city',
    component: City,
    name: 'city'
  }, {
    name: 'detail',
    path: '/detail/:id',
    component: Detail
  }]
})
