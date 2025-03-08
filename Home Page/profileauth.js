import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyB-uMP9c8PoMlkfDQBYDYs1HHvOdhDD5vc",
    authDomain: "smartmed-7c994.firebaseapp.com",
    databaseURL: "https://smartmed-7c994-default-rtdb.firebaseio.com",
    projectId: "smartmed-7c994",
    storageBucket: "smartmed-7c994.appspot.com",
    messagingSenderId: "910519979017",
    appId: "1:910519979017:web:5902c4b3a07cbe5d693cd8",
    measurementId: "G-869KSMF4HH"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app); 
const auth = getAuth();
const userId = localStorage.getItem('loggedInUserId');
console.log("User id"+userId)
// if(userId!=null){
//     window.location.href='../HomePage/webs.html';
// }


function showMessage(message, divId) {
    var messageDiv = document.getElementById(divId);
    messageDiv.style.display = "block";
    messageDiv.innerHTML = message;
    messageDiv.style.opacity = 1;
    setTimeout(function () {
        messageDiv.style.opacity = 0;
    }, 5000);
}



const signUp = document.getElementById('submitSignUp');
signUp.addEventListener('click', (event) => {
    event.preventDefault();
    const email = document.getElementById('rEmail').value;
    const password = document.getElementById('rPassword').value;
    const firstName = document.getElementById('fName').value;
    const lastName = document.getElementById('lName').value;
    const dob = document.getElementById('dob').value; 
    const emergencyContact = document.getElementById('emergencyContact').value; 
    const gender = document.querySelector('input[name="gender"]:checked').value; 
    const height = document.getElementById('height').value; 
    const phone = document.getElementById('phone').value; 
    const weight = document.getElementById('weight').value;

    const auth = getAuth();

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log("User UID:", user.uid);
            const userData = {
                dob: dob,
                email: email,
                emergencyContact: emergencyContact,
                fullName: `${firstName} ${lastName}`,
                gender: gender,
                height: height,
                phone: phone,
                weight: weight
            };

            showMessage('Account Created Successfully', 'signUpMessage');


            set(ref(db, 'patients/' + user.uid + '/userdata'), userData)
                .then(() => {
                    window.location.href = 'index.html';
                })
                .catch((error) => {
                    console.error("Error writing data to database", error);
                });
        })
        .catch((error) => {
            const errorCode = error.code;
            if (errorCode === 'auth/email-already-in-use') {
                showMessage('Email Address Already Exists !!!', 'signUpMessage');
            } else {
                showMessage('Unable to create User', 'signUpMessage');
            }
        });
});

const signIn = document.getElementById('submitSignIn');
signIn.addEventListener('click', (event) => {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            showMessage('Login is successful', 'signInMessage');
            const user = userCredential.user;
            localStorage.setItem('loggedInUserId', user.uid);
            window.location.href = '../HomePage/webs.html';
        })
        .catch((error) => {
            const errorCode = error.code;
            if (errorCode === 'auth/invalid-credential') {
                showMessage('Incorrect Email or Password', 'signInMessage');
            } else {
                showMessage('Account does not Exist', 'signInMessage');
            }
        });
});
