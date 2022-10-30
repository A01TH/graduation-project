import React, { useState } from "react";
import "./Navbar.scss";
const Header = () => {
  const [logged, setLogged] = useState(false);
  return (
    <div className="navbar">
      <header>
        <div className="logo">
          <h1>LOGO</h1>
        </div>
        {logged ? (
          <nav>
            <ul>
              <li>Home</li>
              <li>Categories</li>
              <li>Messages</li>
              <li>Profile</li>
            </ul>
          </nav>
        ) : (
          <div className="nav-button">
            <button>Get Started</button>
          </div>
        )}
      </header>
    </div>
  );
};

export default Header;
