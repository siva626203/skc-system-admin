// Import the functions you need from the SDKs you need
// v9 compat packages are API compatible wif v8 code

import firebase from 'firebase/compat/app';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore} from 'firebase/firestore';
import { getAuth,onAuthStateChanged } from "firebase/auth";
import { getStorage } from "firebase/storage";
import 'firebase/firestore'
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
export const db= getFirestore(app)
export const auth = getAuth(app);
export const storage = getStorage(app);
 


