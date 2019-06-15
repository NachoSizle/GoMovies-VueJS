import Avatar from '@/components/Avatar/Avatar.vue';
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'Profile',
  components: {
    Avatar
  },
  data: function () {
    return {
      favoritesSelected: 'userMovies'
    }
  },
  computed: {
    ...mapGetters({
      userId: 'common/userId',
      userMovies: 'userMovies/userMovies',
      userSeries: 'userSeries/userSeries'
    }),
    mediaSelected: (state) => {
      return state[state.favoritesSelected].favorites
    }
  },
  props: {
    userName: {
      required: true,
      type: String
    },
    userEmail: {
      required: false,
      type: String
    },
    userPicture: {
      required: true,
      type: String
    },
    userPictureWidth: {
      required: false,
      type: Number,
      default: '7'
    },
    userPictureHeight: {
      required: false,
      type: Number,
      default: '7'
    }
  },
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
    ),
    selectFavorites (type) {
      this.favoritesSelected = type
    }
  },
  created () {
    let vm = this
    vm.$fbServices.Movies.getUserMovies(vm, vm.userId)
    vm.$fbServices.Series.getUserSeries(vm, vm.userId)
  }
}