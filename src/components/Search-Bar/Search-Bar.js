import SearchRow from '@/components/Search-Bar/Row/Row.vue';

export default {
  name: 'Search--Bar',
  data: () => {
    return {
      onSearching: false,
      searchQuery: '',
      resultsMedia: []
    }
  },
  components: {
    SearchRow
  },
  methods: {
    search () {
      console.debug('SEARCH')
    },
    cancelSearching () {
      this.searchQuery = ''
      this.onSearching = false
    }
  }
}