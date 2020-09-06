
// localStorage.setItem("key","value");
// var lastname = localStorage.getItem("key");
// localStorage.removeItem("key");
/*
 //check if user is signed in.
  var user = firebase.auth().currentUser;

if (user) {
  // User is signed in.
  document.getElementById('demo').innerHTML = user;
} else {
  // No user is signed in.
}
 */
// var
const studentid = localStorage.getItem('selectStudentId');
// eslint-disable-next-line no-var
var student = [];
// eslint-disable-next-line no-var


const ref = firebase.database().ref();
// List Student enrolments for a class
// eslint-disable-next-line max-len
ref.child('Students').child(studentid).once('value', function(snap) {// once-only for one time connected
  snap.forEach(function(item) {
    const itemVal = item.val();
    student.push(itemVal);
  });
});


// eslint-disable-next-line no-unused-vars
function gradeSheet() {
  // const selectCourseId = document.getElementById('Courses').value;
  localStorage.setItem('studentId', studentid);
  window.location.href = 'Grade sheet.html';
}


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
  // once - only for one time connected
  ref.child('Users').child(userM).once('value', function(snap) {
    snap.forEach(function(item) {
      const itemVal = item.val();
      console.log(itemVal);
      if (itemVal.Status==0) {// if manager 1
        document.getElementById('mang').style.visibility = 'hidden';
      }
    });
  });
}


// logout.
// eslint-disable-next-line no-unused-vars
function out() {
  firebase.auth().signOut().then(function() {
    window.location.href = 'login.html';
  }).catch(function(error) {
    alert('Could not logout!');
  });
}

const fragment = document.createDocumentFragment();
const table = document.createElement('table');

// const query = firebase.database().ref('/student_enrolments/204666543');

const query = firebase.database().ref(`/student_enrolments/${studentid}`);

query.once('value').then(function(snapshot) {
  snapshot.forEach(function(childSnapshot) {
    const tr = document.createElement('tr');
    const trValues = [childSnapshot.key, childSnapshot.val()];

    for (let i = 0; i < trValues.length; i++) {
      const td = document.createElement('td');

      td.textContent = trValues[i]+Array(30).fill('\xa0').join('');
      tr.appendChild(td);
    }

    //  table.appendChild(tr);
    table1.appendChild(tr);
  });
});

fragment.appendChild(table);
document.body.appendChild(fragment);
