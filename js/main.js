
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAUe7kJyFTBZBmKqjdIYR0IIVdHgcrJHrU',
  authDomain: 'finalprojectase-fa181.firebaseapp.com',
  databaseURL: 'https://finalprojectase-fa181.firebaseio.com',
  projectId: 'finalprojectase-fa181',
  storageBucket: 'finalprojectase-fa181.appspot.com',
  messagingSenderId: '649915692568',
  appId: '1:649915692568:web:24666913ce7d2d43a3756d',
};
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    userNow2 = user;
    const img = document.getElementById('pic');
    const name = document.getElementById('userName');
    img.src = userNow2.photoURL;
    name.innerHTML='Hello '+userNow2.email;
    // name.innerHTML = "Hello " + userNow2.displayName;
    if (userNow2.photoURL==null) {
      img.src ='img/core-img/ANONYMOUS_USER.png';
    }
  } else {
    window.location.href = 'login.html';
  }
});
/**
 * logout.
 */
// eslint-disable-next-line no-unused-vars
function out() {
  firebase.auth().signOut().then(function() {
    window.location.href = 'login.html';
  }).catch(function(error) {
    alert('Could not logout!');
  });
}
