import React, { useContext, useEffect, useState } from "react";
import { Dropdown } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo/Logo2.png";
import user from "../../assets/navbar/profile.svg";
import { BsCoin, BsFillChatLeftTextFill } from "react-icons/bs";
import { FaHome, FaRegSun, FaUserAlt } from "react-icons/fa";
import { BiCategoryAlt } from "react-icons/bi";
import { currentContext } from "../../context/CurrentUser";
import "./Navbar.scss";
import { FirebaseContext } from "../../context/FirebaseContext";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";

const Header = () => {
  const { userData, currentUser, userLoading } = useContext(currentContext);
  const { auth } = useContext(FirebaseContext);
  const navigate = useNavigate();
  const [logged, setLogged] = useState(false);
  useEffect(() => {
    if (userData) {
      setLogged(true);
    } else {
      setLogged(false);
    }
  }, [userData]);
  const handleSignOut = () => {
    auth.signOut();
    navigate("/");
  };
  const [mobNav, setMobNav] = useState(false);
  const handleMobileNav = () => {
    setMobNav((prev) => !prev);
  };
  // useEffect(() => {
  //   console.log(currentUser);
  // }, [currentUser]);

  return (
    <section className="nav">
      <div className="container">
        <header className="d-flex align-items-center justify-content-between w-100 h-100">
          <div className="brand">
            <Link to={`${logged ? "/home" : "/"}`}>
              <img src={logo} alt="" />
            </Link>
          </div>
          <nav>
            <div className="nav-mobile ">
              <div
                id="nav-toggle"
                onClick={handleMobileNav}
                className={mobNav ? "active" : undefined}
              >
                <span></span>
              </div>
            </div>
            {logged && !userLoading ? (
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
                  <NavLink to="/categories">
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
                      <img
                        className="rounded-circle"
                        src={currentUser[0]?.photoUrl}
                        alt="user"
                      />
                    </Dropdown.Toggle>

                    <Dropdown.Menu className="bg-dark">
                      <Dropdown.Item className="d-flex align-items-center justify-content-around">
                        <Link role="link" to="/profile">
                          <span>Profile</span>
                        </Link>
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
                        <span>{currentUser[0]?.points}</span>
                        <BsCoin />
                      </Dropdown.Item>
                      <Dropdown.Item
                        onClick={handleSignOut}
                        className="d-flex align-items-center justify-content-around"
                      >
                        <span>Logout</span>
                        <BsCoin />
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </li>
              </ul>
            ) : (
              <ul className="nav-list list-unstyled  d-flex gap-4  align-items-center justify-content-center">
                <li className="link">
                  <NavLink to="/about">Why Chall.go</NavLink>
                </li>
                <li>
                  <Button variant="outline-primary" className="text-light">
                    Get Started
                  </Button>
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
