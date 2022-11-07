import { useContext } from "react";
import { useState } from "react";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { FirebaseContext } from "../../context/FirebaseContext";
import ChallengeCard from "../ChallengeCard/ChallengeCard";
import "./ProfileTimeline.scss";

const ProfileTimeline = ({ user }) => {
  const [showUserChallenges, setShowUserChallenges] = useState(true);
  const { challengeCollection } = useContext(FirebaseContext);
  const [userChallenges, challengesLoading] = useCollectionData(
    challengeCollection.where("creatorID", "==", user.uid)
  );

  return (
    <div className="profile-timeline">
      <ul className="nav position-static nav-fill fw-bold">
        <li className="nav-item">
          <a
            className="nav-link active"
            onClick={() => setShowUserChallenges(true)}
          >
            My Challenges
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" onClick={() => setShowUserChallenges(false)}>
            Other Challenges
          </a>
        </li>
      </ul>
      <div className="user-challenges">
        <div className="card challenge-card  w-75 mx-auto bg-dark shadow-2">
          <div className="card-img w-100">
            <img
              src="https://via.placeholder.com/600x200"
              alt=""
              className="img-fluid w-100"
            />
          </div>
          {showUserChallenges && userChallenges ? (
            userChallenges.map((challenge, index) => {
              return <ChallengeCard post={challenge} key={index} />;
            })
          ) : (
            <h1>Loading</h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileTimeline;
