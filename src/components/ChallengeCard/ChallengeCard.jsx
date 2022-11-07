import { FaHeart } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaUserFriends } from "react-icons/fa";

import { FaRegCalendarAlt } from "react-icons/fa";
import ProgressBar from "react-bootstrap/ProgressBar";
import "./challenge-card.scss";

function ChallengeCard({ post }) {
  const handleLikes = () => {};
  return (
    <div className="bg-c-grey-dark bg-blur text-white p-3 rounded-3  mx-auto my-3 w-100">
      <p>{post.title}</p>
      <div className="chall-img mb-3">
        <img
          src={"https://via.placeholder.com/150"}
          alt=""
          className="w-100 h-250px rounded-2"
        />
      </div>

      <div className="chall-owner d-flex justify-content-between mb-3 align-items-center">
        <div className="chall-owner-info d-flex align-items-center">
          <img src={post.postOwnerImg} alt="" className="me-2 rounded-circle w-100" />
          <div className="chall-owner-name">
            <p className="mb-0">{post.postOwnerName}</p>
            <small>{post.postOwnerUs}</small>
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
            <FaUserFriends /> <span>{post.participants.length} Challenger</span>
          </p>
        </div>
        <div className="w-25">
          <ProgressBar variant="danger" now={80} />
        </div>
      </div>

      <div className="chall-actions d-flex justify-content-between small align-items-center">
        <div>
          <button
            className="btn btn-danger me-2"
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
  );
}

export default ChallengeCard;
