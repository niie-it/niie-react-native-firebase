// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
import * as firebase from 'firebase';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA9SkSkKmTNZ-Fp5oI5WTkSldwS6fSJd3g",
    authDomain: "niie-rn-firebase-demo.firebaseapp.com",
    projectId: "niie-rn-firebase-demo",
    storageBucket: "niie-rn-firebase-demo.appspot.com",
    messagingSenderId: "83099272998",
    appId: "1:83099272998:web:58ab2fa546b0e0ef7aa3e7"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// if (firebase.apps.length === 0) {
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
export { firebase };