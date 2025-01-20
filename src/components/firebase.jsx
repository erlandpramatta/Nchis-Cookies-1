// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAgJa6ZFbslDBrv_IIOC9rLkbhXklz3mjk",
  authDomain: "nchis-cookies.firebaseapp.com",
  projectId: "nchis-cookies",
  storageBucket: "nchis-cookies.firebasestorage.app",
  messagingSenderId: "942997017690",
  appId: "1:942997017690:web:ff45221db9da16d9d1b463",
  measurementId: "G-WSQZ4XWBZX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup };