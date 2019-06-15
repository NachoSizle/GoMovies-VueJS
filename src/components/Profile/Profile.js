import Avatar from '@/components/Avatar/Avatar.vue';

export default {
  name: 'Profile',
  components: {
    Avatar
  },
  props: {
    userName: {
      required: true,
      type: String
    },
    userEmail: {
      required: false,
      type: String
    },
    userPicture: {
      required: true,
      type: String
    },
    userPictureWidth: {
      required: false,
      type: Number,
      default: '7'
    },
    userPictureHeight: {
      required: false,
      type: Number,
      default: '7'
    }
  }
}