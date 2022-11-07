import { useState } from "react";
import { useContext } from "react";
import {
  AiOutlineMessage,
  AiOutlineStop,
  AiOutlineUserAdd,
} from "react-icons/ai";
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
    setFriends([...friends, user.uid]);
    updateCurrentUser("friends", friends);
  };
  return (
    <div>
      <>
        <button className="icon-btn text-secondary me-3 h4">
          <AiOutlineStop onClick={handleReport} />
        </button>
        {currentUser[0].friends.includes(user.uid) ? (
          <button className="icon-btn text-secondary me-3 h4">
            <AiOutlineMessage onClick={handleChat} />
          </button>
        ) : (
          <button className="icon-btn text-secondary me-3 h4">
            <AiOutlineUserAdd onClick={handleAddFriend} />
          </button>
        )}
      </>
    </div>
  );
};

export default UserAction;
