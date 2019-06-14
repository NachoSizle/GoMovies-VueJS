import Header from '@/components/Header/Header.vue';
import TabBar from '@/components/TabBar/TabBar.vue';

import { mapGetters } from 'vuex'

export default {
  name: 'App',
  components: {
    Header,
    TabBar
  },
  computed: {
    ...mapGetters({
      isLogged: 'common/isLogged'
    }),
    showHeader: (state) => {
      let routeName = state.$route.name
      let headerAvailableIn = ['home']
      return state.isLogged && headerAvailableIn.indexOf(routeName) !== -1
    }
  }
}
