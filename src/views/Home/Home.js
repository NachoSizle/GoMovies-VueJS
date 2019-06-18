import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Home',
  methods: {
    ...mapActions(
      'common', [
        'setSpinnerStatus'
      ]
    ),
    ...mapActions(
      'userMovies', [
        'setMovies'
      ]
    ),
    ...mapActions(
      'userSeries', [
        'setSeries'
      ]
    )
  },
  computed: {
    ...mapGetters({
      userId: 'common/userId',
      userMovies: 'userMovies/userMovies',
      userSeries: 'userSeries/userSeries'
    })
  },
  created () {
    let vm = this
    vm.$fbServices.Movies.getUserMovies(vm, vm.userId)
    vm.$fbServices.Series.getUserSeries(vm, vm.userId)
  }
}
