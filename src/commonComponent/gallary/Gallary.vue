<template>
  <div class="container" @click='handleGallary'>
    <div class="wrapper">
      <swiper :options="swiperOption">

        <swiper-slide v-for='img in imgs' :key='img'>
          <img alt="" class='gallary-img' :src='img'>
        </swiper-slide>

        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>
<script>
export default{
  name: 'gallary',
  props: {
    imgs: {
      type: Array,
      default () {
        return []
      }
    }
  },
  methods: {
    handleGallary () {
      this.$emit('close')
    }
  },
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination',
          type: 'fraction',
          //  解决点击后轮播图无法正常轮播的问题，有下面两个属性，就会自动刷新一次
          observeParents: true,
          observer: true
        }
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.container /deep/ .swiper-container {
  overflow: inherit;
}
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  z-index: 99;
  background-color: #000;
  .wrapper {
    height: 0;
    width: 100%;
    padding-bottom: 100%;
    .gallary-img {
      width: 100%;
    }
    .swiper-pagination {
      color: #fff;
      bottom: -1rem;
    }
  }
}
</style>
