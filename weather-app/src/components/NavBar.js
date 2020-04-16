import React from 'react'
import { NavLink } from 'react-router-dom'
// import '../css/NavBar.css'
// import Weather from '../components/WeatherComponenet'
// import Clock from '../components/ClockComponent'

const NavBar = () => {
    return (
       <div className="navBar">

       <nav> 

       <ul className="navUl">

          <li className="navLi">
            <NavLink exact to="/" className="nav-selected">
              Home
            </NavLink>
          </li>

          <li className="navLi">
            <NavLink exact to="/weather" className="nav-selected">
              Weather
            </NavLink>
          </li>

          <li className="navLi">
            <NavLink exact to="/clock" className="nav-selected">
              Clock
            </NavLink>
          </li>

        </ul>
       </nav>

       </div>  
    )
}

export default NavBar