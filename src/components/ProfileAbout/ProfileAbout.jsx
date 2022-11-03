import React from "react";
import "./ProfileAbout.scss";

const ProfileAbout = () => {
  return (
    <div className="profile-about">
      <div className="info-interests d-flex flex-wrap text-center gap-3 mb-3">
        <div className="interest rounded-4 border px-4">UI</div>
        <div className="interest rounded-4 border px-4">UX</div>
        <div className="interest rounded-4 border px-4">Graphics</div>
        <div className="interest rounded-4 border px-4">Photography</div>
        <div className="interest rounded-4 border px-4">UI</div>
        <div className="interest rounded-4 border px-4">UI</div>
      </div>
      <button className="btn btn-primary rounded-4  d-block ms-2 w-25">
        Add +
      </button>

      <hr />

      <div className="info-skills">
        <div className="skills-label text-center p-3 text-uppercase bg-gradient rounded-2 fw-bold mb-4">
          Skills
        </div>
        <div className="skill d-flex justify-content-between align-items-center mb-3">
          <div className="skill-name">Branding</div>
          <div className="skill-years bg-secondary rounded-2 py-1 px-4">
            3 years
          </div>
        </div>
        <div className="skill d-flex justify-content-between align-items-center mb-3">
          <div className="skill-name">UI/UX</div>
          <div className="skill-years bg-secondary rounded-2 py-1 px-4">
            3 years
          </div>
        </div>
        <div className="skill d-flex justify-content-between align-items-center mb-4">
          <div className="skill-name">Visual Effects</div>
          <div className="skill-years bg-secondary rounded-2 py-1 px-4">
            3 years
          </div>
        </div>
        <button className="btn btn-primary rounded-2">Add more skills..</button>
      </div>
    </div>
  );
};

export default ProfileAbout;
