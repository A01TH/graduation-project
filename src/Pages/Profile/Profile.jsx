import React, { useContext, useEffect, useState } from "react";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { useParams } from "react-router-dom";
import ProfileAbout from "../../components/ProfileAbout/ProfileAbout";
import ProfileInfo from "../../components/ProfileInfo/ProfileInfo";
import ProfileTimeline from "../../components/ProfileTimeline/ProfileTimeline";
import { currentContext } from "../../context/CurrentUser";
import { FirebaseContext } from "../../context/FirebaseContext";
import "./Profile.scss";

const Profile = () => {
  const { currentUser } = useContext(currentContext);
  const { userCollection } = useContext(FirebaseContext);
  const [users] = useCollectionData(userCollection);
  const { usernameParams } = useParams();
  const query = usernameParams
    ? userCollection.where("username", "==", usernameParams)
    : userCollection.where("username", "==", currentUser[0].username);
  const [filterUser, filterUserLoading] = useCollectionData(query);
  const [self, setSelf] = useState(false);

  useEffect(() => {
    if (!usernameParams || usernameParams === currentUser[0].username) {
      setSelf(true);
    } else {
      setSelf(false);
    }
  }, [usernameParams, currentUser[0]]);
  return (
    <div className="profile text-white">
      <div className="profile-cover"></div>
      <div className="profile-content bg-body">
        {filterUserLoading ? (
          <div>Loading..</div>
        ) : (
          <div className="container">
            <ProfileInfo user={filterUser[0]} self={self} />
            <div className="row">
              <div className="col-lg-3">
                <ProfileAbout user={filterUser[0]} self={self} users={users} />
              </div>
              <div className="col-lg-9">
                <ProfileTimeline user={filterUser[0]} self={self} />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
