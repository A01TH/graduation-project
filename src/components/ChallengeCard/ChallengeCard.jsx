import { FaHeart } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaUserFriends } from "react-icons/fa";

import { FaRegCalendarAlt } from "react-icons/fa";
import ProgressBar from "react-bootstrap/ProgressBar";
import "./challenge-card.scss";

function ChallengeCard() {
  return (
    <div className="bg-color text-white p-2 rounded-3  mx-auto my-3 w-75">
      <div className="chall-img mb-2 h-25">
        <img src="https://via.placeholder.com/150" alt="" className="w-100" />
      </div>

      <div className="chall-owner d-flex justify-content-between mb-3 align-items-center">
        <div className="chall-owner-info d-flex align-items-center">
          <img src="https://via.placeholder.com/50" alt="" className="me-2" />
          <div className="chall-owner-name">
            <p className="mb-0">Mikel Khaliga</p>
            <small>owner</small>
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
            <FaUserFriends /> <span>201 Challenger</span>
          </p>
        </div>
        <div className="w-25">
          <ProgressBar variant="danger" now={80} />
        </div>
      </div>

      <div className="chall-actions d-flex justify-content-between small align-items-center">
        <div>
          <button className="btn btn-danger me-2">Ask to join</button>
        </div>

        <div className="chall-reactions d-flex">
          <span className="me-3">
            <FaEye /> 1,180
          </span>
          <span className="me-3">
            <FaHeart /> 1,180
          </span>
          <span>
            <FaStar /> 1,180
          </span>
        </div>
      </div>
    </div>
  );
}

export default ChallengeCard;
