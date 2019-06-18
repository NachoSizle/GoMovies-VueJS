export default {
  name: 'Avatar',
  props: {
    source: {
      required: true,
      type: String
    },
    width: {
      required: false,
      type: Number,
      default: '7'
    },
    height: {
      required: false,
      type: Number,
      default: '7'
    }
  }
}