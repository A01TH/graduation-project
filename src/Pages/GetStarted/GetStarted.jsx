import React, { useState } from "react";
import AuthModal from "../../components/AuthModal/AuthModal";
import Background from "../../components/background/Background";
import Hero from "../../components/hero/Hero";

const GetStarted = () => {
  const [authOpened, setAuthOpened] = useState(false);
  const openAuth = () => {
    setAuthOpened(true);
  };
  const closeAuth = () => {
    setAuthOpened(false);
  };

  return (
    <>
      <Background />
      <Hero openAuthModal={openAuth} />
      {authOpened && (
        <AuthModal openAuthModal={openAuth} closeAuthModal={closeAuth} />
      )}
    </>
  );
};

export default GetStarted;
