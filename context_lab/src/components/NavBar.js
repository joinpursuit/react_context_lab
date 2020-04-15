import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>SunnyDaze</li>
          <li>
            <NavLink exact to="/">
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/weather">
              WEATHER
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
