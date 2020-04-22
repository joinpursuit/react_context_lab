import React, { useContext } from 'react';
import { NavLink } from "react-router-dom";
import { ThemeContext } from '../provider/ThemeProvider';
import "../css/NavBar.css";

const NavBar = () => {
  const { toggleTheme, theme } = useContext(ThemeContext);
  return (
    <nav className={theme}>
      <NavLink exact to={"/"}>HOME</NavLink>
      <NavLink to={"/weather"}>Weather</NavLink>
      <NavLink to={"/clock"}>Clock</NavLink>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </nav>
  )
}
export default NavBar;