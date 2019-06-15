import firebase from 'firebase';

const getUserMovies = (context, uid) => {
  var moviesRef = firebase.database().ref('users/' + uid + '/movie');
  context.setSpinnerStatus(true)
  moviesRef.on('value', function(snapshot) {
    let res = snapshot.val()
    context.setMovies(res)
    context.setSpinnerStatus(false)
  });
}

export default getUserMovies