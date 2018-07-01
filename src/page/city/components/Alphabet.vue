<template>
  <ul class="list">
    <li class="item" v-for="kw in letters" :key='kw' :ref='kw' @touchstart='handleTouchStart' @touchmove='handleTouchMove' @touchend='handleTouchEnd' @click="handleLetterClick">{{kw}}</li>

  </ul>
</template>
<script>
export default{
  name: 'cityAlpabet',
  props: ['cities'],
  data () {
    return {
      touchStatus: false,
      startY: 0,
      timer: null
    }
  },
  updated () {
    this.startY = this.$refs['A'][0].offsetTop
  },
  computed: {
    letters () {
      let letters = []
      for (let i in this.cities) {
        letters.push(i)
      }
      return letters
    }
  },
  methods: {
    handleLetterClick (e) {
      this.$emit('change', e.target.innerText)
    },
    handleTouchStart () {
      this.touchStatus = true
    },
    handleTouchMove (e) {
      if (this.touchStatus) {
        if (this.timer) {
          clearTimeout(this.timer)
        } else {
          // 事件节流
          this.timer = setTimeout(() => {
            // A到header的距离
            // const startY = this.$refs['A'][0].offsetTop
            // 手指在页面上的距离-header的高度
            const touchY = e.touches[0].clientY - 79
            // 获取当前手指所在位置的文字下标
            const index = Math.floor((touchY - this.startY) / 20)
            if (index >= 0 && index < this.letters.length) {
              this.$emit('change', this.letters[index])
            }
          }, 16)
        }
      }
    },
    handleTouchEnd () {
      this.touchStatus = false
    }
  }
}
</script>
<style lang="scss" scoped>
@import '~@/assets/styles/varibles.scss';
.list {
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  right: 0;
  top: 1.58rem;
  bottom: 0;
  width: 0.4rem;
  color: $bgColor;
  .item {
    text-align: center;
    line-height: 0.4rem;
  }
}
</style>
