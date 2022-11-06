import { createContext, useContext, useEffect, useState } from "react";
import { FirebaseContext } from "./FirebaseContext";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";
import male from "../assets/profile/male.svg";
import female from "../assets/profile/female.svg";
import { toast } from "react-toastify";

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
        username: (userData.email || userInfo.email).split("@")[0],
        interests: userData.emailVerified ? [] : userInfo.Interests,
        points: 50,
        ownedChallenges: [],
        contributedChallenges: [],
        friends: [],
      });
    }
    setUserInfo([]);
  }, [currentUser]);

  const updateCurrentUser = (key, value) => {
    userCollection
      .doc(currentUser[0].uid)
      .set(
        {
          [key]: value,
        },
        { merge: true }
      )
      .then(() => {
        toast(`Your ${key.charAt().toUpperCase()} Has Removed Successfully`, {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      })
      .catch((error) => {
        console.error("Error writing document: ", error);
      });
  };

  return (
    <currentContext.Provider
      value={{
        userData,
        setUserInfo,
        currentUser,
        userLoading,
        updateCurrentUser,
      }}
    >
      {children}
    </currentContext.Provider>
  );
};

export default CurrentUserProvider;
