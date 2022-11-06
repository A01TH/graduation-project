import React from "react";
import ChallengerShortcut from "../ChallengerShortcut/ChallengerShortcut";
import { Link } from "react-router-dom";

const RecommendedChallengers = () => {
  return (
    <div>
      <div className="border-bottom mb-2 text-white">
        <h5>Recommended challengers</h5>
        <ChallengerShortcut />
        <ChallengerShortcut />
        <ChallengerShortcut />
      </div>
      <div className="p-2">
        <Link to="/" className="text-white">
          Explore all challengers
        </Link>
      </div>
    </div>
  );
};

export default RecommendedChallengers;