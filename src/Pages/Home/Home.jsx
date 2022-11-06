import React from "react";
import ChallengeCard from "../../components/ChallengeCard/ChallengeCard";
import Post from "./../../components/AddPost/Post";
import RecommendedChallengers from "./../../components/RecommendedChallengers/RecommendedChallengers";
import RecommendedTopChallenges from "./../../components/RecommendedTopChallenges/RecommendedTopChallenges";

const Home = () => {
  return (
    <div className=" bg-dark section-padding">
      <div className="container">
        <div className="row align-items-start justify-content-between">
          <div className="col-6 mb-5 offset-1">
            <Post />
            <ChallengeCard />
            <ChallengeCard />
          </div>
          <div className="col-3">
            <RecommendedChallengers />
            <RecommendedTopChallenges />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
