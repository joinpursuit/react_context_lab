import React from "react"
import { NavLink } from "react-router-dom"

const NavBar = () => {
    return (
        <nav>
            <NavLink exact to ={"/"} activeClassName={"selected"}>HOME</NavLink>
            <NavLink exact to ={"/weather"} activeClassName={"selected"}>WEATHER</NavLink>
            <NavLink exact to ={"/clock"} activeClassName={"selected"}>CLOCK</NavLink>
            <button className="darkMode" value="dark">Dark Theme</button>
            <button className="lightMode" value="light">Light Theme</button>
        </nav>
    )
}

export default NavBar;