import ChatFooter from "./ChatView/ChatFooter";
import ChatContent from "./ChatView/ChatContent";
import ChatTitle from "./ChatView/ChatTitle";
import FriendList from "./FriendsList/Friendslist";
import "./Chat.scss";
import { useContext } from "react";
import { SecondUserContext } from "../../context/SecondUserContext";
const ChatView = () => {
  const { secondUser } = useContext(SecondUserContext);
  return (
    <>
      <div className="wrapper bg-dark vh-100">
        <div className="conversation-area">
          <FriendList />
        </div>
        <div className="chat-area">
          {secondUser ? (
            <>
              <ChatTitle />
              <ChatContent />
              <ChatFooter />
            </>
          ) : (
            <div className="welcome-msg">Welcome In Our Chat </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ChatView;
