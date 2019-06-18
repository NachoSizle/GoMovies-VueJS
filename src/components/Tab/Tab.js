export default {
  name: 'Tab',
  props: {
    data: {
      require: true,
      default: Object
    }
  },
  computed: {
    tabSelected: (state) => {
      return state.data.title.toLowerCase() === state.$route.name
    }
  }
}