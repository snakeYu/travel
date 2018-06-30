<template>
  <div class="header">
    城市选择
    <router-link to='/' class="iconfont header-back">&#xe624;</router-link>
  </div>
</template>
<script>
export default{
  name: 'cityHeader'
}
</script>
<style lang="scss" scoped>
@import '~@/assets/styles/varibles.scss';
.header {
  overflow: hidden;
  height: $headerHeight;
  line-height: $headerHeight;
  text-align: center;
  color: #fff;
  background-color: $bgColor;
  font-size: 0.32rem;
  .header-back {
    float: left;
    width: 0.64rem;
    color: inherit;
    text-align: center;
    font-size: 0.4rem;
  }
}
</style>
