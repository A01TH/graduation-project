import React from "react";
import ChallengerShortcut from "../ChallengerShortcut/ChallengerShortcut";
import { FaEye } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
const RecommendedTopChallenges = () => {
  return (
    <div className="bg-c-grey-dark rounded-2  py-3 pb-2 text-white">
      <h5 className="text-center mb-3 border-grey-lite pb-2 mx-3">Top</h5>
      <ChallengerShortcut />
      <div className="">
        <div className="border-bottom border-black mt-4  ">
          <img src="https://via.placeholder.com/400" alt="" className="w-100" />
        </div>
        <div className="d-flex justify-content-around  p-2">
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
