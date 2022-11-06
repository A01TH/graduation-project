import "./ProfileTimeline.scss";

const ProfileTimeline = () => {
  return (
    <div className="profile-timeline">
      <ul className="nav position-static nav-fill fw-bold">
        <li className="nav-item">
          <a className="nav-link active">My Challenges</a>
        </li>
        <li className="nav-item">
          <a className="nav-link">Other Challenges</a>
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
          <div className="card-body">Challenge 1</div>
        </div>
      </div>
    </div>
  );
};

export default ProfileTimeline;
