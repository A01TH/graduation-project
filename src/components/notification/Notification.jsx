import React from "react";
import { useContext } from "react";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { BsFillCheckCircleFill, BsXCircleFill } from "react-icons/bs";
import { currentContext } from "../../context/CurrentUser";
import { FirebaseContext } from "../../context/FirebaseContext";

const Notification = ({ name, photoURL, uid = null }) => {
  const { currentUser } = useContext(currentContext);
  const { userCollection } = useContext(FirebaseContext);
  const query = userCollection.where("uid", "==", uid);
  const [secondUser] = useCollectionData(query);
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
          sentRequests: secondUser[0].sentRequests.filter(
<<<<<<< HEAD
=======
            (id) => id !== currentUser[0].uid
          ),
        },
        { merge: true }
      )
      .catch((error) => {
        console.error("Error writing document: ", error);
      });
  };

  const handleRejectFriend = () => {
    userCollection
      .doc(currentUser[0].uid)
      .set(
        {
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
          sentRequests: secondUser[0].sentRequests.filter(
>>>>>>> d977b53ce559ef65700ae2de27ca2b2578570d1d
            (id) => id !== currentUser[0].uid
          ),
        },
        { merge: true }
      )
      .catch((error) => {
        console.error("Error writing document: ", error);
      });
  };
<<<<<<< HEAD

  const handleRejectFriend = () => {};
=======
>>>>>>> d977b53ce559ef65700ae2de27ca2b2578570d1d
  return (
    <div className="row notification align-items-center justify-content-center">
      <div className="col-2 ">
        <img src={photoURL} className="rounded-circle" alt="" />
      </div>
      <div className="col-4 ">
        <span className="fs-6">{name}</span>
      </div>
      <div className="col-6 d-flex justify-content-end  gap-2">
        <button
          className="btn btn-outline-success "
          onClick={handleAcceptFriend}
        >
          <BsFillCheckCircleFill />
        </button>
        <button className="btn btn-outline-danger" onClick={handleRejectFriend}>
          <BsXCircleFill />
        </button>
      </div>
    </div>
  );
};

export default Notification;
