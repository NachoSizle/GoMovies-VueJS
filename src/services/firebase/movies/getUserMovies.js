import firebase from 'firebase';

const getUserMovies = (uid) => {
  return new Promise((resolve, reject) => {
    var moviesRef = firebase.database().ref('users/' + uid + '/movie');
    moviesRef.on('value', function(snapshot) {
      let res = snapshot.val()
      console.debug(res)
      resolve(res)

      // HAY QUE SETEAR EL STATE DESDE AQUI PARA LA REACTIVIDAD DESDE FIREBASE
    });
  })
}

export default getUserMovies