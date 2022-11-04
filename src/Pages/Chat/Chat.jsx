import React from "react";
import "./Chat.scss";
import ChatNavbar from "./components/ChatNavbar";
import ChatSection from "./components/ChatSection";
import LeftSidebar from "./components/LeftSidebar";
import RightSidebar from "./components/RightSidebar";
const Chat = () => {
  return (
    <div className="chat bg-dark d-flex vw-100 align-items-center justify-content-center text-white">
      <div className="wrapper w-100 h-100 row g-0">
        <div className="col-3">
          <LeftSidebar />
        </div>
        <div className="col-9">
          <ChatSection />
        </div>
      </div>
    </div>
  );
};

export default Chat;
