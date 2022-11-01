import React, { useState } from "react";
import { Dropdown } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo/Logo2.png";
import user from "../../assets/navbar/nav-user.png";
import { BsCoin, BsFillChatLeftTextFill } from "react-icons/bs";
import { FaHome, FaRegSun, FaUserAlt } from "react-icons/fa";
import { BiCategoryAlt } from "react-icons/bi";

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
                  <NavLink to="/home">
                    <FaHome className="me-2" />
                    Home
                  </NavLink>
                </li>
                <li className="link">
                  <NavLink to="/categoris">
                    <BiCategoryAlt className="me-2" />
                    Categories
                  </NavLink>
                </li>
                <li className="link">
                  <NavLink to="/messages">
                    <BsFillChatLeftTextFill className="me-2" />
                    Messages
                  </NavLink>
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
                      <Dropdown.Item
                        href="#/action-1"
                        className="d-flex align-items-center justify-content-around"
                      >
                        <span>Profile</span>
                        <FaUserAlt />
                      </Dropdown.Item>
                      <Dropdown.Item
                        href="#/action-2"
                        className="d-flex align-items-center justify-content-around"
                      >
                        <span>Settings</span>
                        <FaRegSun />
                      </Dropdown.Item>
                      <Dropdown.Item
                        href="#/action-3"
                        className="d-flex align-items-center justify-content-around"
                      >
                        <span>Connects</span>
                        <BsCoin />
                      </Dropdown.Item>
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
