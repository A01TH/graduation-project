import { useState } from "react";
import { useContext } from "react";

import {
  AiOutlineMessage,
  AiOutlineStop,
  AiOutlineUserAdd,
} from "react-icons/ai";
import Toast from "../../UI/Toast/Toast";
import { currentContext } from "../../context/CurrentUser";

const UserAction = ({ user }) => {
  const { currentUser, updateCurrentUser } = useContext(currentContext);
  const [friends, setFriends] = useState(currentUser[0].friends);
  const handleReport = () => {
    console.log("Report");
  };
  const handleChat = () => {
    console.log("Chat");
  };
  const handleAddFriend = () => {
    console.log(friends);
    setFriends([...friends, { friendId: user.uid, status: "pending" }]);
    console.log(friends);
    updateCurrentUser("friends", friends, "Friend has been added");
    console.log(friends);
  };
  return (
    <div>
      <>
        <button className="icon-btn text-secondary me-3 h4">
          <AiOutlineStop onClick={handleReport} />
        </button>
        {/* {friends.some((friend) => friend.friendId == user.uid) ? (
          <button className="icon-btn text-secondary me-3 h4">
            <AiOutlineMessage onClick={handleChat} />
          </button>
        ) : ( */}
        <button
          className="icon-btn text-secondary me-3 h4"
          onClick={() => handleAddFriend()}
        >
          <AiOutlineUserAdd />
        </button>
        {/* )} */}
        <Toast />
      </>
    </div>
  );
};

export default UserAction;
