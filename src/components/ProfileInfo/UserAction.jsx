import { useState, useEffect, useMemo, uselayoutEffect, useRef } from "react";
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
  const [clicked, setClicked] = useState(false);
  const handleReport = () => {
    console.log("Report");
  };
  const handleChat = () => {
    console.log("Chat");
  };
  useEffect(() => {
    
    if (clicked) {
      updateCurrentUser("friends", friends, "Friend has been added");
      setClicked(false);
    }

  }, [friends]);

  const handleAddFriend = () => {
<<<<<<< HEAD
    setFriends((prev) => [...prev, { friendId: user.uid, status: "pending" }]);
    updateCurrentUser("friends", friends, "Friend has been added");
=======
    setFriends([...friends, { friendId: user.uid, status: "pending" }]);
    setClicked(true);
>>>>>>> 3ed96062b039a6bac3e8ea104ddb219d3d3e23da
  };
  return (
    <div>
      <>
        <button className="icon-btn text-secondary me-3 h4">
          <AiOutlineStop onClick={handleReport} />
        </button>
        {friends.some((friend) => friend.friendId == user.uid) ? (
          <button className="icon-btn text-secondary me-3 h4">
            <AiOutlineMessage onClick={handleChat} />
          </button>
        ) : (
          <button
            className="icon-btn text-secondary me-3 h4"
            onClick={() => handleAddFriend()}
          >
            <AiOutlineUserAdd />
          </button>
        )}
        <Toast />
      </>
    </div>
  );
};

export default UserAction;
