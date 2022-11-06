import React from "react";
import ChallengerShortcut from "../ChallengerShortcut/ChallengerShortcut";
import { Link } from "react-router-dom";
import { FirebaseContext } from "./../../context/FirebaseContext";
import { currentContext } from "../../context/CurrentUser";

import { useContext, useEffect, useState } from "react";

const RecommendedChallengers = () => {
  const { users } = useContext(FirebaseContext);
  const { currentUser } = useContext(currentContext);
  const [recommendedUsersstate, setRecommendedUsers] = useState([]);

  const interestsVals = [];

  useEffect(() => {
    if (currentUser) {
      currentUser[0]?.interests.forEach((interest) =>
        interestsVals.push(interest.value)
      );
    }
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
  }, [users]);

  return (
    <div className="bg-c-grey-dark rounded-2  py-3 pb-2 mb-5">
      <div className="mb-2 text-white ">
        <h5 className="text-center mb-3 border-grey-lite pb-2 mx-3">
          Recommended challengers
        </h5>
        <ChallengerShortcut />
        <ChallengerShortcut />
        <ChallengerShortcut />
      </div>
      <div className="p-2">
        <Link
          to="/"
          className="text-white text-decoration-none bg-c-grey-lite text-center mx-5 py-2 mt-2 rounded-2 d-block 
           bg-c-grey-lite-hover"
        >
          Explore all challengers
        </Link>
      </div>
    </div>
  );
};

export default RecommendedChallengers;
