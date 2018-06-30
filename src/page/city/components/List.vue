<template>
  <div class="list" ref='wrapper'>
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div class="button-wrapper" v-for='city in hotCities' :key='city.id'>
            <div class="button">{{city.name}}</div>
          </div>

        </div>
      </div>
      <div class="area" v-for='(group,kw) of cities' :key='kw'>
        <div class="title border-topbottom">{{kw}}</div>
        <div class="item-list">
          <div class="item border-bottom" v-for="item in group" :key='item.id'>{{item.name}}</div>

        </div>
      </div>

    </div>
  </div>
</template>
<script>
import Bscroll from 'better-scroll'
export default{
  props: ['cities', 'hotCities'],
  name: 'cityList',
  mounted () {
    this.scroll = new Bscroll(this.$refs.wrapper)
  }
}
</script>
<style lang="scss" scoped>
@import '~@/assets/styles/varibles.scss';
.border-topbottom {
  &:before,
  &:after {
    border-color: #ccc;
  }
}
.border-bottom {
  &:before {
    border-color: #ccc;
  }
}
.list {
  overflow: hidden;
  position: absolute;
  top: 1.58rem;
  bottom: 0;
  left: 0;
  right: 0;
  .title {
    line-height: 0.54rem;
    background-color: #eee;
    padding-left: 0.2rem;
    color: #666;
    font-size: 0.26rem;
  }
  .button-list {
    padding: 0.1rem;
    padding: 0.1rem 0.6rem 0.1rem 0.1rem;
    overflow: hidden;
    .button-wrapper {
      float: left;
      width: 33.33%;
      .button {
        margin: 0.1rem;
        padding: 0.1rem 0;
        text-align: center;
        border: 0.02rem solid #ccc;
        border-radius: 0.06rem;
      }
    }
  }
  .item-list {
    .item {
      line-height: 0.76rem;
      padding-left: 0.2rem;
    }
  }
}
</style>
