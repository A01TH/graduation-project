import React from "react";
import Message from "./Message";

const Messages = () => {
  return (
    <div className="chat-messages">
      <div className="wrapper p-3 py-4">
        <Message />
        <Message />
        <Message />
      </div>
    </div>
  );
};

export default Messages;
