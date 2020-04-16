import React from "react";
import { NavLink } from "react-router-dom";
import Toggle from "./Toggle";


const NavBar = () => {
    return(
        <nav>
            <NavLink className="route" exact to={"/"}>Home</NavLink>
            <NavLink className="route" exact to={"/weather"}>Weather</NavLink>
            <NavLink className="route" exact to={"/clock"}>Clock</NavLink>
            <Toggle/>
        </nav>
    )
}

export default NavBar;