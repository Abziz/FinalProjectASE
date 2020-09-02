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

$(document).ready(function() {
  const state = 'login';

  $('form').submit(function(e) {
    e.preventDefault(); // so it wouldn't use form functionality
    const email = document.querySelector('#username').value;
    const pass = document.querySelector('#pass').value;
    if (state === 'login'&&email!=''&&pass!='') {
      firebase.auth().signInWithEmailAndPassword(email, pass).catch(
          function(error) {
            // // Handle Errors here.
            // const errorCode = error.code;
            const errorMessage = error.message;
            window.alert('Error : ' + errorMessage);

            location.reload();
          });
    }
  });


  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      /* var displayName = user.displayName;
            var email = user.email;
            var emailVerified = user.emailVerified;
            var photoURL = user.photoURL;
            var isAnonymous = user.isAnonymous;
            var uid = user.uid;
            var providerData = user.providerData;*/
      location.href = 'main.html';
    } else {
      firebase.auth().signOut();
    }
  });
});
