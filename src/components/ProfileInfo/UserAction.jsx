import { useState, useEffect } from "react";
import { useContext } from "react";
import {
  AiOutlineMessage,
  AiOutlineStop,
  AiOutlineUserAdd,
} from "react-icons/ai";
import Toast from "../../UI/Toast/Toast";
import { currentContext } from "../../context/CurrentUser";
import { FirebaseContext } from "../../context/FirebaseContext";

const UserAction = ({ user }) => {
  const { currentUser, updateCurrentUser } = useContext(currentContext);
  const { userCollection } = useContext(FirebaseContext);
  const [sentReq, setSentReq] = useState(currentUser[0].sentRequests);
  const [recReq, setrecReq] = useState(user.receivedRequests);

  const [clicked, setClicked] = useState(false);
  const handleReport = () => {
    console.log("Report");
  };
  const handleChat = () => {
    console.log("Chat");
  };
  useEffect(() => {
    if (clicked) {
      updateCurrentUser("sentRequests", sentReq, "Friend has been added");

      userCollection
        .doc(user.uid)
        .set(
          {
            receivedRequests: recReq,
          },
          { merge: true }
        )
        .catch((error) => {
          console.error("Error writing document: ", error);
        });

      setClicked(false);
    }
  }, [sentReq]);

  const handleAddFriend = () => {
    setSentReq([...sentReq, user.uid]);
    setrecReq([...recReq, currentUser[0].uid]);
    setClicked(true);
  };
  return (
    <div>
      <>
        <button className="icon-btn text-secondary me-3 h4">
          <AiOutlineStop onClick={handleReport} />
        </button>
        {sentReq.some((friend) => friend == user.uid) ? (
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
