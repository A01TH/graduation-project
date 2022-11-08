import { FaHeart } from "react-icons/fa";
import { FcLike } from "react-icons/fc";
import { FaUserFriends } from "react-icons/fa";
import { toast } from "react-toastify";
import { FaRegCalendarAlt } from "react-icons/fa";
import ProgressBar from "react-bootstrap/ProgressBar";
import "./challenge-card.scss";
import { useContext } from "react";
import { FirebaseContext } from "../../context/FirebaseContext";
import firebase from "firebase/compat/app";
import LikeBtn from "../../UI/LikeBtn/LikeBtn";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { currentContext } from "../../context/CurrentUser";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
function ChallengeCard({ post }) {
  const { userCollection, challengeCollection } = useContext(FirebaseContext);
  const { currentUser } = useContext(currentContext);
  const query = userCollection.where("uid", "==", post.creatorID);
  const [postOwner, isLoading] = useCollectionData(query);
  const [isJoined, setIsJoined] = useState(false);
  const [liked, setLiked] = useState(false);
  const handleJoinChall = () => {
    challengeCollection
      .doc(post.cid)
      .update({
        participants: firebase.firestore.FieldValue.arrayUnion(
          currentUser[0]?.uid
        ),
      })
      .then(() => {
        toast("joined", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      })
      .catch((error) => {
        console.error("Error writing document: ", error);
      });
  };

  useEffect(() => {
    if (post.participants.includes(currentUser[0].uid)) {
      setIsJoined(true);
    }
  }, [post]);

  // const handleLikes = () => {
  //   console.log(postOwner);
  // };

  const click = () => {
    setLiked((prev) => !prev);
    console.log(liked);
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
          </div>

          <div className="chall-info d-flex justify-content-between align-items-center mb-3">
            <div className="small">
              <p className="chall-date mb-0">
                <FaRegCalendarAlt /> <span>12 NOV 2017 - 18 NOV 2017</span>
              </p>
              <p className="chall-challengers-count">
                <FaUserFriends />
                <span>{post.participants.length} Challenger</span>
              </p>
            </div>
            <div className="w-25">
              <ProgressBar animated now={45} className=" border-dark border" />
            </div>
          </div>

          <div className="chall-actions d-flex justify-content-between small align-items-center">
            <div>
              {!isJoined ? (
                <button
                  className="btn btn-primary me-2"
                  onClick={handleJoinChall}
                >
                  Join
                </button>
              ) : (
                <Link to={`/challenge/${post.cid}`}>
                  <button className="btn  me-2 btn-outline-warning">
                    Go to challenge
                  </button>
                </Link>
              )}
            </div>

            <div className="chall-reactions d-flex">
              <span className="me-3 text-danger ">
                <LikeBtn click={click} like={liked} />
                <span>{post.postLikes}</span>
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ChallengeCard;
