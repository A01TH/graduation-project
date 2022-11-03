import React from "react";
import "./ProfileAbout.scss";
import userImg from "../../assets/profile/user-img-1.svg";

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
      <button className="btn btn-primary rounded-2  d-block">
        Add more interests +
      </button>

      <hr />

      <div className="info-skills mb-2">
        <div className="skills-label text-center p-3 text-uppercase border rounded-2 fw-bold mb-4">
          Skills
        </div>
        <div className="skill d-flex justify-content-between align-items-center mb-3">
          <div className="skill-name">Branding</div>
          <div className="skill-years rounded-2 py-1 px-4">3 years</div>
        </div>
        <div className="skill d-flex justify-content-between align-items-center mb-3">
          <div className="skill-name">UI/UX</div>
          <div className="skill-years rounded-2 py-1 px-4">3 years</div>
        </div>
        <div className="skill d-flex justify-content-between align-items-center mb-4">
          <div className="skill-name">Visual Effects</div>
          <div className="skill-years rounded-2 py-1 px-4">3 years</div>
        </div>
        <button className="btn btn-primary rounded-2">Add more skills +</button>
      </div>

      <hr />

      <div className="about-contacts">
        <div className="contacts-label text-center p-3 text-uppercase border rounded-2 fw-bold mb-4">
          Contacts
        </div>
        <div className="contacts-list">
          <div className="contact m-2">
            <img src={userImg} alt="contact" className="img-fluid me-2" />
            <a href="">Monica Geller</a>
          </div>
          <div className="contact m-2">
            <img src={userImg} alt="contact" className="img-fluid me-2" />
            <a href="">Rachel Green</a>
          </div>
          <div className="contact m-2">
            <img src={userImg} alt="contact" className="img-fluid me-2" />
            <a href="">Joey Tribbiani</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileAbout;
