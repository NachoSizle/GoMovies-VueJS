import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import CommonStore from '@/store/modules/common/index';
import MoviesStore from '@/store/modules/userMovies/index';
import SeriesStore from '@/store/modules/userSeries/index';

export default new Vuex.Store({
  modules: {
    common: CommonStore,
    userMovies: MoviesStore,
    userSeries: SeriesStore
  }
});
