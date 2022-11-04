import { useContext } from "react";
import { FirebaseContext } from "../../../context/FirebaseContext";
import { currentContext } from "../../../context/CurrentUser";
import { useCollectionData } from "react-firebase-hooks/firestore";
import FriendInbox from "./FriendInbox";

const FriendList = () => {
  const { userCollection } = useContext(FirebaseContext);
  const [users] = useCollectionData(userCollection);
  const { userData } = useContext(currentContext);

  // console.log(users);
  return (
    <div className="conversation-area">
      {users
        ?.filter((user) => user.uid !== userData.uid)
        .map((user) => {
          return <FriendInbox active key={user.uid} user={user} />;
        })}
    </div>
  );
};

export default FriendList;
