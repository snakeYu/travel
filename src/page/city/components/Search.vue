<template>
  <div>
    <div class="search">
      <input type="text" v-model='kw' class="search-input" placeholder="输入城市名或拼音">
    </div>
    <div class="search-content" v-show='kw' ref='search'>
      <ul>
        <li v-for='item of list' class="search-item border-bottom" :key='item.id'>
          {{item.name}}
        </li>
        <li class="search-item border-bottom" v-show='hasNoData'>没有找到匹配数据</li>
      </ul>
    </div>
  </div>
</template>
<script>
import Bscroll from 'better-scroll'
export default{
  name: 'citySearch',
  props: ['cities'],
  data () {
    return {
      kw: '',
      list: [],
      timer: null
    }
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.search)
  },
  computed: {
    hasNoData () {
      return !this.list.length
    }
  },
  watch: {
    kw () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (!this.kw) {
        this.list = []
        return
      }
      this.timer = setTimeout(() => {
        const result = []
        for (let i in this.cities) {
          this.cities[i].forEach((value) => {
            if (value.spell.indexOf(this.kw) > -1 || value.name.indexOf(this.kw) > -1) {
              result.push(value)
            }
          })
        }
        this.list = result
      }, 100)
    }
  }
}
</script>
<style lang="scss" scoped>
@import '~@/assets/styles/varibles.scss';
.search {
  height: 0.72rem;
  padding: 0 0.1rem;
  background-color: $bgColor;
  .search-input {
    box-sizing: border-box;
    height: 0.62rem;
    line-height: 0.62rem;
    width: 100%;
    text-align: center;
    border-radius: 0.06rem;
    color: #666;
    padding: 0 0.1rem;
  }
}
.search-content {
  z-index: 1;
  overflow: hidden;
  position: absolute;
  top: 1.58rem;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: #eee;
  .search-item {
    line-height: 0.62rem;
    padding-left: 0.2rem;
    background-color: #fff;
    color: #666;
  }
}
</style>
