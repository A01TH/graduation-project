import React from "react";

const LeftSidebar = () => {
  return (
    <div className="chat-sidebar h-100 border-end border-primary">
      <div className="wrapper">
        <div className="chat-navbar border-bot p-1">
          <h3>Chat</h3>
        </div>
        <div className="chat-search p-2 border-bottom mb-1">
          <input
            type="text"
            className="w-100 bg-transparent text-white border-0 p-1"
            placeholder="Search"
          />
        </div>
        <div className="chat-users">
          <div className="contact-user d-flex gap-2 align-items-center p-2 ps-3 active-chat-user">
            <img
              className="rounded-circle"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7GoLl5TulaocWLQ8pi__zObTN8Sj5PmFvec-6NEPb&s"
              alt=""
            />
            <div>
              <span>Jaane</span>
              <p>hi how are you</p>
            </div>
          </div>{" "}
          <div className="contact-user d-flex gap-2 align-items-center p-2 ps-3">
            <img
              className="rounded-circle"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7GoLl5TulaocWLQ8pi__zObTN8Sj5PmFvec-6NEPb&s"
              alt=""
            />
            <div>
              <span>Jaane</span>
              <p>hi how are you</p>
            </div>
          </div>{" "}
          <div className="contact-user d-flex gap-2 align-items-center p-2 ps-3 ">
            <img
              className="rounded-circle"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7GoLl5TulaocWLQ8pi__zObTN8Sj5PmFvec-6NEPb&s"
              alt=""
            />
            <div>
              <span>Jaane</span>
              <p>hi how are you</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSidebar;
