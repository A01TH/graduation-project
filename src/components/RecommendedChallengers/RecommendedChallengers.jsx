import React from "react";
import ChallengerShortcut from "../ChallengerShortcut/ChallengerShortcut";
import { Link } from "react-router-dom";
import { FirebaseContext } from "./../../context/FirebaseContext";
import { currentContext } from "../../context/CurrentUser";

import { useContext, useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";

const RecommendedChallengers = () => {
  const { users } = useContext(FirebaseContext);
  const { currentUser } = useContext(currentContext);
  let currentUserInterests = [];
  let currentUserFriends = [];
  let strangeUsers = [];
  let mayKnowUsersIDs = [];
  let mayKnowUsers = [];
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  if (users && currentUser && currentUser.length > 0) {
    currentUser[0].interests.forEach((interest) => {
      currentUserInterests.push(interest.value);
    });

    currentUserFriends = currentUser[0].friends;
    strangeUsers = users.filter(
      (user) =>
        !currentUserFriends.includes(user.uid) &&
        user.uid !== currentUser[0].uid
    );
    strangeUsers.forEach((user) => {
      user.interests.forEach((interest) => {
        currentUserInterests.includes(interest.value) &&
          mayKnowUsersIDs.push(user.uid);
      });

      mayKnowUsersIDs = [...new Set(mayKnowUsersIDs)];
    });

    users.forEach((user) => {
      mayKnowUsersIDs.includes(user.uid) && mayKnowUsers.push(user);
    });
  }

  return (
    <div className="bg-c-grey-dark card bg-light  py-3 pb-2 mb-5">
      <div className="mb-2 text-white ">
        <h5 className="text-center mb-3 border-grey-lite pb-2 mx-3">
          Recommended challengers
        </h5>
        {mayKnowUsers.slice(0, 4).map((usr, index) => {
          if (usr.uid !== currentUser[0].uid)
            return (
              <Link
                className=" text-decoration-none text-white"
                to={`/${usr.username}`}
              >
                <ChallengerShortcut
                  name={usr.name}
                  photoURL={usr.photoUrl}
                  key={index}
                />
              </Link>
            );
        })}
      </div>
      <div className="p-2">
        <button
          onClick={handleShow}
          to="/people you man"
          className=" text-decoration-none bg-primary text-light text-center mx-5 py-2 mt-2  card d-block 
           bg-c-grey-lite-hover"
        >
          Explore all challengers
        </button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Recommended Challengers</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {mayKnowUsers.map((user, index) => {
              return (
                <Link
                  className=" text-decoration-none text-white"
                  to={`/${user.username}`}
                >
                  <ChallengerShortcut
                    name={user.name}
                    photoURL={user.photoUrl}
                    key={index}
                  />
                </Link>
              );
            })}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};

export default RecommendedChallengers;
