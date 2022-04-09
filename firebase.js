// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
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
export const app = initializeApp(firebaseConfig);