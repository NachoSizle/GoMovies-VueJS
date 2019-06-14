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
          if (token && token !== '') {
            vm.setToken(token)
            let user = {
              uid: result.user.uid,
              name: result.user.displayName
            }
            vm.setUser(user)
            vm.$router.push({ name: 'home' })
          }
        }
      }).catch(function(error) {
        console.debug(error)
      });
    } 
  }
}
