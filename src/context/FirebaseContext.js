import { createContext, useState } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
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
  return (
    <FirebaseContext.Provider value={{ firebase, auth }}>
      {children}
    </FirebaseContext.Provider>
  );
};

export default FirebaseProvider;
