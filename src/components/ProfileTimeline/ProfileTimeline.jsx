import "./ProfileTimeline.scss";

const ProfileTimeline = () => {
  return (
    <div className="profile-timeline">
      <ul class="nav position-static nav-fill fw-bold">
        <li class="nav-item">
          <a class="nav-link active">My Challenges</a>
        </li>
        <li class="nav-item">
          <a class="nav-link">Other Challenges</a>
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
