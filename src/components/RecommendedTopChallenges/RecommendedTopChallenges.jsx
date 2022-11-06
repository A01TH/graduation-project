import React from "react";
import ChallengerShortcut from "../ChallengerShortcut/ChallengerShortcut";
import { FaEye } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
const RecommendedTopChallenges = () => {
  return (
    <div className="text-white my-3">
      <h5>Top</h5>
      <ChallengerShortcut />
      <div>
        <div className="border-bottom border-black">
          <img src="https://via.placeholder.com/400" alt="" className="w-100" />
        </div>
        <div className="d-flex justify-content-around border p-2">
          <span>
            <FaEye /> <small>1,500</small>
          </span>
          <span>
            <FaHeart /> <small>1,500</small>
          </span>
          <span>
            <FaStar /> <small>1,500</small>
          </span>
        </div>
      </div>
    </div>
  );
};

export default RecommendedTopChallenges;
