import React from "react";
import { IoSend } from "react-icons/io5";
const Input = () => {
  return (
    <div className="chat-input">
      <div className="wrapper d-flex p-2 gap-4 bg-transparent justify-content-center">
        <input
          className="w-50  outline-none text-white"
          type="text"
          placeholder="Message"
        />
        <button className="btn  d-flex justify-content-center align-items-center p-2">
          <IoSend />
        </button>
      </div>
    </div>
  );
};

export default Input;
