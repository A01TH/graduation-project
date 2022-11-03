import { createContext } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
export const FirebaseContext = createContext();

const FirebaseProvider = ({ children }) => {
  firebase.initializeApp({
    apiKey: "AIzaSyCuiM5kdnGSVS6OH7Dwc69tEbAlgx76TSg",
    authDomain: "test-385f1.firebaseapp.com",
    databaseURL: "https://test-385f1-default-rtdb.firebaseio.com",
    projectId: "test-385f1",
    storageBucket: "test-385f1.appspot.com",
    messagingSenderId: "773472756722",
    appId: "1:773472756722:web:240da73c49e772e06a816b",
    measurementId: "G-VZPFGJCX1R",
  });
  const auth = firebase.auth();
  return (
    <FirebaseContext.Provider value={{ firebase, auth }}>
      {children}
    </FirebaseContext.Provider>
  );
};

export default FirebaseProvider;
