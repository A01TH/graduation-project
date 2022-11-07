import { useState } from "react";
import { useContext } from "react";

import {
  AiOutlineMessage,
  AiOutlineStop,
  AiOutlineUserAdd,
} from "react-icons/ai";
import Toast from "../../UI/Toast/Toast";
import { currentContext } from "../../context/CurrentUser";
import { useRef } from "react";
import { useEffect } from "react";

const UserAction = ({ user }) => {
  const { currentUser, updateCurrentUser } = useContext(currentContext);
  const [friends, setFriends] = useState(currentUser[0].friends);
  const didMount = useRef(false);
  const handleReport = () => {
    console.log("Report");
  };
  const handleChat = () => {
    console.log("Chat");
  };

  useEffect(() => {
    updateCurrentUser("friends", friends, "Friend has been added");
  }, [friends]);
  const handleAddFriend = () => {
    setFriends([...friends, { friendId: user.uid, status: "pending" }]);
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
