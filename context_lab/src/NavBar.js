import React from "react"
import { NavLink } from "react-router-dom"

const NavBar = () => {
    return (
        <nav>
            <NavLink exact to ={"/"} activeClassName={"selected"}>HOME</NavLink>
            <NavLink exact to ={"/weather"} activeClassName={"selected"}>WEATHER</NavLink>
            <NavLink exact to ={"/clock"} activeClassName={"selected"}>CLOCK</NavLink>
        </nav>
    )
}

export default NavBar;