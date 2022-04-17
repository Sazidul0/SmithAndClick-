// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDLWZnQjluJEUxWbom2RZg-aWFNJCZ776I",
    authDomain: "smith-and-click.firebaseapp.com",
    projectId: "smith-and-click",
    storageBucket: "smith-and-click.appspot.com",
    messagingSenderId: "510394254600",
    appId: "1:510394254600:web:2f4c1ecc9d4f65517cd8bd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);


export default auth;