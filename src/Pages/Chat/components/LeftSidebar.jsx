import React from "react";
import { BiSearchAlt2 } from "react-icons/bi";

const LeftSidebar = () => {
  return (
    <div className="chat-sidebar h-100">
      <div className="wrapper pt-2">
        <div className="chat-search w-100 d-flex mx-auto mb-3 p-2 gap-2 p-1 px-3 rounded-4 align-items-center">
          <BiSearchAlt2 className="fs-4" />
          <input
            type="text"
            className="w-100 text-white outline-none border-0 bg-transparent "
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
          </div>{" "}
          <div className="contact-user d-flex gap-2 align-items-center p-2 ps-3 ">
            <img
              className="rounded-circle"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7GoLl5TulaocWLQ8pi__zObTN8Sj5PmFvec-6NEPb&s"
              alt=""
            />
            <div>
              <span>jake jake</span>
              <p>hi how rejk mf you</p>
            </div>
          </div>{" "}
          <div className="contact-user d-flex gap-2 align-items-center p-2 ps-3 ">
            <img
              className="rounded-circle"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7GoLl5TulaocWLQ8pi__zObTN8Sj5PmFvec-6NEPb&s"
              alt=""
            />
            <div>
              <span>Jaane jifew</span>
              <p>hi are you</p>
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
          </div>          <div className="contact-user d-flex gap-2 align-items-center p-2 ps-3 ">
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
