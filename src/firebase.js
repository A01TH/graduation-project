import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBLPIKApE44rids8ZiraT8uDgdJ12_JxaA",
  authDomain: "challego-c0381.firebaseapp.com",
  projectId: "challego-c0381",
  storageBucket: "challego-c0381.appspot.com",
  messagingSenderId: "726074900997",
  appId: "1:726074900997:web:8a3ff457a456d848ca126c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const auth = getAuth();
