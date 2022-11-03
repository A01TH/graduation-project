import { createContext } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import { collection, getDocs } from "firebase/firestore";

export const FirebaseContext = createContext();

const FirebaseProvider = ({ children }) => {
  firebase.initializeApp({
    apiKey: "AIzaSyBULXUYrOXpmW4TGJRZjgBwV6DRtFvqEs4",
    authDomain: "challego-a637e.firebaseapp.com",
    projectId: "challego-a637e",
    storageBucket: "challego-a637e.appspot.com",
    messagingSenderId: "172892753560",
    appId: "1:172892753560:web:7f83912a1bb9a8627c0aed",
  });
  const auth = firebase.auth();
  const firestore = firebase.firestore();
  const userCollection = firestore.collection("users");
  const users = [];
  firestore
    .collection("users")
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        users.push(doc.data());
      });
      console.log(users);
    });

  return (
    <FirebaseContext.Provider value={{ firebase, auth, userCollection }}>
      {children}
    </FirebaseContext.Provider>
  );
};

export default FirebaseProvider;
