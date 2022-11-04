import { ImStarFull, ImStarHalf } from "react-icons/im";
import { useState } from "react";
import {
  AiOutlineCheck,
  AiOutlineMessage,
  AiOutlineStop,
  AiOutlineUserAdd,
  AiFillCamera,
} from "react-icons/ai";
import { Modal } from "react-bootstrap";
import "./ProfileInfo.scss";

const ProfileInfo = () => {
  const [currentUser, setCurrentUser] = useState(false);
  const [smShow, setSmShow] = useState(false);

  return (
    <div className="profile-info">
      <div className="row">
        <div className="col-md-3">
          <div className="profile-img rounded-circle">
            <img
              src={require("./Sample.png")}
              alt="user"
              className="img-fluid w-75 border rounded-circle border-4 border-primary"
            />

            <button
              className="btn btn-primary p-2 py-1 cam-btn text-white rounded-circle me-3 position-absolute"
              onClick={() => setSmShow(true)}
            >
              <AiFillCamera />
            </button>
            <Modal
              size="sm"
              show={smShow}
              onHide={() => setSmShow(false)}
              aria-labelledby="example-modal-sizes-title-sm"
            >
              <Modal.Header className="border-0" closeButton></Modal.Header>
              <Modal.Body>
                <img
                  src={require("./Sample.png")}
                  alt="user"
                  className="img-fluid w-75 mx-auto d-block border rounded-circle border-4 border-primary"
                />
                <input type="file" name="" id="" />
              </Modal.Body>
            </Modal>
          </div>
        </div>
        <div className="col-md-9">
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
                    <button className="icon-btn text-secondary me-3 h4">
                      <AiOutlineStop />
                    </button>
                    <button className="icon-btn text-secondary me-3 h4">
                      <AiOutlineMessage />
                    </button>
                    <button className="icon-btn text-secondary me-3 h4">
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
