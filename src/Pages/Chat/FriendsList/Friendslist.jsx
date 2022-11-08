import { useContext } from "react";
import { FirebaseContext } from "../../../context/FirebaseContext";
import { currentContext } from "../../../context/CurrentUser";
import { useCollectionData } from "react-firebase-hooks/firestore";
import FriendInbox from "./FriendInbox";
import { useEffect } from "react";

const FriendList = () => {
  const { userCollection } = useContext(FirebaseContext);
  const [users] = useCollectionData(userCollection);
  const { userData, friends } = useContext(currentContext);
  // useEffect(() => {
  //   if (userData && friends) {
  //     console.log(friends);
  //   }
  // }, [friends]);

  return (
    <div className="conversation-area  chat-sidebar pt-1">
      {/* {users
        ?.filter((user) => user.uid !== userData.uid)
        .map((user) => {
          return <FriendInbox active key={user.uid} user={user} />;
        })} */}
      {friends?.map((user) => {
        return <FriendInbox active key={user.uid} user={user} />;
      })}
    </div>
  );
};

export default FriendList;
