// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDNofZldi7s1MDwxDASfpQdDAyuiANueAA",
  authDomain: "auth-recap-2-aac90.firebaseapp.com",
  projectId: "auth-recap-2-aac90",
  storageBucket: "auth-recap-2-aac90.appspot.com",
  messagingSenderId: "963236049751",
  appId: "1:963236049751:web:1acfb479526b59f5250412"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;