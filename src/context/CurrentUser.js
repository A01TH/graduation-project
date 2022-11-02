import { createContext, useContext, useEffect } from "react";
import { FirebaseContext } from "./FirebaseContext";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";

export const currentContext = createContext();

const CurrentUserProvider = ({ children }) => {
  const { auth, userCollection } = useContext(FirebaseContext);
  const [userData] = useAuthState(auth);
  const query =
    userData?.uid && userCollection.where("uid", "==", userData.uid);
  const [currentUser] = useCollectionData(query);
  console.log("userData", userData);
  useEffect(() => {
    if (currentUser?.length === 0) {
      userCollection.add({
        displayName: userData.displayName || userData.email,
        photoUrl: userData.photoURL,
        uid: userData.uid,
      });
    }
  }, [currentUser]);

  return (
    <currentContext.Provider value={{ userData }}>
      {children}
    </currentContext.Provider>
  );
};

export default CurrentUserProvider;
