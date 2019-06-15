import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Home',
  methods: {
    ...mapActions(
      'userMovies', [
        'setMovies'
      ]
    )
  },
  computed: {
    ...mapGetters({
      userId: 'common/userId',
      userMovies: 'userMovies/userMovies'
    })
  },
  created () {
    let vm = this
    vm.$fbServices.Movies.getUserMovies(vm, vm.userId)
  }
}
