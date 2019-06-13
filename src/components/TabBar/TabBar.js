import Tab from './components/Tab/Tab.vue';

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
          title:'Home',
          to: '/'
        },
        {
          id: 1,
          title:'Settings',
          to: '/'
        }
      ]
    }
  }
}