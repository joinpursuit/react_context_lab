import React, { useContext } from "react";
import {ThemeContext} from '../App'
// import ../css/Home.css
const Home = () => {
const {theme} = useContext(ThemeContext)
  return (
    <div className={theme}>
      <h1>Welcome to a widget app</h1>
      <h4>five day forecast </h4> 
    </div>
  )
}
export default Home;
