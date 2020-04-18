import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

import { ThemeContext } from "../providers/ToggleProvider";

const NavBar = () => {
  const { toggleTheme, theme } = useContext(ThemeContext);

  return (
    <nav id="topNav" className={theme}>
      <li id="home">
        <NavLink exact to={"/"}>
          Home
        </NavLink>
      </li>
      <li id="weather">
        <NavLink to={"/weather"}>Weather</NavLink>
      </li>
      <li id="clock">
        <NavLink to={"/clock"}>Clock</NavLink>
      </li>
      <div className="toggleDiv">
        <p>LIGHT MODE</p>
        <label className="switch">
          <input type="checkbox" onClick={toggleTheme} />
          <span className="slider round"></span>
        </label>
        <p>DARK MODE</p>
      </div>
    </nav>
  );
};

export default NavBar;
