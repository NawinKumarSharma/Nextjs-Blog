// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "next-blog-448df.firebaseapp.com",
  projectId: "next-blog-448df",
  storageBucket: "next-blog-448df.appspot.com",
  messagingSenderId: "336288906732",
  appId: "1:336288906732:web:d765d53899c80aa5e094c9",
  measurementId: "G-4HWF6Q7QXP"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);