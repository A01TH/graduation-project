import { ImStarFull, ImStarHalf } from "react-icons/im";
import { useContext, useEffect, useState } from "react";
import { AiFillCamera } from "react-icons/ai";
import { Modal, Placeholder } from "react-bootstrap";
import "./ProfileInfo.scss";
import userImgUrl from "./Sample.png";
import { useParams } from "react-router-dom";
import { currentContext } from "../../context/CurrentUser";
import { FirebaseContext } from "../../context/FirebaseContext";
import UserAction from "./UserAction";
import Toast from "../../UI/Toast/Toast";

// const update = () => {
// EDIT DATA
//   userCollection
//     .doc(currentUser[0].uid)
//     .set(
//       {
//         name: "Mostafa Khafaji",
//         photoUrl:
//           "https://lh3.googleusercontent.com/a/ALm5wu3n5EcjNxxHrNesIcq8ZwxrXXiXaBA0q2xZXJ2J_g=s96-c",
//         points: 5000,
//       },
//       { merge: true }
//     )
//     .then(() => {
//       toast("Your Name Has Updated Successfully", {
//         position: "top-center",
//         autoClose: 2000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//         theme: "dark",
//       });
//     })
//     .catch((error) => {
//       console.error("Error writing document: ", error);
//     });
// };

const ProfileInfo = ({ user, self }) => {
  const { updateCurrentUser } = useContext(currentContext);

  const [smShow, setSmShow] = useState(false);
  const [userImg, setUserImg] = useState(user.photoUrl);
  const [editingImg, setEditingImg] = useState(userImg);

  const openFile = function (event) {
    const input = event.target;

    const reader = new FileReader();
    reader.onload = function () {
      const dataURL = reader.result;
      setEditingImg(dataURL);
    };
    reader.readAsDataURL(input.files[0]);
  };

  const removeImg = function () {
    updateCurrentUser("photoUrl", userImgUrl, "Your Photo has been removed");
    setUserImg(userImgUrl);
    setSmShow(false);
  };

  const confirmImg = () => {
    updateCurrentUser("photoUrl", editingImg, "Your Photo has been updated");
    setUserImg(editingImg);
    setSmShow(false);
  };

  return (
    <div className="profile-info">
      <div className="row">
        <div className="col-lg-3">
          <div className="profile-img rounded-circle">
            <img
              src={userImg}
              alt="user"
              className="h-100 w-100 border rounded-circle border-4 border-primary"
            />
            {self && (
              <>
                <button
                  className="btn btn-primary p-2 py-1 cam-btn text-white rounded-circle me-3 position-absolute"
                  onClick={() => setSmShow(true)}
                >
                  <AiFillCamera />
                </button>
                <Modal
                  size="md"
                  show={smShow}
                  onHide={() => setSmShow(false)}
                  aria-labelledby="example-modal-sizes-title-sm"
                >
                  <Modal.Header className="border-0 bg-dark"></Modal.Header>
                  <Modal.Body className="modalBody px-4 text-center bg-dark">
                    <div
                      className="edit-img mx-auto mb-4 rounded-circle"
                      style={{ width: "200px", height: "200px" }}
                    >
                      <img
                        src={editingImg}
                        alt="user"
                        className="h-100 w-100 border rounded-circle border-4 border-primary"
                      />
                    </div>
                    <input
                      type="file"
                      name="image"
                      id="user-img"
                      onChange={openFile}
                      className="form-control mb-3"
                    />
                    <button
                      className="btn btn-success me-2"
                      onClick={confirmImg}
                    >
                      Done
                    </button>
                    <button className="btn btn-danger" onClick={removeImg}>
                      Remove
                    </button>
                  </Modal.Body>
                </Modal>
              </>
            )}
          </div>
        </div>
        <div className="col-lg-9">
          <div className="info-content py-3">
            <div className="user d-flex justify-content-between align-items-start">
              <div className="user">
                <h2 className="name">{user.name}</h2>
                <div className="username text-muted mb-3">@{user.username}</div>
              </div>
              <div>
                {self ? (
                  <button className="edit-profile btn btn-outline-secondary">
                    Edit Profile
                  </button>
                ) : (
                  <UserAction user={user} />
                )}
              </div>
            </div>
            <div className="rating text-secondary">
              <ImStarFull />
              <ImStarFull />
              <ImStarFull />
              <ImStarFull />
              <ImStarHalf />
            </div>
            {self && (
              <button className="btn btn-primary mt-4">
                Start New Challenge
              </button>
            )}
          </div>
        </div>
      </div>
      <Toast />
    </div>
  );
};

export default ProfileInfo;
