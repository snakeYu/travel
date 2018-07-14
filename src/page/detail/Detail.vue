<template>
  <div class="detail">
    <detail-banner></detail-banner>
    <detail-header />
    <div class="content"></div>
  </div>
</template>
<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
export default{
  name: 'detail',
  components: {
    DetailBanner, DetailHeader
  }
}
</script>
<style lang="scss" scoped>
.content {
  height: 20rem;
}
</style>
