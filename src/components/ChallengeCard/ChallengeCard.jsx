import { FaHeart } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { FaUserFriends } from "react-icons/fa";

import { FaRegCalendarAlt } from "react-icons/fa";
import ProgressBar from "react-bootstrap/ProgressBar";
import "./challenge-card.scss";
import { useContext } from "react";
import { FirebaseContext } from "../../context/FirebaseContext";
import { useCollectionData } from "react-firebase-hooks/firestore";

function ChallengeCard({ post }) {
  const { userCollection } = useContext(FirebaseContext);
  const query = userCollection.where("uid", "==", post.creatorID);
  const [postOwner, isLoading] = useCollectionData(query);
  const handleLikes = () => {
    console.log(postOwner);
  };
  return (
    <>
      {!isLoading && (
        <div className="bg-c-grey-dark bg-c-dark  p-3 card  mx-auto my-3 w-100">
          <h5 className="text-white ">{post.title}</h5>
          <div className="chall-img mb-3">
            {/* <img
              src={"https://via.placeholder.com/150"}
              alt=""
              className="w-100 h-250px rounded-2"
            /> */}
          </div>

          <div className="chall-owner d-flex justify-content-between mb-3 align-items-center">
            <div className="chall-owner-info d-flex align-items-center">
              <img
                src={postOwner[0].photoUrl}
                alt=""
                className="me-2 rounded-circle w-100px"
              />

              <div className="chall-owner-name">
                <p className="mb-0">{postOwner[0].name}</p>
                <small>{postOwner[0].username}</small>
              </div>
            </div>
            <div className="chall-fav-count">
              <p>
                + 270 <FaHeart />{" "}
              </p>
            </div>
          </div>

          <div className="chall-info d-flex justify-content-between align-items-center mb-3">
            <div className="small">
              <p className="chall-date mb-0">
                <FaRegCalendarAlt /> <span>12 NOV 2017 - 18 NOV 2017</span>
              </p>
              <p className="chall-challengers-count">
                <FaUserFriends />{" "}
                <span>{post.participants.length} Challenger</span>
              </p>
            </div>
            <div className="w-25">
              <ProgressBar animated now={45} className=" border-dark border" />
            </div>
          </div>

          <div className="chall-actions d-flex justify-content-between small align-items-center">
            <div>
              <button
                className="btn btn-primary me-2"
                disabled={post.status === "individual"}
              >
                Ask to join
              </button>
            </div>

            <div className="chall-reactions d-flex">
              <span className="me-3">
                <FaEye /> 1,180
              </span>
              <span className="me-3" onClick={handleLikes}>
                <FaHeart /> {post.postLikes}
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ChallengeCard;
