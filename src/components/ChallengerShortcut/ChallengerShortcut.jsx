import React from "react";
import { useState } from "react";
import { FaUserPlus } from "react-icons/fa";
import { BsFillCheckCircleFill, BsXCircleFill } from "react-icons/bs";
import { useContext } from "react";
import { FirebaseContext } from "../../context/FirebaseContext";
import { currentContext } from "../../context/CurrentUser";
import { useEffect } from "react";
import { useCollectionData } from "react-firebase-hooks/firestore";

const ChallengerShortcut = ({
  name,
  photoURL,
  notification = false,
  uid = null,
}) => {
  const { currentUser } = useContext(currentContext);
  const { userCollection, users } = useContext(FirebaseContext);
  const query = userCollection.where("uid", "==", uid);
  const [secondUser, isLoading] = useCollectionData(query);

  const handleAcceptFriend = () => {
    userCollection
      .doc(currentUser[0].uid)
      .set(
        {
          friends: [...currentUser[0].friends, uid],
          receivedRequests: currentUser[0].receivedRequests.filter(
            (id) => id !== uid
          ),
        },
        { merge: true }
      )
      .catch((error) => {
        console.error("Error writing document: ", error);
      });
    userCollection
      .doc(uid)
      .set(
        {
          friends: [...secondUser[0].friends, currentUser[0].uid],
          sentRequests: secondUser[0].receivedRequests.filter(
            (id) => id !== currentUser[0].uid
          ),
        },
        { merge: true }
      )
      .catch((error) => {
        console.error("Error writing document: ", error);
      });
  };
  useEffect(() => {
    console.log(users);
  }, []);

  const handleRejectFriend = () => {
    console.log(secondUser);
  };
  return (
    <div className="d-flex g-0 justify-content-between  p-2 align-items-center bg-light my-2 mx-1 bg-c-grey-hover">
      <div className="col-10 row g-0 gap-2">
        <div className="me-2 col-3">
          <img src={photoURL} className="w-100 rounded-circle" />
        </div>
        <div className="col-8">
          <p className="mb-0">{name}</p>
          <small>@{name}</small>
        </div>
      </div>
      <div>
        {notification ? (
          <>
            <button className="btn col-2" onClick={handleAcceptFriend}>
              <BsFillCheckCircleFill />
            </button>
            <button className="btn col-2" onClick={handleRejectFriend}>
              <BsXCircleFill />
            </button>
          </>
        ) : (
          <button className="btn col-2">
            <FaUserPlus className="fs-5 text-grey-lite text-grey-lite-hover" />
          </button>
        )}
      </div>
    </div>
  );
};

export default ChallengerShortcut;
