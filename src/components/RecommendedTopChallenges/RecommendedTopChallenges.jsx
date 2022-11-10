import React from "react";
import ChallengerShortcut from "../ChallengerShortcut/ChallengerShortcut";

const RecommendedTopChallenges = ({ challenges }) => {
  return (
    <div className=" card  py-3 pb-2 text-white bg-body border-primary text-center">
      <h5 className="text-center mb-3 border-grey-lite pb-2 mx-3">
        Top Challenges
      </h5>
      {challenges.map((challenges) => {
        return <ChallengerShortcut />;
      })}

      <div className="d-flex justify-content-around  p-2"></div>
    </div>
  );
};

export default RecommendedTopChallenges;
