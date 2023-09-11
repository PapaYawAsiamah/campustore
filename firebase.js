// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBRJHuu79O79z1o4d7J3fmy8eWj1D-maks",
    authDomain: "data-fa43d.firebaseapp.com",
    projectId: "data-fa43d",
    storageBucket: "data-fa43d.appspot.com",
    messagingSenderId: "856443060384",
    appId: "1:856443060384:web:470b4a537d55b9ed9fc9c5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
