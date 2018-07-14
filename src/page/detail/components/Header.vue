<template>
  <div class="header">
    <router-link to='/' class="header-abs" v-show='showAbs'>
      <div class="iconfont header-abs-back">&#xe624;</div>
    </router-link>
    <div class="header-fixed" v-show='!showAbs' :style='opacityStyle'>
      <router-link to="/">
        <div class="iconfont header-fixed-back">&#xe624;</div>
      </router-link>
      景点详情
    </div>
  </div>
</template>
<script>
export default{
  name: 'detailHeader',
  data () {
    return {
      showAbs: true,
      opacityStyle: {
        opactiy: 0
      }
    }
  },
  methods: {
    handleScroll () {
      let top = document.documentElement.scrollTop
      if (top > 60) {
        let opacity = top / 140
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle = { opacity }
        this.showAbs = false
      } else {
        this.showAbs = true
      }
    }
  },
  activated () {
    // 这里是全局方法，离开这个页面即要解绑
    window.addEventListener('scroll', this.handleScroll)
  },
  deactivated () {
    // keep-alive组件停用时被调用
    // 页面被隐藏或被替换的时候触发
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>
<style lang="scss" scoped>
@import '~@/assets/styles/varibles.scss';
.header-abs {
  position: absolute;
  left: 0.2rem;
  top: 0.2rem;
  width: 0.8rem;
  height: 0.8rem;
  line-height: 0.8rem;
  border-radius: 0.4rem;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.8);
  .header-abs-back {
    color: #fff;
    font-size: 0.4rem;
  }
}
.header-fixed {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: $headerHeight;
  line-height: $headerHeight;
  text-align: center;
  color: #fff;
  background-color: $bgColor;
  font-size: 0.32rem;
  z-index: 3;
  .header-fixed-back {
    float: left;
    width: 0.64rem;
    color: inherit;
    text-align: center;
    font-size: 0.4rem;
  }
}
</style>
