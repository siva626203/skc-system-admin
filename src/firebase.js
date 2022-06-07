// Import the functions you need from the SDKs you need
// v9 compat packages are API compatible wif v8 code

import firebase from 'firebase/compat/app';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDtvxPWXOvdzBYSe9sfxDc3dfdhg7TzAJc",
  authDomain: "skc-system.firebaseapp.com",
  projectId: "skc-system",
  storageBucket: "skc-system.appspot.com",
  messagingSenderId: "93254530223",
  appId: "1:93254530223:web:7bf81a8326f1781ac8105a",
  measurementId: "G-R6227T3GGX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
firebase.initializeApp(firebaseConfig);
var database = firebase.database();
  
export default database;