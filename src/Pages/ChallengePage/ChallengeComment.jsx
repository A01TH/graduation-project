import { useState } from "react";
import ContentLoader from "react-content-loader";

const ChallengeComment = ({ comment, participants }) => {
  const challenger = participants.find(
    (participant) => (participant.uid = comment.uid)
  );
  if (!challenger) {
    return (
      <div>
        <ContentLoader
          width={1000}
          height={100}
          viewBox="0 0 1000 100"
          backgroundColor="#ccc"
          foregroundColor="#000"
        >
          <circle cx="10" cy="20" r="8" />
          <rect x="25" y="15" rx="5" ry="5" width="220" height="10" />
        </ContentLoader>
      </div>
    );
  }
  return (
    <>
      <div className="row">
        <div className="col-1">
          <img
            src={challenger.photoUrl}
            alt={challenger.name}
            className="img-fluid"
          />
        </div>
        <div className="col-10">
          <div>
            {challenger.name} has finished {comment.progress}% of the challenge
          </div>
          <div className="comment text-muted">{comment.comment}</div>
        </div>
      </div>
      <hr />
    </>
  );
};

export default ChallengeComment;
