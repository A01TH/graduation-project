import React from "react";
import Background from "../../components/background/Background";
import ProfileAbout from "../../components/ProfileAbout/ProfileAbout";
import ProfileInfo from "../../components/ProfileInfo/ProfileInfo";
import ProfileTimeline from "../../components/ProfileTimeline/ProfileTimeline";
import "./Profile.scss";

const Profile = () => {
  return (
    <div className="profile text-white">
      <div className="profile-cover">
        <Background />
      </div>
      <div className="profile-content bg-dark">
        <div className="container">
          <ProfileInfo />
          <div className="row">
            <div className="col-md-4">
              <ProfileAbout />
            </div>
            <div className="col-md-8">
              <ProfileTimeline />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
