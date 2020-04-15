import React from "react";
import { NavLink } from "react-router-dom";
import Home from '../Components/Home'
import Weather from '../Components/Weather'
import Clock from '../Components/Clock'
const NavBar = () => {
  return (
    <div className="NavBar">
      <NavLink className="Home" exact to="/">Home</NavLink>
      <NavLink className="Clock" exact to="/clock">Clock</NavLink>
      <NavLink className="Weather" exact to="/weather">Weather</NavLink>
   
    </div>
  );
};

export default NavBar;
