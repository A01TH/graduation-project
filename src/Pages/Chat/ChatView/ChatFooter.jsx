import React, { useState } from "react";
import { useContext } from "react";
import { FirebaseContext } from "../../../context/FirebaseContext";
import { currentContext } from "../../../context/CurrentUser";
import { SecondUserContext } from "../../../context/SecondUserContext";
import { IoSend } from "react-icons/io5";

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

      const lastMessage = document.querySelector(".chat-area-main").lastChild;
      lastMessage.scrollIntoView(false);
    }

    setMsgContent("");
  };
  return (
    <div className="chat-area-footer chat-input">
      <form
        className=" d-flex p-2 gap-4 bg-transparent justify-content-center"
        onSubmit={handleSendMsg}
      >
        <input
          className="w-50 outline-none text-white"
          type="text"
          value={msgContent}
          onChange={(e) => setMsgContent(e.target.value)}
          placeholder="Type something here..."
        />
        <button
          className="btn d-flex justify-content-center align-items-center p-2"
          type="submit"
        >
          <IoSend />
        </button>
      </form>
    </div>
  );
};

export default ChatFooter;
