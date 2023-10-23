// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDsY3clienmgz9rGqSSjEfCnAeyMzkrGMg",
    authDomain: "biblioteca-9591c.firebaseapp.com",
    projectId: "biblioteca-9591c",
    storageBucket: "biblioteca-9591c.appspot.com",
    messagingSenderId: "494104329335",
    appId: "1:494104329335:web:a937118e0692650d7fda72"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);

