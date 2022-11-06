import React from "react";
import { FaUserPlus } from "react-icons/fa";

const ChallengerShortcut = ({ name, photoURL }) => {
  return (
    <div className="d-flex g-0 justify-content-between  p-2 align-items-center bg-c-grey my-2 mx-1 rounded-2 bg-c-grey-hover">
      <div className="col-10 row g-0 gap-2">
        <div className="me-2 col-3">
          <img
            src="https://via.placeholder.com/50"
            className="w-100 rounded-circle"
          />
        </div>
        <div className="col-8">
          <p className="mb-0">{name}</p>
          <small>@{name}</small>
        </div>
      </div>
      <div>
        <button className="btn col-2">
          <FaUserPlus className="fs-2 text-grey-lite text-grey-lite-hover" />
        </button>
      </div>
    </div>
  );
};

export default ChallengerShortcut;
