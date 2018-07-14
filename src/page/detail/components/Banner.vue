<template>
  <div>
    <div class="banner" @click='handleBannerClick'>
      <img src="//img1.qunarzz.com/sight/p0/1609/7a/7ae8ee7831836095a3.water.jpg_600x330_5d562f69.jpg" alt="" class="banner-img">
      <div class="banner-info">
        <div class='banner-title'>金海湖风景区（AAA景区）</div>
        <div class='banner-number'>
          <span class="iconfont banner-icon">&#xe692;</span> 39
        </div>
      </div>
    </div>
    <common-gallary :imgs='imgs' v-show='showGallary' @close='handleGallaryClose' />
  </div>
</template>
<script>
import CommonGallary from 'common/gallary/Gallary'
export default{
  name: 'banner',
  components: {
    CommonGallary
  },
  methods: {
    handleBannerClick () {
      this.showGallary = true
    },
    handleGallaryClose () {
      this.showGallary = false
    }
  },
  data () {
    return {
      showGallary: false,
      imgs: [
        'http://img1.qunarzz.com/sight/p0/1507/5d/87b21344892ce3493920b8eb46794337.water.jpg_r_800x800_d60d1d3b.jpg', 'http://img1.qunarzz.com/sight/p0/1606/a7/a7d6ecdcf11a272fb4.water.jpg_r_800x800_257d0e5a.jpg'
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.banner {
  position: relative;
  overflow: hidden;
  height: 0;
  padding-bottom: 55%;

  .banner-img {
    width: 100%;
  }
  .banner-info {
    display: flex;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    line-height: 0.6rem;
    color: #fff;
    background-image: linear-gradient(
      top,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0.8)
    );
    .banner-title {
      flex: 1;
      font-size: 0.32rem;
      padding: 0 0.2rem;
    }
    .banner-number {
      height: 0.32rem;
      line-height: 0.32rem;
      padding: 0 0.4rem;
      margin-top: 0.14rem;
      border-radius: 0.2rem;
      background-color: rgba(0, 0, 0, 0.8);
      font-size: 0.24rem;
      .banner-icon {
        font-size: 0.24rem;
      }
    }
  }
}
</style>
