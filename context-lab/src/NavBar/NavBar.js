import React from "react";
import { NavLink } from "react-router-dom";
import Home from '../Components/Home'
import {ThemeContext} from '../App'
import Weather from '../Components/Weather'
import Clock from '../Components/Clock'
const NavBar = () => {
  const {toggleTheme, theme} = useContext(ThemeContext)
  return (
    <div className={theme}>
      <NavLink className="Home" exact to="/">Home</NavLink>
      <NavLink className="Clock" to="/clock">Clock</NavLink>
      <NavLink className="Weather" to="/weather">Weather</NavLink>
   <button onClick={toggleTheme}>Toggle</button>
    </div>
  );
};

export default NavBar;
