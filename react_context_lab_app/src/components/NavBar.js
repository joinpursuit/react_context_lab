import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const NavBar = () => {
  return (
    <div>
      <nav id="topNav">
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
      </nav>
    </div>
  );
};

export default NavBar;
