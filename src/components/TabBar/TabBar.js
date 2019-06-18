import Tab from '@/components/Tab/Tab.vue';

export default {
  name: 'TabBar',
  components: {
    Tab
  },
  data: function () {
    return {
      tabs: [
        {
          id: 0,
          title: 'Home',
          to: '/',
          icon: 'star-regular',
        },
        {
          id: 1,
          title: 'Search',
          to: '/search',
          icon: 'search'
        },
        {
          id: 2,
          title: 'Settings',
          to: '/settings',
          icon: 'settings'
        }
      ]
    }
  }
}