import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import CommonStore from '@/store/modules/common/index';

export default new Vuex.Store({
  modules: {
    common: CommonStore
  }
});
