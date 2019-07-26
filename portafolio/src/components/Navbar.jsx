import React from "react";
//import {Link} from 'react-router-dom'
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark navbar-static navbar-static-top navbar-fixed-top">
      <a className="navbar-brand" href="#Home">
        <img
          src={require("../images/CN.png")}
          alt="home_img"
          className="img-fluid home-img"
        />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarColor01"
        aria-controls="navbarColor01"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarColor01">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <a className="nav-link" href="#AboutMe">
              About Me <span className="sr-only" />
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#Hobbies">
              Hobbies
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#Portfolio">
              Portfolio
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link" target='_blank' rel="noopener noreferrer"
              href="https://drive.google.com/file/d/1K-TWa1ykc22T6wWknOXV-_ZNdG1YSXsM/view?usp=sharing"
            >
              Curriculum
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#ContactMe">
              Let's talk
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
