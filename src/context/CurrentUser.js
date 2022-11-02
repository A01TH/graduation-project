import { createContext, useContext } from "react";
import { FirebaseContext } from "./FirebaseContext";
import { useAuthState } from "react-firebase-hooks/auth";
export const currentContext = createContext();
const CurrentUserProvider = ({ children }) => {
  const { auth } = useContext(FirebaseContext);
  const [userData] = useAuthState(auth);
  return (
    <currentContext.Provider value={{ userData }}>
      {children}
    </currentContext.Provider>
  );
};

export default CurrentUserProvider;
