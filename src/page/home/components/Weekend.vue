<template>
  <div>
    <div class="weekend-title">周末去处</div>
    <ul>
      <li v-for="item in itemsList" :key='item.id'>
        <div class="item-img-wrapper">
          <img :src="item.imgUrl" alt="" class="item-img">
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default{
  name: 'weekend',
  data () {
    return {
      itemsList: [
        {
          id: '001',
          imgUrl: 'http://img1.qunarzz.com/sight/source/1505/aa/7baaf8a851d221.jpg_r_640x214_1431200f.jpg',
          title: '北京必游TOP10',
          desc: '来北京必去的景点非这些地方莫属'
        }, {
          id: '002',
          imgUrl: 'http://img1.qunarzz.com/sight/source/1505/9e/21df651e19af5d.jpg_r_640x214_3ea5bb38.jpg',
          title: '寻找北京的皇城范儿',
          desc: '数百年的宫廷庙宇，至今依旧威严霸气'
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
@import '~@/assets/styles/mixin.scss';
.weekend-title {
  line-height: 0.8rem;
  background-color: #eeeeee;
  text-indent: 0.2rem;
  margin-top: 0.1rem;
}
.title {
  margin-top: 0.2rem;
  line-height: 0.8rem;
  background-color: #eeeeee;
  text-indent: 0.2rem;
}
.item-img-wrapper {
  overflow: hidden;
  height: 0;
  padding-bottom: 33.9%;
  .item-img {
    width: 100%;
  }
}
.item-info {
  padding: 0.1rem;
  .item-title {
    line-height: 0.54rem;
    font-size: 0.32rem;
    @include ellipsis();
  }
  .item-desc {
    line-height: 0.4rem;
    color: #999;
    @include ellipsis();
  }
}
</style>
