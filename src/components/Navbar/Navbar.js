import React from "react";
import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <nav>
      <h1>
        <Link to="/">Musician Buddy</Link>
      </h1>
      <ul>
        <li>
          <Link to="/bpm-counter">Bpm</Link>
          <Link to="/tuner">Tuner</Link>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
