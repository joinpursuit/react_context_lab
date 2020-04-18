import React, { useContext } from "react"
import "./css/Nav.css"
import { NavLink } from "react-router-dom"
import { ThemeContext } from "../src/providers/ThemeProvider"
import { setTheme } from "../src/actions/themeActions"


const NavBar = () => {
    const { dispatch, theme } = useContext(ThemeContext)

    const handleClick = (e) => {
        dispatch(setTheme(e.target.value))
    }

    return (
        <nav>
            <NavLink exact to ={"/"} activeClassName={"selected"}>HOME</NavLink>
            <NavLink exact to ={"/weather"} activeClassName={"selected"}>WEATHER</NavLink>
            <NavLink exact to ={"/clock"} activeClassName={"selected"}>CLOCK</NavLink>
            <button className={`${theme}-btn`} value="dark" onClick={handleClick}>Dark Theme</button>
            <button className={`${theme}-btn`} value="light" onClick={handleClick}>Light Theme</button>
        </nav>
    )
}

export default NavBar;