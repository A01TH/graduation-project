import React, { useContext, useState } from "react";
import { Form } from "react-bootstrap";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { useParams } from "react-router-dom";
import { FirebaseContext } from "../../context/FirebaseContext";
import ChallengeComment from "./ChallengeComment";

const ChallengeTimeline = () => {
  const { challengeCollection } = useContext(FirebaseContext);
  const [challenge, challengeLoading] = useCollectionData(challengeCollection);
  const [progressInput, setProgressInput] = useState(false);

  if (challengeLoading) {
    return <h1>Loading</h1>;
  }
  return (
    <div className="card bg-light border border-primary">
      <div className="card-header">
        <h3>{challenge[0].title}</h3>
        <p>{challenge[0].description}</p>
      </div>
      <div className="card-body">
        <div className="comments">
          {challenge[0].postComments.map((comment) => {
            <ChallengeComment />;
          })}
        </div>
        <div class="progress">
          <div
            class="progress-bar progress-bar-striped progress-bar-animated me-2"
            role="progressbar"
            style="width: 20%;"
            aria-valuenow="20"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
          <div
            class="progress-bar progress-bar-striped progress-bar-animated bg-success"
            role="progressbar"
            style="width: 20%;"
            aria-valuenow="20"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
          <div
            class="progress-bar progress-bar-striped progress-bar-animated bg-info"
            role="progressbar"
            style="width: 20%;"
            aria-valuenow="20"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
          <div
            class="progress-bar progress-bar-striped progress-bar-animated bg-warning"
            role="progressbar"
            style="width: 20%;"
            aria-valuenow="20"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
          <div
            class="progress-bar progress-bar-striped progress-bar-animated bg-danger"
            role="progressbar"
            style="width: 20%;"
            aria-valuenow="20"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
        {!progressInput ? (
          <div>
            <button className="btn btn-primary">Update progress</button>
          </div>
        ) : (
          <Form>
            <div className="form-group">
              <label for="customRange3" class="form-label">
                Progress
              </label>
              <input
                type="range"
                class="form-range"
                min="0"
                max="100"
                step="10"
                id="customRange3"
              />
            </div>
            <div class="form-group">
              <div class="form-floating mb-3">
                <input
                  type="email"
                  class="form-control"
                  id="floatingInput"
                  placeholder="Your progress comment.."
                />
                <label for="floatingInput">Your progress comment..</label>
              </div>
            </div>
          </Form>
        )}
      </div>
    </div>
  );
};

export default ChallengeTimeline;
