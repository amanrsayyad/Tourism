import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  //scroll header logic
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 900) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  //header logic
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  const closeMobileMenu = () => setClick(false);

  return (
    <div className={navbar ? "header scroll" : "header"}>
      <div className="header__left">
        <Link to="/">
          {/* <img src={logo4} alt="" className="header_logo" /> */}TOURISM
        </Link>
      </div>
      <div className="header_right">
        <div className="header__icons">
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <Link to="/" onClick={closeMobileMenu}>
              Home
            </Link>
            <Link to="/Gallery" onClick={closeMobileMenu}>
              Gallery
            </Link>
            <Link to="/About" onClick={closeMobileMenu}>
              About Us
            </Link>
            <Link to="/Tour" onClick={closeMobileMenu}>
              Tourism
            </Link>
          </ul>
          <div className="menu_icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;