import { useContext } from "react";
import { SecondUserContext } from "../../../context/SecondUserContext";
const ChatTitle = () => {
  const { secondUser } = useContext(SecondUserContext);
  return (
    <div className="chat-area-header">
      <div className="chat-area-title">{secondUser?.name}</div>
    </div>
  );
};

export default ChatTitle;
