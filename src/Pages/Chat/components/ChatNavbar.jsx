import React from "react";
import { BiSearch } from "react-icons/bi";
import { TbBrandFacebook } from "react-icons/tb";

const ChatNavbar = () => {
  return (
    <div className="py-3 dark-lite d-flex gap-4 px-3 text-white align-items-center">
      <div className="chat-search  rounded-2">
        <input
          className="border-0 bg-secondary rounded-3 text-white py-1 px-3"
          type="text"
          placeholder="Search"
        />
      </div>
      <div>
        <button className="bg-secondary  rounded-3 text-white border-0">+</button>
      </div>
      <h4>Emy Organda</h4>
      <div>
        <h6 className="p-0">Onlien</h6>
      </div>
    </div>
  );
};

export default ChatNavbar;
