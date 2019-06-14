import { mapActions } from 'vuex'

export default {
  name: 'Login',
  methods: {
    ...mapActions(
      'common', [
        'setToken',
        'setUser'
      ]
    ),
    loginWithGoogle () {
      let vm = this

      var provider = new this.$firebase.auth.GoogleAuthProvider();
      this.$firebase.auth().signInWithPopup(provider).then(function(result) {
        if (result && Object.keys(result).length > 0 && result.credential) {
          var token = result.credential.accessToken;
          console.debug(result)
          if (token && token !== '') {
            vm.setToken(token)
            vm.setUser(result.user)
            vm.$router.push({ name: 'home' })
          }
        }
      }).catch(function(error) {
        console.debug(error)
      });
    } 
  }
}
