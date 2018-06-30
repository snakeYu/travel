<template>
  <div class="search">
    <input type="text" class="search-input" placeholder="输入城市名或拼音">
  </div>
</template>
<script>
export default{
  name: 'citySearch'
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
</style>
