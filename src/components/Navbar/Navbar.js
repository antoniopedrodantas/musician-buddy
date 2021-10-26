import React from "react";
import { GiMusicalScore } from "react-icons/gi";

// Styling
import "./Navbar.css";

export function Navbar() {
  return (
    <nav className="navbar">
      <h1>
        <a className="navbar-logo" href="#home-page-container">
          <GiMusicalScore size={40} />
        </a>
      </h1>
      <ul className="nav-menu">
        <li>
          <a className="nav-links" href="#bpm-page-container">
            Bpm
          </a>
          <a className="nav-links" href="#tuner-page-container">
            Tuner
          </a>
          <a className="nav-links" href="#about-page-container">
            About
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
