import { getDocs } from "firebase/firestore";
import React, { useContext, useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { Form, FormSelect, OverlayTrigger, Tooltip } from "react-bootstrap";
import ContentLoader from "react-content-loader";
import { useCollectionData } from "react-firebase-hooks/firestore";
import firebase from "firebase/compat/app";
import { Link, useParams } from "react-router-dom";
import { FirebaseContext } from "../../context/FirebaseContext";
import ChallengeComment from "./ChallengeComment";
import { currentContext } from "../../context/CurrentUser";
import { toast } from "react-toastify";
import Toast from "../../UI/Toast/Toast";

const ChallengeTimeline = () => {
  const { cid } = useParams();
  const { challengeCollection, userCollection } = useContext(FirebaseContext);
  const { currentUser } = useContext(currentContext);
  const [challenge, challengeLoading] = useCollectionData(
    challengeCollection.where("cid", "==", cid)
  );
  const progressRef = useRef();
  const commentRef = useRef();
  const [userProgress, setUserProgress] = useState(0);

  useEffect(() => {
    const getParticipants = async () => {
      const participants = await getDocs(
        userCollection.where("uid", "in", challenge[0].participants)
      );
      let list = [];
      participants.forEach((doc) => {
        list.push(doc.data());
      });
      setParticipatsList(list);
    };
    if (!challengeLoading) {
      getParticipants();
      setUserProgress(
        challenge.postComments.findLast(
          (comment) => comment.uid === currentUser[0].uid
        ).progress
      );
    }
  }, [challenge]);

  const [progressInput, setProgressInput] = useState(false);
  const [participantsList, setParticipatsList] = useState([]);

  const commentHandler = (e) => {
    e.preventDefault();
    challengeCollection
      .doc(cid)
      .update({
        postComments: firebase.firestore.FieldValue.arrayUnion({
          uid: currentUser[0].uid,
          progress: progressRef.current.value,
          comment: commentRef.current.value,
        }),
      })
      .then(() => {
        console.log("done");
        toast("Progress has been updated", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      })
      .catch((error) => {
        console.error("Error writing document: ", error);
      });
    setProgressInput(false);
  };

  if (challengeLoading) {
    return (
      <div className="card bg-body border border-primary p-3">
        <div className="card-header">
          <ContentLoader
            viewBox="0 0 778 116"
            width={778}
            height={116}
            backgroundColor="#ccc"
            foregroundColor="#000"
          >
            <rect x="37" y="34" rx="0" ry="0" width="0" height="0" />
            <rect x="28" y="29" rx="0" ry="0" width="258" height="32" />
            <rect x="28" y="71" rx="0" ry="0" width="465" height="32" />
            <rect x="434" y="94" rx="0" ry="0" width="0" height="0" />
            <rect x="29" y="116" rx="0" ry="0" width="749" height="32" />
          </ContentLoader>
        </div>
        <div className="card-body">
          <ContentLoader
            width={1000}
            height={100}
            viewBox="0 0 1000 100"
            backgroundColor="#ccc"
            foregroundColor="#000"
          >
            <circle cx="10" cy="20" r="8" />
            <rect x="25" y="15" rx="5" ry="5" width="220" height="10" />
            <circle cx="10" cy="50" r="8" />
            <rect x="25" y="45" rx="5" ry="5" width="220" height="10" />
            <circle cx="10" cy="80" r="8" />
            <rect x="25" y="75" rx="5" ry="5" width="220" height="10" />
            <circle cx="10" cy="110" r="8" />
            <rect x="25" y="105" rx="5" ry="5" width="220" height="10" />
          </ContentLoader>
        </div>
      </div>
    );
  }

  return (
    <div className="card bg-body border border-primary p-3">
      <div className="card-header border-primary">
        <h5>{challenge[0].title}</h5>
        <p>{challenge[0].desc}</p>
      </div>
      <div className="card-body">
        <div className="card bg-body border-primary mb-3 px-3">
          <legend>Participants</legend>
          <div className="row p-2 g-2">
            {participantsList.map((participant) => (
              <OverlayTrigger
                placement="bottom"
                delay={{ show: 100 }}
                overlay={
                  <Tooltip id="my-tooltip-id">{participant.username}</Tooltip>
                }
              >
                <div className="contact mb-3 col-1">
                  <Link
                    to={`/${participant.username}`}
                    className="text-white fw-bold text-decoration-none"
                  >
                    <img
                      src={participant.photoUrl}
                      className="img-fluid rounded-circle"
                    />
                  </Link>
                </div>
              </OverlayTrigger>
            ))}
          </div>
        </div>

        <div className="comments card-scroll">
          <legend>Timeline</legend>
          {challenge[0].postComments.map((comment) => {
            return (
              <ChallengeComment
                comment={comment}
                participants={participantsList}
              />
            );
          })}
        </div>
        <legend>Your progress</legend>
        <div className="g-2 mb-3">
          <div class="progress">
            <div
              class="progress-bar progress-bar-striped progress-bar-animated bg-info"
              role="progressbar"
              style={{ width: `${userProgress}%` }}
            ></div>
          </div>
        </div>
        <hr />

        {!progressInput ? (
          <div>
            <button
              className="btn btn-primary"
              onClick={() => setProgressInput(true)}
            >
              Update progress
            </button>
          </div>
        ) : (
          <Form onSubmit={commentHandler}>
            <div className="form-group mb-3">
              I've done
              <Form.Select
                ref={progressRef}
                className="d-inline mx-3"
                style={{ width: "100px" }}
              >
                <option value={25}>25</option>
                <option value={50}>50</option>
                <option value={75}>75</option>
                <option value={100}>100</option>
              </Form.Select>
              % of this chalenge.
            </div>
            <div className="form-group">
              <div className="form-floating mb-3">
                <input
                  ref={commentRef}
                  type="text"
                  className="form-control"
                  id="floatingInput"
                  placeholder="Your progress comment.."
                />
                <label for="floatingInput">Your progress comment..</label>
              </div>
            </div>
            <button type="submit" className="btn btn-success me-2">
              Update
            </button>
            <button
              type="button"
              class="btn btn-warning"
              onClick={() => setProgressInput(false)}
            >
              Cancel
            </button>
            <button type="button" class="btn btn-link">
              I've finished the challenge
            </button>
          </Form>
        )}
      </div>
      <Toast />
    </div>
  );
};

export default ChallengeTimeline;
