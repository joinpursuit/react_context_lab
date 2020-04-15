import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navLink">
      <NavLink exact to={"/"}>HOME</NavLink>
      <NavLink to={"/weather"}>Weather</NavLink>
      <NavLink to={"/clock"}>Clock</NavLink>
    </nav>
  )
}
export default NavBar;