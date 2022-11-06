import React from "react";
import ChallengerShortcut from "../ChallengerShortcut/ChallengerShortcut";
import { Link } from "react-router-dom";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { FirebaseContext } from "./../../context/FirebaseContext";
import { currentContext } from "../../context/CurrentUser";

import { useContext, useEffect, useState } from "react";

const RecommendedChallengers = () => {
  const { userCollection } = useContext(FirebaseContext);
  const [users] = useCollectionData(userCollection);
  const { currentUser } = useContext(currentContext);
  const [recommendedUsersstate, setRecommendedUsers] = useState([]);

  // console.log(users);
  // console.log(currentUser);

  const interestsVals = [];

  useEffect(() => {
    if (currentUser) {
      currentUser[0]?.interests.forEach((interest) =>
        interestsVals.push(interest.value)
      );
    }

    // console.log(interestsVals);
  }, [currentUser]);

  useEffect(() => {
    const recommendedUsers = [];
    users?.forEach((usr) => {
      usr.interests?.forEach((interest) => {
        if (interestsVals.includes(interest.value)) {
          recommendedUsers.push(usr);
        }
      });

      setRecommendedUsers(recommendedUsers);
    });

    console.log("RECOMMENDEDDDDDD", recommendedUsers);
  }, [users]);

  return (
    <div>
      <div className="border-bottom mb-2 text-white">
        <h5>Recommended challengers</h5>
        {recommendedUsersstate.map((usr) => {
          return <ChallengerShortcut name={usr.name} photoURL={usr.photoURL} />;
        })}
      </div>
      <div className="p-2">
        <Link to="/" className="text-white">
          Explore all challengers
        </Link>
      </div>
    </div>
  );
};

export default RecommendedChallengers;
