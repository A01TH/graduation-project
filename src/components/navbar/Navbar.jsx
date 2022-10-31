import React, { useState } from "react";
import { Dropdown } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo/Logo.png";
import user from "../../assets/navbar/nav-user.png";
import "./Navbar.scss";
const Header = () => {
  const [logged, setLogged] = useState(true);
  const [mobNav, setMobNav] = useState(false);
  const handleMobileNav = () => {
    setMobNav((prev) => !prev);
  };
  return (
    <section className="nav">
      <div className="container">
        <header className="d-flex align-items-center justify-content-between w-100 h-100">
          <div className="brand">
            <Link to="/">
              <img src={logo} alt="" />
            </Link>
          </div>
          <nav>
            <div className="nav-mobile ">
              <div
                id="nav-toggle"
                onClick={handleMobileNav}
                className={mobNav && "active"}
              >
                <span></span>
              </div>
            </div>
            {logged ? (
              <ul
                className={`nav-list list-unstyled  d-flex  d-flex gap-4 align-items-center justify-content-center ${
                  mobNav && "show"
                }`}
              >
                <li className="link">
                  <NavLink to="/home">Home</NavLink>
                </li>
                <li className="link">
                  <NavLink to="/home">Categories</NavLink>
                </li>
                <li className="link">
                  <NavLink to="/home">Messages</NavLink>
                </li>
                <li>
                  <Dropdown>
                    <Dropdown.Toggle
                      variant="transparent"
                      id="dropdown-basic"
                      className="border-0"
                    >
                      <img src={user} alt="user" />
                    </Dropdown.Toggle>

                    <Dropdown.Menu className="bg-transparent">
                      <Dropdown.Item href="#/action-1">Profile</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">Settings</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">Connects</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </li>
              </ul>
            ) : (
              <ul className="nav-list list-unstyled  d-flex gap-4  align-items-center justify-content-center">
                <li className="link">
                  <NavLink to="/home">Why Chall.go</NavLink>
                </li>
                <li>
                  <button className="btn btn-light">Get Started</button>
                </li>
              </ul>
            )}
          </nav>
        </header>
      </div>
    </section>
  );
};

export default Header;
