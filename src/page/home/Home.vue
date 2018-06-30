<template>
  <div>
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-icons></home-icons>
  </div>
</template>
<script>
import HomeIcons from './components/Icons'
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
export default{
  name: 'Home',
  components: {
    HomeHeader, HomeSwiper, HomeIcons
  }
}
</script>
<style>
</style>
