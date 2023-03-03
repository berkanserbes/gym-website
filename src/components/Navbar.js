import React, { useState } from "react";
import logo from "../assets/images/logo.png";
import { Link } from "react-scroll";

function Navbar() {
  const [nav, setNav] = useState(false);

  const changeBackground = () => {
    window.scrollY >= 50 ? setNav(true) : setNav(false);
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <nav className={nav ? "nav-active" : "nav"}>
      <Link to="#" className="logo">
        <img src={logo} alt="logo" />
      </Link>
      <input className="menu-btn" type="checkbox" id="menu-btn" />
      <label className="menu-icon" for="menu-btn">
        <span className="nav-icon"></span>
      </label>
      <ul className="menu">
        <li>
          <Link to="#" />
          Header
        </li>
        <li>
          <Link to="#" />
          Features
        </li>
        <li>
          <Link to="#" />
          Offer
        </li>
        <li>
          <Link to="#" />
          About
        </li>
        <li>
          <Link to="#" />
          Contact
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
