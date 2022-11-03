import React from "react";
import { Navbar } from "react-bootstrap";
import Input from "./Input";
import Messages from "./Messages";

const ChatSection = () => {
  return (
    <div className="chat-section">
      <div>
        <Messages />
        <Input />
      </div>
    </div>
  );
};

export default ChatSection;
