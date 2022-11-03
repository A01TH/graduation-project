import React from "react";

const Message = () => {
  return (
    <div className="chat-message">
      <div className="wrapper">
        <div className="contact-user d-flex gap-2 align-items-center p-2 ps-3">
          <img
            className="rounded-circle"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7GoLl5TulaocWLQ8pi__zObTN8Sj5PmFvec-6NEPb&s"
            alt=""
          />
          <div className="message p-1 px-2 mt-3">
            <p>hi how are you</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Message;
