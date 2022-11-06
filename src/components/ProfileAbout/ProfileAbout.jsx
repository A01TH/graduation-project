import React, { useContext, useState } from "react";
import "./ProfileAbout.scss";
import userImg from "../../assets/profile/user-img-1.svg";
import Select from "react-select";
import { Link } from "react-router-dom";
import { currentContext } from "../../context/CurrentUser";
import { Modal } from "react-bootstrap";
import { useEffect } from "react";

const ProfileAbout = ({ user, users, self }) => {
  const [interests, setIneterests] = useState(user.interests);
  const [editInterests, setEditInterests] = useState(false);
  const [smShow, setSmShow] = useState(false);
  const friendsList = users.filter((friend) => {
    return friend.uid !== user.uid;
  });
  console.log(user);
  console.log(friendsList);

  const interestsOptions = [
    {
      value: 1,
      label: "Frontend Development",
    },
    {
      value: 2,
      label: "Backend Development",
    },
    {
      value: 3,
      label: "UI/UX",
    },
    {
      value: 4,
      label: "Artifcial Intellegence",
    },
  ];

  const style = {
    control: (base, state) => ({
      ...base,
      // This line disable the blue border
      background: "#000",
      textColor: "white",
      width: "100%",
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
      ...base,
      background: "#000",
      textColor: "#fff",
      cursor: "pointer",
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
        <div className="info-interests d-flex flex-wrap text-center gap-3 mb-3 w-100">
          {!editInterests ? (
            interests.map((interest) => (
              <div className="interest bg-secondary rounded-1 px-4">
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
              className="w-100"
            />
          )}
        </div>

        {self &&
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

      <div className="about-contacts mb-2">
        <div className="contacts-label text-center p-3 text-uppercase border rounded-2 fw-bold mb-4">
          Contacts
        </div>
        <div className="contacts-list">
          {friendsList
            .map((friend) => (
              <div className="contact m-2">
                <img
                  src={friend.photoUrl}
                  alt="contact"
                  className="img-fluid me-2 rounded-circle"
                />
                <Link
                  to={`/${friend.username}`}
                  className="text-white fw-bold text-decoration-none"
                >
                  {friend.name}
                </Link>
              </div>
            ))
            .slice(0, 3)}
        </div>
        <button className="btn btn-primary" onClick={() => setSmShow(true)}>
          See all contacts
        </button>
        <Modal
          size="md"
          show={smShow}
          onHide={() => setSmShow(false)}
          aria-labelledby="example-modal-sizes-title-sm"
          className="text-white"
          scrollable={true}
        >
          <Modal.Header className="border-0 bg-dark">
            <h3 className="text-center fw-bold text-uppercase mx-auto">
              Contacts
            </h3>
          </Modal.Header>
          <Modal.Body className="px-4 text-center bg-dark">
            <div className="contacts-list row">
              {friendsList.map((friend) => (
                <div className="contact mb-3 d-flex align-items-center col-lg-6">
                  <img
                    src={friend.photoUrl}
                    alt="contact"
                    className="img-fluid me-2 w-25 rounded-circle"
                  />
                  <Link
                    to={`/${friend.username}`}
                    className="fw-bold text-decoration-none"
                  >
                    {friend.name}
                  </Link>
                </div>
              ))}
            </div>
          </Modal.Body>
        </Modal>
      </div>
    </div>
  );
};

export default ProfileAbout;
