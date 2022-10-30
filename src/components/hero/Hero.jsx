import React from "react";
import "./Hero.scss";

const Hero = () => {
  return (
    <div class="hero">
      <div class="container">
        <h1>
          Move on <span className="text-uppercase colored">Challenger</span>
          <div>
            and make more{" "}
            <span className="text-uppercase colored">Challenges</span>
          </div>
          <div className="text-uppercase colored">You Can!</div>
        </h1>
        <button>Start Challenge</button>
      </div>
    </div>
  );
};

export default Hero;
