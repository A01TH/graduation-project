import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import "./AuthModal.scss";

const AuthModal = (props) => {
  const [showLogin, setShowLogin] = useState(true);
  const registerHandler = () => {
    setShowLogin(false);
  };

  const loginHandler = () => {
    setShowLogin(true);
  };

  return (
    <Modal
      show={props.openAuthModal}
      onHide={props.closeAuthModal}
      animation={false}
      className="auth-modal"
    >
      <Modal.Header closeButton className="border-0">
        <div className="d-flex justify-content-center align-items-center w-100">
          <button
            className={`btn m-2 ${
              showLogin ? "btn-selected" : "btn-unselected"
            }`}
            onClick={loginHandler}
          >
            Login
          </button>
          <button
            className={`btn m-2 ${
              showLogin ? "btn-unselected" : "btn-selected"
            }`}
            onClick={registerHandler}
          >
            Register
          </button>
        </div>
      </Modal.Header>
      <Modal.Body>
        {showLogin ? <div>Login</div> : <div>Register</div>}
      </Modal.Body>
    </Modal>
  );
};

export default AuthModal;
