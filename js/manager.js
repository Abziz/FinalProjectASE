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
    enterOnlyIfManager(user);
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
function enterOnlyIfManager(user) {
  const ref = firebase.database().ref();
  const userM=user.uid;
  // eslint-disable-next-line max-len
  ref.child('Users').child(userM).once('value', function(snap) { // once - only for one time connected
    snap.forEach(function(item) {
      const itemVal = item.val();
      console.log(itemVal);
      if (itemVal.Status==0) {// if manager 1
        window.location.href = 'main.html';
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
// ////////////////////////Insert menu/////////////////////////////////////////
let flagTS=0;
// eslint-disable-next-line no-unused-vars
function FunctionDivSTC() {
  const T = document.getElementById('DivSTC');
  if (flagTS==1) {
    T.style.display='none';
    flagTS=0;
  } else {
    T.style.display = 'block';// <-- Set it to block
    flagTS=1;
  }
}
let flagT=0;
// eslint-disable-next-line no-unused-vars
function FunctionDivT() {
  const T = document.getElementById('DivT');
  if (flagT==1) {
    T.style.display='none';
    flagT=0;
  } else {
    T.style.display = 'block';// <-- Set it to block
    flagT=1;
  }
}
let flagC=0;
// eslint-disable-next-line no-unused-vars
function FunctionDivC() {
  const T = document.getElementById('DivC');
  if (flagC==1) {
    T.style.display='none';
    flagC=0;
  } else {
    T.style.display = 'block';// <-- Set it to block
    flagC=1;
  }
}
let flagS=0;
// eslint-disable-next-line no-unused-vars
function FunctionDivS() {
  const T = document.getElementById('DivS');
  if (flagS==1) {
    T.style.display='none';
    flagS=0;
  } else {
    T.style.display = 'block';// <-- Set it to block
    flagS=1;
  }
}
// /////////////////////AddTeacher//////////////////////////////////////////////
const secondaryApp = firebase.initializeApp(firebaseConfig, 'Secondary');

// eslint-disable-next-line no-unused-vars
function AddTeacherSubmit(e) {
  const name = document.querySelector('#name').value;
  const email = document.querySelector('#email').value;
  const status = document.getElementById('status').value;
  const password = document.querySelector('#password').value;
  // eslint-disable-next-line max-len
  secondaryApp.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
    alert('Add Failed!');
  });
  // secondaryApp.auth().signOut();
  secondaryApp.auth().onAuthStateChanged(function(user) {
    if (user!=null) {
      writeToDataBaseUser(name, status, user);
      updateDataUser(name, user);
      secondaryApp.auth().signOut();
    }
  });
  demo();
}
let userNow2;
function writeToDataBaseUser(name, status, user) { // the real time data base
  userNow2 = user.uid;
  const datesRef = firebase.database().ref();
  datesRef.child('Users').child(userNow2).child('info').set({
    Status: status,
    Name: name,
    UserId: userNow2,
  });
}
function updateDataUser(name, user) { // for the authontication
  user.updateProfile({
    displayName: name,
  }).then(function() {

  }).catch(function(error) {
    // An error happened.
  });
}
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function demo() {
  await sleep(3000);

  window.location.reload();
}
// /////////////////////AddCourse/////////////////////////////////////////////
const teachersArr = [];
window.onload = function() {
  const ref = firebase.database().ref();
  // eslint-disable-next-line max-len
  ref.child('Users').once('value', function(snap) {// once-only for one time connected
    snap.forEach(function(item) {
      const itemVal = item.val();
      teachersArr.push(itemVal);
    });

    const selectT = document.getElementById('teachers');
    for (let i = 0; i < teachersArr.length; i++) {
      if (teachersArr[i].info.Status==0) {
        const opt = teachersArr[i].info.Name;
        const el = document.createElement('option');
        el.textContent = opt;
        el.value = teachersArr[i].info.UserId;
        selectT.appendChild(el);
      }
    }
    addStudentToCourseLoad();
  });
};
// eslint-disable-next-line no-unused-vars
function AddCourseSubmit(e) {
  const nameC = document.querySelector('#nameC').value;
  const idC = document.querySelector('#idC').value;
  const subject = document.querySelector('#subject').value;
  const userT = document.getElementById('teachers').value;

  const datesRef = firebase.database().ref();
  datesRef.child('Courses').child(idC).set({
    Name: nameC,
    ID: idC,
    teacherID: userT,
    Subject: subject,
  });

  datesRef.child('Users').child(userT).child('Courses').child(idC).update({
    Name: nameC,
    ID: idC,
    Subject: subject,
  });
  demo();
}
// //////////////////////////AddStudent////////////////////////////////////
// eslint-disable-next-line no-unused-vars
function AddStudentSubmit(e) {
  const nameS = document.querySelector('#nameS').value;
  const idS = document.querySelector('#idS').value;

  const datesRef = firebase.database().ref();
  datesRef.child('Students').child(idS).set({
    Name: nameS,
    ID: idS,
  });
  demo();
};
// ////////////////////////////AddStudentToCourse////////////////////////////
const CoursesArr = [];
const StudentsArr = [];
function addStudentToCourseLoad() {// call from onload in AddCoure area.
  const ref = firebase.database().ref();
  // eslint-disable-next-line max-len
  ref.child('Courses').once('value', function(snap) {// once-only for one time connected
    snap.forEach(function(item) {
      const itemVal = item.val();
      CoursesArr.push(itemVal);
    });
    const selectC = document.getElementById('Courses');
    for (let i = 0; i < CoursesArr.length; i++) {
      const opt = CoursesArr[i].Name;
      const el = document.createElement('option');
      el.textContent = opt;
      el.value = CoursesArr[i].ID;
      selectC.appendChild(el);
    }
  });
  // eslint-disable-next-line max-len
  ref.child('Students').once('value', function(snap) {// once-only for one time connected
    snap.forEach(function(item) {
      const itemVal = item.val();
      StudentsArr.push(itemVal);
    });
    const selectS = document.getElementById('Students');
    for (let i = 0; i < StudentsArr.length; i++) {
      const opt = StudentsArr[i].Name+' ,ID:'+StudentsArr[i].ID;
      const el = document.createElement('option');
      el.textContent = opt;
      el.value = StudentsArr[i].ID;
      selectS.appendChild(el);
    }
  });
};

// eslint-disable-next-line no-unused-vars
function AddStudentToCourseSubmit(e) {
  const courseId = document.getElementById('Courses').value;
  const studentId = document.getElementById('Students').value;

  const updates = {
    [`student_enrolments/${studentId}/${courseId}`]: true,
    [`course_enrolments/${courseId}/${studentId}`]: true,
  };
  firebase.database().ref().update(updates);
  demo();
}
