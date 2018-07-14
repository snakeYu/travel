<template>
  <div class="detail">
    <detail-banner :sightName='sightName' :bannerImg='bannerImg' :bannerImgs='gallaryImgs'></detail-banner>
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
      sightName: '',
      bannerImg: '',
      gallaryImgs: [],
      list: []
    }
  },
  mounted () {
    this.getDetailInfo()
  },
  methods: {
    getDetailInfo () {
      this.axios.get('/api/detail.json', {
        params: {id: this.$route.params.id}
      }).then(this.handleGetDataSucc)
    },
    handleGetDataSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        let data = res.data
        this.sightName = data.sightName
        this.bannerImg = data.bannerImg
        this.gallaryImgs = data.gallaryImgs
        this.list = data.categoryList
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.content {
  height: 20rem;
}
</style>
