<template>
  <div>
    <home-header :city='city'></home-header>
    <home-swiper :swiperList='swiperList'></home-swiper>
    <home-icons :iconList='iconList'></home-icons>
    <home-recommend :recommendList='recommendList'></home-recommend>
    <home-weekend :weekendList='weekendList'></home-weekend>
  </div>
</template>
<script>
import HomeIcons from './components/Icons'
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'
export default{
  name: 'Home',
  components: {
    HomeHeader, HomeSwiper, HomeIcons, HomeRecommend, HomeWeekend
  },
  created () {
    this.getHomeInfo()
  },
  data () {
    return {
      city: '',
      swiperList: [],
      recommendList: [],
      weekendList: [],
      iconList: []
    }
  },
  methods: {
    getHomeInfo () {
      this.axios.get('api/index.json').then(res => {
        res = res.data
        console.log(res)
        if (res.ret && res.data) {
          const data = res.data
          this.city = data.city
          this.swiperList = data.swiperList
          this.recommendList = data.recommendList
          this.weekendList = data.weekendList
          this.iconList = data.iconList
        }
      })
    }
  }
}
</script>
<style>
</style>
