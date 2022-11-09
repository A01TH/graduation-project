import React from "react";
import firebase from "firebase/compat/app";
import { useEffect } from "react";
import { useContext } from "react";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { BsFillCheckCircleFill, BsXCircleFill } from "react-icons/bs";
import { currentContext } from "../../context/CurrentUser";
import { FirebaseContext } from "../../context/FirebaseContext";

const Notification = ({ name, photoURL, uid }) => {
  const { currentUser } = useContext(currentContext);
  const { userCollection } = useContext(FirebaseContext);
  const query = userCollection.where("uid", "==", uid);
  const [secondUser] = useCollectionData(query);
  // console.log(secondUser);
  // console.log(currentUser[0].sentRequests);
  // console.log("uid", uid);
  const handleAcceptFriend = () => {
    userCollection
      .doc(currentUser[0].uid)
      .set(
        {
          friends: [...currentUser[0].friends, uid],
          sentRequests: [
            ...currentUser[0].sentRequests.filter((id) => id !== uid),
          ],
        },
        { merge: true }
      )
      .catch((error) => {
        console.error("Error writing document: ", error);
      });
    // userCollection
    //   .doc(currentUser[0].uid)
    //   .update({
    //     friends: firebase.firestore.FieldValue.arrayUnion(uid),
    //     sentRequests: firebase.firestore.FieldValue.arrayRemove(uid),
    //   })
    //   .catch((error) => {
    //     console.error("Error writing document: ", error);
    //   });

    userCollection
      .doc(uid)
      .set(
        {
          friends: [...secondUser[0].friends, currentUser[0].uid],
          receivedRequests: secondUser[0].receivedRequests.filter(
            (id) => id !== currentUser[0].uid
          ),
        },
        { merge: true }
      )
      .catch((error) => {
        console.error("Error writing document: ", error);
      });

    // userCollection
    //   .doc(uid)
    //   .update({
    //     friends: firebase.firestore.FieldValue.arrayUnion(currentUser[0].uid),
    //     receivedRequests: firebase.firestore.FieldValue.arrayRemove(
    //       currentUser[0].uid
    //     ),
    //     //  friends: [...secondUser[0].friends, currentUser[0].uid],
    //     //  receivedRequests: secondUser[0].receivedRequests.filter(
    //     //    (id) => id !== currentUser[0].uid
    //     //  ),
    //   })
    //   .catch((error) => {
    //     console.error("Error writing document: ", error);
    //   });
  };
  useEffect(() => {
    console.log(secondUser);
  }, [currentUser[0]]);
  const handleRejectFriend = () => {};
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
