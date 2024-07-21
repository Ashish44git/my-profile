import React from "react";
import { useState } from "react";
import { Link } from "react-scroll";
import logo from "../../assets/logo.png";
import "./navbar.css";
import menu from "../../assets/menu.png";
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="navbar">
      <Link
        activeClass="active"
        to="intro"
        spy={true}
        smooth={100}
        offset={-100}
        className="heading"
      >
        <img src={logo} alt="" className="logo" />
      </Link>
      <div className="lap-menu">
        <Link
          activeClass="active"
          to="intro"
          spy={true}
          smooth={100}
          offset={-100}
          className="menu-items"
          selected
        >
          Home
        </Link>
        <Link
          activeClass="active"
          to="About"
          spy={true}
          smooth={100}
          offset={-100}
          className="menu-items"
        >
          About
        </Link>
        <Link
          activeClass="active"
          to="projects"
          spy={true}
          smooth={100}
          offset={-100}
          className="menu-items"
        >
          Projects
        </Link>
        <Link
          activeClass="active"
          to="more"
          spy={true}
          smooth={100}
          offset={-100}
          className="menu-items"
        >
          More
        </Link>
      </div>
      <a href="https://drive.google.com/file/d/1o9s43nz4n69l4rHq71P_2R96s1kSE9eK/view?usp=drivesdk">
        {" "}
        <button className="resume-btn">Resume</button>
      </a>

      <img
        src={menu}
        className="burger"
        onClick={() => setShowMenu(!showMenu)}
      />

      <div className="mob-menu" style={{ display: showMenu ? "flex" : "none" }}>
        <Link
          activeClass="active"
          to="intro"
          spy={true}
          smooth={100}
          offset={-100}
          className="mob-menu-items"
          onClick={() => {
            setShowMenu(false);
          }}
        >
          Home
        </Link>
        <Link
          activeClass="active"
          to="About"
          spy={true}
          smooth={100}
          offset={-100}
          className="mob-menu-items"
          onClick={() => {
            setShowMenu(false);
          }}
        >
          About
        </Link>
        <Link
          activeClass="active"
          to="projects"
          spy={true}
          smooth={100}
          offset={-100}
          className="mob-menu-items"
          onClick={() => {
            setShowMenu(false);
          }}
        >
          Projects
        </Link>

        <Link
          activeClass="active"
          to="more"
          spy={true}
          smooth={100}
          offset={-100}
          className="mob-menu-items"
          onClick={() => {
            setShowMenu(false);
          }}
        >
          More
        </Link>
        <a
          href="https://drive.google.com/file/d/1o9s43nz4n69l4rHq71P_2R96s1kSE9eK/view?usp=drivesdk"
          className="mob-menu-items"
        >
          {" "}
          Resume
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
