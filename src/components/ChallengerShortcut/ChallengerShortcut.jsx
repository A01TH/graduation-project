import React from "react";
import { FaUserPlus } from "react-icons/fa";

const ChallengerShortcut = ({ name, photoURL }) => {
  return (
    <div className="d-flex justify-content-between border-top p-2 align-items-center">
      <div className="d-flex">
        <div className="me-2 rounded-5 overflow-hidden">
          <img src={photoURL} className="w-100" />
        </div>
        <div>
          <p className="mb-0">{name}</p>
          <small>@{name}</small>
        </div>
      </div>
      <div>
        <button className="btn">
          <FaUserPlus className="fs-2" />
        </button>
      </div>
    </div>
  );
};

export default ChallengerShortcut;
