<template>
  <ul class="list">
    <li class="item">A</li>
    <li class="item">B</li>
    <li class="item">C</li>
  </ul>
</template>
<script>
export default{
  name: 'cityAlpabet'
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
