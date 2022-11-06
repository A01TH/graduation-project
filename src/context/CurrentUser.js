import { createContext, useContext, useEffect, useState } from "react";
import { FirebaseContext } from "./FirebaseContext";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";
import male from "../assets/profile/male.svg";
import female from "../assets/profile/female.svg";

export const currentContext = createContext();

const CurrentUserProvider = ({ children }) => {
  const { auth, userCollection } = useContext(FirebaseContext);
  const [userData] = useAuthState(auth);
  const [userInfo, setUserInfo] = useState([]);
  const query =
    userData?.uid && userCollection.where("uid", "==", userData.uid);
  const [currentUser, userLoading] = useCollectionData(query);

  useEffect(() => {
    if (currentUser?.length === 0) {
      userCollection.doc(userData.uid).set({
        uid: userData.uid,
        name: userData.displayName || userInfo.name,
        email: userData.email || userInfo.email,
        photoUrl: userData.emailVerified
          ? userData.photoURL
          : userInfo.gender.value === 1
          ? male
          : female,
        interests: userData.emailVerified ? [] : userInfo.Interests,
        points: 50,
        // birthDate: "" || userInfo.birthDate,
        ownedChallenges: [],
        contributedChallenges: [],
      });
    }
    setUserInfo([]);
  }, [currentUser]);

  return (
    <currentContext.Provider
      value={{ userData, setUserInfo, currentUser, userLoading }}
    >
      {children}
    </currentContext.Provider>
  );
};

export default CurrentUserProvider;
