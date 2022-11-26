import React from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import ContentLoader from "react-content-loader";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { FirebaseContext } from "../../context/FirebaseContext";
import ChallengeCard from "../ChallengeCard/ChallengeCard";

const RecommendedTopChallenges = () => {
  const { challengeCollection } = useContext(FirebaseContext);
  const [challenges, isLoading] = useCollectionData(challengeCollection);

  return (
    <div className=" card  p-3 text-white border border-primary bg-body overflow-hidden">
      <h5 className="text-center mb-3 text-white  pb-2 mx-3">Top Challenges</h5>
      {isLoading ? (
        <>
          <ContentLoader viewBox="0 0 500 475" height={475} width={500}>
            <circle cx="70.2" cy="73.2" r="41.3" />
            <rect x="129.9" y="29.5" width="125.5" height="17" />
            <rect x="129.9" y="64.7" width="296" height="17" />
            <rect x="129.9" y="97.8" width="253.5" height="17" />
            <rect x="129.9" y="132.3" width="212.5" height="17" />
          </ContentLoader>
        </>
      ) : (
        <>
          {challenges

            .sort((a, b) => b.postLikes.length - a.postLikes.length)
            .slice(0, 3)
            .map((chall) => (
              <div
                key={chall.cid}
                className="d-flex justify-content-between align-items-center mb-3"
              >
                <h6 className="text-primary text-capitalize">{chall.title}</h6>
                <button className="btn btn-sm btn-primary">View</button>
              </div>
            ))}
        </>
      )}
    </div>
  );
};

export default RecommendedTopChallenges;
