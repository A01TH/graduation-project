import React from "react";
import { useState } from "react";
import { Suspense } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import ContentLoader from "react-content-loader";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
// import ChallengeCard from "../../components/ChallengeCard/ChallengeCard";

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

  // const update = () => {
  //   // EDIT DATA
  //   userCollection
  //     .doc(currentUser[0].uid)
  //     .set(
  //       {
  //         name: "Mostafa Khafaji",
  //         photoUrl:
  //           "https://lh3.googleusercontent.com/a/ALm5wu3n5EcjNxxHrNesIcq8ZwxrXXiXaBA0q2xZXJ2J_g=s96-c",
  //         points: 100,
  //       },
  //       { merge: true }
  //     )
  //     .then(() => {
  //       toast("Your Name Has Updated Successfully", {
  //         position: "top-center",
  //         autoClose: 2000,
  //         hideProgressBar: false,
  //         closeOnClick: true,
  //         pauseOnHover: true,
  //         draggable: true,
  //         progress: undefined,
  //         theme: "dark",
  //       });
  //     })
  //     .catch((error) => {
  //       console.error("Error writing document: ", error);
  //     });
  // };

  useEffect(() => {
    if (currentUser) {
      // const filteredChallenges = challenges?.filter((challenge) => {
      //   return challenge?.creatorID === currentUser[0]?.uid;
      // });
      setcurrentUserPosts(challenges);
    }
  }, [challenges]);
  return (
    <div className="section-padding bg-body home">
      <div className="container">
        {/* <button onClick={update}>update</button> */}
        <div className="row align-items-start justify-content-between">
          <div className="col-md-6 col-sm-12 mb-5 offset-1">
            <Post />

            {currentUserPosts ? (
              <>
                {currentUserPosts?.map((post, index) => {
                  return (
                    <Suspense fallback={<h1>Loadin....</h1>}>
                      <ChallengeCard
                        post={post}
                        key={index}
                        currentUser={currentUser[0]}
                      />
                    </Suspense>
                  );
                })}
              </>
            ) : (
              <ContentLoader
                speed={2}
                width={400}
                height={460}
                viewBox="0 0 400 460"
                backgroundColor="#f3f3f3"
                foregroundColor="#ecebeb"
              >
                <circle cx="31" cy="31" r="15" />
                <rect x="58" y="18" rx="2" ry="2" width="140" height="10" />
                <rect x="58" y="34" rx="2" ry="2" width="140" height="10" />
                <rect x="0" y="60" rx="2" ry="2" width="400" height="400" />
              </ContentLoader>
            )}

            {currentUserPosts?.length === 0 ? (
              <h1 className="text-light">No Posts</h1>
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
