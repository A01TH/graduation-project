import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { toast, ToastContainer } from "react-toastify";
import ChallengeCard from "../../components/ChallengeCard/ChallengeCard";
import { currentContext } from "../../context/CurrentUser";
import { FirebaseContext } from "../../context/FirebaseContext";
import Toast from "../../UI/Toast/Toast";
import Post from "./../../components/AddPost/Post";
import RecommendedChallengers from "./../../components/RecommendedChallengers/RecommendedChallengers";
import RecommendedTopChallenges from "./../../components/RecommendedTopChallenges/RecommendedTopChallenges";

const Home = () => {
  const { challengeCollection, userCollection } = useContext(FirebaseContext);
  const [challenges] = useCollectionData(challengeCollection);
  const { currentUser } = useContext(currentContext);
  const [currentUserPosts, setcurrentUserPosts] = useState([]);

  const update = () => {
    // EDIT DATA
    userCollection
      .doc(currentUser[0].uid)
      .set(
        {
          name: "Mostafa Khafaji",
          photoUrl:
            "https://lh3.googleusercontent.com/a/ALm5wu3n5EcjNxxHrNesIcq8ZwxrXXiXaBA0q2xZXJ2J_g=s96-c",
          points: 5000,
        },
        { merge: true }
      )
      .then(() => {
        toast("Your Name Has Updated Successfully", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      })
      .catch((error) => {
        console.error("Error writing document: ", error);
      });
  };
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
        <button onClick={update}>update</button>
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
      <Toast />
    </div>
  );
};

export default Home;
