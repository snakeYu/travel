<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide v-for="imgObj in swiperList" :key='imgObj.id'>
        <img class="swiper-img" :src="imgObj.imgUrl" alt="">
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
export default{
  name: 'carrousel',
  props: ['swiperList'],
  data () {
    return {
      swiperOption: {
        // 显示小圆点
        pagination: {
          el: '.swiper-pagination'
        },
        loop: true
      }
      // swiperList: [
      //   {
      //     id: '0001',
      //     imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/bd/8e4a1c3f470d3702.jpg_750x200_f1f0a8c7.jpg'
      //   }, {
      //     id: '0002',
      //     imgUrl: 'http://img1.qunarzz.com/piao/fusion/1806/56/d939255eab633a02.jpg_750x200_c08a2c07.jpg'
      //   }
      // ]
    }
  }
}
</script>
<style lang="scss" scoped>
// 小圆点的颜色
.wrapper /deep/ .swiper-pagination-bullet-active {
  background: #fff;
}
.wrapper {
  width: 100%;
  height: 0;
  overflow: hidden;
  padding-bottom: 27.25%;
}
.swiper-img {
  width: 100%;
  vertical-align: bottom;
}
</style>
