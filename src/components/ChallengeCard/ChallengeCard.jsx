import { FaUserFriends } from "react-icons/fa";
import { toast } from "react-toastify";
import { FaRegCalendarAlt } from "react-icons/fa";
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
import dateFormat from "dateformat";
import Badge from "react-bootstrap/Badge";
import { SiCoursera, SiUdemy, SiYoutube } from "react-icons/si";

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

  const click = () => {
    setLiked((prev) => !prev);
  };

  return (
    <div>
      {!isLoading && (
        <div className="p-3 card  mx-auto my-3 w-100 bg-body border-primary">
          <h5 className="text-primary fw-bold">{post.title}</h5>

          <div className="chall-owner d-flex justify-content-between mb-3 align-items-center   ">
            <Link
              className="tex text-decoration-none "
              to={`/${postOwner[0].username}`}
            >
              <div className="chall-owner-info d-flex align-items-center">
                <img
                  src={postOwner[0].photoUrl}
                  alt=""
                  className="me-2 rounded-circle w-100px"
                />

                <div className="chall-owner-name">
                  <p className="mb-0">{postOwner[0].name}</p>
                  <small className="text-muted ">
                    @{postOwner[0].username}
                  </small>
                </div>
              </div>
            </Link>
            <div className="">
              <Badge bg="primary">{post.category.label}</Badge>
            </div>
          </div>
          <div className="px-3 my-2 border-bottom border-primary pb-2">
            {post.desc}
          </div>
          <div className="chall-info d-flex justify-content-between align-items-center mb-3">
            <div className="small">
              <p className="chall-date mb-0">
                <FaRegCalendarAlt className="me-1" />
                <Badge bg="secondary">{`${dateFormat(
                  post.startDate.toDate(),
                  "dddd, mmmm , yyyy"
                )} `}</Badge>
                <span>
                  <span> To </span>
                  <Badge bg="success">
                    {`${dateFormat(
                      post.endDate.toDate(),
                      "dddd, mmmm , yyyy"
                    )} `}
                  </Badge>
                </span>
              </p>
              <p className="mb-0">
                <FaUserFriends className="me-1" />
                <span>{post.participants.length} Challenger</span>
              </p>
              <p className="mb-0">
                {post.site === "Youtube" ? (
                  <i className="me-2 youtube">
                    <SiYoutube />
                  </i>
                ) : post.site === "Coursera" ? (
                  <i className="me-1 coursera">
                    <SiCoursera />
                  </i>
                ) : (
                  <i className="me-1 udemy">
                    <SiUdemy />
                  </i>
                )}

                <a href="" className=" text-decoration-none">
                  Link for the course
                </a>
              </p>
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

            <div className="chall-reactions d-flex justify-content-center align-items-center gap-0">
              <LikeBtn click={click} like={liked} />
              <span>{post.postLikes}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ChallengeCard;
