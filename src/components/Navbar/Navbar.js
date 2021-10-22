import React from "react";
import { Link } from "react-router-dom";
import { GiMusicalScore } from "react-icons/gi";

// Styling
import "./Navbar.css";

export function Navbar() {
  return (
    <nav className="navbar">
      <h1>
        <Link className="navbar-logo" to="/">
          <GiMusicalScore size={40} />
        </Link>
      </h1>
      <ul className="nav-menu">
        <li>
          <Link className="nav-links" to="/bpm-counter">
            Bpm
          </Link>
          <Link className="nav-links" to="/tuner">
            Tuner
          </Link>
          <Link className="nav-links" to="/about">
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
