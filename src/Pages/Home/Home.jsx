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
import TopChallengers from "./../TopChallengers/TopChallengers";
import { Link } from "react-router-dom";

const ChallengeCard = React.lazy(() =>
  import("../../components/ChallengeCard/ChallengeCard")
);

const Home = () => {
  const { challengeCollection } = useContext(FirebaseContext);
  const [challenges, isLoading] = useCollectionData(challengeCollection);
  const { currentUser } = useContext(currentContext);
  const [currentUserPosts, setcurrentUserPosts] = useState(challenges);

  useEffect(() => {
    if (currentUser) {
      setcurrentUserPosts(challenges);
    }
  }, [challenges]);
  return (
    <div className="mt-5 bg-body home">
      <div className=" container-fluid">
        <div className="row align-items-start justify-content-between">
          {currentUser ? (
            <div className="col-md-2 ">
              <div
                className="profile-img border rounded-circle border-4 border-primary"
                style={{ width: "200px", height: "200px" }}
              >
                <img
                  src={currentUser[0].photoUrl}
                  alt="user"
                  className="h-100 w-100 rounded-circle "
                />
              </div>
              <div className="info-content py-3">
                <div className="user d-flex justify-content-between align-items-start">
                  <div className="user">
                    <h2 className="name fs-4">{currentUser[0].name}</h2>
                    <div className="username text-muted mb-2">
                      @{currentUser[0].username}
                    </div>
                  </div>
                </div>
              </div>
              <Toast />
            </div>
          ) : (
            <div className="col-md-2 ">
              <ContentLoader viewBox="0 0 260 160" height={160} width={260}>
                <circle cx="50" cy="30" r="30" />
                <rect x="10" y="70" rx="3" ry="3" width="40" height="10" />
                <rect x="60" y="70" rx="3" ry="3" width="70" height="10" />
                <rect x="140" y="70" rx="3" ry="3" width="20" height="10" />
                <rect x="10" y="90" rx="3" ry="3" width="90" height="10" />
                <rect x="110" y="90" rx="3" ry="3" width="70" height="10" />
                <rect x="10" y="110" rx="3" ry="3" width="70" height="10" />
                <rect x="90" y="110" rx="3" ry="3" width="60" height="10" />
              </ContentLoader>
            </div>
          )}

          <div className="col-md-6 col-sm-12  mb-2 ">
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
          <div className="d-none d-md-block col-3  ">
            <RecommendedChallengers />
            <div className="mb-5">
              <RecommendedTopChallenges
                challenges={challenges}
                isLoading={isLoading}
              />
            </div>
            <div className="rounded-2 overflow-hidden bg-light px-2">
              <h5 className="text-center mb-1 border-bottom border-light  p-3 mx-3">
                Top Challengers
              </h5>
              <TopChallengers home={true} className="w-100 mb-3" />
              <Link
                to="/top-challengers"
                className="text-decoration-none text-primary "
              >
                {" "}
                <p className="text-center"> Explore all top challengers</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Toast />
    </div>
  );
};

export default Home;
