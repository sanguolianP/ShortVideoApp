<template>
    <div id="changeCity">
        <change-header></change-header>
        <city-list :letter="letter" :cities="cities"></city-list>
        <city-alphabet @chooseLetter="chooseLetter" :cities="cities"></city-alphabet>
    </div>
</template>
<script>
import axios from 'axios'
import changeHeader from './components/changeHeader'
import cityList from './components/cityList'
import cityAlphabet from './components/cityAlphabet'
export default {
    name: 'changeCity',
    components: {
        changeHeader,
        cityList,
        cityAlphabet
    },
    data () {
        return {
            cities: [],
            letter: ''
        }
    },
    mounted () {
        this.getCity()
    },
    methods: {
        chooseLetter (letter) {
            this.letter = letter
        },
        getCity () {
          axios.get('/api/mock/city.json')
          .then(this.getCitySucc)
        },
        getCitySucc (res) {
            this.cities = res.data.city
        }
    }
}
</script>
<style scoped lang="stylus">
</style>