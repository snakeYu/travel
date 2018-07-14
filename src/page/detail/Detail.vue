<template>
  <div class="detail">
    <detail-banner></detail-banner>
    <detail-header />
    <div class="content">
      <detail-list :list='list' />
    </div>
  </div>
</template>
<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'
export default{
  name: 'detail',
  components: {
    DetailBanner, DetailHeader, DetailList
  },
  data () {
    return {
      list: [
        {
          title: '成人票',
          children: [
            {
              title: '承认三馆联票'
            }, {
              title: '成人五馆联票'
            }
          ]
        },
        {
          title: '学生票'
        },
        {
          title: '儿童票'
        },
        {
          title: '特惠票'
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.content {
  height: 20rem;
}
</style>
