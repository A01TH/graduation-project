import React from "react";
import { FaUserPlus } from "react-icons/fa";

const ChallengerShortcut = ({ name, photoURL }) => {
  return (
    <div className="d-flex justify-content-between border-top p-2 align-items-center">
      <div className="row">
        <div className=" rounded-5 overflow-hidden col-3">
          <img src={photoURL} className="w-100" />
        </div>
        <div className="col-6">
          <p className="mb-0">{name}</p>
          <small>@{name}</small>
        </div>
        <div className="col-3">
          <button className="btn">
            <FaUserPlus className="fs-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChallengerShortcut;
