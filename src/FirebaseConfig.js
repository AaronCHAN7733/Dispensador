// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
 const FirebaseConfig = {
  apiKey: "AIzaSyBUij3L-BS9HHsj3Ubmr3Q4VuSFBPhtPyQ",
  authDomain: "dispensador-b0205.firebaseapp.com",
  databaseURL: "https://dispensador-b0205-default-rtdb.firebaseio.com",
  projectId: "dispensador-b0205",
  storageBucket: "dispensador-b0205.appspot.com",
  messagingSenderId: "369213399231",
  appId: "1:369213399231:web:d835ce224fc5f1b865260a"
};

// Initialize Firebase
const app = initializeApp(FirebaseConfig);
const bd = getFirestore(app);

export default {
  app,bd
}