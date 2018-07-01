<template>
  <div>
    <city-header></city-header>
    <city-search :cities='cities'></city-search>
    <city-list :hotCities='hotCities' :cities='cities' :letter='letter'></city-list>
    <city-alphabet :cities='cities' @change='handleLetterChange'></city-alphabet>
  </div>
</template>
<script>
import CityHeader from './components/Header'
import CitySearch from './components/Search'
import CityList from './components/List'
import CityAlphabet from './components/Alphabet'
export default{
  name: 'city',
  components: {
    CityHeader, CitySearch, CityList, CityAlphabet
  },
  methods: {
    handleLetterChange (letter) {
      this.letter = letter
    }
  },
  data () {
    return {
      hotCities: [],
      cities: {},
      letter: ''
    }
  },
  created () {
    this.axios.get('/api/city.json').then(res => {
      res = res.data
      if (res.ret && res.data) {
        this.hotCities = res.data.hotCities
        this.cities = res.data.cities
      }
    })
  }
}
</script>
<style lang="scss" scoped>
</style>
