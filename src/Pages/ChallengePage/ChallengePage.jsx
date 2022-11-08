import React from "react";
import RecommendedChallengers from "../../components/RecommendedChallengers/RecommendedChallengers";
import RecommendedTopChallenges from "../../components/RecommendedTopChallenges/RecommendedTopChallenges";
import ChallengeTimeline from "./ChallengeTimeline";

const ChallengePage = () => {
  return (
    <div className="challenge-page bg-body">
      <div className="row">
        <div className="col-lg-8 col-12">
          <ChallengeTimeline  />
        </div>
        <div className="d-none d-lg-block col-3">
          <RecommendedChallengers />
          <RecommendedTopChallenges />
        </div>
      </div>
    </div>
  );
};

export default ChallengePage;
