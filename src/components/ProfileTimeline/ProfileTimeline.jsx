import { useContext } from "react";
import { useState } from "react";
import { Tab, Tabs } from "react-bootstrap";
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
      {/* <ul className="nav position-static nav-fill fw-bold">
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
      </ul> */}
      <Tabs
        defaultActiveKey="profile"
        id="fill-tab-example"
        className="mb-3 border-0 position-static"
        fill
      >
        <Tab eventKey="home" title="My Challenges">
          <div className="user-challenges">
            {showUserChallenges && userChallenges ? (
              userChallenges.map((challenge, index) => {
                return <ChallengeCard post={challenge} key={index} />;
              })
            ) : (
              <h1>Loading</h1>
            )}
          </div>
        </Tab>
        <Tab eventKey="profile" title="Other Challenges">
          <div className="user-challenges">
            <h1>Loading</h1>
            <h1>Loading</h1>
            <h1>Loading</h1>
          </div>
        </Tab>
      </Tabs>
    </div>
  );
};

export default ProfileTimeline;
