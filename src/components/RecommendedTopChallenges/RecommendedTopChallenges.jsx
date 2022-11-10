import React from "react";
import ChallengerShortcut from "../ChallengerShortcut/ChallengerShortcut";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { useContext, useState, useEffect } from "react";
import { FirebaseContext } from "../../context/FirebaseContext";
import ChallengeCard from "../ChallengeCard/ChallengeCard";

const RecommendedTopChallenges = () => {
  const { challengeCollection } = useContext(FirebaseContext);
  const [challenges] = useCollectionData(challengeCollection);
  const [topChallenge, setTopChallenge] = useState([]);

  useEffect(() => {
    if (challenges) {
      challenges.sort((a, b) => b.postLikes.length - a.postLikes.length);
      setTopChallenge(challenges[0]);
    }
  }, [challenges]);

  return (
    <div className=" card  py-3 pb-2 text-white bg-body border-primary text-center">
      <h5 className="text-center mb-3 border-grey-lite pb-2 mx-3">
        Top Challenge
      </h5>

      <ChallengeCard post={topChallenge} />
    </div>
  );
};

export default RecommendedTopChallenges;
