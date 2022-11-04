import { createContext, useContext, useEffect, useState } from "react";
import { FirebaseContext } from "./FirebaseContext";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";

export const currentContext = createContext();

const CurrentUserProvider = ({ children }) => {
  const { auth, userCollection } = useContext(FirebaseContext);
  const [userData] = useAuthState(auth);
  const [userInfo, setUserInfo] = useState();
  const query =
    userData?.uid && userCollection.where("uid", "==", userData.uid);
  const [currentUser] = useCollectionData(query);
  useEffect(() => {
    if (currentUser?.length === 0) {
      userCollection.add({
        uid: userData.uid,
        name: userData.displayName || userInfo.name,
        email: userData.email || userInfo.email,
        photoUrl: userData.photoURL,
      });
      setUserInfo([]);
    }
  }, [currentUser]);

  return (
    <currentContext.Provider value={{ userData, setUserInfo }}>
      {children}
    </currentContext.Provider>
  );
};

export default CurrentUserProvider;
