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
          icon: 'igloo-solid',
        },
        {
          id: 1,
          title: 'Settings',
          to: '/settings',
          icon: 'user-cog-solid'
        }
      ]
    }
  }
}