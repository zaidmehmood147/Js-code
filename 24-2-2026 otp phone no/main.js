// 1.type module in script
// 2.live server
// import dotenv from "dotenv";
// dotenv.config();
// console.log(process.env.API_KEY);

// Initialize Firebase
import {
  initializeApp,
  firebaseConfig,
  getAuth,
   createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup
  signInWithPopup,
  RecaptchaVerifier,
  signInWithPhoneNumber,
  getFirestore
} from './firebase.js'

const app = initializeApp(firebaseConfig);
@@ -115,3 +118,38 @@
    const credential = GoogleAuthProvider.credentialFromError(error);
  });
}

// Phone otp 
var sendBtn = document.getElementById("sendOtpButton")
sendBtn.addEventListener("click",sendOtp)

function sendOtp(){
  console.log("click hogaya")
window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {
  'size': 'normal',
  'callback': (response) => {
   console.log("response=>",response)
  },
  'expired-callback': () => {
  }
});
const phoneNumber = document.getElementById("phnNumber").value
const appVerifier = window.recaptchaVerifier;
signInWithPhoneNumber(auth, phoneNumber, appVerifier)
    .then((confirmationResult) => {
      window.confirmationResult = confirmationResult;
    }).catch((error) => {
     
    });
}


// firestore database
// Auth -> authentication(signup,login)
// firestore database. (documents)
// storage (images,videos)
// realtime database -> (chat app,counter)


const db = getFirestore(app);
console.log("db=>",db)