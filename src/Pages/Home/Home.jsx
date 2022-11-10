import React from "react";
import { useState } from "react";
import { Suspense } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import ContentLoader from "react-content-loader";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { currentContext } from "../../context/CurrentUser";
import { FirebaseContext } from "../../context/FirebaseContext";
import Toast from "../../UI/Toast/Toast";
import Post from "./../../components/AddPost/Post";
import RecommendedChallengers from "./../../components/RecommendedChallengers/RecommendedChallengers";
import RecommendedTopChallenges from "./../../components/RecommendedTopChallenges/RecommendedTopChallenges";
const ChallengeCard = React.lazy(() =>
  import("../../components/ChallengeCard/ChallengeCard")
);
const Home = () => {
  const { challengeCollection } = useContext(FirebaseContext);
  const [challenges] = useCollectionData(challengeCollection);
  const { currentUser } = useContext(currentContext);
  const [currentUserPosts, setcurrentUserPosts] = useState(challenges);

  useEffect(() => {
    if (currentUser) {
      setcurrentUserPosts(challenges);
    }
  }, [challenges]);
  return (
    <div className="mt-5 bg-body home">
      <div className="container">
        <div className="row align-items-start justify-content-between">
          <div className="col-md-6 col-sm-12 mb-5 offset-1">
            <h3 className="mb-2">
              Welcome,{" "}
              <span className="text-primary">
                {" "}
                {currentUser[0].name.split(" ")[0]}
              </span>
            </h3>
            <Post />

            {currentUserPosts ? (
              <>
                {currentUserPosts
                  ?.sort((a, b) => b.startDate.toDate() - a.startDate.toDate())
                  .map((post, index) => {
                    return (
                      <Suspense fallback={<h1>Loadin....</h1>} key={post.cid}>
                        <ChallengeCard
                          post={post}
                          currentUser={currentUser[0]}
                        />
                      </Suspense>
                    );
                  })}
              </>
            ) : (
              <ContentLoader viewBox="0 0 476 124">
                <rect x="48" y="8" width="88" height="6" rx="3" />
                <rect x="48" y="26" width="52" height="6" rx="3" />
                <rect x="0" y="56" width="410" height="6" rx="3" />
                <rect x="0" y="72" width="380" height="6" rx="3" />
                <rect x="0" y="88" width="178" height="6" rx="3" />
                <circle cx="20" cy="20" r="20" />
              </ContentLoader>
            )}

            {currentUserPosts?.length === 0 ? (
              <h1 className="text-white text-center mt-5">No Posts Yet!</h1>
            ) : null}
          </div>
          <div className="d-none d-md-block col-3">
            <RecommendedChallengers />
            <RecommendedTopChallenges />
          </div>
        </div>
      </div>
      <Toast />
    </div>
  );
};

export default Home;
