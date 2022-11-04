import React, { useContext } from "react";
import { Navbar } from "react-bootstrap";
import { SecondUserContext } from "../../../context/SecondUserContext";
import Input from "./Input";
import Messages from "./Messages";

const ChatSection = () => {
  const { secondUser, setSecondUser } = useContext(SecondUserContext);

  return (
    <div className="chat-section">
      <div>
        {secondUser?.name}
        <Messages className={"active"} />
        <Input />
      </div>
    </div>
  );
};

export default ChatSection;
