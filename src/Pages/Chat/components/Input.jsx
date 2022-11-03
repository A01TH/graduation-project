import React from "react";

const Input = () => {
  return (
    <div className="chat-input">
      <div className="wrapper pt-3 d-flex p-2 gap-4 border-top border-bg-primary">
        <input className="w-75 form-control" type="text" placeholder="Send Message" />
        <button className="w-25 btn  bg-white">Send</button>
      </div>
    </div>
  );
};

export default Input;
