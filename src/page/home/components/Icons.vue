<template>
  <div class="icons">
    <swiper>
      <swiper-slide v-for="(page,index) in pages" :key='index'>
        <div class="icon" v-for="icon in page" :key='icon.ctx'>
          <div class="icon-img">
            <img class="icon-img-content" :src="icon.imgUrl" alt="">
          </div>
          <p class="icon-desc">{{icon.ctx}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
export default{
  name: 'icons',
  data () {
    return {
      iconsList: [
        {
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
          ctx: '景点门票'
        }, {
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
          ctx: '必游榜单'
        }, {
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/6a/45f595250c73d102.png',
          ctx: '夏日玩水'
        }, {
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
          ctx: '一日游'
        }, {
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png',
          ctx: '动植物园'
        }, {
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/6c/9e54a8540fee0102.png',
          ctx: '故宫'
        },
        {
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/47/c2b659e048b11602.png',
          ctx: '主题乐园'
        }, {
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/ed/cf572be30fc32f02.png',
          ctx: 'Q+精选'
        }, {
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/ed/cf572be30fc32f02.png',
          ctx: 'Q+精选'
        }
      ]
    }
  },
  computed: {
    pages () {
      const pages = []
      this.iconsList.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>
<style lang="scss" scoped>
@import '~@/assets/styles/mixin.scss';
@import '~@/assets/styles/varibles.scss';
.icon /deep/ .swiper-container {
  height: 0;
  padding-bottom: 50%;
}
.icons {
  margin-top: 0.1rem;

  .icon {
    position: relative;
    overflow: hidden;
    float: left;
    width: 25%;
    height: 0;
    padding-bottom: 25%;
    .icon-img {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0.44rem;
      box-sizing: border-box;
      padding: 0.1rem;
      .icon-img-content {
        display: block;
        height: 100%;
        margin: 0 auto;
      }
    }
    .icon-desc {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      height: 0.44rem;
      line-height: 0.44rem;
      text-align: center;
      color: $darkTextColor;
      @include ellipsis;
    }
  }
}
</style>
