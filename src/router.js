import Vue from 'vue';
import Router from 'vue-router';

const Home = () => import(/* webpackChunkName: "about" */ './views/Home/Home.vue');
const Settings = () => import(/* webpackChunkName: "about" */ './views/Settings/Settings.vue');
const Login = () => import(/* webpackChunkName: "about" */ './views/Login/Login.vue');

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/settings',
      name: 'settings',
      component: Settings,
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
});
