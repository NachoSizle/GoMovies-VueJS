import Vue from 'vue';
import App from './App/App.vue';
import router from './router';
import store from './store';

// Plugins
import VueSVGIcon from 'vue-svgicon'

Vue.use(VueSVGIcon)

import '@/compiled-icons/igloo-solid';
import '@/compiled-icons/user-cog-solid';
import '@/compiled-icons/search-solid';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
