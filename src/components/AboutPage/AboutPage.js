import React from "react";
import { AiOutlineInstagram, AiOutlineGithub } from "react-icons/ai";

// Styling
import "./AboutPage.css";

export function AboutPage() {
  return (
    <div className="about-page">
      <img
        src="https://i.imgur.com/ejDesaG.jpeg"
        alt="MusicianBuddy Creator"
        className="about-page-picture"
      />
      <div className="about-page-text">
        <p className="text-center-aligned">
          This web application was developed by António Pedro Dantas, Computer
          Science student @ FEUP
        </p>
        <p className="text-center-aligned">It is a non profit platform to ease musicians' lives</p>
      </div>
      <div className="about-page-links">
        <a
          className="about-page-links-item"
          href="https://github.com/antoniopedrodantas"
        >
          <AiOutlineGithub size={24} />
        </a>
        <a
          className="about-page-links-item"
          href="https://www.instagram.com/pedrodantaspedro/"
        >
          <AiOutlineInstagram size={24} />
        </a>
      </div>
    </div>
  );
}

export default AboutPage;
