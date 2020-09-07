/* eslint-disable linebreak-style */
// eslint-disable-next-line no-unused-vars

const studentid = localStorage.getItem('studentId');


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
const courseStudent = [];
// eslint-disable-next-line max-len
// const query = firebase.database().ref('/student_enrolments/204666543/0000002');

// firebase.database().ref().child('student_enrolments').child(studentid)
// eslint-disable-next-line max-len
firebase.database().ref().child('student_enrolments').child(studentid).once('value', function(snap) {// once-only for one time connected
  snap.forEach(function(item) {
    const itemVal = item.val();
    courseStudent.push(itemVal);
  });
    console.log(courseStudent);
  for (let i =0; i < courseStudent.length; i++) {
    const tr = document.createElement('tr');
     const trValues = [courseStudent[i].Name, courseStudent[i].Grade];
     console.log(trValues[i]);

    for (let j = 0; j < trValues.length-1; j++) {
      const td = document.createElement('td');
      const td1 = document.createElement('td');
	 
     //  td.textContent = courseStudent[j].Name;
     //  td1.textContent = courseStudent[j].Grade;
       td.textContent = trValues[j];
       td1.textContent = trValues[j+1];
      tr.appendChild(td);
      tr.appendChild(td1);
    }

    table1.appendChild(tr);
  }
});


fragment.appendChild(table);
 document.body.appendChild(fragment);

