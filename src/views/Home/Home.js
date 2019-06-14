import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Home',
  methods: {
    ...mapActions(
      'movies', [
        'setMovies'
      ]
    )
  },
  computed: {
    ...mapGetters({
      userId: 'common/userId',
      userMovies: 'movies/userMovies'
    })
  },
  created () {
    let vm = this
    vm.$fbServices.Movies.getUserMovies(vm.userId)
      .then(res => {
        console.debug(res)
        vm.setMovies(res)
      })
      .catch(err => {
        console.debug(err)
      })
  }
}
