import React, { useContext } from "react";
import { SecondUserContext } from "../../../context/SecondUserContext";

function User({ user }) {
  const { secondUser, setSecondUser } = useContext(SecondUserContext);

  return (
    <>
      <div
        key={user.uid}
        className={`contact-user d-flex gap-2 align-items-center p-2 ps-3 active-chat-user ${
          user?.id === secondUser?.uid && "selected"
        }`}
        onClick={() => setSecondUser(user)}
      >
        <img className="rounded-circle" src={user.photoUrl} alt="" />
        <div>
          <span>{user.name}</span>
          <p>hi how are you</p>
        </div>
      </div>
    </>
  );
}

export default User;
