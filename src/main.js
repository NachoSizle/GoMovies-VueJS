import Vue from 'vue';
import App from './App/App.vue';
import router from './router';
import store from '@/store/index';

// Plugins
import VueSVGIcon from 'vue-svgicon'

Vue.use(VueSVGIcon)

import '@/compiled-icons/index.js';

import firebase from 'firebase';
import config from '@/settings/firebase-config.js';
firebase.initializeApp(config);
Vue.prototype.$firebase = firebase;

import fbServices from '@/services/firebase/index.js';
Vue.prototype.$fbServices = fbServices;

Vue.config.productionTip = false;

router.beforeEach((to, from, next) => {
  console.debug(to)
  var userAuth = true

  if (to.name === 'login') {
    next()
    return
  }

  var token = localStorage.getItem('token')
  if (!token || token === '') {
    next({ name: 'login' })
    return
  }
  store.dispatch('common/setToken', token)

  let user = localStorage.getItem('user')
  if (user && user !== '') {
    let userParsed = JSON.parse(user)
    store.dispatch('common/setUser', userParsed)
  }

  userAuth = token && token !== ''

  if (to.name === 'login') {
    if (userAuth) {
      next({ name: 'home' })
      return
    }
    next()
    return
  }

  next()
})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
