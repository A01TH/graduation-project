import "./ProfileInfo.scss";
import { ImStarFull, ImStarHalf } from "react-icons/im";

const ProfileInfo = () => {
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
              <button className="edit-profile btn btn-outline-secondary">
                Edit Profile
              </button>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
