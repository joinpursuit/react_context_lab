import React, { useContext } from "react";
import { ThemeContext } from '../provider/ThemeProvider';
import '../css/Home.css';


const Home = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={theme}>
      <h1>Welcome To Bright Widget App</h1>
      <h4>Check our five day forecast of the coming weeks!</h4> 
    </div>
  )
}
export default Home;

