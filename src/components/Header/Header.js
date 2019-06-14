import Tab from '@/components/Tab/Tab.vue';

export default {
  name: 'Header',
  components: {
    Tab
  },
  data: function () {
    return {
      tabs: [
        {
          id: 0,
          title:'',
          to: '/',
          icon: 'search-solid'
        }
      ]
    }
  }
}