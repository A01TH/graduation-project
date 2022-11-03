import React from "react";
import Input from "./Input";
import Messages from "./Messages";

const ChatSection = () => {
  return (
    <div>
      <div>
        <Messages />
        <Input />
      </div>
    </div>
  );
};

export default ChatSection;
