
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAUe7kJyFTBZBmKqjdIYR0IIVdHgcrJHrU",
    authDomain: "finalprojectase-fa181.firebaseapp.com",
    databaseURL: "https://finalprojectase-fa181.firebaseio.com",
    projectId: "finalprojectase-fa181",
    storageBucket: "finalprojectase-fa181.appspot.com",
    messagingSenderId: "649915692568",
    appId: "1:649915692568:web:24666913ce7d2d43a3756d"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        userNow2 = user;
        var img = document.getElementById('pic');
        var name = document.getElementById('username');
        img.src = userNow2.photoURL;
        userName.innerHTML = "Hello " + userNow2.email;// userName.innerHTML = "Hello " + userNow2.displayName;
        if(userNow2.photoURL==null)
            img.src ="img/core-img/ANONYMOUS_USER.png";
        
    } else {
        window.location.href = "login.html"
        
    }
});
function out(){ //logout

    firebase.auth().signOut().then(function () {
               window.location.href = "login.html";
           }).catch(function (error) {
               alert("Could not logout!");
           });
           
}