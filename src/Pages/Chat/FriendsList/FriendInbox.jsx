import { useContext } from "react";
import { SecondUserContext } from "../../../context/SecondUserContext";
const FriendInbox = ({ active, user }) => {
  const { secondUser, setSecondUser } = useContext(SecondUserContext);
  return (
    <div
      className={`msg ${user?.uid === secondUser?.uid && "active"}`}
      onClick={() => {
        setSecondUser(user);
      }}
    >
      <div className="msg-profile group">
        <img src={user.photoUrl} alt={user?.name} />
      </div>
      <div className="msg-detail">
        <div className="msg-username">{user?.name}</div>
      </div>
    </div>
  );
};

export default FriendInbox;
