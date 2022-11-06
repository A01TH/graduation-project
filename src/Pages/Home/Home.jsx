import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { useCollectionData } from "react-firebase-hooks/firestore";
import ChallengeCard from "../../components/ChallengeCard/ChallengeCard";
import { currentContext } from "../../context/CurrentUser";
import { FirebaseContext } from "../../context/FirebaseContext";
import Post from "./../../components/AddPost/Post";
import RecommendedChallengers from "./../../components/RecommendedChallengers/RecommendedChallengers";
import RecommendedTopChallenges from "./../../components/RecommendedTopChallenges/RecommendedTopChallenges";

const Home = () => {
  const { challengeCollection } = useContext(FirebaseContext);
  const [challenges] = useCollectionData(challengeCollection);
  const { currentUser } = useContext(currentContext);
  const [currentUserPosts, setcurrentUserPosts] = useState([]);

  console.log(currentUser);

  useEffect(() => {
    if (currentUser) {
      const filteredChallenges = challenges?.filter((challenge) => {
        return challenge?.creatorID === currentUser[0]?.uid;
      });
      setcurrentUserPosts(filteredChallenges);
    }
  }, [challenges]);
  return (
    <div className=" bg-dark section-padding">
      <div className="container">
        <div className="row align-items-start justify-content-between">
          <div className="col-6 mb-5 offset-1">
            <Post />
            {currentUserPosts?.length > 0 ? (
              currentUserPosts?.map((post, index) => {
                return <ChallengeCard post={post} key={index} />;
              })
            ) : (
              <h1>Loading</h1>
            )}
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
