<template>
  <div>
    <div class="recommend-title">热门推荐</div>
    <ul>
      <li class="item border-bottom" v-for='item in itemsList' :key='item.id'>
        <img :src="item.imgUrl" alt="" class="item-img">
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default{
  name: 'recommend',
  data () {
    return {
      itemsList: [
        {
          id: '0001',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1609/7a/7ae8ee7831836095a3.water.jpg_200x200_36727f69.jpg',
          title: '大连圣亚海洋世界',
          desc: '浪漫大连首站，浪漫的海洋主题乐园'
        }, {
          id: '0002',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1803/12/126471e0966aca5ba3.img.jpg_200x200_f1286016.jpg',
          title: '北京国际鲜花港',
          desc: '种类繁多的花儿，围绕着你'
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
@import '~@/assets/styles/mixin.scss';
.recommend-title {
  line-height: 0.8rem;
  background-color: #eeeeee;
  text-indent: 0.2rem;
  margin-top: 0.1rem;
}
.item {
  display: flex;
  overflow: hidden;
  height: 1.9rem;
  .item-img {
    width: 1.7rem;
    height: 1.7rem;
    padding: 0.1rem;
  }
  .item-info {
    flex: 1;
    padding: 0.1rem;
    // 超出文本省略小技巧
    min-width: 0;
  }
  .item-title {
    line-height: 0.54rem;
    font-size: 0.32rem;
    @include ellipsis();
  }
  .item-desc {
    line-height: 0.4rem;
    color: #444;
    @include ellipsis();
  }
  .item-button {
    line-height: 0.44rem;
    background-color: #ff9300;
    margin-top: 0.16rem;
    padding: 0 0.2rem;
    border-radius: 0.6rem;
    color: #fff;
  }
}
</style>
