import React, {useContext} from 'react'
import { NavLink } from 'react-router-dom'
import '../css/NavBar.css'
import { ThemeContext } from '../providers/ThemeProvider'
// import Weather from '../components/WeatherComponenet'
// import Clock from '../components/ClockComponent'

const NavBar = () => {
const { themes, toggleThemes } = useContext(ThemeContext);

  return(
    <nav className={ themes }>
      <div className="navBar"> 
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
          <div className="dropdown">
            <button classname="styleNavButton" onClick={ toggleThemes }> Random Theme!
            <i> </i>  
            </button>
              {/* <div className="dropDownThemes">
                <a> Default </a>
                <a> Dark </a>
                <a> Harry Potter </a>
                <a> Neon </a>
              </div> */}

          </div> 


          
      </div>
    </nav>  
  )
}

export default NavBar