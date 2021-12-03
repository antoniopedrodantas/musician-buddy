import React, { useState } from "react";
import { FaTimes, FaBars } from "react-icons/fa";
import { GiMusicalScore } from "react-icons/gi";

// Styling
import "./Navbar.css";

export function Navbar() {

  // clicked state
  const [clicked, setClicked] = useState(false);

  // handles click from hamburguer menu
  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <nav className="navbar">
      <h1>
        <a className="navbar-logo" href="#home-page-container">
          <GiMusicalScore size={40} />
        </a>
      </h1>
      <div className="menu-icon" onClick={handleClick}>
        <i className="icon"> {clicked ? <FaTimes /> : <FaBars />} </i>
      </div>
      <ul className={clicked ? "nav-menu active" : "nav-menu"}>
        <li>
          <a className="nav-links" href="#bpm-page-container" onClick={handleClick}>
            Bpm
          </a>
          <a className="nav-links" href="#tuner-page-container" onClick={handleClick}>
            Tuner
          </a>
          <a className="nav-links" href="#about-page-container" onClick={handleClick}>
            About
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
