import React from "react";

const ChallengerShortcut = ({ name, photoURL }) => {
  return (
    <div className="d-flex g-0 justify-content-between  p-2 align-items-center bg-light my-2 mx-1 bg-c-grey-hover">
      <div className="col-10 row g-0 gap-2">
        <div className="me-2 col-3">
          <img src={photoURL} className="w-100 rounded-circle" alt="" />
        </div>
        <div className="col-6">
          <p className="mb-0">{name}</p>
          <small>@{name}</small>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default ChallengerShortcut;
