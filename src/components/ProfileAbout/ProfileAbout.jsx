import React, { useState } from "react";
import "./ProfileAbout.scss";
import userImg from "../../assets/profile/user-img-1.svg";
import Select from "react-select";

const ProfileAbout = () => {
  const [interests, setIneterests] = useState([]);
  const [editInterests, setEditInterests] = useState(false);
  const [currentUser, setCurrentUser] = useState(true);

  const interestsOptions = [
    {
      value: 1,
      label: "Reading",
    },
    {
      value: 2,
      label: "Training",
    },
    {
      value: 3,
      label: "Studying",
    },
    {
      value: 4,
      label: "Cooking",
    },
  ];

  const style = {
    control: (base, state) => ({
      ...base,
      // This line disable the blue border
      background: "#000",
      textColor: "white",
      border: state.isFocused
        ? "1px solid rgba(54,23,94, 0.5)"
        : "1px solid #cccccc",
      boxShadow: state.isFocused
        ? "0px 0px 0px 4px rgba(54,23,94, 0.2)"
        : "none",
      "&:hover": {
        border: state.isFocused
          ? "1px solid rgba(54,23,94, 0.5)"
          : "1px solid #cccccc",
        boxShadow: state.isFocused
          ? "0px 0px 0px 4px rgba(54,23,94, 0.2)"
          : "none",
      },
    }),
    option: (base, state) => ({
      background: "#000",
      textColor: "#fff",
    }),
  };

  function handleEditInterests() {
    setEditInterests(true);
  }

  function confirmEditInterests() {
    setEditInterests(false);
  }

  return (
    <div className="profile-about">
      <div className="mb-2">
        <div className="info-interests d-flex flex-wrap text-center gap-3 mb-3">
          {!editInterests ? (
            interests.map((interest) => (
              <div className="interest rounded-4 border px-4">
                {interest.label}
              </div>
            ))
          ) : (
            <Select
              closeMenuOnSelect={false}
              defaultValue={interests}
              isMulti
              options={interestsOptions}
              styles={style}
              onChange={(choice) => setIneterests(choice)}
            />
          )}
        </div>

        {currentUser &&
          (!editInterests ? (
            <button
              className="btn btn-primary rounded-2  d-block"
              onClick={handleEditInterests}
            >
              {interests.length ? "Edit" : "Add interests"}
            </button>
          ) : (
            <button
              className="btn btn-primary rounded-2  d-block"
              onClick={confirmEditInterests}
            >
              Done
            </button>
          ))}
      </div>

      {/* <div className="info-skills mb-2">
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
        <button className="btn btn-primary rounded-2">Edit</button>
      </div> */}

      <div className="about-contacts">
        <div className="contacts-label text-center p-3 text-uppercase border bg-body rounded-2 fw-bold mb-4">
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
        <button className="btn btn-primary">See all contacts</button>
      </div>
    </div>
  );
};

export default ProfileAbout;
