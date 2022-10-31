import React from "react";
import "./Hero.scss";

const Hero = (props) => {
  return (
    <div className="hero d-flex align-items-center justify-content-center ">
      <div className="container">
        <h1 className="w-lg-50 w-md-75 w-100">
          Move on <span className="text-uppercase colored">Challenger</span>
          <div>
            and make more{" "}
            <span className="text-uppercase colored">Challenges</span>
          </div>
          <div className="text-uppercase colored">You Can!</div>
        </h1>
        <button onClick={props.openAuthModal}>Start Challenge</button>
      </div>
    </div>
  );
};

export default Hero;
