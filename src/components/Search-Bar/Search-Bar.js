import SearchRow from '@/components/Search-Bar/Row/Row.vue';

export default {
  name: 'Search--Bar',
  data: () => {
    return {
      resultsMedia: []
    }
  },
  components: {
    SearchRow
  },
  methods: {
    search () {
      console.debug('SEARCH')
    } 
  }
}