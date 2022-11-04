import React, { useContext } from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import { FirebaseContext } from "../../../context/FirebaseContext";
import { useCollectionData } from "react-firebase-hooks/firestore";
import User from "./User";
import { currentContext } from "../../../context/CurrentUser";
const LeftSidebar = () => {
  const { userCollection } = useContext(FirebaseContext);
  const { userData } = useContext(currentContext);
  const [users] = useCollectionData(userCollection);
  return (
    <div className="chat-sidebar">
      <div className="wrapper pt-2">
        <div className="chat-search w-100 d-flex mx-auto mb-3 p-2 gap-2 p-1 px-3 rounded-4 align-items-center">
          <BiSearchAlt2 className="fs-4" />
          <input
            type="text"
            className="w-100 text-white outline-none border-0 bg-transparent "
            placeholder="Search"
          />
        </div>
        <div className="chat-users">
          {users
            ?.filter((data) => data.uid !== userData.uid)
            .map((user) => {
              return <User user={user} key={user.uid} />;
            })}
        </div>
      </div>
    </div>
  );
};

export default LeftSidebar;
