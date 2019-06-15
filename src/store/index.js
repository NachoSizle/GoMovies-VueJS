import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import CommonStore from '@/store/modules/common/index';
import MoviesStore from '@/store/modules/userMovies/index';

export default new Vuex.Store({
  modules: {
    common: CommonStore,
    userMovies: MoviesStore
  }
});
