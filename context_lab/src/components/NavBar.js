import React from "react";
import { NavLink } from "react-router-dom";
import "../css/NavBar.css";
import sun from "../images/sun.png";

const NavBar = () => {
  return (
    <div className="navBar">
      <nav>
        <ul>
          <img id="sun" src={sun} alt="sun" />
          <li id="navTitle">SunnyDaze</li>
          <li>
            <NavLink exact to="/" className="link">
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/weather" className="link">
              WEATHER
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
