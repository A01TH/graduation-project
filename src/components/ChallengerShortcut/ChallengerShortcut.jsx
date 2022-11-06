import React from "react";
import { FaUserPlus } from "react-icons/fa";

const ChallengerShortcut = () => {
  return (
    <div className=" d-flex justify-content-between  p-2 align-items-center bg-c-grey my-2 mx-1 rounded-2 bg-c-grey-hover">
      <div className="d-flex">
        <div className="me-2 rounded-5 overflow-hidden ">
          <img src="https://via.placeholder.com/50" className="w-100" />
        </div>
        <div>
          <p className="mb-0">Emy organda</p>
          <small>@emyorganda</small>
        </div>
      </div>
      <div>
        <button className="btn">
          <FaUserPlus className="fs-2 text-grey-lite text-grey-lite-hover" />
        </button>
      </div>
    </div>
  );
};

export default ChallengerShortcut;
