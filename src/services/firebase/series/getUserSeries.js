import firebase from 'firebase';

const getUserSeries = (context, uid) => {
  var seriesRef = firebase.database().ref('users/' + uid + '/series');
  seriesRef.on('value', function(snapshot) {
    let res = snapshot.val()
    context.setSeries(res)
  });
}

export default getUserSeries