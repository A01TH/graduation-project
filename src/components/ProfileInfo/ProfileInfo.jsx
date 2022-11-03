import "./ProfileInfo.scss";
import { ImStarFull, ImStarHalf } from "react-icons/im";
import { useState } from "react";
import {
  AiOutlineCheck,
  AiOutlineMessage,
  AiOutlineStop,
  AiOutlineUserAdd,
} from "react-icons/ai";

const ProfileInfo = () => {
  const [currentUser, setCurrentUser] = useState(false);

  return (
    <div className="profile-info">
      <div className="row">
        <div className="col-md-4">
          <div className="profile-img rounded-circle">
            <img
              src={require("./Sample.png")}
              alt="user"
              className="img-fluid w-75 border rounded-circle border-4 border-primary"
            />
          </div>
        </div>
        <div className="col-md-8">
          <div className="info-content py-3">
            <div className="user d-flex justify-content-between align-items-start">
              <div className="user">
                <h2 className="name">Chandler Bing</h2>
                <div className="username text-muted mb-3">@chandlerbing</div>
              </div>
              <div>
                {currentUser ? (
                  <button className="edit-profile btn btn-outline-secondary">
                    Edit Profile
                  </button>
                ) : (
                  <>
                    <button className="btn btn-outline-secondary btn-lg border-0  report-btn">
                      <AiOutlineStop />
                    </button>
                    <button className="btn btn-outline-secondary btn-lg border-0  message-btn">
                      <AiOutlineMessage />
                    </button>
                    <button className="btn btn-outline-secondary btn-lg border-0  add-friend-btn">
                      <AiOutlineUserAdd />
                    </button>
                  </>
                )}
              </div>
            </div>
            <div className="user-job  mb-4">
              <h4 className="text-primary">UI/UX designer</h4>
            </div>
            <div className="rating text-secondary">
              <ImStarFull />
              <ImStarFull />
              <ImStarFull />
              <ImStarFull />
              <ImStarHalf />
            </div>
            {currentUser && (
              <button className="btn btn-primary mt-4">
                Start New Challenge
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
