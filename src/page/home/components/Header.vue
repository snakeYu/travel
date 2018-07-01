<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      输入城市/景点/游玩主题
    </div>
    <router-link to="/city" tag='div'>
      <div class="header-right">
        {{this.$store.getters.getCity}}
        <span class="iconfont arrow-icon">&#xe64a;</span>
      </div>
    </router-link>
  </div>
</template>
<script>
export default{
  name: 'Header'
}
</script>
<style lang="scss" scoped>
@import '~@/assets/styles/varibles.scss';
.header {
  display: flex;
  line-height: $headerHeight;
  color: #fff;
  background-color: $bgColor;
  .header-left {
    width: 0.6rem;
    float: left;
    text-align: center;
    .back-cion {
      font-size: 0.4rem;
    }
  }

  .header-input {
    flex: 1;
    height: 0.64rem;
    line-height: 0.64rem;
    margin-top: 0.12rem;
    margin-left: 0.2rem;
    padding-left: 0.2rem;
    background-color: #fff;
    border-radius: 0.1rem;
    color: #ccc;
  }

  .header-right {
    min-width: 1.04rem;
    padding: 0.1rem;
    float: right;
    text-align: center;
    color: #fff;
    .arrow-icon {
      margin-left: -0.04rem;
      font-size: 0.24rem;
    }
  }
}
</style>
