import React from "react";
import { NavLink } from "react-router-dom";
import "../css/NavBar.css";

const NavBar = () => {
  return (
    <div className="navBar">
      <nav>
        <ul>
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
