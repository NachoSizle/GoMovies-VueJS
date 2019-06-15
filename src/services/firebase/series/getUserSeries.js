import firebase from 'firebase';

const getUserSeries = (context, uid) => {
  var seriesRef = firebase.database().ref('users/' + uid + '/series');
  context.setSpinnerStatus(true)
  
  seriesRef.on('value', function(snapshot) {
    let res = snapshot.val()
    context.setSeries(res)
    context.setSpinnerStatus(false)
  });
}

export default getUserSeries