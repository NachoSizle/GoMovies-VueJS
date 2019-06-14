import { mapActions } from 'vuex'

export default {
  name: 'Settings',
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
