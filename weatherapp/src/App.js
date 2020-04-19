import React, { useState, useContext } from 'react';
import logo from './logo.svg';
import { Route, Switch } from "react-router-dom";
import './App.css';
import WeatherApp from "./components/weatherHome"
import Home from "./components/home"
import NavBar from './components/NavBar';
import DarkContext from "./providers/darkModeProvider"

function App() {
  const [ darkMode, setDarkMode] = useState(false)
  

  return (
    <div className={darkMode? "dark-mode": "light-mode"}>
     <NavBar darkMode = {darkMode}/>
    <Switch>
      
    <Route exact path={"/"} component={Home}/>
    <Route path={"/WeatherApp"} component={WeatherApp}/>
    <Route component={Error} />
      <Route component={Home} />



      </Switch>
    </div>
    
  );
}

export default App;
