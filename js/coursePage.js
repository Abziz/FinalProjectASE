
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
    window.location.href = 'index.html';
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
    window.location.href = 'index.html';
  }).catch(function(error) {
    alert('Could not logout!');
  });
}
const CourseId = localStorage.getItem('selectCourseId');
// /////////////////////////CourseInfo///////////////////////////////////
const CourseInfo = [];
const ref = firebase.database().ref();
ref.child('Courses').child(CourseId).once('value').then((snapshot) => {
  const itemVal = snapshot.val();
  CourseInfo.push(itemVal);
  document.getElementById('NameCourseLabel').innerHTML = CourseInfo[0].Name;
  document.getElementById('IDCourseLabel').innerHTML = CourseInfo[0].ID;
  document.getElementById('SubjectCourseLabel').innerHTML=CourseInfo[0].Subject;
  // eslint-disable-next-line max-len
  ref.child('Users').child(CourseInfo[0].teacherID).once('value').then((snapshot) => {
    // eslint-disable-next-line max-len
    document.getElementById('TeacherCourseLabel').innerHTML=snapshot.val().info.Name;
  });
});
// /////////////////////////////////////////////////////////////////////
const StIDs = [];
const StGrade = [];
// List Student enrolments for a class
// eslint-disable-next-line max-len
ref.child('course_enrolments').child(CourseId).once('value', function(snap) {// once-only for one time connected
  snap.forEach(function(item) {
    const itemVal = item.val();
    StIDs.push(itemVal);
  });
  for (let i = 0; i< StIDs.length; i++) {
    // eslint-disable-next-line max-len
    ref.child('student_enrolments').child(StIDs[i]).child(CourseId).once('value').then((snapshot) => {
      const itemVal = snapshot.val().Grade;
      StGrade.push(itemVal);
    });
    // eslint-disable-next-line max-len
    ref.child('Students').child(StIDs[i]).once('value').then((snapshot) => {
      const selectS = document.getElementById('Students');
      // const GradeS = document.getElementById('Grades');
      const opt =snapshot.val().Name+' ,ID:'+StIDs[i]+' ,'+StGrade[i];
      const el = document.createElement('option');
      el.textContent = opt;
      el.value = StIDs[i];
      selectS.appendChild(el);
    });
  }
});

// eslint-disable-next-line no-unused-vars
function selectToStudentPage() {
  const selectStudentId = document.getElementById('Students').value;
  if (selectStudentId=='') {
    window.alert('You need to select Student');
  } else {
    localStorage.setItem('selectStudentId', selectStudentId);
    window.location.href = 'StudentPage.html';
  }
}
let flagGS=0;
// eslint-disable-next-line no-unused-vars
function FunctionDivGS() {
  const T = document.getElementById('ADDGradeDiv');
  if (flagGS==1) {
    T.style.display='none';
    flagGS=0;
  } else {
    T.style.display = 'block';// <-- Set it to block
    flagGS=1;
  }
}
// eslint-disable-next-line no-unused-vars
function AddGradeToStudent() {
  const selectStudentId = document.getElementById('Students').value;
  if (selectStudentId=='') {
    window.alert('You need to select Student');
  } else {
    const grade = document.querySelector('#Grade').value.trim();
    if (grade!=''&&grade<100&&grade>=0) {
      const datesRef = firebase.database().ref();
      // eslint-disable-next-line max-len
      datesRef.child('student_enrolments').child(selectStudentId).child(CourseId).update({
        Grade: grade,
      });
      demo();
    } else {
      // eslint-disable-next-line max-len
      window.alert('Incorrect grade. Please enter only a number between 0 to 100');
    }
  }
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function demo() {
  await sleep(3000);

  window.location.reload();
}
