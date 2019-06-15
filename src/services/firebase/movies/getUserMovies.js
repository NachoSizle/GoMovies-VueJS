import firebase from 'firebase';

const getUserMovies = (context, uid) => {
  var moviesRef = firebase.database().ref('users/' + uid + '/movie');
  moviesRef.on('value', function(snapshot) {
    let res = snapshot.val()
    context.setMovies(res)
  });
}

export default getUserMovies