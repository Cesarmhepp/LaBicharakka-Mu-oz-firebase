// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCv5OYeiTGutnIkN8Nebs6tN01qFy9oaeA",
  authDomain: "la-bicharraka.firebaseapp.com",
  projectId: "la-bicharraka",
  storageBucket: "la-bicharraka.appspot.com",
  messagingSenderId: "1083271939944",
  appId: "1:1083271939944:web:67fecd6bdd2eb638e6f8dd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db=getFirestore(app);