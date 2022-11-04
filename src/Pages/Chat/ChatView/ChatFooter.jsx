import React, { useState } from "react";
import { useContext } from "react";
import { FirebaseContext } from "../../../context/FirebaseContext";
import { currentContext } from "../../../context/CurrentUser";
import { SecondUserContext } from "../../../context/SecondUserContext";

const ChatFooter = () => {
  const { messageCollection } = useContext(FirebaseContext);
  const { userData } = useContext(currentContext);
  const { secondUser } = useContext(SecondUserContext);

  const [msgContent, setMsgContent] = useState("");
  const handleSendMsg = (e) => {
    e.preventDefault();
    if (msgContent) {
      messageCollection.add({
        msg: msgContent,
        createdBy: userData.uid,
        sentTo: secondUser.uid,
        createdAt: new Date(),
        relation: `${userData.uid}/${secondUser.uid}`,
      });
    }

    setMsgContent("");
  };
  return (
    <div className="chat-area-footer">
      <form onSubmit={handleSendMsg}>
        <input
          type="text"
          value={msgContent}
          onChange={(e) => setMsgContent(e.target.value)}
          placeholder="Type something here..."
        />
        <button type="submit">Send 🕊 </button>
      </form>
    </div>
  );
};

export default ChatFooter;
