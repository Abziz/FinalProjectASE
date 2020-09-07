
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
    checkIfManager(userNow2);
    if (userNow2.photoURL==null) {
      img.src ='img/core-img/ANONYMOUS_USER.png';
    }
  } else {
    window.location.href = 'login.html';
  }
});
function checkIfManager(user) {
  const ref = firebase.database().ref();
  const userM=user.uid;
  // eslint-disable-next-line max-len
  ref.child('Users').child(userM).once('value', function(snap) { // once - only for one time connected
    snap.forEach(function(item) {
      const itemVal = item.val();
      if (itemVal.Status==0) {// if manager 1
        document.getElementById('mang').style.visibility = 'hidden';
      }
    });
  });
}
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
// ////////////////////////Courses/////////////////////////////////////////////
const myCourses = [];
window.onload = function() {
  const ref = firebase.database().ref();
  firebase.auth().onAuthStateChanged(function(user) {
    if (user!=null) {
      // eslint-disable-next-line max-len
      ref.child('Users').child(user.uid).child('Courses').once('value', function(snap) {// once-only for one time connected
        snap.forEach(function(item) {
          const itemVal = item.val();
          myCourses.push(itemVal);
        });
        const AllC = document.getElementById('Courses');
        for (let i = 0; i < myCourses.length; i++) {
          const opt = myCourses[i].Name;
          const el = document.createElement('option');
          el.textContent = opt;
          el.value = myCourses[i].ID;
          AllC.appendChild(el);
        }
      });
    }
  });
};

// eslint-disable-next-line no-unused-vars
function SelectCourse() {
  const selectCourseId = document.getElementById('Courses').value;
  if (selectCourseId=='') {
    window.alert('You have no courses');
  } else {
    localStorage.setItem('selectCourseId', selectCourseId);
    window.location.href = 'CoursePage.html';
  }
}
