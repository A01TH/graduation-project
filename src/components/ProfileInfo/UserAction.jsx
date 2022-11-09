import { useState, useEffect } from "react";
import { useContext } from "react";
import {
  AiFillClockCircle,
  AiOutlineMessage,
  AiOutlineStop,
  AiOutlineUserAdd,
} from "react-icons/ai";
import Toast from "../../UI/Toast/Toast";
import { currentContext } from "../../context/CurrentUser";
import { FirebaseContext } from "../../context/FirebaseContext";
import { BsFillPersonCheckFill } from "react-icons/bs";
import { MdPending } from "react-icons/md";
import { CgSandClock } from "react-icons/cg";
const UserAction = ({ user }) => {
  const { currentUser, updateCurrentUser, friends } =
    useContext(currentContext);
  const { userCollection } = useContext(FirebaseContext);
  const [sentReq, setSentReq] = useState(currentUser[0].sentRequests);
  const [recReq, setrecReq] = useState(user.receivedRequests);
  const [isFriend, setIsFriend] = useState(false);
  const [clicked, setClicked] = useState(false);
  const handleReport = () => {
    console.log("Report");
  };

  useEffect(() => {
    if (clicked) {
      updateCurrentUser(
        "sentRequests",
        sentReq,
        "Friend Request has been sent!"
      );

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

  useEffect(() => {
    if (currentUser) {
      if (currentUser[0].friends.includes(user.uid)) {
        console.log("found");
        setIsFriend(true);
      }
      if (currentUser[0].sentRequests.includes(user.uid)) {
        setClicked(true);
      }
    }
  }, [currentUser[0].friends, currentUser[0].sentRequests]);

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

        {!isFriend ? (
          <>
            {clicked ? (
              <i disabled className=" text-primary me-3 h4">
                <MdPending />
              </i>
            ) : (
              <button
                className="icon-btn text-secondary me-3 h4"
                onClick={() => handleAddFriend()}
              >
                <AiOutlineUserAdd />
              </button>
            )}
          </>
        ) : (
          <i className=" text-primary me-3 h4" disabled>
            <BsFillPersonCheckFill />
          </i>
        )}

        <Toast />
      </>
    </div>
  );
};

export default UserAction;
