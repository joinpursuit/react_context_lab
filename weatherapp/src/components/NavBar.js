import React from "react";
import { NavLink } from "react-router-dom";
import DarkModeUpdater from "../components/darkModeUpdater"
import "../css/NavBar.css";
import DarkModeProvider from "../providers/darkModeProvider";

const NavBar = (darkMode) => {
    return(
        <> 
        <nav>
            <p>Heyy</p>
            <DarkModeProvider><DarkModeUpdater/></DarkModeProvider>
            <NavLink className="links" exact to={"/"}>Home</NavLink>
            <NavLink className="links" to={"/WeatherApp"}>Weather App</NavLink>
        </nav>
        </>
    )
}

export default NavBar;