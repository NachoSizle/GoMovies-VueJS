import { mapActions, mapGetters } from 'vuex'

import Profile from '@/components/Profile/Profile.vue';

export default {
  name: 'Settings',
  components: {
    Profile
  },
  computed: {
    ...mapGetters({
      userName: 'common/userName',
      userEmail: 'common/userEmail',
      userPicture: 'common/userPicture'
    })
  },
  methods: {
    ...mapActions(
      'common', [
        'removeToken',
        'removeUser'
      ]
    ),
    logout () {
      let vm = this
      vm.$firebase.auth().signOut().then(function() {
        vm.removeToken()
        vm.removeUser()
        vm.$router.push({ name: 'login' })
      }).catch(function(error) {
        console.debug(error)
      });
    }
  }
}
