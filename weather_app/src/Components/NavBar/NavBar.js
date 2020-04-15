import React from "react";
import { NavLink } from "react-router-dom";
import "./Css/navBar.css";
import weatherImg from "../../images/partly-cloudy-day-128.png";
import homeImg from "../../images/home-4-128.png";
import clockImg from "../../images/clock-128.png";
const NavBar = () => {
  return (
    <div className="navBody">
      <div className="NavBar">
        <div className="container">
          <NavLink className="link" exact to="/">
            <img id="weather" alt="" src={homeImg}></img>
          </NavLink>
          <NavLink className="link" exact to="/weather">
            <img id="weather" alt="" src={weatherImg}></img>
          </NavLink>
          <NavLink className="link" exact to="/clock">
            <img id="weather" alt="" src={clockImg}></img>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
